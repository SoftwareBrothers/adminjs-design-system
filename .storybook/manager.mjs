import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  colorPrimary: '#3040D6',
  colorSecondary: '#3040D6',

  appBg: '#F4F8FC',
  appContentBg: '#FFFFFF',
  appBorderColor: '#D5D9E0',
  appBorderRadius: 8,

  fontBase: 'Roboto, sans-serif',
  fontCode: 'monospace',

  textColor: '#0B1C34',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: '#0B1C34',
  barSelectedColor: '#3040D6',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: '#D5D9E0',
  inputTextColor: '#0B1C34',
  inputBorderRadius: 0,

  brandTitle: 'Admin Design System',
  brandUrl: 'https://adminjs.co/',
  brandImage: 'https://demo.adminjs.co/admin/frontend/assets/logo.svg',
  brandTarget: '_blank',
});


addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme,
  initialActive: 'sidebar',
});
