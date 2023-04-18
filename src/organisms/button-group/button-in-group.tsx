import React from 'react'

import {
  DropDown,
  DropDownMenu,
  DropDownTrigger,
} from '../../molecules/drop-down/index.js'
import { SingleButtonInGroup } from './single-button-in-group.js'
import { DropDownItemWithButtons } from './drop-down-item-with-buttons.js'
import { ButtonInGroupProps } from './button-group.types.js'

export const ButtonInGroup: React.FC<ButtonInGroupProps> = (props) => {
  const { buttons, className, ...buttonProps } = props

  if (buttons && buttons.length) {
    return (
      <DropDown stick="right" className={className}>
        <DropDownTrigger>
          <SingleButtonInGroup {...props} />
        </DropDownTrigger>
        <DropDownMenu>
          {buttons.map((button) => (
            <DropDownItemWithButtons
              {...button}
              key={`${button.label}-${button.icon}`}
            />
          ))}
        </DropDownMenu>
      </DropDown>
    )
  }

  return <SingleButtonInGroup {...buttonProps} className={className} />
}

export default ButtonInGroup
