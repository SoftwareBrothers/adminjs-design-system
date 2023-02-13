import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Box, Button, Icon, Icon as IconComponent, Label } from '../../../src'
import StoryWrapper from '../../utils/story-wrapper'

const ButtonVariant = ['text', 'outlined', 'contained', 'light'] as const
const ButtonSize = ['default', 'sm', 'lg', 'icon'] as const
const colorVariants = ['primary', 'secondary', 'danger', 'success', 'info'] as const

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props}>Example button</Button>
)

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Different versions">
      <Box mb="xl">
        <Label>Small</Label>
        <Button size="sm">Small [sm]</Button>
        <Button size="sm" ml="md">
          <Icon icon="Plus" />
          Add brand
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Default</Label>
        <Button size="md">Default</Button>
        <Button size="md" ml="md">
          <Icon icon="Plus" />
          Add brand
        </Button>
        <Button size="md" ml="md" color="primary">
          <Icon icon="Activity" />
          Primary
        </Button>
        <Button size="md" ml="md" color="danger">
          Danger
          <Icon icon="ArrowRight" />
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button size="lg">Large [lg]</Button>
        <Button size="lg" ml="md">
          <Icon icon="Plus" />
          Add brand
        </Button>
        <Button size="lg" ml="md" color="primary">
          <Icon icon="Activity" />
          Primary
        </Button>
        <Button size="lg" ml="md" color="danger">
          Danger
          <Icon icon="ArrowRight" />
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Icon</Label>
        <Button size="icon">
          <IconComponent icon="Plus" />
        </Button>
        <Button ml="md">Regular inside</Button>
        <Button size="icon" ml="md" rounded>
          <IconComponent icon="Plus" />
        </Button>
        <Button size="icon" ml="md" variant="text">
          <IconComponent icon="Plus" />
        </Button>
      </Box>
    </StoryWrapper>

    <StoryWrapper label="Variants">
      {ButtonVariant.map((variant) => (
        <Box mb="xl" key={variant}>
          <Label>{variant}</Label>
          <Button variant={variant}>{variant}</Button>
        </Box>
      ))}
    </StoryWrapper>

    <StoryWrapper label="With icons">
      <Box mb="xl">
        <Label>Small with icon</Label>
        <Button size="sm">
          <Icon icon="Plus" />
          Small [sm]
        </Button>
        <Button size="sm" color="primary" ml="default">
          <Icon icon="Activity" />
          With other icon
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Default</Label>
        <Button size="default">
          <Icon icon="Plus" />
          Default
        </Button>
        <Button size="default" ml="md" variant="light">
          <Icon icon="Plus" />
          Light
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button size="lg">
          <Icon icon="Plus" />
          Large [lg]
        </Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button variant="text">
          <Icon icon="Plus" />
          Text with icon
        </Button>
      </Box>
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
      options: colorVariants,
      defaultValue: colorVariants[0],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>
