/* eslint-disable react/require-default-props */
import CharacterCount from '@tiptap/extension-character-count'
import Code from '@tiptap/extension-code'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'
import { EditorContent, EditorEvents, EditorOptions, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { FC, useCallback } from 'react'
import MenuBar from './components/menu-bar'
import { EditorWrapper } from './rich-text-editor.styled'

interface RichTextEditorOptions extends Partial<EditorOptions> {
  limit?: number
}

interface RichTextEditorProps {
  value: any
  onChange: (value: string) => void
  options?: RichTextEditorOptions
}

const RichTextEditor: FC<RichTextEditorProps> = (props) => {
  const { value, onChange, options = {} } = props
  const handleUpdate = useCallback(({ editor }: EditorEvents['update']) => {
    onChange(editor.getHTML())
  }, [])

  const { limit, extensions = [], ...restOptions } = options

  const editor = useEditor({
    extensions: [
      CharacterCount.configure({ limit, mode: 'nodeSize' }),
      Code,
      Document,
      Heading,
      Image,
      Link.configure({ openOnClick: false }),
      StarterKit,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Text,
      TextAlign.configure({ types: ['heading', 'paragraph', 'image'] }),
      Typography,
      ...extensions,
    ],
    content: value,
    onUpdate: handleUpdate,
    injectCSS: true,
    ...restOptions,
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorWrapper>
        <EditorContent editor={editor} />
        {options.limit && (
          <span className="characterCount">
            {value?.length}/{limit}
          </span>
        )}
      </EditorWrapper>
    </>
  )
}

export { RichTextEditor }
export default RichTextEditor
