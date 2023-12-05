import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Avatar from './avatar.jsx'

export const Default: StoryObj<typeof Avatar> = {}

export const WithLetter: StoryObj<typeof Avatar> = {
  render: ({ alt }) => (
    <Avatar alt={alt}>
      {alt
        .split(' ')
        .map((w) => w.charAt(0))
        .join('')}
    </Avatar>
  ),
}

const meta: Meta<typeof Avatar> = {
  title: 'DesignSystem/Atoms/Avatar',
  component: Avatar,
  args: {
    src: 'https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    alt: 'Bubble Avatar',
  },
}

export default meta
