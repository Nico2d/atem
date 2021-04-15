import React from "react";
import styled from "styled-components";
import FileInput from "../../atoms/FileInput";
import { Whitespace } from "../../atoms/Whitespace";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step1 = ({ isActive }) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <Description>
        *Pamiętaj aby usunąć wszystkie wrażliwe dane przez dodaniem pliku
      </Description>

      <Whitespace height={1} />

      <FileInput multiple name="files" mode="append" />
    </StepContentWrapper>
  );
};

export const Description = styled.p`
  color: gray;
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
`;
