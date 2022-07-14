import styled from "styled-components";
import { Button } from "../../../components/button/button";
import { device, size } from "../../../assets/style/breakPoints";

export const Wrapper = styled.div`
  margin: 10px;
  width: 800px;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: space-evenly;
  @media ${device.md} and (orientation: portrait) {
    width: 100vw;
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    width: 100%;
  }
`;

export const BtnsGroup = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-evenly;
  @media ${device.md} and (orientation: portrait) {
    margin-top: 10px;
    justify-content: space-space-between;
    align-content: center;
    flex-wrap: wrap;
  }
`;

export const BetButton = styled(Button)`
  position: relative;
  padding: 5px 30px 15px 30px;
  @media ${device.md} and (orientation: portrait) {
    width: 90%;
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    margin-right: 7vw;
    width: 40vw;
  }
  @media (max-height: ${size.sm}) and (orientation: landscape) {
    margin-right: 7vw;
    width: 40vw;
  }
`;

export const BetDisplay = styled.span`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.lightgreen};
`;

export const MeansDisplay = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  @media ${device.md} {
    margin: 10px 0 10px 0;
  }
  span {
    margin-left: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightgreen};
  }
`;
