import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { device } from "../../Styles/breakpoints";
import { FileList } from "../molecules/FileList";
import { Button } from "./Button";
import { Whitespace } from "./Whitespace";
import { MdSystemUpdateAlt } from "@react-icons/all-files/md/MdSystemUpdateAlt";

const FileInput = (props) => {
  const { name, mode = "update" } = props;
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
  });

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <>
      {isDesktop ? (
        <Container {...getRootProps()} isDragActive={isDragActive}>
          {!!files?.length ? (
            <FileList fileList={files} variant="grid" />
          ) : (
            <InformationWrapper>
              <input {...props} id={name} {...getInputProps()} />
              <MdSystemUpdateAlt />
              <p>Przeciągnij i upuść</p>
            </InformationWrapper>
          )}
        </Container>
      ) : (
        <>
          <input {...props} id={name} {...getInputProps()} />
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

const InformationWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

const Container = styled.div<{ isDragActive: boolean }>`
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 20px;
  border-radius: 1rem;
  border: 2px dashed
    ${({ theme, isDragActive }) =>
      isDragActive ? theme.colors.fontColor : `${theme.colors.fontColor}90`};
  background: ${({ theme, isDragActive }) =>
    isDragActive ? `${theme.colors.primary}60` : "transparent"};
  color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.colors.fontColor : `${theme.colors.fontColor}90`};
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const CenterWrapper = styled.div`
  text-align: center;
`;
