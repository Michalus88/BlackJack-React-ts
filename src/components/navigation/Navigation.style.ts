import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BlackJackLogo from "../../assets/BlackJackLogo.png";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  background-image: url(${BlackJackLogo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 120px;
  position: absolute;
  top: -20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 15px 25px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  &:hover {
    border-bottom: yellow solid 2px;
    border-left: yellow solid 2px;
  }
  &.active {
    border-bottom: yellow solid 2px;
    border-left: yellow solid 2px;
  }
`;
