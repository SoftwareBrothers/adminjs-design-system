import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Box, GlobalStyle, theme } from '../src'

const ThemeDecorator = (StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Box width={1}>
      <StoryFn />
    </Box>
  </ThemeProvider>
)

export default ThemeDecorator
