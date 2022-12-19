import { Editor } from '@tiptap/react'
import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import Text from '../../../atoms/text'
import * as EditorIcons from '../icons'

interface MenuButtonProps {
  editor: Editor
  name: string
  onClick: () => void
  icon?: string
  attributes?: Record<string, any>
  children?: any
}

const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey80};
  & svg path {
    fill: ${({ theme }) => theme.colors.grey80};
  }
`

const MenuButton: FC<MenuButtonProps> = (props) => {
  const { name, editor, onClick, icon, attributes, children } = props

  const isActive = useMemo(
    () => (editor.isActive(attributes || name) ? 'active' : ''),
    [name, attributes],
  )

  // Using icons from: https://github.com/Keyamoon/IcoMoon-Free
  const Icon = icon ? EditorIcons[icon] : null

  return (
    <StyledText as="span" onClick={onClick} className={isActive} size="icon" mx="md">
      {Icon ? <Icon /> : name}
      {children}
    </StyledText>
  )
}

export default MenuButton
