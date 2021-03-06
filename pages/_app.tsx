import React, { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Page from "../components/page/Page";
import theme from "../components/style/theme";
import "@bit/jorgemoreira.headless.styles";
import "./../styles/index.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Source+Sans+Pro:wght@700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ThemeProvider>
);

export default App;
