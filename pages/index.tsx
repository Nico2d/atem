import Head from "next/head";
import {
  FontSizeSelector,
  useFontSizeSelector,
} from "../components/molecules/fontSizeSelector";
import {
  ThemeToggler,
  useDarkMode,
} from "../components/molecules/themeToggler";
import { Layout } from "../components/templates/layout";

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
    <>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout theme={theme} fontSize={fontSize}>
        <main>
          <p>Welcome on Atem</p>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          <FontSizeSelector
            fontSize={fontSize}
            fontController={fontController}
          />
        </main>
      </Layout>
    </>
  );
};

export default Home;
