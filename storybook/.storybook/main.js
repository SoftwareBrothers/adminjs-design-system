module.exports = {
  stories: ['../../src/**/*.stories.tsx'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
};
