import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box } from '../../index.js'
import { MessageBox, MessageBoxProps } from './message-box.jsx'

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

const meta: Meta<typeof MessageBox> = {
  title: 'DesignSystem/Molecules/MessageBox',
  component: MessageBox,
  args: {
    variant: 'info',
    size: 'sm',
    message: 'Some message',
  },
  argTypes: {
    variant: { options: ['danger', 'info', 'success', 'warning'], control: { type: 'select' } },
    size: { options: ['sm', 'md', 'lg'], control: { type: 'select' } },
    message: { control: { type: 'text' } },
  },
}

export default meta
