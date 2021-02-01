import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/atoms/button";
import { SignIn } from "../components/organisms/signIn";
import { SignUp } from "../components/organisms/signUp";

export const Signing = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <StyledSigning>
      <h2>
        <span>Podziel</span> swój wysiłek i <span>pomnóż</span> korzyści płynące
        ze studiów
      </h2>
      <StyledSigningBox>
        <h2>{isSignIn ? "Zaloguj" : "Zarejestruj"}</h2>
        {isSignIn ? <SignIn /> : <SignUp />}
        <Button text={isSignIn ? "Zaloguj" : "Zarejestruj"} />
        <h3>{isSignIn ? "Nie masz konta?" : "Masz konto?"}</h3>
        <h4 onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn ? "Załóż konto" : "Zaloguj się"}{" "}
        </h4>
      </StyledSigningBox>
    </StyledSigning>
  );
};

const StyledSigning = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};

  h2 {
    font-weight: 300;
    font-size: 2rem;

    span {
      font-weight: bold;
    }
  }
`;

const StyledSigningBox = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cardColor};
  border-radius: 1rem;
  padding: 2rem;

  h3 {
    margin-top: 1.4rem;
    font-weight: normal;
  }

  h4 {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    margin-top: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
