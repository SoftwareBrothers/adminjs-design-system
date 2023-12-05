import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Box } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
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

const meta: Meta<typeof NavigationElement> = {
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
}

export default meta
