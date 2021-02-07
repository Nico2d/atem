import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignUpForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/button";
import { InputErrorMessage } from "../atoms/inputErrorMessage";
import { CheckboxField } from "./checkboxField";
import { ErrorMessage } from "@hookform/error-message";
import { device } from "../../Styles/breakpoints";
import { InputField } from "./inputField";

export const SignUp = () => {
  const { register, errors, handleSubmit, watch } = useForm<SignUpForm>({
    mode: "onChange",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data: SignUpForm) => console.log(data);

  return (
    <StyledSignIn>
      <InputField
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
      <InputField
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
      <InputField
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
      <InputField
        name="confirmPassword"
        placeholder="Potwierdź hasło"
        type={inputTypes.password}
        register={register({
          required: "Potwierdzenie hasła jest wymagane",
          validate: (value) =>
            value === password.current || "Hasła się nie zgadzają",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="confirmPassword"
        render={({ message }) => <InputErrorMessage error={message} />}
      />
      <TermsOfServiceWrapper>
        <CheckboxField
          text="Zapoznałem się z"
          name="acceptedTermsOfService"
          register={register({ required: "Musisz zaakceptować regulamin" })}
        />
        <TermsOfService>regulaminem</TermsOfService>
      </TermsOfServiceWrapper>
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

const TermsOfServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

const TermsOfService = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors?.primary};
  cursor: pointer;
  margin-top: 0.5rem;

  @media ${device.mobileL} {
    margin-left: 0.5rem;
    margin-top: 0;
  }
`;

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