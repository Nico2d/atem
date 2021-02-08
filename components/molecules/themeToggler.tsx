import React from "react";
import { ThemeMode } from "../../utils/enums";
import { Switch } from "../atoms/swtich";

export const ThemeToggler = ({ theme, toggleTheme }) => {
  return <Switch value={theme === ThemeMode.dark} method={toggleTheme} />;
};
