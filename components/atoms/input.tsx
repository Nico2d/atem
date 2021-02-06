import React from "react";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";

export const Input: React.FC<inputProps> = React.memo(
  ({ name, placeholder, type, register }: inputProps) => {
    return (
      <StyledInput
        type={type}
        ref={register}
        placeholder={placeholder}
        name={name}
      />
    );
  }
);

type inputProps = {
  name: string;
  placeholder: string;
  type: inputTypes;
  register?: any;
};

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.fontColor};
  background: transparent;
  outline: none;
  padding-left: 0.7rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors?.fontColor};
  width: 90%;
`;
