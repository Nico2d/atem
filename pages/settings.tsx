import { FontSizeSelector } from "../components/molecules/fontSizeSelector";
import { ThemeToggler } from "../components/molecules/themeToggler";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";
import { useDarkMode } from "../Hooks/useDarkMode";
import { useFontSizeSelector } from "../Hooks/useFontSizeSelector";

const Settings = () => {
  const [theme, themeToggler] = useDarkMode();
  const [fontSize, fontController] = useFontSizeSelector();

  return (
    <TemplateWithSidebar>
      Settings
      <ThemeToggler theme={theme} toggleTheme={themeToggler} />
      <FontSizeSelector fontSize={fontSize} fontController={fontController} />
    </TemplateWithSidebar>
  );
};

export default Settings;
