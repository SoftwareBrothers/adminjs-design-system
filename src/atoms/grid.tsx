import styled from 'styled-components'
import { grid, style, GridProps as StyledGridProps, ResponsiveValue } from 'styled-system'
import { themeGet } from '../utils'
import Box, { BoxProps } from './box/box'

export type GridProps = BoxProps & StyledGridProps

export type GridColumnProps = GridProps & {
  gridSpan?: number | string | ResponsiveValue<number>;
}

const GridBase = styled(Box)`
  display: grid;
  grid-gap: ${themeGet('space', 'xl')};
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  ${grid};
`

const gridSpan = style({
  prop: 'gridSpan',
  cssProperty: 'grid-column',
  transformValue: (n) => `auto / span ${n}`,
})

const GridColumn = styled(Box)<GridColumnProps>`
  ${gridSpan};
  ${grid};
`

const GridRow = styled(Box)<GridProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${themeGet('space', 'xl')};
  grid-auto-flow: column;
  ${grid};
`

const GridContainer = styled(GridBase)<GridProps>`
`

export { GridContainer, GridColumn, GridRow }
