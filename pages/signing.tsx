import React, { useState } from "react";
import styled from "styled-components";
import { SignIn } from "../components/organisms/signIn";
import { SigningTitle } from "../components/organisms/signingTitle";
import { SignUp } from "../components/organisms/signUp";
import { device } from "../Styles/breakpoints";

const Signing = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <StyledSigning>
      <StyledSigningWrapper>
        <SigningTitle />
        <StyledSigningBox>
          <h2>{isSignIn ? "Zaloguj" : "Zarejestruj"}</h2>
          {isSignIn ? <SignIn /> : <SignUp />}
          <StyledCreateAccountText>
            <h3>{isSignIn ? "Nie masz konta?" : "Masz konto?"}</h3>
            <h4 onClick={() => setIsSignIn(!isSignIn)}>
              {isSignIn ? "Załóż konto" : "Zaloguj się"}
            </h4>
          </StyledCreateAccountText>
        </StyledSigningBox>
      </StyledSigningWrapper>
    </StyledSigning>
  );
};

export default Signing;

const StyledSigning = styled.div`
  background: url("/signing_bg.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledSigningWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    height: auto;
    width: 100%;
  }
`;

const StyledSigningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.cardColor};
  border-radius: 1rem;
  padding: 2rem;
  width: 300px;

  h2 {
    margin-bottom: 3rem;
  }

  @media ${device.mobileL} {
    min-width: 380px;
  }
`;

const StyledCreateAccountText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  h3 {
    margin-top: 1.4rem;
    font-weight: normal;
  }

  h4 {
    color: ${(props) => props.theme.colors?.primary};
    cursor: pointer;
    margin-top: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors?.primary};
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h3 {
      margin-right: 1rem;
      margin-top: 0;
    }

    h4 {
      margin-top: 0;
    }
  }
`;
