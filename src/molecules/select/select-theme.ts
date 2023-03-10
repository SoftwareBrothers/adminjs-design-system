import { rgba } from 'polished'
import { ThemeConfig } from 'react-select'
import { DefaultTheme, useTheme } from 'styled-components'

const useSelectTheme = (): { theme: DefaultTheme; selectTheme: ThemeConfig } => {
  const theme = useTheme()
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

  return { theme, selectTheme }
}

export default useSelectTheme
