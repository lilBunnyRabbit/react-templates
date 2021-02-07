import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grommet } from 'grommet';

import { Routes } from './routes/routes';
import { createTheme } from './theme/theme';
import { useSelector } from 'react-redux';
import { Reducers } from './redux/store';

export default function App() {
  const config = useSelector((state: Reducers) => state.config);
  const theme = React.useMemo(() => createTheme(), []);

  return (
    <Grommet theme={theme} full themeMode={config.theme}>
      <Router>
        <Routes />
      </Router>
    </Grommet>
  );
}
