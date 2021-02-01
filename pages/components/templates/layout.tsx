import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../utils/themeColors";
import { createGlobalStyle } from "styled-components";

export const Layout = ({ children, theme, fontSize }: any) => {
  let themeObj = {
    borderRadius: "1rem",
    fontSize: fontSize,
    colors: theme === "light" ? lightTheme : darkTheme,
  };

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
    font-family: Montserrat, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${({ theme }) => theme.fontSize};
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
