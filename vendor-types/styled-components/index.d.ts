import { Theme } from '../../src/utils/default-theme.interface.js'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    [key: string]: any;
  }
}
