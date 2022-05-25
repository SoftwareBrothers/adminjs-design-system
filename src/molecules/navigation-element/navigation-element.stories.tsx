import React, { useState } from 'react'
import { NavigationElement, Box } from '../..'

import StoryWrapper from '../../utils/story-wrapper'

export const Default: React.FC<any> = (props) => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <StoryWrapper label="Navigation Element">
      <Box px="xl" py="xxl" width="300px" border="bg">
        <NavigationElement
          {...props}
          href="#"
          isOpen={isOpen}
          onClick={handleClick}
        />
      </Box>
    </StoryWrapper>
  )
}

export default {
  title: 'DesignSystem/Molecules/Navigation',
  argTypes: {
    isSelected: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    icon: {
      defaultValue: 'Dashboard',
      control: { type: 'text' },
    },
    label: {
      defaultValue: 'Dashboard',
      control: { type: 'text' },
    },
  },
}
