import React from "react";
import styled from "styled-components";
import { IconKeyboardArrowRight } from "../../public/icons/iconKeyboardArrowRight";
import { PageHeading } from "../atoms/pageHeading";
import { TemplateWithSidebar } from "./TemplateWithSidebar";

export const TemplateMobileSettings = ({ title, children, backToSettings }) => {
  return (
    <TemplateWithSidebar>
      <HeaderContainer>
        <ReturnButton onClick={() => backToSettings(false)}>
          <IconKeyboardArrowRight />
        </ReturnButton>
        <PageHeading title={title} />
      </HeaderContainer>

      {children}
    </TemplateWithSidebar>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;

  > h3 {
    font-size: ${({ theme }) => theme.fonts.fontSize * 1.2}rem;
  }
`;

const ReturnButton = styled.button`
  background: transparent;
  border: none;
  height: 100%;
  width: 40px;

  > svg {
    transform: scale(-1, 1) translateY(-50%);
    position: absolute;
    top: 50%;
    fill: ${({ theme }) => theme.colors.white};
    width: auto;
    height: 30px;
  }
`;