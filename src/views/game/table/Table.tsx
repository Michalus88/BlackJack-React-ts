import React, { FC, useContext } from "react";
import { Wrapper, PlayerContainer, PlayerInfo } from "./table.styled";
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
        <PlayerInfo>
          <span>Dealer</span>
          <span>points: {player?.dealerPoints}</span>{" "}
        </PlayerInfo>
        <Cards cards={player?.dealerCards}></Cards>
      </PlayerContainer>
      <PlayerContainer>
        <PlayerInfo>
          <span>{player?.name}</span>
          <span>Your bet: {player?.playerBet}$</span>
          <span>points:{player?.playerPoints}</span>{" "}
        </PlayerInfo>
        <Cards cards={player?.playerCards}></Cards>
      </PlayerContainer>
    </Wrapper>
  );
};
