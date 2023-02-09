import noop from 'lodash/noop'
import React, { FC, useMemo } from 'react'
import { rgba } from 'polished'
import { useTheme } from 'styled-components'
import ReactSelect, { Props, ThemeConfig } from 'react-select'
import { cssClass, filterStyles, selectStyles } from '../../utils'

interface SelectProps extends Props {
  value: any
  onChange?: (selected) => void
  variant?: 'default' | 'filter'
}

export const Select: FC<SelectProps> = (props) => {
  const { value, onChange, variant, ...selectProps } = props

  const handleChange: Props['onChange'] = (selected) => {
    if (typeof onChange === 'function') onChange(selected)
  }

  const theme = useTheme()
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme)
  const selectTheme: ThemeConfig = (config) => ({
    ...config,
    borderRadius: 2,
    spacing: {
      ...config.spacing,
      controlHeight: 32,
      baseUnit: 3,
    },
    colors: {
      ...config.colors,
      primary: theme.colors.primary100,
      danger: theme.colors.error,
      dangerLight: theme.colors.errorLight,
      primary25: rgba(theme.colors.black, 0.06),
      primary50: rgba(theme.colors.black, 0.125),
      primary75: rgba(theme.colors.black, 0.25),
    },
  })

  return (
    <ReactSelect
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
