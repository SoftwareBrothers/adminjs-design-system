import { Editable } from 'slate-react'
import styled from 'styled-components'
import { layout, space, TypographyProps } from 'styled-system'
import { InputCSS, InputProps } from '../../atoms/input'

export type SlateTextProps = TypographyProps & InputProps

const EditableStyled = styled(Editable)<SlateTextProps>`
  ${InputCSS};
  ${space};
  ${layout};

  width: 100%;
`

EditableStyled.defaultProps = {
  px: 'default',
  py: 'sm',
}

export { EditableStyled }
export default EditableStyled
