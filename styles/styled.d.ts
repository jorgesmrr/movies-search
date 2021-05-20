import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    radius: string;
    color: {
      white: string;
      neutral: {
        lightest: string;
        lighter: string;
        light: string;
        default: string;
        dark: string;
        darker: string;
        darkest: string;
      };
      accent: {
        lightest: string;
        lighter: string;
        light: string;
        default: string;
        dark: string;
        darker: string;
        darkest: string;
      };
    };
    shadow: string[];
    fontSize: {
      mobile: number[];
      desktop: number[];
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    pageWidth: number;
  }
}
