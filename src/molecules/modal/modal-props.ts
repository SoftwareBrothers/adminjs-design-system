import { ButtonProps } from '../..'
import { VariantType } from '../../utils'

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
  variant?: VariantType;

  buttons?: Array<ButtonProps>;

  label?: string,
  icon?: string,

  onOverlayClick?: () => any

  /**
   * Function triggered when user clicks close button. If given close button will appear.
   */
  onClose?: () => any
}
