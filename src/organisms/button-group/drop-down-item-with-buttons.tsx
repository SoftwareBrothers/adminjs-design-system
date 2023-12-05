import React, { useState, useMemo } from 'react'

import { Icon } from '../../atoms/icon/index.js'
import {
  DropDownMenu,
  DropDownItem,
} from '../../molecules/drop-down/index.js'
import { StyledDropDownItemAction } from './button-group.styled.jsx'
import { ButtonInGroupProps } from './button-group.types.js'

export const DropDownItemWithButtons: React.FC<ButtonInGroupProps> = (props) => {
  const { variant, onClick, href, icon, label, buttons, source, ...rest } = props
  const [loading, setLoading] = useState(false)

  const onClickHandler = onClick
    ? async (event) => {
      setLoading(true)
      await onClick(event, source)
      setLoading(false)
    }
    : undefined

  const iconName = useMemo(() => (loading ? 'Loader' : icon), [loading])

  return (
    <DropDownItem
      colorVariant={variant}
      p={0}
    >
      <StyledDropDownItemAction
        onClick={onClickHandler}
        href={href}
        as="a"
        hasLabel={!!label}
        {...rest}
      >
        {buttons && buttons.length ? (
          <Icon icon="ChevronLeft" ml="-24px" mr="0" />
        ) : ''}
        {!loading && !icon ? '' : <Icon key={iconName?.toString()} icon={iconName} spin={loading} />}
        {label}
      </StyledDropDownItemAction>
      {buttons && buttons.length ? (
        <DropDownMenu>
          {buttons.map((button) => (
            <DropDownItemWithButtons {...button} key={button.label} />
          ))}
        </DropDownMenu>
      ) : ''}
    </DropDownItem>
  )
}

DropDownItemWithButtons.displayName = 'DropDownItemWithButtons'

export default DropDownItemWithButtons
