import React, { FC } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/box'
import Icon from '../../atoms/icon'
import Link from '../../atoms/link'
import Text from '../../atoms/text'
import { themeGet } from '../../utils'

const StyledWrapper = styled(Box)`
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

const StyledLink = styled(Link)`
  font-size: ${themeGet('fontSizes', 'sm')};
  font-weight: 300;
  &:hover {
    color: ${themeGet('colors', 'love')};
    text-decoration: none;
  }
`

const MadeWithLove: FC = () => (
  <StyledWrapper>
    <Text as="span" variant="sm">
      Made with
    </Text>
    <Icon icon="FavoriteFilled" color="love" />
    <Text as="span" variant="sm">
      by
    </Text>
    <StyledLink href="https://adminjs.co/" target="_blank" rel="noopener noreferrer">
      AdminJS Team
    </StyledLink>
  </StyledWrapper>
)

export default MadeWithLove
