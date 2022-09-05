import Header from '../components/header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from "next/head";
import * as React from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <Head>
              <title>NextJS Microservices</title>
              <meta name="description" content="NextJS Microservices" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Header />
              <Component {...pageProps} />
          </ThemeProvider>
      </div>
  )
}

export default MyApp