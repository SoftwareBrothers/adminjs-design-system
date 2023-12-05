import { darken, rgba } from 'polished'
import { space, SpaceProps, layout, LayoutProps, variant } from 'styled-system'
import { styled, css } from '@styled-components'

import { cssClass } from '../../utils/css-class.js'

const borderlessCSS = css`
  padding: 0;
  border-color: transparent;
  border-width: 0 0 1px 0;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    box-shadow: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
  }

  &:hover {
    cursor: pointer;
  }
`

const sizeVariants = variant({
  prop: 'variant',
  variants: {
    default: {
      fontSize: 'default',
      lineHeight: 'lg',
    },
    sm: {
      fontSize: 'sm',
      lineHeight: 'default',
    },
    lg: {
      fontSize: 'lg',
      lineHeight: 'xl',
    },
    xl: {
      fontSize: 'xl',
      lineHeight: 'xxl',
    },
    xxl: {
      fontSize: 'h1',
      fontWeight: 'light',
      lineHeight: 'x4',
    },
  },
})

/**
 * Prop Types of an Input component.
 * Apart from variant it extends all {@link LayoutProps} and {@link SpaceProps}
 *
 * @memberof Input
 * @alias InputProps
 * @property {string} [...] Other props from {@link LayoutProps}, {@link SpaceProps}
 */
export type InputProps = SpaceProps & LayoutProps & {
  borderless?: boolean;
  variant?: 'sm' | 'lg' | 'xl' | 'default' | 'xxl';
}

/**
 * Input CSS Styles which can be reused in another input component with styled-components
 *
 * ### Usage:
 *
 * ```
 * import { InputCSS } from '@adminjs/design-system'
 *
 * const MyStyledInput = styled.input`
 *   ${InputCSS}
 * `
 * ```
 * @memberof Input
 * @alias InputCSS
 */
export const InputCSS: ReturnType<typeof css> = css<InputProps>`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey100};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  font-family: ${({ theme }) => theme.font};
  outline: none;

  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.inputBorder)};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary100};
  }
  &:disabled {
    color: ${({ theme }) => rgba(theme.colors.grey80, 0.5)};
    border-color: ${({ theme }) => rgba(theme.colors.inputBorder, 0.5)};
    background-color: ${({ theme }) => rgba(theme.colors.inputBorder, 0.5)};
  }

  ${({ borderless }) => (borderless && borderlessCSS)};
  ${sizeVariants};
`

/**
 * @classdesc
 *
 * <img src="components/input.png" />
 *
 * Wrapped `input` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Input, InputProps, InputCSS } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see InputProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-input--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="input1">Some example label</Label>
 *      <Input id="input1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
const Input = styled.input<InputProps>`
  ${InputCSS};
  ${space};
  ${layout};
`

Input.defaultProps = {
  px: 'default',
  py: 'sm',
  className: cssClass('Input'),
}

Input.displayName = 'Input'

export { Input }
export default Input
