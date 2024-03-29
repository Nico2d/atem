import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";
import { getDate } from "../../utils/getDate";
import { InputField } from "../molecules/inputField";
import { Button } from "./Button";
import { Popup } from "./Popup";

export const StyledFile = ({ file }) => {
  const [isPopupClose, setIsPopupClose] = useState<boolean>(true);
  const { register, unregister, setValue, getValues } = useFormContext();

  const [fileName, fileNameExtension] = file.name.split(".");

  const saveSettings = () => {
    let fileList = getValues("files");

    const fileListAfterChangeName = fileList.map((item) => {
      if (item.name === file.name) {
        return new File(
          [item],
          `${getValues("newFileName")}.${fileNameExtension}`,
          {
            type: item.type,
          }
        );
      } else {
        return item;
      }
    });

    setValue("files", fileListAfterChangeName);
    unregister("newFileName");
    setIsPopupClose(true);
  };

  const removeFromList = () => {
    let fileList = getValues("files");

    const fileListAfterChangeName = fileList.filter(
      (item) => item.name !== file.name
    );

    setValue("files", fileListAfterChangeName);
    setIsPopupClose(true);
  };

  return (
    <>
      <FileWrapper onClick={() => setIsPopupClose(false)}>
        <ImFileEmpty />
        <span>{file.name}</span>
      </FileWrapper>

      <Popup isClose={isPopupClose} onClose={setIsPopupClose}>
        <StyledHeader>Edycja pliku</StyledHeader>
        <InputField
          placeholder="Nazwa pliku"
          name="newFileName"
          type={inputTypes.text}
          register={register}
          value={fileName}
        />
        <StyledDetailWrapper>
          <p>Rozmiar pliku: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Ostatnio modyfikowany: {getDate(file.lastModified)}</p>
        </StyledDetailWrapper>

        <ButtonContainer>
          <Button text="Usuń z listy" clicked={removeFromList} />
          <Button text="Zapisz zmiany" clicked={saveSettings} />
        </ButtonContainer>
      </Popup>
    </>
  );
};

const FileWrapper = styled.div`
  cursor: pointer;

  > span {
    font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
    margin-top: 0.5rem;
    text-align: center;
    word-break: break-word;
  }
`;

const StyledHeader = styled.h3`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.3}rem;
`;

const StyledDetailWrapper = styled.div`
  margin-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  button:first-child {
    background: ${({ theme }) => theme.colors.red};
  }
`;
