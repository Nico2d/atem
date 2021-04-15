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
  const { register, unregister, setValue, watch, getValues } = useFormContext();

  const saveSettings = () => {
    let fileList = watch("files");

    const currentList = fileList.map((item) => {
      if (item.name === file.name) {
        let myRenamedFile = new File(
          [item],
          `${getValues("newFileName")}.txt`,
          {
            type: item.type,
          }
        );

        return myRenamedFile;
      } else {
        return item;
      }
    });

    setValue("files", currentList);
    unregister("newFileName");
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
          value={file.name.split(".")[0]}
        />
        <p>Rozmiar pliku: {(file.size / 1024).toFixed(2)} kb</p>
        <StyledButtonWrapper>
          <Button text="Zapisz" clicked={saveSettings} />
        </StyledButtonWrapper>
        {/* rozmiar pliku */}
        {/* jakieś jeszcze informacje - dunno co */}

        <ButtonContainer>
          <Button text="Usuń z listy" />
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
