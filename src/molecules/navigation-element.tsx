import React from 'react'
import styled from 'styled-components'

import { Icon, CardTitle, Box } from '..'
import themeGet from '../utils/theme-get'

// The longest part of the label which makes it no-wrap: ellipsis
// example: `MongooseWithLongNameAnd with space` should be truncated because 15 lines doesn't fit
// the width of the navbar. But "Postgres with long name and spaces" shouldn't be truncated because
// its "parts" doesn't exceed 15 chars each.
const PART_LENGTH_TO_ELLIPSIS = 15

export type NavigationElementProps = {
  href?: string;
  icon?: string;
  isOpen?: boolean;
  isSelected?: boolean
  label: string,
  id?: string,
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    props: NavigationElementProps
  ) => void;
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
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
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

  const hasLongName = label.split(' ').reduce((memo, part) => (
    memo.length > part.length ? memo : part
  ), '').length > PART_LENGTH_TO_ELLIPSIS

  return (
    <StyledNavigationElement
      flex
      flexDirection="row"
      as="a"
      isSelected={isSelected}
      isOpen={isOpen}
      href={href}
      onClick={(event) => (onClick ? onClick(event, props) : undefined)}
    >
      {icon && (
        <Box className="icon-box" as="span"><Icon icon={icon} /></Box>
      )}
      <CardTitle style={{ whiteSpace: hasLongName ? 'nowrap' : 'normal' }}>
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
