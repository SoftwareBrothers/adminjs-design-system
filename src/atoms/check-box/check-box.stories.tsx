import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import { Box, Label } from '../index.js'
import { CheckBox } from './index.js'

export const Default: StoryObj = {
  render: (props) => (
    <Box flexDirection="column" marginRight={15}>
      <CheckBox id="default-checkbox" {...props} />
      <Label inline htmlFor="default-checkbox" ml="default">
        Check me!
      </Label>
    </Box>
  ),
}

export const AllStates: StoryFn = () => (
  <Box flex>
    <Box flexDirection="column" marginRight={15}>
      <CheckBox id="checkbox1" checked />
      <Label inline htmlFor="checkbox1" ml="default">
        Checked
      </Label>
    </Box>
    <Box flexDirection="column" marginRight={15}>
      <CheckBox id="checkbox2" />
      <Label inline htmlFor="checkbox2" ml="default">
        Unchecked
      </Label>
    </Box>
    <Box flexDirection="column" marginRight={15}>
      <CheckBox id="checkbox3" checked disabled />
      <Label inline htmlFor="checkbox3" ml="default">
        Disabled
      </Label>
    </Box>
  </Box>
)

const meta: Meta<typeof CheckBox> = {
  title: 'DesignSystem/Atoms/CheckBox',
  component: CheckBox,
}

export default meta
