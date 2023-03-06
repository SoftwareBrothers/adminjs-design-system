import React, { useState } from 'react'

import { Box } from '../box/index.js'
import Tab from './tab.jsx'
import Tabs from './tabs.jsx'

export default {
  title: 'DesignSystem/Atoms/Tabs',
}

const Template = () => {
  const [selectedTab, setSelectedTab] = useState('first')

  return (
    <Tabs currentTab={selectedTab} onChange={setSelectedTab}>
      <Tab id="first" label="First tab">
        <Box width={700} height={500}>
          First
        </Box>
      </Tab>
      <Tab id="second" label="Second tab">
        Second
      </Tab>
      <Tab id="third" label="Third tab">
        Third
      </Tab>
    </Tabs>
  )
}

export const Default = Template.bind({})
