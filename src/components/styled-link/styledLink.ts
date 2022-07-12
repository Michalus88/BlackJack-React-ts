import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  transition: 0.3s linear;
`;
