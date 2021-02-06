import React from "react";
import Head from "next/head";

export const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Atem</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {children}
    </>
  );
};
