import { RenderLayerProps, Transition } from 'react-laag'
import React, { FC, MouseEvent } from 'react'
import Wrapper from './menu-css'

export interface Props {
  fullWidthOnMobile?: boolean
  preventFromClosing?: boolean;
  preventClickEventPropagation?: boolean;
}

const Menu: FC<RenderLayerProps & Props> = ({
  layerProps, isOpen: open, children, close,
  preventFromClosing, preventClickEventPropagation,
}) => {
  const childrenArray = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: (event: MouseEvent<HTMLButtonElement>) => {
          if (preventClickEventPropagation) {
            event.preventDefault()
            event.stopPropagation()
          }

          if (child.props.onClick) {
            child.props.onClick()
          }

          if (!preventFromClosing) {
            close()
          }
        },
      })
    }

    return undefined
  })

  return (
    <Transition isOpen={open}>
      {(isOpen, onTransitionEnd) => (
        <Wrapper
          ref={layerProps.ref}
          onTransitionEnd={onTransitionEnd}
          isOpen={isOpen}
          style={layerProps.style}
        >
          {childrenArray}
        </Wrapper>
      )}
    </Transition>
  )
}

export default Menu
