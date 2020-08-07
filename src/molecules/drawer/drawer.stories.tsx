import { withKnobs, boolean } from '@storybook/addon-knobs'
import React from 'react'
import { Drawer, DrawerContent, DrawerFooter, Header, Button, Icon, Box } from '../..'

export default { title: 'DesignSystem/Molecules/Drawer', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const isHidden = boolean('Indicates if drawer should be hidden', false)
  return (
    <Drawer isHidden={isHidden}>
      <DrawerContent>
        <Header.H3>
          <Button size="icon" rounded mr="lg">
            <Icon icon="ChevronRight" />
          </Button>
          Edit
        </Header.H3>
        <Box my="x3" p={0}>
          <Button size="sm">
            <Icon icon="Information" />
            Info
          </Button>
          <Button size="sm" ml="lg">
            <Icon icon="Delete" />
            Delete
          </Button>
        </Box>
        <Box my="x3" p={0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue,
          suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
          aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
          Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed
          posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna
          vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est
          congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae
          consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget
          nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus,
          urna quam viverra nisi, in interdum massa nibh nec erat
        </Box>
      </DrawerContent>
      <DrawerFooter>
        <Button variant="primary">
          Save
        </Button>
      </DrawerFooter>
    </Drawer>
  )
}
