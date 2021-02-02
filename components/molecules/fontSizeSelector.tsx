import { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { FontSizeMode } from "../../utils/themeFonts";

export const useFontSizeSelector = () => {
  const [mountedSizeComponent, setMountedSizeComponent] = useState(false);
  const [fontSize, setFontSize] = useLocalStorage("fontSize", "1rem");

  const fontController = (mode: string): void => {
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
