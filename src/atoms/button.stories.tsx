import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import React from 'react'
import { Button, Box, Icon as IconComponent, Label } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default { title: 'DesignSystem/Atoms/Button', decorators: [withKnobs] }
const variants = ['primary', 'danger', 'success', 'info', 'secondary', 'text']

enum ButtonVariant {
  Primary = 'primary',
  Danger = 'danger',
  Text = 'text',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary'
}

enum ButtonSize {
  Small = 'sm',
  Large = 'lg',
  Icon = 'icon',
  Default = 'default',
}

export const Default: React.FC = () => {
  const variant = select('Variant', Object.values(ButtonVariant), ButtonVariant.Primary)
  const size = select('Size', Object.values(ButtonSize), ButtonSize.Default)
  const rounded = boolean('Rounded', false)
  const disabled = boolean('Disabled', false)
  return (
    <Box width={1}>
      <StoryWrapper label="Knobs example">
        <Button
          variant={variant}
          size={size}
          rounded={rounded}
          disabled={disabled}
        >
          {`${variant} ${size} ${rounded ? 'rounded' : ''} ${disabled ? 'disabled' : ''}`}
        </Button>
      </StoryWrapper>
    </Box>
  )
}

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Different sizes">
      <Box mb="xl">
        <Label>Small</Label>
        <Button size="sm">Small [sm]</Button>
      </Box>
      <Box mb="xl">
        <Label>Default</Label>
        <Button size="default">Default</Button>
      </Box>
      <Box mb="xl">
        <Label>Large</Label>
        <Button size="lg">Large [lg]</Button>
      </Box>
      <Box mb="xl">
        <Label>Icon</Label>
        <Button size="icon"><IconComponent icon="Add" /></Button>
      </Box>
    </StoryWrapper>
    <StoryWrapper label="Variants">
      {variants.map((variant) => (
        <Box mb="xl" key={variant}>
          <Label>{variant}</Label>
          <Button variant={variant}>{variant}</Button>
        </Box>
      ))}
    </StoryWrapper>
  </Box>
)
