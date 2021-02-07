import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router';

import { Reducers } from '../../redux/store';
import { ThemeButton } from '../../components/theme-button/ThemeButton';
import { Chip, Typography } from '@material-ui/core';
import { useHomeStyles } from './HomeStyles';

export function Home(props: RouteProps) {
  const classes = useHomeStyles();
  const config = useSelector((state: Reducers) => state.config);

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" gutterBottom children="Home" />
      <Typography variant="body1" gutterBottom>
        current theme is
        <Chip
          className={classes.themeChip}
          label={config.theme}
          color={config.theme === 'dark' ? 'primary' : 'secondary'}
          variant="outlined"
          size="small"
        />
      </Typography>
      <ThemeButton color={config.theme === 'dark' ? 'primary' : 'secondary'} />
    </div>
  );
}
