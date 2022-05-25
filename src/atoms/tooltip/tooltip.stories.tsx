import React from 'react'
import { Tooltip, TooltipContent, Button, H4, Text, Box } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

const Direction = {
  right: 'right',
  left: 'left',
  top: 'top',
  bottom: 'bottom',
}

const Size = ['default', 'lg'] as const

export const Default: React.FC = (props) => (
  <Box width={1 / 3}>
    <StoryWrapper label="Regular example">
      <Tooltip {...props as any}>
        <Button>Standard text</Button>
      </Tooltip>
    </StoryWrapper>
    <StoryWrapper label="Custom component as tooltip">
      <Tooltip {...props as any}>
        <TooltipContent>
          <H4>Header</H4>
          <Text>Some text inside the tooltip?</Text>
        </TooltipContent>
        <Button>Header with sth</Button>
      </Tooltip>
    </StoryWrapper>
  </Box>
)

export default {
  title: 'DesignSystem/Atoms/Tooltip',
  argTypes: {
    direction: {
      defaultValue: Direction.top,
      options: Object.values(Direction),
      control: { type: 'select' },
    },
    size: {
      defaultValue: Size[0],
      options: Size,
      control: { type: 'select' },
    },
    title: {
      defaultValue: 'Example info',
      control: { type: 'text' },
    },
  },
}
