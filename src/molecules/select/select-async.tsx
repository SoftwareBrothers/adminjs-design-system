import noop from 'lodash/noop'
import React, { FC, forwardRef } from 'react'
import ReactAsyncSelect, { AsyncProps } from 'react-select/async'
import Select from 'react-select/base'
import * as theme from '../../theme'
import { cssClass, filterStyles, selectStyles } from '../../utils'

interface SelectProps extends AsyncProps<unknown, boolean, any> {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const SelectAsync: FC<SelectProps> = forwardRef<Select<any, boolean, any>, SelectProps>((props, ref) => {
  const { value, onChange, variant, ...selectProps } = props
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme)

  const handleChange = (selected) => {
    if (typeof onChange === 'function') onChange(selected)
  }

  return (
    <ReactAsyncSelect
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

SelectAsync.defaultProps = {
  variant: 'default',
  onChange: noop,
}

export default SelectAsync
