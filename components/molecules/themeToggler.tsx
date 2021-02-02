import React, { useEffect, useState } from "react";
import { Button } from "../atoms/button";
import { ThemeMode } from "../../utils/enums";
import useLocalStorage from "../../Hooks/useLocalStorage";

export const useDarkMode = () => {
  const [mountedThemeComponent, setMountedThemeComponent] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", ThemeMode.light);

  const setMode = (mode: ThemeMode): void => {
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === ThemeMode.light
      ? setMode(ThemeMode.dark)
      : setMode(ThemeMode.light);
  };

  useEffect(() => {
    setMountedThemeComponent(true);
  }, []);

  return [theme, themeToggler, mountedThemeComponent];
};

export const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <Button
      text={theme === ThemeMode.light ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
    />
  );
};
