import styled from "styled-components";

export const CardField = styled.div<{ isActive?: boolean }>`
  font-size: ${({ theme, isActive }) =>
    theme.fonts.fontSize * (isActive ? 1 : 0.9)}rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
  cursor: pointer;

  > svg {
    fill: ${({ theme }) => theme.colors.fontColor};
    float: right;
  }
`;
