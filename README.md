<p align="center">
<img src="https://cdn.rawgit.com/RobinCK/vue-gallery/a08dae25/doc/gallery.png">
</p>

<p align="center">
  <a href="https://travis-ci.org/RobinCK/vue-gallery"><img src="https://img.shields.io/travis/RobinCK/vue-gallery.svg?style=flat-square"></a>
  <a href="https://github.com/RobinCK/vue-gallery"><img src="https://img.shields.io/badge/vuejs-2.x-brightgreen.svg?style=flat-square"></a>
  <a href="https://codeclimate.com/github/RobinCK/vue-gallery"><img src="https://img.shields.io/codeclimate/github/RobinCK/vue-gallery.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/vue-gallery"><img src="https://img.shields.io/npm/dt/vue-gallery.svg?style=flat-square"></a>
</p>

<p align="center">
  <a href="https://david-dm.org/RobinCK/vue-gallery"><img src="https://david-dm.org/RobinCK/vue-gallery.svg?style=flat-square"></a>
  <a href="https://david-dm.org/RobinCK/vue-gallery?type=dev"><img src="https://david-dm.org/RobinCK/vue-gallery/dev-status.svg?style=flat-square"></a>
  <a href="https://github.com/RobinCK/vue-gallery"><img src="https://img.shields.io/npm/v/vue-gallery.svg?style=flat-square"></a>
  <a href="https://github.com/RobinCK/vue-gallery/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vue-gallery.svg?style=flat-square"></a>

</p>

# vue-gallery
:camera: VueJS responsive and customizable image and video gallery, carousel and lightbox, optimized for both mobile and desktop web browsers.

## Example

[jsFiddle - image](https://fiddle.jshell.net/Robin_ck/LffrLb2k/show/light/)

[jsFiddle - video](https://fiddle.jshell.net/Robin_ck/djqcrm8m/show/light/)

## Install
#### CDN

Recommended: https://unpkg.com/vue-gallery, which will reflect the latest version as soon as it is published to npm. You can also browse the source of the npm package at https://unpkg.com/vue-gallery/

#### NPM

``` bash
npm install vue-gallery --save
```

#### Yarn

``` bash
yarn add vue-gallery
```
## Development Setup

``` bash
# install dependencies
npm install

# build dist files
npm run build
```

## Usage

### VueJS single file (ECMAScript 2015)
```html
<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script>
```

### Nuxt.js

https://github.com/RobinCK/vue-gallery/issues/3

1. Make sure you have installed the plugin using npm

```shell
$ npm install --save-dev vue-gallery
```
2. Add a new vue-gallery.js file to your nuxt plugins folder containing the following:

```js
// ~/plugins/vue-gallery.js
import Vue from 'vue'
import VueGallery from 'vue-gallery'

Vue.component('gallery', VueGallery)
```

3.
In your nuxt.config.js add { src: '~/plugins/vue-gallery.js', ssr: false } to the plugins array. The ssr: false part is where all the magic happens, since the file is included only on the client-side (https://nuxtjs.org/api/configuration-plugins)

4. Remember if you are turned the ssr flag to `false`, you should use `<no-ssr>` tags around the gallery tags

```html
// component.vue
<template id="">
  <div>
    <no-ssr>
      <gallery :images="images" :index="index" @close="index = null">
      </gallery>
    </no-ssr>
    <div
    class="image"
    v-for="image, imageIndex in images"
    @click="index = imageIndex"
    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
```

Otherwise you may get an error saying that you aren't finding the blueimp-gallery widget in your console log.

```js
blueimp Gallery: Widget container not found. #blueimp-gallery
```


### Browser (ES5)
```html
  <script type="text/javascript" src="https://unpkg.com/vue@2.4.3/dist/vue.js"></script>
  <script type="text/javascript" src="https://unpkg.com/blueimp-gallery@2.27.0/js/blueimp-helper.js"></script>
  <script type="text/javascript" src="https://unpkg.com/blueimp-gallery@2.27.0/js/blueimp-gallery.js"></script>
  <script type="text/javascript" src="https://unpkg.com/blueimp-gallery@2.27.0/js/blueimp-gallery-fullscreen.js"></script>
  <script type="text/javascript" src="vue-gallery.js"></script>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/blueimp-gallery@2.27.0/css/blueimp-gallery.min.css">


<div id="app">
  <gallery :images="images" :index="index" @close="index = null"></gallery>
  <div
    class="image"
    v-for="image, imageIndex in images"
    @click="index = imageIndex"
    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
  ></div>
</div>

<script type="text/javascript">
  new Vue({
    el: '#app',
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff'
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    }
  });
</script>
```

## Props

| Props               | Type      | Default                                         | Description  |
| --------------------|:----------| ------------------------------------------------|--------------|
| images              | Array     | []                                              | Urls list  |
| index               | Number    | null                                            | Opened image index  |
| options             | Object    |                                                 | [blueimp-gallery](https://github.com/blueimp/Gallery) options |



## Events
| Name             | Params                  | Description  |
| -----------------|:------------------------|--------------|
| onopen           |                         |         |
| onopened         |                         |         |
| onslide          |                         |         |
| onslideend       |                         |         |
| onslidecomplete  |                         |         |
| onclose          |                         |         |
| onclosed         |                         |         |

## License
MIT © [Igor Ognichenko](https://github.com/RobinCK)
