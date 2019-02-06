(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('blueimp-gallery/css/blueimp-gallery.min.css'), require('blueimp-gallery/js/blueimp-gallery-fullscreen.js'), require('blueimp-gallery/js/blueimp-gallery-video.js'), require('blueimp-gallery/js/blueimp-gallery-youtube.js'), require('blueimp-gallery/js/blueimp-gallery.js'), require('vue-runtime-helpers/normalize-component.js'), require('vue-runtime-helpers/inject-style/browser.js')) :
  typeof define === 'function' && define.amd ? define(['blueimp-gallery/css/blueimp-gallery.min.css', 'blueimp-gallery/js/blueimp-gallery-fullscreen.js', 'blueimp-gallery/js/blueimp-gallery-video.js', 'blueimp-gallery/js/blueimp-gallery-youtube.js', 'blueimp-gallery/js/blueimp-gallery.js', 'vue-runtime-helpers/normalize-component.js', 'vue-runtime-helpers/inject-style/browser.js'], factory) :
  (global = global || self, global.VueGallery = factory(null, null, null, null, global.blueimp, global.__vue_normalize__, global.__vue_create_injector__));
}(this, function (blueimpGallery_min_css, blueimpGalleryFullscreen_js, blueimpGalleryVideo_js, blueimpGalleryYoutube_js, blueimp, __vue_normalize__, __vue_create_injector__) { 'use strict';

  blueimp = blueimp && blueimp.hasOwnProperty('default') ? blueimp['default'] : blueimp;
  __vue_normalize__ = __vue_normalize__ && __vue_normalize__.hasOwnProperty('default') ? __vue_normalize__['default'] : __vue_normalize__;
  __vue_create_injector__ = __vue_create_injector__ && __vue_create_injector__.hasOwnProperty('default') ? __vue_create_injector__['default'] : __vue_create_injector__;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var script = {
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
          onslide: this.onSlideCustom,
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
      },
      onSlideCustom: function onSlideCustom(index, slide) {
        this.$emit('onslide', { index: index, slide: slide });

        var image = this.images[index];
        if (image !== undefined) {
          var text = image.description;
          var node = this.instance.container.find('.description');
          if (text) {
            node.empty();
            node[0].appendChild(document.createTextNode(text));
          }
        }
      }
    }
  };

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "blueimp-gallery blueimp-gallery-controls",
      class: { "blueimp-gallery-carousel": _vm.carousel },
      attrs: { id: _vm.id }
    }, [_c("div", { staticClass: "slides" }), _vm._v(" "), _c("h3", { staticClass: "title" }), _vm._v(" "), _c("p", { staticClass: "description" }), _vm._v(" "), _c("a", { staticClass: "prev" }, [_vm._t("prev", [_vm._v("‹")])], 2), _vm._v(" "), _c("a", { staticClass: "next" }, [_vm._t("next", [_vm._v("›")])], 2), _vm._v(" "), !_vm.carousel ? _c("a", { staticClass: "close" }, [_vm._t("close", [_vm._v("X")])], 2) : _vm._e(), _vm._v(" "), !_vm.carousel ? _c("ol", { staticClass: "indicator" }) : _vm._e(), _vm._v(" "), _vm.carousel ? _c("a", { staticClass: "play-pause" }) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-eb421c68_0", { source: "\n.blueimp-gallery > .description {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  color: #fff;\n  display: none;\n}\n.blueimp-gallery-controls > .description {\n  display: block;\n}\n", map: { "version": 3, "sources": ["/Users/user/projects/vue-gallery/src/component/gallery.vue"], "names": [], "mappings": ";AA8IA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;CACA;AACA;EACA,eAAA;CACA", "file": "gallery.vue", "sourcesContent": ["<template>\n  <div\n    :id=\"id\"\n    class=\"blueimp-gallery blueimp-gallery-controls\"\n    :class=\"{'blueimp-gallery-carousel': carousel}\">\n\n    <div class=\"slides\"></div>\n    <h3 class=\"title\"></h3>\n    <p class=\"description\"></p>\n    <a class=\"prev\">\n      <slot name=\"prev\">‹</slot>\n    </a>\n    <a class=\"next\">\n      <slot name=\"next\">›</slot>\n    </a>\n    <a v-if=\"!carousel\" class=\"close\">\n      <slot name=\"close\">X</slot>\n    </a>\n    <ol v-if=\"!carousel\" class=\"indicator\"></ol>\n    <a v-if=\"carousel\" class=\"play-pause\"></a>\n  </div>\n</template>\n\n<script>\n  import 'blueimp-gallery/css/blueimp-gallery.min.css';\n  import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js';\n  import 'blueimp-gallery/js/blueimp-gallery-video.js';\n  import 'blueimp-gallery/js/blueimp-gallery-youtube.js';\n  import blueimp from 'blueimp-gallery/js/blueimp-gallery.js';\n\n  export default {\n    props: {\n      images: {\n        type: Array,\n        default() {\n          return [];\n        },\n      },\n\n      options: {\n        type: Object,\n        default() {\n          return {};\n        },\n      },\n\n      carousel: {\n        type: Boolean,\n        default: false,\n      },\n\n      index: {\n        type: Number,\n      },\n\n      id: {\n        type: String,\n        default: 'blueimp-gallery',\n      },\n    },\n\n    data() {\n      return {\n        instance: null,\n      };\n    },\n\n    watch: {\n      index(value) {\n        if (this.carousel) {\n          return;\n        }\n\n        if (value !== null) {\n          this.open(value);\n        } else {\n          if (this.instance) {\n            this.instance.close();\n          }\n\n          this.$emit('close');\n        }\n      },\n    },\n\n    mounted() {\n      if (this.carousel) {\n        this.open();\n      }\n    },\n\n    destroyed() {\n      if (this.instance !== null) {\n        this.instance.close();\n        this.instance = null;\n      }\n    },\n\n    methods: {\n      open(index = 0) {\n        const instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;\n\n        const options = Object.assign({\n          toggleControlsOnReturn: false,\n          toggleControlsOnSlideClick: false,\n          closeOnSlideClick: false,\n          carousel: this.carousel,\n          container: `#${this.id}`,\n          index,\n          onopen: () => this.$emit('onopen'),\n          onopened: () => this.$emit('onopened'),\n          onslide: this.onSlideCustom,\n          onslideend: (index, slide) => this.$emit('onslideend', { index, slide }),\n          onslidecomplete: (index, slide) => this.$emit('onslidecomplete', { index, slide }),\n          onclose: () => this.$emit('close'),\n          onclosed: () => this.$emit('onclosed'),\n        }, this.options);\n\n        if (this.carousel) {\n          options.container = this.$el;\n        }\n\n        this.instance = instance(this.images, options);\n      },\n      onSlideCustom(index, slide) {\n        this.$emit('onslide', { index, slide });\n\n        const image = this.images[index];\n        if (image !== undefined) {\n          const text = image.description;\n          const node = this.instance.container.find('.description');\n          if (text) {\n            node.empty();\n            node[0].appendChild(document.createTextNode(text));\n          }\n        }\n      },\n    },\n  };\n</script>\n\n<style>\n  .blueimp-gallery > .description {\n    position: absolute;\n    top: 30px;\n    left: 15px;\n    color: #fff;\n    display: none;\n  }\n  .blueimp-gallery-controls > .description {\n    display: block;\n  }\n</style>\n"] }, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  var VueGallery = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

  return VueGallery;

}));
