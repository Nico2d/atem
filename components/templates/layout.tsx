import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../Styles/global";
import { ThemeMode } from "../../utils/enums";
import { lightTheme, darkTheme } from "../../utils/themeColors";
import { Typography } from "../../utils/themeFonts";
import Head from "next/head";
import { useDarkMode } from "../molecules/themeToggler";
import { useFontSizeSelector } from "../molecules/fontSizeSelector";

export const Layout: React.FC<{ children: any }> = ({ children }) => {
  const [theme, mountedThemeComponent] = useDarkMode();
  const [fontSize, mountedSizeComponent] = useFontSizeSelector();

  const themeObj = {
    fonts: {
      family: Typography.family,
      fontSize: Typography.fontSize * fontSize,
    },
    colors: theme === ThemeMode.light ? lightTheme : darkTheme,
  };

  if (!mountedThemeComponent) return <div />;
  if (!mountedSizeComponent) return <div />;
  return (
    <>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={themeObj}>
        <GlobalStyle />
        {/* {fontSize} */}
        {children}
      </ThemeProvider>
    </>
  );
};
