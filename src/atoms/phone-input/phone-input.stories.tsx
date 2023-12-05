import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import { FormGroup } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Button } from '../index.js'
import { PhoneInput } from './index.js'

export const Default: StoryObj = {
  render: (args) => (
    <Box width={1}>
      <StoryWrapper label="Phone input example (https://github.com/bl00mber/react-phone-input-2)">
        <FormGroup>
          <PhoneInput {...args} />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </StoryWrapper>
    </Box>
  ),
}

export const Examples: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Phone input">
      <PhoneInput id="input1" placeholder="Simple phone field..." />
    </StoryWrapper>
  </Box>
)

const meta: Meta<typeof PhoneInput> = {
  title: 'DesignSystem/Atoms/PhoneInput',
  component: PhoneInput,
  args: {
    borderless: false,
    disabled: false,
    variant: 'default',
    width: 0.5,
  },
  argTypes: {
    borderless: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    variant: { options: ['sm', 'lg', 'xl', 'default'], control: { type: 'select' } },
    width: { control: { type: 'number', min: 0, max: 1, step: 0.1 } },
  },
}

export default meta
