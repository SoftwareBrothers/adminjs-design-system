import React from 'react'
import { styled } from '@styled-components'

import { ModalInline } from './modal-inline.jsx'
import { ModalProps } from './modal-props.js'
import { ModalStyled } from './modal-styled.jsx'
import { Box, BoxProps } from '../../atoms/box/index.js'
import { Overlay } from '../../atoms/overlay/index.js'

const Wrapper = styled(Box)<BoxProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > ${ModalStyled} {
    z-index: 1001;
  }
`

export const ModalWrapper: React.FC<ModalProps> = (props) => {
  const { onOverlayClick, ...otherProps } = props

  const handleOverlayClick = onOverlayClick || (() => true)

  return (
    <Wrapper flex justifyContent="center" alignItems="center">
      <Overlay onClick={handleOverlayClick} />
      <ModalInline {...otherProps} />
    </Wrapper>
  )
}

ModalWrapper.displayName = 'ModalWrapper'

export default ModalWrapper
