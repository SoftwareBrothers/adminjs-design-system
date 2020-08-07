import React from 'react'
import { Section, Text } from '..'

export default { title: 'DesignSystem/Atoms/Section' }

export const Default: React.FC = () => (
  <Section>
    <Text>Some text within a section</Text>
    <Section>
      <Text>Section can be nested</Text>
    </Section>
  </Section>
)
