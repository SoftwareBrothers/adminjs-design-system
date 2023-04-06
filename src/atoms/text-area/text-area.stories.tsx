import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.js'
import { Box } from '../index.js'
import { TextArea } from './index.js'

export const Default: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Regular example">
      <TextArea id="input1" placeholder="Simple textarea field..." width={1} />
    </StoryWrapper>
    <StoryWrapper label="Without border and huge">
      <TextArea id="input2" placeholder="Huge borderless" width={1} borderless variant="xl" />
    </StoryWrapper>
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>
