import { space, SpaceProps } from 'styled-system'
import { styled } from '@styled-components'

/**
 * @component
 * @private
 */
export const DrawerFooter = styled.section<SpaceProps>`
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.space.xxl} ${({ theme }) => theme.space.lg};
  text-align: center;
  flex-shrink: 0;
  ${space};
`

DrawerFooter.displayName = 'DrawerFooter'

export default DrawerFooter
