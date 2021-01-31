import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      background: string;
      cardColor: string;
      linesColor: string;
      fontColor: string;
      green: string;
      red: string;
    };
  }
}
