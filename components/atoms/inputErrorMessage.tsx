import React from "react";
import styled from "styled-components";

export const InputErrorMessage = ({ error }: inputErrorMessageProps) => {
  return <StyledErrorMessage>{error}</StyledErrorMessage>;
};

type inputErrorMessageProps = {
  error: string;
};

const StyledErrorMessage = styled.h4`
  color: ${({ theme }) => theme.colors?.red};
  font-size: 0.9rem;
`;
