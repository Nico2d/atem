import React from "react";
import { Button } from "../atoms/button";
import { ThemeMode } from "../../utils/enums";

export const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <Button
      styleType="primary"
      text={theme === ThemeMode.light ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
    />
  );
};
