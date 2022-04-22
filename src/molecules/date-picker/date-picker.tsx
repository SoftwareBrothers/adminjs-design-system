import React, { useMemo } from 'react'
import ReactDatePicker from 'react-datepicker'
import type { ReactDatePickerProps } from 'react-datepicker'
import styled from 'styled-components'
import MaskedInput, { MaskedInputProps } from 'react-text-mask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import styles from '../../utils/datepicker.styles'
import { Icon } from '../../atoms/icon'
import { PropertyType } from '../../utils'
import { Box } from '../../atoms/box/box'
import { cssClass } from '../../utils/css-class'

const DatePickerIcon = styled(Icon)`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.white};
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  min-width: 34px;
  width: auto;
`

const StyledDatePicker = styled(Box)`
  ${styles};
  position: relative;

  & .react-datepicker-wrapper {
    width: 100%;
    box-sizing: border-box;
    border: ${({ theme }) => `1px solid ${theme.colors.grey40}`};
    padding: 4px 8px;
    font-size: 14px;
    line-height: 24px;
  }

  & .react-datepicker-wrapper input {
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
    color: ${({ theme }) => theme.colors.grey80};

    &:focus-visible {
      outline: none;
    }
  }

  & .react-datepicker {
    border-radius: 0;
    padding: ${({ theme }): string => theme.space.default};
    font-family: ${({ theme }): string => theme.font};
    z-index: 101;

    &:focus-visible {
      outline: none;
    }
  }

  & .react-datepicker__navigation--next {
    border-left-color: ${({ theme }): string => theme.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--next:hover {
    border-left-color: ${({ theme }): string => theme.colors.primary100};
  }

  & .react-datepicker__navigation--previous {
    border-right-color: ${({ theme }): string => theme.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--previous:hover {
    border-right-color: ${({ theme }): string => theme.colors.primary100};
  }

  & .react-datepicker__navigation {
    outline: none;
  }

  & .react-datepicker__year-read-view--down-arrow {
    top: 5px;
  }

  & .react-datepicker__header {
    background: ${({ theme }): string => theme.colors.white};
    font-size: ${({ theme }): string => theme.fontSizes.default};
    border: none;
  }

  & .react-datepicker__current-month {
    font-weight: normal;
    padding-bottom: ${({ theme }): string => theme.space.lg};
  }

  & .react-datepicker__month {
    margin-top: 0;
  }

  & .react-datepicker__day-name {
    color: ${({ theme }): string => theme.colors.primary60};
  }

  & .react-datepicker__day--outside-month {
    color: ${({ theme }): string => theme.colors.grey40};
  }

  & .react-datepicker__day--today.react-datepicker__day--keyboard-selected {
    color: ${({ theme }): string => theme.colors.white};
  }

  & .react-datepicker__day--selected {
    color: ${({ theme }): string => theme.colors.white};
  }

  & .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--today) {
    background: none;
    color: ${({ theme }): string => theme.colors.grey100};
  }

  & .react-datepicker__day:hover,
  & .react-datepicker__day {
    border-radius: 15px;
  }

  & .react-datepicker__day--selected {
    background: ${({ theme }): string => theme.colors.primary100};
    border-radius: 15px;
    color: ${({ theme }): string => theme.colors.white};
  }
`

const parseDateSafely = (newDate: any) => {
  const timestamp = Date.parse(newDate)

  if (!Number.isNaN(timestamp)) {
    return new Date(timestamp)
  }

  return null
}

// https://github.com/text-mask/text-mask/issues/951
const convertDateFnsFormatToDatePipeFormat = (format: string) => {
  const tokens = format.split('')

  return tokens.map((char) => {
    if (char === 'M') return 'm'
    if (char === 'm') return 'M'
    return char
  }).join('')
}

const defaultDateProps = {
  date: {
    format: 'yyyy/MM/dd',
    placeholder: 'YYYY/MM/DD',
    inputMask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/],
  },
  datetime: {
    format: 'yyyy/MM/dd HH:mm',
    placeholder: 'YYYY/MM/DD HH:mm',
    inputMask: [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/],
  },
}

type CustomProps = Partial<Omit<ReactDatePickerProps, 'value' | 'disabled' | 'onChange'>>
type DateMaskOverride = ({
  regex: string,
  raw: undefined,
} | {
  raw: string,
  regex: undefined,
} | string)[]
type InputMaskProps = Omit<MaskedInputProps, 'mask'> & { mask?: DateMaskOverride }

const parseCustomMask = (mask: DateMaskOverride) => mask.map((el) => {
  if (typeof el === 'string') return el
  if (el.raw) return el.raw
  if (!el.regex) throw new Error('Invalid input mask')

  return new RegExp(el.regex)
})

const getDateInputProps = (
  propertyType = 'datetime',
  props: Pick<DatePickerProps, 'placeholderText' | 'dateFormat' | 'inputMask'>,
) => {
  const { dateFormat, placeholderText, inputMask } = props
  const defaultProps = defaultDateProps[propertyType]
  const format = dateFormat ?? defaultProps.format
  const placeholder = placeholderText ?? defaultProps.placeholder
  const mask = inputMask?.mask
    ? parseCustomMask(inputMask.mask)
    : defaultProps.inputMask
  const dateFormatPipe = createAutoCorrectedDatePipe(convertDateFnsFormatToDatePipeFormat(format))

  return { format, dateFormatPipe, placeholder, parsedMask: mask }
}

/**
 * Props for DatePicker
 *
 * @memberof DatePicker
 * @alias DatePickerProps
 * @property {any} {...}    Any custom props to pass down to the ReactDatePicker
 * @see https://reactdatepicker.com/
 */
export type DatePickerProps = CustomProps & {
  /**
   * If datepicker should be disabled
   */
  disabled?: boolean;
  /**
   * selected date
   */
  value?: string | Date;
  /**
   * on change callback taking ISO string as a date
   */
  onChange: (date: string | null) => void;
  /**
   * property type, could be either 'date' or 'datetime'
   */
  propertyType?: PropertyType;
  /**
   * input mask props for text input in case you want to use it, see: https://github.com/text-mask/text-mask
   */
  inputMask?: InputMaskProps;
}

/**
 * @classdesc
 *
 * <img src="components/date-picker.png" />
 *
 *
 * Component responsible for showing dates. It is a wrapper to
 * [react datepicker]{@link https://reactdatepicker.com/}.
 *
 * ### Usage
 *
 * ```javascript
 * import { DatePicker, DatePickerProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @see https://reactdatepicker.com/
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-datepicker--default Storybook}
 * @see DatePickerProps
 * @hideconstructor
 *
 * @example
 * return (
 * <Box width={1/2} height="300px">
 *   <DatePicker onChange={(date) => console.log(date)}/>
 * </Box>
 * )
 * @section design-system
 */
const DatePicker: React.FC<DatePickerProps> = (props) => {
  const {
    value,
    onChange,
    disabled,
    propertyType,
    inputMask = {},
    placeholderText,
    dateFormat,
    ...other
  } = props
  const { mask: _mask, ...otherInputMaskProps } = inputMask as InputMaskProps

  const handleChange = (newDate: Date | null) => {
    onChange(parseDateSafely(newDate)?.toISOString?.() || '')
  }

  const dateValue = useMemo(() => parseDateSafely(value), [value])
  const { dateFormatPipe, format, parsedMask, placeholder } = getDateInputProps(
    propertyType,
    { dateFormat, inputMask, placeholderText },
  )

  return (
    <StyledDatePicker className={cssClass('DatePicker')}>
      <ReactDatePicker
        customInput={(
          <MaskedInput
            pipe={dateFormatPipe}
            mask={parsedMask}
            keepCharPositions
            guide
            placeholder={placeholder}
            disabled={disabled}
            {...otherInputMaskProps}
          />
        )}
        selected={dateValue}
        onChange={handleChange}
        showTimeInput={propertyType === 'datetime'}
        dateFormat={format}
        disabled={disabled}
        {...other}
      />
      <DatePickerIcon icon="Calendar" color="white" />
    </StyledDatePicker>
  )
}

export { DatePicker }
export default DatePicker
