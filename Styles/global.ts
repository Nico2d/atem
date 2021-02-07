import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.family};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fonts.fontSize}rem;
  font-weight: 300;
  transition-property: background, color;
  transition-duration: 1s ;
  transition-timing-function:ease ;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4{
  margin: 0;
}
`;
