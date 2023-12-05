import React, { PropsWithChildren } from 'react'
import { styled } from '@styled-components'

import { cssClass } from '../../utils/index.js'
import * as Illustrations from '../illustrations/index.js'

export type IllustrationVariant = keyof typeof Illustrations

/**
 * @memberof Illustration
 * @alias IllustrationProps
 */
export type IllustrationProps = {
  /** Available illustration variant */
  variant: IllustrationVariant
  /** Optional max width restrictions */
  width?: number
  /** Optional max height restrictions */
  height?: number
}

const Wrapper = styled.div.attrs((props) => ({
  className: cssClass('Illustration', props.className),
}))`
  [fill='#3040D6'] {
    fill: ${({ theme }) => theme.colors.primary100};
  }

  [stroke='#3B3552'] {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`

type RawIllustrationType = IllustrationProps & PropsWithChildren

const RawIllustration: React.FC<RawIllustrationType> = (props) => {
  const { variant, ...other } = props
  const IllustrationComponent = Illustrations[variant]
  return (
    <Wrapper>
      <IllustrationComponent {...other} />
    </Wrapper>
  )
}

/**
 * @classdesc
 *
 * <img src="components/illustration.png" />
 *
 * Awesome database with all the illustrations provided with AdminJS.
 *
 *
 * ### Usage
 *
 * ```javascript
 * import { Illustration, IllustrationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IllustrationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-illustration--default Storybook}
 * @hideconstructor
 *
 * @example <caption>Folders</caption>
 * return (
 *   <Illustration variant="Folders" />
 * )
 * @example <caption>DocumentSearch</caption>
 * return (
 *   <Illustration variant="DocumentSearch" />
 * )
 * @example <caption>Rocket</caption>
 * return (
 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
 * )
 * @section design-system
 */
export const Illustration = RawIllustration

Illustration.displayName = 'Illustration'

export default Illustration
