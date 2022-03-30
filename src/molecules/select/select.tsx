import noop from 'lodash/noop'
import React, { FC } from 'react'
import ReactSelect, { Props } from 'react-select'
import * as theme from '../../theme'
import { cssClass, filterStyles, selectStyles } from '../../utils'

interface SelectProps extends Props {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const Select: FC<SelectProps> = (props) => {
  const { value, onChange, variant, ...selectProps } = props
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme)

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

Select.defaultProps = {
  variant: 'default',
  onChange: noop,
}

export default Select
