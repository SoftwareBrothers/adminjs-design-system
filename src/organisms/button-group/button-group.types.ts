import { ButtonProps } from '../../atoms/button/index.js'
import type { IconProps } from '../../atoms/icon/index.js'
import { VariantType } from '../../theme.js'

/**
 * Props of buttons in {@link ButtonGroup}
 *
 * @memberof ButtonGroup
 */
export type ButtonInGroupProps = Omit<ButtonProps, 'onClick'> & {
  /** Icon of a button */
  icon?: IconProps['icon'];
  /** Label, when set to null, with icon given, button will adjust it's margin */
  label?: string | null;
  /** Variant compatible with Button variant */
  variant?: VariantType;
  /** Variant href */
  href?: string;
  /**
   * Button source - if set, this will be passed to onClick handler. It can be useful if when
   * you have one handler function for all the buttons.
   */
  source?: any;
  /**
   * On click handler invoked when button has been clicked.
   */
  onClick?: (event, source: any) => any | Promise<any>;
  /**
   * Array of nested buttons.
   */
  buttons?: Array<ButtonInGroupProps>
  /**
   * CSS Selector
   */
  'data-css'?: string;
} & {
  className?: string
}

type ButtonPropsSize = ButtonProps['size']
type ButtonPropsRounded = ButtonProps['rounded']

/**
 * Props passed to ButtonGroup element.
 *
 * @memberof ButtonGroup
 */
export type ButtonGroupProps = {
  /**
   * Default size for all buttons. The same as {@link ButtonProps}.size
   */
  size?: ButtonPropsSize,
  /**
   * Default rounded property for all buttons. The same as {@link ButtonProps}.rounded
   */
  rounded?: ButtonPropsRounded;
  /**
   * Array of top level buttons.
   */
  buttons: Array<ButtonInGroupProps>,
}
