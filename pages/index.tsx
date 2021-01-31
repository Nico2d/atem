import Head from "next/head";
import { Button } from "./components/atoms/button";
import { ThemeToggler } from "./components/molecules/themeToggler";
import { Layout } from "./components/templates/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Siemano Koolano</h1>
        <Button text="Zaloguj się" onClick={() => console.log("click")} />
      </main>
    </Layout>
  );
};

export default Home;
