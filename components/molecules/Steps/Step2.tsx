import React from "react";
import { inputTypes } from "../../../utils/enums";
import { Whitespace } from "../../atoms/Whitespace";
import { InputField } from "../inputField";
import { StepContentWrapper } from "./StepContentWrapper.style";

export const Step2 = ({
  isActive,
  //  register
}) => {
  return (
    <StepContentWrapper isActive={isActive}>
      <Whitespace height={1} />
      <InputField
        placeholder="Nazwa uczelni"
        type={inputTypes.text}
        name="university"
        // register={register}
      />
      <InputField
        placeholder="Kierunek"
        type={inputTypes.text}
        name="division"
        // register={register}
      />
      <InputField
        placeholder="Semestr"
        type={inputTypes.text}
        name="semestr"
        // register={register}
      />
    </StepContentWrapper>
  );
};
