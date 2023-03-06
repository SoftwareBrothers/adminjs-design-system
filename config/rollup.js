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
    ],
    presets: [
      presetEnv,
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
  ],
  output: {
    file: minify ? 'bundle.production.js' : 'bundle.development.js',
    sourcemap: minify ? false : 'inline',
    name: 'AdminJSDesignSystem',
    format: 'iife',
    interop: 'auto',
    globals: {
      react: 'React',
      'styled-components': 'styled',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
      'react-select': 'ReactSelect',
      'react-select/async': 'ReactSelectAsync',
      'react-select/creatable': 'ReactSelectCreatable',
    },
  },
}
