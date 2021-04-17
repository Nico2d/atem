import React from "react";
import { useFormContext } from "react-hook-form";
import { inputTypes } from "../../../utils/enums";
import { Whitespace } from "../../atoms/Whitespace";
import { InputField } from "../inputField";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step4 = ({ isActive }) => {
  const { register } = useFormContext();

  return (
    <StepContentWrapper isActive={isActive}>
      <Whitespace height={1} />
      <InputField
        placeholder="Prowadzący"
        type={inputTypes.text}
        name="teacher"
        register={register}
      />
      <InputField
        placeholder="Otrzymana ocena"
        type={inputTypes.number}
        name="grade"
        register={register}
      />
    </StepContentWrapper>
  );
};
