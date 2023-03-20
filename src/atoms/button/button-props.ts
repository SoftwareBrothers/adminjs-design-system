import { MouseEventHandler } from 'react'
import { FlexboxProps, SpaceProps, TypographyProps } from 'styled-system'

import { ColorVariant, VariantType } from '../../theme.js'
import { NewColorProps as ColorProps } from '../../utils/color-props.js'

/**
 * @load ./button-props.doc.md
 * @memberof Button
 * @alias ButtonProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export type ButtonProps = ColorProps &
  SpaceProps &
  TypographyProps &
  FlexboxProps & {
    /**
     * Button variant
     * @default 'contained'
     */
    variant?: 'contained' | 'outlined' | 'text' | VariantType
    /**
     * Button color variant
     * @default 'primary'
     */
    color?: ColorVariant
    /**
     * Button size variant
     */
    size?: 'sm' | 'lg' | 'icon' | 'default' | 'md'
    /**
     * If button should be rounded
     * @default false
     */
    rounded?: boolean
    /**
     * You can either pass an label prop - or use react Children.
     */
    label?: string
  } & {
    onClick?: MouseEventHandler<HTMLButtonElement>
  }
