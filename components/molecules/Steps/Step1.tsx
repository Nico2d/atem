import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";
import { device } from "../../../Styles/breakpoints";
import { Button } from "../../atoms/Button";
import { DragAndDrop } from "../../atoms/DragAndDrop";
import { Whitespace } from "../../atoms/Whitespace";
import { FileList } from "../FileList";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step1 = ({ isActive }) => {
  const isDesktop = useMediaQuery(device.tablet);
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

  const dropzoneProps = getRootProps({
    isDragActive,
    isDragAccept,
    isDragReject,
  });

  return (
    <StepContentWrapper isActive={isActive}>
      <Description>
        *Pamiętaj aby usunąć wszystkie wrażliwe dane przez dodaniem pliku
      </Description>

      <Whitespace height={1} />

      <input {...getInputProps()} />

      {isDesktop ? (
        <DragAndDrop dropzoneProps={dropzoneProps} fileList={files} />
      ) : (
        <>
          <CenterWrapper>
            <Button
              text="Dodaj plik z dysku"
              styleType="secondary"
              clicked={open}
            />
          </CenterWrapper>
          <Whitespace height={1} />
          <FileList fileList={files} variant="list" />
        </>
      )}
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
