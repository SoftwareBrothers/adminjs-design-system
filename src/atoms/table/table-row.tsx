import { rgba } from 'polished'
import { styled } from '@styled-components'

import { cssClass } from '../../utils/css-class.js'

/**
 * @component
 * @private
 */
const TableRow = styled.tr`
  &.selected {
    background: ${({ theme }) => rgba(theme.colors.primary100, 0.03)};
  }

  &:not(.selected):hover {
    background: rgba(0, 0, 0, 0.01);
  }
`

TableRow.defaultProps = {
  className: cssClass('TableRow'),
}

TableRow.displayName = 'TableRow'

export default TableRow
