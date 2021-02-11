import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { InputField } from "../molecules/inputField";

export const ChangeDefaultSettingsForm = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="university"
        placeholder="Nazwa uczelni"
        type={inputTypes.text}
        register={register}
      />
      <InputField
        name="fieldOfStudy"
        placeholder="Kierdunek studiów"
        type={inputTypes.text}
        register={register}
      />

      <Button
        text="Zapisz"
        styleType="secondary"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto;
    margin-bottom: 2.5rem;
  }

  > button {
    padding: 1rem 5rem;
  }
`;
