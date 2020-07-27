import {
  colors,
  sizes,
  space,
  font,
  fontSizes,
  lineHeights,
  fontWeights,
  shadows,
} from '../theme'
import { NonNullishPartialRecord } from './non-nullish-partial-record.type'

export interface Theme {
  colors: typeof colors;
  sizes: typeof sizes;
  space: typeof space;
  fontSizes: typeof fontSizes;
  lineHeights: typeof lineHeights;
  fontWeights: typeof fontWeights;
  font: typeof font;
  shadows: typeof shadows;
}

export type ThemeOverride<T=Theme> = {
  [key in keyof T]?: NonNullishPartialRecord<T[key]>
}
