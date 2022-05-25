import { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  typescript: {
    reactDocgen: false,
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   compilerOptions: {
    //     allowSyntheticDefaultImports: false,
    //     esModuleInterop: false,
    //   },
    //   tsconfigPath: `${__dirname}/../tsconfig.json`,
    // },
  },
  stories: ['../../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
}

module.exports = config;
