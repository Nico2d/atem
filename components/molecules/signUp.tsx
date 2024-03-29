import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorDto, SignUpForm } from "../../Types";
import { inputTypes } from "../../utils/enums";
import { Button } from "../atoms/Button";
import { Message } from "../atoms/message";
import { CheckboxField } from "./checkboxField";
import { ErrorMessage } from "@hookform/error-message";
import { device } from "../../Styles/breakpoints";
import { InputField } from "./inputField";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/userSlice";
import { RootState } from "../../store/rootReducer";
import { MessageType } from "../../Types/MessageType";

export const SignUp = () => {
  const { register, errors, handleSubmit, watch } = useForm<SignUpForm>({
    mode: "onChange",
  });

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data: SignUpForm) => {
    dispatch(registerUser(data));
  };

  return (
    <StyledSignIn>
      <InputField
        name="username"
        placeholder="Nazwa użytkownika"
        type={inputTypes.text}
        register={register({ required: "Nazwa użytkownika jest wymagana" })}
      />
      <ErrorMessage
        errors={errors}
        name="username"
        render={({ message }) => (
          <Message message={message} messageType={MessageType.error} />
        )}
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
        render={({ message }) => (
          <Message message={message} messageType={MessageType.error} />
        )}
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
        render={({ message }) => (
          <Message message={message} messageType={MessageType.error} />
        )}
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
        render={({ message }) => (
          <Message message={message} messageType={MessageType.error} />
        )}
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
        render={({ message }) => (
          <Message message={message} messageType={MessageType.error} />
        )}
      />
      {user.errors.length > 0 &&
        user.errors.map((error: ErrorDto) => (
          <Message message={error.message} messageType={MessageType.error} />
        ))}
      {user.userSignUpSuccess && (
        <Message
          message="Rejestracja przebiegła pomyślnie. Możesz się teraz zalogować"
          messageType={MessageType.success}
        />
      )}
      <Button
        variant="primary"
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
  width: 100%;

  > * {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2.5rem;
  }
`;
