import React from 'react'

import { Drawer, DrawerContent, DrawerFooter, Header, Button, Icon, Box, Text } from '../../index.js'
import { FullFeaturedFormGroup } from '../form-group/form-group.stories.js'

export const Default: React.FC = (props) => (
  <Drawer {...props}>
    <DrawerContent>
      <Header.H3>
        <Button size="icon" rounded mr="lg">
          <Icon icon="ChevronRight" />
        </Button>
        Edit
      </Header.H3>
      <Box my="x3" p={0}>
        <Button>
          <Icon icon="Info" />
          Info
        </Button>
        <Button ml="lg">
          <Icon icon="Trash2" />
          Delete
        </Button>
      </Box>
      <Header.H4>Primary Fields</Header.H4>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue,
        suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
        aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
        Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed
      </Text>
      <FullFeaturedFormGroup />
    </DrawerContent>
    <DrawerFooter>
      <Button variant="contained">
        Save
      </Button>
    </DrawerFooter>
  </Drawer>
)

export default {
  title: 'DesignSystem/Molecules/Drawer',
  argTypes: {
    isHidden: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}
