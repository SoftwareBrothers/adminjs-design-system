import React from 'react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Label, Text } from '../index.js'
import { Input } from './index.js'

const inputTypes = [
  'email',
  'file',
  'hidden',
  'month',
  'number',
  'tel',
  'text',
  'time',
  'url',
  'week',
]
const inputVariants = ['sm', 'lg', 'xl', 'default']

export const Default: StoryObj = {}

export const Examples: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Regular input">
      <Input width="300px" id="input1" placeholder="Simple input field..." />
    </StoryWrapper>
    <StoryWrapper label="Disabled">
      <Input width="300px" id="input2" value="I am disabled..." disabled />
    </StoryWrapper>

    <StoryWrapper label="Without a border">
      <Text as="span">Write your name: </Text>
      <Input width="300px" id="input3" value="Write something" borderless />
    </StoryWrapper>

    <StoryWrapper label="different sizes">
      <Box mb="xl" width={1}>
        <Label>Small:</Label>
        <Input width="300px" id="input4" placeholder="sm" variant="sm" />
      </Box>
      <Box mb="xl" width={1}>
        <Label>Large:</Label>
        <Input width="300px" id="input4" placeholder="lg" variant="lg" />
      </Box>
      <Box mb="xl" width={1}>
        <Label>Extra Large:</Label>
        <Input width="300px" id="input4" placeholder="lg" variant="xl" />
      </Box>
      <Box width={1}>
        <Label>Extra Large without a border:</Label>
        <Input width="300px" id="input5" placeholder="Title" variant="xl" borderless />
      </Box>
    </StoryWrapper>
  </Box>
)

const meta: Meta<typeof Input> = {
  title: 'DesignSystem/Atoms/Input',
  component: Input,
  args: {
    type: 'text',
    disabled: false,
    borderless: false,
    variant: 'default',
  },
  argTypes: {
    borderless: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    variant: { options: inputVariants, control: { type: 'select' } },
    width: { control: { type: 'number', min: 0, max: 1, step: 0.1 } },
    type: { options: inputTypes, control: { type: 'select' } },
  },
}

export default meta
