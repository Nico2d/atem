import { Signing } from "../components/organisms/signing";
import { Layout } from "../components/templates/layout";
import { isAuth } from "../utils/isAuth";

const Home = () => {
  console.log(isAuth());

  return (
    <Layout>
      <main style={{ width: "100%", height: "100vh" }}>
        <Signing />
      </main>
    </Layout>
  );
};

export default Home;
