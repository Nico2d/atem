import React from "react";
import { Button } from "../atoms/button";

export const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <Button
      text={theme === "light" ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
    />
  );
};
