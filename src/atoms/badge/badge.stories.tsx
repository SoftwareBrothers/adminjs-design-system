import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Box, Header, Text as TextComponent } from '../index.js'
import { Badge } from './index.js'

enum BadgeVariant {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary',
}

enum BadgeSize {
  Small = 'sm',
  Default = 'default',
  Large = 'lg',
}

const variants = Object.values(BadgeVariant)
const sizes = Object.values(BadgeSize)

export const Default: StoryObj<typeof Badge> = {
  render: (args) => <Badge {...args}>Badge example</Badge>,
}

export const Examples: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Badge regular">
      <Badge variant="primary" mr="default">
        primary
      </Badge>
      {variants.map((variant) => (
        <Badge variant={variant} key={variant} mr="default">
          {variant}
        </Badge>
      ))}
    </StoryWrapper>
    <StoryWrapper label="Badge outlined">
      {variants.map((variant) => (
        <Badge variant={variant} key={variant} mr="default" outline>
          {variant}
        </Badge>
      ))}
    </StoryWrapper>
    <StoryWrapper label="Badge sizes">
      {sizes.map((size) => (
        <Badge variant="primary" size={size} key={size} mr="default">
          {size}
        </Badge>
      ))}
    </StoryWrapper>
    <StoryWrapper label="With other elements">
      <Header.H1>
        H1. Header
        <Badge ml="default">Badge</Badge>
      </Header.H1>
      <Header.H2>
        H1. Header
        <Badge ml="default" size="sm" variant="primary">
          Small badge
        </Badge>
      </Header.H2>
      <TextComponent mt="xxl">
        Inside text
        <Badge mx="default">Is something</Badge>
      </TextComponent>
    </StoryWrapper>
  </Box>
)

const meta: Meta<typeof Badge> = {
  title: 'DesignSystem/Atoms/Badge',
  component: Badge,
  args: {
    variant: BadgeVariant.Primary,
    size: BadgeSize.Default,
    outline: false,
  },
  argTypes: {
    variant: { options: variants, control: { type: 'select' } },
    size: { options: sizes, control: { type: 'select' } },
    outline: { control: { type: 'boolean' } },
  },
}

export default meta
