import styled from "styled-components";

export const CardField = styled.div`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > svg {
    fill: ${({ theme }) => theme.colors.white};
    float: right;
  }
`;
