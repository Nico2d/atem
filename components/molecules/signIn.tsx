import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

//ATOMS
import { Message } from "../atoms/message";
import { Button } from "../atoms/button";

//MOLECULES
import { InputField } from "../molecules/inputField";
import { CheckboxField } from "../molecules/checkboxField";

//TYPES
import { inputTypes } from "../../utils/enums";
import { SignInForm, MessageType } from "../../Types";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../store/slices/userSlice";
import { RootState } from "../../store/rootReducer";

export const SignIn = () => {
  const { register, errors, handleSubmit } = useForm<SignInForm>({
    mode: "onChange",
  });

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onSubmit = async (data: SignInForm) => {
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
      {user.errors.length > 0 &&
        user.errors.map((error) => (
          <Message message={error.message} messageType={MessageType.error} />
        ))}
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
  width: 100%;

  > * {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2.5rem;
  }
`;
