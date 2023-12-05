import React from 'react'

import { Box } from '../../atoms/box/index.js'
import { Button } from '../../atoms/button/index.js'
import { Icon } from '../../atoms/icon/index.js'
import { SmallText, Title } from '../../atoms/typography/index.js'
import { DropDown, DropDownItem, DropDownMenu, DropDownTrigger } from '../../molecules/drop-down/index.js'
import { CurrentUserNavProps } from './current-user-nav-props.js'
import StyledCurrentUserNav from './current-user-nav-styled.js'
import { Avatar } from '../../atoms/avatar/index.js'

/**
 * @load ./current-user-nav.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see CurrentUserNavProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-current-user-nav--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const CurrentUserNav: React.FC<CurrentUserNavProps> = (props) => {
  const { name = '', title = '', avatarUrl, dropActions, lineActions } = props

  return (
    <StyledCurrentUserNav>
      {lineActions && lineActions.length && (
        <Box flex flexDirection="row" alignItems="center">
          {lineActions.map((action) => (
            <Button
              size="icon"
              variant="text"
              title={action.label}
              key={action.label}
              href={action.href}
              as="a"
              className="line-action"
              onClick={action.onClick}
            >
              {action.icon && <Icon icon={action.icon} />}
            </Button>
          ))}
        </Box>
      )}
      <DropDown stick="right" display="flex">
        <DropDownTrigger>
          <Box flex flexDirection="row" px="xl" alignItems="center" height="navbarHeight">
            <Box>
              <Title>{name}</Title>
              {title && <SmallText>{title}</SmallText>}
            </Box>
            <Avatar src={avatarUrl} alt={name} marginLeft="lg">{name.slice(0, 1).toUpperCase()}</Avatar>
          </Box>
        </DropDownTrigger>
        {dropActions && dropActions.length && (
          <DropDownMenu minWidth="100%">
            {dropActions.map((action) => (
              <DropDownItem key={action.label} as="a" onClick={action.onClick} href={action.href}>
                {action.icon && <Icon icon={action.icon} />}
                {action.label}
              </DropDownItem>
            ))}
          </DropDownMenu>
        )}
      </DropDown>
    </StyledCurrentUserNav>
  )
}

CurrentUserNav.displayName = 'CurrentUserNav'

export default CurrentUserNav
