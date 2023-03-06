import noop from 'lodash/noop.js'
import React, { FC } from 'react'
import ReactSelect, { Props } from 'react-select'

import { cssClass, filterStyles, selectStyles } from '../../utils/index.js'
import useSelectTheme from './select-theme.js'

const SelectComponent = (ReactSelect as any).default ?? ReactSelect

interface SelectProps extends Props {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const Select: FC<SelectProps> = (props) => {
  const { value, onChange, variant, ...selectProps } = props
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
      {...selectProps}
    />
  )
}

Select.defaultProps = {
  variant: 'default',
  onChange: noop,
}

export default Select
