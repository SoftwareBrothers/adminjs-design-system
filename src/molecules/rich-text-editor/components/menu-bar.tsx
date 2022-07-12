/* eslint-disable react/require-default-props */
import { Editor } from '@tiptap/react'
import React, { FC } from 'react'
import ImageButton from './image-button'
import MenuButton from './menu-button'

import { MenuBarWrapper } from '../rich-text-editor.styled'
import useTiptapCommands from '../useTiptapCommands'
import HeadingSelect from './heading-select'

interface MenuBarProps {
  editor: Editor | null
}

const MenuBar: FC<MenuBarProps> = ({ editor }) => {
  const commands = useTiptapCommands({ editor })

  if (!editor) return null

  return (
    <MenuBarWrapper>
      <HeadingSelect editor={editor} />
      {commands.map(({ name, onClick, icon }) => (
        <MenuButton editor={editor} key={name} name={name} onClick={onClick} icon={icon} />
      ))}
      <ImageButton editor={editor} />
    </MenuBarWrapper>
  )
}

export default MenuBar
