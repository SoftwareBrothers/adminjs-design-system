/* eslint-disable react/require-default-props */
import React, { FC, useCallback } from 'react'
import { Editor } from '@tiptap/react'
import { Button } from '../../atoms/button'
import Box from '../../atoms/box/box'
import Icon from '../../atoms/icon'

interface MenuButtonProps {
  editor: Editor
  name: string
  command: () => void | boolean
  icon?: string
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const { name, editor, command, icon } = props

  const handleClick = useCallback(() => command(), [command])
  const isActive = useCallback(
    (activeName: string, attributes?: Record<string, any>) => {
      if (editor.isActive(activeName, attributes)) return 'primary'
      return 'text'
    },
    [name, editor],
  )

  return (
    <Button
      type="button"
      onClick={handleClick}
      variant={isActive(name)}
      size="icon"
      ml="md"
      rounded
      color="grey100"
    >
      {icon ? <Icon icon={icon} /> : name}
    </Button>
  )
}

interface MenuBarProps {
  editor: Editor | null
}

const MenuBar: FC<MenuBarProps> = ({ editor }) => {
  const isActive = useCallback(
    (name: string, attributes?: Record<string, any>) => {
      if (editor) return editor.isActive(name, attributes) ? 'primary' : 'text'
      return ''
    },
    [editor],
  )

  if (!editor) {
    return null
  }

  const commands = [
    {
      name: 'bold',
      command: () => editor.chain().focus().toggleBold().run(),
      icon: 'TextBold',
    },
    {
      name: 'italic',
      command: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      name: 'strike',
      command: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      name: 'code',
      command: () => editor.chain().focus().toggleCode().run(),
    },
    {
      name: 'paragraph',
      command: () => editor.chain().focus().setParagraph().run(),
    },
    {
      name: 'heading',
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      name: 'bulletList',
      command: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      name: 'orderedList',
      command: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      name: 'blockquote',
      command: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      name: 'horizontal rule',
      command: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      name: 'hard break',
      command: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      name: 'undo',
      command: () => editor.chain().focus().undo().run(),
    },
    {
      name: 'redo',
      command: () => editor.chain().focus().redo().run(),
    },
    {
      name: 'clear nodes',
      command: () => editor.chain().focus().clearNodes().run(),
    },
    {
      name: 'clear marks',
      command: () => editor.chain().focus().unsetAllMarks().run(),
    },
  ]

  return (
    <Box>
      {editor
        && commands.map((c) => (
          <MenuButton
            editor={editor}
            key={c.name}
            name={c.name}
            command={c.command}
            icon={c.icon}
          />
        ))}
    </Box>
  )
}

export default MenuBar
