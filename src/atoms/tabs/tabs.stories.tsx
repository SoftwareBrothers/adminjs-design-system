import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { Box } from '../index.js'
import { Tab, Tabs } from './index.js'

export const Default: StoryFn = () => {
  const [selectedTab, setSelectedTab] = useState('first')

  return (
    <Tabs currentTab={selectedTab} onChange={setSelectedTab}>
      <Tab id="first" label="First tab">
        First
      </Tab>
      <Tab id="second" label="Second tab">
        <Box color="primary100">Second</Box>
      </Tab>
      <Tab id="third" label="Third tab">
        Third
      </Tab>
    </Tabs>
  )
}

const meta: Meta<typeof Tabs> = {
  title: 'DesignSystem/Atoms/Tabs',
  component: Tabs,
}

export default meta
