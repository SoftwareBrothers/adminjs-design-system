import {
  color as styledColor,
  space,
  typography,
  variant,
} from 'styled-system'
import { css } from 'styled-components'

import { cssClass, focusShadowStyle, themeGet } from '../../utils'
import { ButtonProps } from './button-props'

const variantShared = {
  color: 'white',
  'border-color': 'transparent',
  [`& .${cssClass('Icon')} svg`]: {
    fill: 'white',
  },
  '&:disabled': {
    bg: 'grey40',
  },
}

const buttonVariants = variant({
  variants: {
    primary: {
      bg: 'primary100',
      '&:hover': {
        bg: 'hoverBg',
      },
      className: cssClass(['Button', 'Button_Primary']),
      ...variantShared,
    },
    danger: {
      bg: 'error',
      '&:hover': {
        bg: 'errorDark',
      },
      className: cssClass(['Button', 'Button_Danger']),
      ...variantShared,
    },
    success: {
      bg: 'success',
      '&:hover': {
        bg: 'successDark',
      },
      className: cssClass(['Button', 'Button_Success']),
      ...variantShared,
    },
    info: {
      bg: 'info',
      '&:hover': {
        bg: 'infoDark',
      },
      className: cssClass(['Button', 'Button_Info']),
      ...variantShared,
    },
    secondary: {
      bg: 'accent',
      className: cssClass(['Button', 'Button_Secondary']),
      ...variantShared,
    },
    text: {
      bg: 'transparent',
      borderColor: 'transparent',
      '&:disabled': {
        'border-color': 'transparent',
      },
      '&:hover': {
        background: 'transparent',
        color: 'hoverBg',
        'border-color': 'transparent',
        'text-decoration': 'underline',
      },
      '&:focus': {
        background: 'transparent',
        'border-color': 'transparent',
      },
      '& svg': {
        fill: 'primary100',
      },
      [`&:hover .${cssClass('Icon')} svg`]: {
        fill: 'hoverBg',
      },
      className: cssClass(['Button', 'Button_Text']),
    },
  },
})

const sizeVariants = variant({
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
    // md alias default
    md: {},
    default: {},
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
 * import { ButtonCSS } from '@admin-bro/design-system'
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
  outline: 0;
  display: inline-block;
  font-family: ${({ theme }): string => theme.font};
  line-height: ${themeGet('lineHeights', 'lg')};

  border: 1px solid ${themeGet('colors', 'primary100')};
  color: ${themeGet('colors', 'primary100')};
  cursor: pointer;
  text-decoration: none;
  padding: ${themeGet('space', 'sm')} ${themeGet('space', 'xxl')};
  box-sizing: border-box;

  & > .${cssClass('Icon')} {
    vertical-align: middle;
  }

  & > .${cssClass('Icon')} svg {
    margin: 0 ${themeGet('space', 'md')} 0 0;
  }

  & .${cssClass('Icon')} svg {
    fill: ${themeGet('colors', 'primary100')};
  }
  &:hover {
    color: ${themeGet('colors', 'white')};
    background: ${themeGet('colors', 'hoverBg')};
    border-color: ${themeGet('colors', 'hoverBg')};
    & .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'white')};
    }
  }
  &:focus {
    border-color: ${themeGet('colors', 'accent')};
    ${({ theme }): string => `box-shadow: ${focusShadowStyle(theme)}`};
  }

  &:disabled {
    color: ${themeGet('colors', 'grey60')};
    border-color: ${themeGet('colors', 'grey80')};
    background: ${themeGet('colors', 'white')};
    cursor: default;
    & .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'grey60')};
    }
  }

  ${({ rounded }): string => (rounded ? 'border-radius: 9999px' : '')};

  ${styledColor};
  ${space};
  ${typography};
  ${buttonVariants};
  ${sizeVariants};
`

export default ButtonCSS
