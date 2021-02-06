import React, { useState } from "react";
import styled from "styled-components";
import { SignIn } from "../components/organisms/signIn";
import { SigningHeader } from "../components/organisms/signingHeader";
import { SignUp } from "../components/organisms/signUp";
import { device } from "../Styles/breakpoints";

const Signing = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <StyledSigning>
      <SigningHeader
        btnClicked={() => setIsSignIn(!isSignIn)}
        isSignIn={isSignIn}
      />
      <StyledSigningBox>
        <SigningTitle>{isSignIn ? "Zaloguj" : "Zarejestruj"}</SigningTitle>
        {isSignIn ? <SignIn /> : <SignUp />}
        <StyledCreateAccountText>
          <h3>{isSignIn ? "Nie masz konta?" : "Masz konto?"}</h3>
          <h4 onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "Załóż konto" : "Zaloguj się"}
          </h4>
        </StyledCreateAccountText>
      </StyledSigningBox>
    </StyledSigning>
  );
};

export default Signing;

const StyledSigning = styled.div`
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

const StyledSigningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.cardColor};
  border-radius: 1rem;
  padding: 2rem;
  width: 300px;

  @media ${device.mobileL} {
    min-width: 380px;
  }
`;

const SigningTitle = styled.h2`
  margin-bottom: 3rem;
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
    color: ${({ theme }) => theme.colors?.primary};
    cursor: pointer;
    margin-top: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors?.primary};
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
