/* eslint-disable react/require-default-props */
import { Editor } from '@tiptap/react'
import React, { FC } from 'react'

import { MenuBarWrapper } from '../rich-text-editor.styled.js'
import useTiptapCommands from '../useTiptapCommands.js'
import HeadingSelect from './heading-select.js'
import ImageButton from './image-button.js'
import MenuButton from './menu-button.js'

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
