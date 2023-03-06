import { rgba } from 'polished'
import { space, variant } from 'styled-system'
import { styled } from 'styled-components'

import { Box, BoxProps } from '../../atoms/box/index.js'
import type { VariantType } from '../../theme.js'
import { cssClass, themeGet } from '../../utils/index.js'
import DropDownMenu from './drop-down-menu.js'

const variantsShared = (theme, color) => ({
  color,
  [`& .${cssClass('DropDownItemAction')}`]: {
    color,
  },
  '&:hover': {
    bg: rgba(theme.colors[color], 0.03),
  },
  [`& .${cssClass('Icon')} svg`]: {
    stroke: color,
  },
})

const colorVariants = variant<any, VariantType>({
  prop: 'colorVariant',
  variants: {
    primary: (theme) => variantsShared(theme, 'primary100'),
    danger: (theme) => variantsShared(theme, 'error'),
    success: (theme) => variantsShared(theme, 'success'),
    info: (theme) => variantsShared(theme, 'info'),
    secondary: (theme) => variantsShared(theme, 'accent'),
    light: (theme) => variantsShared(theme, 'grey80'),
    default: (theme) => variantsShared(theme, 'text'),
  },
})

/**
 * Props passed to DropDownItem
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 * @extends BoxProps
 */
export type DropDownItemProps = BoxProps & {
  colorVariant?: VariantType
}

/**
 * @component
 * @private
 */
export const DropDownItem = styled(Box)<DropDownItemProps>`
  position: relative;
  z-index: 10000;
  border: none;
  color: ${themeGet('colors', 'text')};
  font-family: ${themeGet('font')};
  border: solid transparent;
  border-width: 0 ${themeGet('space', 'sm')};
  ${({ onClick }: any) => (onClick ? 'cursor: pointer;' : '')};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  text-align: left;

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.text, 0.03)};
  }

  & .${cssClass('Icon')} {
    padding-right: ${themeGet('space', 'default')};
    stroke: ${themeGet('colors', 'grey40')};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${DropDownMenu} {
    position: absolute;
    top: 0;
    display: none;
  }

  &:hover > ${DropDownMenu} {
    display: flex;
  }

  & a {
    color: ${themeGet('colors', 'grey80')};
    text-decoration: none;
  }
  padding: ${themeGet('space', 'lg')} ${themeGet('space', 'xxl')};

  ${space};
  ${colorVariants};
`

export default DropDownItem
