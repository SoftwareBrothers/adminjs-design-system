import React from 'react'
import styled from 'styled-components'

import Box from '../atoms/box'
import Icon from '../atoms/icon'
import themeGet from '../utils/theme-get'

export type NavigationElementProps = {
  href?: string;
  icon?: string;
  isOpen?: boolean;
  isSelected?: boolean
  label: string,
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const getBg = (props): string => (
  props.isOpen
    ? themeGet('colors', 'grey20')(props)
    : 'transparent'
)

const getSelectedColor = (props) => themeGet('colors',
  props.isSelected ? 'primary100' : 'grey80')(props)

const getHoverColor = (props) => themeGet('colors',
  props.isOpen ? 'grey80' : 'primary100')(props)

const CardTitle = styled('div')`
  font-family: ${themeGet('font')};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
`

const StyledNavigationElement = styled(Box)<Pick<NavigationElementProps, 'isSelected' | 'isOpen'>>`
  background-color: ${getBg};
  padding: ${themeGet('space', 'md', '-1px')} ${themeGet('space', 'lg')};
  text-decoration: none;
  color: ${getSelectedColor};
  cursor: pointer;
  &:hover {
    color: ${getHoverColor};
  }
  & > * {
    align-self: center;
  }
  & > .icon-box {
    flex-shrink: 0;
    padding-right: ${themeGet('space', 'lg')};
    & svg {
      fill: ${getSelectedColor};
    }
  }
  & > ${CardTitle} {
    flex-grow: 1;
  }
  & > .arrow-box {
    flex-shrink: 0;
    & svg {
      fill: ${themeGet('colors', 'grey40')};
    }
  }
`

const NavigationElement:React.FC<NavigationElementProps> = (props) => {
  const { isOpen, icon, onClick, label, isSelected, href } = props

  const expandable = typeof isOpen !== 'undefined'
  const chevron = isOpen ? 'ChevronUp' : 'ChevronDown'

  return (
    <StyledNavigationElement
      flex
      flexDirection="row"
      as="a"
      isSelected={isSelected}
      isOpen={isOpen}
      href={href}
      onClick={onClick || undefined}
    >
      {icon && (
        <Box className="icon-box" as="span"><Icon icon={icon} /></Box>
      )}
      <CardTitle>
        {label}
      </CardTitle>
      {expandable && (
        <Box className="arrow-box" as="span"><Icon icon={chevron} /></Box>
      )}
    </StyledNavigationElement>
  )
}

export {
  NavigationElement,
  NavigationElement as default,
}
