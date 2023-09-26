import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
  children: ReactNode;
}

const theme = {
  colors: {
    pWhite: '#fff',
    pBlack: '#231f20',
    pLightBlue: '#5472ae',
    pDarkBlue: '#1c273e'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
