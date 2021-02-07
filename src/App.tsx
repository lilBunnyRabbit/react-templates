import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes/routes';
import { createAppTheme } from './theme/theme';
import { Reducers } from './redux/store';

export default function App() {
  const config = useSelector((state: Reducers) => state.config);
  const theme = React.useMemo(() => createAppTheme(config.theme), [config.theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}
