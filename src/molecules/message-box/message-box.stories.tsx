import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box } from '../../index.js'
import { MessageBox, MessageBoxProps } from './message-box.js'

export const Default: StoryObj<MessageBoxProps & { withInsideText: boolean }> = {
  render: ({ withInsideText, ...props }) => (
    <Box py="lg">
      <MessageBox
        onCloseClick={() => { /** noop */ }}
        {...props}
      >
        {withInsideText && 'With inside text'}
      </MessageBox>
    </Box>
  ),
}

export default {
  title: 'DesignSystem/Molecules/MessageBox',
  component: MessageBox,
  args: {
    withInsideText: false,
    color: 'info',
    size: 'sm',
    message: 'Some message',
  },
  argTypes: {
    withInsideText: { control: { type: 'boolean' } },
    color: { options: ['danger', 'info', 'success', 'warning'], control: { type: 'select' } },
    size: { options: ['sm', 'md', 'lg'], control: { type: 'select' } },
    message: { control: { type: 'text' } },
  },
} as Meta<typeof MessageBox>
