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
import Signing from "./signing";

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
        <main style={{ width: "100%", height: "100vh" }}>
          {/* <p>Welcome on Atem</p>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          <FontSizeSelector
            fontSize={fontSize}
            fontController={fontController}
          /> */}
          <Signing />
        </main>
      </Layout>
    </>
  );
};

export default Home;
