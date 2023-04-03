import flat from 'flat'
import merge from 'lodash/merge.js'

import * as theme from '../theme.js'
import type { Theme, ThemeOverride } from './default-theme.interface.js'

const { flatten, unflatten } = flat

/**
 * Applies new styles to the default theme
 *
 * ### Example
 *
 * ```jsx
 * import { combineStyles } from '@adminjs/design-system`
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 * ```
 *
 * @param {ThemeOverride} overrides
 * @memberof module:@adminjs/design-system
 *
 * @return  {Theme}
 */
const combineStyles = (...overrides: (Partial<ThemeOverride> | undefined)[]): Theme => {
  const merged: Partial<ThemeOverride>[] = merge(
    flatten(theme as Theme),
    ...overrides.map((o = {}) => flatten(o)),
  )
  return unflatten(merged)
}

export { combineStyles }
