import type { ComponentMeta } from '@storybook/react'
import filter from 'lodash/filter.js'
import React, { FC, useState } from 'react'

import { FormGroup } from '../../index.js'
import { Box } from '../../atoms/box/index.js'
import StoryWrapper from '../../utils/story-wrapper.js'
import { Select } from './select.js'
import { SelectAsync } from './select-async.js'

export default {
  title: 'DesignSystem/Molecules/Select',
  component: Select,
  parameters: { controls: { include: ['variant'] } },
  argTypes: {
    variant: {
      defaultValue: 'default',
      options: ['default', 'filter'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Select>

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
