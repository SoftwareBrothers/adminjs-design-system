import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { createEditor } from 'slate'
// import Html from 'slate-html-serializer'
import { Slate, withReact } from 'slate-react'
import { EditableStyled } from './slate-text.styled'
import { deserialize, serialize } from './slate.utils'

type SlateTextProps = {
  value: string
  onChange: (value: string) => void
}

const SlateText: FC<SlateTextProps> = (props) => {
  const { value, onChange } = props
  const editor = useMemo(() => withReact(createEditor()), [])
  const [slateValue, setSlateValue] = useState<any>([
    { type: 'paragraph', children: [{ text: '' }] },
  ])

  useEffect(() => {
    if (value) {
      const parsed = new DOMParser().parseFromString(value, 'text/html').body
      const deserialized = deserialize(parsed)
      console.log(deserialized)

      setSlateValue(deserialized)
    }
  }, [])

  const hadnleChange = useCallback((content) => {
    const serialized = serialize(content)
    console.log(content, serialized)

    onChange(serialized)
  }, [])

  return (
    <Slate editor={editor} value={slateValue as any} onChange={hadnleChange}>
      <EditableStyled autoFocus={false} />
    </Slate>
  )
}

export { SlateText }
export default SlateText
