import React from "react";
import styled from "styled-components";
import { SignUp } from "../molecules/signUp";
import { device } from "../../Styles/breakpoints";
import { SignIn } from "../molecules/signIn";

export const Signing = ({
  showSignInForm,
  signInFormHandler: signInFormHandler,
}: signingProps) => {
  return (
    <StyledSigningBox>
      <SigningTitle>{showSignInForm ? "Zaloguj" : "Zarejestruj"}</SigningTitle>
      {showSignInForm ? <SignIn /> : <SignUp />}
      <StyledCreateAccountText>
        <h3>{showSignInForm ? "Nie masz konta?" : "Masz konto?"}</h3>
        <h4 onClick={() => signInFormHandler(!showSignInForm)}>
          {showSignInForm ? "Załóż konto" : "Zaloguj się"}
        </h4>
      </StyledCreateAccountText>
    </StyledSigningBox>
  );
};

type signingProps = {
  showSignInForm: boolean;
  signInFormHandler: (value: boolean) => void;
};

const StyledSigningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors?.cardColor};
  border-radius: 1rem;
  padding: 2rem;
  width: 300px;
  margin: 3rem 0;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

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
