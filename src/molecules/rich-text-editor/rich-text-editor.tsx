import { EditorContent, useEditor, EditorEvents } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import React, { FC, useCallback } from 'react'
import { EditorWrapper } from './rich-text-editor.styled'
import MenuBar from './menu-bar'

interface RichTextEditorProps {
  value: any
  onChange: (value: string) => void
}

const RichTextEditor: FC<RichTextEditorProps> = (props) => {
  const { value, onChange } = props
  const handleUpdate = useCallback(({ editor }: EditorEvents['update']) => {
    onChange(editor.getHTML())
  }, [])

  const editor = useEditor({
    extensions: [Text, Typography, Document, StarterKit],
    content: value,
    onUpdate: handleUpdate,
    injectCSS: true,
  })

  return (
    <EditorWrapper>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </EditorWrapper>
  )
}

export { RichTextEditor }
export default RichTextEditor
