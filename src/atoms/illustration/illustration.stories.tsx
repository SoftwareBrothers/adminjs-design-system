import React from 'react'
import Illustration from './illustration'

const illustrationVariants = ['Moon', 'Rocket', 'Astronaut', 'DocumentCheck',
  'DocumentSearch', 'FileSearch', 'FlagInCog', 'Folders', 'Launch', 'Planet',
  'AdminJSLogo', 'GithubLogo',
  'SlackLogo'] as const

export const Default: React.FC = (props) => (
  <Illustration {...(props as any)} />
)

export default {
  title: 'DesignSystem/Atoms/Illustration',
  argTypes: {
    variant: {
      defaultValue: illustrationVariants[0],
      options: illustrationVariants,
      control: { type: 'select' },
    },
    width: {
      defaultValue: 150,
      control: { type: 'number' },
    },
    height: {
      defaultValue: 150,
      control: { type: 'number' },
    },
  },
}
