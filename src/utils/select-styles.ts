import type { Props } from 'react-select'
import type { DefaultTheme } from '@styled-components'

const selectStyles = (theme: DefaultTheme): Props['styles'] => ({
  control: (baseStyles) => ({
    ...baseStyles,
    boxShadow: 'none',
    background: 'transparent',
    borderColor: theme.colors.inputBorder,
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: theme.colors.grey100,
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: theme.colors.grey100,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    boxShadow: 'none',
    background: theme.colors.container,
    border: theme.borders.input,
    zIndex: 100,
  }),
})

const filterStyles = (theme: DefaultTheme): Props['styles'] => ({
  control: (provided) => ({
    ...provided,
    boxShadow: 'none',
    background: 'transparent',
    borderColor: theme.colors.inputBorder,
  }),
  input: () => ({
    color: theme.colors.grey100,
    gridArea: '1/1/2/3',
    gridTemplateColumns: '0px min-content',
  }),
  singleValue: () => ({
    color: theme.colors.grey100,
    gridArea: '1/1/2/3',
  }),
  menu: (provided) => ({
    ...provided,
    borderColor: theme.colors.border,
    background: theme.colors.filterBg,
    zIndex: 5,
  }),
})

export { filterStyles, selectStyles }
