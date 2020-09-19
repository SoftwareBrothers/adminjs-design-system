/* eslint-disable default-case */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxProps } from '../..'

const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`

const DEFAULT_STICK = 'left'

export type DropDownProps = {
  stick?: 'left' | 'right',
} & BoxProps

type PositionProps = {
  left?: number,
  right?: number,
  top: number,
}

/**
 * @classdesc
 *
 * <img src="components/drop-down.png" />
 *
 * Simple set of components allowing you to create a dropdowns.
 *
 * ### Usage
 *
 * ```javascript
 * import { DropDown, DropDownTrigger, DropDownMenu, DropDownItem } from '@admin-bro/design-system'
 * ```
 *
 * It contains couple of sub components:
 *
 * - DropDown - an actual wrapper for entire DropDown
 * - DropDownTrigger - it has to be right inside the DropDown.
 *   It is what user sees when the DropDown is not hovered
 * - DropDownMenu - wraps elements which are hidden by default.
 *   Shown after hovering Trigger
 * - DropDownMenuItem - it is a wrapper for a menu item list.
 *   It can next contain either Link or Button.
 *
 * Props:
 * - DropDownMenu extends {@link PositionProps}, so you can add prop like `top="xl"`
 * - DropDownItem extends {@link SpaceProps}
 * - DropDownTrigger also extends {@link SpaceProps}
 *
 * @hideconstructor
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @example
 * return (
 *   <Box px="300px" pt="lg" pb="200px">
 *     <DropDown>
 *       <DropDownTrigger p="default">
 *         <Text as="span">This is trigger -> </Text>
 *         <Icon icon="OverflowMenuHorizontal" />
 *       </DropDownTrigger>
 *       <DropDownMenu top="xxl">
 *         <DropDownItem>
 *           <Link href="/some">
 *             <Icon icon="Video" />
 *             Some menu item
 *           </Link>
 *         </DropDownItem>
 *         <DropDownItem>
 *           <Link href="/some">Other item</Link>
 *         </DropDownItem>
 *       </DropDownMenu>
 *     </DropDown>
 *   </Box>
 * )
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropDown: React.FC<DropDownProps> = (props) => {
  const { children, stick, ...boxProps } = props
  const [isVisible, setIsVisible] = useState(false)

  const triggerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const [menuPosition, setMenuPosition] = useState<PositionProps | null>()

  useEffect(() => {
    if (menuRef.current && triggerRef.current) {
      const { offsetHeight } = triggerRef.current
      switch (stick || DEFAULT_STICK) {
      case 'left':
        setMenuPosition({ left: 0, top: offsetHeight })
        break
      case 'right':
        setMenuPosition({ right: 0, top: offsetHeight })
      }
    }
  }, [triggerRef.current, menuRef.current, stick])

  const elements = React.Children.map(children, (child: any) => {
    const type = child && child.type && child.type.displayName
    if (type === 'DropDownTrigger') {
      // const triggerChildren = React.Children.toArray(child.props.children)[0]
      return React.cloneElement(child.props.children, {
        onMouseEnter: () => setIsVisible(true),
        ref: triggerRef,
      })
    }
    if (type === 'DropDownMenu') {
      return React.cloneElement(child, {
        isVisible,
        ref: menuRef,
        ...menuPosition,
      })
    }
    return child
  })
  return (
    <StyledDropDown
      {...boxProps}
      onMouseEnter={(): void => setIsVisible(true)}
      onMouseLeave={(): void => setIsVisible(false)}
    >
      {elements}
    </StyledDropDown>
  )
}

export { DropDown }
export default DropDown
