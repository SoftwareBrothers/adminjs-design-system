import styled from 'styled-components'
import { color, space, typography, SpaceProps, TypographyProps, ColorProps, variant } from 'styled-system'
import { cssClass } from '../utils/css-class'

/**
 * Prop Types of an {@link Badge} component.
 * Apart from those defined below it extends all {@link ColorProps}, {@link SpaceProps}
 * and {@link TypographyProps}
 *
 * @memberof Badge
 * @alias BadgeProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export type BadgeProps = SpaceProps & TypographyProps & ColorProps & {
  /**
   * Color variant
   */
  variant?: 'primary' | 'danger' | 'text' | 'success' | 'info' | 'secondary';
  /**
   * Outline version
   */
  outline?: boolean;
  /**
   * Size variant
   */
  size?: 'sm' | 'lg' | 'default';
}

const variantStyle = (variantColor: string, props: BadgeProps): Record<string, any> => ({
  bg: variantColor,
  borderColor: variantColor,
  color: props.outline ? variantColor : 'white',
})

const colorVariant = (props: BadgeProps): Record<string, any> => variant({
  variants: {
    primary: variantStyle('primary100', props),
    danger: variantStyle('error', props),
    success: variantStyle('success', props),
    info: variantStyle('info', props),
    secondary: variantStyle('accent', props),
  },
})

const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: {
      py: 'xs',
    },
    lg: {
      py: '11px',
      px: '14px',
    },
    default: {},
  },
})

/**
 * @classdesc
 *
 * <img src="components/badge.png" />
 *
 * Component representing a badge.
 *
 * ### Usage
 *
 * ```javascript
 * import { Badge, BadgeProps } from '@admin-bro/design-system'
 * ```
 * @see BadgeProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-badge--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 * @example <caption>Color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="lg">
 *   <Badge mb="default" mr="default">default</Badge>
 *   {variants.map(variant => (
 *     <Badge mb="default" variant={variant} mr="default">{variant}</Badge>
 *   ))}
 * </Box>
 * )
 * @example <caption>Outline badges</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="lg">
 *   <Badge mb="default" mr="default" outline>default</Badge>
 *   {variants.map(variant => (
 *     <Badge mb="default" variant={variant} mr="default" outline>{variant}</Badge>
 *   ))}
 * </Box>
 * )
 * @example <caption>Different sizes</caption>
 * return (
 * <Box py="lg">
 *   <Badge ml="default" variant="primary" size="sm">small</Badge>
 *   <Badge ml="default" variant="primary">regular</Badge>
 *   <Badge ml="default" variant="primary" size="lg">large</Badge>
 * </Box>
 * )
 */
const Badge = styled.span<BadgeProps>`
  border-radius: 20px;
  border: 1px solid ${({ theme }): string => theme.colors.grey40};
  color: ${({ outline, theme }): string => (outline ? theme.colors.grey60 : theme.colors.white)};
  vertical-align: middle;
  font-family: ${({ theme }): string => theme.font};

  ${space};
  ${color};
  ${typography};
  ${(props): any => colorVariant(props)};
  ${sizeVariants};
  ${({ outline }): string => (outline ? 'background: transparent;' : '')}
`

Badge.defaultProps = {
  px: 'default',
  py: 'sm',
  fontSize: 'sm',
  lineHeight: 'xxl',
  bg: 'grey40',
  className: cssClass('Badge'),
}

export { Badge }
export default Badge
