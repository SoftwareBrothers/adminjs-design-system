import styled from 'styled-components'
import { color, space, typography, SpaceProps, TypographyProps, variant } from 'styled-system'
import { VariantType } from '../../theme'
import { ColorProps } from '../../utils/color-props'
import { cssClass } from '../../utils/css-class'
import { ToastContainer } from 'react-toastify';

/**
 * @load ./Notifications-props.doc.md
 * @memberof Notifications
 * @alias NotificationsProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export type NotificationsProps = SpaceProps & TypographyProps & ColorProps & {
  /**
   * Color variant
   */
  variant?: VariantType;
  /**
   * Outline version
   */
  outline?: boolean;
  /**
   * Size variant
   */
  size?: 'sm' | 'lg' | 'default';
}

const variantStyle = (variantColor: string, props: NotificationsProps): Record<string, any> => ({
  bg: variantColor,
  borderColor: variantColor,
  color: props.outline ? variantColor : 'white',
})

const colorVariant = (props: NotificationsProps): Record<string, any> => variant({
  variants: {
    primary: variantStyle('primary100', props),
    danger: variantStyle('error', props),
    success: variantStyle('success', props),
    info: variantStyle('info', props),
    secondary: variantStyle('accent', props),
    light: variantStyle('light', props),
    default: {},
  },
})

const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: {
      py: 'xs',
    },
    lg: {
      py: '11px',
      px: '14px',
    },
    default: {},
  },
})

/**
 * @load ./Notifications.doc.md
 * @see NotificationsProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-Notifications--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 */
const Notifications = styled(ToastContainer)`
    /* .toast-container */
    width: 100%;

    /* .toast is passed to toastClassName */
    .toast {
      background-color: red;
    }

    button[aria-label="close"] {
      display: none;
    }

    /* .body is passed to bodyClassName */
    .body {}

    /* .progress is passed to progressClassName */
    .progress {}
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {}
  .Toastify__toast {}
  .Toastify__toast--error {}
  .Toastify__toast--warning {}
  .Toastify__toast--success {}
  .Toastify__toast-body {}
  .Toastify__progress-bar {}
`;

export { Notifications }
export default Notifications
