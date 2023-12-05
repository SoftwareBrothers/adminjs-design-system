import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import { FormGroup } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Button } from '../index.js'
import { CurrencyInput } from './index.js'

export const Default: StoryObj = {
  render: (props) => (
    <Box width={1}>
      <StoryWrapper label="Currency input example">
        <FormGroup>
          <CurrencyInput {...props} />
          <Button type="submit" mt="lg">Submit</Button>
        </FormGroup>
      </StoryWrapper>
    </Box>
  ),
}

export const Examples: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Euro input">
      <CurrencyInput
        id="input1"
        placeholder="Simple input field..."
        intlConfig={{ locale: 'de-DE', currency: 'EUR' }}
      />
    </StoryWrapper>
  </Box>
)

const meta: Meta<typeof CurrencyInput> = {
  title: 'DesignSystem/Atoms/CurrencyInput',
  component: CurrencyInput,
  args: {
    variant: 'default',
    borderless: false,
    disabled: false,
    prefix: '$',
    suffix: '',
    decimalSeparator: '.',
    groupSeparator: ' ',
    allowDecimals: true,
    width: 1 / 2,
    decimalsLimit: 2,
  },
  argTypes: {
    variant: { options: ['sm', 'lg', 'xl', 'default'], control: { type: 'select' } },
    borderless: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    width: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    prefix: { control: { type: 'text' } },
    suffix: { control: { type: 'text' } },
    decimalSeparator: { control: { type: 'text' } },
    groupSeparator: { control: { type: 'text' } },
    allowDecimals: { control: { type: 'boolean' } },
    decimalsLimit: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 1,
      },
    },
  },
}

export default meta
