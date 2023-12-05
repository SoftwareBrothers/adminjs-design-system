import { styled } from '@styled-components'

import { Button } from '../button/index.js'
import { themeGet, cssClass } from '../../utils/index.js'

/**
 * @component
 * @private
 */
const TableCaption = styled.caption`
  font-family: ${themeGet('font')};
  padding: ${themeGet('space', 'sm')} ${themeGet('space', 'lg')};
  text-align: left;
  color: ${themeGet('colors', 'white')};
  font-size: ${themeGet('fontSizes', 'default')};
  line-height: ${themeGet('lineHeights', 'default')};
  position: absolute;
  left: 0;
  right: 0;
  top: -4px;
  transform: translateY(-100%);
  background: ${themeGet('colors', 'primary100')};
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: middle;

  &:first-child {
    flex-grow: 1;
  }

  & ${Button} {
    color: ${themeGet('colors', 'white')};
    border-color: ${themeGet('colors', 'white')};
  }
`

TableCaption.defaultProps = {
  className: cssClass('TableCaption'),
}

TableCaption.displayName = 'TableCaption'

export default TableCaption
