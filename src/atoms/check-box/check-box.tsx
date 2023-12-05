import React, { ChangeEvent, useEffect, useState } from 'react'
import { styled, css } from '@styled-components'

import focusShadowStyle from '../../utils/focus-shadow.style.js'
import { Label } from '../label/index.js'

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const CheckboxRadioContainer = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  & + ${Label} {
    margin-left: ${({ theme }) => theme.space.default};
    vertical-align: middle;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

type StyledProps = {
  checked?: boolean;
  disabled?: boolean;
}

const checkboxBackground = (theme, checked, disabled): string => {
  if (checked) {
    return disabled ? theme.colors.grey40 : theme.colors.primary100
  }
  return 'transparent'
}

const StyledCheckbox = styled.a<StyledProps>`
  display: inline-block;
  width: 16px;
  /* when it is placed within a container setting different font size */
  font-size: 12px;
  border: 1px solid ${({ theme, checked, disabled }): string => (checked && !disabled ? theme.colors.primary100 : theme.colors.inputBorder)};
  height: 16px;
  background: ${({ checked, theme, disabled }): string => checkboxBackground(theme, checked, disabled)};
  transition: all 150ms;
  position: relative;
  border-radius: 2px;

  ${HiddenCheckbox}:focus + & {
    ${({ theme }) => `box-shadow: ${focusShadowStyle(theme)};`};
  }
  ${HiddenCheckbox}:hover + & {
    border-color: ${({ theme }) => theme.colors.grey60};
  }
  ${Icon} {
    visibility: ${(props): string => (props.checked ? 'visible' : 'hidden')};
  }

  ${({ disabled }) => (!disabled && css`
    cursor: pointer;
  `)}

  &:after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    opacity: 0;
    background: ${({ theme }) => theme.colors.primary100};
  }
  &:after:before {
    opacity: 0.1;
  }
`

export type CheckBoxProps = React.HTMLProps<HTMLInputElement>

/**
 * @typedef {object} CheckBoxProps
 * @alias CheckBoxProps
 * @memberof module:@adminjs/design-system.CheckBox
 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
 *                          `checked` etc.
 */

/**
 * @classdesc
 *
 * <img src="components/checkbox.png" />
 *
 * HTML CheckBox
 *
 * ### Usage
 *
 * ```javascript
 * import { CheckBox, CheckBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-checkbox--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <CheckBox id="checkbox1"/>
 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { className, checked, onChange, disabled, ...restProps } = props

  const [isChecked, setChecked] = useState(checked ?? false)
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (disabled) return
    if (onChange) {
      onChange(event)
    } else {
      setChecked(!event.target.checked)
    }
  }

  useEffect(() => {
    setChecked(checked ?? false)
  }, [checked])

  return (
    <CheckboxRadioContainer className={[className ?? '', 'adminjs_Checkbox'].join(' ')}>
      <HiddenCheckbox
        checked={isChecked}
        onChange={handleChange}
        // eslint-disable-next-line @typescript-eslint/ban-types
        {...restProps as {}}
        disabled={disabled}
      />
      <StyledCheckbox
        checked={isChecked}
        disabled={disabled}
        onClick={(event): void => handleChange && handleChange(event as any)}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxRadioContainer>
  )
}

CheckBox.displayName = 'CheckBox'

export { CheckBox }
export default CheckBox
