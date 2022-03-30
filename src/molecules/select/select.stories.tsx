import filter from 'lodash/filter'
import React, { FC, useState } from 'react'
import { FormGroup } from '../..'
import Box from '../../atoms/box'
import StoryWrapper from '../../utils/story-wrapper'
import { Select } from './select'
import { SelectAsync } from './select-async'

export default { title: 'DesignSystem/Molecules/Select' }

export const Default: FC = () => {
  const [value, setValue] = useState()
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
    </Box>
  )
}

export const Async: FC = () => {
  const [valueAsync, setValueAsync] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const loadOptions = async (inputValue: string): Promise<any[]> => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]

    setIsLoading(true)
    const found = filter(options, ({ value }) => value.includes(inputValue))
    setIsLoading(false)
    return Promise.resolve(found)
  }

  return (
    <Box width={1}>
      <StoryWrapper label="Select async example">
        <FormGroup>
          <SelectAsync
            value={valueAsync}
            onChange={(selected) => setValueAsync(selected)}
            loadOptions={loadOptions}
            isLoading={isLoading}
          />
        </FormGroup>
      </StoryWrapper>
    </Box>
  )
}
