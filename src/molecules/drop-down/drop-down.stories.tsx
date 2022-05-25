import React from 'react'
import {
  Badge,
  Box,
  Text,
  DropDown,
  DropDownTrigger,
  DropDownMenu,
  DropDownItem,
  Button,
  Icon,
} from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export default {
  title: 'DesignSystem/Molecules/DropDown',
  argTypes: {
    onClick: { action: 'clicked' },
    stick: {
      defaultValue: 'left',
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
}

export const Default: React.FC<any> = ({ onClick, ...props }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  return (
    <StoryWrapper label="Button trigger with nested DropDownItems">
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
            <Icon icon="Audio" />
            Other item
            <DropDownMenu>
              <DropDownItem onClick={handleClick} colorVariant="danger">
                <Icon icon="Edit" />
                Some danger item
              </DropDownItem>
            </DropDownMenu>
          </DropDownItem>
        </DropDownMenu>
      </DropDown>
    </StoryWrapper>
  )
}

export const Custom: React.FC<any> = ({ onClick }) => {
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
}
