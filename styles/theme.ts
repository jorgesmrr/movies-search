import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  radius: "15px",
  color: {
    white: "white",
    neutral: {
      lightest: "#FFFFFF",
      lighter: "#D8D8D8",
      light: "#B1B1B1",
      default: "#8A8A8A",
      dark: "#626262",
      darker: "#3B3B3B",
      darkest: "#141414",
    },
  },
  shadow: [
    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
  ],
  fontSize: {
    mobile: [0.8, 1, 1.25, 1.563, 1.953, 2.441, 3.052],
    desktop: [0.707, 1, 1.414, 1.999, 2.827, 3.998],
  },
  breakpoints: {
    sm: 996,
    md: 1024,
  },
  pageWidth: 78,
};

export default theme;
