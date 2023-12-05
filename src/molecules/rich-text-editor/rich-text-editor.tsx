/* eslint-disable react/require-default-props */
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'
// Note: Types for @tiptap/react are temporarily ignored due to:
// https://github.com/ueberdosis/tiptap/issues/3488
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { FC, useCallback } from 'react'

import MenuBar from './components/menu-bar.jsx'
import { EditorWrapper } from './rich-text-editor.styled.jsx'

interface EditorOptions {
  [key: string]: any;
}
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
  const handleUpdate = useCallback(({ editor }) => {
    onChange(editor.getHTML())
  }, [])

  const { limit, extensions = [], ...restOptions } = options

  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({ limit, mode: 'nodeSize' }),
      Image,
      Link.configure({ openOnClick: false }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
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

RichTextEditor.displayName = 'RichTextEditor'

export { RichTextEditor }
export default RichTextEditor
