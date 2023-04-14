import _styled from 'styled-components'
import { ThemeProvider, css, createGlobalStyle, type DefaultTheme, keyframes, useTheme } from 'styled-components'

export * from 'styled-components'

const styled = _styled.default ?? _styled

export { styled, ThemeProvider, css, createGlobalStyle, DefaultTheme, keyframes, useTheme }
export default styled
