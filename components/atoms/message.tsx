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
  color: ${({ theme, messageType }) =>
    messageType === MessageType.error
      ? theme.colors?.red
      : messageType === MessageType.success
      ? theme.colors?.green
      : null};
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
`;
