import '@emotion/react'

import { Theme as DefaultTheme } from '../../../src/utils/default-theme.interface.js'

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {
    [key: string]: any;
  }
}
