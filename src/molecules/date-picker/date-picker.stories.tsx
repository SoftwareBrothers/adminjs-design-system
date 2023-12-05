import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Box } from '../../index.js'
import { DatePicker, DatePickerProps } from './index.js'

const propertyTypes = {
  Date: 'date',
  DateTime: 'datetime',
}

export const Default: StoryObj<DatePickerProps> = {
  render: (props) => {
    const [date, setDate] = useState<string | null>('2020-12-01T14:32:00.000Z')
    const { disabled, propertyType } = props

    const handleChange = (value) => {
      if (value) setDate(value)
      else setDate(null)
    }

    return (
      <Box height="320px">
        <DatePicker
          onChange={handleChange}
          value={date ?? ''}
          disabled={disabled}
          propertyType={propertyType}
        />
      </Box>
    )
  },
}

const meta: Meta<typeof DatePicker> = {
  title: 'DesignSystem/Molecules/DatePicker',
  component: DatePicker,
  args: {
    disabled: false,
    propertyType: propertyTypes.Date,
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    propertyType: { options: propertyTypes, control: { type: 'select' } },
  },
}

export default meta
