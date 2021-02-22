import React from "react";
import { inputTypes } from "../../utils/enums";
import styled from "styled-components";
import { CheckboxField } from "../molecules/checkboxField";
import { useForm } from "react-hook-form";
import { Button } from "../atoms/button";
import { SignInForm } from "../../Types";
import { Message } from "../atoms/message";
import { ErrorMessage } from "@hookform/error-message";
import { InputField } from "../molecules/inputField";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/slices/userSlice";
import { MessageType } from "../../Types/MessageType";

export const SignIn = () => {
  const { register, errors, handleSubmit, unregister } = useForm<SignInForm>({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: SignInForm) => {
    console.log(data);
    dispatch(signInUser(data));
  };

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
