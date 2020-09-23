import styled, { css } from 'styled-components'

import { ButtonProps } from './button-props'
import ButtonCSS from './button-css'

const addContent = css<ButtonProps>`
  &:before {
    content: "${({ label }) => label}";
  }
`

/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */
const Button = styled.button<ButtonProps>`
  ${ButtonCSS};
  ${({ label }) => (label ? addContent : '')};
`

Button.defaultProps = {
  fontSize: 'default',
  backgroundColor: 'transparent',
}

export { Button }
export default Button
