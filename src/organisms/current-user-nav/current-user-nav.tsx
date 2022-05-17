import React from 'react'
import Box from '../../atoms/box'
import { Button } from '../../atoms/button'
import Icon from '../../atoms/icon'
import { SmallText, Title } from '../../atoms/typography'
import { DropDown, DropDownItem, DropDownMenu, DropDownTrigger } from '../../molecules/drop-down'
import { CurrentUserNavProps } from './current-user-nav-props'
import StyledCurrentUserNav from './current-user-nav-styled'

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
const CurrentUserNav: React.FC<CurrentUserNavProps> = (props) => {
  const { name, title, avatarUrl, dropActions, lineActions } = props

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
            {avatarUrl && <img src={avatarUrl} alt={name} />}
            {dropActions && dropActions.length && (
              <Icon icon="OverflowMenuVertical" size={16} ml="md" />
            )}
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

export { CurrentUserNav as default, CurrentUserNav }
