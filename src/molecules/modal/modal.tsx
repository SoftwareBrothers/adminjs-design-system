/* eslint-disable max-len */
import React from 'react'

import PortalUtils from '../../utils/portal-utils.js'
import ModalWrapper from './modal-wrapper.js'
import { ModalProps } from './modal-props.js'

const ModalPortal = PortalUtils.createPortalForKey('MODAL', ModalWrapper)

/**
 * @load ./modal.doc.md
 * @component
 * @subcategory Molecules
 * @section design-system
 * @hideconstructor
 * @new In version 3.3
 */
export const Modal: React.FC<ModalProps> = (props) => (
  <ModalPortal {...props} />
)

export default Modal
