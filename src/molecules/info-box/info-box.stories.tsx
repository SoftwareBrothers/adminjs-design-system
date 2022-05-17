import React from 'react'
import { Button } from '../../atoms/button'
import { Icon } from '../../atoms/icon'
import { Text } from '../../atoms/text'
import { InfoBox } from './info-box'

export default { title: 'DesignSystem/Molecules/InfoBox' }

export const Default: React.FC = () => (
  <InfoBox title="There are no cars in the system">
    <Text>Currently there are no cars in the system</Text>
    <Text>To create first click</Text>
    <Button mt="lg">
      <Icon icon="Add" />
      Create
    </Button>
  </InfoBox>
)
