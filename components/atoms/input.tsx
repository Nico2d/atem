import React from "react";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";

export const Input: React.FC<inputProps> = ({
  name,
  placeholder,
  type,
  register,
  value,
}) => {
  return (
    <StyledInput
      type={type}
      ref={register}
      placeholder={placeholder}
      name={name}
      id={name}
      defaultValue={value}
    />
  );
};

type inputProps = {
  name: string;
  placeholder: string;
  type: inputTypes;
  register?: any;
  value?: string | number;
};

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.linesColor};
  background: transparent;
  outline: none;
  padding-left: 0.7rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.fontColor};
  width: 100%;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    cursor: text;
    top: 1rem;
    opacity: 0.9;
    left: 0.7rem;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: -0.7rem;
      left: 0;
      display: block;
      transition: 0.2s;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.fontColor};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
