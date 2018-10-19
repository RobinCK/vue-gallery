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

  var __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};
  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) return;
    inject("data-v-32d676c0_0", { source: "\n.blueimp-gallery > .description {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  color: #fff;\n  display: none;\n}\n.blueimp-gallery-controls > .description {\n  display: block;\n}\n", map: undefined, media: undefined });
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

    {
      component.__file = "/Users/levizitting/git/vue-gallery/src/component/gallery.vue";
    }

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

  var VueGallery = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

  return VueGallery;

})));
