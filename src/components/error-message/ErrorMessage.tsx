import React, { FC } from "react";
import { useError } from "../../hooks/useError";
import { Title } from "../title/title";
import { Wrapper } from "./errorMessage.styles";

interface props {
  message: string;
}

export const ErrorMessage: FC<props> = ({ message }) => {
  const { dispatchError } = useError();
  const clouse = () => {
    dispatchError("");
  };

  return (
    <Wrapper>
      <button onClick={clouse}>X</button>
      <Title>Error!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};
