import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00b894',
    },
    secondary: {
      main: '#0984e3',
    },
    background: {
      default: '#f1f2f6',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial',
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Green Hydrogen Credit System</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
