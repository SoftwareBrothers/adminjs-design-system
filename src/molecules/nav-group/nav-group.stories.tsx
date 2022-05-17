import React from 'react'
import { Text } from '../..'
import { NavGroup } from './nav-group'

export default { title: 'DesignSystem/Molecules/NavGroup' }

export const Default: React.FC = () => (
  <NavGroup title="Some group title" icon="Add">
    <Text>Some group element</Text>
  </NavGroup>
)
