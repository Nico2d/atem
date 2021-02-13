import React from "react";
import styled from "styled-components";
import { IconKeyboardArrowRight } from "../../public/icons/iconKeyboardArrowRight";
import { device } from "../../Styles/breakpoints";
import { PageHeading } from "../atoms/pageHeading";
import { TemplateWithSidebar } from "./TemplateWithSidebar";

type TemplateMobileSettingsTypes = {
  title: string;
  children: JSX.Element;
  backToSettings: (x: boolean) => void;
};

export const TemplateMobileSettings: React.FC<TemplateMobileSettingsTypes> = ({
  title,
  children,
  backToSettings,
}) => {
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

  @media ${device.tablet} {
    width: 300px;
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
    fill: ${({ theme }) => theme.colors.fontColor};
    width: auto;
    height: 30px;
  }
`;
