import React from 'react'
import { Box, Label, Text } from '..'

export type ValueGroupProps = {
  label: string,
  value?: string,
  children?: React.ReactNode,
}

const ValueGroup: React.FC<ValueGroupProps> = (props) => {
  const { label, value, children } = props

  return (
    <Box mb="xl">
      <Label variant="light">{label}</Label>
      {value ? <Text>{value}</Text> : ''}
      {children}
    </Box>
  )
}

export {
  ValueGroup as default,
  ValueGroup,
}
