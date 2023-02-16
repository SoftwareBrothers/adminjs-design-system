import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useMemo,
  PropsWithChildren,
  useContext,
  ComponentType,
} from 'react'
import styled, { css } from 'styled-components'
import assert from '../../utils/assert'

export interface TabsProps extends PropsWithChildren {
  /**
   * Controls which Tab is currently displayed. It should be the same as an ID
   * of one of the tabs.
   */
  currentTab: string
  /**
   * Called with Tab ID when the user clicks on a tab navigation button.
   */
  onChange?: (tabId: string) => void
  /**
   * Custom component to use as the Tabs header instead of default 'div'.
   */
  headerComponent?: ComponentType
  /**
   * Custom component to use as the Tab button instead of default 'button'.
   */
  buttonComponent?: ComponentType<{
    onClick: () => void
    active: boolean
    tabId: string
  }>
  /**
   * Custom component to use as the Tabs content container instead of default 'div'.
   */
  contentComponent?: ComponentType
}

interface TabData {
  id: string
  title: string
}

interface TabContextType {
  registerTab: (id: string, title: string) => void
  unregisterTab: (id: string) => void
  currentTab: string
}

const StyledButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: ${({ theme }) => `${theme.space.lg} ${theme.space.xl}`};
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.grey60};
  user-select: none;
  ${({ theme }) => ({
    fontFamily: theme.font,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.lineHeights.lg,
  })};

  ${({ active, theme }) => active && css`
    border-color: ${theme.colors.primary100};
    color: ${theme.colors.primary100};
  `}
`

const StyledContent = styled.div.attrs({ role: '' })`
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.div`
  display: flex;
`

/**
 * Tabs component renders a tab navigation bar that lets the user select a Tab
 * to display below. Children of the selected Tab are then rendered below the
 * navigation bar.
 */
const Tabs: FC<TabsProps> = ({
  currentTab,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
  children,
  headerComponent: Header = StyledHeader,
  buttonComponent: Button = StyledButton,
  contentComponent: Content = StyledContent,
}) => {
  const [tabs, setTabs] = useState<TabData[]>([])

  const registerTab = useCallback((id: string, title: string) => {
    setTabs((currentTabs) => {
      if (currentTabs.find((t) => t.id === id)) {
        // eslint-disable-next-line no-console
        console.error(`There are multiple Tab components with ID '${id}'`)
      }
      return [...currentTabs, { id, title }]
    })
  }, [])

  const unregisterTab = useCallback(
    (id: string) => setTabs((newTabs) => newTabs.filter((t) => t.id !== id)),
    [],
  )

  const memoizedContext = useMemo(
    () => ({ currentTab, registerTab, unregisterTab }),
    [currentTab, registerTab, unregisterTab],
  )

  return (
    <TabContext.Provider value={memoizedContext}>
      <StyledContent>
        <Header>
          {tabs.map(({ id, title }) => (
            <Button active={id === currentTab} key={id} onClick={() => onChange(id)} tabId={id}>
              {title}
            </Button>
          ))}
        </Header>
        <Content>{children}</Content>
      </StyledContent>
    </TabContext.Provider>
  )
}

export const TabContext = createContext<TabContextType>({
  registerTab: () => {
    // eslint-disable-next-line no-console
    console.error('Tab used outside of Tabs component. Tab needs to be a child of Tabs.')
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unregisterTab: () => {},
  currentTab: '',
})

export const useTabs = (): TabContextType => {
  const ctx = useContext(TabContext)
  assert(TabContext, 'useTabs is used outside TabContext')
  return ctx
}

export default Tabs
