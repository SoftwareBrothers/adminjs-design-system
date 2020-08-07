/**
 * @module @admin-bro/design-system
 *
 * @description
 * This package consist of all DesignSystem components from [AdminBro](adminbro.com)
 * so you can use all of them inside and outside the AdminBro environment.
 *
 * It was created with the help of 2 amazing packages:
 *
 * - [styled-components](styled-components.com) which is a peerDependency
 * - [styled-system](styled-system.com)
 *
 * make sure to check them out in order to use full potential of this design system
 *
 * ## Usage within the AdminBro
 *
 * If you are using this module inside AdminBro there is no need to install anything,
 * just use its components like this:
 *
 * ```
 * import { Box, Button } from '@admin-bro/design-system'
 *
 * // and here you can use them
 * ```
 *
 * ## Usage outside the AdminBro
 *
 * Nothing stays in a way of using @admin-bro/design-system in your project which doesn't
 * require AdminBro. This is how you can do this:
 *
 * ### Installation
 *
 * ```bash
 * yarn add styled-components @admin-bro/design-system
 * ```
 *
 * Optionally, if you use typescript, you might want to install types for `styled-components`
 *
 * ```bash
 * yarn add --dev @types/styled-components
 * ```
 *
 * Design System needs a `theme` so in order to use it you have to use `ThemeProvider`
 * from `styled-components` like this:
 *
 * ```
 * import { ThemeProvider } from 'styled-components'
 *
 * // theme is the default theme, which you can alter
 * import { theme, Button, Box, Icon } from '@admin-bro/design-system'
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme={theme}>
 *       <Box variant="grey">
 *         <Button><Icon icon="Add" />Click Me</Button>
 *         <Button variant='primary' ml="xl">I am important</Button>
 *       </Box>
 *     </ThemeProvider>
 *   );
 * }
 *
 * export default App;
 * ```
 *
 * ## Changing theme
 *
 * Design System provides you with the default [theme](https://adminbro.com/Theme.html).
 * It contains all the parameters like paddings, colors, font sizes etc.
 * For the list of all available parameters take a look at the
 * [Theme spec](https://adminbro.com/Theme.html).
 *
 * But nothing stands in a way for you to change the default theme.
 *
 * ### Changing theme inside the AdminBro
 *
 * In order to override the Theme or its selected parameters use {@link AdminBroOptions.branding}
 * theme property.
 *
 * ### Changing theme outside AdminBro
 *
 * In order to do that you can use `combineStyles` method:
 *
 * ```javascript
 * import { combineStyles } from '@admin-bro/design-system'
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 *
 * //....
 * <ThemeProvider theme={myTheme}>
 * //....
 * ```
 *
 * ## Changing particular components
 *
 * Sometimes you might want to change the look and feel of a
 * particular component - not the entire theme. You can achieve that with `styled` method:
 *
 * ```
 * import { Button } from '@admin-bro/design-system'
 * import styled from 'styled-components'
 *
 * const MyRoundedButton = styled(Button)`
 *   border-radius: 10px;
 * `
 * ```
 *
 * and then you can use it like a normal button component:
 *
 * ```javascript
 * <MyRoundedButton variant="primary">Rounded I am</MyRoundedButton>
 * ```
 *
 * ## Components
 *
 * For the list off all the components and their documentation go to [adminbro.com](adminbro.com)
 *
 * ## Bundled packages
 *
 * This npm package comes with the bundled versions as well. You can find them under:
 *
 * - `node_modules/@admin-bro/design-system/bundle.development.js`
 * - `node_modules/@admin-bro/design-system/bundle.production.js` (minified)
 *
 * (they can also be bundled by using `bundle` script: `yarn bundle` or
 * `NODE_ENV=production yarn bundle`)
 *
 * In order to use them you will have to host them (put to your 'public' folder)
 * and then put them into the HEAD of your page:
 *
 * ```javascript
 * <head>
 * <!-- ... -->
 * <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
 * <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.1.1/styled-components.js"></script>
 * <script crossorigin src="/bundle.development.js"></script>
 * <!-- ... -->
 * </head>
 * ```
 *
 */

import * as theme from './theme'

export * from './utils/default-theme.interface'
export * from './atoms/badge'
export * from './atoms/button'
export * from './atoms/check-box'
export * from './atoms/radio'
export * from './atoms/text'
export * from './atoms/label'
export * from './atoms/link'
export * from './atoms/input'
export * from './atoms/text-area'
export * from './atoms/illustration'
export * from './atoms/overlay'
export * from './atoms/box'
export * from './atoms/table/index'
export * from './atoms/header'
export * from './atoms/icon'
export * from './atoms/section'
export * from './atoms/loader'
export * from './atoms/placeholder'
export * from './atoms/tooltip'
export * from './molecules/form-group/index'
export * from './molecules/date-picker'
export * from './molecules/drop-zone/index'
export * from './molecules/info-box'
export * from './molecules/message-box'
export * from './molecules/modal'
export * from './molecules/drop-down/index'
export * from './molecules/pagination'
export * from './molecules/drawer/index'
export * from './molecules/logged-user'
export * from './molecules/nav-group'
export * from './molecules/stepper/index'
export * from './templates/navigation'
export * from './constants'

export * from './utils/index'
export * from './utils/combine-styles'

export { theme }
