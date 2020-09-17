import React from 'react'
import { withKnobs, text } from '../../storybook/node_modules/@storybook/addon-knobs'

import { CurrentUserNav, Box } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default {
  title: 'DesignSystem/Organisms/CurrentUserNav',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const Default: React.FC = ({ onClick }) => {
  const name = text('name', 'Wojtek Krysiak')
  const title = text('title', 'Master admin')

  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const dropActions = [{
    label: 'My Profile',
    onClick: handleClick,
    icon: 'User',
  }, {
    label: 'log out',
    onClick: handleClick,
    icon: 'Logout',
  }]
  const lineActions = [{
    label: 'Notification',
    onClick: handleClick,
    icon: 'NotificationNew',
  }, {
    label: 'Settings',
    onClick: handleClick,
    icon: 'Settings',
  }]

  return (
    <StoryWrapper label="SoftwareBrothers footer info">
      <Box border="default" flex flexDirection="row-reverse">
        <CurrentUserNav
          name={name}
          title={title}
          avatarUrl="https://api.adorable.io/avatars/285/abott@adorable.png"
          dropActions={dropActions}
          lineActions={lineActions}
        />
      </Box>
    </StoryWrapper>
  )
}
