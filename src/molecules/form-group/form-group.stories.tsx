import React from 'react'

import {
  Box,
  Button,
  DropDown,
  DropDownMenu,
  DropDownTrigger,
  FormGroup,
  FormMessage,
  Icon,
  Input,
  InputGroup,
  Label,
} from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.js'

export default {
  title: 'DesignSystem/Molecules/FormGroup',
  component: FormGroup,
}

export const FullFeaturedFormGroup: React.FC = () => (
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
      <Button size="icon"><Icon icon="ArrowRight" /></Button>
    </InputGroup>
    <FormMessage>
      With an message below
    </FormMessage>
  </FormGroup>
)

export const Full: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Full featured FormGroup">
      <FullFeaturedFormGroup />
    </StoryWrapper>
  </Box>
)
