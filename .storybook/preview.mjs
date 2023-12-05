import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import ThemeDecorator from './theme-decorator.js'
import { theme } from './manager.mjs'

/** @type { import('@storybook/react').Preview['parameters'] } */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    source: {
      language: 'tsx',
      type: 'auto',
    },
    theme,
  },
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

/** @type { import('@storybook/react').Preview['decorators'] } */
export const decorators = [ThemeDecorator]

/** @type { import('@storybook/react').Preview['globalTypes'] } */
export const globalTypes = {
  theme: {
    title: 'Theme',
    description: 'Theme for components',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: ['default', 'red', 'green', 'orange'],
    },
  },
}
