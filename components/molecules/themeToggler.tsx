import React, { useEffect, useState } from "react";
import { Button } from "../atoms/button";
import { ThemeMode } from "../../utils/enums";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(ThemeMode.light);
  const [mountedThemeComponent, setMountedThemeComponent] = useState(false);

  const setMode = (mode: ThemeMode): void => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === ThemeMode.light
      ? setMode(ThemeMode.dark)
      : setMode(ThemeMode.light);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    console.log(ThemeMode[localTheme]);
    localTheme ? setTheme(ThemeMode[localTheme]) : setMode(ThemeMode.light);
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
