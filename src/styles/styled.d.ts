import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primaryColors: {
        primary: string;
        black?: string;
        danger: string;
        shadow: string;
        gray: {
          dark: string;
          medium: string;
          light: string;
        };
        white: {
          background: string;
          details: string;
        };
      };
    };
  }
}
