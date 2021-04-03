import { useState } from "react";
import { PageHeading } from "../components/atoms/pageHeading";
import React from "react";
import { DragAndDrop } from "../components/atoms/dropzone";
import { Button } from "../components/atoms/button";
import { Steps } from "../components/molecules/Steps";
import styled from "styled-components";
import { Whitespace } from "../components/atoms/Whitespace";
import { useDropzone } from "react-dropzone";

const AddExercise = () => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  return (
    <>
      <PageHeading title="Dodaj zadanie" />
      {/* <DragAndDrop /> */}

      {/* Mobile */}
      <StyledContainer>
        <Steps />

        {/* FIRST STEP */}
        <Description>
          *Pamiętaj aby usunąć wszystkie wrażliwe dane przez dodaniem pliku
        </Description>

        <Whitespace height={1} />
        <Button
          text="Dodaj plik z dysku"
          styleType="secondary"
          clicked={open}
        />

        <input type="file" />
        <Whitespace height={3} />

        {/* SECOND STEP */}

        <StepNavigation>
          <Button text="Wstecz" styleType="secondary" />
          <Button text="Dodaj" />
        </StepNavigation>
      </StyledContainer>
    </>
  );
};

export default AddExercise;

const Description = styled.p`
  color: gray;
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
`;

const StepNavigation = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  padding: 0 1rem;
  text-align: center;
`;
