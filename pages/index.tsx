import Head from "next/head";
import { Button } from "./components/atoms/button";
import { ThemeToggler } from "./components/molecules/themeToggler";
import { Layout } from "./components/templates/layout";
import { useDarkMode } from "./components/templates/useDarkMode";

const Home = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;
  return (
    <Layout theme={theme}>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
      </main>
    </Layout>
  );
};

export default Home;
