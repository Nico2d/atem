import Signing from "../components/organisms/signing";
import { Layout } from "../components/templates/layout";

const Home = () => {
  return (
    <>
      <Layout>
        <main style={{ width: "100%", height: "100vh" }}>
          {/* <p>Welcome on Atem</p>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          <FontSizeSe../components/organisms/signing
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
