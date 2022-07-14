import styled from "styled-components";
import { device, size } from "../../assets/style/breakPoints";

export const NavWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
  @media (max-width: ${size.md}), (max-height: ${size.sm}) {
    display: block;
  }
`;

export const LinkWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
  width: 100vw;
  display: flex;
  justify-content: space-around;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isOpen }) =>
    !isOpen ? "translateX(100%)" : "translate(0%)"};
  @media ${device.s} {
    justify-content: flex-start;
  }
`;

export const Hamburger = styled.div`
  width: 35px;
  height: 29px;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const Line = styled.span`
  width: 100%;
  height: 4px;
  display: block;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.green};
  @media (max-height: 530px) and (orientation: landscape) {
    background: ${({ theme }) => theme.colors.green};
    box-shadow: 1px 2px 25px 2px ${({ theme }) => theme.colors.lightgreen};
  }
`;
export const Line1 = styled(Line)<{ isOpen: boolean }>`
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
`;
export const Line2 = styled(Line)<{ isOpen: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "scaleY(0)" : "none")};
`;
export const Line3 = styled(Line)<{ isOpen: boolean }>`
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
`;
