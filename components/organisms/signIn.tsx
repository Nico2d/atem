import React from "react";
import { Input } from "../atoms/input";
import { inputTypes } from "../../utils/enums";

export const SignIn = () => {
  return (
    <div>
      <Input name="login" placeholder="Login" type={inputTypes.text} />
    </div>
  );
};
