import React from "react";
import { inputTypes } from "../../../utils/enums";
import { InputField } from "../inputField";
import { Description } from "./Step1";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step5 = ({ isActive }) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <Description>*Wpisz 0 w celu wystawienia darmowego zadania, </Description>
      <InputField
        placeholder="Cena zadania"
        type={inputTypes.text}
        name="price"
      />
    </StepContentWrapper>
  );
};
