import { EditorContent, useEditor, EditorEvents } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { FC, useCallback } from 'react'
import { EditorWrapper } from './rich-text-editor.styled'

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
    extensions: [StarterKit],
    content: value,
    onUpdate: handleUpdate,
  })

  return (
    <EditorWrapper>
      <EditorContent editor={editor} />
    </EditorWrapper>
  )
}

export default RichTextEditor
