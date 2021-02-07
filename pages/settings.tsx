import styled from "styled-components";
import { CardContainer } from "../components/atoms/cardContainer";
import { PageHeading } from "../components/atoms/pageHeading";
import { FontSizeSelector } from "../components/molecules/fontSizeSelector";
import { ThemeToggler } from "../components/molecules/themeToggler";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";
import { useDarkMode } from "../Hooks/useDarkMode";
import { useFontSizeSelector } from "../Hooks/useFontSizeSelector";
import { device } from "../Styles/breakpoints";

const Settings = () => {
  const [theme, themeToggler] = useDarkMode();
  const [fontSize, fontController] = useFontSizeSelector();

  return (
    <TemplateWithSidebar>
      <PageHeading title="Ustawienia" />
      <CardContainer height="300px" width="932px">
        Konto
      </CardContainer>

      <CardWrapper>
        <CardContainer height="300px" width="450px">
          Powiadomienia
        </CardContainer>
        <CardContainer height="300px" width="450px">
          Personalizacja
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          <FontSizeSelector
            fontSize={fontSize}
            fontController={fontController}
          />
        </CardContainer>
      </CardWrapper>
    </TemplateWithSidebar>
  );
};

export default Settings;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  /* justify-content: center; */

  @media ${device.laptop} {
    flex-flow: row;
  }
`;
