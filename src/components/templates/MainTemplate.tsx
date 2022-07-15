import React, { FC } from "react";
import { LoggedUserRes } from "types";
import { Navbar } from "../navbar/NavBar";
import { Navigation } from "../navigation/Navigation";
import { Wrapper } from "./mainTemplate.style";

interface Props {
  user: LoggedUserRes | null;
  logOut: () => void;
  children: JSX.Element;
}

export const MainTemplate: FC<Props> = ({ user, logOut, children }) => (
  <Wrapper>
    <Navigation user={user} logOut={logOut}></Navigation>
    <Navbar user={user} logOut={logOut}></Navbar>
    {children}
  </Wrapper>
);
