import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  dest: process.env.NODE_ENV === 'production' ? 'dist/js/vue-gallery.min.js' : 'dist/js/vue-gallery.js',
  moduleName: 'VueGallery',
  format: 'umd',
  plugins: [
    vue(),
    babel({
      runtimeHelpers: true,
      externalHelpers: false,
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ],
};
