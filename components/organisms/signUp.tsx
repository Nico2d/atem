import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignUpForm } from "../../types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { InputErrorMessage } from "../atoms/inputErrorMessage";
import { CheckboxField } from "../molecules/checkboxField";
import { ErrorMessage } from "@hookform/error-message";

export const SignUp = () => {
  const { register, errors, handleSubmit, unregister } = useForm<SignUpForm>({
    mode: "onChange",
  });
  const onSubmit = (data: SignUpForm) => console.log(data);

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
        name="email"
        placeholder="Email"
        type={inputTypes.text}
        register={register({
          required: "Email jest wymagany",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            message: "Email jest niepoprawny",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
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
      <Input
        name="confirmPassword"
        placeholder="Potwierdź hasło"
        type={inputTypes.password}
        register={register({ required: "Potwierdzenie hasła jest wymagane" })}
      />
      <ErrorMessage
        errors={errors}
        name="confirmPassword"
        render={({ message }) => <InputErrorMessage error={message} />}
      />
      <CheckboxField
        text="Zapoznałem się z regulaminem"
        name="acceptedTermsOfService"
        register={register({ required: "Musisz zaakceptować regulamin" })}
      />
      <ErrorMessage
        errors={errors}
        name="acceptedTermsOfService"
        render={({ message }) => <InputErrorMessage error={message} />}
      />
      <Button
        styleType="primary"
        text="Zarejestruj"
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
