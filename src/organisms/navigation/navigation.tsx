import React from 'react'

import { NavigationProps } from './navigation-props.js'
import { StyledNavigation } from './navigation-styled.jsx'
import { NavigationElementWrapper } from './navigation-element-wrapper.jsx'
import { Label } from '../../atoms/label/index.js'

/**
 * @load ./navigation.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see NavigationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-navigation--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const Navigation: React.FC<NavigationProps> = (props) => {
  const { label, elements } = props
  return (
    <StyledNavigation px="xl" py="lg">
      {!!label?.length && <Label pl="lg" mb="md" uppercase>{label}</Label>}
      <ul>
        {elements.map((element, id) => (
          <NavigationElementWrapper key={[id, element.href].join('-')} {...element} />
        ))}
      </ul>
    </StyledNavigation>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
