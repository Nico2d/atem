import { useState } from "react";
import styled from "styled-components";
import { HeroSectionHeader } from "../components/molecules/heroSectionHeader";
import { Signing } from "../components/organisms/signing";
import { Layout } from "../components/templates/layout";
import { device } from "../Styles/breakpoints";

const Home = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Layout>
      <main style={{ width: "100%", height: "100vh" }}>
        <HeroSection>
          <HeroSectionHeader
            btnClicked={() => setIsSignIn(!isSignIn)}
            isSignIn={isSignIn}
          />

          <Signing isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        </HeroSection>
      </main>
    </Layout>
  );
};

export default Home;

const HeroSection = styled.div`
  background: url("/signing_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;
