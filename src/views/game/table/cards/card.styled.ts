import styled from "styled-components";
import { PlayerContainer } from "../table.styled";
import { device, size } from "../../../../assets/style/breakPoints";
const baseUrl = "cards/";

export const CardsConteiner = styled(PlayerContainer)`
  position: relative;
  min-height: 200px;
  border-bottom: none;
  display: flex;
  align-items: center;
  @media (max-height: ${size.sm}) and (orientation: landscape) {
    min-height: 160px;
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    min-height: 130px;
    justify-content: center;
  }
`;

export const CardStyled = styled.div<{ imgName: string; translateX: number }>`
  width: 103px;
  height: 150px;
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  background: transparent;
  background-image: ${(props) => `url(${baseUrl}${props.imgName})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &:not(:first-child) {
    transform: ${(props) => `translateX(${props.translateX}%)`};
  }
  @media ${device.md} and (orientation: portrait) {
    left: 20%;
  }
  @media ${device.sm} and (orientation: portrait) {
    width: 81px;
    height: 120px;
    left: 20%;
  }
  @media (max-height: ${size.sm}) and (orientation: landscape) {
    width: 81px;
    height: 120px;
    left: 50%;
    bottom: 5px;
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    width: 69px;
    height: 100px;
    left: 50%;
    bottom: 5px;
  }
`;
