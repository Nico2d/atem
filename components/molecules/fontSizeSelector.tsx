import { FontSizeMode } from "../../Styles/themeFonts";
import { Select } from "../atoms/select";

export const FontSizeSelector = ({ fontSize, fontController }) => {
  const Array = [
    {
      name: "małe",
      value: FontSizeMode.fontSizeS,
    },
    {
      name: "normalne",
      value: FontSizeMode.fontSizeM,
    },
    {
      name: "duże",
      value: FontSizeMode.fontSizeL,
    },
  ];

  return (
    <Select
      optionList={Array}
      method={fontController}
      defaultValue={Array[1]}
    />
  );
};
