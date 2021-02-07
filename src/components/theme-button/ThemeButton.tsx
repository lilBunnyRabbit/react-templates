import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { configActions } from '../../redux/reducers/configSlice';
import { Reducers } from '../../redux/store';
import { useThemeButtonStyles } from './ThemeButtonStyles';

interface ThemeButtonProps {
  color: 'primary' | 'secondary';
}

export function ThemeButton(props: ThemeButtonProps) {
  const classes = useThemeButtonStyles();
  const config = useSelector((state: Reducers) => state.config);
  const dispatch = useDispatch();

  const oppositeTheme = config.theme == 'dark' ? 'light' : 'dark';

  const handleButtonClick = () => {
    dispatch(configActions.setTheme(oppositeTheme));
  };

  const colorStyle = {
    color: props.color,
    borderColor: props.color,
  };

  return (
    <Button
      className={classes.root}
      variant="outlined"
      color={props.color}
      onClick={handleButtonClick}
      children={`Set to ${oppositeTheme}`}
    />
  );
}
