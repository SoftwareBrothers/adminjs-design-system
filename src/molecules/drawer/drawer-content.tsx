import { space, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

/**
 * @component
 * @private
 */
export const DrawerContent = styled.section<SpaceProps>`
  flex-grow: 1;
  overflow: auto;
  padding: ${({ theme }) => theme.space.x3} ${({ theme }) => theme.space.xxl} ${({ theme }) => theme.space.xl};
  box-sizing: border-box;
  ${space};
`

DrawerContent.displayName = 'DrawerContent'

export default DrawerContent
