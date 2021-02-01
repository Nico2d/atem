import React from "react";
import styled from "styled-components";
import { SignIn } from "../components/organisms/signIn";

export const Signing = () => {
  return (
    <StyledSigning>
      <h2>
        <span>Podziel</span> swój wysiłek i <span>pomnóż</span> korzyści płynące
        ze studiów
      </h2>
      <div>
        <SignIn />
      </div>
    </StyledSigning>
  );
};

const StyledSigning = styled.div`
  padding: 1rem 2rem;

  h2 {
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
`;
