import React from "react";

import { ThemeProvider } from 'styled-components'

import * as theme from '../../src/theme'

const StylesDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);

export default StylesDecorator