import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Box } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { CurrentUserNav, CurrentUserNavAction, CurrentUserNavProps } from './index.js'

export const Default: StoryObj<CurrentUserNavProps & { onClick: (e) => void }> = {
  render: ({ onClick, ...props }) => {
    const handleClick = (event) => {
      event.preventDefault()
      onClick(event)
    }

    const dropActions: CurrentUserNavAction[] = [
      { label: 'My Profile', onClick: handleClick, icon: 'User' },
      { label: 'Log out', onClick: handleClick, icon: 'LogOut' },
    ]

    const lineActions: CurrentUserNavAction[] = [
      { label: 'Notification', onClick: handleClick, icon: 'Bell' },
      { label: 'Settings', onClick: handleClick, icon: 'Settings' },
    ]

    return (
      <StoryWrapper label="Current user navigation">
        <Box height="250px">
          <Box border="default" flex flexDirection="row-reverse" height="navbarHeight">
            <CurrentUserNav {...props} dropActions={dropActions} lineActions={lineActions} />
          </Box>
        </Box>
      </StoryWrapper>
    )
  },
}

const meta: Meta<typeof CurrentUserNav> = {
  title: 'DesignSystem/Organisms/CurrentUserNav',
  component: CurrentUserNav,
  args: {
    name: 'John Doe',
    title: 'Admin',
    avatarUrl:
      'https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  argTypes: {
    name: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    avatarUrl: { control: { type: 'text' } },
  },
}

export default meta
