import React, { useMemo } from 'react'

import { ThemeProvider } from 'styled-components'
import { Box, GlobalStyle, theme } from '../src/index.js'

const themes = {
  default: { ...theme },
  red: { ...theme, colors: { ...theme.colors, primary100: '#b71c1c' } },
  green: { ...theme, colors: { ...theme.colors, primary100: '#1b5e20' } },
  orange: { ...theme, colors: { ...theme.colors, primary100: '#f57f17' } },
}

const ThemeDecorator = (StoryFn, { globals: { theme: themeKey } }) => {
  const selectedTheme = useMemo(() => themes[themeKey], [themeKey])
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Box width={1}>
        <StoryFn />
      </Box>
    </ThemeProvider>
  )
}

export default ThemeDecorator
