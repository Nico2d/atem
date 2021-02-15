import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

export const DragAndDrop = (props) => {
  const [files, setFiles] = useState([]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((props) => [...props, ...acceptedFiles]);
    },
    noClick: true,
  });

  const removeFile = (name) => {
    setFiles(files.filter((item) => item.name !== name));
  };

  const displayFileList = files.map((file, index) => (
    <FileList key={index}>
      {file.name} - {(file.size / 1024).toFixed(2)} mb
      <span onClick={() => removeFile(file.name)}>X</span>
    </FileList>
  ));

  return (
    <section>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Przeciągnij i upuść</p>
        <ul>{displayFileList}</ul>
      </Container>
    </section>
  );
};

const FileList = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;

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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 1rem;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
