import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";
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
        {file.name}
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
        <p>Rozmiar pliku: {(file.size / 1024).toFixed(2)} KB</p>
        <StyledButtonWrapper>
          <Button text="Zapisz" clicked={saveSettings} />
        </StyledButtonWrapper>

        <ButtonContainer>
          <Button text="Usuń z listy" clicked={removeFromList} />
          <Button text="Pobierz" />
        </ButtonContainer>
      </Popup>
    </>
  );
};

const FileWrapper = styled.div`
  cursor: pointer;
`;

const StyledHeader = styled.h3`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.3}rem;
`;

const StyledButtonWrapper = styled.div`
  margin-left: auto;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  button:first-child {
    background: ${({ theme }) => theme.colors.red};
  }
`;
