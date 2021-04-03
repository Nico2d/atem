import React from "react";
import { useForm } from "react-hook-form";
import { SignInForm } from "../../../Types";
import { inputTypes } from "../../../utils/enums";
import { Button } from "../../atoms/Button";
import { StyledForm } from "../../atoms/styledForm";
import { InputField } from "../inputField";

export const ChangePasswordForm = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="oldPassword"
        placeholder="Stare Hasło"
        type={inputTypes.password}
        register={register}
      />
      <InputField
        name="newPassword"
        placeholder="Nowe Hasło"
        type={inputTypes.password}
        register={register}
      />
      <InputField
        name="repeatPassword"
        placeholder="Powtórz Hasło"
        type={inputTypes.password}
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
