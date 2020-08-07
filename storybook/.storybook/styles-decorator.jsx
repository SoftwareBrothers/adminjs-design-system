import React from "react";

import { ThemeProvider } from 'styled-components'

import * as theme from '../../src/theme'
import Box from '../../src/atoms/box'

const StylesDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Box flex alignItems="center" justifyContent="center">
      {storyFn()}
    </Box>
  </ThemeProvider>
);

export default StylesDecorator