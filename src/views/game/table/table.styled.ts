import styled from "styled-components";
import { img } from "../../../assets";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
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
`;

export const PlayerContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.colors.black};
`;

export const CardsConteiner = styled(PlayerContainer)`
  border-bottom: none;
  min-height: 150px;
  justify-content: center;
  align-items: center;
`;
