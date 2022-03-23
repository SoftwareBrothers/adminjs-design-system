import styled from 'styled-components'
import { InputCSS, InputProps } from '../../atoms/input'
import Text, { TextProps } from '../../atoms/text'

export type EditorWrapperProps = TextProps & InputProps

const EditorWrapper = styled(Text)<EditorWrapperProps>`
  ${InputCSS}

  .ProseMirror-focused {
    outline: none;
  }
`

EditorWrapper.defaultProps = {
  px: 'default',
  py: 'sm',
}

export { EditorWrapper }

export default { EditorWrapper }
