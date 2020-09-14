import React from 'react'
import Box from './box'
import { TextArea } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default { title: 'DesignSystem/Atoms/TextArea' }

export const Default: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Regular example">
      <TextArea id="input1" placeholder="Simple textarea field..." width={1} />
    </StoryWrapper>
    <StoryWrapper label="Without border and huge">
      <TextArea id="input2" placeholder="Huge borderless" width={1} borderless variant="xl" />
    </StoryWrapper>
  </Box>

)
