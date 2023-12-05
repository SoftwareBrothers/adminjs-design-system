import React from 'react'

import { Box } from '../../atoms/box/index.js'
import { Label } from '../../atoms/label/index.js'
import { Text } from '../../atoms/text/index.js'
import { ValueGroupProps } from './value-group-props.js'

/**
 * @load ./value-group.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see ValueGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-value-group--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const ValueGroup: React.FC<ValueGroupProps> = (props) => {
  const { label, value, children } = props

  return (
    <Box mb="xl">
      <Label variant="light">{label}</Label>
      {value ? <Text>{value}</Text> : ''}
      {children}
    </Box>
  )
}

ValueGroup.displayName = 'ValueGroup'

export default ValueGroup
