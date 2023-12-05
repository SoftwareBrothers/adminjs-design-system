import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Badge, Box, Button, Icon, Text } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { DropDown, DropDownItem, DropDownMenu, DropDownProps, DropDownTrigger } from './index.js'

export const Default: StoryObj<DropDownProps & { onClick: (e) => void }> = {
  render: ({ onClick, ...props }) => {
    const handleClick = (event) => {
      event.preventDefault()
      onClick(event)
    }

    return (
      <StoryWrapper label="Button trigger with nested DropDownItems">
        <Box height="200px">
          <DropDown {...props}>
            <DropDownTrigger>
              <Button>Get your cursor here!</Button>
            </DropDownTrigger>
            <DropDownMenu>
              <DropDownItem onClick={handleClick}>
                <Icon icon="Video" />
                Some menu item
              </DropDownItem>
              <DropDownItem onClick={handleClick}>
                <Icon icon="Headphones" />
                Other item
                <DropDownMenu>
                  <DropDownItem onClick={handleClick} color="danger">
                    <Icon icon="Edit" />
                    Some danger item
                  </DropDownItem>
                </DropDownMenu>
              </DropDownItem>
            </DropDownMenu>
          </DropDown>
        </Box>
      </StoryWrapper>
    )
  },
}

export const Custom: StoryObj<{ onClick: (e) => void }> = {
  render: ({ onClick }) => {
    const handleClick = (event) => {
      event.preventDefault()
      onClick(event)
    }

    return (
      <StoryWrapper label="Badge trigger with TextContent">
        <DropDown>
          <DropDownTrigger>
            <Badge>Get your cursor here!</Badge>
          </DropDownTrigger>
          <DropDownMenu>
            <Box p="xxl" width={300}>
              <Text>
                <h3>I am inside dropdown Menu</h3>
                <Button onClick={handleClick}>Click me if you dare</Button>
              </Text>
            </Box>
          </DropDownMenu>
        </DropDown>
      </StoryWrapper>
    )
  },
}

const meta: Meta<typeof DropDown> = {
  title: 'DesignSystem/Molecules/DropDown',
  args: {
    stick: 'left',
  },
  argTypes: {
    stick: { options: ['left', 'right'], control: { type: 'select' } },
  },
}

export default meta
