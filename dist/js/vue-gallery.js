(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('blueimp-gallery/css/blueimp-gallery.min.css'), require('blueimp-gallery/js/blueimp-gallery-fullscreen.js'), require('blueimp-gallery/js/blueimp-gallery.js')) :
	typeof define === 'function' && define.amd ? define(['blueimp-gallery/css/blueimp-gallery.min.css', 'blueimp-gallery/js/blueimp-gallery-fullscreen.js', 'blueimp-gallery/js/blueimp-gallery.js'], factory) :
	(global.VueGallery = factory(null,null,global.blueimp));
}(this, (function (blueimpGallery_min_css,blueimpGalleryFullscreen_js,blueimp) { 'use strict';

blueimp = blueimp && blueimp.hasOwnProperty('default') ? blueimp['default'] : blueimp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var VueGallery$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "blueimp-gallery blueimp-gallery-controls", class: { 'blueimp-gallery-carousel': _vm.carousel }, attrs: { "id": _vm.id } }, [_c('div', { staticClass: "slides" }), _vm._v(" "), _c('h3', { staticClass: "title" }), _vm._v(" "), _c('a', { staticClass: "prev" }, [_vm._v("‹")]), _vm._v(" "), _c('a', { staticClass: "next" }, [_vm._v("›")]), _vm._v(" "), !_vm.carousel ? _c('a', { staticClass: "close" }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), !_vm.carousel ? _c('ol', { staticClass: "indicator" }) : _vm._e(), _vm._v(" "), _vm.carousel ? _c('a', { staticClass: "play-pause" }) : _vm._e()]);
  }, staticRenderFns: [],
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    carousel: {
      type: Boolean,
      default: false
    },

    index: {
      type: Number
    },

    id: {
      type: String,
      default: 'blueimp-gallery'
    }
  },

  data: function data() {
    return {
      instance: null
    };
  },


  watch: {
    index: function index(value) {
      if (this.carousel) {
        return;
      }

      if (value !== null) {
        this.open(value);
      } else {
        if (this.instance) {
          this.instance.close();
        }

        this.$emit('close');
      }
    }
  },

  mounted: function mounted() {
    if (this.carousel) {
      this.open();
    }
  },
  destroyed: function destroyed() {
    if (this.instance !== null) {
      this.instance.close();
      this.instance = null;
    }
  },


  methods: {
    open: function open() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;

      var options = _extends({
        toggleControlsOnReturn: false,
        toggleControlsOnSlideClick: false,
        closeOnSlideClick: false,
        carousel: this.carousel,
        container: '#' + this.id,
        index: index,
        onopen: function onopen() {
          return _this.$emit('onopen');
        },
        onopened: function onopened() {
          return _this.$emit('onopened');
        },
        onslide: function onslide(index, slide) {
          return _this.$emit('onslide', { index: index, slide: slide });
        },
        onslideend: function onslideend(index, slide) {
          return _this.$emit('onslideend', { index: index, slide: slide });
        },
        onslidecomplete: function onslidecomplete(index, slide) {
          return _this.$emit('onslidecomplete', { index: index, slide: slide });
        },
        onclose: function onclose() {
          return _this.$emit('close');
        },
        onclosed: function onclosed() {
          return _this.$emit('onclosed');
        }
      }, this.options);

      if (this.carousel) {
        options.container = this.$el;
      }

      this.instance = instance(this.images, options);
    }
  }
};

return VueGallery$1;

})));
