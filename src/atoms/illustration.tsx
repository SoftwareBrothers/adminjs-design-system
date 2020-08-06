import React from 'react'
import { ThemeProps, DefaultTheme, withTheme } from 'styled-components'
import * as Illustrations from './illustrations/index'

/**
 * @memberof module:@admin-bro/design-system.Illustration
 * @alias IllustrationProps
 */
export type IllustrationProps = {
  /**
   * Available illustration variant
   */
  variant: 'Moon' | 'Rocket' | 'Astronaut'
    | 'DocumentCheck' | 'DocumentSearch' | 'FileSearch'
    | 'FlagInCog' | 'Folders' | 'Launch' | 'Planet'
    | 'AdminBroLogo' | 'SoftwareBrothersLogo' | 'GithubLogo'
    | 'SlackLogo';
  /** Optional max width restrictions */
  width?: number;
  /** Optional max height restrictions */
  height?: number;
}

type RawIllustrationType = IllustrationProps & ThemeProps<DefaultTheme> & {
  // this fixes unknown error with some TSC version (monkey patch)
  children?: React.ReactNode
}

const RawIllustration: React.FC<RawIllustrationType> = (props) => {
  const { variant, ...other } = props
  const IllustrationComponent = Illustrations[variant]
  return (
    <IllustrationComponent {...other} />
  )
}

/**
 * Awesome database with all the illustrations provided with AdminBro.
 *
 * The best thing about them is that they follow your {@link Theme} color palette.
 *
 * @component
 * @subcategory Atoms
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
 * @memberof module:@admin-bro/design-system
 */
const Illustration = withTheme(RawIllustration)

export { Illustration }
export default Illustration
