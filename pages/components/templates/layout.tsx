import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themeColors";
import { createGlobalStyle } from "styled-components";

export const Layout = ({ children, theme, fontSize }: any) => {
  let themeObj = {
    borderRadius: "1rem",
    fontSize: fontSize,
    colors: theme === "light" ? lightTheme : darkTheme,
  };
  console.log(fontSize);
  // themeMode.fontSize = fontSize;

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      {fontSize}
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
    font-size: ${({ theme }) => theme.fontSize};
    transition: all 0.50s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
