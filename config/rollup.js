/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'
import presetEnv from '@babel/preset-env'
import presetReact from '@babel/preset-react'
import presetTs from '@babel/preset-typescript'
import pluginStyled from 'babel-plugin-styled-components'
import pluginEmotion from '@emotion/babel-plugin'

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
    plugins: [
      pluginStyled,
      pluginEmotion,
    ],
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
    'styled-components',
    'react-dom',
    'react-router',
    'react-router-dom',
    '@emotion/styled',
    '@emotion/react',
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
      'styled-components': 'styled',
      '@emotion/styled': 'emotionStyled',
      '@emotion/react': 'emotionReact',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
      'react-select': 'ReactSelect',
      'react-select/async': 'ReactSelectAsync',
      'react-select/creatable': 'ReactSelectCreatable',
    },
  },
}
