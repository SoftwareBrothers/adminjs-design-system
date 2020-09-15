import React from 'react'
import { DropDown, DropDownTrigger, DropDownMenu, DropDownItem, Link, Button, Icon } from '../..'
import { withKnobs, radios } from '../../../storybook/node_modules/@storybook/addon-knobs'
import StoryWrapper from '../../utils/story-wrapper'

export default { title: 'DesignSystem/Molecules/DropDown', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const stick = radios('stick', ['left', 'right'] as any, 'left')
  return (
    <StoryWrapper label="Button version">
      <DropDown stick={stick}>
        <DropDownTrigger>
          <Button>Get your cursor here!</Button>
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
    </StoryWrapper>
  )
}
