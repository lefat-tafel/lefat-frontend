import React from 'react';
import 'normalize.css';
import './index.css';
import { Header } from './components/Header';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Routes } from './Routes';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
}
