import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";
import { device } from "../../../Styles/breakpoints";
import { Button } from "../../atoms/Button";
import { DragAndDrop } from "../../atoms/dropzone";
import { Whitespace } from "../../atoms/Whitespace";
import { FileList } from "../FileList";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step1 = ({ fileList, open, isActive }) => {
  const isDesktop = useMediaQuery(device.tablet);

  return (
    <StepContentWrapper isActive={isActive}>
      <Description>
        *Pamiętaj aby usunąć wszystkie wrażliwe dane przez dodaniem pliku
      </Description>

      <Whitespace height={1} />

      {isDesktop ? (
        <DragAndDrop />
      ) : (
        <CenterWrapper>
          <Button
            text="Dodaj plik z dysku"
            styleType="secondary"
            clicked={open}
          />
        </CenterWrapper>
      )}

      <Whitespace height={1} />
      <FileList fileList={fileList} variant="list" />
    </StepContentWrapper>
  );
};

export const Description = styled.p`
  color: gray;
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
`;

const CenterWrapper = styled.div`
  text-align: center;
`;
