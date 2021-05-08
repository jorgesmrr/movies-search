import { ThemeProvider } from "styled-components";
import Page from "../components/page/Page";
import theme from "../styles/theme";
import "./../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

export default MyApp;
