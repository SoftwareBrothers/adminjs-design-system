import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Box } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.js'
import { NavigationElement, NavigationElementProps } from './index.js'

export const Default: StoryObj<NavigationElementProps> = {
  render: (props) => {
    const [isOpen, setOpen] = useState(false)

    const handleClick = (event) => {
      event.stopPropagation()
      event.preventDefault()
      setOpen(!isOpen)
    }

    return (
      <StoryWrapper label="Navigation Element">
        <Box px="xl" py="xxl" width="300px" border="bg">
          <NavigationElement {...props} href="#" isOpen={isOpen} onClick={handleClick} />
        </Box>
      </StoryWrapper>
    )
  },
}

export default {
  title: 'DesignSystem/Molecules/NavigationElement',
  args: {
    label: 'Dashboard',
    icon: 'Activity',
    isSelected: false,
  },
  argTypes: {
    isSelected: { control: { type: 'boolean' } },
    icon: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
  },
} as Meta<typeof NavigationElement>
