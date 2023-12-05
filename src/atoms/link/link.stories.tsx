import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Link } from './index.js'

enum LinkVariant {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary',
}

enum LinkSize {
  Sm = 'sm',
  Lg = 'lg',
}

const variants = Object.values(LinkVariant)
const sizes = Object.values(LinkSize)

export const Default: StoryObj = {
  render: (props) => (
    <Link {...props} href="/">
      just a link
    </Link>
  ),
}

const meta: Meta<typeof Link> = {
  title: 'DesignSystem/Atoms/Link',
  component: Link,
  args: {
    uppercase: false,
    variant: LinkVariant.Primary,
    size: LinkSize.Sm,
  },
  argTypes: {
    uppercase: { control: { type: 'boolean' } },
    variant: { options: variants, control: { type: 'select' } },
    size: { options: sizes, control: { type: 'select' } },
  },
}

export default meta
