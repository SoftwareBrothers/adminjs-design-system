import { createPortal } from 'react-dom'
import React, { useEffect, useState } from 'react'

import { PortalProps } from './tooltip-props'
import { Tooltip } from './tooltip'
import generateId from '../../utils/generate-id'

const TooltipPortal: React.FC<PortalProps> = (props) => {
  const [id] = useState(generateId('TOOLTIP'))
  const [tooltipElement] = useState<HTMLDivElement>(window.document.createElement('div'))

  useEffect(() => {
    tooltipElement.id = id
    window.document.body.appendChild(tooltipElement)

    return () => {
      const tooltip = window.document.getElementById(id)
      tooltip?.remove()
    }
  })

  return createPortal((
    <Tooltip {...props} />
  ), tooltipElement)
}

export default TooltipPortal
export { TooltipPortal }
