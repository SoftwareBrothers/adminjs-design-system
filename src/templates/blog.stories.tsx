import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DropZone,
  Header,
  Icon,
  Input,
  Label,
  RichTextEditor,
} from '../index.js'

export const Default: StoryFn = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  return (
    <Box variant="grey" width={1}>
      {isDrawerVisible && (
        <Drawer>
          <DrawerContent>
            <Header.H3>
              <Button size="icon" rounded mr="lg" onClick={() => setIsDrawerVisible(false)}>
                <Icon icon="ChevronRight" />
              </Button>
              Article settings
            </Header.H3>
            <Label>Drop splash screen</Label>
            <DropZone />
          </DrawerContent>
        </Drawer>
      )}
      <Box variant="white">
        <Box flex flexDirection="row-reverse" mb="xl">
          <Button size="icon" onClick={() => setIsDrawerVisible(true)}>
            <Icon icon="Settings" />
          </Button>
          <Button mr="default" variant="primary">
            <Icon icon="Send" />
            Publish
          </Button>
          <Button mr="default">
            <Icon icon="Save" />
            Save
          </Button>
        </Box>
        <Box mb="xxl">
          <Input variant="xxl" borderless width={1} placeholder="My amazing new article" />
        </Box>

        <RichTextEditor
          value=""
          onChange={() => {
            /* noop */
          }}
        />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'DesignSystem/Templates/Blog',
}

export default meta
