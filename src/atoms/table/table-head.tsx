import { styled } from '@styled-components'

import { cssClass } from '../../utils/css-class.js'

/**
 * @component
 * @private
 */
const TableHead = styled.thead`
  background: rgba(0, 0, 0, 0.01);
  
  & td, & a {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-decoration: none;
    white-space: nowrap;
    
    &:hover {
      text-decoration: none;
    }
  }
`

TableHead.defaultProps = {
  className: cssClass('TableHead'),
}

TableHead.displayName = 'TableHead'

export default TableHead
