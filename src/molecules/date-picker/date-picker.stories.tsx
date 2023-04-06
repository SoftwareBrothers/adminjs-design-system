import React, { useState } from 'react'

import { Box, DatePicker } from '../../index.js'

const propertyTypes = {
  Date: 'date',
  DateTime: 'datetime',
}

export const Default: React.FC = (props) => {
  const [date, setDate] = useState<string | null>('2020-12-01T14:32:00.000Z')
  const { disabled, propertyType } = props as any

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
}

export default {
  title: 'DesignSystem/Molecules/DatePicker',
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    propertyType: {
      defaultValue: propertyTypes.Date,
      options: propertyTypes,
      control: { type: 'select' },
    },
  },
}
