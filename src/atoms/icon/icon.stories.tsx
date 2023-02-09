import React from 'react'
import * as FeatherIcons from 'react-feather'
import { Box } from '../box'
import { Label } from '../label'
import Icon from './icon'

export default {
  title: 'DesignSystem/Atoms/Icon',
  argTypes: {
    icon: {
      defaultValue: 'Settings',
      description: 'CamelCased name of an icon from https://www.npmjs.com/package/react-feather',
      control: { type: 'select' },
      options: Object.keys(FeatherIcons),
    },
    size: {
      defaultValue: 48,
      control: { type: 'number', min: 16, max: 48, step: 4 },
    },
    color: {
      defaultValue: 'black',
      control: { type: 'color' },
    },
    bg: {
      defaultValue: 'white',
      control: { type: 'color' },
    },
    rounded: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    spin: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}

export const Default: React.FC = (props) => <Icon {...props} />

export const Icons: React.FC = () => (
  <Box display="grid" style={{ gridTemplateColumns: 'repeat(10, 1fr)', gap: 16 }}>
    {Object.keys(FeatherIcons).map((key) => (
      <Box key={key} flex alignItems="center" flexDirection="column">
        <Label>{key}</Label>
        <Icon icon={key} size={24} />
      </Box>
    ))}
  </Box>
)
