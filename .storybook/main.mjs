import path from 'path'

import ResolveTypeScriptPlugin from 'resolve-typescript-plugin'
import TypeScriptConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: (config) => {
    if (!config.module) config.module = { rules: [] }
    if (!config.module.rules) config.module.rules = []
    if (!config.resolve) config.resolve = {}

    config.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
    })

    config.resolve.alias = {
      atoms: path.resolve(__dirname, '../src/atoms/'),
      hooks: path.resolve(__dirname, '../src/hooks/'),
      molecules: path.resolve(__dirname, '../src/molecules/'),
      organisms: path.resolve(__dirname, '../src/organisms/'),
      templates: path.resolve(__dirname, '../src/templates/'),
      utils: path.resolve(__dirname, '../src/utils/'),
    }

    config.resolve.extensions = ['.js', '.jsx', '.json']

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      /**
       * See https://github.com/storybookjs/storybook/issues/15962
       * and https://github.com/softwareventures/resolve-typescript-plugin
       */
      new ResolveTypeScriptPlugin(),
      new TypeScriptConfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]

    return config
  },
  babel: () => ({
    plugins: [
      [
        'styled-components',
        { displayName: true },
      ],
      [
        'module-resolver',
        {
          cwd: './build/',
          root: ['./src/'],
          alias: {
            '@styled-components': './utils/styled.js',
          },
        },
      ],
    ],
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            node: '20',
          },
          loose: true,
          modules: false,
        },
      ],
      '@babel/preset-typescript',
    ],
  }),
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
        jsx: 'preserve',
      },
    },
  },
  docs: {
    autodocs: true,
  },
}

export default config
