import React, { FC, useState } from "react";
import { LoggedUserRes } from "types";
import { Icone, MobileLink, LinkWrapper, NavWrapper } from "./navbar.style";
import { StyledLink } from "../styled-link/styledLink";
interface Props {
  user: LoggedUserRes | null;
  logOut: () => void;
}

export const Navbar: FC<Props> = ({ user, logOut }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <NavWrapper>
      <Icone onClick={() => setIsOpen((curr) => !curr)}>
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className={"fas fa-bars"}></i>
        )}
      </Icone>
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
          <MobileLink to="/login">Login</MobileLink>
        )}
      </LinkWrapper>
    </NavWrapper>
  );
};
