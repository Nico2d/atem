import { useState } from "react";
import { PageHeading } from "../components/atoms/pageHeading";
import React from "react";
import { DragAndDrop } from "../components/atoms/dropzone";
import { Button } from "../components/atoms/button";
import { StepsCounter } from "../components/molecules/Steps/StepsCounter";
import styled from "styled-components";
import { Whitespace } from "../components/atoms/Whitespace";
import { useDropzone } from "react-dropzone";
import { File } from "../components/atoms/File";
import { FileList } from "../components/molecules/FileList";
import { Step1 } from "../components/molecules/Steps/Step1";
import { Step2 } from "../components/molecules/Steps/Step2";
import { Step3 } from "../components/molecules/Steps/Step3";
import { Step4 } from "../components/molecules/Steps/Step4";
import { Step5 } from "../components/molecules/Steps/Step5";

const AddExercise = () => {
  const [files, setFiles] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((props) => [...props, ...acceptedFiles]);
    },
    noClick: true,
  });

  const removeFile = (name) => {
    setFiles(files.filter((item) => item.name !== name));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((currentStep) => currentStep - 1);
  };

  return (
    <>
      <input {...getInputProps()} />
      <PageHeading title="Dodaj zadanie" />
      {/* <DragAndDrop /> */}
      {/* Dropzone */}

      {/* Mobile */}
      <StyledContainer>
        <StepsCounter currentStep={currentStep} />

        <Step1 fileList={files} open={open} isActive={currentStep === 1} />
        <Step2 isActive={currentStep === 2} />
        <Step3 isActive={currentStep === 3} />
        <Step4 isActive={currentStep === 4} />
        <Step5 isActive={currentStep === 5} />

        <Whitespace height={1} />
        <StepNavigation>
          <Button text="Wstecz" styleType="secondary" clicked={prevStep} />
          <Button text="Dodaj" clicked={nextStep} />
        </StepNavigation>

        <Whitespace height={3} />
      </StyledContainer>
    </>
  );
};

export default AddExercise;

const StepNavigation = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  padding: 0 1rem;
  text-align: center;
`;
