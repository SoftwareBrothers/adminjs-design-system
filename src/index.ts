/**
 * @module @adminjs/design-system
 * @section design-system
 *
 * @load .index.doc.md
 */

import * as theme from './theme.js'

export { theme }

export * from './atoms/index.js'
export * from './molecules/index.js'
export * from './organisms/index.js'

export * from './constants.js'
export * from './global.js'
export * from './theme.js'
export * from './utils/index.js'
export type { Theme, ThemeOverride } from './utils/default-theme.interface.js'
