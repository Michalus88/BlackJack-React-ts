import React, { FC, useState } from "react";
import { LoggedUserRes } from "types";
import {
  Line1,
  Line2,
  Line3,
  Hamburger,
  LinkWrapper,
  NavWrapper,
} from "./navbar.style";
import { StyledLink } from "../styled-link/styledLink";
interface Props {
  user: LoggedUserRes | null;
  logOut: () => void;
}

export const Navbar: FC<Props> = ({ user, logOut }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavWrapper>
      <Hamburger onClick={() => setIsOpen((prev) => !prev)}>
        <Line1 isOpen={isOpen}></Line1>
        <Line2 isOpen={isOpen}></Line2>
        <Line3 isOpen={isOpen}></Line3>
      </Hamburger>
      <LinkWrapper isOpen={isOpen}>
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
      </LinkWrapper>
    </NavWrapper>
  );
};
