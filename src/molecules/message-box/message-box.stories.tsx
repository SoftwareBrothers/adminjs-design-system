import React from 'react'
import { action } from '@storybook/addon-actions'

import { Box } from '../../atoms/box/index.js'
import { MessageBox } from './message-box.js'

export const Default: React.FC<any> = ({ withInsideText, ...props }) => (
  <Box py="lg">
    <MessageBox onCloseClick={() => action('onCloseClick')} {...props}>
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
    color: {
      defaultValue: 'info',
      options: ['danger', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'sm',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    message: {
      defaultValue: 'Some message',
      control: { type: 'text' },
    },
  },
}
