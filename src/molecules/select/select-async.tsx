/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import noop from 'lodash/noop.js'
import React, { FC } from 'react'
import ReactAsyncSelect, { AsyncProps } from 'react-select/async'

import useSelectTheme from './select-theme.js'
import { cssClass, filterStyles, selectStyles } from '../../utils/index.js'

interface SelectProps extends AsyncProps<unknown, boolean, any> {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const SelectAsync: FC<SelectProps> = (props) => {
  const { value, onChange, variant, ...selectProps } = props
  const { theme, selectTheme } = useSelectTheme()
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme)

  const handleChange = (selected) => {
    if (typeof onChange === 'function') onChange(selected)
  }

  return (
    <ReactAsyncSelect
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

export default SelectAsync
