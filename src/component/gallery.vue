<template>
  <div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <ol class="indicator"></ol>
  </div>
</template>

<script>
  import 'blueimp-gallery/css/blueimp-gallery.min.css';
  import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js';
  import gallery from 'blueimp-gallery/js/blueimp-gallery.js';

  export default {
    props: {
      images: {
        type: Array,
        default() {
          return [];
        },
      },

      options: {
        type: Object,
        default() {
          return {};
        },
      },

      openImage: {
        type: Number,
        default: null,
      },
    },

    data() {
      return {
        instance: null,
      };
    },

    watch: {
      openImage(value) {
        if (value !== null) {
          this.open(value);
        } else if (gallery) {
          this.instance.close();
        }
      },
    },

    destoryed() {
      this.instance.close();
      this.instance = null;
    },

    methods: {
      open(index) {
        this.instance = gallery(this.images, Object.assign({
          toggleControlsOnReturn: false,
          toggleControlsOnSlideClick: false,
          closeOnSlideClick: false,
          index,
        }, this.options));
      },
    },
  };
</script>
