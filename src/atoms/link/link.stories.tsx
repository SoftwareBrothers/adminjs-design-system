import React from 'react'

import { Link } from './link.js'

enum LinkVariant {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary'
}

enum LinkSize {
  Sm = 'sm',
  Lg = 'lg'
}

const variants = Object.values(LinkVariant)
const sizes = Object.values(LinkSize)

export const Default: React.FC = (props) => (
  <Link {...props} href="/">
    just a link
  </Link>
)

export default {
  title: 'DesignSystem/Atoms/Link',
  args: {
    uppercase: false,
    variant: LinkVariant.Primary,
    size: LinkSize.Sm,
  },
  argTypes: {
    uppercase: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: LinkVariant.Primary,
      options: variants,
      control: { type: 'select' },
    },
    size: {
      defaultValue: LinkSize.Sm,
      options: sizes,
      control: { type: 'select' },
    },
  },
}
