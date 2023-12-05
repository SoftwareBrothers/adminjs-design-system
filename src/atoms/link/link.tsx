import { PropsWithChildren } from 'react'
import { color, space, variant, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

import { cssClass } from '../../utils/css-class.js'
import { NewColorProps as ColorProps } from '../../utils/color-props.js'

const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: {
      fontSize: 'xs',
      py: 'sm',
    },
    lg: {
      fontSize: 'default',
    },
  },
})

const variants = variant({
  variants: {
    primary: {
      color: 'primary100',
    },
    danger: {
      color: 'error',
    },
    success: {
      color: 'success',
    },
    info: {
      color: 'primary60',
    },
    secondary: {
      color: 'accent',
    },
  },
})

/**
 * Prop Types of a Link component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * and {@link SpaceProps}
 *
 * @memberof Link
 * @alias LinkProps
 * @property {string} [...] All props default to _a_ html component like `href`,
 *                          `onClick` etc.
 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
 */
export type LinkProps = ColorProps & SpaceProps & {
  /** Defines if link should be uppercase */
  uppercase?: boolean;
  /** Color variant */
  variant?: 'primary' | 'danger' | 'success' | 'info' | 'secondary';
  /** Size variant */
  size?: 'sm' | 'lg';
} & PropsWithChildren

/**
 * @classdesc
 *
 * <img src="components/link.png" />
 *
 * Styled form of Link element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Link, LinkProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LinkProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-link--default Storybook}
 * @hideconstructor
 * @example <caption>All color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="xl">
 *   {variants.map(variant => (
 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
 *   ))}
 * </Box>
 * )
 * @example <caption>With icons</caption>
 * return (
 * <Box py="xl">
 *   <Link href="#" mr="xl">
 *     <Icon icon="Plus" />
 *     With an icon
 *   </Link>
 * </Box>
 * )
 * @section design-system
 */
const Link = styled.a<LinkProps>`
  font-family: ${({ theme }) => theme.font};
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  & svg {
    padding-right: ${({ theme }) => theme.space.default};
    vertical-align: text-top;
  }
  ${({ uppercase }): string => (uppercase ? 'text-transform: uppercase;' : '')}
  ${color};
  ${space};
  ${sizeVariants};
  ${variants};
`

Link.defaultProps = {
  variant: 'primary',
  color: 'grey60',
  className: cssClass('Link'),
}

Link.displayName = 'Link'

export { Link }
export default Link
