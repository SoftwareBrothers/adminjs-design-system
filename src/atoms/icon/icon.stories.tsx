import React from 'react'
import Icon from './icon'

export const Default: React.FC = (props) => (
  <Icon {...props} />
)

export default {
  title: 'DesignSystem/Atoms/Icon',
  argTypes: {
    icon: {
      defaultValue: 'Settings',
      description: 'CamelCased name of an icon from https://www.carbondesignsystem.com/guidelines/icons/library/',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 20,
      control: { type: 'number', min: 16, max: 32, step: 4 },
    },
    color: {
      defaultValue: 'white',
      control: { type: 'color' },
    },
    bg: {
      defaultValue: 'black',
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
