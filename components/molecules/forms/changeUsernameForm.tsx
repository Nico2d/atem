import React from "react";
import { useForm } from "react-hook-form";
import { SignInForm } from "../../../Types";
import { inputTypes } from "../../../utils/enums";
import { Button } from "../../atoms/Button";
import { StyledForm } from "../../atoms/styledForm";
import { InputField } from "../inputField";

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
        variant="secondary"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledForm>
  );
};
