import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./colors";
import { useDarkMode } from "./useDarkMode";

export const Layout = ({ children }: any) => {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};
