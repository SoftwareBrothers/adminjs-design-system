/* eslint-disable no-shadow */
import { space, SpaceProps, LayoutProps, variant, layout, color, ColorProps } from 'styled-system'
import { styled } from '@styled-components'

import { cssClass } from '../../utils/css-class.js'
import { DEFAULT_DRAWER_WIDTH } from '../../constants.js'

/**
 * Props for Drawer component. Apart from those described below it also extends all
 * {@link SpaceProps}.
 *
 * @alias DrawerProps
 * @extends SpaceProps
 * @extends LayoutProps
 * @extends ColorProps
 * @memberof Drawer
 */
export type DrawerProps = SpaceProps & LayoutProps & ColorProps & {
  /** Indicates if drawer should be hidden */
  isHidden?: boolean;
  /**
   * Drawer variant
   */
  variant?: 'filter';
}

const variants = variant({
  variants: {
    filter: {
      bg: 'filterBg',
      width: '400px',
      className: cssClass(['Drawer', 'Drawer_Filter']),
    },
  },
})

/**
 * @classdesc
 *
 * <img src="components/drawer.png" />
 *
 * Drawer component renders a huge side area where {@link BaseActionComponent} renders
 * all actions where {@link Action.showInDrawer} is set to true.
 *
 * You probably don't want to use it directly in your actions, but if you decide to set
 * `showInDrawer` to true you will probably want to use `DrawerContent` or `DrawerFooter`
 * components.
 *
 * All these components: Drawer, DrawerContent and Drawer Footer extends {@link SpaceProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Drawer, DrawerProps, DrawerContent, DrawerFooter } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see DrawerProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-drawer--default Storybook}
 * @example
 * return (
 * <Box height="500px">
 *   <Drawer>
 *     <DrawerContent>
 *       <Header.H3>
 *         <Button size="icon" rounded mr="lg">
 *           <Icon icon="ChevronRight" />
 *         </Button>
 *         Edit
 *       </Header.H3>
 *       <Box my="x3" p={0}>
 *         <Button size="sm">
 *           <Icon icon="Info" />
 *           Info
 *         </Button>
 *         <Button size="sm" ml="lg">
 *           <Icon icon="Trash" />
 *           Delete
 *         </Button>
 *       </Box>
 *
 *     </DrawerContent>
 *     <DrawerFooter>
 *       <Button variant="contained">
 *         Save
 *       </Button>
 *     </DrawerFooter>
 *   </Drawer>
 * </Box>
 * )
 *
 * @section design-system
 */
const Drawer = styled.section<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  z-index: 100;

  transform: translateX(${({ isHidden }) => (isHidden ? '100%' : '0%')});
  transition: transform 0.25s ease-in-out;

  box-shadow: -1px 0px 0px #EEEEEF, -4px 0px 16px rgba(107, 119, 129, 0.1);
  background-color: ${({ theme }) => theme.colors.container};
  overflow-y: auto;
  overflow-x: hidden;
  
  ${space};
  ${color};
  ${layout};
  ${variants};
`

Drawer.defaultProps = {
  width: DEFAULT_DRAWER_WIDTH,
  className: cssClass('Drawer'),
}
Drawer.displayName = 'Drawer'

export { Drawer }
export default Drawer
