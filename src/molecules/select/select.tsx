import noop from 'lodash/noop'
import React, { FC, forwardRef } from 'react'
import ReactSelect, { GroupBase, Props } from 'react-select'
import SelectType from 'react-select/base'
import * as theme from '../../theme'
import { cssClass, filterStyles, selectStyles } from '../../utils'

interface SelectProps extends Props {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const Select: FC<SelectProps> = forwardRef<SelectType<any, boolean, GroupBase<unknown>>, SelectProps>((props, ref) => {
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
      ref={ref}
    />
  )
})

Select.defaultProps = {
  variant: 'default',
  onChange: noop,
}

export default Select
