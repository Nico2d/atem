import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { Button } from "../atoms/Button";
import { device } from "../../Styles/breakpoints";

type HeroSectionHeaderProps = {
  btnClicked: () => void;
  isSignIn: boolean;
};

export const HeroSectionHeader = ({
  btnClicked,
  isSignIn,
}: HeroSectionHeaderProps) => {
  const isDesktop = useMediaQuery(device.tablet);

  return (
    <StyledTitleWrapper>
      <Slogan>
        <span>Podziel</span> swój wysiłek <br />i <span>pomnóż</span> korzyści
        <br />
        płynące ze studiów
      </Slogan>
      {isDesktop && (
        <Button
          text={isSignIn ? "Załóż konto" : "Zaloguj się"}
          variant="secondary"
          clicked={btnClicked}
        />
      )}
    </StyledTitleWrapper>
  );
};

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Slogan = styled.h2`
  font-weight: 300;
  max-width: 650px;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fonts?.fontSize * 2}rem;
  margin-top: 3rem;
  padding: 0 1rem;

  span {
    font-weight: 700;
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fonts?.fontSize * 2.5}rem;
    margin-top: 0;
    padding: 0;
    padding-right: 1rem;
  }

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fonts?.fontSize * 3.5}rem;
  }
`;
