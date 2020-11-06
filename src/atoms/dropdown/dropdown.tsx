import React, {
  createContext,
  FC,
  ForwardRefExoticComponent,
} from 'react'
import { ToggleLayer } from 'react-laag'
import Menu from './menu'

interface Props {
  Trigger: ForwardRefExoticComponent<any>;
}

interface DropdownContextProps {
  close: () => void;
}

export const DropdownContext = createContext<DropdownContextProps>({ close: () => {} })

const Dropdown: FC<Props> = ({
  children, Trigger,
}) => (
  <ToggleLayer
    renderLayer={(props) => (
      <Menu {...props}>
        <DropdownContext.Provider value={{ close: props.close }}>
          {children}
        </DropdownContext.Provider>
      </Menu>
    )}
    placement={{
      anchor: 'BOTTOM_RIGHT',
      autoAdjust: true,
    }}
    closeOnOutsideClick
    closeOnDisappear="full"
  >
    {({ triggerRef, toggle }) => (
      <Trigger
        ref={triggerRef}
        onClick={toggle}
      />
    )}
  </ToggleLayer>
)

export { Dropdown }
export default Dropdown
