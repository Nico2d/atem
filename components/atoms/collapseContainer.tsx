import { useState } from "react";
import styled from "styled-components";
import { device } from "../../Styles/breakpoints";
import { CardField } from "./card/cardField";

export const CollapseContainer = ({ children, title, value, method }) => {
  return (
    <>
      <StyledCollapse isActive={value} onClick={method}>
        {title}
      </StyledCollapse>

      <StyledCollapseContent isActive={value}>{children}</StyledCollapseContent>
    </>
  );
};

const StyledCollapse = styled(CardField)<{ isActive: boolean }>`
  @media ${device.laptopM} {
    svg {
      transform: rotate(${({ isActive }) => (isActive ? "-90deg" : "90deg")});
    }
  }
`;

const StyledCollapseContent = styled.div<{ isActive: boolean }>`
  background: #1d1d1d;
  height: ${({ isActive }) => (isActive ? "100px" : 0)};
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
  transition: height 0.3s ease-out;
  position: relative;

  > div {
    padding-top: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.linesColor};
  }
`;
