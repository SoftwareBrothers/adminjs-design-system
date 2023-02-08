import React from 'react'
import { Box } from '../../atoms/box'
import { MessageBox } from './message-box'

const Options = {
  danger: 'danger',
  info: 'info',
  success: 'success',
  warning: 'warning',
}

const Size = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export const Default: React.FC<any> = ({ withInsideText, ...props }) => (
  <Box py="lg">
    <MessageBox onCloseClick={() => {}} {...props}>
      {withInsideText && 'With inside text'}
    </MessageBox>
  </Box>
)

export default {
  title: 'DesignSystem/Molecules/MessageBox',
  argTypes: {
    withInsideText: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: Options.success,
      options: Options,
      control: { type: 'select' },
    },
    size: {
      defaultValue: Size.sm,
      options: Size,
      control: { type: 'select' },
    },
    message: {
      defaultValue: 'Some message',
      control: { type: 'text' },
    },
  },
}
