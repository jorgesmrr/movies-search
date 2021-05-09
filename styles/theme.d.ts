import "styled-components";

// and extend them!
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
    };
    shadow: string[];
    fontSize: {
      mobile: number[];
      desktop: number[];
    };
  }
}
