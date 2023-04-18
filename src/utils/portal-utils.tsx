/* eslint-disable arrow-body-style */
import React, { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import generateId from './generate-id.js'

// TODO: handle iframe case with ref.current.ownerDocument
export const PortalUtils = {
  appendElement: (element: HTMLDivElement): void => {
    window.document.body.appendChild(element)
  },

  removeElement: (id: string): void => {
    const domElement = window.document.getElementById(id)
    domElement?.remove()
  },

  createPortalForKey: function createPortalForKey<Props>(
    idKey: string,
    Component: FC<Props>,
  ): FC<Props & JSX.IntrinsicAttributes> {
    const Portal: FC<Props & JSX.IntrinsicAttributes> = (props) => {
      const [id] = useState(generateId(idKey))
      const [portalElement] = useState<HTMLDivElement>(window.document.createElement('div'))

      useEffect(() => {
        portalElement.id = id
        PortalUtils.appendElement(portalElement)

        return () => {
          PortalUtils.removeElement(id)
        }
      })

      return ReactDOM.createPortal(
        (
          <Component {...props} />
        ), portalElement,
      )
    }
    return Portal
  },
}

export default PortalUtils
