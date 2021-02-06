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
      <Label htmlFor={name}>{placeholder}</Label>
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
`;

const Label = styled.label`
  position: absolute;
  top: -0.2rem;
  padding-left: 0.4rem;
  display: block;
  transition: 0.2s;
`;
