import React from "react";
import { ThemeMode } from "../../utils/enums";
import { Switch } from "../atoms/swtich";

type ThemeToggler = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeToggler: React.FC<ThemeToggler> = ({
  theme,
  toggleTheme,
}) => {
  return <Switch value={theme === ThemeMode.dark} method={toggleTheme} />;
};
