import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'grommet';

import { configActions } from '../../redux/reducers/configSlice';
import { Reducers } from '../../redux/store';

interface ThemeButtonProps {
  color: string;
}

export function ThemeButton(props: ThemeButtonProps) {
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

  return <Button primary label={`Set to ${oppositeTheme}`} onClick={handleButtonClick} />;
}
