import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Badge, Box, Header, Text as TextComponent } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.js'

export enum BadgeVariant {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary',
}

export enum BadgeSize {
  Small = 'sm',
  Default = 'default',
  Large = 'lg',
}

export const Default: ComponentStory<typeof Badge> = (props) => (
  <Badge {...props}>Badge example</Badge>
)

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Badge regular">
      {Object.values(BadgeVariant).map((variant) => (
        <Badge variant={variant} key={variant} mr="default">
          {variant}
        </Badge>
      ))}
    </StoryWrapper>
    <StoryWrapper label="Badge outlined">
      {Object.values(BadgeVariant).map((variant) => (
        <Badge variant={variant} key={variant} mr="default" outline>
          {variant}
        </Badge>
      ))}
    </StoryWrapper>
    <StoryWrapper label="Badge sizes">
      {Object.values(BadgeSize).map((size) => (
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

export default {
  title: 'DesignSystem/Atoms/Badge',
  component: Badge,
  parameters: {
    controls: {
      include: ['variant', 'size', 'outline'],
    },
  },
  argTypes: {
    variant: {
      defaultValue: BadgeVariant.Primary,
      options: Object.values(BadgeVariant),
      control: { type: 'select' },
    },
    size: {
      defaultValue: BadgeSize.Default,
      options: Object.values(BadgeSize),
      control: { type: 'select' },
    },
    outline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Badge>
