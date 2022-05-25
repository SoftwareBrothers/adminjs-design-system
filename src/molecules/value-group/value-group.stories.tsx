import React from 'react'

import { ValueGroup, Box, CardTitle, Text } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export const Default: React.FC<any> = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const objects = [{
    label: 'First Name',
    onClick: handleClick,
    value: 'Wojtek',
  }, {
    label: 'Last Name',
    onClick: handleClick,
    value: 'Krysiak',
  }]

  return (
    <StoryWrapper label="ValueGroup default settings">
      <Box>
        {objects.map((field) => (
          <ValueGroup key={field.label} {...field} />
        ))}
        <ValueGroup label="value with styled children">
          <CardTitle>With children which are wrapped with CardTitle</CardTitle>
        </ValueGroup>
        <ValueGroup label="With Multiline Content">
          <Box variant="white" border="default">
            <Text>
              <h4>I am header</h4>
              <p>And I am content</p>
            </Text>
          </Box>
        </ValueGroup>
      </Box>
    </StoryWrapper>
  )
}

export default {
  title: 'DesignSystem/Molecules/ValueGroup',
  argTypes: {
    onClick: { action: 'clicked' },
  },
}
