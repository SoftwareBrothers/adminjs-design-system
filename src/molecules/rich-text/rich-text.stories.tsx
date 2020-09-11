import React, { useState } from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import RichText from './rich-text'
import StoryWrapper from '../../utils/story-wrapper'
import Box from '../../atoms/box'

export default { title: 'DesignSystem/Molecules/RichText', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const [value, setValue] = useState('Hello')
  const borderless = boolean('borderless', false)
  return (
    <Box width={1}>
      <StoryWrapper label="Rich text editor - SNOW">
        <RichText
          borderless={borderless}
          quill={{
            theme: 'snow',
          }}
          onChange={(content) => setValue(content)}
          value={value}
        />
      </StoryWrapper>
      <StoryWrapper label="Rich text editor - BUBBLE">
        <RichText
          borderless={borderless}
          quill={{
            theme: 'bubble',
          }}
          onChange={(content) => setValue(content)}
          value={value}
        />
      </StoryWrapper>
    </Box>
  )
}
