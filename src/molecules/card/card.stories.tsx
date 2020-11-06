import React from 'react'
import { withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs'
import { Card } from '.'
import { Box } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export default { title: 'DesignSystem/Molecules/Card', decorators: [withKnobs] }

export const Default: React.FC = () => (
  <StoryWrapper label="Example">
    <Box px="xl" py="xxl" width="360px">
      <Card
        title="Card title"
        description="Card description"
        content="Lorem ipsum sit amet, consectetur adipsicing elit suspendisse cursus."
        link={{ href: 'https://www.example.com', text: 'See more' }}
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="360px">
      <Card
        title="Card title"
        description="Card description"
        content="Lorem ipsum sit amet, consectetur adipsicing elit suspendisse cursus."
        link={{ href: 'https://www.example.com', text: 'See more' }}
        media={{ src: 'https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg', type: 'image', width: '180px' }}
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="360px">
      <Card
        title="Card title"
        description="Card description"
        content="Lorem ipsum sit amet, consectetur adipsicing elit suspendisse cursus."
        link={{ href: 'https://www.example.com', text: 'See more' }}
        media={{ src: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGakLlMoF2dJQ/company-logo_200_200/0?e=2159024400&v=beta&t=x_Vq1yEp1bphbWhd2rY9pZmLV3gR4_ncPTP0bv2UjDg', type: 'background' }}
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="360px">
      <Card
        title="Card title"
        description="Card description"
        content="Lorem ipsum sit amet, consectetur adipsicing elit suspendisse cursus."
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="360px">
      <Card
        title="Card title"
        description="Card description"
      >
        With inside text
      </Card>
    </Box>

    <Box px="xl" py="xxl" width="360px">
      <Card
        title="Card title"
      >
        With inside text
      </Card>
    </Box>
  </StoryWrapper>
)
