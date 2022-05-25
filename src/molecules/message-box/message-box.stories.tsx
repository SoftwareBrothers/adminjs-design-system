import React from 'react'
import { Box } from '../../atoms/box'
import { MessageBox } from './message-box'

const Options = {
  danger: 'danger',
  info: 'info',
  success: 'success',
}

const Size = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export const Default: React.FC<any> = (props) => (
  <Box py="lg">
    <MessageBox {...props}>
      With inside text
    </MessageBox>
  </Box>
)

export default {
  title: 'DesignSystem/Molecules/MessageBox',
  argTypes: {
    variant: {
      defaultValue: Options.info,
      options: Options,
      control: { type: 'select' },
    },
    size: {
      defaultValue: Size.sm,
      options: Size,
      control: { type: 'select' },
    },
    icon: {
      defaultValue: 'AddComment',
      control: { type: 'text' },
    },
    message: {
      defaultValue: 'Some message',
      control: { type: 'text' },
    },
  },
}
