import { getValueAndUnit } from 'polished'
import { DefaultTheme } from 'styled-components'

type Kind = keyof DefaultTheme

function themeGet<T extends Kind>(
  kind: T,
  value?: keyof DefaultTheme[T],
  offset?: number | string,
): DefaultTheme[T][any] | DefaultTheme[T] {
  return ({ theme }) => {
    const themeVal = value ? theme[kind][value] : theme[kind]

    if (themeVal && offset) {
      let offsetValue: number
      if (typeof offset === 'string') {
        ([offsetValue] = getValueAndUnit(offset))
      } else {
        offsetValue = offset
      }
      const [pxValue, unit] = getValueAndUnit(themeVal)
      return `${pxValue + offsetValue}${unit}`
    }

    return themeVal
  }
}

export {
  themeGet as default,
  themeGet,
}
