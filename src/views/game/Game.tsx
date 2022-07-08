import React, { useEffect } from "react";
import { useGameFetch } from "../../hooks/";
import { Dashboard } from "./dashboard/Dashboard";
import { Table } from "./table/Table";
import { Wrapper } from "./game.styled";

export const Game = () => {
  const { callApi, player } = useGameFetch();

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout;
    (async () => {
      if (player?.gameResult) {
        timeOutId = setTimeout(async () => {
          await callApi();
        }, 2000);
      }
    })();
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
