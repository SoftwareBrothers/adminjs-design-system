import React from 'react'
import styled, { css } from 'styled-components'

const getBorder = (({ theme }): string => theme.colors.primary100)

const StyledTooltip = styled.div<StyledTooltipProps>`
  position: relative;
`

const TooltipText = styled.span<StyledTooltipProps>`
  background-color: ${({ theme }): string => theme.colors.bg};
  text-align: center;
  padding: 15px 25px;
  border: 1px solid ${getBorder};
  position: absolute;
  z-index: 1;

  ${({ size }) => ({
    lg: css`
      width: 283px;
    `,
  }[size])}

  ${({ direction }) => ({
    bottom: css`
      top: 30px;
      left: 50%;
      margin-left: -165px;
    `,
    top: css`
      bottom: 30px;
      left: 50%;
      margin-left: -165px;
    `,
    right: css`
      margin-left: 20px;
      top: -20px;
    `,
    left: css`
      right: 100%;
      margin-right: 20px;
      top: -20px;
    `,
  }[direction])}
`

const Arrow = styled.div<StyledTooltipProps>`
  position: absolute;
  background-color: ${({ theme }): string => theme.colors.bg};
  z-index: 10;
  width: 10px;
  height: 10px;
  
  ${({ direction }) => ({
    bottom: css`
      top: 25px;
      left: 20px;
      border-left: 1px solid ${getBorder};
      border-bottom: 1px solid ${getBorder};
      transform: rotate(135deg);
    `,
    top: css`
      bottom: 25px;
      left: 20px;
      border-right: 1px solid ${getBorder};
      border-top: 1px solid ${getBorder};
      transform: rotate(135deg);
    `,
    right: css`
      top: 0;
      right: -25px;
      border-right: 1px solid ${getBorder};
      border-top: 1px solid ${getBorder};
      transform: rotate(-135deg);
    `,
    left: css`
      top: 0;
      left: -25px;
      border-right: 1px solid ${getBorder};
      border-top: 1px solid ${getBorder};
      transform: rotate(45deg);
    `,
  }[direction])}
`

/**
 * Renders tooltip
 *
 * Usage:
 * ```javascript
 * import { Tooltip, TooltipProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example <caption>Tooltip</caption>
 * return (
 *   <Box>
 *     <Tooltip direction="top" tooltipText="example info">
 *      indicator
 *     </Tooltip
 *   </Box>
 * )
 *
 * @memberof module:@admin-bro/design-system
 */
const Tooltip: React.FC<TooltipProps> = ({
  direction, size, tooltipText, children,
}) => (
  <StyledTooltip direction={direction} size={size}>
    {children}
    <TooltipText direction={direction} size={size}>{tooltipText}</TooltipText>
    <Arrow direction={direction} size={size} />
  </StyledTooltip>
)

export interface StyledTooltipProps {
  /** Direction of tooltip */
  direction: 'left' | 'right' | 'top' | 'bottom',
  /** Size of tooltip */
  size: 'lg',
}

export type TooltipProps = StyledTooltipProps & {
  /** Text shown on the tooltip */
  tooltipText: string,
}

/**
 * Prop Types of a Tooltip component.
 * @typedef {object} TooltipProps
 * @memberof module:@admin-bro/design-system.Tooltip
 * @alias TooltipProps
 */

export { Tooltip }
export default Tooltip
