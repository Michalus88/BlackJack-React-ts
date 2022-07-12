import React, { FC, useContext } from "react";
import { Wrapper, PlayerContainer } from "./table.styled";
import { Cards } from "./cards/Cards";
import { GameContext } from "../../../providers/GameProvider";
import {
  Notification,
  NotificationMode,
} from "../../../components/notification/Notification";
import { useNotification } from "../../../hooks";

export const Table: FC = () => {
  const { player } = useContext(GameContext);
  const { message, mode } = useNotification();
  return (
    <Wrapper>
      {message && mode !== NotificationMode.ERROR && (
        <Notification mode={mode} message={message} />
      )}
      <PlayerContainer>
        <span>Dealer</span>
        <span>points: {player?.dealerPoints}</span>{" "}
      </PlayerContainer>
      <Cards cards={player?.dealerCards}></Cards>
      <PlayerContainer>
        <span>{player?.name}</span>
        <span>Your bet: {player?.playerBet}$</span>
        <span>points:{player?.playerPoints}</span>{" "}
      </PlayerContainer>
      <Cards cards={player?.playerCards}></Cards>
    </Wrapper>
  );
};
