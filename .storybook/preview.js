import { ThemeProvider } from "styled-components";
import theme from "../components/style/theme";
import "@bit/jorgemoreira.headless.styles";
import "./../styles/index.css";

const { worker } = require("../network/msw/browser");
worker.start();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
