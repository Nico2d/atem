import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { Button } from "../atoms/button";
import { device } from "../../Styles/breakpoints";

export const HeroSectionHeader = ({
  btnClicked,
  isSignIn,
}: HeroSectionHeaderProps) => {
  const isDesktop = useMediaQuery(device.tablet);

  return (
    <StyledTitleWrapper>
      <Slogan>
        <span>Podziel</span> swój wysiłek <br />i <span>pomnóż</span> korzyści{" "}
        <br />
        płynące ze studiów
      </Slogan>
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

type HeroSectionHeaderProps = {
  btnClicked: () => void;
  isSignIn: boolean;
};

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
`;

const Slogan = styled.h2`
  font-weight: 300;
  max-width: 650px;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fonts?.fontSize * 2}rem;

  span {
    font-weight: 700;
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fonts?.fontSize * 2.5}rem;
  }

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fonts?.fontSize * 3.5}rem;
  }
`;
