import styled from "styled-components";

export const NavigationButton = styled.div<{ isActive?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.cardColor};
  min-width: 35px;
  height: 35px;
  border-radius: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 0 1rem;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 1.5rem;
  }
`;
