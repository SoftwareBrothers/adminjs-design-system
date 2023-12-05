/* eslint-disable import/prefer-default-export */
import React from 'react'
import { styled } from '@styled-components'

import { Box } from '../box/index.js'
import { cssClass } from '../../utils/css-class.js'

const Spinner = styled.div.attrs({
  className: 'lds-facebook',
})`
  & {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  & div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: ${({ theme }) => theme.colors.primary100};
    animation: lds-facebook 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0%, 80%, 100% {
      top: 6px;
      height: 51px;
    }
    40% {
      top: 19px;
      height: 26px;
    }
  }

`

/**
 * @classdesc
 *
 * <img src="components/loader.png" />
 *
 * Simple loader
 *
 * ### Usage
 *
 * ```javascript
 * import { Loader } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-loader--default Storybook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Loader/>
 * )
 * @section design-system
 */
const Loader: React.FC = () => (
  <Box
    p="x3"
    style={{ textAlign: 'center' }}
    data-testid="Loader"
    className={cssClass('Loader')}
  >
    <Spinner>
      <div />
      <div />
      <div />
    </Spinner>
  </Box>
)

Loader.displayName = 'Loader'

export { Loader }
export default Loader
