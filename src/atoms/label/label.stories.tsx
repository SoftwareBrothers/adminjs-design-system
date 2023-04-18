/* eslint-disable react/jsx-closing-tag-location */
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.js'
import { Box } from '../index.js'
import { Label } from './index.js'

const variants = ['primary', 'danger', 'success', 'info', 'secondary'] as const

export const Default: StoryObj = {
  render: (args) => (
    <Box width={1}>
      <StoryWrapper label="Label">
        <Label {...args}>Example label</Label>
      </StoryWrapper>
    </Box>
  ),
}

export default {
  title: 'DesignSystem/Atoms/Label',
  component: Label,
  args: {
    required: false,
    uppercase: false,
    disabled: false,
    inline: false,
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    required: { control: { type: 'boolean' } },
    uppercase: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    inline: { control: { type: 'boolean' } },
    variant: { options: variants, control: { type: 'select' } },
    size: { options: ['default', 'lg'], control: { type: 'select' } },
  },
} as Meta<typeof Label>
