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
    command('bold', () => editor.chain().focus().toggleBold().run(), 'Bold'),
    command('italic', () => editor.chain().focus().toggleItalic().run(), 'Italic'),
    command('strike', () => editor.chain().focus().toggleStrike().run(), 'Minus'),
    command('code', () => editor.chain().focus().toggleCode().run(), 'Code'),

    command('textAlign.left', () => editor.chain().focus().setTextAlign('left').run(), 'AlignLeft'),
    command('textAlign.center', () => editor.chain().focus().setTextAlign('center').run(), 'AlignCenter'),
    command('textAlign.right', () => editor.chain().focus().setTextAlign('right').run(), 'AlignRight'),
    command('textAlign.justify', () => editor.chain().focus().setTextAlign('justify').run(), 'AlignJustify'),

    command('bulletList', () => editor.chain().focus().toggleBulletList().run(), 'List'),
    command('orderedList', () => editor.chain().focus().toggleOrderedList().run(), 'Menu'),
    command('blockquote', () => editor.chain().focus().toggleBlockquote().run(), 'MessageCircle'),
    command('link', () => editor.chain().focus().unsetLink().run(), 'Link'),

    command('hard break', () => editor.chain().focus().setHardBreak().run(), 'CornerDownRight'),
    command('undo', () => editor.chain().focus().undo().run(), 'Rewind'),
    command('redo', () => editor.chain().focus().redo().run(), 'FastForward'),
    command('clear marks', () => editor.chain().focus().unsetAllMarks().run(), 'Repeat'),
  ]
}

export default useTiptapCommands
