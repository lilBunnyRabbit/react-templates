import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  return (
    <button
      children={`Set to ${oppositeTheme}`}
      onClick={handleButtonClick}
      style={{
        outline: 'none',
        backgroundColor: 'inherit',
        padding: '3px 10px 3px 10px',
        fontWeight: 700,
        ...colorStyle,
      }}
    />
  );
}
