import { StyledLink, Wrapper } from "./Navigation.style";

export const Navigation = () => {
  // const auth = useAuth();

  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Wrapper>
  );
};
