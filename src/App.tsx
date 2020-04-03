import React from 'react';
import 'normalize.css';
import './index.css';
import { Header } from './components/Header';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Routes } from './Routes';
import { theme } from './theme';
import { ThemeProvider, StylesProvider } from '@material-ui/core';
import { Footer } from './components/Footer';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StylesProvider injectFirst>
          <Header />
          <Routes />
          <Footer />
        </StylesProvider>
      </ThemeProvider>
    </Router>
  );
}
