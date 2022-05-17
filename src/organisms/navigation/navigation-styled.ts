import styled from 'styled-components'
import Box from '../../atoms/box'
import { themeGet } from '../../utils'

const StyledNavigation = styled(Box)`
  ul ul > li {
    padding-left: ${themeGet('space', 'xxl')};
    &:last-child {
      margin-bottom: ${themeGet('space', 'lg')};
    }
  }
`

export { StyledNavigation, StyledNavigation as default }
