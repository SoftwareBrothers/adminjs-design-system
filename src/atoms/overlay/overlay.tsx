import { styled } from '@styled-components'
import { zIndex, ZIndexProps } from 'styled-system'

import { cssClass } from '../../utils/css-class.js'

export const Overlay = styled.div<ZIndexProps>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  ${zIndex}
`

Overlay.defaultProps = {
  className: cssClass('Overlay'),
}

Overlay.displayName = 'Overlay'

export default Overlay
