import styled, { keyframes } from "styled-components";
import { Title } from "../title/title";

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
    transform: translateX(-50%) translateY(500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

export const Wrapper = styled.div`
  min-width: 500px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10vh;
  background-color: black;
  padding: 25px 25px 15px;
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  box-shadow: 0px 1px 20px 0px ${({ theme }) => theme.colors.error};
  z-index: 100;
  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.error};
    cursor: pointer;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.error};
    width: 60px;
    height: 5px;
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
  }
`;
