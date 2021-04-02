import React from "react";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";
import { Input } from "../atoms/input";

export const InputField = ({
  name,
  placeholder,
  type,
  register,
}: inputFieldProps) => {
  return (
    <Container>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        register={register}
      />
      <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
    </Container>
  );
};

type inputFieldProps = {
  name: string;
  placeholder: string;
  type: inputTypes;
  register?: any;
};

const Container = styled.div`
  position: relative;
  padding: 0.8rem 0 0;
  width: 100%;
  margin-top: .5rem;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -0.7rem;
  display: block;
  transition: 0.2s;
  opacity: 0.7;
`;
