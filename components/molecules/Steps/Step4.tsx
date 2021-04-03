import React from "react";
import { inputTypes } from "../../../utils/enums";
import { InputField } from "../inputField";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step4 = ({ isActive }) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <InputField
        placeholder="Prowadzący"
        type={inputTypes.text}
        name="teacher"
      />
      <InputField
        placeholder="Otrzymana ocena"
        type={inputTypes.number}
        name="grade"
      />
    </StepContentWrapper>
  );
};
