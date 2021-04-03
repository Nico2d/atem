import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";
import { File } from "./File";

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

  return (
    <section>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        {files.length === 0 && <p>Przeciągnij i upuść</p>}

        <FileList>
          {files.map((file, index) => (
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
