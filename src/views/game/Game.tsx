import React, { useEffect, useState } from "react";
import { Dashboard } from "./dashboard/Dashboard";
import { Wrapper } from "./game.styled";
import { Table } from "./table/Table";
import { PlayerDataRes } from "types";
import { useError } from "../../../src/hooks";
import { GameProvider } from "../../providers/GameProvider";

export const Game = () => {
  const [player, setPlayer] = useState<PlayerDataRes | null>(null);
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
  });
  return (
    <GameProvider>
      <Wrapper>
        <Table />
        <Dashboard player={player} />
      </Wrapper>
    </GameProvider>
  );
};
