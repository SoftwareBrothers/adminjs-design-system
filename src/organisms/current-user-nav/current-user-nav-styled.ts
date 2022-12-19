import styled from 'styled-components'

import { cssClass, themeGet } from '../../utils'
import { Box } from '../../atoms/box'

const StyledCurrentUserNav = styled(Box)`
  text-align: right;

  & .line-action {
    .${cssClass('Icon')} svg {
      stroke: ${themeGet('colors', 'grey80')};
    }
    &:hover .${cssClass('Icon')} svg {
      stroke: ${themeGet('colors', 'primary100')};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${themeGet('space', 'md')} 0;
  }
`

StyledCurrentUserNav.defaultProps = {
  flex: true,
  flexDirection: 'row',
}

export {
  StyledCurrentUserNav as default,
  StyledCurrentUserNav,
}
