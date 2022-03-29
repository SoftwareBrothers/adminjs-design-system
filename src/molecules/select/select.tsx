import React, { FC } from 'react'
import ReactSelect, { Props } from 'react-select'
import { theme } from '../..'
import { cssClass, selectStyles } from '../../utils'

interface SelectProps extends Props {
  value: any
  onChange?: (selected) => void
}

export const Select: FC<SelectProps> = (props) => {
  const { value, onChange, ...selectProps } = props
  const styles = selectStyles(theme)

  const handleChange: Props['onChange'] = (selected) => {
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

export default Select
