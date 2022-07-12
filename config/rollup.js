/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'

const minify = process.env.NODE_ENV === 'production'
const extensions = ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx']

const plugins = [
  resolve({ extensions }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.IS_BROWSER': 'true',
  }),
  commonjs(),
  babel({
    extensions,
    babelrc: false,
    plugins: [
      require.resolve('babel-plugin-styled-components'),
    ],
    presets: [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-typescript'),
    ],
  }),
]

if (minify) {
  plugins.push(terser())
}

export default {
  input: 'entry.js',
  plugins,
  external: [
    'react',
    'styled-components',
    'prop-types',
    'react-dom',
    'react-router',
    'react-router-dom',
  ],
  output: {
    file: minify ? 'bundle.production.js' : 'bundle.development.js',
    sourcemap: minify ? false : 'inline',
    name: 'AdminJSDesignSystem',
    format: 'iife',
    globals: {
      react: 'React',
      'styled-components': 'styled',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
      'react-select': 'ReactSelect',
      'react-select/async': 'ReactSelectAsync',
      'react-select/creatable': 'ReactSelectCreatable',
    },
  },
}
