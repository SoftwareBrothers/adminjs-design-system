/* eslint-disable react/no-array-index-key */
import React from 'react'

import { BUTTON_IN_GROUP_CLASS_NAME, StyledButtonGroup } from './button-group.styled.js'
import { ButtonGroupProps } from './button-group.types.js'
import { ButtonInGroup } from './button-in-group.js'

/**
 * @load ./button-group.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-button-group--default Storybook}
 * @component
 * @subcategory Organisms
 * @section design-system
 * @new in version 3.3
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { buttons, size, rounded } = props

  if (!buttons || !buttons.length) {
    return null
  }

  return (
    <StyledButtonGroup {...props}>
      {buttons.map((button, i) => (
        <ButtonInGroup
          key={`${button.label || ''}-${i}`}
          size={size}
          rounded={rounded}
          {...button}
          className={BUTTON_IN_GROUP_CLASS_NAME}
        />
      )) }
    </StyledButtonGroup>
  )
}

export default ButtonGroup
