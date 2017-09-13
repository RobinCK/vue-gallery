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
    <gallery :images="images" :index="index" @close="index = null"></photoSwipe>
    <button type="button" @click="index = 0"></button>
  </div>
</template>

<script>
  import Gallery from 'vue-gallery';
  
  export default {
    data() {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null, // index image
      };
    },
    
    components: {
      Gallery
    },
  }
</script> 
```

### Browser (ES5)
```html
<script type="text/javascript" src="blueimp-gallery.min.js"></script>
<script type="text/javascript" src="vue.js"></script>
<script type="text/javascript" src="vue-gallery.js"></script>

<div id="app">
  <gallery :images="images" :index="index" @close="index = null"></photoSwipe>
  <button type="button" @click="index = 0"></button>
</div>

<script type="text/javascript">
  new Vue({
    el: '#app',
    data: function() {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null, // index image
      };
    },
    
    components: {
      'gallery': VueGallery
    },
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
| Name         | Params                   | Description  |
| -------------|:-------------------------|--------------|
| close        |                          | Close        |

## License
MIT © [Igor Ognichenko](https://github.com/RobinCK)
