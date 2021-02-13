import React from "react";
import { useForm } from "react-hook-form";
import { SignInForm } from "../../../Types";
import { inputTypes } from "../../../utils/enums";
import { Button } from "../../atoms/button";
import { StyledForm } from "../../atoms/styledForm";
import { InputField } from "../inputField";

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
