import React from "react";
import styled from "styled-components";

export const InputErrorMessage = ({ error }: inputErrorMessageProps) => {
  return <StyledErrorMessage>{error}</StyledErrorMessage>;
};

type inputErrorMessageProps = {
  error: string;
};

const StyledErrorMessage = styled.h4`
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.family};
  font-weight: 300;
  font-size: 0.9rem;
`;
