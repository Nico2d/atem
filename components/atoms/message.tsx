import React from "react";
import styled from "styled-components";
import { MessageType } from "../../Types/MessageType";

export const Message = ({ message, messageType }: inputErrorMessageProps) => {
  return <StyledMessage messageType={messageType}>{message}</StyledMessage>;
};

type inputErrorMessageProps = {
  message: string;
  messageType: MessageType;
};

const StyledMessage = styled.h4<{ messageType: MessageType }>`
  color: ${({ theme }) => theme.colors?.red};
  font-size: 0.9rem;
`;
