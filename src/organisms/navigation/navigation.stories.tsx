import React, { useState } from 'react'

import { Box, Label, Navigation } from '../../index.js'
import { NavigationProps } from './navigation-props.js'

export default {
  title: 'DesignSystem/Organisms/Navigation',
  argTypes: {
    onClick: { action: 'clicked' },
    label: {
      defaultValue: 'Navigation',
      control: { type: 'text' },
    },
  },
}

export const Default: React.FC<any> = ({ onClick, label }) => {
  const [postgresOpen, setPostgresOpen] = useState(false)
  const [mongooseOpen, setMongooseOpen] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const props: NavigationProps = {
    label: 'Navigation',
    elements: [{
      label: 'Dashboard',
      icon: 'Database',
      isSelected: true,
      href: '/',
      onClick: handleClick,
      id: 'dashboard',
    }, {
      label: 'Postgres with long name and spaces',
      icon: 'Database',
      onClick: (event) => {
        event.preventDefault()
        setPostgresOpen(!postgresOpen)
      },
      isOpen: postgresOpen,
      elements: [{
        label: 'Users',
        href: '/resources/Users/list',
        onClick: handleClick,
        id: 'users',
      }, {
        label: 'Posts',
        href: '/resources/Posts/list',
        onClick: handleClick,
        id: 'posts',
      }, {
        label: 'Messages',
        href: '/resources/Messages/list',
        onClick: handleClick,
        id: 'messages',
      }, {
        label: 'Calendar',
        href: '/resources/Calendar/list',
        onClick: handleClick,
        id: 'calendar',
      }],
    }, {
      label: 'MongooseWithLongNameAndWithoutSpaces',
      icon: 'Database',
      isOpen: mongooseOpen,
      onClick: (event) => {
        event.preventDefault()
        setMongooseOpen(!mongooseOpen)
      },
      elements: [{
        label: 'Car',
        href: '/resources/Cars/list',
        onClick: handleClick,
        id: 'car',
      }, {
        label: 'Dealers',
        href: '/resources/Dealers/list',
        onClick: handleClick,
        id: 'dealers',
      }, {
        label: 'Owners',
        href: '/resources/Owners/list',
        onClick: handleClick,
        id: 'owners',
      }, {
        label: 'Orders',
        href: '/resources/Orders/list',
        onClick: handleClick,
        id: 'orders',
      }],
    }],
  }

  return (
    <Box variant="grey">
      <Label>Navigation example</Label>
      <Box width="sidebarWidth" border="bg" bg="white">
        <Navigation {...props} label={label} />
      </Box>
    </Box>
  )
}
