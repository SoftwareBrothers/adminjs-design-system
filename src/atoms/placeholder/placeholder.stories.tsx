import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import { Box, Label } from '../index.js'
import { Placeholder } from './index.js'

export const Default: StoryObj = {}

export const textPlaceholder: StoryFn = () => (
  <Box>
    <Label>Some name</Label>
    <Placeholder width={400} height={14} />
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/Placeholder',
  component: Placeholder,
  args: {
    width: 200,
    height: 200,
  },
} as Meta<typeof Placeholder>
