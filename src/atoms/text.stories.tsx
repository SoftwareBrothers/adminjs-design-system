import { withKnobs, text, select } from '@storybook/addon-knobs'
import React from 'react'
import Text from './text'

export default { title: 'DesignSystem/Atoms/Text', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const variant = select('Optional size variant', ['xs', 'sm', 'lg'], 'sm')
  const as = text('Define this if you want to render element as something other than div', 'div')
  const content = text(
    'Some example content',
    `Lorem ipsum is a placeholder text commonly used to demonstrate the
visual form of a document or a typeface without relying on meaningful
content.`,
  )
  return (
    <Text
      variant={variant}
      as={as as any}
    >
      {content}
    </Text>
  )
}
