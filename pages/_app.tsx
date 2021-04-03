import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../Styles/global";
import { ThemeMode } from "../utils/enums";
import { lightTheme, darkTheme } from "../Styles/themeColors";
import { Typography } from "../Styles/themeFonts";
import { useDarkMode } from "../Hooks/useDarkMode";
import { useFontSizeSelector } from "../Hooks/useFontSizeSelector";
import { Provider } from "react-redux";
import { store } from "../store/configureStore";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useDarkMode();
  const [fontSize] = useFontSizeSelector();
  const router = useRouter();
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
    <Provider store={store}>
      <ThemeProvider theme={themeObj}>
        <GlobalStyle />
        {router.pathname !== "/" ? (
          <TemplateWithSidebar>
            <Component {...pageProps} />
          </TemplateWithSidebar>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
