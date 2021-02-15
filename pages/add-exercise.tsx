import { useState } from "react";
import { PageHeading } from "../components/atoms/pageHeading";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";

import React from "react";
import { DragAndDrop } from "../components/atoms/dropzone";

const AddExercise = () => {
  const [files, setFiles] = useState([
    "nice.pdf",
    "verycool.jpg",
    "amazing.png",
    "goodstuff.mp3",
    "thankyou.doc",
  ]);

  const handlerOnDrop = (files, rejectedFiles) => {
    console.log(files);
  };

  return (
    <TemplateWithSidebar>
      <PageHeading title="Wstaw zadanie" />

      <DragAndDrop />
    </TemplateWithSidebar>
  );
};

export default AddExercise;
