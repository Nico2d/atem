import {
  FontSizeSelector,
  useFontSizeSelector,
} from "../components/molecules/fontSizeSelector";
import {
  ThemeToggler,
  useDarkMode,
} from "../components/molecules/themeToggler";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";

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
