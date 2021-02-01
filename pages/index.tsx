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
      </Head>
      <Layout theme={theme} fontSize={fontSize}>
        <Container>
          <Sidebar />
          <StyledMain>
            <p>Welcome on Atem</p>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
            <FontSizeSelector
              fontSize={fontSize}
              fontController={fontController}
            />
          </StyledMain>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
`;

const StyledMain = styled.main`
  margin-left: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
