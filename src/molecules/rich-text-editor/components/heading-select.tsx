import { Editor } from '@tiptap/react'
import React, { FC } from 'react'

import MenuButton from './menu-button.jsx'

type Level = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingSelectProps {
  editor: Editor
}

const HeadingSelect: FC<HeadingSelectProps> = (props) => {
  const { editor } = props
  const headingLevels: Level[] = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {headingLevels.map((level) => {
        const name = `heading.${level}`
        return (
          <MenuButton
            editor={editor}
            key={name}
            name={name}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            icon="FontSize"
            attributes={{ level }}
          >{` ${level}`}
          </MenuButton>
        )
      })}
      <MenuButton
        editor={editor}
        name="paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        icon="Paragraph"
      />
    </>
  )
}

export default HeadingSelect
