import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const customRender = (ui: React.ReactElement) =>
  render(ui, { wrapper: Wrapper });
