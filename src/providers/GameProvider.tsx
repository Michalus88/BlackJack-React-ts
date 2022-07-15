import React, { useState, createContext } from "react";
import { PlayerDataRes } from "types";

interface GameContextType {
  bet: number;
  setBet: (bet: number) => void;
  player: PlayerDataRes | null;
  setPlayer: (player: PlayerDataRes | null) => void;
}

export const GameContext = createContext<GameContextType>(null!);

export const GameProvider = ({ children }: { children: JSX.Element }) => {
  const [player, setPlayer] = useState<PlayerDataRes | null>(null);
  const [bet, setBet] = useState<number>(0);

  return (
    <GameContext.Provider value={{ bet, setBet, player, setPlayer }}>
      {children}
    </GameContext.Provider>
  );
};
