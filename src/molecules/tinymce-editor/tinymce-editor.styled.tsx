import { styled } from '@styled-components'

import { BoxProps } from '../../atoms/box/index.js'
import { InputProps } from '../../atoms/input/index.js'
import { Text, TextProps } from '../../atoms/text/index.js'
import { cssClass } from '../../utils/index.js'

export type EditorWrapperProps = TextProps & InputProps & BoxProps

export const EditorWrapper = styled(Text)<EditorWrapperProps>`
  position: relative;
  z-index: 1;

  & .tox-tinymce {
    padding: 8px 4px;
    border-width: 1.5px;
  }
`

EditorWrapper.defaultProps = {
  className: cssClass('EditorWrapper'),
}
