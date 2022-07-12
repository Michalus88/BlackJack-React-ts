import { createGlobalStyle } from "styled-components";
import { img } from "../grafics";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Bitter', sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:black ;
    background-image: url(${img.symbols});
  background-position: center;
  background-size: 50px 100x;
  background-repeat: repeat;
  }
  
  a, button {
    font-family: 'Bitter', sans-serif;
  }
`;
