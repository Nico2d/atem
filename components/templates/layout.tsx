import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../utils/themeColors";
import { createGlobalStyle } from "styled-components";
import { Typography } from "../../utils/themeFonts";
import { ThemeMode } from "../../utils/enums";

type Props = {
  children: any;
  theme: ThemeMode;
  fontSize: number;
};

export const Layout: React.FC<Props> = ({ children, theme, fontSize }) => {
  const themeObj = {
    fonts: {
      family: Typography.family,
      fontSize: Typography.fontSize * fontSize,
    },
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
    font-family: ${({ theme }) => theme.fonts.family};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${({ theme }) => theme.fonts.fontSize}em;
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
`;
