import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

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

export default DrawerContent
