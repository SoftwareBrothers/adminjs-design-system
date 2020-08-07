import React from 'react'
import { Header, Box, Text } from '..'

export default { title: 'DesignSystem/Atoms/Header' }

export const Default: React.FC = () => (
  <Box py="lg">
    <Header.H1>H1 Header - 40</Header.H1>
    <Text variant="sm" mb={5}>Roboto 40 - line height - 40</Text>
    <Header.H2>H2 Header - 32</Header.H2>
    <Text variant="sm" mb={5}>Roboto 32 - line height - 40</Text>
    <Header.H3>H3 Header - 28</Header.H3>
    <Text variant="sm" mb={5}>Roboto 28 - line height - 32</Text>
    <Header.H4>H4 Header - 24</Header.H4>
    <Text variant="sm" mb={5}>Roboto 24 - line height - 32</Text>
    <Header.H5>H5 Header - 18</Header.H5>
    <Text variant="sm" mb={5}>Roboto 18 - line height - 24</Text>
    <Header.H6>H6 Header - 16</Header.H6>
    <Text variant="sm" mb={5}>Roboto 16 - line height - 24</Text>
  </Box>
)
