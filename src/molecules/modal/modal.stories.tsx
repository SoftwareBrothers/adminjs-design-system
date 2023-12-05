import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Box, Button, Label, VariantType } from '../../index.js'
import { Modal, ModalInline, ModalProps } from './index.js'

const variants: VariantType[] = [
  'danger',
  'primary',
  'success',
  'info',
  'secondary',
  'default',
  'light',
]

export const Default: StoryObj<ModalProps> = {
  render: (props) => {
    const { label, icon, title, variant, subTitle } = props
    const [isVisible, setIsVisible] = useState(false)
    const modalProps = {
      label,
      icon,
      title,
      variant,
      subTitle,
      onOverlayClick: () => setIsVisible(false),
      onClose: () => setIsVisible(false),
      buttons: [{ label: 'Cancel' }, { label: 'Delete', variant }],
    }

    return (
      <Box variant="grey">
        <Label>Inline modal: ModalInline</Label>
        <Box py="xxl" width={1}>
          <ModalInline {...modalProps} />
        </Box>
        <Box>
          <Label>Modal Trigger</Label>
          <Button onClick={() => setIsVisible(!isVisible)}>Toggle Modal</Button>
          {isVisible && <Modal {...modalProps} />}
        </Box>
      </Box>
    )
  },
}

const meta: Meta<typeof Modal> = {
  title: 'DesignSystem/Molecules/Modal',
  component: Modal,
  args: {
    variant: variants[0],
    title: 'Are you sure you want to delete this car?',
    subTitle: 'This item will be deleted immediately. You can’t undo this action.',
    icon: 'AlertTriangle',
    label: 'Warning',
  },
  argTypes: {
    variant: { options: variants, control: { type: 'select' } },
    title: { control: { type: 'text' } },
    subTitle: { control: { type: 'text' } },
    icon: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
  },
}

export default meta
