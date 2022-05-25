/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Label, Box } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

const variants = ['primary', 'danger', 'success', 'info', 'secondary'] as const

export const Default: React.FC = (props) => (
  <Box width={1}>
    <StoryWrapper label="Label">
      <Label {...props}>
        Example label
      </Label>
    </StoryWrapper>
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/Label',
  argTypes: {
    required: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    uppercase: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: 'default',
      options: variants,
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'default',
      options: ['default', 'lg'],
      control: { type: 'select' },
    },
  },
}
