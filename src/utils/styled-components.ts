import * as _styled from 'styled-components'
import { ThemeProvider, css, createGlobalStyle, type DefaultTheme, keyframes, useTheme } from 'styled-components'

export * from 'styled-components'

const defStyled = _styled.default ?? _styled
const styled = defStyled?.default ?? defStyled

export { styled, ThemeProvider, css, createGlobalStyle, DefaultTheme, keyframes, useTheme }
