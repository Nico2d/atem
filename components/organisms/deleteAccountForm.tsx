import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { CardField } from "../atoms/cardField";
import { Switch } from "../atoms/swtich";
import { InputField } from "../molecules/inputField";

export const DeleteAccountForm = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);
  const [isSavingFiles, setSavingFiles] = useState(true);

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <CardField>
        Czy zachować Twoje pliki?
        <Switch
          value={isSavingFiles}
          method={() => setSavingFiles(!isSavingFiles)}
        />
      </CardField>

      <StyledDesc>
        Aby potwierdzić usunięcie konta przepisz <b>usuń UserName</b>
      </StyledDesc>
      <InputField
        name="register"
        placeholder="Wprowadź zawartość"
        type={inputTypes.password}
        register={register}
      />

      <Button
        text="Usuń konto"
        styleType="secondary"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding-left: 1rem;

  button {
    float: right;
  }
`;

const StyledDesc = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;

  b {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.fontSize * 1}rem;
  }
`;
