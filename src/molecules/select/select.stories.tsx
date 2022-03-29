import React, { useState } from 'react'
import { FormGroup } from '../..'
import Box from '../../atoms/box/box'
import StoryWrapper from '../../utils/story-wrapper'
import { Select } from './select'
import { SelectAsync } from './select-async'

export default { title: 'DesignSystem/Molecules/Select' }

export const Default: React.FC = () => {
  const [value, setValue] = useState()
  const [valueAsync, setValueAsync] = useState()
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <Box width={1}>
      <StoryWrapper label="Select example">
        <FormGroup>
          <Select value={value} onChange={(selected) => setValue(selected)} options={options} />
        </FormGroup>
      </StoryWrapper>
      <StoryWrapper label="Select async example">
        <FormGroup>
          <SelectAsync
            value={valueAsync}
            onChange={(selected) => setValueAsync(selected)}
            options={options}
          />
        </FormGroup>
      </StoryWrapper>
    </Box>
  )
}
