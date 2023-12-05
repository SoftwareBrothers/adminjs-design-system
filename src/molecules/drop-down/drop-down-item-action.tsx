import { styled } from '@styled-components'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { cssClass } from '../../utils/index.js'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export const DropDownItemAction = styled(Box).attrs<BoxProps>((props) => ({
  className: cssClass('DropDownItemAction', props.className),
}))`
  ${({ onClick }: any) => (onClick ? 'cursor: pointer;' : '')};
`

DropDownItemAction.defaultProps = {
  width: 1,
  px: 'xxl',
  py: 'lg',
}
DropDownItemAction.displayName = 'DropDownItemAction'

export default DropDownItemAction
