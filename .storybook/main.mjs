/** @type { import('@storybook/react-webpack5').StorybookConfig } */
export default {
  stories: ['../build/**/*.stories.js'],
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
    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      enforce: 'pre',
      loader: require.resolve('source-map-loader'),
      resolve: {
        fullySpecified: false,
      },
    })
    return config
  },
  babel: () => ({
    plugins: [
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
            node: '18',
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
      },
    },
  },
  docs: {
    autodocs: true,
  },
}
