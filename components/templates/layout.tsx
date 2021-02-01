import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../utils/themeColors";
import { createGlobalStyle } from "styled-components";
import { Typography } from "../../utils/themeFonts";

export const Layout = ({ children, theme, fontSize }: any) => {
  let themeObj = {
    fonts: Typography,
    colors: theme === "light" ? lightTheme : darkTheme,
  };
  themeObj.fonts.fontSize = fontSize;

  return (
    <ThemeProvider theme={themeObj}>
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
    font-family: ${({ theme }) => theme.fonts.family};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${({ theme }) => theme.fonts.fontSize};
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
`;
