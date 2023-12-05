import { TypographyProps, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

import themeGet from '../../utils/theme-get.js'
import CaptionShared from './caption-shared.js'

export const CardTitle = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
  margin: ${themeGet('space', 'lg')} 0;
  * > &:first-child {
    margin-top: 0;
  }
`

CardTitle.displayName = 'CardTitle'

export default CardTitle
