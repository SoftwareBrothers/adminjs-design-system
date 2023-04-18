import type { ButtonProps } from '../../atoms/button/index.js'
import type { IconProps } from '../../atoms/icon/index.js'
import { VariantType } from '../../theme.js'

/**
 * Props passed to Modal Component
 *
 * @memberof Modal
 * @alias ModalProps
 */
export type ModalProps = {
  /**
   * dialog title
   */
  title?: string
  /**
   * optional subtitle
   */
  subTitle?: string
  /**
   * color variant
   */
  variant?: VariantType

  /** Modal footer buttons */
  buttons?: Array<ButtonProps>

  /** Label which is seen above the text */
  label?: string

  /** Icon near the label */
  icon?: IconProps['icon']

  /** Handler function triggered when overlay is clicked */
  onOverlayClick?: () => any

  /**
   * Function triggered when user clicks close button.
   * If it is given - close button will appear.
   */
  onClose?: () => any
  children?: React.ReactNode
}
