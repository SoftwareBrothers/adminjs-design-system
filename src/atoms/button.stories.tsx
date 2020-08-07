import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import React from 'react'
import Button from './button'

export default { title: 'DesignSystem/Atoms/Button', decorators: [withKnobs] }

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
}

export const Default: React.FC = () => {
  const variant = select('Variant', Object.values(ButtonVariant), ButtonVariant.Primary)
  const size = select('Size', Object.values(ButtonSize), ButtonSize.Small)
  const rounded = boolean('Rounded', false)
  const disabled = boolean('Disabled', false)
  return (
    <Button
      variant={variant}
      size={size}
      rounded={rounded}
      disabled={disabled}
    >
      {`${variant} ${size} ${rounded ? 'rounded' : ''} ${disabled ? 'disabled' : ''}`}
    </Button>
  )
}
