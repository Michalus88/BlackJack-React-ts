import React, { FC } from "react";
import { useNotification } from "../../hooks/useNotification";
import { Title } from "../title/title";
import { Wrapper } from "./notification.styles";

interface props {
  mode: NotificationMode;
  message: string;
  title?: string;
}

export enum NotificationMode {
  INFO = "info",
  SUCCESS = "success",
  WARMING = "warming",
  ERROR = "error",
}

export const Notification: FC<props> = ({ mode, message, title }) => {
  const { dispatchNotification } = useNotification();
  const clouse = () => {
    dispatchNotification(mode, "");
  };

  const msgTitle = mode === NotificationMode.ERROR ? "Error !" : title ?? null;

  return (
    <Wrapper mode={mode}>
      <button onClick={clouse}>X</button>
      {msgTitle && <Title>{msgTitle}</Title>}
      <p>{message}</p>
    </Wrapper>
  );
};
