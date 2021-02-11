import styled from "styled-components";

export const CardField = styled.div`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 400;
  cursor: pointer;

  > svg {
    fill: ${({ theme }) => theme.colors.fontColor};
    float: right;
  }
`;
