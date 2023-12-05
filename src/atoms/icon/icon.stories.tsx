import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'
import * as FeatherIcons from 'react-feather'

import { Box, Label } from '../index.js'
import { Icon } from './icon.js'

const icons = Object.keys(FeatherIcons).filter((name) => name !== 'default')

export const Default: StoryObj = {}

export const Icons: StoryFn = () => (
  <Box display="grid" style={{ gridTemplateColumns: 'repeat(10, 1fr)', gap: 16 }}>
    {icons.map((key) => (
      <Box key={key} flex alignItems="center" flexDirection="column">
        <Label>{key}</Label>
        <Icon icon={key} size={24} />
      </Box>
    ))}
  </Box>
)

const meta: Meta<typeof Icon> = {
  title: 'DesignSystem/Atoms/Icon',
  component: Icon,
  args: {
    icon: icons[0],
    size: 48,
    rounded: false,
    spin: false,
  },
  argTypes: {
    icon: {
      description: 'CamelCased name of an icon from https://www.npmjs.com/package/react-feather',
      control: { type: 'select' },
      options: icons,
    },
    size: { control: { type: 'number', min: 16, max: 48, step: 4 } },
    color: { control: { type: 'color' } },
    bg: { control: { type: 'color' } },
    rounded: { control: { type: 'boolean' } },
    spin: { control: { type: 'boolean' } },
  },
}

export default meta
