import React from 'react'

import { Section, Box, Button, Icon, Text, CardTitle } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.js'

export default {
  title: 'DesignSystem/Atoms/Section',
  argTypes: {
    onClick: { action: 'clicked' },
  },
}
export const Default: React.FC = () => (
  <StoryWrapper label="Section default settings">
    <Section>
      <Box mb="xl">
        <CardTitle>Some text within a section</CardTitle>
      </Box>
      <Section>
        <Text>
          Section can be nested
        </Text>
        <Box>
          <Button size="sm" rounded><Icon icon="Plus" />Add something</Button>
        </Box>
      </Section>
    </Section>
  </StoryWrapper>
)
