import React from 'react'
import { Text } from '../..'
import { Pagination } from './pagination'

export default { title: 'DesignSystem/Molecules/Pagination' }

export const Default: React.FC = () => (
  <Text py="xl" textAlign="center">
    <Pagination total={100} page={4} perPage={10} onChange={(item) => item} />
  </Text>
)
