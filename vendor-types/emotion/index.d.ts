import { Theme as DefaultTheme } from '../../../src/utils/default-theme.interface.js'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {
    [key: string]: any;
  }
}
