(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('blueimp-gallery/css/blueimp-gallery.min.css'), require('blueimp-gallery/js/blueimp-gallery-fullscreen.js'), require('blueimp-gallery/js/blueimp-gallery-video.js'), require('blueimp-gallery/js/blueimp-gallery-youtube.js'), require('blueimp-gallery/js/blueimp-gallery.js')) :
  typeof define === 'function' && define.amd ? define(['blueimp-gallery/css/blueimp-gallery.min.css', 'blueimp-gallery/js/blueimp-gallery-fullscreen.js', 'blueimp-gallery/js/blueimp-gallery-video.js', 'blueimp-gallery/js/blueimp-gallery-youtube.js', 'blueimp-gallery/js/blueimp-gallery.js'], factory) :
  (global.VueGallery = factory(null,null,null,null,global.blueimp));
}(this, (function (blueimpGallery_min_css,blueimpGalleryFullscreen_js,blueimpGalleryVideo_js,blueimpGalleryYoutube_js,blueimp) { 'use strict';

  blueimp = blueimp && blueimp.hasOwnProperty('default') ? blueimp['default'] : blueimp;

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
        this.instance.destroyEventListeners();
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
    }, [_c("div", { staticClass: "slides" }), _vm._v(" "), _c("h3", { staticClass: "title" }), _vm._v(" "), _c("p", { staticClass: "description" }), _vm._v(" "), _c("a", { staticClass: "prev" }, [_vm._v("‹")]), _vm._v(" "), _c("a", { staticClass: "next" }, [_vm._v("›")]), _vm._v(" "), !_vm.carousel ? _c("a", { staticClass: "close" }, [_vm._v("X")]) : _vm._e(), _vm._v(" "), !_vm.carousel ? _c("ol", { staticClass: "indicator" }) : _vm._e(), _vm._v(" "), _vm.carousel ? _c("a", { staticClass: "play-pause" }) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-e1278594_0", { source: "\n.blueimp-gallery > .description {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  color: #fff;\n  display: none;\n}\n.blueimp-gallery-controls > .description {\n  display: block;\n}\n", map: { "version": 3, "sources": ["/home/laravel/package/vue-gallery/src/component/gallery.vue"], "names": [], "mappings": ";AAyIA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;AACA;AACA;EACA,cAAA;AACA", "file": "gallery.vue", "sourcesContent": ["<template>\n  <div\n    :id=\"id\"\n    class=\"blueimp-gallery blueimp-gallery-controls\"\n    :class=\"{'blueimp-gallery-carousel': carousel}\">\n\n    <div class=\"slides\"></div>\n    <h3 class=\"title\"></h3>\n    <p class=\"description\"></p>\n    <a class=\"prev\">‹</a>\n    <a class=\"next\">›</a>\n    <a v-if=\"!carousel\" class=\"close\">X</a>\n    <ol v-if=\"!carousel\" class=\"indicator\"></ol>\n    <a v-if=\"carousel\" class=\"play-pause\"></a>\n  </div>\n</template>\n\n<script>\n  import 'blueimp-gallery/css/blueimp-gallery.min.css';\n  import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js';\n  import 'blueimp-gallery/js/blueimp-gallery-video.js';\n  import 'blueimp-gallery/js/blueimp-gallery-youtube.js';\n  import blueimp from 'blueimp-gallery/js/blueimp-gallery.js';\n\n  export default {\n    props: {\n      images: {\n        type: Array,\n        default() {\n          return [];\n        },\n      },\n\n      options: {\n        type: Object,\n        default() {\n          return {};\n        },\n      },\n\n      carousel: {\n        type: Boolean,\n        default: false,\n      },\n\n      index: {\n        type: Number,\n      },\n\n      id: {\n        type: String,\n        default: 'blueimp-gallery',\n      },\n    },\n\n    data() {\n      return {\n        instance: null,\n      };\n    },\n\n    watch: {\n      index(value) {\n        if (this.carousel) {\n          return;\n        }\n\n        if (value !== null) {\n          this.open(value);\n        } else {\n          if (this.instance) {\n            this.instance.close();\n          }\n\n          this.$emit('close');\n        }\n      },\n    },\n\n    mounted() {\n      if (this.carousel) {\n        this.open();\n      }\n    },\n\n    destroyed() {\n      if (this.instance !== null) {\n        this.instance.destroyEventListeners();\n        this.instance.close();\n        this.instance = null;\n      }\n    },\n\n    methods: {\n      open(index = 0) {\n        const instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;\n\n        const options = Object.assign({\n          toggleControlsOnReturn: false,\n          toggleControlsOnSlideClick: false,\n          closeOnSlideClick: false,\n          carousel: this.carousel,\n          container: `#${this.id}`,\n          index,\n          onopen: () => this.$emit('onopen'),\n          onopened: () => this.$emit('onopened'),\n          onslide: this.onSlideCustom,\n          onslideend: (index, slide) => this.$emit('onslideend', { index, slide }),\n          onslidecomplete: (index, slide) => this.$emit('onslidecomplete', { index, slide }),\n          onclose: () => this.$emit('close'),\n          onclosed: () => this.$emit('onclosed'),\n        }, this.options);\n\n        if (this.carousel) {\n          options.container = this.$el;\n        }\n\n        this.instance = instance(this.images, options);\n      },\n      onSlideCustom(index, slide) {\n        this.$emit('onslide', { index, slide });\n\n        const image = this.images[index];\n        if (image !== undefined) {\n          const text = image.description;\n          const node = this.instance.container.find('.description');\n          if (text) {\n            node.empty();\n            node[0].appendChild(document.createTextNode(text));\n          }\n        }\n      },\n    },\n  };\n</script>\n\n<style>\n  .blueimp-gallery > .description {\n    position: absolute;\n    top: 30px;\n    left: 15px;\n    color: #fff;\n    display: none;\n  }\n  .blueimp-gallery-controls > .description {\n    display: block;\n  }\n</style>\n"] }, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/laravel/package/vue-gallery/src/component/gallery.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook = void 0;
      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var VueGallery = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

  return VueGallery;

})));
