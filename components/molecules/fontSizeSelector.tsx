import { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { FontSizeMode } from "../../Styles/themeFonts";

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

export const FontSizeSelector = ({ fontSize, fontController }) => {
  return (
    <select value={fontSize} onChange={(e) => fontController(e.target.value)}>
      <option value={FontSizeMode.fontSizeS}>mała</option>
      <option value={FontSizeMode.fontSizeM}>normalna</option>
      <option value={FontSizeMode.fontSizeL}>duża</option>
    </select>
  );
};
