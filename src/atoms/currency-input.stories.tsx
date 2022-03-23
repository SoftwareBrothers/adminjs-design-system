import React, { FC } from 'react'
import { Box, Button, CurrencyInput, FormGroup } from '..'
import { boolean, number, select, text, withKnobs } from '../../storybook/node_modules/@storybook/addon-knobs'
import StoryWrapper from '../utils/story-wrapper'

export default {
  title: 'DesignSystem/Atoms/CurrencyInput',
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

  // Currency props
  const prefix = text('prefix', '$')
  const suffix = text('sufix', '')
  const decimalSeparator = text('decimalSeparator', '.')
  const groupSeparator = text('groupSeparator', '.')
  const allowDecimals = boolean('allowDecimals', false)
  const decimalsLimit = number('decimalsLimit', 0, {
    min: 0,
    max: 5,
    step: 1,
  })

  return (
    <Box width={1}>
      <StoryWrapper label="Knobs example">
        <FormGroup>
          <CurrencyInput
            width={width}
            variant={variant}
            borderless={borderless}
            disabled={disabled}
            prefix={prefix}
            suffix={suffix}
            decimalSeparator={decimalSeparator}
            groupSeparator={groupSeparator}
            allowDecimals={allowDecimals}
            decimalsLimit={decimalsLimit}
          />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </StoryWrapper>
    </Box>
  )
}

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Euro input">
      <CurrencyInput
        id="input1"
        placeholder="Simple input field..."
        intlConfig={{ locale: 'de-DE', currency: 'EUR' }}
      />
    </StoryWrapper>
  </Box>
)
