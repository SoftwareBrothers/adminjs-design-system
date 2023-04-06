import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Text } from '../../index.js'
import { Pagination, PaginationProps } from './index.js'

export const Default: StoryObj<PaginationProps> = {
  render: (props) => (
    <Text py="xl" textAlign="center">
      <Pagination {...props} onChange={(item) => item} />
    </Text>
  ),
}

export default {
  title: 'DesignSystem/Molecules/Pagination',
  component: Pagination,
  args: {
    total: 10,
    page: 5,
    perPage: 1,
  },
} as Meta<typeof Pagination>
