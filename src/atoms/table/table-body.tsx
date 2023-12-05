import { styled } from '@styled-components'

import { cssClass } from '../../utils/css-class.js'

/**
 * @component
 * @private
 */
const TableBody = styled.tbody`

`

TableBody.defaultProps = {
  className: cssClass('TableBody'),
}

TableBody.displayName = 'TableBody'

export default TableBody
