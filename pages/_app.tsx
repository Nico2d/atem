import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useFontSizeSelector } from "../components/molecules/fontSizeSelector";
import { useDarkMode } from "../components/molecules/themeToggler";
import { GlobalStyle } from "../Styles/global";
import { ThemeMode } from "../utils/enums";
import { lightTheme, darkTheme } from "../Styles/themeColors";
import { Typography } from "../Styles/themeFonts";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useDarkMode();
  const [fontSize] = useFontSizeSelector();
  const [themeObj, setThemeObj] = useState({
    fonts: {
      family: Typography.family,
      fontSize: Typography.fontSize * fontSize,
    },
    colors: lightTheme,
  });

  useEffect(() => {
    setThemeObj({
      fonts: {
        family: Typography.family,
        fontSize: Typography.fontSize * fontSize,
      },
      colors: theme === ThemeMode.light ? lightTheme : darkTheme,
    });
  }, [theme, fontSize]);

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
