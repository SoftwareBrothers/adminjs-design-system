import React from 'react'

import { Box, ButtonGroup } from '../../index.js'
import { Label } from '../../atoms/label/index.js'
import { CardTitle } from '../../atoms/typography/index.js'

export const Default: React.FC<any> = ({ onClick, size, rounded }) => {
  const handleClick = (event, source) => {
    event.preventDefault()
    onClick(event, source)
  }

  const buttons = [{
    label: 'Edit',
    onClick: handleClick,
    icon: 'Edit',
  }, {
    label: 'Not Clickable',
    source: 'thisWillGoBack',
    icon: 'Copy',
    variant: 'light',
    buttons: [{
      label: 'Option 1',
      onClick: handleClick,
      icon: 'Copy',
      variant: 'primary',
    }, {
      label: 'Option 2',
      onClick: handleClick,
      icon: 'Copy',
      buttons: [{
        label: 'Option 2.1',
        onClick: handleClick,
        icon: 'Copy',
      }, {
        label: 'Option 2.2',
        onClick: handleClick,
        icon: 'Copy',
      }],
    }, {
      label: 'Option 3',
      icon: 'Copy',
    }],
  }, {
    label: 'Delete',
    onClick: handleClick,
    variant: 'danger',
    icon: 'Trash2',
  }, {
    label: null,
    variant: 'light',
    icon: 'MenuHorizontal',
    buttons: [{
      label: 'Edit',
      onClick: handleClick,
      icon: 'Edit',
      variant: 'light',
    }, {
      label: 'Duplicate',
      onClick: handleClick,
      icon: 'Copy',
    }, {
      label: 'Delete',
      onClick: handleClick,
      variant: 'danger',
      icon: 'Trash2',
    }],
  }]

  return (
    <Box variant="grey">
      <Label>ButtonGroup</Label>
      <Box variant="card" mb="xxl">
        <CardTitle>Big buttons</CardTitle>
        <ButtonGroup
          buttons={buttons as any}
          size={size}
          rounded={rounded}
        />
      </Box>
    </Box>
  )
}

export default {
  title: 'DesignSystem/Organisms/ButtonGroup',
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      defaultValue: 'default',
      options: ['sm', 'default', 'lg'],
      control: { type: 'select' },
    },
    rounded: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}
