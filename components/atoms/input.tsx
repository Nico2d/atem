import React from "react";
import styled from "styled-components";
import { inputTypes } from "../../utils/enums";

export const Input: React.FC<inputProps> = React.memo(
  ({ name, placeholder, type }: inputProps) => {
    return <StyledInput type={type} placeholder={placeholder} name={name} />;
  }
);

type inputProps = {
  name: string;
  placeholder: string;
  type: inputTypes;
};

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors?.fontColor};
  background: transparent;
  outline: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors?.fontColor};
  width: 90%;
`;
