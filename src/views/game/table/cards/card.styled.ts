import styled from "styled-components";
import { PlayerContainer } from "../table.styled";
const baseUrl = "cards/";

export const CardsConteiner = styled(PlayerContainer)`
  position: relative;
  border-bottom: none;
  min-height: 200px;
  justify-content: center;
  align-items: center;
`;

export const CardStyled = styled.div<{ imgName: string }>`
  position: relative;
  width: 103px;
  height: 150px;
  background: black;
  background-image: ${(props) => `url(${baseUrl}${props.imgName})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &:nth-child(2) {
    transform: translateX(-50%);
  }
`;
