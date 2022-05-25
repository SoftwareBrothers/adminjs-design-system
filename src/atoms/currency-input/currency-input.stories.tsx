import React, { FC } from 'react'
import { Box, Button, CurrencyInput, FormGroup } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export const Default: FC = (props) => (
  <Box width={1}>
    <StoryWrapper label="Currency input example">
      <FormGroup>
        <CurrencyInput {...props} />
        <Button type="submit">Submit</Button>
      </FormGroup>
    </StoryWrapper>
  </Box>
)

export const Examples: React.FC = () => (
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

export default {
  title: 'DesignSystem/Atoms/CurrencyInput',
  argTypes: {
    variant: {
      defaultValue: 'default',
      options: ['sm', 'lg', 'xl', 'default'],
      control: { type: 'select' },
    },
    borderless: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    width: {
      defaultValue: 1 / 2,
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    prefix: {
      defaultValue: '$',
      control: { type: 'text' },
    },
    suffix: {
      defaultValue: '',
      control: { type: 'text' },
    },
    decimalSeparator: {
      defaultValue: '.',
      control: { type: 'text' },
    },
    groupSeparator: {
      defaultValue: ' ',
      control: { type: 'text' },
    },
    allowDecimals: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    decimalsLimit: {
      defaultValue: 2,
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 1,
      },
    },
  },
}
