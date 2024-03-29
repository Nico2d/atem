import React, { useState } from "react";
import styled from "styled-components";
import { HeroSectionHeader } from "../components/molecules/heroSectionHeader";
import { Signing } from "../components/organisms/signing";
import { Layout } from "../components/templates/layout";
import { useIsAuth } from "../Hooks/useIsAuth";
import { device } from "../Styles/breakpoints";

const Home = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);

  useIsAuth("/dashboard", undefined);

  return (
    <Layout>
      <HeroWrapper>
        <HeroSection>
          <HeroSectionHeader
            btnClicked={() => setShowSignInForm(!showSignInForm)}
            isSignIn={showSignInForm}
          />
          <Signing
            showSignInForm={showSignInForm}
            signInFormHandler={(value: boolean) => setShowSignInForm(value)}
          />
        </HeroSection>
      </HeroWrapper>
    </Layout>
  );
};

export default Home;

const HeroWrapper = styled.main`
  @media ${device.tablet} {
    width: 100%;
    height: 100vh;
  }
`;

const HeroSection = styled.div`
  background: url("/home-bg.svg");
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
