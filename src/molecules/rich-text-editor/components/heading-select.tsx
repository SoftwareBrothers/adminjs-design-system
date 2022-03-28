import { Level } from '@tiptap/extension-heading'
import { Editor } from '@tiptap/react'
import React, { FC } from 'react'
import MenuButton from './menu-button'

interface HeadingSelectProps {
  editor: Editor
}

const HeadingSelect: FC<HeadingSelectProps> = (props) => {
  const { editor } = props
  const headingLevels: Level[] = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {headingLevels.map((level) => (
        <MenuButton
          editor={editor}
          key={`heading.${level}`}
          name={`heading.${level}`}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          icon={`Number_${level}`}
          attributes={{ level }}
          // className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}
        />
      ))}
    </>
  )
}

export default HeadingSelect
