import React from 'react'

import { Box, CurrentUserNav, CurrentUserNavAction } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export const Default: React.FC<any> = ({ onClick, name, title, avatar }) => {
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
      <Box border="default" flex flexDirection="row-reverse" height="navbarHeight">
        <CurrentUserNav
          name={name}
          title={title}
          avatarUrl={avatar}
          dropActions={dropActions}
          lineActions={lineActions}
        />
      </Box>
    </StoryWrapper>
  )
}

export default {
  title: 'DesignSystem/Organisms/CurrentUserNav',
  argTypes: {
    onClick: { action: 'clicked' },
    name: {
      defaultValue: 'Wojtek Krysiak',
      control: { type: 'text' },
    },
    title: {
      defaultValue: 'Admin',
      control: { type: 'text' },
    },
    avatar: {
      defaultValue: 'https://placekitten.com/40/40',
      control: { type: 'text' },
    },
  },
}
