import { typography, TypographyProps, space, SpaceProps } from 'styled-system'
import { css } from '@styled-components'

import themeGet from '../../utils/theme-get.js'

export const CaptionShared: ReturnType<typeof css> = css<TypographyProps & SpaceProps>`
  font-family: ${themeGet('font')};
  font-weight: ${themeGet('fontWeights', 'normal')};
  ${typography};
  ${space};
`

export default CaptionShared
