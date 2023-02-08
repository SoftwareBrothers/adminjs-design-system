import React from 'react'
import styled, { DefaultTheme, ThemeProps, withTheme } from 'styled-components'
import * as Illustrations from '../illustrations'

export type IllustrationVariant =
  | 'Accept'
  | 'AdminJSLogo'
  | 'Astronaut'
  | 'Bag'
  | 'Beware'
  | 'Box'
  | 'Calendar'
  | 'Cancel'
  | 'Cards'
  | 'Clip'
  | 'Cloud'
  | 'Cup'
  | 'Details'
  | 'Docs'
  | 'DocumentCheck'
  | 'DocumentSearch'
  | 'Drawer'
  | 'FileSearch'
  | 'FlagInCog'
  | 'Folders'
  | 'Folder'
  | 'GithubLogo'
  | 'IdentityCard'
  | 'Launch'
  | 'Moon'
  | 'Notebook'
  | 'NotFound'
  | 'Padlock'
  | 'Photos'
  | 'Planet'
  | 'Plug'
  | 'RocketNew'
  | 'Rocket'
  | 'SlackLogo'
  | 'Tags'

/**
 * @memberof Illustration
 * @alias IllustrationProps
 */
export type IllustrationProps = {
  /**
   * Available illustration variant
   */
  variant: IllustrationVariant
  /** Optional max width restrictions */
  width?: number
  /** Optional max height restrictions */
  height?: number
}

const Wrapper = styled.div`  
  [fill="#3040D6"] {
    fill: ${({ theme }) => theme.colors.primary100}
  }
  
  [stroke="#3B3552"] {
    stroke: ${({ theme }) => theme.colors.accent}
  }
`

type RawIllustrationType = IllustrationProps &
  ThemeProps<DefaultTheme> & {
    // this fixes unknown error with some TSC version (monkey patch)
    children?: React.ReactNode
  }

const RawIllustration: React.FC<RawIllustrationType> = (props) => {
  const { variant, ...other } = props
  const IllustrationComponent = Illustrations[variant]
  return <Wrapper><IllustrationComponent {...other} /></Wrapper>
}

/**
 * @classdesc
 *
 * <img src="components/illustration.png" />
 *
 * Awesome database with all the illustrations provided with AdminJS.
 *
 * The best thing about them is that they follow your {@link Theme} color palette.
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
const Illustration = withTheme(RawIllustration)

export { Illustration }
export default Illustration
