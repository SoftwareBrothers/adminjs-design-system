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
  // color: 'white',
  // 'border-color': 'transparent',
  // [`& .${cssClass('Icon')} svg`]: {
  //   stroke: 'white',
  // },
  '&:disabled': {
    bg: 'grey40',
  },
}

const buttonVariants = variant({
  variants: {
    default: {
      color: 'primary100',
      bg: 'transparent',
      borderColor: 'primary100',
      '&:hover': {
        color: 'primary100',
        bg: 'lightButtonHoverBg',
      },
    },
    primary: {
      color: 'white',
      bg: 'primaryButtonBg',
      borderColor: 'transparent',
      '&:hover': {
        color: 'white',
        bg: 'primaryButtonHoverBg',
      },
      '&:focus': {
        bg: 'primaryButtonFocusBg',
      },
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'white',
      },
      className: cssClass(['Button', 'Button_Primary']),
      ...variantShared,
    },
    danger: {
      color: 'dangerButtonBg',
      bg: 'transparent',
      borderColor: 'dangerButtonBg',
      '&:hover': {
        color: 'dangerButtonBg',
        bg: 'lightButtonHoverBg',
        borderColor: 'dangerButtonBg',
      },
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'dangerButtonBg',
      },
      className: cssClass(['Button', 'Button_Danger']),
      ...variantShared,
    },
    success: {
      color: 'white',
      bg: 'successButtonBg',
      borderColor: 'transparent',
      '&:hover': {
        bg: 'successButtonHoverBg',
        borderColor: 'transparent',
      },
      className: cssClass(['Button', 'Button_Success']),
      ...variantShared,
    },
    info: {
      color: 'white',
      bg: 'infoButtonBg',
      borderColor: 'transparent',
      '&:hover': {
        bg: 'infoButtonHoverBg',
        borderColor: 'transparent',
      },
      className: cssClass(['Button', 'Button_Info']),
      ...variantShared,
    },
    secondary: {
      color: 'white',
      bg: 'secondaryButtonBg',
      borderColor: 'transparent',
      '&:hover': {
        bg: 'secondaryButtonHoverBg',
        borderColor: 'transparent',
      },
      className: cssClass(['Button', 'Button_Secondary']),
      ...variantShared,
    },
    light: {
      color: 'grey80',
      bg: 'transparent',
      className: cssClass(['Button', 'Button_Grey']),
      borderColor: 'grey40',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'grey80',
      },
      '&:hover': {
        borderColor: 'grey60',
        bg: 'lightButtonHoverBg',
      },
      '&:focus': {
        bg: 'lightButtonFocusBg',
      },
    },
    text: {
      color: 'primary100',
      bg: 'transparent',
      borderColor: 'transparent',
      '&:disabled': {
        'border-color': 'transparent',
      },
      '&:hover': {
        background: 'transparent',
        color: 'hoverBg',
        borderColor: 'transparent',
        textDecoration: 'underline',
      },
      '&:focus': {
        background: 'transparent',
        borderColor: 'transparent',
      },
      '& svg': {
        stroke: 'primary100',
      },
      [`&:hover .${cssClass('Icon')} svg`]: {
        stroke: 'hoverBg',
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

const setPointer = (props: React.HTMLProps<HTMLButtonElement>): string => {
  if (props.href || props.onClick) {
    return 'cursor: pointer'
  }

  if (props.as === 'a' && !props.href && !props.onClick) {
    return 'cursor: auto'
  }
  return ''
}

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
  outline: 0;
  display: inline-block;
  font-family: ${({ theme }): string => theme.font};
  line-height: ${themeGet('lineHeights', 'lg')};
  vertical-align: middle;
  border-radius: 4px;

  border: 1px solid ${themeGet('colors', 'primary100')};
  color: ${themeGet('colors', 'primary100')};
  
  ${(props) => setPointer(props as React.HTMLProps<HTMLButtonElement>)};
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
    stroke: ${themeGet('colors', 'primary100')};
  }

  &:focus {
    border-color: ${themeGet('colors', 'accent')};
    ${({ theme }): string => `box-shadow: ${focusShadowStyle(theme)}`};
  }

  &:disabled {
    color: ${themeGet('colors', 'disabledButtonColor')};
    border-color: ${themeGet('colors', 'grey40')};
    background: ${themeGet('colors', 'grey40')};
    cursor: default;
    & .${cssClass('Icon')} svg {
      stroke: ${themeGet('colors', 'disabledButtonColor')};
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

//   &:hover {
//   color: ${themeGet('colors', 'white')};
//   background: ${themeGet('colors', 'outlineButtonHoverBg')};
//   border-color: ${themeGet('colors', 'primaryButtonHoverBg')};
//   & .${cssClass('Icon')} svg {
//     stroke: ${themeGet('colors', 'white')};
//   }
// }
