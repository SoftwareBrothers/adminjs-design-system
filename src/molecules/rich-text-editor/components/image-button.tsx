import { Editor } from '@tiptap/react'
import React, { FC, useEffect, useRef, useState } from 'react'

import MenuButton from './menu-button'

interface ImageButtonProps {
  editor: Editor
}

const ImageButton: FC<ImageButtonProps> = (props) => {
  const { editor } = props
  const [image, setImage] = useState<FileReader['result']>()
  const [alt, setAlt] = useState<string>()
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
    if (fileInput.current) {
      setAlt(prompt('Alt tag') || '')
      fileInput.current.click()
    }
  }

  useEffect(() => {
    if (image && typeof image === 'string') {
      const img = new Image();
      img.src = image;

      editor.chain().focus().setImage({
        src: image,
        alt,
        width: img.width,
        height: img.height,
      }).run()
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
