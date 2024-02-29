/* eslint-disable import/no-named-default */
import noop from 'lodash/noop.js'
import React, { FC } from 'react'
import { Props, default as ReactSelect } from 'react-select'

import { cssClass, filterStyles, selectStyles } from '../../utils/index.js'
import useSelectTheme from './select-theme.js'

interface SelectProps extends Props {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

let SelectComponent: typeof ReactSelect
if ((ReactSelect as any).default) {
  SelectComponent = (ReactSelect as any).default
} else {
  SelectComponent = ReactSelect
}

export const Select: FC<SelectProps> = (props) => {
  const { value, onChange, variant, isMulti, ...selectProps } = props
  const { theme, selectTheme } = useSelectTheme()
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme)

  const handleChange: Props['onChange'] = (selected) => {
    if (typeof onChange === 'function') onChange(selected)
  }

  return (
    <SelectComponent
      className={cssClass('Select')}
      value={value}
      theme={selectTheme}
      styles={styles}
      onChange={handleChange}
      isClearable
      isMulti={isMulti}
      {...selectProps}
    />
  )
}

Select.defaultProps = {
  variant: 'default',
  onChange: noop,
}
Select.displayName = 'Select'

export default Select
