import { ReactNode, RefObject } from 'react'
import { DirectionProps } from '../../utils/direction-props'
import { BoxProps } from '../box'

export type TooltipProps = {
  /** Text shown on the tooltip */
  title?: string,
  /** Direction of tooltip */
  direction: DirectionProps,
  /** Tooltip size */
  size?: 'default' | 'lg'
}

export type PortalProps = TooltipProps & {
  childRef: RefObject<HTMLElement>,
  ContentElement?: ReactNode,
}

export type StyledTooltipProps = BoxProps & Pick<TooltipProps, 'direction'> & {
  isVisible: boolean;
}

export default TooltipProps
