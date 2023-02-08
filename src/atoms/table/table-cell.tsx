import styled from 'styled-components'
import { LayoutProps, SpaceProps, color, layout, space } from 'styled-system'
import { ColorProps } from '../../utils/color-props'

import { cssClass } from '../../utils/css-class'

/**
 * @component
 * @private
 */
const TableCell = styled.td<SpaceProps | ColorProps | LayoutProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.default};
  word-break: break-word;
  vertical-align: middle;
  ${color}; 
  ${space};
  ${layout};

  &.options {
    text-align: right;
  }
`

TableCell.defaultProps = {
  p: 'lg',
  color: 'text',
  className: cssClass('TableCell'),
}

export default TableCell
