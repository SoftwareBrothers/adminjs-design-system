import { SpaceProps, space } from 'styled-system'
import { styled, css } from '@styled-components'

import { Label } from '../../atoms/label/index.js'
import { Button } from '../../atoms/button/index.js'
import { Input } from '../../atoms/input/index.js'
import { CurrencyInput } from '../../atoms/currency-input/index.js'
import { Link } from '../../atoms/link/index.js'
import InputGroup from './input-group.jsx'

const formGroupDisabledCSS = css`
  color: ${({ theme }) => theme.colors.grey40};
`

const formGroupWithErrorCSS = css`
  color: ${({ theme }) => theme.colors.error};
  ${Input}, ${CurrencyInput} {
    color: ${({ theme }) => theme.colors.error};
    border-color: ${({ theme }) => theme.colors.error};
  }
  &&& ${Label} {
    color: ${({ theme }) => theme.colors.error};
    &:before {
      color: ${({ theme }) => theme.colors.error};
    }
  }
  &&& ${Label}, &&& ${Button}, &&& ${Link} {
    border-color: ${({ theme }) => theme.colors.error};
  }
`

/**
 * Props for FormGroup. Apart from props defined here FormGroup supports also all {@link SpaceProps}
 * @alias FormGroupProps
 * @memberof FormGroup
 */
export type FormGroupProps = SpaceProps & {
  /**
   * If given FormGroup has error
   */
  error?: boolean;
  /**
   * If given FormGroup should be disabled
   */
  disabled?: boolean;
  /**
   * if given form group should be rendered in a filter
   */
  variant?: 'filter';
}

/**
 * @classdesc
 *
 * <img src="components/form-group.png" />
 *
 * FormGroup comes with other, from-related components like: FormMessage and InputGroup.
 * Together they allow you to build form elements.
 *
 * ### Usage
 *
 * ```javascript
 * import { FormGroup, FormGroupProps, InputGroup, FormMessage } from '@adminjs/design-system'
 * ```
 *
 * @hideconstructor
 * @component
 * @see FormGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-formgroup--default Storybook}
 * @subcategory Molecules
 * @example <caption>Example 1: input with all sorts of buttons</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="contained" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="contained" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 2: the same input with errors</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup error>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="contained" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="contained" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 3: disabled field</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup disabled>
 *     <Label>Disabled field</Label>
 *     <InputGroup>
 *       <Input disabled />
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 4: with a link</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label>Some form data with button link</Label>
 *     <InputGroup>
 *       <Input />
 *       <Link href="#someHref">This is link</Link>
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @section design-system
 */
export const FormGroup = styled.div<FormGroupProps>`
  width: 100%;
  ${({ error }): any => (error ? formGroupWithErrorCSS : '')};
  ${({ disabled }): any => (disabled ? formGroupDisabledCSS : '')};
  ${space};

  & > ${Input}, & > ${CurrencyInput} {
    width: 100%;
  }

  & ${Input}, & ${CurrencyInput} {
    ${({ variant, theme }): string => (variant === 'filter' ? `border-color: ${theme.colors.inputBorder}` : '')};
    ${({ variant, theme }): string => (variant === 'filter' ? `color: ${theme.colors.text}` : '')};
  }

  & ${InputGroup} {
    ${Label}, ${Button}:last-child, ${Link}:last-child {
      ${({ variant, theme }): string => (variant === 'filter' ? `border-color: ${theme.colors.inputBorder}` : '')};
    }
  }

  & [class*="DatePicker"] > .react-datepicker-wrapper {
    ${({ variant, theme }): string => (variant === 'filter' ? `border-color: ${theme.colors.inputBorder}` : '')};
  }
  & [class*="DatePicker"] > .react-datepicker-wrapper input {
    ${({ variant, theme }): string => (variant === 'filter' ? `color: ${theme.colors.text}` : '')};
  }
`

FormGroup.defaultProps = {
  mb: 'lg',
}
FormGroup.displayName = 'FormGroup'

export default FormGroup
