import React from 'react';
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, lightGreen } from '@material-ui/core/colors';

export const createAppTheme = (theme: 'dark' | 'light') => {
  return createMuiTheme({
    palette: {
      type: theme,
      primary: {
        light: lightBlue[500],
        main: lightBlue[500],
        dark: lightBlue[500],
      },
      secondary: {
        light: lightGreen[500],
        main: lightGreen[500],
        dark: lightGreen[500],
      },
    },
  });
};
