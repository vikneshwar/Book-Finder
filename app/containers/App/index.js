import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import theme from '../../utils/theme';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, Container } from '@material-ui/core';
import './style.css';

import TopBar from '../../components/TopBar';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <CssBaseline />
      <Container maxWidth="lg" className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
