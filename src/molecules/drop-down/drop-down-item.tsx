import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import Box, { BoxProps } from '../../atoms/box/box'
import { cssClass } from '../../utils'

/**
 * Props passed to DropDownItem
 * Extends {@link BoxProps}
 * 
 * @memberof DropDown
 * @extends BoxProps
 */
export type DropDownItemProps = BoxProps

/**
 * @component
 * @private
 */
export const DropDownItem = styled(Box)<SpaceProps>`
  position: relative;
  z-index: 10000;
  border: none;
  color: ${({ theme }): string => theme.colors.grey80};
  display: block;
  font-family: ${({ theme }): string => theme.font};
  border: solid transparent;
  border-width: 0 ${({ theme }): string => theme.space.sm};
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border-color: ${({ theme }): string => theme.colors.primary100};
    background: ${({ theme }): string => theme.colors.grey20};
  }

  & .${cssClass('Icon')} {
    padding-right: ${({ theme }): string => theme.space.default};
    fill: ${({ theme }): string => theme.colors.grey40};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & a {
    color: ${({ theme }): string => theme.colors.grey80};
  }
  padding: ${({ theme }): string => theme.space.lg};

  ${space};
`

export default DropDownItem
