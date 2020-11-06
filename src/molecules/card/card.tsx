/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { SpaceProps, TypographyProps } from 'styled-system'

import { themeGet } from '../../utils'
import CaptionShared from '../../atoms/typography/caption-shared'
import Link, { LinkVariant } from '../../atoms/link'

interface Linkable {
  href: string;
  text: string;
  variant?: LinkVariant;
}

interface Mediable {
  src: string;
  type: 'image' | 'background';
  heightWrapper?: string;
  height?: string;
  width?: string;
}

interface MediaWrapperProps {
  minHeight?: string;
}

const MediaWrapper = styled('div')<MediaWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => props.minHeight || '240px'};
  & > :last-child { margin-bottom: 0 };
`

const TextWrapper = styled('div')<TypographyProps & SpaceProps>`
  padding: ${({ theme }): string => theme.space.xl}; 
  & > :last-child { margin-bottom: 0 };
`

const StyledCard = styled.div<TypographyProps & SpaceProps>`
  ${CaptionShared};
  background: ${({ theme }): string => theme.colors.white};
  box-shadow: ${({ theme }): string => theme.shadows.card};
  color: ${({ theme }): string => theme.colors.grey80};
`

const CardTitle = styled('div')<TypographyProps & SpaceProps>`
${CaptionShared};
line-height: ${themeGet('lineHeights', 'xl')};
  font-size: ${themeGet('fontSizes', 'lg')};
  font-weight: ${themeGet('fontWeights', 'bold')};
  margin-bottom: ${themeGet('space', 'sm')};
`

const CardDescription = styled('div')<TypographyProps & SpaceProps>`
${CaptionShared};
  line-height: ${themeGet('lineHeights', 'xl')};
  font-size: ${themeGet('fontSizes', 'md')};
  margin-bottom: ${themeGet('space', 'md')};
`

const CardContent = styled('div')<TypographyProps & SpaceProps>`
${CaptionShared};
  line-height: ${themeGet('lineHeights', 'xl')};
  font-size: ${themeGet('fontSizes', 'md')};
  margin-bottom: ${themeGet('space', 'md')};
  color: ${themeGet('colors', 'grey40')};
`
interface MediaBackgroundInterface {
  src: string;
}

const MediaImage = styled('img')`
  max-width: 100%;
  width: ${(props) => props.width || 'inherit'};
  height: ${(props) => props.height || 'inherit'};
`

const MediaBackground = styled('div')<MediaBackgroundInterface>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 255px;
  width: 100%;
`

/**
 * Prop Types of a Card component.
 *
 * @memberof Card
 * @alias CardProps
 */
type CardProps = {
  title?: string;
  description?: string;
  content?: string;
  link?: Linkable;
  media?: Mediable;
  /** Optional children, when given component will be expanded */
  children?: React.ReactNode;
}

type Props = SpaceProps & CardProps
export { Props as CardProps }

/**
 * @classdesc
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
const Card: React.FC<Props> = ({ title, description, content, link, media }) => (
  <StyledCard>
    { media && (
      <MediaWrapper minHeight={media?.heightWrapper}>
        { media.type === 'image' && (
          <MediaImage
            src={media.src}
            height={media?.height}
            width={media?.width}
          />
        )}
        { media.type === 'background' && (<MediaBackground src={media.src} />) }
      </MediaWrapper>
    )}
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
