import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const minify = process.env.MINIFY === 'true'
const extensions = ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx']

const plugins = [
  resolve({ extensions }),
  commonjs(),
  babel({
    extensions,
    babelrc: false,
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
    'styled-system',
    'prop-types',
    'react-dom',
    'react-router',
    'react-router-dom',
  ],
  output: {
    file: minify ? 'bundle-min.js' : 'bundle.js',
    name: 'DesignSystem',
    format: 'iife',
    globals: {
      react: 'React',
      'styled-components': 'styled',
      'styled-system': 'StyledSystem',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM',
    },
  },
}
