import React from 'react'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { Button } from '../../atoms/button/index.js'
import { Icon } from '../../atoms/icon/index.js'
import { Label } from '../../atoms/label/index.js'
import { Text } from '../../atoms/text/index.js'
import { H5 } from '../../atoms/typography/index.js'
import { ModalProps } from './modal-props.js'
import { ModalStyled } from './modal-styled.jsx'

/**
 * Modal which can be rendered inline instead of a "modal"
 *
 * @memberof Modal
 * @component
 * @hideconstructor
 * @private
 * @section design-system
 */
export const ModalInline: React.FC<ModalProps & Omit<BoxProps, 'variant'>> = (props) => {
  const { title, subTitle, variant, onClose, children, buttons, label, icon, ...boxProps } = props
  return (
    <ModalStyled variant={variant as BoxProps['variant']} {...boxProps}>
      {label && (
        <Label size="lg" variant={variant} className="modal-label">
          {icon && <Icon icon={icon} />}
          {label}
        </Label>
      )}
      {title && <H5>{title}</H5>}
      {onClose && (
        <Button className="close-button" size="icon" variant="text" onClick={onClose} rounded>
          <Icon icon="X" />
        </Button>
      )}
      {subTitle && <Text>{subTitle}</Text>}
      {children}
      {buttons && buttons.length && (
        <Box flex flexDirection="row" justifyContent="flex-end" mt="xl">
          {buttons.map((buttonProps, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={key} mr="md" mt="sm" {...buttonProps} />
          ))}
        </Box>
      )}
    </ModalStyled>
  )
}

ModalInline.displayName = 'ModalInline'

export default ModalInline
