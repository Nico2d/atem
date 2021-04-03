import React from "react";
import { inputTypes } from "../../../utils/enums";
import { Whitespace } from "../../atoms/Whitespace";
import { InputField } from "../inputField";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step4 = ({ isActive }) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <Whitespace height={1} />
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
