module.exports = {
  stories: ['../../src/**/*.stories.tsx'],
  addons: [
    require.resolve('@storybook/addon-knobs/register'),
    require.resolve('@storybook/addon-docs'),
  ],
};