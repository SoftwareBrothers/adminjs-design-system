import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Button, H4, Text } from '../index.js'
import { Tooltip, TooltipContent } from './index.js'

const Direction = {
  right: 'right',
  left: 'left',
  top: 'top',
  bottom: 'bottom',
} as const

const Size = ['default', 'lg'] as const

export const Default: StoryObj = {
  render: (args) => (
    <Box>
      <StoryWrapper label="Regular example">
        <Tooltip {...(args as any)}>
          <Button>Standard text</Button>
        </Tooltip>
      </StoryWrapper>
      <StoryWrapper label="Custom component as tooltip">
        <Tooltip {...(args as any)}>
          <TooltipContent>
            <H4>Header</H4>
            <Text>Some text inside the tooltip?</Text>
          </TooltipContent>
          <Button>Header with sth</Button>
        </Tooltip>
      </StoryWrapper>
    </Box>
  ),
}

const meta: Meta<typeof Tooltip> = {
  title: 'DesignSystem/Atoms/Tooltip',
  component: Tooltip,
  args: {
    direction: Direction.top,
    size: Size[0],
    title: 'Example info',
  },
  argTypes: {
    direction: { options: Object.values(Direction), control: { type: 'select' } },
    size: { options: Size, control: { type: 'select' } },
    title: { control: { type: 'text' } },
  },
}

export default meta
