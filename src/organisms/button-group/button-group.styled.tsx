/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { styled, css } from '@styled-components'

import { Box } from '../../atoms/box/index.js'
import { Button } from '../../atoms/button/index.js'
import { cssClass, themeGet } from '../../utils/index.js'
import { DropDownItemAction } from '../../molecules/drop-down/index.js'
import { ButtonGroupProps } from './button-group.types.js'

export const BUTTON_IN_GROUP_CLASS_NAME = cssClass('ButtonGroupItem')

export const buttonMargin = (props: Pick<ButtonGroupProps, 'size'>): ReturnType<typeof css> => {
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

export const hasHandler = (props: any): ReturnType<typeof css> | string => {
  if (!props.onClick && !props.href) {
    return css`
      &&& {
        cursor: default;
      }
    `
  }
  return ''
}

export const hasLabel = (props: any): ReturnType<typeof css> | string => {
  if (!props.hasLabel) {
    return css`
      border: none;
      padding-left: ${themeGet('space', 'md')};
      padding-right: ${themeGet('space', 'md')};
      & > .${cssClass('Icon')} {
        margin-right: 0;
      }
    `
  }
  return ''
}

export const StyledSingleButton = styled(Button)<{ hasLabel: boolean }>`
  ${hasLabel};
  ${hasHandler};
`

export const StyledDropDownItemAction = styled<any>(DropDownItemAction)`
  ${hasLabel};
`

export const StyledButtonGroup = styled(Box)`
  ${buttonMargin as any};
`
