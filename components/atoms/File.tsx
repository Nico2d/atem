import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";
import { useState } from "react";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";
import { InputField } from "../molecules/inputField";
import { Button } from "./Button";
import { PageHeading } from "./pageHeading";
import { Popup } from "./Popup";

export const File = ({ file }) => {
  const [isPopupClose, setIsPopupClose] = useState<boolean>(true);

  return (
    <>
      <StyledFile onClick={() => setIsPopupClose(false)}>
        <ImFileEmpty />
        {file.path}
      </StyledFile>

      <Popup isClose={isPopupClose} onClose={setIsPopupClose}>
        <StyledHeader>Edycja pliku</StyledHeader>
        <InputField
          placeholder="Nazwa pliku"
          name="fileName"
          type={inputTypes.text}
        />
        <StyledButtonWrapper>
          <Button text="Zapisz" />
        </StyledButtonWrapper>

        <ButtonContainer>
          <Button text="Usuń z listy" />
          <Button text="Pobierz" />
        </ButtonContainer>
      </Popup>
    </>
  );
};

const StyledFile = styled.div`
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
