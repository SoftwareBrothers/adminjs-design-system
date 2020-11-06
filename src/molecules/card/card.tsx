/* eslint-disable max-len */
import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { variant as styledVariant, SpaceProps, TypographyProps } from 'styled-system'

import { Box } from '../../atoms/box/box'
import { Icon } from '../../atoms/icon'
import { Button } from '../../atoms/button'
import { cssClass } from '../../utils/css-class'
import { H4 } from '../../atoms/typography'
import { themeGet } from '../../utils'
import CaptionShared from '../../atoms/typography/caption-shared'
import Link, { LinkVariant } from '../../atoms/link'

interface Linkable {
  href: string;
  text: string;
  variant?: LinkVariant;
}

const TextWrapper = styled('div')<TypographyProps & SpaceProps>`
& > :last-child { margin-bottom: 0 };
`

const StyledCard = styled.div<CardProps>`
  padding: ${({ theme }): string => theme.space.xl}; 
  line-height: ${({ theme }): string => theme.lineHeights.xl};
  background: ${({ theme }): string => theme.colors.white};
  box-shadow: ${({ theme }): string => theme.shadows.card};
  color: ${({ theme }): string => theme.colors.grey80};
`

const CardTitle = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'lg')};
  font-weight: ${themeGet('fontWeights', 'bold')};
  line-height: ${themeGet('lineHeights', 'lg')};
  margin-bottom: ${themeGet('space', 'sm')};
`

const CardDescription = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
  margin-bottom: ${themeGet('space', 'md')};
`

const CardContent = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
  margin: ${themeGet('space', 'lg')} 0;
  color: ${themeGet('colors', 'grey40')};
`

/**
 * Prop Types of a Card component.
 * Apart from those defined below it extends all {@link SpaceProps}
 *
 * @memberof Card
 * @alias CardProps
 */
type CardProps = {
  title?: string;
  description?: string;
  content?: string;
  link?: Linkable;
  /** Optional children, when given component will be expanded */
  children?: React.ReactNode;
}

type Props = SpaceProps & CardProps
export { Props as CardProps }

/**
 * @classdesc
 *
 * Component responsible for rendering standard danger/info/success
 * messages.
 *
 * It has 2 size versions: default and small. Also it can either contain or
 * don't contain children, which causes different look.
 *
 * ### Usage
 *
 * ```javascript
 * import { Card, CardProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see CardProps
 * @section design-system
 */
const Card: React.FC<Props> = ({ title, description, content, link }) => (
  <StyledCard>
    <TextWrapper>
      { title && (<CardTitle>{title}</CardTitle>) }
      { description && (<CardDescription>{description}</CardDescription>) }
      { content && (<CardContent>{content}</CardContent>) }
      { link && (<Link href={link.href} variant={link.variant || LinkVariant.Primary}>{link.text}</Link>) }
    </TextWrapper>
  </StyledCard>
)

export { Card }
export default Card
