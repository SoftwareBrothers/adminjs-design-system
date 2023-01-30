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

const ExtendedLink = Link.extend({
  addAttributes() {
    return {
      href: {
        default: null,
      },
      rel: {
        default: null,
      },
      target: {
        default: null,
      },
      class: {
        default: this.options.HTMLAttributes.class,
      },
    }
  },
})

const RichTextEditor: FC<RichTextEditorProps> = (props) => {
  const { value, onChange, options = {} } = props
  const handleUpdate = useCallback(({ editor }: EditorEvents['update']) => {
    onChange(editor.getHTML())
  }, [])

  const { limit, extensions = [], ...restOptions } = options

  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({ limit, mode: 'nodeSize' }),
      Image.configure({ inline: true, allowBase64: true }),
      ExtendedLink.configure({ openOnClick: false, autolink: false }),
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

export { RichTextEditor }
export default RichTextEditor
