import React, { FC } from 'react'
import { Box, Button, PhoneInput, FormGroup } from '../..'
import { boolean, number, select, withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'
import StoryWrapper from '../../utils/story-wrapper'

export default {
  title: 'DesignSystem/Atoms/PhoneInput',
  decorators: [withKnobs],
}

export const Default: FC = () => {
  const borderless = boolean('borderless', false)
  const disabled = boolean('disabled', false)
  const variant = select('variant', ['sm', 'lg', 'xl', 'default'], 'default')
  const width = number('width', 1 / 2, {
    min: 0,
    max: 1,
    step: 0.1,
  })

  return (
    <Box width={1}>
      <StoryWrapper label="Phone input example">
        <FormGroup>
          <PhoneInput
            width={width}
            variant={variant}
            borderless={borderless}
            disabled={disabled}
          />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </StoryWrapper>
    </Box>
  )
}

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Phone input">
      <PhoneInput
        id="input1"
        placeholder="Simple input field..."
      />
    </StoryWrapper>
  </Box>
)
