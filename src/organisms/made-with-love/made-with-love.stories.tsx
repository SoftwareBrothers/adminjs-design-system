import React from 'react'

import MadeWithLove from './made-with-love.js'
import StoryWrapper from '../../utils/story-wrapper.js'

export default {
  title: 'DesignSystem/Organisms/MadeWithLove',
}

export const Default: React.FC = () => (
  <StoryWrapper label="MadeWithLove footer info">
    <MadeWithLove />
  </StoryWrapper>
)
