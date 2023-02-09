import styled, { css } from 'styled-components'

import React from 'react'
import { cssClass } from '../../utils'
import ButtonCSS from './button-css'
import type { ButtonProps } from './button-props'
import { ColorVariant } from '../../theme'

const addContent = css<ButtonProps>`
  &:before {
    content: '${({ label }) => label}';
  }
`

/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */

const Button = styled.button.attrs((props) => ({
  className: cssClass('Button', props.className),
}))<ButtonProps>`
  ${ButtonCSS};
  ${({ label }) => (label ? addContent : '')};
`

// const Button: React.FC<ButtonProps> = ({
//   variant = 'text',
//   color = 'primary',
//   size = 'md',
//   ...props
// }) => {
//   const isLegacyButton = ['danger'].includes(variant)
//   const mappedVariant = isLegacyButton ? 'contained' : variant
//   const mappedColor = isLegacyButton ? variant as ColorVariant : color
//   return <StyledButton  {...props} variant={mappedVariant} color={mappedColor} size={size} />
// }

Button.defaultProps = {
  variant: 'text',
  color: 'primary',
  size: 'md',
}

export { Button }
export default Button
