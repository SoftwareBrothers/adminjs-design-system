import React, { useState } from 'react'

import { ModalInline, Box, Label, Button, Modal } from '../..'

const variants = [
  'primary', 'danger', 'success', 'info', 'secondary', 'default', 'light',
]

export const Default: React.FC<any> = (props) => {
  const {
    label,
    icon,
    title,
    variant,
    subTitle,
  } = props
  const [isVisible, setIsVisible] = useState(false)
  const modalProps = {
    label,
    icon,
    title,
    variant,
    subTitle,
    onOverlayClick: () => setIsVisible(false),
    onClose: () => setIsVisible(false),
    buttons: [
      { label: 'Cancel' },
      { label: 'Delete', variant },
    ],
  }

  return (
    <Box variant="grey">
      <Label>Inline modal: ModalInline</Label>
      <Box py="xxl" width={1}>
        <ModalInline {...modalProps} />
      </Box>
      <Box>
        <Label>Modal Trigger</Label>
        <Button
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle Modal
        </Button>
        {isVisible && <Modal {...modalProps} />}
      </Box>
    </Box>
  )
}

export default {
  title: 'DesignSystem/Molecules/Modal',
  argTypes: {
    variant: {
      defaultValue: variants[0],
      options: variants,
      control: { type: 'select' },
    },
    title: {
      defaultValue: 'Are you sure you want to delete this car?',
      control: { type: 'text' },
    },
    subTitle: {
      defaultValue: 'This item will be deleted immediately. You can’t undo this action.',
      control: { type: 'text' },
    },
    icon: {
      defaultValue: 'Warning',
      control: { type: 'text' },
    },
    label: {
      defaultValue: 'Warning',
      control: { type: 'text' },
    },
  },
}
