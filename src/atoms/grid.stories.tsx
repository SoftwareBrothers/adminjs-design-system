import React from 'react'
import { withKnobs } from '../../storybook/node_modules/@storybook/addon-knobs'

import { GridColumn, GridRow } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default {
  title: 'DesignSystem/Atoms/Grid',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}
export const Default: React.FC = ({ onClick }) => (
  <StoryWrapper label="GridContainer default settings">
    <GridRow>
      <GridColumn bg="primary40" p="xl" gridColumn="4 / span 3">
        {'{gridColumn="4 / span 3"}'}
      </GridColumn>
      <GridColumn bg="primary40" p="xl" gridSpan={1}>
        {'gridSpan={1}'}
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn bg="primary40" p="xl">
        3
      </GridColumn>
      <GridColumn bg="primary40" p="xl">
        4
      </GridColumn>
    </GridRow>
  </StoryWrapper>
)
