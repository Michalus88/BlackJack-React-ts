import styled, { keyframes } from "styled-components";
import { Title } from "../title/title";
import { NotificationMode } from "./Notification";
import { device, size } from "../../assets/style/breakPoints";

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }
  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(-500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

export const Wrapper = styled.div<{ mode: NotificationMode }>`
  min-width: 500px;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  padding: 25px 25px 15px;
  border: 1px solid
    ${({ theme, mode }) =>
      mode === NotificationMode.ERROR
        ? theme.colors.error
        : mode === NotificationMode.SUCCESS
        ? theme.colors.lightgreen
        : mode === NotificationMode.WARMING
        ? theme.colors.warming
        : theme.colors.white};
  color: ${({ theme, mode }) =>
    mode === NotificationMode.ERROR
      ? theme.colors.error
      : mode === NotificationMode.SUCCESS
      ? theme.colors.lightgreen
      : mode === NotificationMode.WARMING
      ? theme.colors.warming
      : theme.colors.white};
  box-shadow: 0px 1px 20px 0px
    ${({ theme, mode }) =>
      mode === NotificationMode.ERROR
        ? theme.colors.error
        : mode === NotificationMode.SUCCESS
        ? theme.colors.lightgreen
        : mode === NotificationMode.WARMING
        ? theme.colors.warming
        : theme.colors.white};
  z-index: 1000;
  @media ${device.md} {
    min-width: 90vw;
    width: 90vw;
  }
  @media (max-height: ${size.sm}) and (orientation: landscape) {
    top: 15vh;
  }
  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 4s ease-in-out 1 reverse forwards;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: inherit;
    color: ${({ theme, mode }) =>
      mode === NotificationMode.ERROR
        ? theme.colors.error
        : mode === NotificationMode.SUCCESS
        ? theme.colors.lightgreen
        : mode === NotificationMode.WARMING
        ? theme.colors.warming
        : theme.colors.white};
    cursor: pointer;
  }

  &::before,
  &::after {
    width: 60px;
    height: 5px;
    position: absolute;
    top: 15px;
    left: 50%;
    content: "";
    transform: translateX(-50%);
    border-radius: 50px;
    background-color: ${({ theme, mode }) =>
      mode === NotificationMode.ERROR
        ? theme.colors.error
        : mode === NotificationMode.SUCCESS
        ? theme.colors.lightgreen
        : mode === NotificationMode.WARMING
        ? theme.colors.warming
        : theme.colors.white};
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 3s 1s linear 1 forwards;
  }
`;
