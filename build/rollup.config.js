import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  plugins: [
    vue({ css: true }),
    babel({
      babelrc: true,
      runtimeHelpers: true,
      externalHelpers: false,
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ],
  output: {
    file: process.env.NODE_ENV === 'production' ? 'dist/js/vue-gallery.min.js' : 'dist/js/vue-gallery.js',
    format: 'umd',
    name: 'VueGallery',
  }
};
