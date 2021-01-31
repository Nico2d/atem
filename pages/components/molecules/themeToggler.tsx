import React from "react";
import { Button } from "../atoms/button";
import { useDarkMode } from "../templates/useDarkMode";

export const ThemeToggler = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  return (
    <Button
      text={theme === "light" ? "Light mode" : "Dark mode"}
      onClick={themeToggler}
    />
  );
};
