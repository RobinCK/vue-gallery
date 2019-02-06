import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    file: isProduction ? 'dist/js/vue-gallery.min.js' : 'dist/js/vue-gallery.js',
    format: 'umd',
    name: 'VueGallery',
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
    }),
    babel({
      runtimeHelpers: true,
      externalHelpers: false,
    }),
    (isProduction && terser())
  ],
};
