import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Button } from "./components/atoms/button";
import { ThemeToggler } from "./components/molecules/themeToggler";
import { Layout } from "./components/templates/layout";

const Home = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeToggler />
        <h1>Siemano Koolano</h1>
        <Button text="Zaloguj się" onClick={() => console.log("click")} />
      </main>
    </Layout>
  );
};

export default Home;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
