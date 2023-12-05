import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Button, CardTitle, Icon, Text } from '../index.js'
import { Section } from './index.js'

export const Default: StoryFn = () => (
  <StoryWrapper label="Section default settings">
    <Section>
      <Box mb="xl">
        <CardTitle>Some text within a section</CardTitle>
      </Box>
      <Section>
        <Text>Section can be nested</Text>
        <Box>
          <Button size="sm" rounded>
            <Icon icon="Plus" />
            Add something
          </Button>
        </Box>
      </Section>
    </Section>
  </StoryWrapper>
)

const meta: Meta<typeof Section> = {
  title: 'DesignSystem/Atoms/Section',
  component: Section,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
