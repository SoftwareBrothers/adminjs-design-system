import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import {
  Box,
  Button,
  DropDown,
  DropDownMenu,
  DropDownTrigger,
  Icon,
  Input,
  Label,
} from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { FormGroup, FormMessage, InputGroup } from './index.js'

export const FullFeaturedFormGroup: StoryFn = () => (
  <FormGroup>
    <Label required>Name</Label>
    <InputGroup>
      <DropDown>
        <DropDownTrigger>
          <Button variant="text" size="icon">
            ==
          </Button>
        </DropDownTrigger>
        <DropDownMenu top="xxl">
          <Button variant="text" size="icon">
            {'>='}
          </Button>
          <Button variant="text" size="icon">
            {'<='}
          </Button>
          <Button variant="text" size="icon">
            {'><'}
          </Button>
        </DropDownMenu>
      </DropDown>
      <Input />
      <Label>100 KM</Label>
      <Button size="icon">
        <Icon icon="ArrowRight" />
      </Button>
    </InputGroup>
    <FormMessage>With an message below</FormMessage>
  </FormGroup>
)

export const Full: StoryFn = () => (
  <Box width={1}>
    <StoryWrapper label="Full featured FormGroup">
      <FullFeaturedFormGroup />
    </StoryWrapper>
  </Box>
)

const meta: Meta<typeof FormGroup> = {
  title: 'DesignSystem/Molecules/FormGroup',
  component: FormGroup,
}

export default meta
