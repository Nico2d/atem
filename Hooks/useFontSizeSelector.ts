import { useState, useEffect } from "react";
import { FontSizeMode } from "../Styles/themeFonts";
import useLocalStorage from "./useLocalStorage";

export const useFontSizeSelector = (): [number, (number) => void, boolean] => {
  const [mountedSizeComponent, setMountedSizeComponent] = useState(false);
  const [fontSize, setFontSize] = useLocalStorage(
    "fontSize",
    FontSizeMode.fontSizeM
  );

  const fontController = (mode: number): void => {
    setFontSize(mode);
  };

  useEffect(() => {
    setMountedSizeComponent(true);
  }, []);

  return [fontSize, fontController, mountedSizeComponent];
};
