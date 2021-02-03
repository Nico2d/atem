import React, { useState } from "react";
import { Checkbox } from "../atoms/checkbox";

export const CheckboxField = ({ text }: checkboxFieldProps) => {
  const [checked, setChecked] = useState(false);

  const checkboxChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <label>
      <Checkbox
        checked={checked}
        checkedHandler={(event: React.ChangeEvent<HTMLInputElement>) =>
          checkboxChangedHandler(event)
        }
      />
      <span style={{ marginLeft: "0.4rem" }}>{text}</span>
    </label>
  );
};

type checkboxFieldProps = {
  text: string;
};
