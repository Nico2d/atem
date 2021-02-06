import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { Button } from "../atoms/button";
import { device } from "../../Styles/breakpoints";

export const SigningHeader = () => {
  const isDesktop = useMediaQuery(device.tablet);

  return (
    <StyledTitleWrapper>
      <h2>
        <span>Podziel</span> swój wysiłek i <span>pomnóż</span> korzyści płynące
        ze studiów
      </h2>
      {isDesktop && <Button text="Załóż konto" styleType="secondary" />}
    </StyledTitleWrapper>
  );
};

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-weight: 300;
    font-size: 2rem;
    max-width: 650px;
    margin-bottom: 2rem;

    span {
      font-weight: bold;
    }
  }
`;
