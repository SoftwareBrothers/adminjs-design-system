import { TypographyProps, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

import themeGet from '../../utils/theme-get.js'
import CaptionShared from './caption-shared.js'

export const Caption = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'sm')};
  line-height: ${themeGet('lineHeights', 'md')};
`

Caption.displayName = 'Caption'

export default Caption
