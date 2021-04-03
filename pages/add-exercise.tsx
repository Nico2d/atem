import { useState } from "react";
import { PageHeading } from "../components/atoms/pageHeading";
import React from "react";
import { DragAndDrop } from "../components/atoms/dropzone";
import { Button } from "../components/atoms/button";

const AddExercise = () => {
  return (
    <>
      <PageHeading title="Wstaw zadanie" />
      {/* <DragAndDrop /> */}
      <Button text="Dodaj z dysku" styleType="secondary" />
      <Button text="Wstecz" styleType="secondary" />
      <Button text="Dodaj" />
    </>
  );
};

export default AddExercise;
