import { useState } from 'react'
import parseISO from 'date-fns/parseISO'
import { formatDateProperty, PropertyType } from '../../utils'

const useDatePicker = ({ value, propertyType, disabled, onChange }:
{
  onChange: (date:string) => void,
  value?:string|Date,
  propertyType?:PropertyType,
  disabled?:boolean
}): {
  dateString?: string,
  date?: Date,
  isCalendarVisible: boolean,
  setCalendarVisible: (isVisible: boolean) => void,
  onDateChange: (newDate: Date) => void
} => {
  const [isCalendarVisible, setCalendarVisible] = useState(false)

  let date: Date | undefined
  let dateString: string | undefined
  if (value && value.constructor.name !== 'Date') {
    const dateStringValue = value as string

    let dateNum: Date | undefined = parseISO(dateStringValue)
    if (dateNum.toString() === 'Invalid Date') dateNum = undefined
    if (dateNum) {
      date = new Date(dateNum)
      dateString = formatDateProperty(date, propertyType)
    }
  } else if (value && value.constructor.name === 'Date') {
    dateString = formatDateProperty(value as Date, propertyType)
  }
  const onDateChange = (newDate: Date): void => {
    if (!disabled) {
      onChange(formatDateProperty(newDate, propertyType))
    }
  }

  return { dateString, date, isCalendarVisible, setCalendarVisible, onDateChange }
}

export default useDatePicker
