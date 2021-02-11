import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { StyledForm } from "../atoms/styledForm";
import { InputField } from "../molecules/inputField";

export const DeleteAccountForm = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h3>Wybierz format:</h3>
      <p>Usuń wraz z kątem wszystkie pliki</p>
      <p>Usuń samo konto</p>

      <p>
        Aby potwierdzić usunięcie konta przepisz <b>usuń UserName</b>
      </p>
      <InputField
        name="register"
        placeholder="Wprowadź zawartość"
        type={inputTypes.password}
        register={register}
      />

      <Button
        text="Usuń"
        styleType="secondary"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledForm>
  );
};
