import React from 'react'
import { Box, BoxProps } from '..'

export type StoryWrapperProps = BoxProps & {
  label: string
  children?: React.ReactNode
}

const StoryWrapper: React.FC<StoryWrapperProps> = (props) => {
  const { label, children } = props
  return (
    <Box width={1}>
      {children}
    </Box>
  )
}

export default StoryWrapper
