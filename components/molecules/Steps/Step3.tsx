import React from "react";
import { inputTypes } from "../../../utils/enums";
import { InputField } from "../inputField";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step3 = ({ isActive }) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <InputField
        placeholder="Nazwa przedmiotu"
        type={inputTypes.text}
        name="subject"
      />
      <InputField
        placeholder="Tytuł zadania"
        type={inputTypes.text}
        name="homework"
      />
      <InputField
        placeholder="Opis ćwiczenia"
        type={inputTypes.textArea}
        name="description"
      />
    </StepContentWrapper>
  );
};
