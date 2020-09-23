import styled from 'styled-components'

import Box, { BoxProps } from '../../atoms/box/box'

/**
 * Props passed to DropDownMenu element.
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 */
export type DropDownMenuProps = BoxProps & {
  isVisible?: boolean;
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
