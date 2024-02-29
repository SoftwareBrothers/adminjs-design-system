/* eslint-disable import/no-named-default */
import noop from 'lodash/noop.js'
import React, { FC } from 'react'
import { AsyncProps, default as ReactAsyncSelect } from 'react-select/async'

import useSelectTheme from './select-theme.js'
import { cssClass, filterStyles, selectStyles } from '../../utils/index.js'

interface SelectProps<Option = unknown, IsMulti extends boolean = false>
  extends AsyncProps<Option, IsMulti, any> {
  value: Option
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

let SelectComponent: typeof ReactAsyncSelect
if ((ReactAsyncSelect as any).default) {
  SelectComponent = (ReactAsyncSelect as any).default
} else {
  SelectComponent = ReactAsyncSelect
}

export const SelectAsync: FC<SelectProps> = (props) => {
  const { value, onChange, variant, ...selectProps } = props
  const { theme, selectTheme } = useSelectTheme()
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme)

  const handleChange = (selected) => {
    if (typeof onChange === 'function') onChange(selected)
  }

  return (
    <SelectComponent
      className={cssClass('Select')}
      theme={selectTheme}
      value={value}
      styles={styles}
      onChange={handleChange}
      isClearable
      {...selectProps}
    />
  )
}

SelectAsync.defaultProps = {
  variant: 'default',
  onChange: noop,
}
SelectAsync.displayName = 'SelectAsync'

export default SelectAsync
