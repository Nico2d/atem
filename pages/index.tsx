import Head from "next/head";
import { useState } from "react";
import {
  FontSizeSelector,
  useFontSizeSelector,
} from "./components/molecules/fontSizeSelector";
import { ThemeToggler } from "./components/molecules/themeToggler";
import { Layout } from "./components/templates/layout";
import { useDarkMode } from "./components/templates/useDarkMode";

const Home = () => {
  const [theme, themeToggler, mountedThemeComponent] = useDarkMode();
  const [
    fontSize,
    fontController,
    mountedSizeComponent,
  ] = useFontSizeSelector();

  if (!mountedThemeComponent) return <div />;
  if (!mountedSizeComponent) return <div />;

  return (
    <Layout theme={theme} fontSize={fontSize}>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Welcome on Atem</p>
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        <FontSizeSelector fontSize={fontSize} fontController={fontController} />
      </main>
    </Layout>
  );
};

export default Home;
