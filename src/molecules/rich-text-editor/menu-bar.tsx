/* eslint-disable react/require-default-props */
import { Editor } from '@tiptap/react'
import React, { FC, useCallback } from 'react'
import Icon from '../../atoms/icon'
import Text from '../../atoms/text'
import { MenuBarWrapper } from './rich-text-editor.styled'
import useTiptapCommands from './useTiptapCommands'

interface MenuBarProps {
  editor: Editor | null
}

const MenuBar: FC<MenuBarProps> = ({ editor }) => {
  if (!editor) return null

  const commands = useTiptapCommands({ editor })

  return (
    <MenuBarWrapper>
      {commands.map(({ name, onClick, icon }) => (
        <MenuButton editor={editor} key={name} name={name} onClick={onClick} icon={icon} />
      ))}
    </MenuBarWrapper>
  )
}

interface MenuButtonProps {
  editor: Editor
  name: string
  onClick: () => void
  icon?: string
  attributes?: Record<string, any>
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const { name, editor, onClick, icon, attributes = {} } = props

  const isActive = useCallback(
    () => (editor.isActive(name, attributes) ? 'active' : ''),
    [name, attributes],
  )

  return (
    <Text as="span" onClick={onClick} className={isActive()} size="icon" mx="md">
      {icon ? <Icon icon={icon} /> : name}
    </Text>
  )
}

export default MenuBar
