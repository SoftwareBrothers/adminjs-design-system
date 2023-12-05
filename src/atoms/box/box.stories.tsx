import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import { Button, Header, Text } from '../index.js'
import { Box, BoxProps } from './index.js'

export const Default: StoryObj = {
  render: (props) => <Box {...props}>Box example</Box>,
}

const variants: BoxProps['variant'][] = ['card', 'container', 'grey', 'transparent', 'white']

export const simpleWhiteGrayWrapper: StoryFn = () => (
  <Box variant="grey">
    <Box variant="white">
      <Text>This is the default wrapper in the application</Text>
    </Box>
  </Box>
)

export const positioningButtons: StoryFn = () => (
  <Box variant="grey">
    <Box variant="white" flex flexDirection="row">
      <Box flexGrow={1}>
        <Header.H3>Some header</Header.H3>
      </Box>
      <Box flexShrink={0}>
        <Button>Example Button On The Right</Button>
      </Box>
    </Box>
  </Box>
)

const meta: Meta<typeof Box> = {
  title: 'DesignSystem/Atoms/Box',
  component: Box,
  parameters: {
    controls: {
      include: ['variant'],
    },
  },
  argTypes: {
    variant: { options: variants, control: { type: 'select' } },
  },
}

export default meta
