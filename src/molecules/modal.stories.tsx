import styled from 'styled-components'
import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Text, Button, Modal } from '..'

export default { title: 'DesignSystem/Molecules/Modal', decorators: [withKnobs] }

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`

export const Default: React.FC = () => {
  const open = boolean('Is modal opened', true)
  const warning = boolean('Is error occured', true)

  return (
    <Modal open={open} warning={warning}>
      <Text fontSize={16} fontWeight="600">Are you sure you want to delete this car?</Text>
      <Text fontSize={14}>This item will be deleted immediately. You can’t undo this action.</Text>
      <Buttons>
        <Button size="sm" variant="secondary" marginRight={15}>Cancel</Button>
        <Button size="sm" variant="primary">Delete</Button>
      </Buttons>
    </Modal>
  )
}
