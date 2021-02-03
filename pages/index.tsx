import Head from "next/head";
import React from "react";
import styled from "styled-components";
import {
  FontSizeSelector,
  useFontSizeSelector,
} from "../components/molecules/fontSizeSelector";
import {
  ThemeToggler,
  useDarkMode,
} from "../components/molecules/themeToggler";
import { MobileNavigation } from "../components/organisms/mobileNavigation";
import { Sidebar } from "../components/organisms/sidebar";
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout theme={theme} fontSize={fontSize}>
        <Container>
          <MobileNavigation>
            <Sidebar />
          </MobileNavigation>

          <StyledMain>
            <p>Welcome on Atem</p>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
            <FontSizeSelector
              fontSize={fontSize}
              fontController={fontController}
            />
            <TestBlock />
            <TestBlock />
            <TestBlock />
          </StyledMain>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: block;
`;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-flow: column;
`;

const TestBlock = styled.div`
  height: 300px;
  width: 300px;
  background: red;
  margin: 2rem;
`;
