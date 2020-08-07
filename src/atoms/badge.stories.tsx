import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import React from 'react'
import Badge from './badge'

export default { title: 'DesignSystem/Atoms/Badge', decorators: [withKnobs] }

enum BadgeVariant {
  Primary = 'primary',
  Danger = 'danger',
  Text = 'text',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary'
}

enum BadgeSize {
  Sm = 'sm',
  Lg = 'lg'
}

export const Default: React.FC = () => {
  const variant = select('Variant', Object.values(BadgeVariant), BadgeVariant.Primary)
  const size = select('Size', Object.values(BadgeSize), BadgeSize.Sm)
  const outline = boolean('Outline', false)
  return (
    <Badge
      variant={variant}
      size={size}
      outline={outline}
    >
      {`${variant} ${size} ${outline ? 'outline' : ''}`}
    </Badge>
  )
}
