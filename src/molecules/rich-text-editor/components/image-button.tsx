import { Editor } from '@tiptap/react'
import React, { FC, useEffect, useRef, useState } from 'react'

import MenuButton from './menu-button.jsx'

interface ImageButtonProps {
  editor: Editor
}

const ImageButton: FC<ImageButtonProps> = (props) => {
  const { editor } = props
  const [image, setImage] = useState<FileReader['result']>()
  const fileInput = useRef<HTMLInputElement>(null)

  const handleInputChange = (event) => {
    const { files } = event.target
    if (!files.length) return
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      setImage(e.target?.result)
    }
  }

  const handleButtonClick = () => {
    if (fileInput.current) fileInput.current.click()
  }

  useEffect(() => {
    if (image && typeof image === 'string') {
      editor.chain().focus().setImage({ src: image }).run()
    }
  }, [image])

  return (
    <>
      <MenuButton
        editor={editor}
        key="image"
        name="image"
        onClick={handleButtonClick}
        icon="Image"
      />
      <input type="file" ref={fileInput} onChange={handleInputChange} style={{ display: 'none' }} />
    </>
  )
}

export default ImageButton
