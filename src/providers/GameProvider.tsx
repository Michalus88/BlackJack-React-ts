import React, { useState, createContext } from "react";

interface GameContextType {
  bet: number;
  setBet: (bet: number) => void;
}

export const GameContext = createContext<GameContextType>(null!);

export const GameProvider = ({ children }: { children: JSX.Element }) => {
  const [bet, setBet] = useState<number>(0);

  return (
    <GameContext.Provider value={{ bet, setBet }}>
      {children}
    </GameContext.Provider>
  );
};
