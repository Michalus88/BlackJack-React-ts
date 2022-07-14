import styled from "styled-components";
import { img } from "../../assets";
import { size } from "../../assets/style/breakPoints";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  @media (max-width: ${size.md}), (max-height: ${size.sm}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.div`
  width: 160px;
  height: 100px;
  background-image: url(${img.logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
