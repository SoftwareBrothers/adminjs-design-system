import { ColorProps } from 'styled-system'

export type NewColorProps = Omit<ColorProps, 'color'> & {
  color?: string
}

export default NewColorProps
