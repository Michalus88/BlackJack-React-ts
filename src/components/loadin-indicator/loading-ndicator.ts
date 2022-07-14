import styled, { keyframes } from "styled-components";
import { img } from "../../assets";

const flip = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

type LoadingIsize = "small" | "big";

export const LoadingIndicator = styled.div<{ size: LoadingIsize }>`
  min-width: 50%;
  display: inline-block;
  background-image: url(${img.logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: ${({ size }) => (size === "small" ? "39px" : "20%")};
  animation: ${flip} 5.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
