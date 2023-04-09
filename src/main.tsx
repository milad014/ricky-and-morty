import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';


import { Provider } from 'react-redux'
import store from './store'

import theme from './theme';
import 'virtual:windi.css'
import './index.css'

import { ApolloProvider } from '@apollo/client';
import apolloClient from './graphql/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ApolloProvider>,
    </Provider>
  </React.StrictMode >,
)
