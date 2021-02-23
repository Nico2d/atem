import { Signing } from "../components/organisms/signing";
import { Layout } from "../components/templates/layout";
import { isAuth } from "../utils/isAuth";
import Dashboard from "./dashboard";
import { useRouter } from "next/router";

const Home = () => {
  return (
    <Layout>
      <main style={{ width: "100%", height: "100vh" }}>
        <Signing />
      </main>
    </Layout>
  );
};

export default Home;
