import React from 'react'
import styled, { css } from 'styled-components'
import { cssClass } from '../utils/css-class'
import { Box, Icon, Label, Button } from '..'

const ModalBox = styled.div<WarningProps>`
  margin: 30px auto;
  max-width: 540px;
  max-height: 90vh;
  padding: 16px;
  padding-left: 32px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ warning }) => warning && css`
    border-left: 8px solid ${({ theme }) => theme.colors.error};
  `}
`

const CloseSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const CloseButton = styled(Button)`
  border: none;
`

const ModalSection = styled.div`
  padding: 15px 15px 15px 0;
`

/**
 * Modal box, shows informations, has warning label
 *
 * Usage:
 * ```javascript
 * import { Section } from '@admin-bro/design-system'
 * ```
 * @component Modal
 * @subcategory Atoms
 * @example
 * return (
 *   <Modal open={open} warning={warning}>
 *    <Text fontSize={16} fontWeight="600">Are you sure you want to delete this car?</Text>
 *    <Text fontSize={14}>This item will be deleted immediately. You can’t undo this action.</Text>
 *    <Buttons>
 *      <Button size="sm" variant="secondary" marginRight={15}>Cancel</Button>
 *      <Button size="sm" variant="primary">Delete</Button>
 *    </Buttons>
 *  </Modal>
 * )
 * @memberof module:@admin-bro/design-system
 */
const Modal: React.FC<ModalProps> = ({
  open, onCloseClick, warning, className, children, ...other
}) => {
  if (!open) {
    return null
  }
  return (
    <Box variant="grey" height="100vh">
      <ModalBox warning={warning} className={className} {...other}>
        <CloseSection>
          <span>
            {warning && (
              <>
                <Icon icon="Warning" color="error" />
                <Label inline pl="sm" color="error">Warning</Label>
              </>
            )}
          </span>
          <CloseButton rounded size="icon" onClick={onCloseClick}>
            <Icon icon="CloseOutline" color="primary" />
          </CloseButton>
        </CloseSection>
        <ModalSection>
          {children}
        </ModalSection>
      </ModalBox>
    </Box>
  )
}

interface WarningProps {
  /** Warning props that shows warning label and right border */
  warning?: boolean,
}

type ModalProps = WarningProps & {
  /** Indicates that modal is shown */
  open: boolean,
  /** Function called when user click on close icon */
  onCloseClick?: () => void,
  /** ClassName forwarding */
  className?: string,
}

Modal.defaultProps = {
  className: cssClass('Section'),
}

export { Modal }

export default Modal
