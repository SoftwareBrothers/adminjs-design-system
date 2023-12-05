import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Box, Label } from '../../index.js'
import { Navigation } from './index.js'
import { NavigationProps } from './navigation-props.js'

export const Default: StoryObj<NavigationProps & { onClick: (e) => void }> = {
  render: ({ onClick, label }) => {
    const [postgresOpen, setPostgresOpen] = useState(false)
    const [mongooseOpen, setMongooseOpen] = useState(false)

    const handleClick = (event) => {
      event.preventDefault()
      onClick(event)
    }

    const props: NavigationProps = {
      label: 'Navigation',
      elements: [
        {
          label: 'Dashboard',
          icon: 'Database',
          isSelected: true,
          href: '/',
          onClick: handleClick,
          id: 'dashboard',
        },
        {
          label: 'Postgres with long name and spaces',
          icon: 'Database',
          onClick: (event) => {
            event.preventDefault()
            setPostgresOpen(!postgresOpen)
          },
          isOpen: postgresOpen,
          elements: [
            {
              label: 'Users',
              href: '/resources/Users/list',
              onClick: handleClick,
              id: 'users',
            },
            {
              label: 'Posts',
              href: '/resources/Posts/list',
              onClick: handleClick,
              id: 'posts',
            },
            {
              label: 'Messages',
              href: '/resources/Messages/list',
              onClick: handleClick,
              id: 'messages',
            },
            {
              label: 'Calendar',
              href: '/resources/Calendar/list',
              onClick: handleClick,
              id: 'calendar',
            },
          ],
        },
        {
          label: 'MongooseWithLongNameAndWithoutSpaces',
          icon: 'Database',
          isOpen: mongooseOpen,
          onClick: (event) => {
            event.preventDefault()
            setMongooseOpen(!mongooseOpen)
          },
          elements: [
            {
              label: 'Car',
              href: '/resources/Cars/list',
              onClick: handleClick,
              id: 'car',
            },
            {
              label: 'Dealers',
              href: '/resources/Dealers/list',
              onClick: handleClick,
              id: 'dealers',
            },
            {
              label: 'Owners',
              href: '/resources/Owners/list',
              onClick: handleClick,
              id: 'owners',
            },
            {
              label: 'Orders',
              href: '/resources/Orders/list',
              onClick: handleClick,
              id: 'orders',
            },
          ],
        },
      ],
    }

    return (
      <Box variant="grey">
        <Label>Navigation example</Label>
        <Box width="sidebarWidth" border="bg" bg="white">
          <Navigation {...props} label={label} />
        </Box>
      </Box>
    )
  },
}

const meta: Meta<typeof Navigation> = {
  title: 'DesignSystem/Organisms/Navigation',
  component: Navigation,
  args: {
    label: 'Navigation',
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
}

export default meta
