import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box, CardTitle, Text } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { ValueGroup } from './index.js'

export const Default: StoryObj<{ onClick: (e) => void }> = {
  render: ({ onClick }) => {
    const handleClick = (event) => {
      event.preventDefault()
      onClick(event)
    }

    const objects = [
      { label: 'First Name', onClick: handleClick, value: 'Wojtek' },
      { label: 'Last Name', onClick: handleClick, value: 'Krysiak' },
    ]

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
  },
}

const meta: Meta<typeof ValueGroup> = {
  title: 'DesignSystem/Molecules/ValueGroup',
  component: ValueGroup,
}

export default meta
