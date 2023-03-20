import type { IconProps } from '../../atoms/icon/index.js'

/**
 * Action element passed to CurrentUserNavProps
 *
 * @memberof CurrentUserNav
 * @alias CurrentUserNavAction
 */
export type CurrentUserNavAction = {
  /** action label */
  label: string
  /** action OnClick handler - taking event as a param */
  onClick?: (event: any) => void
  /** Action icon */
  icon?: IconProps['icon']
  /** indicates if action is active */
  isActive?: string
  /** href for an action */
  href?: string
}

/**
 * Props passed to {@link CurrentUserNav} component
 *
 * @memberof CurrentUserNav
 * @alias CurrentUserNavProps
 */
export type CurrentUserNavProps = {
  /** User name */
  name: string
  /** User title - visible below the name */
  title?: string
  /** Avatar url */
  avatarUrl?: string
  /** Array of all the actions visible on hover */
  dropActions?: Array<CurrentUserNavAction>
  /** Array of all the actions visible by the user name */
  lineActions?: Array<CurrentUserNavAction>
}
