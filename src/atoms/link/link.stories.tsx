import React from 'react'
import Link from './link'

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

export const Default: React.FC = (props) => (
  <Link {...props} href="/">
    just a link
  </Link>
)

export default {
  title: 'DesignSystem/Atoms/Link',
  argTypes: {
    uppercase: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: LinkVariant.Primary,
      options: Object.values(LinkVariant),
      control: { type: 'select' },
    },
    size: {
      defaultValue: LinkSize.Sm,
      options: Object.values(LinkSize),
      control: { type: 'select' },
    },
  },
}
