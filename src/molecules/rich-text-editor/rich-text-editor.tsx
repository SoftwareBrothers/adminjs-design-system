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
import Youtube from '@tiptap/extension-youtube'
import { BubbleMenu, EditorContent, EditorEvents, EditorOptions, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BubbleMenuExtension from '@tiptap/extension-bubble-menu'
import React, { FC, useCallback } from 'react'
import MenuBar from './components/menu-bar'
import { TableBubbleMenu, EditorWrapper } from './rich-text-editor.styled'
import Icon from '../../atoms/icon'

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
      Table.configure({
        // resizable: true,
        allowTableNodeSelection: true,
      }),
      TableCell,
      TableHeader,
      TableRow,
      TextAlign.configure({ types: ['heading', 'paragraph', 'image'] }),
      Typography,
      Youtube,
      BubbleMenuExtension.configure({
        pluginKey: 'tableBubbleMenu',
        shouldShow: ({ editor, view, state, oldState, from, to }) => {
          return editor.isActive('CellSelection')
        },
      }),
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
        {editor && (
          <BubbleMenu editor={editor} pluginKey="tableBubbleMenu">
            <TableBubbleMenu>
              <div className="menuGroups">
                <div className="menuGroup">
                  <div className="title">
                    <Icon icon="Row" />
                    <Icon icon="CaretDown" />
                  </div>
                  <div className="content">
                    <div
                      onClick={() => editor.commands.addRowBefore()}
                      aria-hidden="true"
                    >
                      <Icon icon="OpenPanelFilledTop" />
                      addRowBefore
                    </div>
                    <div
                      onClick={() => editor.commands.addRowAfter()}
                      aria-hidden="true"
                    >
                      <Icon icon="OpenPanelFilledBottom" />
                      addRowAfter
                    </div>
                    <div
                      onClick={() => editor.commands.deleteRow()}
                      aria-hidden="true"
                    >
                      <Icon icon="RowDelete" />
                      deleteRow
                    </div>
                    <div
                      onClick={() => editor.commands.mergeOrSplit()}
                      aria-hidden="true"
                    >
                      <Icon icon="TableSplit" />
                      merge or split
                    </div>
                  </div>
                </div>
                <div className="menuGroup">
                  <div className="title">
                    <Icon icon="Column" />
                    <Icon icon="CaretDown" />
                  </div>
                  <div className="content">
                    <div
                      onClick={() => editor.commands.addColumnBefore()}
                      aria-hidden="true"
                    >
                      <Icon icon="OpenPanelFilledLeft" />
                      addColumnBefore
                    </div>
                    <div
                      onClick={() => editor.commands.addColumnAfter()}
                      aria-hidden="true"
                    >
                      <Icon icon="OpenPanelFilledRight" />
                      addColumnAfter
                    </div>
                    <div
                      onClick={() => editor.commands.deleteColumn()}
                      aria-hidden="true"
                    >
                      <Icon icon="ColumnDelete" />
                      deleteColumn
                    </div>
                    <div
                      onClick={() => editor.commands.mergeOrSplit()}
                      aria-hidden="true"
                    >
                      <Icon icon="TableSplit" />
                      merge or split
                    </div>
                  </div>
                </div>
                <div className="menuGroup">
                  <div className="title">
                    More
                    <Icon icon="CaretDown" />
                  </div>
                  <div className="content">
                    <div
                      onClick={() => editor.commands.toggleHeaderRow()}
                      aria-hidden="true"
                    >
                      <Icon icon="Tools" />
                      Toggle header row
                    </div>
                    <div
                      onClick={() => editor.commands.toggleHeaderColumn()}
                      aria-hidden="true"
                    >
                      <Icon icon="Tools" />
                      Toggle header column
                    </div>
                    <div
                      onClick={() => editor.commands.toggleHeaderCell()}
                      aria-hidden="true"
                    >
                      <Icon icon="Tools" />
                      Toggle header cell
                    </div>
                    <div
                      onClick={() => editor.commands.fixTables()}
                      aria-hidden="true"
                    >
                      <Icon icon="Tools" />
                      Fix Tables
                    </div>
                    <div
                      onClick={() => {
                        const text = 'Are you sure that you want to delete this table?'
                        if (confirm(text)) {
                          editor.commands.deleteTable()
                        }
                      }}
                      aria-hidden="true"
                      className="deleteTable"
                    >
                      <Icon icon="TrashCan" />
                      Delete Table
                    </div>
                  </div>
                </div>
              </div>
            </TableBubbleMenu>
          </BubbleMenu>
        )}
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
