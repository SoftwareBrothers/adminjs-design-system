import React from 'react'
import Box from './box'
import { Label, Input } from '..'

export default { title: 'DesignSystem/Atoms/Input' }

export const Default: React.FC = () => (
  <Box flex flexDirection="row">
    <Box flex flexDirection="column" marginRight={15}>
      <Label inline htmlFor="checkbox1" ml="default">Example</Label>
      <Input id="input1" placeholder="Simple input field..." />
    </Box>
    <Box flex flexDirection="column" marginRight={15}>
      <Label inline htmlFor="checkbox2" ml="default">Disabled</Label>
      <Input id="input1" placeholder="Disabled input field..." disabled />
    </Box>
  </Box>
)
