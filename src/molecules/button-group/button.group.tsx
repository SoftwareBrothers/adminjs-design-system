/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { css } from 'styled-components'

import Box from '../../atoms/box/box'
import { ButtonProps, Button } from '../../atoms/button'
import Icon from '../../atoms/icon'
import { VariantType } from '../../theme'
import { cssClass, themeGet } from '../../utils'
import {
  DropDown,
  DropDownMenu,
  DropDownTrigger,
  DropDownItem,
  DropDownItemAction,
} from '../drop-down'

export type ButtonInGroupProps = ButtonProps & {
  icon?: string;
  label?: string | null;
  variant?: VariantType;
  href?: string;
  source?: any;
  onClick?: (event, source: any) => void;
  buttons?: Array<ButtonInGroupProps>
} & {
  className?: string
}

const BUTTON_IN_GROUP_CLASS_NAME = cssClass('ButtonGroupItem')

export type ButtonGroupProps = {
  size?: ButtonProps['size'],
  rounded?: ButtonProps['rounded'];
  buttons: Array<ButtonInGroupProps>,
}

const StyledSingleButton = styled(Button)<{hasLabel: boolean}>`
  ${(props) => (props.hasLabel ? '' : `padding-left: ${themeGet('space', 'md')(props)}`)};
  ${(props) => (props.hasLabel ? '' : `padding-right: ${themeGet('space', 'md')(props)}`)};
  & > .${cssClass('Icon')} svg {
    ${(props) => (props.hasLabel ? '' : 'margin-right: 0;')};
  }
`

const SingleButton: React.FC<ButtonInGroupProps> = (props) => {
  const { icon, label, buttons, source, onClick, ...buttonProps } = props

  return (
    <StyledSingleButton
      as="a"
      hasLabel={!!label}
      onClick={(event) => (onClick ? onClick(event, source) : undefined)}
      {...buttonProps}
    >
      {icon ? (
        <Icon icon={icon} />
      ) : ''}
      {label}
      {buttons && buttons.length && label ? (
        <Box as="span" mr="-8px" ml="md">
          <Icon icon="CaretDown" />
        </Box>
      ) : ''}
    </StyledSingleButton>
  )
}

export const DropDownItemWithButtons: React.FC<ButtonInGroupProps> = (props) => {
  const { variant, onClick, href, icon, label, buttons, source, ...rest } = props
  return (
    <DropDownItem
      colorVariant={variant}
      p={0}
    >
      <DropDownItemAction
        onClick={(event) => (onClick ? onClick(event, source) : undefined)}
        href={href}
        as="a"
        {...rest}
      >
        {buttons && buttons.length ? (
          <Icon icon="CaretLeft" ml="-24px" mr="0" />
        ) : ''}
        {icon ? <Icon icon={icon} /> : ''}
        {label}
      </DropDownItemAction>
      {buttons && buttons.length ? (
        <DropDownMenu>
          {buttons.map((button) => (
            <DropDownItemWithButtons {...button} key={button.label} />
          ))}
        </DropDownMenu>
      ) : ''}
    </DropDownItem>
  )
}

export const ButtonInGroup: React.FC<ButtonInGroupProps> = (props) => {
  const { buttons, className, ...buttonProps } = props

  if (buttons && buttons.length) {
    return (
      <DropDown stick="right" className={className}>
        <DropDownTrigger>
          <SingleButton {...props} />
        </DropDownTrigger>
        <DropDownMenu>
          {buttons.map((button) => (
            <DropDownItemWithButtons
              {...button}
              key={`${button.label}-${button.icon}`}
            />
          ))}
        </DropDownMenu>
      </DropDown>
    )
  }

  return <SingleButton {...buttonProps} className={className} />
}

const buttonMargin = (props: Pick<ButtonGroupProps, 'size'>) => {
  const { size } = props
  const margin = size === 'sm' ? 'md' : 'lg'
  return css`
    & > .${BUTTON_IN_GROUP_CLASS_NAME} {
      margin-right: ${themeGet('space', margin)};
      &:last-child {
        margin-right: 0;
      }
    }
  `
}

const StyledButtonGroup = styled(Box)`
  ${buttonMargin};
`

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { buttons, size, rounded } = props

  if (!buttons || !buttons.length) {
    return null
  }

  return (
    <StyledButtonGroup {...props}>
      {buttons.map((button, i) => (
        <ButtonInGroup
          key={`${button.label || ''}-${i}`}
          size={size}
          rounded={rounded}
          {...button}
          className={BUTTON_IN_GROUP_CLASS_NAME}
        />
      )) }
    </StyledButtonGroup>
  )
}

export {
  ButtonGroup as default,
  ButtonGroup,
}
