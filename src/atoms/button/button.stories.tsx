import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Box, Button, Icon, Label } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.js'

const ButtonVariant = ['text', 'outlined', 'contained', 'light'] as const
const ButtonSize = ['default', 'sm', 'lg', 'icon'] as const
const ButtonColor = ['primary', 'secondary', 'danger', 'success', 'info'] as const

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props}>Example button</Button>
)

export const Examples: React.FC = () => (
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

export default {
  title: 'DesignSystem/Atoms/Button',
  component: Button,
  args: {
    disabled: false,
    rounded: false,
  },
  parameters: {
    controls: {
      include: ['variant', 'disabled', 'rounded', 'size', 'color'],
    },
  },
  argTypes: {
    variant: {
      options: ButtonVariant,
      defaultValue: ButtonVariant[0],
      control: { type: 'select' },
    },
    size: {
      options: ButtonSize,
      defaultValue: ButtonSize[0],
      control: { type: 'select' },
    },
    color: {
      options: ButtonColor,
      defaultValue: ButtonColor[0],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>
