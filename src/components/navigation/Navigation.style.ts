import styled from "styled-components";
import { img } from "../../assets";

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
  background-image: url(${img.logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 160px;
  height: 100px;
`;
