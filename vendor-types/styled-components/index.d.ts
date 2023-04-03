import { Theme } from '../../src/utils/default-theme.interface.js'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    [key: string]: any;
  }
}
