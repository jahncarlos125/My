import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Text} from 'native-base';

const theme = {
  colors: {
    secondaryColor: '#D258F5',
    primaryColor: '#7159c1',
    textColor: '#F2F2F2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: 14,
    medium: 16,
    large: 16 * 1.2,
    bigger: 16 * 2.2,
  },
};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
