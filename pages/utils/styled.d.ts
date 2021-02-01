import "styled-components";

declare module "styled-components" {
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
  export interface DefaultTheme {
    borderRadius: string;
    fontSize: string;
    colors: Colors;
  }
}
