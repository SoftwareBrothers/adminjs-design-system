import { styled } from '@styled-components'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { themeGet } from '../../utils/index.js'

export const StyledNavigation = styled(Box)<BoxProps>`
  ul ul > li {
    a {
      padding-left: ${themeGet('space', 'x3')};
    }
    &:last-child {
      margin-bottom: ${themeGet('space', 'lg')};
    }
  }
`

export default StyledNavigation
