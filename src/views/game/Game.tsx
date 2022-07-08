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
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/api/game", {
          credentials: "include",
        });
        if (res.ok) {
          const playerRes = (await res.json()) as PlayerDataRes;
          setPlayer(playerRes);
        } else {
          setPlayer(null);
        }
      } catch (e) {
        console.log(e);
        dispatchError();
      }
    })();
  }, []);
  return (
    <GameProvider>
      <Wrapper>
        <Table />
        <Dashboard player={player} setPlayer={setPlayer} />
      </Wrapper>
    </GameProvider>
  );
};
