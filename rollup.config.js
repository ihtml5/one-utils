// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import builtins from 'rollup-plugin-node-builtins';
import { minify } from 'uglify-es';

export default {
  input: './src/index.js',
  output: {
    file: 'build/index.js',
    format: 'umd',
    exports: 'named',
    name: 'oneUtils',
    sourceMap: false
  },
  plugins: [
    resolve(),
    builtins(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify({}, minify)
  ]
};