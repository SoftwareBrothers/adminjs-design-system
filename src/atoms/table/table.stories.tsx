import React from 'react'
import { Box, Table, TableCaption, TableRow, TableHead, TableCell, TableBody, Button, Icon, CheckBox, Text, Link } from '../..'

export default { title: 'DesignSystem/Atoms/Table' }

export const Default: React.FC = () => (
  <Box pt="x4">
    <Table>
      <TableCaption>
        <Text as="span">Example table</Text>
        <Button variant="text" size="sm">
          <Icon icon="Delete" />
          Remove
        </Button>
      </TableCaption>
      <TableHead>
        <TableRow>
          <TableCell><CheckBox /></TableCell>
          <TableCell>
            <Link href="/">
              Name
              <Icon icon="CaretUp" />
            </Link>
          </TableCell>
          <TableCell>
            <Link href="/">
              Last
              <Icon icon="CaretDown" />
            </Link>
          </TableCell>
          <TableCell>Surname</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><CheckBox /></TableCell>
          <TableCell>Value 1</TableCell>
          <TableCell>Value 2</TableCell>
          <TableCell>Value 2</TableCell>
          <TableCell>Value 2</TableCell>
          <TableCell>Value 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><CheckBox /></TableCell>
          <TableCell>Value 1</TableCell>
          <TableCell>Value 2</TableCell>
          <TableCell>Value 2</TableCell>
          <TableCell>Value 2</TableCell>
          <TableCell>Value 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Box>
)
