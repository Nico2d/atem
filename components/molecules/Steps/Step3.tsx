import React from "react";
import { useFormContext } from "react-hook-form";
import { inputTypes } from "../../../utils/enums";
import { Whitespace } from "../../atoms/Whitespace";
import { InputField } from "../inputField";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step3 = ({ isActive }) => {
  const { register } = useFormContext();

  return (
    <StepContentWrapper isActive={isActive}>
      <Whitespace height={1} />
      <InputField
        placeholder="Nazwa przedmiotu"
        type={inputTypes.text}
        name="subject"
        register={register}
      />
      <InputField
        placeholder="Tytuł zadania"
        type={inputTypes.text}
        name="homework"
        register={register}
      />
      <InputField
        placeholder="Opis ćwiczenia"
        type={inputTypes.textArea}
        name="description"
        register={register}
      />
    </StepContentWrapper>
  );
};
