import React, { useEffect, useState } from "react";
import { Button } from "../atoms/button";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [mountedThemeComponent, setmountedThemeComponent] = useState(false);

  const setMode = (mode: string): void => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    setmountedThemeComponent(true);
  }, []);

  return [theme, themeToggler, mountedThemeComponent];
};

export const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <Button
      text={theme === "light" ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
    />
  );
};
