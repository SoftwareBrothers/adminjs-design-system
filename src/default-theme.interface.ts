import {
  colors,
  sizes,
  space,
  font,
  fontSizes,
  lineHeights,
  fontWeights,
  shadows,
} from './theme'

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
