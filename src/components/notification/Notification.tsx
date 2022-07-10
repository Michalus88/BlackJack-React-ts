import React, { FC } from "react";
import { useNotification } from "../../hooks/useNotification";
import { Title } from "../title/title";
import { Wrapper } from "./notification.styles";

interface props {
  message: string;
  mode?: NotificationMode;
  title?: string;
}

export enum NotificationMode {
  SUCCESS = "success",
  WARMING = "warming",
  ERROR = "error",
}

export const Notification: FC<props> = ({
  message,
  mode = NotificationMode.ERROR,
  title,
}) => {
  const { dispatchNotification } = useNotification();
  const clouse = () => {
    dispatchNotification("");
  };

  const msgTitle = mode === NotificationMode.ERROR ? "Error !" : title ?? null;

  return (
    <Wrapper mode={mode}>
      <button onClick={clouse}>X</button>
      <Title>{msgTitle}</Title>
      <p>{message}</p>
    </Wrapper>
  );
};
