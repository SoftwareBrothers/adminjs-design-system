import React from 'react'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { Box, FormGroup, Label, InputGroup, Button, Icon, Input, FormMessage } from '../..'

export default { title: 'DesignSystem/Molecules/FormGroup', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const Options = {
    Default: 'default',
    Disabled: 'disabled',
    Error: 'error',
  }
  const state = radios('FormGroup states', Options, Options.Default)

  return (
    <Box py="xl">
      <FormGroup disabled={state === Options.Disabled} error={state === Options.Error}>
        <Label required>Name</Label>
        <InputGroup>
          <Button variant="primary" size="icon">
            <Icon icon="ChevronRight" />
          </Button>
          <Input disabled={state === Options.Disabled} />
          <Label>100 KM</Label>
        </InputGroup>
        <FormMessage>{state === Options.Error ? "Yeah, it's error" : 'Optional message'}</FormMessage>
      </FormGroup>
    </Box>
  )
}
