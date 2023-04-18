import noop from 'lodash/noop.js'
import React, { FC, lazy } from 'react'
import { AsyncProps } from 'react-select/async'

import useSelectTheme from './select-theme.js'
import { cssClass, filterStyles, selectStyles } from '../../utils/index.js'

const ReactAsyncSelect = lazy(() => import('react-select/async') as any) as any

const SelectAsyncComponent = ReactAsyncSelect.default || ReactAsyncSelect

interface SelectProps<Option = unknown, IsMulti extends boolean = false>
  extends AsyncProps<Option, IsMulti, any> {
  value: Option
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
    <SelectAsyncComponent
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
