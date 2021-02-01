import { useEffect, useState } from "react";

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
      <option value=".8rem">mała</option>
      <option value="1rem">normalna</option>
      <option value="1.2rem">duża</option>
    </select>
  );
};
