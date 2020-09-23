/* eslint-disable default-case */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxProps } from '../..'

const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`

const DEFAULT_STICK = 'left'

/**
 * Props passed to DropDown element
 *
 * @memberof DropDown
 * @extends BoxProps
 */
export type DropDownProps = {
  /** Indicates if menu should stick to left or right */
  stick?: 'left' | 'right',
} & BoxProps

type PositionProps = {
  left?: number,
  right?: number,
  top: number,
}

/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-dropdown--default Storybook}
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
