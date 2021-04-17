import { useState, useEffect } from "react";
import { ThemeMode } from "../utils/enums";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (): [string, () => void, boolean] => {
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
