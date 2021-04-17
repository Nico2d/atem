import React from "react";
import { useFormContext } from "react-hook-form";
import { inputTypes } from "../../../utils/enums";
import { Whitespace } from "../../atoms/Whitespace";
import { InputField } from "../inputField";
import { Description } from "./Step1";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step5 = ({ isActive }) => {
  const { register } = useFormContext();

  return (
    <StepContentWrapper isActive={isActive}>
      <Description>*Wpisz 0 w celu wystawienia darmowego zadania, </Description>
      <Whitespace height={1} />

      <InputField
        placeholder="Cena zadania"
        type={inputTypes.number}
        name="price"
        register={register}
      />
    </StepContentWrapper>
  );
};
