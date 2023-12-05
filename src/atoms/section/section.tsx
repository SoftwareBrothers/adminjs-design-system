/* eslint-disable import/prefer-default-export */
import { styled } from '@styled-components'

import { Box } from '../box/index.js'
import { themeGet, cssClass } from '../../utils/index.js'

/**
 * @classdesc
 *
 * <img src="components/section.png" />
 *
 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
 *
 * ### Usage
 *
 * ```javascript
 * import { Section } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-section--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Section>
 *     <Text>Some text within a section</Text>
 *     <Section>
 *       <Text>Section can be nested</Text>
 *     </Section>
 *   </Section>
 * )
 * @section design-system
 */
const Section = styled<any>(Box)`
  border: 1px dashed ${({ theme }) => theme.colors.inputBorder};
  padding: ${themeGet('space', 'lg')};
`

Section.defaultProps = {
  className: cssClass('Section'),
}

Section.displayName = 'Section'

export { Section }
export default Section
