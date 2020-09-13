import React from 'react'
import { withKnobs, radios, text } from '../../storybook/node_modules/@storybook/addon-knobs'
import { Tooltip, TooltipContent, Button, H4, Text, Box } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default { title: 'DesignSystem/Atoms/Tooltip', decorators: [withKnobs] }

const Direction = {
  right: 'right',
  left: 'left',
  top: 'top',
  bottom: 'bottom',
}

export const Default: React.FC = () => {
  const direction = radios('direction', Direction, Direction.top) as keyof typeof Direction
  const tooltipText = text('title', 'example info')
  return (
    <Box width={1 / 3}>
      <StoryWrapper label="Regular example">
        <Tooltip direction={direction} title={tooltipText}>
          <Button>Standard text</Button>
        </Tooltip>
      </StoryWrapper>
      <StoryWrapper label="Custom component as tooltip">
        <Tooltip direction={direction}>
          <TooltipContent>
            <H4>Header</H4>
            <Text>Some text inside the tooltip?</Text>
          </TooltipContent>
          <Button>Header with sth</Button>
        </Tooltip>
      </StoryWrapper>
    </Box>
  )
}
