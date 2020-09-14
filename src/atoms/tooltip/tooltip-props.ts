import { ReactNode, RefObject } from 'react'
import { BoxProps } from '../box'

export type Position = {
  top: number,
  left: number,
  width: number,
  height: number,
}

export type TooltipProps = {
  /** Text shown on the tooltip */
  title?: string,
  /** Direction of tooltip */
  direction: 'left' | 'right' | 'top' | 'bottom',
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
