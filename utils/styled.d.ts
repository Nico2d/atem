import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
  export interface Colors {
    primary: string;
    background: string;
    cardColor: string;
    linesColor: string;
    fontColor: string;
    green: string;
    red: string;
    sidebar: string;
  }

  export interface Fonts {
    family: string;
    fontSize: number;
  }
}
