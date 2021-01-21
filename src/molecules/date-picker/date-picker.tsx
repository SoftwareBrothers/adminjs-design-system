import React from 'react'
import ReactDatePicker from 'react-datepicker'
import type { ReactDatePickerProps } from 'react-datepicker'
import styled from 'styled-components'

import styles from '../../utils/datepicker.styles'
import { Input } from '../../atoms/input'
import { Button } from '../../atoms/button'
import { Icon } from '../../atoms/icon'
import { InputGroup } from '../form-group'
import { cssClass } from '../../utils/css-class'
import { PropertyType } from '../../utils'
import useDatePicker from './useDatePicker'

const DatePickerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: ${({ theme }): string => theme.space.xxl};
`

const StyledDatePicker = styled(InputGroup)`
  ${styles};
  position: relative;

  &.active ${Input}, &.active ${Button} {
    z-index: 101;
  }
  
  & .react-datepicker {
    border-radius: 0;
    border: 1px solid ${({ theme }): string => theme.colors.primary100};
    padding: ${({ theme }): string => theme.space.default};
    font-family: ${({ theme }): string => theme.font};
    z-index: 101;
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

const Overlay = styled.div`
  opacity: 0;
  background: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;

  &.hidden {
    display: none;
  }
`

type CustomProps = Partial<Omit<ReactDatePickerProps, 'value' | 'disabled' | 'onChange'>>

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
   * on change callback taking string as a date
   */
  onChange: (date: string) => void;
  /**
   * property type, could be either 'date' or 'datetime'
   */
  propertyType?: PropertyType;
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
 * import { DatePicker, DatePickerProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @see https://reactdatepicker.com/
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-datepicker--default Storybook}
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
  const { value, onChange, disabled, propertyType, ...other } = props
  const {
    date,
    dateString,
    setCalendarVisible,
    isCalendarVisible,
    onDateChange,
  } = useDatePicker({ value, disabled, propertyType, onChange })

  return (
    <>
      <Overlay
        onClick={(): void => setCalendarVisible(false)}
        className={isCalendarVisible ? 'visible' : 'hidden'}
      />
      <StyledDatePicker className={cssClass('DatePicker', isCalendarVisible ? 'active' : 'normal')}>
        <Input
          value={dateString || ''}
          onChange={(event): void => onChange(event.target.value)}
          onFocus={(): void => setCalendarVisible(true)}
          disabled={disabled}
        />
        <Button
          variant="primary"
          type="button"
          size="icon"
          disabled={disabled}
          onClick={() => setCalendarVisible(!isCalendarVisible)}
        >
          <Icon icon="Calendar" />
        </Button>
        {isCalendarVisible && (
          <DatePickerWrapper>
            <ReactDatePicker
              selected={date}
              onChange={onDateChange}
              inline
              showTimeInput={propertyType === 'datetime'}
              {...other}
            />
          </DatePickerWrapper>
        )}
      </StyledDatePicker>
    </>
  )
}

export { DatePicker }
export default DatePicker
