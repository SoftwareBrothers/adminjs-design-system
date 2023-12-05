import { TypographyProps, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

import themeGet from '../../utils/theme-get.js'
import CaptionShared from './caption-shared.js'

export const Title = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
`

Title.displayName = 'Title'

export default Title
