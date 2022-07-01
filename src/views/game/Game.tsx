import React, { useContext, useEffect } from "react";
import { Dashboard } from "./dashboard/Dashboard";
import { Table } from "./table/Table";
import { PlayerDataRes } from "types";
import { useError } from "../../../src/hooks";
import { GameContext } from "../../providers/GameProvider";
import { Wrapper } from "./game.styled";

export const Game = () => {
  const { setPlayer } = useContext(GameContext);
  const { dispatchError } = useError();
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
