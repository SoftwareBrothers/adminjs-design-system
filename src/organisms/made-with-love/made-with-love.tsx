import React, { FC } from 'react'
import { styled } from '@styled-components'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { Icon } from '../../atoms/icon/index.js'
import { Link, LinkProps } from '../../atoms/link/index.js'
import { Text } from '../../atoms/text/index.js'
import { themeGet } from '../../utils/index.js'

const StyledWrapper = styled(Box)<BoxProps>`
  user-select: none;
  & > * {
    padding: 0 ${themeGet('space', 'xs')};
  }
`

StyledWrapper.defaultProps = {
  color: 'grey60',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const StyledLink: any = styled(Link)<LinkProps>`
  font-size: ${themeGet('fontSizes', 'sm')};
  font-weight: 300;
  &:hover {
    color: ${themeGet('colors', 'love')};
    text-decoration: none;
  }
`

export const MadeWithLove: FC = () => (
  <StyledWrapper>
    <Text as="span" variant="sm">
      Made with
    </Text>
    <Icon icon="Heart" color="love" />
    <Text as="span" variant="sm">
      by
    </Text>
    <StyledLink href="https://adminjs.co/" target="_blank" rel="noopener noreferrer">
      AdminJS Team
    </StyledLink>
  </StyledWrapper>
)

MadeWithLove.displayName = 'MadeWithLove'

export default MadeWithLove
