import React from 'react'
import styled from 'styled-components'

import NavigationElement, { NavigationElementProps } from '../molecules/navigation-element'
import { Box, Label } from '..'
import themeGet from '../utils/theme-get'

export type NavigationElementWithChildrenProps = NavigationElementProps & {
  elements?: Array<NavigationElementWithChildrenProps>,
}

export type NavigationProps = {
  label: string;
  elements: Array<NavigationElementWithChildrenProps>;
}

const NavigationElementWrapper: React.FC<NavigationElementWithChildrenProps> = (props) => {
  const { elements, isOpen } = props
  return (
    <li>
      <NavigationElement {...props} />
      {elements?.length && isOpen && (
        <ul>
          {elements.map((element, id) => (
            <NavigationElementWrapper
              {...element}
              key={[id, element.href].join('-')}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

const StyledNavigation = styled(Box)`
  ul ul > li {
    padding-left: ${themeGet('space', 'xxl')};
    &:last-child {
      margin-bottom: ${themeGet('space', 'lg')};
    }
  }
`

const Navigation: React.FC<NavigationProps> = (props) => {
  const { label, elements } = props
  return (
    <StyledNavigation px="xl" py="lg">
      <Label pl="lg" mb="md" uppercase>{label}</Label>
      <ul>
        {elements.map((element, id) => (
          <NavigationElementWrapper key={[id, element.href].join('-')} {...element} />
        ))}
      </ul>
    </StyledNavigation>
  )
}

export {
  Navigation,
  Navigation as default,
}
