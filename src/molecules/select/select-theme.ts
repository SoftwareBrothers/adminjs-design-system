import { rgba } from 'polished'
import { useEffect, useState } from 'react'
import type { ThemeConfig } from 'react-select'
import type { DefaultTheme } from '@styled-components'
import { useTheme } from '@styled-components'

import * as defautTheme from '../../theme.js'

const useSelectTheme = (): { theme: DefaultTheme; selectTheme: ThemeConfig } => {
  const theme = useTheme()
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(defautTheme)

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme)
    }
  }, [theme])

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
      primary: currentTheme.colors.primary100,
      danger: currentTheme.colors.error,
      dangerLight: currentTheme.colors.errorLight,
      primary25: rgba(currentTheme.colors.black, 0.06),
      primary50: rgba(currentTheme.colors.black, 0.125),
      primary75: rgba(currentTheme.colors.black, 0.25),
    },
  })

  return { theme: currentTheme, selectTheme }
}

export default useSelectTheme
