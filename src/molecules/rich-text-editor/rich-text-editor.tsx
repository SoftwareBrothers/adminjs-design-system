/* eslint-disable react/require-default-props */
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'
import { EditorContent, EditorEvents, EditorOptions, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { FC, useCallback } from 'react'
import MenuBar from './menu-bar'
import { EditorWrapper } from './rich-text-editor.styled'

interface RichTextEditorProps {
  value: any
  onChange: (value: string) => void
  options?: Partial<EditorOptions>
}

const RichTextEditor: FC<RichTextEditorProps> = (props) => {
  const { value, onChange, options = {} } = props
  const handleUpdate = useCallback(({ editor }: EditorEvents['update']) => {
    onChange(editor.getHTML())
  }, [])

  const editor = useEditor({
    extensions: [
      Text,
      Typography,
      Document,
      StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ...(options?.extensions || []),
    ],
    content: value,
    onUpdate: handleUpdate,
    injectCSS: true,
    ...options,
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorWrapper>
        <EditorContent editor={editor} />
      </EditorWrapper>
    </>
  )
}

export { RichTextEditor }
export default RichTextEditor
