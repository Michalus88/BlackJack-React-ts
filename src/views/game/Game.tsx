import React, { useEffect, useState } from "react";
import { useNotification, useGameFetch } from "../../hooks/";
import { Dashboard } from "./dashboard/Dashboard";
import { Table } from "./table/Table";
import { Wrapper } from "./game.styled";
import { NotificationMode } from "../../components/notification/Notification";
import { LoadingIndicator } from "../../components/loadin-indicator/loading-ndicator";
import { Wrapper } from "./game.styled";

import { GameResult, NO_MEANS } from "./constants";

export const Game = () => {
  const { callApi, player, isLoading } = useGameFetch();
  const { dispatchNotification, message, mode } = useNotification();
  const [wasPrevMsg, setWasPrevMsg] = useState<boolean>(false);

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout;
    if (player?.means === 0 && player?.playerBet === 0) {
      dispatchNotification(NotificationMode.WARMING, NO_MEANS);
      return;
    }

    if (player?.gameResult) {
      console.log(player.gameResult);
      switch (player.gameResult) {
        case 1:
          dispatchNotification(NotificationMode.WARMING, GameResult.LOOSE);
          break;
        case 2:
          dispatchNotification(NotificationMode.INFO, GameResult.DROW);
          break;
        case 3:
          dispatchNotification(NotificationMode.SUCCESS, GameResult.WIN);
          break;
        default:
          dispatchNotification(
            NotificationMode.ERROR,
            "Given game result status don't egsist"
          );
          break;
      }
    }
  }, [player]);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout;
    if (message === NO_MEANS) return;
    if (mode !== NotificationMode.ERROR) {
      if (wasPrevMsg) {
        setWasPrevMsg(false);
        (async () => {
          timeOutId = setTimeout(async () => {
            await callApi();
          }, 1000);
          return;
        })();
      }
      if (message) {
        setWasPrevMsg(true);
      }
    }

    return () => {
      clearTimeout(timeOutId);
    };
  }, [message]);

  return (
    <Wrapper>
      {isLoading || !player ? (
        <LoadingIndicator size="big" />
      ) : (
        <>
          <Table />
          <Dashboard />
        </>
      )}
    </Wrapper>
  );
};
