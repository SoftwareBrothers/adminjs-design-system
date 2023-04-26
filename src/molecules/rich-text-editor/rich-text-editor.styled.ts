import styled from 'styled-components'
import Box from '../../atoms/box/box'
import { InputCSS, InputProps } from '../../atoms/input'
import { Text, TextProps } from '../../atoms/text'
import { cssClass, themeGet } from '../../utils'

export type EditorWrapperProps = TextProps & InputProps

export const EditorWrapper = styled(Text)<EditorWrapperProps>`
  position: relative;
  ${InputCSS}

  .ProseMirror-focused {
    outline: none;
  }

  .characterCount {
    position: absolute;
    bottom: ${themeGet('space', 'md')};
    right: ${themeGet('space', 'lg')};
    color: ${themeGet('colors', 'grey40')};
  }

  & table {
    table-layout: fixed;
  }

  & table, & tr, & td, & th {
    border: 2px solid black !important;
  }

  & th {
    background: #e6e6e6;
  }

  & .selectedCell {
    background: rgba(0, 0, 255, 0.1);
  }
`
EditorWrapper.defaultProps = {
  px: 'xl',
  py: 'xl',
  className: cssClass('EditorWrapper'),
}

export const MenuBarWrapper: any = styled(Box)`
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

export const TableBubbleMenu = styled(Box)`
  background: #fff;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-radius: 8px;

  .menuGroups {
    display: flex;
    gap: 50px;
  }

  .menuGroup {
    position: relative;
  }

  .menuGroup .title {
    padding: 16px;
    cursor: pointer;
  }

  .menuGroup .content {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 300px;

    transform: translateX(-50%);

    padding: 16px;
    background: #fff;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 8px;
  }

  .menuGroup:hover .content {
    display: block;
  }

  .menuGroup .content > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    cursor: pointer;

    transition: all 0.4s;
  }

  .menuGroup .content > div:hover {
    background: #e6e6e6;
  }

  .deleteTable {
    color: #fff;
    background: #e35959;
  }
  
  .deleteTable:hover {
    background: #b00000 !important;
  }
`

MenuBarWrapper.defaultProps = {
  px: 'md',
  py: 'md',
  className: cssClass('MenuBarWrapper'),
}
