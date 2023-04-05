/* eslint-disable react/default-props-match-prop-types */
import React from 'react'

import { Box } from '../box/index.js'
import StoryWrapper from '../../utils/story-wrapper.js'
import { Avatar } from './index.js'
import type { AvatarProps } from './index.js'

const bubbleSrc = 'https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
const bubbleAlt = 'Bubble Avatar'

export const Default: React.FC<AvatarProps> = (props) => (
  <Avatar {...props} />
)

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Bubble Avatar">
      <Avatar src={bubbleSrc} alt={bubbleAlt} />
    </StoryWrapper>
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/Avatar',
  component: Avatar,
  parameters: {
    controls: {
      include: ['src', 'alt'],
    },
  },
  args: {
    src: bubbleSrc,
    alt: bubbleAlt,
  },
  argTypes: {
    src: {
      defaultValue: bubbleSrc,
      control: { type: 'text' },
    },
    alt: {
      defaultValue: 'Bubble',
      control: { type: 'text' },
    },
  },
}
