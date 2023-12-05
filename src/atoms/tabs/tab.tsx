import React, { PropsWithChildren, useLayoutEffect } from 'react'

import { useTabs } from './tabs.jsx'

export interface TabProps extends PropsWithChildren {
  /**
   * ID of the Tab. It has to be a unique string
   */
  id: string
  /**
   * Title of the Tab that will be shown on the tab navigation bar.
   */
  label: string
}

/**
 * Renders children inside Tabs component. Each Tab will add a single tab in
 * the navigation bar.
 */
export const Tab: React.FC<TabProps> = ({ id, label, children }) => {
  const { currentTab, registerTab, unregisterTab } = useTabs()

  useLayoutEffect(() => {
    registerTab(id, label)
    return () => unregisterTab(id)
  })

  if (id !== currentTab) {
    return null
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

Tab.displayName = 'Tab'

export default Tab
