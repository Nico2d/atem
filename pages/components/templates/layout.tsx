import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themeColors";
import { useDarkMode } from "./useDarkMode";
import { createGlobalStyle } from "styled-components";
import { ThemeToggler } from "../molecules/themeToggler";

export const Layout = ({ children }: any) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const themeContext = useContext(ThemeContext);

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ThemeToggler theme={theme} toggleTheme={themeToggler} />
      themeMode: {theme}, {themeContext} <br />
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
