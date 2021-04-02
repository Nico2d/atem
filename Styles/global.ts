import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 300;
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.fontSize}rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6{
  margin: 0;
}
`;
