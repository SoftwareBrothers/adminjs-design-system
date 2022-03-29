import React, { FC } from 'react'
import ReactSelect from 'react-select/async'
import { theme } from '../..'
import { cssClass, selectStyles } from '../../utils'

interface SelectProps {
  value: any
  onChange?: (selected) => void
}

export const SelectAsync: FC<SelectProps> = (props) => {
  const { value, onChange, ...selectProps } = props
  const styles = selectStyles(theme)

  const handleChange = (selected) => {
    if (typeof onChange === 'function') onChange(selected)
  }

  return (
    <ReactSelect
      className={cssClass('Select')}
      value={value}
      styles={styles}
      onChange={handleChange}
      isClearable
      {...selectProps}
    />
  )
}

export default SelectAsync
