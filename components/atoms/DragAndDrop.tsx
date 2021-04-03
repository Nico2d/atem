import React from "react";
import styled from "styled-components";
import { FileList } from "../molecules/FileList";

export const DragAndDrop = ({ dropzone, fileList }) => {
  return (
    <section>
      <Container {...dropzone}>
        {fileList.length === 0 && <p>Przeciągnij i upuść</p>}
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

const Container = styled.div`
  width: 900px;
  min-height: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 1rem;
  border: 2px dashed ${(props) => getColor(props)};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
