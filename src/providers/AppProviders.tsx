import React from "react";
import { GlobalStyle } from "../assets/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/style/theme";
import { ErrorProvider } from "../hooks/useNotification";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";

export const AppProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorProvider>
          <AuthProvider>{children}</AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
