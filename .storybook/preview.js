import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import ThemeDecorator from './theme-decorator'

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: [/^on[A-Z].*/, /^aria\-.*/],
    sort: 'requiredFirst',
    expanded: true,
    hideNoControlsWarning: true,
  },
  options: {
    storySort: {
      order: ['Default'],
    },
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
  viewport: { viewports: MINIMAL_VIEWPORTS },
}

export const decorators = [ThemeDecorator]
