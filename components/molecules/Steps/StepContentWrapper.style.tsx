import styled from "styled-components";

export const StepContentWrapper = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;
