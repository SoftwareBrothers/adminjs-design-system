import styled from 'styled-components'
import { Button } from '../button'
import { Text } from '../text'
import { cssClass } from '../../utils/css-class'
import { themeGet } from '../../utils'

const CAPTION_HEIGHT = '42px'

/**
 * @component
 * @private
 */
const TableCaption = styled.caption`
  font-family: ${themeGet('font')};
  padding: ${themeGet('space', 'sm')} ${themeGet('space', 'lg')};
  text-align: left;
  color: ${themeGet('colors', 'primary100')};
  font-size: ${themeGet('fontSizes', 'default')};
  line-height: ${themeGet('lineHeights', 'default')};
  position: absolute;
  height: ${CAPTION_HEIGHT};
  left: 0;
  right: 0;
  top: -${CAPTION_HEIGHT};
  background: ${themeGet('colors', 'grey40')};
  box-sizing: border-box;
  vertical-align: middle;

  & ${Button} {
    color: ${themeGet('colors', 'primary100')};
    border-color: ${themeGet('colors', 'primary100')};
    & > span svg {
      stroke: ${themeGet('colors', 'primary100')};
    }
    &:hover {
      color: ${themeGet('colors', 'primary100')};
      .${cssClass('Icon')} svg {
        stroke: ${themeGet('colors', 'primary100')};
      }
    }
  }

  & ${Text} {
    color: ${themeGet('colors', 'primary100')};
  }
`

TableCaption.defaultProps = {
  className: cssClass('TableCaption'),
}

export default TableCaption
