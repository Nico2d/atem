import { useState } from "react";
import { PageHeading } from "../components/atoms/pageHeading";
import React from "react";
import { Button } from "../components/atoms/Button";
import { StepsCounter } from "../components/molecules/Steps/StepsCounter";
import styled from "styled-components";
import { Whitespace } from "../components/atoms/Whitespace";
import { Step1 } from "../components/molecules/Steps/Step1";
import { Step2 } from "../components/molecules/Steps/Step2";
import { Step3 } from "../components/molecules/Steps/Step3";
import { Step4 } from "../components/molecules/Steps/Step4";
import { Step5 } from "../components/molecules/Steps/Step5";
import { useForm, FormProvider } from "react-hook-form";

const AddExercise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => console.log("onSubmit(dodanie zadania): ", data);

  return (
    <StyledContainer>
      <PageHeading title="Dodaj zadanie" />

      <StepsCounter currentStep={currentStep} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Step1 isActive={currentStep === 1} />
          <Step2 isActive={currentStep === 2} />
          <Step3 isActive={currentStep === 3} />
          <Step4 isActive={currentStep === 4} />
          <Step5 isActive={currentStep === 5} />

          <StepNavigation>
            {currentStep > 1 && (
              <Button
                text="Wstecz"
                variant="secondary"
                clicked={() => setCurrentStep((currentStep) => currentStep - 1)}
              />
            )}

            {currentStep < 5 ? (
              <Button
                text="Dalej"
                clicked={() => setCurrentStep((currentStep) => currentStep + 1)}
              />
            ) : (
              <Button type="submit" text="Prześlij" />
            )}
          </StepNavigation>
        </form>
      </FormProvider>

      <Whitespace height={3} />
    </StyledContainer>
  );
};

export default AddExercise;

const StyledContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 964px;
`;

const StepNavigation = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;

  button:only-child {
    margin-left: auto;
  }
`;
