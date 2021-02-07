import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router';

import { Reducers } from '../../redux/store';
import { ThemeButton } from '../../components/theme-button/ThemeButton';
import { Box, Heading, Paragraph } from 'grommet';

export function Home(props: RouteProps) {
  const config = useSelector((state: Reducers) => state.config);

  return (
    <Box direction="column" justify="center" fill align="center">
      <Heading margin="none" children="Home" />
      <Paragraph>
        current theme is <b>{config.theme}</b>
      </Paragraph>
      <ThemeButton color={config.theme === 'dark' ? 'white' : 'black'} />
    </Box>
  );
}
