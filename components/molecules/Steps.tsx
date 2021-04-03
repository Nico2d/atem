import { useState } from "react";
import styled from "styled-components";

type StepsProps = {
  currentStep?: number;
};

export const Steps: React.FC<StepsProps> = ({ currentStep = 1 }) => {
  return (
    <div>
      <p>Step {currentStep}/5</p>

      <StepsContainer>
        {[1, 2, 3, 4, 5].map((item) => (
          <SingleStep isActive={item <= currentStep} />
        ))}
      </StepsContainer>
    </div>
  );
};

const StepsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SingleStep = styled.div<{ isActive }>`
  height: 2px;
  width: 50px;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.fontColor};
`;
