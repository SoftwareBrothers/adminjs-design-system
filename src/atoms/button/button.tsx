import { styled, css } from '@styled-components'

import { cssClass } from '../../utils/index.js'
import ButtonCSS from './button-css.jsx'
import type { ButtonProps } from './button-props.js'

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

Button.defaultProps = {
  variant: 'text',
  color: 'primary',
  size: 'md',
}

Button.displayName = 'Button'

export { Button }
export default Button
