import React from 'react'

import { Box, CurrentUserNav, CurrentUserNavAction } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.js'

const avatarSrc = 'https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

export const Default: React.FC<any> = ({ onClick, ...props }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const dropActions: CurrentUserNavAction[] = [{
    label: 'My Profile',
    onClick: handleClick,
    icon: 'User',
  }, {
    label: 'Log out',
    onClick: handleClick,
    icon: 'LogOut',
  }]

  const lineActions: CurrentUserNavAction[] = [{
    label: 'Notification',
    onClick: handleClick,
    icon: 'Bell',
  }, {
    label: 'Settings',
    onClick: handleClick,
    icon: 'Settings',
  }]

  return (
    <StoryWrapper label="Current user navigation">
      <Box height="250px">
        <Box border="default" flex flexDirection="row-reverse" height="navbarHeight">
          <CurrentUserNav
            {...props}
            dropActions={dropActions}
            lineActions={lineActions}
          />
        </Box>
      </Box>
    </StoryWrapper>
  )
}

export default {
  title: 'DesignSystem/Organisms/CurrentUserNav',
  component: CurrentUserNav,
  args: {
    name: 'Wojtek Krysiak',
    title: 'Admin',
    avatarUrl: avatarSrc,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    name: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    avatarUrl: {
      control: { type: 'text' },
    },
  },
}
