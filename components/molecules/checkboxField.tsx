import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../atoms/checkbox";

export const CheckboxField = ({ text, name, register }: checkboxFieldProps) => {
  const [checked, setChecked] = useState(false);

  const checkboxChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledLabel>
      <Checkbox
        name={name}
        register={register}
        checked={checked}
        checkedHandler={(event: React.ChangeEvent<HTMLInputElement>) =>
          checkboxChangedHandler(event)
        }
      />
      <span style={{ marginLeft: "0.4rem" }}>{text}</span>
    </StyledLabel>
  );
};

type checkboxFieldProps = {
  text: string;
  name: string;
  register?: any;
};

const StyledLabel = styled.label`
  cursor: pointer;
  user-select: none;
`;
