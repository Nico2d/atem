import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themeColors";
import { createGlobalStyle } from "styled-components";

export const Layout = ({ children, theme }: any) => {
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
