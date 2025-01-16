import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textContent};
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;