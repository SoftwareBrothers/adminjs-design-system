import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Box, CheckBox, Label } from '../..'

export default {
  title: 'DesignSystem/Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>

export const Default: ComponentStory<typeof CheckBox> = (props) => (
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
