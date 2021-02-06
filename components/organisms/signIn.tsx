import React from "react";
import { Input } from "../atoms/input";
import { inputTypes } from "../../utils/enums";
import styled from "styled-components";
import { CheckboxField } from "../molecules/checkboxField";
import { useForm } from "react-hook-form";
import { Button } from "../atoms/button";
import { SignInForm } from "../../Types";
import { InputErrorMessage } from "../atoms/inputErrorMessage";
import { ErrorMessage } from "@hookform/error-message";

export const SignIn = () => {
  const { register, errors, handleSubmit, unregister } = useForm<SignInForm>({
    mode: "onChange",
  });
  const onSubmit = (data: SignInForm) => console.log(data);

  return (
    <StyledSignIn>
      <Input
        name="login"
        placeholder="Login"
        type={inputTypes.text}
        register={register({ required: "Login jest wymagany" })}
      />
      <ErrorMessage
        errors={errors}
        name="login"
        render={({ message }) => <InputErrorMessage error={message} />}
      />
      <Input
        name="password"
        placeholder="Hasło"
        type={inputTypes.password}
        register={register({ required: "Hasło jest wymagane" })}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <InputErrorMessage error={message} />}
      />
      <CheckboxField
        text="Pozostań zalogowany"
        name="staySignIn"
        register={register}
      />
      <Button
        styleType="primary"
        text="Zaloguj"
        clicked={handleSubmit(onSubmit)}
      />
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2.5rem;
  }
`;
