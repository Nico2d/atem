import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { Button } from "../atoms/button";
import { device } from "../../Styles/breakpoints";

export const SigningHeader = ({ btnClicked, isSignIn }: signingHeaderProps) => {
  const isDesktop = useMediaQuery(device.tablet);

  return (
    <StyledTitleWrapper>
      <h2>
        <span>Podziel</span> swój wysiłek i <span>pomnóż</span> korzyści płynące
        ze studiów
      </h2>
      {isDesktop && (
        <Button
          text={isSignIn ? "Załóż konto" : "Zaloguj się"}
          styleType="secondary"
          clicked={btnClicked}
        />
      )}
    </StyledTitleWrapper>
  );
};

type signingHeaderProps = {
  btnClicked: () => void;
  isSignIn: boolean;
};

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  h2 {
    font-weight: 300;
    font-size: 3.5rem; //Needs to be changed to use global font size
    max-width: 650px;
    margin-bottom: 2rem;

    span {
      font-weight: bold;
    }
  }
`;
