import noop from 'lodash/noop'
import React, { FC } from 'react'
import ReactAsyncSelect, { AsyncProps } from 'react-select/async'
import * as theme from '../../theme'
import { cssClass, filterStyles, selectStyles } from '../../utils'

interface SelectProps extends AsyncProps<unknown, boolean, any> {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const SelectAsync: FC<SelectProps> = (props) => {
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
    />
  )
}

SelectAsync.defaultProps = {
  variant: 'default',
  onChange: noop,
}

export default SelectAsync
