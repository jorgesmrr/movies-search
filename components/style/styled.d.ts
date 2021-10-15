import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    color: {
      accent: {
        lightest: string;
        lighter: string;
        light: string;
        default: string;
        dark: string;
        darker: string;
        darkest: string;
      };
      neutral: {
        lightest: string;
        lighter: string;
        light: string;
        default: string;
        dark: string;
        darker: string;
        darkest: string;
        black: string;
      };
      white: string;
    };
    dimensions: {
      navbarHeight: string;
      pageWidth: number;
      radius: string;
    };
    fontSize: {
      mobile: number[];
      desktop: number[];
    };
    shadow: string[];
  }
}
