import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Box } from '../box/index.js'
import * as illustrations from '../illustrations/index.js'
import Label from '../label/index.js'
import Illustration, { IllustrationVariant } from './illustration.js'

const illustrationVariants = Object.keys(illustrations) as IllustrationVariant[]

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
} as ComponentMeta<typeof Illustration>

export const Default: ComponentStory<typeof Illustration> = (props) => <Illustration {...props} />

export const Icons: React.FC = () => (
  <Box display="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
    {(illustrationVariants).map((key) => (
      <Box key={key} flex alignItems="center" flexDirection="column">
        <Label>{key}</Label>
        <Illustration variant={key} width={150} height={150} />
      </Box>
    ))}
  </Box>
)
