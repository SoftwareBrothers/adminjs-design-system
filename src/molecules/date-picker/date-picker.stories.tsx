import React, { useState } from 'react'
import { DatePicker } from '../../index'

const propertyTypes = {
  Date: 'date',
  DateTime: 'datetime',
}

export const Default: React.FC = (props) => {
  const [date, setDate] = useState<string>('2020-12-01T14:32:00.000Z')
  const { disabled, propertyType } = props as any

  return (
    <DatePicker
      onChange={setDate}
      value={date}
      disabled={disabled}
      propertyType={propertyType}
    />
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
