import React, { forwardRef } from 'react'
import { withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'

import { Box, Select, Dropdown, Button } from '../../..'
import StoryWrapper from '../../utils/story-wrapper'

export default {
  title: 'DesignSystem/Atoms/Select',
  decorators: [withKnobs],
  component: Select,
}

const TestButton = ({ onClick }, ref) => (
  <Button
    onClick={onClick}
    ref={ref}
    variant="primary"
  >
    Click me!
  </Button>
)

const ForwardedRefTestButton = forwardRef(TestButton)

export const Default: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Knobs example">
      <Dropdown Trigger={ForwardedRefTestButton}>
        ciekawe
      </Dropdown>
    </StoryWrapper>
  </Box>
)
