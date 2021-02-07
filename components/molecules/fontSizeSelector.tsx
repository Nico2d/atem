import { FontSizeMode } from "../../Styles/themeFonts";

export const FontSizeSelector = ({ fontSize, fontController }) => {
  return (
    <select value={fontSize} onChange={(e) => fontController(e.target.value)}>
      <option value={FontSizeMode.fontSizeS}>mała</option>
      <option value={FontSizeMode.fontSizeM}>normalna</option>
      <option value={FontSizeMode.fontSizeL}>duża</option>
    </select>
  );
};
