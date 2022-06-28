import { StyledLink, Nav, NavWrapper } from "./navigation.style";
import { Logo } from "../../views/home/Home";

export const Navigation = () => {
  return (
    <NavWrapper>
      <Logo></Logo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Nav>
    </NavWrapper>
  );
};
