import { StyledLink, Nav, NavWrapper, Logo } from "./navigation.style";
import { LoggedUserRes } from "types";
import { FC } from "react";

interface Props {
  user: LoggedUserRes | null;
  logOut: () => void;
}

export const Navigation: FC<Props> = ({ user, logOut }) => (
  <NavWrapper>
    <Logo></Logo>
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {user ? (
        <StyledLink to="/game">Game</StyledLink>
      ) : (
        <StyledLink to="/register">Register</StyledLink>
      )}
      {user ? (
        <StyledLink to="/login" onClick={logOut}>
          Logout
        </StyledLink>
      ) : (
        <StyledLink to="/login">Login</StyledLink>
      )}
    </Nav>
  </NavWrapper>
);
