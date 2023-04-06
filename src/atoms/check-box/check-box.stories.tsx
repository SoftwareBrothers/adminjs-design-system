import React from 'react'

import { Box, CheckBox, Label } from '../../index.js'

export default {
  title: 'DesignSystem/Atoms/CheckBox',
  component: CheckBox,
}

export const Default = (props) => (
  <Box flexDirection="column" marginRight={15}>
    <CheckBox id="default-checkbox" {...props} />
    <Label inline htmlFor="default-checkbox" ml="default">
      Check me!
    </Label>
  </Box>
)

export const AllStates: React.FC = () => (
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
