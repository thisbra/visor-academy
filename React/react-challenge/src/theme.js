import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    pWhite: '#fff',
    pBlack: '#231f20',
    pGrey: '#7e917e',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
