import React from "react";
import styled from "styled-components";
import { FileList } from "../molecules/FileList";

export const DragAndDrop = ({ dropzone, fileList }) => {
  return (
    <section>
      <Container {...dropzone}>
        {fileList.length === 0 && (
          <InformationWrapper>Przeciągnij i upuść</InformationWrapper>
        )}
        <FileList fileList={fileList} variant="grid" />
      </Container>
    </section>
  );
};

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

const InformationWrapper = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  position: relative;
  width: 900px;
  min-height: 300px;
  padding: 20px;
  border-radius: 1rem;
  border: 2px dashed ${(props) => getColor(props)};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
