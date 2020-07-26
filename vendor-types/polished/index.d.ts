declare module 'polished' {
  export interface RGB {
    red: number;
    green: number;
    blue: number;
  }

  export function parseToRgb(color: string): RGB
}
