import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Icon, Label } from '../index.js'
import { Button, ButtonProps } from './index.js'

const ButtonVariant: ButtonProps['variant'][] = ['text', 'outlined', 'contained', 'light']
const ButtonSize: ButtonProps['size'][] = ['default', 'sm', 'lg', 'icon']
const ButtonColor: ButtonProps['color'][] = ['primary', 'secondary', 'danger', 'success', 'info']

export const Default: StoryObj = {
  render: (args) => <Button {...args}>Example button</Button>,
}

export const Examples: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Variants" flex>
      {ButtonVariant.map((variant) => (
        <Box key={variant}>
          <Label>{variant}</Label>
          <Button variant={variant}>{variant}</Button>
        </Box>
      ))}
    </StoryWrapper>

    <StoryWrapper label="Sizes">
      {ButtonSize.map((size) => (
        <>
          <Label>{size}</Label>
          <Box key={size} flex style={{ gap: 16 }}>
            {ButtonVariant.map((variant) => (
              <Button key={variant} size={size} variant={variant}>
                {variant} {size}
              </Button>
            ))}
          </Box>
        </>
      ))}
    </StoryWrapper>

    <StoryWrapper label="Colors">
      {ButtonColor.map((color) => (
        <>
          <Label>{color}</Label>
          <Box key={color} flex style={{ gap: 16 }}>
            {ButtonVariant.map((variant) => (
              <Button key={variant} color={color} variant={variant}>
                {variant} {color}
              </Button>
            ))}
          </Box>
        </>
      ))}
    </StoryWrapper>

    <StoryWrapper label="Rounded">
      {ButtonSize.map((size) => (
        <>
          <Label>{size}</Label>
          <Box key={size} flex style={{ gap: 16 }}>
            {ButtonVariant.map((variant) => (
              <Button key={variant} size={size} variant={variant} rounded>
                {variant} rounded
              </Button>
            ))}
          </Box>
        </>
      ))}
    </StoryWrapper>

    <StoryWrapper label="With icons">
      {ButtonSize.map((size) => (
        <>
          <Label>{size}</Label>
          <Box key={size} flex style={{ gap: 16 }}>
            {ButtonVariant.map((variant) => (
              <Button key={variant} size={size} variant={variant}>
                <Icon icon="Plus" />
                {size !== 'icon' && [variant, size].join(' ')}
              </Button>
            ))}
          </Box>
        </>
      ))}
    </StoryWrapper>
  </Box>
)

const meta: Meta<typeof Button> = {
  title: 'DesignSystem/Atoms/Button',
  component: Button,
  args: {
    variant: ButtonVariant[0],
    size: ButtonSize[0],
    color: ButtonColor[0],
    disabled: false,
    rounded: false,
  },
  parameters: {
    controls: {
      include: ['variant', 'disabled', 'rounded', 'size', 'color'],
    },
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { options: ButtonVariant, control: { type: 'select' } },
    size: { options: ButtonSize, control: { type: 'select' } },
    color: { options: ButtonColor, control: { type: 'select' } },
  },
}

export default meta
