import { useEffect, useState } from "react";
import { FontSizeMode } from "../../utils/themeFonts";

export const useFontSizeSelector = () => {
  const [fontSize, setfontSize] = useState("1rem");
  const [mountedSizeComponent, setmountedSizeComponent] = useState(false);

  const fontController = (mode: string): void => {
    window.localStorage.setItem("fontSize", mode);
    setfontSize(mode);
  };

  useEffect(() => {
    const localFontSize = window.localStorage.getItem("fontSize");
    localFontSize ? setfontSize(localFontSize) : fontController("1rem");
    setmountedSizeComponent(true);
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
