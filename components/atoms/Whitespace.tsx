import styled from "styled-components";

export const Whitespace = styled.div<{ height: number }>`
  height: ${({ height }) => height}rem;
`;
