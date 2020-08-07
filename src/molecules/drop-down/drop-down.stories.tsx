import React from 'react'
import { DropDown, DropDownTrigger, DropDownMenu, DropDownItem, Link, Text, Icon } from '../..'

export default { title: 'DesignSystem/Molecules/DropDown' }

export const Default: React.FC = () => (
  <DropDown>
    <DropDownTrigger p="default">
      <Text as="span">Get your cursor here!</Text>
    </DropDownTrigger>
    <DropDownMenu top="xxl">
      <DropDownItem>
        <Link href="/">
          <Icon icon="Video" />
          Some menu item
        </Link>
      </DropDownItem>
      <DropDownItem>
        <Link href="/">Other item</Link>
      </DropDownItem>
    </DropDownMenu>
  </DropDown>
)
