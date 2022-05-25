import React, { FC } from 'react'
import { Box, Button, PhoneInput, FormGroup } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export const Default: FC = (props) => (
  <Box width={1}>
    <StoryWrapper label="Phone input example (https://github.com/bl00mber/react-phone-input-2)">
      <FormGroup>
        <PhoneInput {...props} />
        <Button type="submit">Submit</Button>
      </FormGroup>
    </StoryWrapper>
  </Box>
)

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Phone input">
      <PhoneInput
        id="input1"
        placeholder="Simple phone field..."
      />
    </StoryWrapper>
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/PhoneInput',
  argTypes: {
    borderless: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: 'default',
      options: ['sm', 'lg', 'xl', 'default'],
      control: { type: 'select' },
    },
    width: {
      defaultValue: 0.5,
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
}
