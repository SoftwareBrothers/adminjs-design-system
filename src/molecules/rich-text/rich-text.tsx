/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef, useMemo } from 'react'
import debounce from 'lodash/debounce'

import styled from 'styled-components'
import snow from './snow.styles'
import bubble from './bubble.styles'
import styles from './styles'
import Box from '../../atoms/box'
import { Quill as QuillClass, QuillOptionsStatic } from 'quill/index'

// Following hack is done for SSR case, where Quill wants to invoke `document.createElement...`
// So when system sees that file is run by the server (window is not defined) then it sets
// quill to null instead throwing errors. We have to use require because import has to be
// top-level. This line cannot be changed since rollup bundler relies on it in the exact form.
// Check out `config/rollup.js`
// @ts-ignore
const Quill: typeof QuillClass = typeof window === 'object' ? require('quill') : null

export type QuillToolbarOption = string | number | boolean

export type QuillToolbarOptions = Array<
  QuillToolbarOption |
  Record<string, QuillToolbarOption |
  QuillToolbarOptions> |
  Array<QuillToolbarOptions | QuillToolbarOption>
>

export const DefaultQuillToolbarOptions: Array<QuillToolbarOptions> = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],

  [{ align: [] }],
  ['link', 'image', 'video'],

  ['clean'], // remove formatting button
]

/**
 * @see https://quilljs.com/docs/configuration
 */
export type QuillOptions = {
  /** Theme - default to snow */
  theme?: 'snow' | 'bubble';
  modules?: {
    toolbar?: Array<QuillToolbarOptions> | {
      handlers?: Record<string, any>;
      container?: Array<QuillToolbarOptions>
    },
    [key: string]: any
  },
  debug?: string | boolean;
  placeholder?: string;
  readOnly?: boolean;
  formats?: string[];
  bounds?: HTMLElement | string;
  scrollingContainer?: HTMLElement | string;
  strict?: boolean;
}

export type RichTextProps = {
  value?: string;
  borderless?: boolean;
  onChange?: (content) => void;

  quill: QuillOptions,
}

const Theme = styled(Box)<RichTextProps>`
  ${bubble};
  ${snow};
  ${styles};
`

export const RichText: React.FC<RichTextProps> = (props) => {
  const { value, borderless, quill: options, onChange } = props

  options.theme = options.theme || 'snow'
  if (!options.modules?.toolbar) {
    options.modules = options.modules || {}
    options.modules.toolbar = DefaultQuillToolbarOptions
  }

  if (!Quill) {
    return <div>Server Side Rendered</div>
  }

  const classNames: Array<string> = []
  if (borderless) {
    classNames.push('quill-borderless')
  }

  const [quill, setQuill] = useState<QuillClass | null>(null)
  const editorRef = useRef<HTMLDivElement>(null)

  const debouncedOnChange = useMemo(() => debounce(onChange || (() => true), 500), [onChange])

  useEffect(() => {
    if (editorRef.current) {
      const quillInstance = new Quill(editorRef.current, options)
      setQuill(quillInstance)
    }
    return () => {
      setQuill(null)
    }
  }, [])

  useEffect(() => {
    if (!editorRef.current || !quill) {
      return
    }
    if (value && quill.root.innerHTML !== value) {
      quill.root.innerHTML = value
    }
  }, [value, quill])

  useEffect(() => {
    const editor = quill?.root
    if (!editor) {
      return undefined
    }
    const handler = () => {
      const content = editor.innerHTML
      debouncedOnChange(content)
    }
    editor?.addEventListener('DOMSubtreeModified', handler)
    return () => {
      editor?.removeEventListener('DOMSubtreeModified', handler)
    }
  }, [debouncedOnChange, quill])

  return (
    <Theme quill={options}>
      <div className={classNames.join(' ')}>
        <div
          className="quill-editor"
          ref={editorRef}
        />
      </div>
    </Theme>
  )
}

export default RichText
