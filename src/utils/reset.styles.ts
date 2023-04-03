/* cSpell:disable */
import { css, createGlobalStyle } from '@styled-components'

/**
 * Resets css styles which can be applied to element created by styled-component
 *
 * ### Example
 *
 * ```javascript
 * import { reset } from '@adminjs/design-system'
 *
 * const myContentComponent = styled`
 *   ${reset};
 * `
 * ```
 * @new in version 3.3
 * @memberof module:@adminjs/design-system
 */
const reset: ReturnType<typeof css> = css`
/* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`

/* cSpell:enable */

/**
 * Resets css component which should be applied to the top of the html
 *
 * ### Example
 *
 * ```jsx
 * import { Reset } from '@adminjs/design-system'
 *
 * <ThemeProvider theme={theme}>
 *   <Reset />
 *   <Box>
 *     { ... }
 *   </Box>
 * </ThemeProvider>
 * ```
 * @new in version 3.3
 * @memberof module:@adminjs/design-system
 */
const Reset = createGlobalStyle`${reset}`

export {
  Reset,
  reset,
}
