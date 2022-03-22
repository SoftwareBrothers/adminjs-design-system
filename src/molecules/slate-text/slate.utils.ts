import { jsx } from 'slate-hyperscript'
import escapeHtml from 'escape-html'
import { Text } from 'slate'

type MarkAttributes = Record<string, unknown>
type Node = Record<string, any>

const deserialize = (
  el,
  markAttributes: MarkAttributes = {},
): ReturnType<typeof jsx> | null | string => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx('text', markAttributes, el.textContent)
  }
  if (el.nodeType !== Node.ELEMENT_NODE) {
    return null
  }

  const nodeAttributes = { ...markAttributes }

  // define attibutes for text nodes
  switch (el.nodeName) {
  case 'strong':
    nodeAttributes.bold = true
    break
  default:
    break
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserialize(node, nodeAttributes))
    .flat()

  if (children.length === 0) {
    children.push(jsx('text', nodeAttributes, ''))
  }

  switch (el.nodeName) {
  case 'BODY':
    return jsx('fragment', {}, children)
  case 'BR':
    return '\n'
  case 'BLOCKQUOTE':
    return jsx('element', { type: 'quote' }, children)
  case 'P':
    return jsx('element', { type: 'paragraph' }, children)
  case 'A':
    return jsx(
      'element',
      { type: 'link', url: el.getAttribute('href') },
      children,
    )
  default:
    return children
  }
}

const serialize = (node: Node): string => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const children = node.children?.map((n) => serialize(n)).join('')

  switch (node.type) {
  case 'quote':
    return `<blockquote><p>${children}</p></blockquote>`
  case 'paragraph':
    return `<p>${children}</p>`
  case 'link':
    return `<a href="${escapeHtml(node.url)}">${children}</a>`
  default:
    return children
  }
}

// eslint-disable-next-line import/prefer-default-export
export { deserialize, serialize }
