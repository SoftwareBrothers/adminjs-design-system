import React from 'react'
import * as FeatherIcons from 'react-feather'
import {
  SpaceProps,
  space,
  color as styledColor,
  BorderRadiusProps,
  borderRadius,
} from 'styled-system'
import { styled, css } from '@styled-components'

import { NewColorProps as ColorProps } from '../../utils/color-props.js'
import { cssClass } from '../../utils/css-class.js'

/**
 * Prop Types of an Icon component.
 * Apart from props defined below it extends all {@link ColorProps} and {@link SpaceProps}
 *
 * @memberof Icon
 * @alias IconProps
 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
 */
export type IconProps = SpaceProps &
  BorderRadiusProps &
  ColorProps & {
    /**
     * CamelCased name of an icon from https://feathericons.com/
     */
    icon?: keyof typeof FeatherIcons | string
    /**
     * Size variant. Default to 16
     */
    size?: number
    /**
     * Icon color
     */
    color?: string
    /**
     * Icon background
     */
    bg?: string
    /**
     * If background should be rounded
     */
    rounded?: boolean

    /**
     * Indicates if given icons should spin
     */
    spin?: boolean
  }

const spinCss = css`
  @keyframes iconSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation-name: iconSpin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Wrapper = styled.span<IconProps>`
  vertical-align: middle;
  display: inline-block;
  line-height: ${({ theme }) => theme.lineHeights.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  & > svg {
    stroke: ${({ theme, color }) => (color && color !== 'inherit' ? theme.colors[color] : 'currentColor')};
    ${({ spin }) => (spin ? spinCss : '')};
  }
  ${({ rounded }) => (rounded ? 'border-radius: 9999px;' : '')};
  ${space};
  ${styledColor};
  ${borderRadius}
`

/**
 * @classdesc
 *
 * <img src="components/icon.png" />
 *
 * Component wrapping [react-feather](https://www.npmjs.com/package/react-feather).
 * List of all icons can be found here: https://feathericons.com/
 * If you have problem verifying the key of given icon - you can always open the
 * Chrome Terminal (with AdminJS open) and write there:
 *
 * ```
 * Object.keys(window.FeatherIcons)
 * ```
 *
 * to see list of all available icon keys.
 *
 * ### Usage
 *
 * ```javascript
 * import { Icon, IconProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IconProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-icon--default Storybook}
 * @hideconstructor
 * @example <caption>Icons inside other elements</caption>
 * return (
 *   <Box variant="grey">
 *     <Label mb="default"><Icon icon="Camera" />Icon in Label</Label>
 *     <Button><Icon icon="Camera" />Icon in button</Button>
 *   </Box>
 * )
 * @example <caption>Different sizes</caption>
 * const sizes = [16, 20, 24, 32]
 * return (
 *   <Box variant="grey">
 *     {sizes.map(size => (
 *       <Label m="default"><Icon icon="Camera" size={size}/>Icon {size}</Label>
 *     ))}
 *   </Box>
 * )
 *
 * @example <caption>Big rounded icon with background</caption>
 * return (
 *   <Box variant="grey">
 *     <Icon icon="Plus" color="white" bg="primary100" rounded size={32} p="default"/>
 *   </Box>
 * )
 * @section design-system
 */
const Icon: React.FC<IconProps> = (props) => {
  const { icon, size = 16, color = 'inherit', ...other } = props

  if (!icon) return null

  const FeatherIcon = FeatherIcons[icon] || FeatherIcons.Slash

  if (FeatherIcon) {
    return (
      <Wrapper icon={icon} className={cssClass('Icon')} {...other} color={color}>
        <FeatherIcon size={size} color={color} />
      </Wrapper>
    )
  }
  return null
}

export { Icon }
export default Icon
