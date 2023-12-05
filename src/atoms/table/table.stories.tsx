import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import StoryWrapper from '../../utils/story-wrapper.jsx'
import { Button, CheckBox, Icon, Link, Text } from '../index.js'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from './index.js'

export const Default: StoryObj<{ onClick: (e) => void }> = {
  render: ({ onClick }) => {
    const handleClick = (event) => {
      event.preventDefault()
      onClick(event)
    }

    const header = ['Name', 'Surname', 'Gender', 'Age']

    const data = [
      ['John', 'Doe', 'Male', '57'],
      ['Joanna', 'K', 'Female', '32'],
      ['Patrick', 'Jogs', 'Male', '35'],
      ['Elisabeth', 'Briggs', 'Female', '28'],
      ['Jda', 'Karo', 'Female', '22'],
    ]

    return (
      <StoryWrapper label="">
        <Table>
          <TableCaption>
            <Text as="span">Selected items </Text>
            <Button onClick={handleClick}>
              <Icon icon="Trash" />
              Remove
            </Button>
          </TableCaption>
          <TableHead>
            <TableRow>
              <TableCell>
                <CheckBox />
              </TableCell>
              {header.map((head, i) => (
                <TableCell key={head} onClick={handleClick}>
                  <Link href="/">
                    {head}
                    {i === 0 && <Icon icon="ChevronUp" />}
                  </Link>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row[0]}>
                <TableCell>
                  <CheckBox />
                </TableCell>
                {row.map((item) => (
                  <TableCell key={item}>{item}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StoryWrapper>
    )
  },
}

const meta: Meta<typeof Table> = {
  title: 'DesignSystem/Atoms/Table',
  component: Table,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
