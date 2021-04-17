import React from "react";
import { CardContainer } from "../atoms/card/cardContainer";
import { CardDesc } from "../atoms/card/cardDesc";
import { CardHeading } from "../atoms/card/cardHeading";
import { CardField } from "../atoms/card/cardField";
import { Select } from "../atoms/select";
import { FontSizeSelector } from "../molecules/fontSizeSelector";
import { ThemeToggler } from "../molecules/themeToggler";
import { useDarkMode } from "../../Hooks/useDarkMode";
import { useFontSizeSelector } from "../../Hooks/useFontSizeSelector";

export const Personalization = () => {
  const [theme, themeToggler] = useDarkMode();
  const [fontSize, fontController] = useFontSizeSelector();

  return (
    <CardContainer height="300px" width="450px">
      <CardHeading>Personalizacja </CardHeading>
      <CardDesc>Dostosuj treść i interfejs pod siebie</CardDesc>

      <CardField>
        Ciemny motyw
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
      </CardField>
      <CardField>
        Wielkość liter
        <FontSizeSelector fontSize={fontSize} fontController={fontController} />
      </CardField>
      <CardField>
        Język
        <Select
          optionList={[
            { name: "Polski", value: "polish" },
            { name: "Angielski", value: "english" },
          ]}
          method={(value) => {
            console.log("zmiana jezyka na:", value);
          }}
        />
      </CardField>
    </CardContainer>
  );
};
