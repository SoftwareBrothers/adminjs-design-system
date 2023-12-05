import { styled } from '@styled-components'
import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { DEFAULT_STICK, DropDownStickProp } from './drop-down.jsx'
import { cssClass } from '../../utils/index.js'

/**
 * Props passed to DropDownMenu element.
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 */
export type DropDownMenuProps = PropsWithChildren<BoxProps & {
  isVisible?: boolean;
  stick?: DropDownStickProp;
}>

/**
 * @component
 * @private
 */
export const DropDownMenu = styled(Box).attrs<DropDownMenuProps>((props) => ({
  className: cssClass([`DropDown-Stick-${props.stick || DEFAULT_STICK}`, 'DropDownMenu'], props.className),
}))<DropDownMenuProps>`
  background: ${({ theme }) => theme.colors.container};
  display: inline-block;
  position: absolute;
  z-index: 40;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.space.sm};
  ${({ isVisible }): string => (isVisible !== false ? '' : 'display: none;')};

  &.${cssClass('DropDown-Stick-left')} .${cssClass('DropDownMenu')} {
    left: 100%;
  }
  &.${cssClass('DropDown-Stick-right')} .${cssClass('DropDownMenu')} {
    right: 100%;
  }
`

DropDownMenu.displayName = 'DropDownMenu'

export default DropDownMenu
