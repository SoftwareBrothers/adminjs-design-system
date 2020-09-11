import styled from 'styled-components'
import { position, PositionProps, variant } from 'styled-system'

import Box, { BoxProps } from '../../atoms/box'
import { cssClass } from '../../utils'

const variants = variant({
  prop: 'variant',
  variants: {
    top: {
      fontSize: 'default',
      py: 'sm',
      px: 'xxl',
      [`& .${cssClass('Icon')}`]: {
        paddingRight: 'sm',
      },
    },
    left: {},
    right: {
      top: '24px',
      bottom: 'auto',
      left: '0',
      right: 'auto',
    },
    bottom: {},
  },
})

/**
 * Props passed to DropDownMenu element
 *
 * @memberof DropDown
 */
export type DropDownMenuProps = PositionProps & BoxProps & {
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
  right: 0;
  top: 24px;
  box-shadow: ${({ theme }): string => theme.shadows.card};
  ${({ isVisible }): string => (isVisible ? '' : 'display: none;')};
  ${position};
  ${variants};
`

DropDownMenu.displayName = 'DropDownMenu'

export default DropDownMenu
