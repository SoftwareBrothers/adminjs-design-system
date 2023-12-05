import { TypographyProps, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

import themeGet from '../../utils/theme-get.js'
import CaptionShared from './caption-shared.js'

export const SmallText = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'xs')};
  line-height: ${themeGet('lineHeights', 'sm')};
`

SmallText.displayName = 'SmallText'

export default SmallText
