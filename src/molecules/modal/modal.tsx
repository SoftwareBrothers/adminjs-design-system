/* eslint-disable max-len */
import React from 'react'
import createPortalForKey from '../../utils/create-portal-for-key'
import ModalWrapper from './modal-wrapper'
import { ModalProps } from './modal-props'

const ModalPortal = createPortalForKey('MODAL', ModalWrapper)

/**
 * Renders modal
 *
 * Usage:
 * ```javascript
 * import { Modal, ModalProps, ModalInline } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @private
 * @subcategory Molecules
 *
 * @memberof module:@admin-bro/design-system
 */
const Modal: React.FC<ModalProps> = (props) => (
  <ModalPortal {...props} />
)

export {
  Modal,
  Modal as default,
}
