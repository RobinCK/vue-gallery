(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('blueimp-gallery/css/blueimp-gallery.min.css'), require('blueimp-gallery/js/blueimp-gallery-fullscreen.js'), require('blueimp-gallery/js/blueimp-gallery-video.js'), require('blueimp-gallery/js/blueimp-gallery-youtube.js'), require('blueimp-gallery/js/blueimp-gallery.js')) :
  typeof define === 'function' && define.amd ? define(['blueimp-gallery/css/blueimp-gallery.min.css', 'blueimp-gallery/js/blueimp-gallery-fullscreen.js', 'blueimp-gallery/js/blueimp-gallery-video.js', 'blueimp-gallery/js/blueimp-gallery-youtube.js', 'blueimp-gallery/js/blueimp-gallery.js'], factory) :
  (global = global || self, global.VueGallery = factory(null, null, null, null, global.blueimp));
}(this, function (blueimpGallery_min_css, blueimpGalleryFullscreen_js, blueimpGalleryVideo_js, blueimpGalleryYoutube_js, blueimp) { 'use strict';

  blueimp = blueimp && blueimp.hasOwnProperty('default') ? blueimp['default'] : blueimp;

  //
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
        var options = Object.assign({
          toggleControlsOnReturn: false,
          toggleControlsOnSlideClick: false,
          closeOnSlideClick: false,
          carousel: this.carousel,
          container: "#".concat(this.id),
          index: index,
          onopen: function onopen() {
            return _this.$emit('onopen');
          },
          onopened: function onopened() {
            return _this.$emit('onopened');
          },
          onslide: this.onSlideCustom,
          onslideend: function onslideend(index, slide) {
            return _this.$emit('onslideend', {
              index: index,
              slide: slide
            });
          },
          onslidecomplete: function onslidecomplete(index, slide) {
            return _this.$emit('onslidecomplete', {
              index: index,
              slide: slide
            });
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
        this.$emit('onslide', {
          index: index,
          slide: slide
        });
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

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "blueimp-gallery blueimp-gallery-controls",
        class: { "blueimp-gallery-carousel": _vm.carousel },
        attrs: { id: _vm.id }
      },
      [
        _c("div", { staticClass: "slides" }),
        _vm._v(" "),
        _c("h3", { staticClass: "title" }),
        _vm._v(" "),
        _c("p", { staticClass: "description" }),
        _vm._v(" "),
        _c("a", { staticClass: "prev" }, [_vm._t("prev", [_vm._v("‹")])], 2),
        _vm._v(" "),
        _c("a", { staticClass: "next" }, [_vm._t("next", [_vm._v("›")])], 2),
        _vm._v(" "),
        !_vm.carousel
          ? _c("a", { staticClass: "close" }, [_vm._t("close", [_vm._v("X")])], 2)
          : _vm._e(),
        _vm._v(" "),
        !_vm.carousel ? _c("ol", { staticClass: "indicator" }) : _vm._e(),
        _vm._v(" "),
        _vm.carousel ? _c("a", { staticClass: "play-pause" }) : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-69ef1648_0", { source: "\n.blueimp-gallery > .description {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  color: #fff;\n  display: none;\n}\n.blueimp-gallery-controls > .description {\n  display: block;\n}\n", map: {"version":3,"sources":["/Users/user/projects/vue-gallery/src/component/gallery.vue"],"names":[],"mappings":";AA+IA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;CACA;AACA;EACA,eAAA;CACA","file":"gallery.vue","sourcesContent":["<template>\n  <div\n    :id=\"id\"\n    class=\"blueimp-gallery blueimp-gallery-controls\"\n    :class=\"{'blueimp-gallery-carousel': carousel}\">\n\n    <div class=\"slides\"></div>\n    <h3 class=\"title\"></h3>\n    <p class=\"description\"></p>\n    <a class=\"prev\">\n      <slot name=\"prev\">‹</slot>\n    </a>\n    <a class=\"next\">\n      <slot name=\"next\">›</slot>\n    </a>\n    <a v-if=\"!carousel\" class=\"close\">\n      <slot name=\"close\">X</slot>\n    </a>\n    <ol v-if=\"!carousel\" class=\"indicator\"></ol>\n    <a v-if=\"carousel\" class=\"play-pause\"></a>\n  </div>\n</template>\n\n<script>\n  import 'blueimp-gallery/css/blueimp-gallery.min.css';\n  import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js';\n  import 'blueimp-gallery/js/blueimp-gallery-video.js';\n  import 'blueimp-gallery/js/blueimp-gallery-youtube.js';\n  import blueimp from 'blueimp-gallery/js/blueimp-gallery.js';\n\n  export default {\n    props: {\n      images: {\n        type: Array,\n        default() {\n          return [];\n        },\n      },\n\n      options: {\n        type: Object,\n        default() {\n          return {};\n        },\n      },\n\n      carousel: {\n        type: Boolean,\n        default: false,\n      },\n\n      index: {\n        type: Number,\n      },\n\n      id: {\n        type: String,\n        default: 'blueimp-gallery',\n      },\n    },\n\n    data() {\n      return {\n        instance: null,\n      };\n    },\n\n    watch: {\n      index(value) {\n        if (this.carousel) {\n          return;\n        }\n\n        if (value !== null) {\n          this.open(value);\n        } else {\n          if (this.instance) {\n            this.instance.close();\n          }\n\n          this.$emit('close');\n        }\n      },\n    },\n\n    mounted() {\n      if (this.carousel) {\n        this.open();\n      }\n    },\n\n    destroyed() {\n      if (this.instance !== null) {\n        this.instance.destroyEventListeners();\n        this.instance.close();\n        this.instance = null;\n      }\n    },\n\n    methods: {\n      open(index = 0) {\n        const instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;\n\n        const options = Object.assign({\n          toggleControlsOnReturn: false,\n          toggleControlsOnSlideClick: false,\n          closeOnSlideClick: false,\n          carousel: this.carousel,\n          container: `#${this.id}`,\n          index,\n          onopen: () => this.$emit('onopen'),\n          onopened: () => this.$emit('onopened'),\n          onslide: this.onSlideCustom,\n          onslideend: (index, slide) => this.$emit('onslideend', { index, slide }),\n          onslidecomplete: (index, slide) => this.$emit('onslidecomplete', { index, slide }),\n          onclose: () => this.$emit('close'),\n          onclosed: () => this.$emit('onclosed'),\n        }, this.options);\n\n        if (this.carousel) {\n          options.container = this.$el;\n        }\n\n        this.instance = instance(this.images, options);\n      },\n      onSlideCustom(index, slide) {\n        this.$emit('onslide', { index, slide });\n\n        const image = this.images[index];\n        if (image !== undefined) {\n          const text = image.description;\n          const node = this.instance.container.find('.description');\n          if (text) {\n            node.empty();\n            node[0].appendChild(document.createTextNode(text));\n          }\n        }\n      },\n    },\n  };\n</script>\n\n<style>\n  .blueimp-gallery > .description {\n    position: absolute;\n    top: 30px;\n    left: 15px;\n    color: #fff;\n    display: none;\n  }\n  .blueimp-gallery-controls > .description {\n    display: block;\n  }\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var VueGallery = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  return VueGallery;

}));
