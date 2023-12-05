import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import * as illustrations from '../illustrations/index.js'
import { Box, Label } from '../index.js'
import { Illustration, IllustrationProps, IllustrationVariant } from './index.js'

const illustrationVariants = Object.keys(illustrations) as IllustrationVariant[]

export const Default: StoryObj<IllustrationProps> = {
  render: ({ variant }) => <Illustration variant={variant} />,
}

export const Illustrations: StoryFn = () => (
  <Box display="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
    {illustrationVariants.map((key) => (
      <Box key={key} flex alignItems="center" flexDirection="column">
        <Label>{key}</Label>
        <Illustration variant={key} width={150} height={150} />
      </Box>
    ))}
  </Box>
)

const meta: Meta<typeof Illustration> = {
  title: 'DesignSystem/Atoms/Illustration',
  args: {
    variant: illustrationVariants[0],
    width: 150,
    height: 150,
  },
  argTypes: {
    variant: { options: illustrationVariants, control: { type: 'select' } },
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
  },
}

export default meta
