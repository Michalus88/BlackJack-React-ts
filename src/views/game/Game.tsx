import React, { useEffect } from "react";
import { useNotification, useGameFetch } from "../../hooks/";
import { Dashboard } from "./dashboard/Dashboard";
import { Table } from "./table/Table";
import { Wrapper } from "./game.styled";
import { NotificationMode } from "../../components/notification/Notification";

export const Game = () => {
  const { callApi, player } = useGameFetch();
  const { dispatchNotification } = useNotification();

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout;
    if (player?.means === 0 && player?.playerBet === 0) {
      dispatchNotification(null, NotificationMode.WARMING);
    } else {
      (async () => {
        if (player?.gameResult) {
          timeOutId = setTimeout(async () => {
            await callApi();
          }, 2000);
        }
      })();
    }

    return () => {
      clearTimeout(timeOutId);
    };
  }, [player]);

  return (
    <Wrapper>
      <Table />
      <Dashboard />
    </Wrapper>
  );
};
