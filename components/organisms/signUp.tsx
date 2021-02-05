import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignUpForm } from "../../types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { InputErrorMessage } from "../atoms/inputErrorMessage";
import { CheckboxField } from "../molecules/checkboxField";

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
        register={register({ required: true })}
      />
      <InputErrorMessage error={errors.login && "Login jest wymagany"} />
      <Input
        name="email"
        placeholder="Email"
        type={inputTypes.text}
        register={register({ required: true })}
      />
      <InputErrorMessage error={errors.email && "Email jest wymagany"} />
      <Input
        name="password"
        placeholder="Hasło"
        type={inputTypes.password}
        register={register({ required: true })}
      />
      <InputErrorMessage error={errors.password && "Hasło jest wymagane"} />
      <Input
        name="confirmPassword"
        placeholder="Potwierdź hasło"
        type={inputTypes.password}
        register={register({ required: true })}
      />
      <InputErrorMessage
        error={errors.confirmPassword && "Potwierdzenie hasła jest wymagane"}
      />
      <CheckboxField
        text="Zapoznałem się z regulaminem"
        name="acceptedTermsOfService"
        register={register({ required: true })}
      />
      <InputErrorMessage
        error={errors.confirmPassword && "Musisz zapoznać się z regulaminem"}
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
