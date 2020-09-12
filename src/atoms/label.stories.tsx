import React from 'react'
import { withKnobs, boolean } from '../../storybook/node_modules/@storybook/addon-knobs'
import Label from './label'

export default { title: 'DesignSystem/Atoms/Label', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const required = boolean('If label represents required field - appends star (*)', false)
  const uppercase = boolean('If label should be in uppercase version', false)
  const inline = boolean('By default labels are displayed as a block. You can override this by setting `inline`', false)
  const disabled = boolean('If label represents disabled field (dimmed version)', false)
  return (
    <Label
      required={required}
      uppercase={uppercase}
      inline={inline}
      disabled={disabled}
    >
      {`just ${required ? 'required' : ''} ${uppercase ? 'uppercased' : ''} ${inline ? 'inline' : ''} ${disabled ? 'disabled' : ''} label`}
    </Label>
  )
}
