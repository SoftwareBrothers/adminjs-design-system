import styled from 'styled-components'
import { color, space, variant, SpaceProps } from 'styled-system'
import { cssClass } from '../../utils/css-class'
import { ColorProps } from '../../utils/color-props'

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
      '&:hover': {
        color: 'hoverBg',
        '& svg': {
          stroke: 'hoverBg',
        },
      },
      '& svg': {
        stroke: 'primary100',
      },
    },
    danger: {
      color: 'error',
      '&:hover': {
        color: 'error',
      },
      '& svg': {
        stroke: 'error',
      },
    },
    success: {
      color: 'success',
      '&:hover': {
        color: 'success',
      },
      '& svg': {
        stroke: 'success',
      },
    },
    info: {
      color: 'primary60',
      '&:hover': {
        color: 'hoverBg',
      },
      '& svg': {
        stroke: 'primary60',
      },
    },
    secondary: {
      color: 'accent',
      '&:hover': {
        color: 'hoverBg',
      },
      '& svg': {
        stroke: 'accent',
      },
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
}

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
  color: 'grey60',
  className: cssClass('Link'),
}

export { Link }
export default Link
