import React from "react";

import { ThemeProvider } from 'styled-components'

import * as theme from '../../src/theme'
import { Box } from '../../src'
import { GlobalStyle } from '../../src/global'

const StylesDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
    <GlobalStyle />
    <Box flex alignItems="center" justifyContent="center">
      {storyFn()}
    </Box>
  </ThemeProvider>
);

export default StylesDecorator