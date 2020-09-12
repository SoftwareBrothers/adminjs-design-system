import { DefaultTheme } from 'styled-components'

type Kind = keyof DefaultTheme

export default function themeGet<T extends Kind>(
  kind: T,
  value?: keyof DefaultTheme[T],
): DefaultTheme[T][any] | DefaultTheme[T] {
  return ({ theme }) => (value ? theme[kind][value] : theme[kind])
}
