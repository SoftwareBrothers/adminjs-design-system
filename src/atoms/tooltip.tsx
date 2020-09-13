/* eslint-disable max-len */
import React, { PropsWithChildren, useEffect, useState, useRef, forwardRef, ReactElement, ReactNode } from 'react'
import TooltipPortal from './tooltip/tooltip-portal'
import Props from './tooltip/tooltip-props'

const TriggerDisplayName = 'TooltipTrigger'

/**
 * Renders tooltip
 *
 * Usage:
 * ```javascript
 * import { Tooltip, TooltipProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @private
 * @subcategory Atoms
 * @example <caption>Tooltip</caption>
 * return (
 *   <Box>
 *     <Tooltip direction="top" title="example info">
 *      indicator
 *     </Tooltip
 *   </Box>
 * )
 *
 * @memberof module:@admin-bro/design-system
 */
const Tooltip: React.FC<PropsWithChildren<Props>> = (props) => {
  const { direction, title, children } = props
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

  const ChildWithRef = forwardRef((triggerProps, ref) => React.cloneElement(TriggerElement, {
    ...triggerProps,
    displayName: TriggerDisplayName,
    ref,
  }))

  return (
    <>
      <ChildWithRef
        ref={childRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible && (
        <TooltipPortal
          title={title}
          childRef={childRef}
          direction={direction}
          ContentElement={ContentElement}
        />
      )}
    </>
  )
}

export {
  Tooltip,
  Tooltip as default,
}

export { default as TooltipContent } from './tooltip/tooltip-content'
