import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { device } from "../../Styles/breakpoints";
import { FileList } from "../molecules/FileList";
import { Button } from "./Button";
import { Whitespace } from "./Whitespace";

const FileInput = (props) => {
  const { name, label = name, mode = "update" } = props;
  const { register, unregister, setValue, watch } = useFormContext();
  const isDesktop = useMediaQuery(device.tablet);
  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      let newFiles =
        mode === "update" ? droppedFiles : [...(files || []), ...droppedFiles];
      if (mode === "append") {
        newFiles = newFiles.reduce((prev, file) => {
          const fo = Object.entries(file);
          if (
            prev.find((e) => {
              const eo = Object.entries(e);
              return eo.every(
                ([key, value], index) =>
                  key === fo[index][0] && value === fo[index][1]
              );
            })
          ) {
            return prev;
          } else {
            return [...prev, file];
          }
        }, []);
      }
      setValue(name, newFiles, { shouldValidate: true });
    },
    [setValue, name, mode, files]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    // accept: props.accept,
  });
  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <>
      <input {...props} id={name} {...getInputProps()} />

      {isDesktop ? (
        <Container {...getRootProps()}>
          {!!files?.length ? (
            <FileList fileList={files} variant="grid" />
          ) : (
            <InformationWrapper>Przeciągnij i upuść</InformationWrapper>
          )}
        </Container>
      ) : (
        <>
          <CenterWrapper>
            <Button
              text="Dodaj plik z dysku"
              variant="secondary"
              clicked={open}
            />
          </CenterWrapper>
          <Whitespace height={1} />
          <FileList fileList={files} variant="list" />
        </>
      )}
    </>
  );
};

export default FileInput;

const InformationWrapper = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 20px;
  border-radius: 1rem;
  border: 2px dashed ${(props) => getColor(props)};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const CenterWrapper = styled.div`
  text-align: center;
`;
