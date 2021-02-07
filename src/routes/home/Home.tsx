import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router';

import { Reducers } from '../../redux/store';
import { ThemeButton } from '../../components/theme-button/ThemeButton';

export function Home(props: RouteProps) {
  const config = useSelector((state: Reducers) => state.config);

  const style = config.theme === 'dark' ? { color: '#ffffff', backgroundColor: '#000000' } : {};

  return (
    <div
      style={{
        ...style,
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Home</h1>
        <h4>
          current theme is <i>{config.theme}</i>
        </h4>
        <ThemeButton color={config.theme === 'dark' ? 'white' : 'black'} />
      </div>
    </div>
  );
}
