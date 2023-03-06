import React from 'react'

import { Button } from '../../atoms/button/index.js'
import { Icon } from '../../atoms/icon/index.js'
import { Text } from '../../atoms/text/index.js'
import { InfoBox } from './info-box.js'

export default { title: 'DesignSystem/Molecules/InfoBox' }

export const Default: React.FC = () => (
  <InfoBox title="There are no cars in the system">
    <Text>Currently there are no cars in the system</Text>
    <Text>To create first click</Text>
    <Button mt="lg">
      <Icon icon="Plus" />
      Create
    </Button>
  </InfoBox>
)
