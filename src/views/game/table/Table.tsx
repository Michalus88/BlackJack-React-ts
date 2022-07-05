import React, { FC, useContext } from "react";
import { Wrapper, PlayerContainer } from "./table.styled";
import { Cards } from "./cards/Cards";
import { GameContext } from "../../../providers/GameProvider";

export const Table: FC = () => {
  const { player } = useContext(GameContext);

  return (
    <Wrapper>
      <PlayerContainer>
        <span>Dealer</span>
        <span>points: {player?.dealerPoints}</span>{" "}
      </PlayerContainer>
      <Cards cards={player?.dealerCards}></Cards>
      <PlayerContainer>
        <span>{player?.name}</span>
        <span>points:{player?.playerPoints}</span>{" "}
      </PlayerContainer>
      <Cards cards={player?.playerCards}></Cards>
    </Wrapper>
  );
};
