import React from 'react'

import { NavigationElement } from '../../molecules/navigation-element/index.js'
import { NavigationElementWithChildrenProps } from './navigation-props.js'

export const NavigationElementWrapper: React.FC<NavigationElementWithChildrenProps> = (props) => {
  const { elements, isOpen } = props
  return (
    <li>
      <NavigationElement {...props} />
      {elements?.length && isOpen ? (
        <ul>
          {elements.map((element, id) => (
            <NavigationElementWrapper
              {...element}
              key={[id, element.href].join('-')}
            />
          ))}
        </ul>
      ) : ''}
    </li>
  )
}

NavigationElementWrapper.displayName = 'NavigationElementWrapper'

export default NavigationElementWrapper
