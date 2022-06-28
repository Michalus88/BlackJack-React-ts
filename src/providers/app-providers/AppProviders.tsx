import React from "react";
import { GlobalStyle } from "../../assets/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/style/theme";
import { ErrorProvider } from "../../hooks/useError";
import { BrowserRouter } from "react-router-dom";

export const AppProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorProvider>{children}</ErrorProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
