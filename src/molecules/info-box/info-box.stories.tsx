import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Button, Icon, Text } from '../../index.js'
import { InfoBox } from './info-box.js'

export const Default: StoryFn = () => (
  <InfoBox title="There are no cars in the system" illustration="Accept">
    <Text>Currently there are no cars in the system</Text>
    <Text>To create first click</Text>
    <Button variant="contained" mt="lg">
      <Icon icon="Plus" />
      Create
    </Button>
  </InfoBox>
)

export default {
  title: 'DesignSystem/Molecules/InfoBox',
  component: InfoBox,
} as Meta<typeof InfoBox>
