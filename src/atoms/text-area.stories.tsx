import React from 'react'
import Box from './box'
import { TextArea, Label } from '..'

export default { title: 'DesignSystem/Atoms/TextArea' }

export const Default: React.FC = () => (
  <Box flex flexDirection="row">
    <Box flex flexDirection="column" marginRight={15}>
      <Label inline htmlFor="checkbox1" ml="default">Example</Label>
      <TextArea id="input1" placeholder="Simple textarea field..." />
    </Box>
    <Box flex flexDirection="column" marginRight={15}>
      <Label inline htmlFor="checkbox2" ml="default">Disabled</Label>
      <TextArea id="input1" placeholder="Disabled textarea field..." disabled />
    </Box>
  </Box>
)
