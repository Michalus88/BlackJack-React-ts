import styled from "styled-components";
import { Button } from "../../../components/button/button";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  width: 800px;
  display: flex;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.green};
`;

export const BtnsGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 50%;
`;

export const BetButton = styled(Button)`
  position: relative;
  padding: 5px 30px 15px 30px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  span {
    font-weight: bold;
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.lightgreen};
  }
`;
