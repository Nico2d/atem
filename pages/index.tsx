import Head from "next/head";
import { Button } from "./shared/button";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Atem</a>
        </h1>
        <Button text="Zaloguj się" />
      </main>
    </div>
  );
};

export default Home;
