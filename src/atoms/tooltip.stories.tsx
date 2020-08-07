import styled from 'styled-components'
import React from 'react'
import { withKnobs, radios, text } from '@storybook/addon-knobs'
import { Tooltip } from '..'

export default { title: 'DesignSystem/Atoms/Tooltip', decorators: [withKnobs] }

const MarginTop = styled.div`
  margin-top: 50vh;
`

export const Default: React.FC = () => {
  const Direction = {
    right: 'right',
    left: 'left',
    top: 'top',
    bottom: 'bottom',
  }
  const direction = radios('Set direction', Direction, Direction.top) as keyof typeof Direction
  const tooltipText = text('Set text of tooltip', 'example info')
  return (
    <MarginTop>
      <Tooltip direction={direction} size="lg" tooltipText={tooltipText}>
        indicator
      </Tooltip>
    </MarginTop>
  )
}
