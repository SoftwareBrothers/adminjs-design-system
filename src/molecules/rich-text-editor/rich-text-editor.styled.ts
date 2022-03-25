import styled from 'styled-components'
import Box from '../../atoms/box/box'
import { InputCSS, InputProps } from '../../atoms/input'
import { Text, TextProps } from '../../atoms/text'
import { cssClass, themeGet } from '../../utils'

export type EditorWrapperProps = TextProps & InputProps

export const EditorWrapper = styled(Text)<EditorWrapperProps>`
  ${InputCSS}

  .ProseMirror-focused {
    outline: none;
  }
`
EditorWrapper.defaultProps = {
  px: 'xl',
  py: 'xl',
  className: cssClass('EditorWrapper'),
}

export const MenuBarWrapper = styled(Box)`
  border: 1px solid ${themeGet('colors', 'inputBorder')};
  border-bottom: none;

  & .${cssClass('Icon')}:hover {
    cursor: pointer;
  }

  & .${cssClass('Icon')} svg {
    fill: ${themeGet('colors', 'grey100')};
  }

  & .active .${cssClass('Icon')} svg {
    fill: ${themeGet('colors', 'primary100')};
  }
`

MenuBarWrapper.defaultProps = {
  px: 'md',
  py: 'md',
}

export default { EditorWrapper, MenuBarWrapper }
