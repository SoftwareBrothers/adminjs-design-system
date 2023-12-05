import type { Meta, StoryFn } from '@storybook/react'
import filter from 'lodash/filter.js'
import React, { useState } from 'react'
import { PublicBaseSelectProps } from 'react-select/base'

import { Box, FormGroup } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Select, SelectAsync } from './index.js'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const Default: StoryFn<PublicBaseSelectProps<any, boolean, any>> = (props) => {
  const { isMulti } = props
  const [value, setValue] = useState()

  return (
    <Box width={1}>
      <StoryWrapper label="Select example">
        <FormGroup>
          <Select
            value={value}
            onChange={(selected) => setValue(selected)}
            options={options}
            isMulti={isMulti}
          />
        </FormGroup>
      </StoryWrapper>
    </Box>
  )
}

export const Async: StoryFn = () => {
  const [valueAsync, setValueAsync] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const loadOptions = async (inputValue: string): Promise<any[]> => {
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

const meta: Meta<typeof Select> = {
  title: 'DesignSystem/Molecules/Select',
  component: Select,
  parameters: { controls: { include: ['variant', 'isMulti'] } },
  args: {
    variant: 'default',
    isMulti: false,
  },
  argTypes: {
    variant: { options: ['default', 'filter'], control: { type: 'select' } },
    isMulti: { control: { type: 'boolean' } },
  },
}

export default meta
