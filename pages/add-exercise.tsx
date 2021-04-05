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
import { device } from "../Styles/breakpoints";
import { useForm, FormProvider } from "react-hook-form";

const AddExercise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    mode: "onChange",
  });

  console.log(methods.watch());

  const onSubmit = (data) => console.log("onSubmit: ", data);

  return (
    <Container>
      <PageHeading title="Dodaj zadanie" />

      <StyledContainer>
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
                  styleType="secondary"
                  clicked={() =>
                    setCurrentStep((currentStep) => currentStep - 1)
                  }
                />
              )}

              {currentStep < 5 ? (
                <Button
                  text="Dalej"
                  clicked={() =>
                    setCurrentStep((currentStep) => currentStep + 1)
                  }
                />
              ) : (
                <Button text="Prześlij" />
              )}
            </StepNavigation>
          </form>
        </FormProvider>

        <Whitespace height={3} />
      </StyledContainer>
    </Container>
  );
};

export default AddExercise;

const Container = styled.div`
  padding: 0 1rem;

  @media ${device.laptop} {
    min-width: 900px;
  }
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

const StyledContainer = styled.div`
  padding: 0 1rem;
`;
