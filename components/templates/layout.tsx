import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Styles/global";
import { ThemeMode } from "../../utils/enums";
import { lightTheme, darkTheme } from "../../Styles/themeColors";
import { Typography } from "../../Styles/themeFonts";

export const Layout = ({ children, theme, fontSize }: any) => {
  let themeObj = {
    fonts: Typography,
    colors: theme === ThemeMode.light ? lightTheme : darkTheme,
  };
  themeObj.fonts.fontSize = fontSize;

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      {/* {fontSize} */}
      {children}
    </ThemeProvider>
  );
};
