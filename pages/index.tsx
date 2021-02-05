import { Layout } from "../components/templates/layout";
import Signing from "./signing";

const Home = () => {
  return (
    <>
      <Layout>
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
