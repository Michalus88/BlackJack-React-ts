import styled from "styled-components";
import { PlayerContainer } from "../table.styled";
const baseUrl = "cards/";

export const CardsConteiner = styled(PlayerContainer)`
  position: relative;
  display: flex;
  border-bottom: none;
  min-height: 200px;
  align-items: center;
`;

export const CardStyled = styled.div<{ imgName: string; translateX: number }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 103px;
  height: 150px;
  background: black;
  background-image: ${(props) => `url(${baseUrl}${props.imgName})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &:not(:first-child) {
    transform: ${(props) => `translateX(${props.translateX}%)`};
  }
`;
