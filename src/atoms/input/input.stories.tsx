import React from 'react'
import { FormGroup, Text, Input, Label, Button, Box } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

const inputTypes = ['email', 'file', 'hidden', 'month', 'number', 'tel', 'text', 'time', 'url', 'week']

export const Default: React.FC = (props) => (
  <Box width={1}>
    <StoryWrapper label="Knobs example">
      <FormGroup>
        <Input {...props} />
        <Button type="submit">Submit</Button>
      </FormGroup>
    </StoryWrapper>
  </Box>
)

export const Examples: React.FC = () => (
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

export default {
  title: 'DesignSystem/Atoms/Input',
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
    type: {
      defaultValue: 'text',
      options: inputTypes,
      control: { type: 'select' },
    },
  },
}
