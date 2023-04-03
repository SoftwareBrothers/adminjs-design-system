/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'
import presetEnv from '@babel/preset-env'
import presetReact from '@babel/preset-react'
import presetTs from '@babel/preset-typescript'

const minify = process.env.NODE_ENV === 'production'
const extensions = ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx']

const plugins = [
  resolve({ extensions }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.IS_BROWSER': 'true',
    preventAssignment: true,
  }),
  commonjs(),
  babel({
    extensions,
    babelrc: false,
    babelHelpers: 'bundled',
    presets: [
      [presetEnv, {
        targets: {
          node: '18',
        },
        loose: true,
        modules: false,
      }],
      presetReact,
      presetTs,
    ],
  }),
  ...(minify ? [terser()] : []),
]

export default {
  input: 'entry.js',
  plugins,
  external: [
    'react',
    '@adminjs/design-system/styled-components',
    'react-dom',
    'react-router',
    'react-router-dom',
    'react-feather',
  ],
  output: {
    file: minify ? 'bundle.production.js' : 'bundle.development.js',
    sourcemap: minify ? false : 'inline',
    name: 'AdminJSDesignSystem',
    format: 'iife',
    interop: 'auto',
    inlineDynamicImports: true,
    globals: {
      react: 'React',
      '@adminjs/design-system/styled-components': 'styled',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
      'react-feather': 'FeatherIcons',
      'react-select': 'ReactSelect',
      'react-select/async': 'ReactSelectAsync',
      'react-select/creatable': 'ReactSelectCreatable',
    },
  },
}
