import { FontSizeMode } from "../../Styles/themeFonts";
import { Select } from "../atoms/select";

export const FontSizeSelector = ({ fontSize, fontController }) => {
  const Array = [
    {
      name: "Małe",
      value: FontSizeMode.fontSizeS,
    },
    {
      name: "Normalne",
      value: FontSizeMode.fontSizeM,
    },
    {
      name: "Duże",
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
