/* eslint-disable arrow-body-style */
import ReactDOM from 'react-dom'
import React, { useEffect, useState, FC } from 'react'

import generateId from './generate-id'

function createPortalForKey<Props>(idKey: string, Component: FC<Props>): FC<Props> {
  const Portal: FC<Props> = (props) => {
    const [id] = useState(generateId(idKey))
    const [portalElement] = useState<HTMLDivElement>(window.document.createElement('div'))

    useEffect(() => {
      portalElement.id = id
      window.document.body.appendChild(portalElement)

      return () => {
        const domElement = window.document.getElementById(id)
        domElement?.remove()
      }
    })

    return ReactDOM.createPortal((
      <Component {...props} />
    ), portalElement)
  }
  return Portal
}

export default createPortalForKey
