import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import { Whitespace } from "../../atoms/Whitespace";
import { FileList } from "../FileList";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step1 = ({ fileList, open, isActive }) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <Description>
        *Pamiętaj aby usunąć wszystkie wrażliwe dane przez dodaniem pliku
      </Description>

      <Whitespace height={1} />

      <Button text="Dodaj plik z dysku" styleType="secondary" clicked={open} />
      <Whitespace height={1} />

      <FileList fileList={fileList} variant="list" />
    </StepContentWrapper>
  );
};

export const Description = styled.p`
  color: gray;
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
`;
