import { space, typography, layout, TypographyProps } from 'styled-system'
import { styled } from '@styled-components'

import { InputCSS, InputProps } from '../input/index.js'
import { cssClass } from '../../utils/css-class.js'

/**
 * Prop Types of a TextArea component.
 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps}
 * @memberof TextArea
 * @alias TextAreaProps
 * @property {string} [...] All props default to _textarea_ html component like `onChange`,
 *                          `value` etc.
 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
 *                          and {@link LayoutProps} + they extend {@link InputProps}
 */
export type TextAreaProps = TypographyProps & InputProps

/**
 * @classdesc
 *
 * <img src="components/textarea.png" />
 *
 * Wrapped `textarea` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { TextArea, TextAreaProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-textarea--default Storybook}
 * @see TextAreaProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="textarea1">Some example label</Label>
 *      <TextArea id="textarea1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
const TextArea = styled.textarea<TextAreaProps>`
  ${InputCSS}
  ${space};
  ${layout};
  ${typography};
`

TextArea.defaultProps = {
  px: 'default',
  py: 'default',
  fontSize: 'default',
  className: cssClass('TextArea'),
}

TextArea.displayName = 'TextArea'

export { TextArea }
export default TextArea
