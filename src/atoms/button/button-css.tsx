import { css } from 'styled-components'
import { space, color as styledColor, typography, variant as styledVariant } from 'styled-system'

import { darken, rgba } from 'polished'
import { ColorVariants, VariantType } from '../../theme'
import { cssClass, themeGet } from '../../utils'
import { ButtonProps } from './button-props'

const handleLegacyButton = (variant: VariantType) => {
  const color = ColorVariants[variant] || 'primary100'
  return {
    [variant]: {
      className: cssClass(['Button', 'Button_Legacy']),
      borderColor: 'currentColor',
      color: (theme) => theme.colors[color],
      '&:hover': {
        bg: (theme) => rgba(theme.colors[color], 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(theme.colors[color], 0.1),
      },
    },
  }
}
const legacyButtons = (
  ['danger', 'default', 'info', 'primary', 'secondary', 'success'] as VariantType[]
).reduce((acc, variant) => ({ ...acc, ...handleLegacyButton(variant) }), {})

const buttonVariants = ({ color = 'primary' }: ButtonProps) => styledVariant({
  variants: {
    ...legacyButtons,
    contained: {
      className: cssClass(['Button', 'Button_Contained']),
      color: (theme) => theme.colors.white,
      bg: (theme) => theme.colors[ColorVariants[color]],
      borderColor: (theme) => theme.colors[ColorVariants[color]],
      '&:hover': {
        bg: (theme) => darken(0.15, theme.colors[ColorVariants[color]]),
        borderColor: (theme) => darken(0.15, theme.colors[ColorVariants[color]]),
      },
      '&:focus, &:active': {
        bg: (theme) => darken(0.2, theme.colors[ColorVariants[color]]),
        borderColor: (theme) => darken(0.2, theme.colors[ColorVariants[color]]),
      },
    },
    outlined: {
      className: cssClass(['Button', 'Button_Outlined']),
      borderColor: 'currentColor',
      color: (theme) => theme.colors[ColorVariants[color]],
      '&:hover': {
        bg: (theme) => rgba(theme.colors[ColorVariants[color]], 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(theme.colors[ColorVariants[color]], 0.1),
      },
    },
    light: {
      className: cssClass(['Button', 'Button_Light']),
      color: (theme) => color && theme.colors[ColorVariants[color]],
      borderColor: 'grey40',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'grey80',
      },
      '&:hover': {
        bg: (theme) => rgba(theme.colors[ColorVariants[color]], 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(theme.colors[ColorVariants[color]], 0.1),
      },
    },
    text: {
      className: cssClass(['Button', 'Button_Text']),
      color: (theme) => color && theme.colors[ColorVariants[color]],
      borderColor: 'transparent',
      '&:disabled': {
        'border-color': 'transparent',
      },
      '&:hover': {
        bg: (theme) => rgba(theme.colors[ColorVariants[color]], 0.05),
      },
      '&:focus, &:active': {
        bg: (theme) => rgba(theme.colors[ColorVariants[color]], 0.1),
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
      [`& .${cssClass('Icon')} svg`]: {
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
export const ButtonCSS = css<ButtonProps>`
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

  & > .${cssClass('Icon')} {
    vertical-align: middle;
  }

  & > .${cssClass('Icon')} svg {
    margin: 0 ${themeGet('space', 'md')} 0 0;
  }

  & .${cssClass('Icon')} {
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
