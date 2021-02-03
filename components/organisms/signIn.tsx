import React from "react";
import { Input } from "../atoms/input";
import { inputTypes } from "../../utils/enums";
import styled from "styled-components";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Input name="login" placeholder="Login" type={inputTypes.text} />
      <Input name="password" placeholder="Hasło" type={inputTypes.password} />
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  input {
    margin-bottom: 1rem;
  }
`;
