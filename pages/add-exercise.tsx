import { useState } from "react";
import { PageHeading } from "../components/atoms/pageHeading";
import React from "react";
import { DragAndDrop } from "../components/atoms/dropzone";
import { Button } from "../components/atoms/button";
import { Steps } from "../components/molecules/Steps";
import styled from "styled-components";
import { Whitespace } from "../components/atoms/Whitespace";
import { useDropzone } from "react-dropzone";
import { File } from "../components/atoms/File";
import { FileList } from "../components/molecules/FileList";

const AddExercise = () => {
  const [files, setFiles] = useState([]);

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

  console.log(files);

  return (
    <>
      <input {...getInputProps()} />
      <PageHeading title="Dodaj zadanie" />
      {/* <DragAndDrop /> */}
      {/* Dropzone */}

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
        <Whitespace height={1} />
        {/* File list */}

        <FileList fileList={files} variant="list" />

        <Whitespace height={1} />

        {/* SECOND STEP */}

        <StepNavigation>
          <Button text="Wstecz" styleType="secondary" />
          <Button text="Dodaj" />
        </StepNavigation>

        <Whitespace height={3} />
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

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};
