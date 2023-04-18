import { space, color as styledColor, typography, variant as styledVariant } from 'styled-system'
import { darken, rgba } from 'polished'
import { css, DefaultTheme } from '@styled-components'

import { ColorVariants, VariantType } from '../../theme.js'
import { cssClass, themeGet } from '../../utils/index.js'
import { ButtonProps } from './button-props.js'

const getColor = (theme: DefaultTheme) => (color: string): string => theme.colors[ColorVariants[color] || 'primary100']

const legacyButtonVariants = (
  ['danger', 'default', 'info', 'primary', 'secondary', 'success'] as VariantType[]
).reduce((acc, color) => ({
  ...acc,
  [color]: {
    className: cssClass(['Button', 'Button_Legacy']),
    borderColor: 'currentColor',
    color: (theme) => getColor(theme)(color),
    '&:hover': {
      bg: (theme) => rgba(getColor(theme)(color), 0.05),
    },
    '&:focus, &:active': {
      bg: (theme) => rgba(getColor(theme)(color), 0.1),
    },
  },
}), {})

const buttonVariants = ({ color = 'primary' }: ButtonProps) => styledVariant({
  variants: {
    ...legacyButtonVariants,
    contained: {
      className: cssClass(['Button', 'Button_Contained']),
      color: (theme) => theme.colors.white,
      bg: (theme) => getColor(theme)(color),
      borderColor: (theme) => getColor(theme)(color),
      '&:hover': {
        bg: (theme) => darken(0.15, getColor(theme)(color)),
        borderColor: (theme) => darken(0.15, getColor(theme)(color)),
      },
      '&:focus, &:active': {
        bg: (theme) => darken(0.2, getColor(theme)(color)),
        borderColor: (theme) => darken(0.2, getColor(theme)(color)),
      },
    },
    outlined: {
      className: cssClass(['Button', 'Button_Outlined']),
      borderColor: 'currentColor',
      color: (theme) => getColor(theme)(color),
      '&:hover': {
        bg: (theme) => rgba(getColor(theme)(color), 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(getColor(theme)(color), 0.1),
      },
    },
    light: {
      className: cssClass(['Button', 'Button_Light']),
      color: (theme) => color && getColor(theme)(color),
      borderColor: 'grey40',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'grey80',
      },
      '&:hover': {
        bg: (theme) => rgba(getColor(theme)(color), 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(getColor(theme)(color), 0.1),
      },
    },
    text: {
      className: cssClass(['Button', 'Button_Text']),
      color: (theme) => color && getColor(theme)(color),
      borderColor: 'transparent',
      '&:disabled': {
        'border-color': 'transparent',
      },
      '&:hover': {
        bg: (theme) => rgba(getColor(theme)(color), 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(getColor(theme)(color), 0.1),
      },
    },
  },
})

const sizeVariants = styledVariant({
  prop: 'size',
  variants: {
    sm: {
      fontSize: 'sm',
      py: 'xs',
      lineHeight: 'default',
      px: 'lg',
      [`& .${cssClass('Icon')}`]: {
        marginTop: '-1px',
        marginBottom: '-1px',
      },
    },
    default: {
      py: 'sm',
      px: 'xxl',
      lineHeight: 'lg',
    },
    md: {
      py: 'sm',
      px: 'xxl',
      lineHeight: 'lg',
    },
    lg: {
      py: 'default',
      px: 'x3',
      lineHeight: 'lg',
    },
    icon: {
      py: 'default',
      px: 'default',
      lineHeight: 'sm',
      minWidth: '34px',
      height: '34px',
      [`& .${cssClass('Icon')}`]: {
        padding: 0,
        margin: 0,
      },
    },
  },
})

/**
 * Button CSS Styles which can be reused in another button-like component with styled-components
 *
 * Usage:
 * ```
 * import { ButtonCSS } from '@adminjs/design-system'
 * import { Link } from 'react-router-dom'
 *
 * const MyStyledLink = styled(Link)`
 *   ${ButtonCSS}
 * `
 * ```
 * @memberof Button
 * @alias ButtonCSS
 */
export const ButtonCSS: ReturnType<typeof css> = css<ButtonProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  background-color: transparent;
  outline: 0;
  font-family: ${({ theme }) => theme.font};
  font-size: ${themeGet('fontSizes', 'default')};
  vertical-align: middle;
  border-radius: ${themeGet('space', 'sm')};
  user-select: none;
  text-align: center;

  border: 1px solid ${themeGet('colors', 'primary100')};
  color: ${themeGet('colors', 'primary100')};

  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  & .${cssClass('Icon')} {
    vertical-align: middle;
    margin: 0 ${themeGet('space', 'md')} 0 0;
    color: inherit;
  }

  transition: all 0.1s ease-in;

  ${({ rounded }): string => (rounded ? 'border-radius: 9999px' : '')};

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    cursor: auto;

    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0, 0, 0, 0.2);
      border-color: transparent;
    }
  }

  ${styledColor};
  ${space};
  ${typography};

  ${buttonVariants};
  ${sizeVariants};
`

export default ButtonCSS
