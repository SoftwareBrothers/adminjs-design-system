import styled from 'styled-components'

import Box, { BoxProps } from '../../atoms/box'

/**
 * Props passed to DropDownMenu element
 *
 * @memberof DropDown
 */
export type DropDownMenuProps = BoxProps & {
  isVisible?: boolean;
  /**
   * On which side DropDownMenu should be seen
   * Default to left
   */
  variant?: 'top' | 'left' | 'right' | 'bottom'
}

/**
 * @component
 * @private
 */
export const DropDownMenu = styled(Box)<DropDownMenuProps>`
  background: ${({ theme }): string => theme.colors.white};
  display: inline-block;
  position: absolute;
  z-index: 40;
  box-shadow: ${({ theme }): string => theme.shadows.card};
  ${({ isVisible }): string => (isVisible ? '' : 'display: none;')};
`

DropDownMenu.displayName = 'DropDownMenu'

export default DropDownMenu
