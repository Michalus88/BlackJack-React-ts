import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BlackJackLogo from "../../assets/BlackJackLogo.png";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.transparentBlack};
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  position: absolute;
  top: -20px;
  width: 120px;
  height: 120px;
  background-image: url(${BlackJackLogo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
`;

export const StyledLink = styled(NavLink)`
  border: ${({ theme }) => theme.colors.green} solid 1px;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
  &:hover {
    box-shadow: 1px -1px 15px 2px ${({ theme }) => theme.colors.lightgreen};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.lightgreen};
    box-shadow: 1px -1px 15px 1px ${({ theme }) => theme.colors.lightgreen};
  }
`;
