/* eslint-disable max-len */
import React, { PropsWithChildren, useState, useRef, forwardRef, ReactElement, ReactNode } from 'react'

import PortalUtils from '../../utils/portal-utils.jsx'
import { TooltipControl } from './tooltip-control.jsx'
import Props from './tooltip-props.js'

const TooltipPortal = PortalUtils.createPortalForKey('TOOLTIP', TooltipControl)

/**
 * @load ./tooltip.doc.md
 * @component
 * @subcategory Atoms
 * @hideconstructor
 * @new In version 3.3
 * @section design-system
 */
export const Tooltip: React.FC<PropsWithChildren<Props>> = (props) => {
  const { direction, title, children, size } = props
  const childRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  let TriggerElement: ReactElement
  let ContentElement: ReactNode
  const childrenCount = React.Children.count(children)

  if (childrenCount === 1) {
    TriggerElement = children as ReactElement
  } else if (childrenCount === 2) {
    React.Children.forEach(children, (child) => {
      const type = (child as any).type?.displayName
      if (type === 'TooltipContent') {
        ContentElement = child as ReactNode
      } else {
        TriggerElement = child as ReactElement
      }
    })
  }

  const onEnter = () => {
    setIsVisible(true)
  }

  const onLeave = () => {
    setIsVisible(false)
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  const ChildWithRef = forwardRef((triggerProps, ref) => React.cloneElement(TriggerElement, {
    ...triggerProps,
    displayName: 'TooltipTrigger',
    ref,
  })) as any

  return (
    <>
      <ChildWithRef
        ref={childRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      />
      {isVisible && (
        <TooltipPortal
          title={title}
          childRef={childRef}
          size={size}
          direction={direction}
          ContentElement={ContentElement}
        />
      )}
    </>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
