import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box, Button, Header, Icon, Text } from '../../index.js'
import { FullFeaturedFormGroup } from '../form-group/form-group.stories.jsx'
import { Drawer, DrawerContent, DrawerFooter } from './index.js'

export const Default: StoryObj = {
  render: (props) => (
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a,
          scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.
          Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis
          vel hendrerit interdum, dui ligula ultricies purus, sed
        </Text>
        <FullFeaturedFormGroup />
      </DrawerContent>
      <DrawerFooter>
        <Button variant="contained">Save</Button>
      </DrawerFooter>
    </Drawer>
  ),
}

const meta: Meta<typeof Drawer> = {
  title: 'DesignSystem/Molecules/Drawer',
  component: Drawer,
  args: {
    isHidden: false,
  },
  argTypes: {
    isHidden: { control: { type: 'boolean' } },
  },
}

export default meta
