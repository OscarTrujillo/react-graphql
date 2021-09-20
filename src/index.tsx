import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
} as any);

render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
