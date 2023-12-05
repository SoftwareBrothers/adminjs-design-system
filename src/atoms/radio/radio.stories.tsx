import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { Box, Label } from '../index.js'
import { Radio } from './index.js'

export const Default: StoryFn = () => (
  <Box flex>
    <Box flexDirection="column" marginRight={15}>
      <Radio id="checkbox1" checked />
      <Label inline htmlFor="checkbox1" ml="default">
        Checked
      </Label>
    </Box>
    <Box flexDirection="column" marginRight={15}>
      <Radio id="checkbox2" checked={false} />
      <Label inline htmlFor="checkbox2" ml="default">
        Unchecked
      </Label>
    </Box>
    <Box flexDirection="column" marginRight={15}>
      <Radio id="checkbox3" checked disabled />
      <Label inline htmlFor="checkbox3" ml="default">
        Disabled
      </Label>
    </Box>
  </Box>
)

const meta: Meta<typeof Radio> = {
  title: 'DesignSystem/Atoms/Radio',
  component: Radio,
}

export default meta
