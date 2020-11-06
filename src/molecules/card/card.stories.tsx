import React from 'react'
import { withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs'
import { Card } from '.'
import { Box } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export default { title: 'DesignSystem/Molecules/Card', decorators: [withKnobs] }

export const Default: React.FC = () => (
  <StoryWrapper label="Example">
    <Box px="xl" py="xxl" width="300px">
      <Card
        title="Card title"
        description="Card description"
        content="Lorem ipsum sit amet, consectetur adipsicing elit suspendisse cursus."
        link={{ href: 'https://www.example.com', text: 'See more' }}
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="300px">
      <Card
        title="Card title"
        description="Card description"
        content="Lorem ipsum sit amet, consectetur adipsicing elit suspendisse cursus."
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="300px">
      <Card
        title="Card title"
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="300px">
      <Card
        title="Card title"
        description="Card description"
      >
        With inside text
      </Card>
    </Box>
  </StoryWrapper>
)
