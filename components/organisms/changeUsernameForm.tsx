import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { StyledForm } from "../atoms/styledForm";
import { InputField } from "../molecules/inputField";

export const ChangeUsernameForm = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="username"
        placeholder="Nowa nazwa użytkownika"
        type={inputTypes.password}
        register={register}
      />

      <Button
        text="Sprawdź"
        styleType="secondary"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledForm>
  );
};
