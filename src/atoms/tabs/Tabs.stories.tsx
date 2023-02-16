import React, { useState } from 'react'
import Tab from './Tab'
import Tabs from './Tabs'

export default {
  title: 'DesignSystem/Atoms/Tabs',
}

const Template = () => {
  const [selectedTab, setSelectedTab] = useState('first')

  return (
    <Tabs currentTab={selectedTab} onChange={setSelectedTab}>
      <Tab id="first" label="First tab">
        First
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
