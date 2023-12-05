import React from 'react'
import ReactPhoneInputLib, { PhoneInputProps as ReactPhoneInputProps } from 'react-phone-input-2'
import { space, typography, layout, TypographyProps } from 'styled-system'
import { styled } from '@styled-components'

import { InputCSS, InputProps } from '../input/index.js'
import PhoneInputStyles from '../../utils/phone-input.styles.js'
import { cssClass } from '../../utils/css-class.js'

const ReactPhoneInput = (ReactPhoneInputLib as any).default ?? ReactPhoneInputLib
const ReactPhoneInputComponent = ReactPhoneInput.default ?? ReactPhoneInput

/**
 * Prop Types of a PhoneInput component.
 * CurrencyInput is based on `react-currency-input-field` @see {@link https://github.com/bl00mber/react-phone-input-2 React Phone Input Field Component}
 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps} and {@link https://github.com/bl00mber/react-phone-input-2#options React Phone Input Field Component Props}
 * @memberof PhoneInput
 * @alias PhoneInputProps
 * @property {string} [...] All props default to _phoneinput_ html component like `onChange`,
 *                          `value` etc.
 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
 *                          and {@link LayoutProps} + they extend {@link InputProps}
 */
export type PhoneInputProps = ReactPhoneInputProps &
  TypographyProps &
  InputProps &
  React.HTMLAttributes<HTMLDivElement>

/**
 * @classdesc
 *
 * Wrapped `phoneinput` html element.
 *
 * ### Usage
 *
 * ```ts
 * import { PhoneInput, PhoneInputProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-phoneinput--default Storybook}
 * @see PhoneInputProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="phoneinput1">Some example label</Label>
 *      <PhoneInput id="phoneinput1" onChange={...} />;
 *   </Box>
 * )
 * @section design-system
 */
const PhoneInput = styled(ReactPhoneInputComponent)<PhoneInputProps>`
  ${PhoneInputStyles}
  width: 100%;
  position: relative;
  & > input {
    ${InputCSS}
    ${space}
    ${typography}
    ${layout}
  }

  .form-control, .flag-dropdown {
    border-radius: 2px;
  }
`

PhoneInput.defaultProps = {
  px: 'default',
  py: 'sm',
  className: cssClass('PhoneInput'),
}

PhoneInput.displayName = 'PhoneInput'

export { PhoneInput }
export default PhoneInput
