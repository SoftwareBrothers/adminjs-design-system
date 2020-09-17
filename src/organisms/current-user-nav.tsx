import React from 'react'
import styled from 'styled-components'
import {
  Box,
  CardTitle,
  SmallText,
  DropDownTrigger,
  DropDown,
  DropDownMenu,
  DropDownItem,
  Icon,
  Button,
} from '..'
import { cssClass, themeGet } from '../utils'

export type CurrentUserAction = {
  label: string,
  onClick?: (event: any) => void,
  icon?: string,
  isActive?: string,
}

export type CurrentUserNavProps = {
  name: string,
  title?: string
  avatarUrl?: string,
  dropActions?: Array<CurrentUserAction>
  lineActions?: Array<CurrentUserAction>
}

const StyledWrapper = styled(Box)`
  text-align: right;

  & .line-action {
    .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'grey80')};
    }
    &:hover .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'primary100')};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${themeGet('space', 'md')};
  }
`

StyledWrapper.defaultProps = {
  flex: true,
  flexDirection: 'row',
}

const CurrentUserNav: React.FC<CurrentUserNavProps> = (props) => {
  const { name, title, avatarUrl, dropActions, lineActions } = props

  return (
    <StyledWrapper>
      {lineActions && lineActions.length && (
        <Box flex flexDirection="row" py="xl" alignItems="center">
          {lineActions.map((action) => (
            <Button
              size="icon"
              variant="text"
              title={action.label}
              key={action.label}
              as="a"
              className="line-action"
              onClick={action.onClick}
            >
              {action.icon && (
                <Icon icon={action.icon} />
              )}
            </Button>
          ))}
        </Box>
      )}
      <DropDown stick="right">
        <DropDownTrigger>
          <Box flex flexDirection="row" p="xl" alignItems="center">
            <Box>
              <CardTitle>{name}</CardTitle>
              {title && (
                <SmallText>{title}</SmallText>
              )}
            </Box>
            {avatarUrl && (
              <img src={avatarUrl} alt={name} />
            )}
            {dropActions && dropActions.length && (
              <Icon
                icon="OverflowMenuVertical"
                size={16}
              />
            )}
          </Box>
        </DropDownTrigger>
        {dropActions && dropActions.length && (
          <DropDownMenu minWidth="100%">
            {dropActions.map((action) => (
              <DropDownItem
                key={action.label}
                as="a"
                onClick={action.onClick}
              >
                {action.icon && (
                  <Icon icon={action.icon} />
                )}
                {action.label}
              </DropDownItem>
            ))}
          </DropDownMenu>
        )}
      </DropDown>
    </StyledWrapper>
  )
}

export {
  CurrentUserNav as default,
  CurrentUserNav,
}
