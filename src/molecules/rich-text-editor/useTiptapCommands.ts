import { Editor } from '@tiptap/react'

interface TiptapCommand {
  name: string
  onClick: () => void
  icon: string
  attributes?: Record<string, any>
}

interface useTiptapCommandsProps {
  editor: Editor | null
}

const useTiptapCommands = (props: useTiptapCommandsProps): TiptapCommand[] => {
  const { editor } = props

  if (!editor) return []

  function command(name: string, callback: () => void, icon: string): TiptapCommand {
    return {
      name,
      onClick: callback,
      icon,
    }
  }

  return [
    command('bold', () => editor.chain().focus().toggleBold().run(), 'TextBold'),
    command('italic', () => editor.chain().focus().toggleItalic().run(), 'TextItalic'),
    command('strike', () => editor.chain().focus().toggleStrike().run(), 'TextStrikethrough'),
    command('code', () => editor.chain().focus().toggleCode().run(), 'Code'),

    command('textAlign.left', () => editor.chain().focus().setTextAlign('left').run(), 'TextAlignLeft'),
    command('textAlign.center', () => editor.chain().focus().setTextAlign('center').run(), 'TextAlignCenter'),
    command('textAlign.right', () => editor.chain().focus().setTextAlign('right').run(), 'TextAlignRight'),
    command('textAlign.justify', () => editor.chain().focus().setTextAlign('justify').run(), 'TextAlignJustify'),

    command('bulletList', () => editor.chain().focus().toggleBulletList().run(), 'ListBulleted'),
    command('orderedList', () => editor.chain().focus().toggleOrderedList().run(), 'ListNumbered'),
    command('blockquote', () => editor.chain().focus().toggleBlockquote().run(), 'Quotes'),
    command('link', () => editor.chain().focus().unsetLink().run(), 'Unlink'),

    command('hard break', () => editor.chain().focus().setHardBreak().run(), 'TextNewLine'),
    command('undo', () => editor.chain().focus().undo().run(), 'Undo'),
    command('redo', () => editor.chain().focus().redo().run(), 'Redo'),
    command('clear marks', () => editor.chain().focus().unsetAllMarks().run(), 'TextClearFormat'),
  ]
}

export default useTiptapCommands
