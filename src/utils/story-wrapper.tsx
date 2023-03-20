import React from 'react'

import { Box, BoxProps, Label } from '../index.js'

export type StoryWrapperProps = BoxProps & {
  label: string
  children?: React.ReactNode,
  gap?: number
}

const StoryWrapper: React.FC<StoryWrapperProps> = (props) => {
  const { label, children, gap = 16, ...other } = props
  return (
    <Box variant="grey">
      <Label>{label}</Label>
      <Box bg="white" p="xxl" width={1} style={{ gap }} {...other}>
        {children}
      </Box>
    </Box>
  )
}

export default StoryWrapper
