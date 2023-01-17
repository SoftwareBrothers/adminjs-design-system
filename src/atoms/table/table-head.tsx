import styled from 'styled-components'
import { themeGet } from '../../utils'
import { cssClass } from '../../utils/css-class'

/**
 * @component
 * @private
 */
const TableHead = styled.thead`
  background: ${themeGet('colors', 'tableHeaderBackground')};

  & a {
    color: ${themeGet('colors', 'grey100')};
    text-decoration: none;
    font-size: ${themeGet('fontSizes', 'sm')};
    white-space: nowrap;
    font-weight: 500;
    
    .${cssClass('Icon')} svg {
      stroke: ${themeGet('colors', 'primary100')};
    }
  }
`

TableHead.defaultProps = {
  className: cssClass('TableHead'),
}

export default TableHead
