import styled from "styled-components";
import { img } from "../../../assets";
import { device, size } from "../../../assets/style/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${img.tableBcg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.md} and (orientation: portrait) {
    margin-top: 50px;
    border-radius: 0px;
  }
  @media (max-height: ${size.sm}) and (orientation: landscape) {
    margin-top: 30px;
    border-radius: 0px;
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    margin-top: 0;
    border-radius: 0px;
  }
`;

export const PlayerInfo = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 5px;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.colors.black};
  @media ${device.xs} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    width: 90vw;
    position: absolute;
    border-bottom: none;
    justify-content: space-between;
    align-items: flex-start;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const PlayerContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  @media ${device.sm} and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-height: ${size.s}) and (orientation: landscape) {
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    flex-direction: row;
    display: flex;
  }
`;
