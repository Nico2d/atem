import React from "react";
import styled from "styled-components";
import { File } from "./File";

export const DragAndDrop = ({ dropzoneProps, fileList }) => {
  return (
    <section>
      <Container {...dropzoneProps}>
        {fileList.length === 0 && <p>Przeciągnij i upuść</p>}

        <FileList>
          {fileList.map((file, index) => (
            <File key={index} file={file} />
          ))}
        </FileList>
      </Container>
    </section>
  );
};

const FileList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;

  > span {
    color: red;
    cursor: pointer;
    z-index: 20;
  }
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

const Container = styled.div`
  width: 900px;
  height: 300px;
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
