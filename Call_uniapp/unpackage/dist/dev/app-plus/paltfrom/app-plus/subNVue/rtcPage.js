"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!******************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/main.js?{"type":"appStyle"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!*************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/main.js?{"page":"paltfrom%2Fapp-plus%2FsubNVue%2FrtcPage"} ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _paltfrom_app_plus_subNVue_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paltfrom/app-plus/subNVue/rtcPage.nvue?mpType=page */ 13);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _paltfrom_app_plus_subNVue_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _paltfrom_app_plus_subNVue_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'paltfrom/app-plus/subNVue/rtcPage'\n        _paltfrom_app_plus_subNVue_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_paltfrom_app_plus_subNVue_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkZBQUc7QUFDWCxRQUFRLDJGQUFHO0FBQ1gsUUFBUSwyRkFBRztBQUNYLGdCQUFnQiwyRkFBRyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFsdGZyb20vYXBwLXBsdXMvc3ViTlZ1ZS9ydGNQYWdlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFsdGZyb20vYXBwLXBsdXMvc3ViTlZ1ZS9ydGNQYWdlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rtcPage.nvue?vue&type=template&id=39c12bd0&scoped=true&mpType=page */ 14);\n/* harmony import */ var _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtcPage.nvue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./rtcPage.nvue?vue&type=style&index=0&id=39c12bd0&scoped=true&lang=css&mpType=page */ 30).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./rtcPage.nvue?vue&type=style&index=0&id=39c12bd0&scoped=true&lang=css&mpType=page */ 30).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"39c12bd0\",\n  \"48379fa8\",\n  false,\n  _rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"paltfrom/app-plus/subNVue/rtcPage.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDRGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNEZBQW9GO0FBQzdJOztBQUVBOztBQUVBO0FBQ29MO0FBQ3BMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcnRjUGFnZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5YzEyYmQwJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcnRjUGFnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zOWMxMmJkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zOWMxMmJkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzOWMxMmJkMFwiLFxuICBcIjQ4Mzc5ZmE4XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhbHRmcm9tL2FwcC1wbHVzL3N1Yk5WdWUvcnRjUGFnZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***********************************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?vue&type=template&id=39c12bd0&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=template&id=39c12bd0&scoped=true&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_39c12bd0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?vue&type=template&id=39c12bd0&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c("view", [
        _vm.mode === 1
          ? _c(
              "view",
              {
                staticClass: ["conent"],
                style: {
                  width: _vm.windowWidth + "px",
                  height: _vm.windowHeight + "px"
                }
              },
              [
                _c(
                  "view",
                  {
                    staticStyle: {
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "160px"
                    }
                  },
                  [
                    _c("u-image", {
                      staticStyle: { width: "120px", height: "120px" },
                      attrs: { src: "../../../static/icon_head.png" }
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["icon_text"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v(_vm._s(_vm.peerId))]
                    )
                  ],
                  1
                ),
                _c("view", { staticClass: ["timer"] }, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["icon_text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v(_vm._s(_vm.timeCall))]
                  )
                ]),
                _c("view", { staticClass: ["audio_bottom"] }, [
                  _c("view", {}),
                  _c(
                    "view",
                    {
                      staticClass: ["icon"],
                      on: { click: _vm.enableLocalAudioFn }
                    },
                    [
                      _vm.audio
                        ? _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: { src: "../../../static/icon_openaudio.png" }
                          })
                        : _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: {
                              src: "../../../static/icon_closeaudio.png"
                            }
                          }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("静音")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["icon"], on: { click: _vm.leaveFn } },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img"],
                        attrs: {
                          src: "../../../static/icon_hangup.png",
                          mode: ""
                        }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("挂断")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["icon"],
                      on: { click: _vm.SpeakerphoneFn }
                    },
                    [
                      _vm.Speakerphone
                        ? _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: { src: "../../../static/icon_speakers.png" }
                          })
                        : _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: { src: "../../../static/icon_speaker.png" }
                          }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("免提")]
                      )
                    ],
                    1
                  ),
                  _c("view", {})
                ])
              ]
            )
          : _c(
              "view",
              {
                staticClass: ["conent"],
                style: {
                  width: _vm.windowWidth + "px",
                  height: _vm.windowHeight + "px"
                }
              },
              [
                _vm.switchover
                  ? _c(
                      "view",
                      {
                        staticClass: ["remote"],
                        style: {
                          width: _vm.windowWidth + "px",
                          height: _vm.windowHeight + "px"
                        }
                      },
                      [
                        _c("AR-CanvasView", {
                          ref: "remote",
                          staticStyle: { flex: "1" }
                        })
                      ],
                      1
                    )
                  : _c(
                      "view",
                      {
                        staticClass: ["remote"],
                        style: {
                          width: _vm.windowWidth + "px",
                          height: _vm.windowHeight + "px"
                        }
                      },
                      [
                        _c("AR-CanvasView", {
                          ref: "location",
                          staticStyle: { flex: "1" }
                        })
                      ],
                      1
                    ),
                _c("view", { staticClass: ["option"] }, [
                  _vm.switchover
                    ? _c(
                        "view",
                        {
                          ref: "move",
                          staticClass: ["location"],
                          on: { touchstart: _vm.drag_start }
                        },
                        [
                          _c("AR-CanvasView", {
                            ref: "location",
                            staticStyle: { flex: "1" }
                          })
                        ],
                        1
                      )
                    : _c(
                        "view",
                        {
                          ref: "move",
                          staticClass: ["location"],
                          on: { touchstart: _vm.drag_start }
                        },
                        [
                          _c("AR-CanvasView", {
                            ref: "remote",
                            staticStyle: { flex: "1" }
                          })
                        ],
                        1
                      ),
                  _c("view", { staticClass: ["timer"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["icon_text"],
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v(_vm._s(_vm.timeCall))]
                    )
                  ]),
                  _c("view", { staticClass: ["relevant"] }, [
                    _c("view", { staticClass: ["relevant_top"] }, [
                      _c(
                        "view",
                        {
                          staticClass: ["icon"],
                          on: { click: _vm.toSpeechFn }
                        },
                        [
                          _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: {
                              src: "../../../static/icon_switch_voice.png",
                              mode: ""
                            }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("语音")]
                          )
                        ],
                        1
                      )
                    ]),
                    _c("view", { staticClass: ["relevant_bottom"] }, [
                      _c(
                        "view",
                        {
                          staticClass: ["icon"],
                          on: { click: _vm.enableLocalAudioFn }
                        },
                        [
                          _vm.audio
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: {
                                  src: "../../../static/icon_openaudio.png"
                                }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: {
                                  src: "../../../static/icon_closeaudio.png"
                                }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("静音")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["icon"], on: { click: _vm.leaveFn } },
                        [
                          _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: {
                              src: "../../../static/icon_hangup.png",
                              mode: ""
                            }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("挂断")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["icon"],
                          on: { click: _vm.switchCameraFn }
                        },
                        [
                          _vm.video
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: {
                                  src: "../../../static/icon_switch.png"
                                }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: {
                                  src: "../../../static/icon_switchs.png"
                                }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("翻转")]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]
            )
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*****************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFlLENBQWdCLHVkQUFHLEVBQUMiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcnRjUGFnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _rtc = _interopRequireDefault(__webpack_require__(/*! ../../../until/rtc.js */ 22));\nvar _until = __webpack_require__(/*! ../../../until/until.js */ 24);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n\n\nvar BindingX = __webpack_provided_uni_dot_requireNativePlugin('bindingx');var _default =\n{\n  data: function data() {\n    return {\n      show: '',\n      windowWidth: 200,\n      windowHeight: 400,\n\n      audio: true, // 音频开关\n      video: true, // 摄像头前后\n      Speakerphone: true, // 免提\n\n      switchover: true, // 大小切换\n      // 本地视频移动\n      position: { // 记录当前位置\n        x: 0,\n        y: 0 },\n\n\n      timer: false,\n      channel: '', // 频道房间\n      peerId: '', // 远端用户\n      mode: 0, // 0 视频 1 语音\n\n      timeCall: '00:00', // 通话计时\n      timeCallIntil: null // 计时定时器\n    };\n  },\n  created: function created() {\n\n\n    var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.windowWidth = res.windowWidth;\n        _this.windowHeight = res.windowHeight;\n      } });\n\n  },\n  mounted: function mounted() {var _this2 = this;\n    var oOne = true;\n    // 监测 rtc 模块开启\n    uni.$on('CavasViewRtc', function (data) {\n      _this2.show = data.content;\n      if (data.content && oOne) {\n        oOne = false;\n        var info = JSON.parse(data.content);\n        // 远端用户\n        _this2.peerId = data.callerId || data.calleeId;\n        // 频道房间\n        _this2.channel = info.ChanId;\n        // 判断语音、视频\n        _this2.mode = info.Mode;\n        _this2.init(info);\n      } else {\n        _this2.timeCallIntil && clearInterval(_this2.timeCallIntil);\n      }\n    });\n    // 监测 rtc 远端视频通话转语音通话\n    uni.$on(\"rtc-SwitchAudio\", function (data) {\n      __f__(\"log\", \"监测 rtc 远端视频通话转语音通话\", data, \" at paltfrom/app-plus/subNVue/rtcPage.nvue:158\");\n      if (data.message === \"SwitchAudio\") {\n        _rtc.default.toSpeech();\n        _this2.$nextTick(function () {\n          _this2.mode = 1;\n        });\n      }\n    });\n  },\n  methods: {\n    // 本地远端视频切换\n    switchFn: function switchFn() {var _this3 = this;\n      this.switchover = !this.switchover;\n      this.$nextTick(function () {\n        uni.$emit(\"location-cavasview\", {\n          location: _this3.$refs.location,\n          remote: _this3.$refs.remote });\n\n        setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                    _rtc.default.localVideo({\n                      channel: _this3.channel,\n                      uid: _this3.$store.state.uid }));case 2:_context.next = 4;return (\n\n                    _rtc.default.remotenableVideo({\n                      channel: _this3.channel,\n                      uid: _this3.peerId }));case 4:case \"end\":return _context.stop();}}}, _callee);})),\n\n        500);\n      });\n    },\n    // 免提\n    SpeakerphoneFn: function SpeakerphoneFn() {\n      this.Speakerphone = !this.Speakerphone;\n      _rtc.default.setEnableSpeakerphone(this.Speakerphone);\n    },\n    // 挂断\n    leaveFn: function leaveFn() {\n      // 发送挂断信息 （ArCall 逻辑所需）\n      uni.$emit(\"sendMessageToPeer\", {\n        peerid: this.peerId,\n        Cmd: \"EndCall\" });\n\n      /**\n                            * 如果你只在一个页面写 可以直接调 destory \n                           \t如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel\n                            */\n      // RTC.leave();\n      _rtc.default.destroyRtc();\n    },\n    // 音频开关\n    enableLocalAudioFn: function enableLocalAudioFn() {\n      this.audio = !this.audio;\n      _rtc.default.enableLocalAudio(this.audio);\n    },\n    // 转到语音通话\n    toSpeechFn: function toSpeechFn() {var _this4 = this;\n      uni.$emit(\"sendMessageToPeer\", {\n        peerid: this.peerId,\n        Cmd: \"SwitchAudio\" });\n\n      _rtc.default.toSpeech();\n      this.$nextTick(function () {\n        _this4.mode = 1;\n      });\n    },\n    // 前后摄像头转换\n    switchCameraFn: function switchCameraFn() {\n      this.video = !this.video;\n      _rtc.default.switchCamera();\n    },\n    init: function init(data) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                // 计时\n                _this5.timerCallFn();\n                _this5.$nextTick(function () {\n                  uni.$emit(\"location-cavasview\", {\n                    location: _this5.$refs.location,\n                    remote: _this5.$refs.remote,\n                    VideoConfig: _this5.$store.state.VideoConfig,\n                    mode: _this5.mode,\n                    uid: _this5.$store.state.uid,\n                    channelId: _this5.channel });\n\n                });\n                // 初始化\n                _context2.next = 4;return _rtc.default.init(_this5.$store.state.etAudioAiNoise);case 4:_context2.next = 6;return (\n                  _rtc.default.joinChannel({\n                    \"token\": \"\",\n                    \"channelId\": data.ChanId + '',\n                    \"uid\": _this5.$store.state.uid,\n                    mode: _this5.mode }));case 6:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    },\n    // 计时\n    timerCallFn: function timerCallFn() {var _this6 = this;\n      var second = 0;\n      var oM = 0; // 分钟\n      this.timeCallIntil = setInterval(function () {\n        second += 1;\n        if (second >= 60) {\n          second = 0;\n          oM += 1;\n        }\n        _this6.timeCall = (oM >= 10 ? oM : '0' + oM) + ':' + (second >= 10 ? second : '0' + second);\n      }, 1000);\n    },\n    // 拖动\n    drag_start: function drag_start(e) {var _this7 = this;\n      // 获取 el\n      var move = _until.Utils.getEl(this.$refs.move);\n      var obj = BindingX.bind({\n        anchor: move,\n        eventType: 'pan',\n        props: [{\n          element: move,\n          property: 'transform.translateX',\n          expression: \"x+\".concat(this.position.x) },\n\n        {\n          element: move,\n          property: 'transform.translateY',\n          expression: \"y+\".concat(this.position.y) // \n        }] },\n\n      function (e) {\n        if (e.state === 'end') {\n          if (_this7.timer) {//移动时间特别短暂 视为点击事件\n            clearTimeout(_this7.timer);\n            _this7.switchFn();\n          }\n          BindingX.unbind({\n            token: obj.token,\n            eventType: 'pan' });\n\n          //记录位置 \n          _this7.position.x += e.deltaX;\n          _this7.position.y += e.deltaY;\n          // x轴边界\n          if (-_this7.position.x >= _this7.windowWidth - 193) {\n            _this7.position.x = 193 - _this7.windowWidth;\n          }\n          if (_this7.position.x > 0) {\n            _this7.position.x = 0;\n          }\n          // y 轴边界 \n          if (_this7.position.y < 0) {\n            _this7.position.y = 0;\n          }\n          if (_this7.position.y >= _this7.windowHeight - 244) {\n            _this7.position.y = _this7.windowHeight - 244;\n          }\n          _this7.endAmaier();\n        } else {\n          _this7.timer = setTimeout(function () {\n            _this7.timer = null;\n          }, 50);\n        }\n      });\n    },\n    // 结束动画\n    endAmaier: function endAmaier() {\n      var my = _until.Utils.getEl(this.$refs.move);\n      var result = BindingX.bind({\n        eventType: 'timing',\n        exitExpression: 't>200',\n        props: [{\n          element: my,\n          property: 'transform.translateX',\n          expression: \"easeOutElastic(t,\" + this.position.x + \",\" + 0 +\n          \",200)\" },\n\n        {\n          element: my,\n          property: 'transform.translateY',\n          expression: \"easeOutElastic(t,\" + this.position.y + \",\" + 0 +\n          \",200)\" }] },\n\n\n      function (e) {\n        if (e.state === 'end' || e.state === 'exit') {\n          BindingX.unbind({\n            token: result.token,\n            eventType: 'timing' });\n\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 18)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFsdGZyb20vYXBwLXBsdXMvc3ViTlZ1ZS9ydGNQYWdlLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkE7QUFDQSxvRTs7OztBQUlBLDBFO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsc0JBRkE7QUFHQSx1QkFIQTs7QUFLQSxpQkFMQSxFQUtBO0FBQ0EsaUJBTkEsRUFNQTtBQUNBLHdCQVBBLEVBT0E7O0FBRUEsc0JBVEEsRUFTQTtBQUNBO0FBQ0E7QUFDQSxZQURBO0FBRUEsWUFGQSxFQVhBOzs7QUFnQkEsa0JBaEJBO0FBaUJBLGlCQWpCQSxFQWlCQTtBQUNBLGdCQWxCQSxFQWtCQTtBQUNBLGFBbkJBLEVBbUJBOztBQUVBLHVCQXJCQSxFQXFCQTtBQUNBLHlCQXRCQSxDQXNCQTtBQXRCQTtBQXdCQSxHQTFCQTtBQTJCQSxTQTNCQSxxQkEyQkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOztBQU1BLEdBckNBO0FBc0NBLFNBdENBLHFCQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBLE1BVUE7QUFDQTtBQUNBO0FBQ0EsS0FmQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBLEtBUkE7QUFTQSxHQW5FQTtBQW9FQTtBQUNBO0FBQ0EsWUFGQSxzQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBO0FBRUEscUNBRkE7O0FBSUE7QUFDQTtBQUNBLDZDQURBO0FBRUEsa0RBRkEsR0FEQTs7QUFLQTtBQUNBLDZDQURBO0FBRUEsd0NBRkEsR0FMQTs7QUFTQSxXQVRBO0FBVUEsT0FmQTtBQWdCQSxLQXBCQTtBQXFCQTtBQUNBLGtCQXRCQSw0QkFzQkE7QUFDQTtBQUNBO0FBQ0EsS0F6QkE7QUEwQkE7QUFDQSxXQTNCQSxxQkEyQkE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxzQkFGQTs7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQSxLQXZDQTtBQXdDQTtBQUNBLHNCQXpDQSxnQ0F5Q0E7QUFDQTtBQUNBO0FBQ0EsS0E1Q0E7QUE2Q0E7QUFDQSxjQTlDQSx3QkE4Q0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsMEJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBdkRBO0FBd0RBO0FBQ0Esa0JBekRBLDRCQXlEQTtBQUNBO0FBQ0E7QUFDQSxLQTVEQTtBQTZEQSxRQTdEQSxnQkE2REEsSUE3REEsRUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQURBO0FBRUEsK0NBRkE7QUFHQSxnRUFIQTtBQUlBLHFDQUpBO0FBS0EsZ0RBTEE7QUFNQSw2Q0FOQTs7QUFRQSxpQkFUQTtBQVVBO0FBYkEsMENBY0EscURBZEE7QUFlQTtBQUNBLCtCQURBO0FBRUEsaURBRkE7QUFHQSxrREFIQTtBQUlBLHFDQUpBLEdBZkE7O0FBcUJBLEtBbEZBO0FBbUZBO0FBQ0EsZUFwRkEseUJBb0ZBO0FBQ0E7QUFDQSxpQkFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBLEVBT0EsSUFQQTtBQVFBLEtBL0ZBO0FBZ0dBO0FBQ0EsY0FqR0Esc0JBaUdBLENBakdBLEVBaUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx3QkFGQTtBQUdBO0FBQ0EsdUJBREE7QUFFQSwwQ0FGQTtBQUdBLGtEQUhBOztBQUtBO0FBQ0EsdUJBREE7QUFFQSwwQ0FGQTtBQUdBLGtEQUhBLENBR0E7QUFIQSxTQUxBLENBSEE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBM0JBLE1BMkJBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSxFQUZBO0FBR0E7QUFDQSxPQS9DQTtBQWdEQSxLQXBKQTtBQXFKQTtBQUNBLGFBdEpBLHVCQXNKQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLCtCQUZBO0FBR0E7QUFDQSxxQkFEQTtBQUVBLDBDQUZBO0FBR0E7QUFDQSxpQkFKQTs7QUFNQTtBQUNBLHFCQURBO0FBRUEsMENBRkE7QUFHQTtBQUNBLGlCQUpBLEVBTkEsQ0FIQTs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsK0JBRkE7O0FBSUE7QUFDQSxPQXZCQTtBQXdCQSxLQWhMQSxFQXBFQSxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBydGMg5a6e5pe26Z+z6KeG6aKRIC0tPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cInNob3dcIj5cclxuXHRcdDwhLS0g6K+t6Z+z6YCa6K+dIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb25lbnRcIiA6c3R5bGU9XCJ7d2lkdGg6IHdpbmRvd1dpZHRoICsgJ3B4JyxoZWlnaHQ6IHdpbmRvd0hlaWdodCArICdweCd9XCIgdi1pZj1cIm1vZGUgPT09IDFcIj5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbi10b3A6IDE2MHB4O1wiPlxyXG5cdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiAxMjBweDtoZWlnaHQ6IDEyMHB4O1wiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pY29uX2hlYWQucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPnt7cGVlcklkfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDorqHml7blmaggLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGltZXJcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPnt7dGltZUNhbGx9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImF1ZGlvX2JvdHRvbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g6Z+z6aKRIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImVuYWJsZUxvY2FsQXVkaW9GblwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaWNvbl9vcGVuYXVkaW8ucG5nXCIgdi1pZj1cImF1ZGlvXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ljb25fY2xvc2VhdWRpby5wbmdcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+6Z2Z6Z+zPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOaMguaWrSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJsZWF2ZUZuXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pY29uX2hhbmd1cC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5oyC5patPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWFjeaPkCAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJTcGVha2VycGhvbmVGblwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaWNvbl9zcGVha2Vycy5wbmdcIiB2LWlmPVwiU3BlYWtlcnBob25lXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ljb25fc3BlYWtlci5wbmdcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5YWN5o+QPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDop4bpopHpgJror50gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbmVudFwiIDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4J31cIiB2LWVsc2U+XHJcblx0XHRcdDwhLS0g6L+c56uv6KeG6aKRIC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwic3dpdGNob3ZlclwiIGNsYXNzPVwicmVtb3RlXCIgOnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfVwiPlxyXG5cdFx0XHRcdDxBUi1DYW52YXNWaWV3IHJlZj1cInJlbW90ZVwiIHN0eWxlPVwiZmxleDogMTtcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cInJlbW90ZVwiIDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8QVItQ2FudmFzVmlldyByZWY9XCJsb2NhdGlvblwiIHN0eWxlPVwiZmxleDogMTtcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwib3B0aW9uXCI+XHJcblx0XHRcdFx0PCEtLSDmnKzlnLDop4bpopEgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInN3aXRjaG92ZXJcIiBjbGFzcz1cImxvY2F0aW9uXCIgcmVmPVwibW92ZVwiIEB0b3VjaHN0YXJ0PVwiZHJhZ19zdGFydFwiPlxyXG5cdFx0XHRcdFx0PEFSLUNhbnZhc1ZpZXcgcmVmPVwibG9jYXRpb25cIiBzdHlsZT1cImZsZXg6IDE7XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1lbHNlIGNsYXNzPVwibG9jYXRpb25cIiByZWY9XCJtb3ZlXCIgQHRvdWNoc3RhcnQ9XCJkcmFnX3N0YXJ0XCI+XHJcblx0XHRcdFx0XHQ8QVItQ2FudmFzVmlldyByZWY9XCJyZW1vdGVcIiBzdHlsZT1cImZsZXg6IDE7XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDorqHml7blmaggLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aW1lclwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj57e3RpbWVDYWxsfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g55u45YWz5pON5L2cIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsZXZhbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVsZXZhbnRfdG9wXCI+XHJcblx0XHRcdFx0XHRcdDwhLS0g6L2s6K+t6Z+zIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJ0b1NwZWVjaEZuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaWNvbl9zd2l0Y2hfdm9pY2UucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj7or63pn7M8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlbGV2YW50X2JvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOmfs+mikSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiZW5hYmxlTG9jYWxBdWRpb0ZuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbl9pbWdcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvaWNvbl9vcGVuYXVkaW8ucG5nXCIgdi1pZj1cImF1ZGlvXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pY29uX2Nsb3NlYXVkaW8ucG5nXCIgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj7pnZnpn7M8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDmjILmlq0gLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImxlYXZlRm5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pY29uX2hhbmd1cC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPuaMguaWrTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOinhumikSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwic3dpdGNoQ2FtZXJhRm5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pY29uX3N3aXRjaC5wbmdcIiB2LWlmPVwidmlkZW9cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ljb25fc3dpdGNocy5wbmdcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPue/u+i9rDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IFJUQyBmcm9tIFwiLi4vLi4vLi4vdW50aWwvcnRjLmpzXCI7XHJcblx0aW1wb3J0IHtcclxuXHRcdFJUQ1V0aWxzLFxyXG5cdFx0VXRpbHNcclxuXHR9IGZyb20gXCIuLi8uLi8uLi91bnRpbC91bnRpbC5qc1wiO1xyXG5cdGNvbnN0IEJpbmRpbmdYID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2JpbmRpbmd4Jyk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzaG93OiAnJyxcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogMjAwLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogNDAwLFxyXG5cclxuXHRcdFx0XHRhdWRpbzogdHJ1ZSwgLy8g6Z+z6aKR5byA5YWzXHJcblx0XHRcdFx0dmlkZW86IHRydWUsIC8vIOaRhOWDj+WktOWJjeWQjlxyXG5cdFx0XHRcdFNwZWFrZXJwaG9uZTogdHJ1ZSwgLy8g5YWN5o+QXHJcblxyXG5cdFx0XHRcdHN3aXRjaG92ZXI6IHRydWUsIC8vIOWkp+Wwj+WIh+aNolxyXG5cdFx0XHRcdC8vIOacrOWcsOinhumikeenu+WKqFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7IC8vIOiusOW9leW9k+WJjeS9jee9rlxyXG5cdFx0XHRcdFx0eDogMCxcclxuXHRcdFx0XHRcdHk6IDBcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHR0aW1lcjogZmFsc2UsXHJcblx0XHRcdFx0Y2hhbm5lbDogJycsIC8vIOmikemBk+aIv+mXtFxyXG5cdFx0XHRcdHBlZXJJZDogJycsIC8vIOi/nOerr+eUqOaIt1xyXG5cdFx0XHRcdG1vZGU6IDAsIC8vIDAg6KeG6aKRIDEg6K+t6Z+zXHJcblxyXG5cdFx0XHRcdHRpbWVDYWxsOiAnMDA6MDAnLCAvLyDpgJror53orqHml7ZcclxuXHRcdFx0XHR0aW1lQ2FsbEludGlsOiBudWxsLCAvLyDorqHml7blrprml7blmahcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblxyXG5cclxuXHRcdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHRfdGhpcy53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRsZXQgb09uZSA9IHRydWU7XHJcblx0XHRcdC8vIOebkea1iyBydGMg5qih5Z2X5byA5ZCvXHJcblx0XHRcdHVuaS4kb24oJ0NhdmFzVmlld1J0YycsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hvdyA9IGRhdGEuY29udGVudDtcclxuXHRcdFx0XHRpZiAoZGF0YS5jb250ZW50ICYmIG9PbmUpIHtcclxuXHRcdFx0XHRcdG9PbmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGNvbnN0IGluZm8gPSBKU09OLnBhcnNlKGRhdGEuY29udGVudCk7XHJcblx0XHRcdFx0XHQvLyDov5znq6/nlKjmiLdcclxuXHRcdFx0XHRcdHRoaXMucGVlcklkID0gZGF0YS5jYWxsZXJJZCB8fCBkYXRhLmNhbGxlZUlkO1xyXG5cdFx0XHRcdFx0Ly8g6aKR6YGT5oi/6Ze0XHJcblx0XHRcdFx0XHR0aGlzLmNoYW5uZWwgPSBpbmZvLkNoYW5JZDtcclxuXHRcdFx0XHRcdC8vIOWIpOaWreivremfs+OAgeinhumikVxyXG5cdFx0XHRcdFx0dGhpcy5tb2RlID0gaW5mby5Nb2RlO1xyXG5cdFx0XHRcdFx0dGhpcy5pbml0KGluZm8pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWVDYWxsSW50aWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVDYWxsSW50aWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIOebkea1iyBydGMg6L+c56uv6KeG6aKR6YCa6K+d6L2s6K+t6Z+z6YCa6K+dXHJcblx0XHRcdHVuaS4kb24oXCJydGMtU3dpdGNoQXVkaW9cIiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLnm5HmtYsgcnRjIOi/nOerr+inhumikemAmuivnei9rOivremfs+mAmuivnVwiLCBkYXRhKTtcclxuXHRcdFx0XHRpZiAoZGF0YS5tZXNzYWdlID09PSBcIlN3aXRjaEF1ZGlvXCIpIHtcclxuXHRcdFx0XHRcdFJUQy50b1NwZWVjaCgpO1xyXG5cdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1vZGUgPSAxO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g5pys5Zyw6L+c56uv6KeG6aKR5YiH5o2iXHJcblx0XHRcdHN3aXRjaEZuKCkge1xyXG5cdFx0XHRcdHRoaXMuc3dpdGNob3ZlciA9ICF0aGlzLnN3aXRjaG92ZXI7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KFwibG9jYXRpb24tY2F2YXN2aWV3XCIsIHtcclxuXHRcdFx0XHRcdFx0bG9jYXRpb246IHRoaXMuJHJlZnMubG9jYXRpb24sXHJcblx0XHRcdFx0XHRcdHJlbW90ZTogdGhpcy4kcmVmcy5yZW1vdGUsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBSVEMubG9jYWxWaWRlbyh7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbDogdGhpcy5jaGFubmVsLFxyXG5cdFx0XHRcdFx0XHRcdHVpZDogdGhpcy4kc3RvcmUuc3RhdGUudWlkXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBSVEMucmVtb3RlbmFibGVWaWRlbyh7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbDogdGhpcy5jaGFubmVsLFxyXG5cdFx0XHRcdFx0XHRcdHVpZDogdGhpcy5wZWVySWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWFjeaPkFxyXG5cdFx0XHRTcGVha2VycGhvbmVGbigpIHtcclxuXHRcdFx0XHR0aGlzLlNwZWFrZXJwaG9uZSA9ICF0aGlzLlNwZWFrZXJwaG9uZTtcclxuXHRcdFx0XHRSVEMuc2V0RW5hYmxlU3BlYWtlcnBob25lKHRoaXMuU3BlYWtlcnBob25lKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5oyC5patXHJcblx0XHRcdGxlYXZlRm4oKSB7XHJcblx0XHRcdFx0Ly8g5Y+R6YCB5oyC5pat5L+h5oGvIO+8iEFyQ2FsbCDpgLvovpHmiYDpnIDvvIlcclxuXHRcdFx0XHR1bmkuJGVtaXQoXCJzZW5kTWVzc2FnZVRvUGVlclwiLCB7XHJcblx0XHRcdFx0XHRwZWVyaWQ6IHRoaXMucGVlcklkLFxyXG5cdFx0XHRcdFx0Q21kOiBcIkVuZENhbGxcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHQgKiDlpoLmnpzkvaDlj6rlnKjkuIDkuKrpobXpnaLlhpkg5Y+v5Lul55u05o6l6LCDIGRlc3RvcnkgXHJcblx0XHRcdFx0XHTlpoLmnpzkvaDmmK/nlKjnmoTljZXkvosg56a75byA6aG16Z2i5byV5pOO5LiN6ZSA5q+BIOWwseeUqCBsZWF2ZUNoYW5uZWxcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHQvLyBSVEMubGVhdmUoKTtcclxuXHRcdFx0XHRSVEMuZGVzdHJveVJ0YygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpn7PpopHlvIDlhbNcclxuXHRcdFx0ZW5hYmxlTG9jYWxBdWRpb0ZuKCkge1xyXG5cdFx0XHRcdHRoaXMuYXVkaW8gPSAhdGhpcy5hdWRpbztcclxuXHRcdFx0XHRSVEMuZW5hYmxlTG9jYWxBdWRpbyh0aGlzLmF1ZGlvKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L2s5Yiw6K+t6Z+z6YCa6K+dXHJcblx0XHRcdHRvU3BlZWNoRm4oKSB7XHJcblx0XHRcdFx0dW5pLiRlbWl0KFwic2VuZE1lc3NhZ2VUb1BlZXJcIiwge1xyXG5cdFx0XHRcdFx0cGVlcmlkOiB0aGlzLnBlZXJJZCxcclxuXHRcdFx0XHRcdENtZDogXCJTd2l0Y2hBdWRpb1wiLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0UlRDLnRvU3BlZWNoKCk7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2RlID0gMTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliY3lkI7mkYTlg4/lpLTovazmjaJcclxuXHRcdFx0c3dpdGNoQ2FtZXJhRm4oKSB7XHJcblx0XHRcdFx0dGhpcy52aWRlbyA9ICF0aGlzLnZpZGVvO1xyXG5cdFx0XHRcdFJUQy5zd2l0Y2hDYW1lcmEoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgaW5pdChkYXRhKSB7XHJcblx0XHRcdFx0Ly8g6K6h5pe2XHJcblx0XHRcdFx0dGhpcy50aW1lckNhbGxGbigpO1xyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS4kZW1pdChcImxvY2F0aW9uLWNhdmFzdmlld1wiLCB7XHJcblx0XHRcdFx0XHRcdGxvY2F0aW9uOiB0aGlzLiRyZWZzLmxvY2F0aW9uLFxyXG5cdFx0XHRcdFx0XHRyZW1vdGU6IHRoaXMuJHJlZnMucmVtb3RlLFxyXG5cdFx0XHRcdFx0XHRWaWRlb0NvbmZpZzogdGhpcy4kc3RvcmUuc3RhdGUuVmlkZW9Db25maWcsXHJcblx0XHRcdFx0XHRcdG1vZGU6IHRoaXMubW9kZSxcclxuXHRcdFx0XHRcdFx0dWlkOiB0aGlzLiRzdG9yZS5zdGF0ZS51aWQsXHJcblx0XHRcdFx0XHRcdGNoYW5uZWxJZDogdGhpcy5jaGFubmVsLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyDliJ3lp4vljJZcclxuXHRcdFx0XHRhd2FpdCBSVEMuaW5pdCh0aGlzLiRzdG9yZS5zdGF0ZS5ldEF1ZGlvQWlOb2lzZSk7XHJcblx0XHRcdFx0YXdhaXQgUlRDLmpvaW5DaGFubmVsKHtcclxuXHRcdFx0XHRcdFwidG9rZW5cIjogXCJcIixcclxuXHRcdFx0XHRcdFwiY2hhbm5lbElkXCI6IGRhdGEuQ2hhbklkICsgJycsXHJcblx0XHRcdFx0XHRcInVpZFwiOiB0aGlzLiRzdG9yZS5zdGF0ZS51aWQsXHJcblx0XHRcdFx0XHRtb2RlOiB0aGlzLm1vZGUsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiuoeaXtlxyXG5cdFx0XHR0aW1lckNhbGxGbigpIHtcclxuXHRcdFx0XHRsZXQgc2Vjb25kID0gMDtcclxuXHRcdFx0XHRsZXQgb00gPSAwOyAvLyDliIbpkp9cclxuXHRcdFx0XHR0aGlzLnRpbWVDYWxsSW50aWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRzZWNvbmQgKz0gMTtcclxuXHRcdFx0XHRcdGlmIChzZWNvbmQgPj0gNjApIHtcclxuXHRcdFx0XHRcdFx0c2Vjb25kID0gMDtcclxuXHRcdFx0XHRcdFx0b00gKz0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMudGltZUNhbGwgPSAob00gPj0gMTAgPyBvTSA6ICgnMCcgKyBvTSkpICsgJzonICsgKHNlY29uZCA+PSAxMCA/IHNlY29uZCA6ICgnMCcgKyBzZWNvbmQpKTtcclxuXHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmi5bliqhcclxuXHRcdFx0ZHJhZ19zdGFydChlKSB7XHJcblx0XHRcdFx0Ly8g6I635Y+WIGVsXHJcblx0XHRcdFx0Y29uc3QgbW92ZSA9IFV0aWxzLmdldEVsKHRoaXMuJHJlZnMubW92ZSk7XHJcblx0XHRcdFx0bGV0IG9iaiA9IEJpbmRpbmdYLmJpbmQoe1xyXG5cdFx0XHRcdFx0YW5jaG9yOiBtb3ZlLFxyXG5cdFx0XHRcdFx0ZXZlbnRUeXBlOiAncGFuJyxcclxuXHRcdFx0XHRcdHByb3BzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IG1vdmUsXHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHk6ICd0cmFuc2Zvcm0udHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0XHRcdFx0ZXhwcmVzc2lvbjogYHgrJHt0aGlzLnBvc2l0aW9uLnh9YCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IG1vdmUsXHJcblx0XHRcdFx0XHRcdFx0cHJvcGVydHk6ICd0cmFuc2Zvcm0udHJhbnNsYXRlWScsXHJcblx0XHRcdFx0XHRcdFx0ZXhwcmVzc2lvbjogYHkrJHt0aGlzLnBvc2l0aW9uLnl9YCwgLy8gXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGUuc3RhdGUgPT09ICdlbmQnKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbWVyKSB7IC8v56e75Yqo5pe26Ze054m55Yir55+t5pqCIOinhuS4uueCueWHu+S6i+S7tlxyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN3aXRjaEZuKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0QmluZGluZ1gudW5iaW5kKHtcclxuXHRcdFx0XHRcdFx0XHR0b2tlbjogb2JqLnRva2VuLFxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50VHlwZTogJ3BhbidcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Ly/orrDlvZXkvY3nva4gXHJcblx0XHRcdFx0XHRcdHRoaXMucG9zaXRpb24ueCArPSBlLmRlbHRhWDtcclxuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ICs9IGUuZGVsdGFZO1xyXG5cdFx0XHRcdFx0XHQvLyB46L206L6555WMXHJcblx0XHRcdFx0XHRcdGlmICgtdGhpcy5wb3NpdGlvbi54ID49ICh0aGlzLndpbmRvd1dpZHRoIC0gMTkzKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucG9zaXRpb24ueCA9IDE5MyAtIHRoaXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucG9zaXRpb24ueCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uLnggPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIHkg6L206L6555WMIFxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucG9zaXRpb24ueSA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucG9zaXRpb24ueSA+PSAodGhpcy53aW5kb3dIZWlnaHQgLSAyNDQpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gdGhpcy53aW5kb3dIZWlnaHQgLSAyNDQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5lbmRBbWFpZXIoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0fSwgNTApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7k+adn+WKqOeUu1xyXG5cdFx0XHRlbmRBbWFpZXIoKSB7XHJcblx0XHRcdFx0Y29uc3QgbXkgPSBVdGlscy5nZXRFbCh0aGlzLiRyZWZzLm1vdmUpO1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBCaW5kaW5nWC5iaW5kKHtcclxuXHRcdFx0XHRcdGV2ZW50VHlwZTogJ3RpbWluZycsXHJcblx0XHRcdFx0XHRleGl0RXhwcmVzc2lvbjogJ3Q+MjAwJyxcclxuXHRcdFx0XHRcdHByb3BzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQ6IG15LFxyXG5cdFx0XHRcdFx0XHRcdHByb3BlcnR5OiAndHJhbnNmb3JtLnRyYW5zbGF0ZVgnLFxyXG5cdFx0XHRcdFx0XHRcdGV4cHJlc3Npb246IFwiZWFzZU91dEVsYXN0aWModCxcIiArIHRoaXMucG9zaXRpb24ueCArIFwiLFwiICsgMCArXHJcblx0XHRcdFx0XHRcdFx0XHRcIiwyMDApXCIsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50OiBteSxcclxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eTogJ3RyYW5zZm9ybS50cmFuc2xhdGVZJyxcclxuXHRcdFx0XHRcdFx0XHRleHByZXNzaW9uOiBcImVhc2VPdXRFbGFzdGljKHQsXCIgKyB0aGlzLnBvc2l0aW9uLnkgKyBcIixcIiArIDAgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCIsMjAwKVwiLFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChlLnN0YXRlID09PSAnZW5kJyB8fCBlLnN0YXRlID09PSAnZXhpdCcpIHtcclxuXHRcdFx0XHRcdFx0QmluZGluZ1gudW5iaW5kKHtcclxuXHRcdFx0XHRcdFx0XHR0b2tlbjogcmVzdWx0LnRva2VuLFxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50VHlwZTogJ3RpbWluZydcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuY29uZW50IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5vcHRpb24ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LmxvY2F0aW9uIHtcclxuXHRcdHdpZHRoOiAxNTNweDtcclxuXHRcdGhlaWdodDogMjA0cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDYwcHg7XHJcblx0XHRyaWdodDogMjBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyQzQwNUE7XHJcblx0fVxyXG5cclxuXHQucmVsZXZhbnQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAyMHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0cGFkZGluZzogMCAyMHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xyXG5cdH1cclxuXHJcblx0LnJlbGV2YW50X3RvcCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cclxuXHQucmVsZXZhbnRfYm90dG9tIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQuaWNvbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lmljb25faW1nIHtcclxuXHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNjBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuaWNvbl90ZXh0IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmF1ZGlvX2JvdHRvbSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDIwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMjBweDtcclxuXHR9XHJcblxyXG5cdC50aW1lciB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDE0MHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 19 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 21);

/***/ }),
/* 21 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 22 */
/*!***************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/rtc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 23));\nvar _until = __webpack_require__(/*! ./until.js */ 24);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n\n\n// rtc 音视频引入\nvar rtcModule = __webpack_provided_uni_dot_requireNativePlugin('AR-RtcModule');\n// uniapp 监测\nvar Store = {\n  // 检测 Store 存在的定时器\n  existTimer: null,\n  destroyRtcTimer: null,\n  channel: \"\" // 频道\n};\n// rtc 实时音频通话\nvar RTC = {\n  // 初始化\n  init: function () {var _init = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(etAudioAiNoise) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n\n                rtcModule.setCallBack(function (res) {\n                  RTC.callBack(res);\n                }));case 2:_context.next = 4;return (\n\n                rtcModule.create({\n                  \"appId\": _config.default.RTC_APPID },\n                function (res) {\n                  __f__(\"log\", '初始化实例 rtc', res, \" at until/rtc.js:27\");\n                }));case 4:_context.t0 =\n\n              etAudioAiNoise;if (!_context.t0) {_context.next = 8;break;}_context.next = 8;return rtcModule.setParameters({\n                Cmd: 'SetAudioAiNoise',\n                Enable: 1 },\n              function (res) {\n                __f__(\"log\", '私人定制', res, \" at until/rtc.js:34\");\n              });case 8:case \"end\":return _context.stop();}}}, _callee);}));function init(_x) {return _init.apply(this, arguments);}return init;}(),\n\n  // 相关回调(仅列举常用回调)\n  callBack: function callBack(res) {\n    switch (res.engineEvent) {\n      case \"onConnectionLost\":\n        __f__(\"log\", \"onConnectionLost\", res, \" at until/rtc.js:41\");\n        break;\n      // 网络连接状态已改变回调\n      case \"onConnectionStateChanged\":\n        __f__(\"log\", \"网络连接状态已改变回调\", res, \" at until/rtc.js:45\");\n        break;\n      // 发生警告回调\n      case \"onWarning\":\n        _until.RTCUtils.Warning(res.warningCode);\n        break;\n      // 发生错误回调\n      case \"onError\":\n        _until.RTCUtils.Error(res.errorCode);\n        break;\n      // 加入频道成功回调\n      case \"onJoinChannelSuccess\":\n        // 本地渲染\n        RTC.localVideo({\n          \"channel\": Store.channelId + '',\n          \"uid\": Store.uid + '' });\n\n        break;\n      // 远端用户加入当前频道回调\n      case \"onUserJoined\":\n        _until.Utils.hintRTCInfo('用户' + res.uid + '加入频道', 'info');\n        break;\n      // 远端用户离开当前频道回调\n      case \"onUserOffline\":\n        __f__(\"log\", \"远端用户离开当前频道回调\", res, \" at until/rtc.js:69\");\n        // RTC.leave();\n        RTC.destroyRtc();\n        break;\n      // 网络连接状态已改变回调\n      case \"onConnectionStateChanged\":\n        _until.RTCUtils.ConnectionStateChanged(res);\n        break;\n      // 已显示远端视频首帧回调\n      case \"onFirstRemoteVideoFrame\":\n        break;\n      case \"onFirstRemoteVideoDecoded\":\n        RTC.remotenableVideo({\n          channel: Store.channel,\n          uid: res.uid });\n\n        break;\n      // 远端用户视频状态发生已变化回调(当频道内的用户超过 17 时，该回调可能不准确)\n      case \"onRemoteVideoStateChanged\":\n        _until.RTCUtils.RemoteVideoStateChanged(res);\n        break;\n      // \t// 本地网络类型发生改变回调\n      // case \"onNetworkTypeChanged\":\n      // \tbreak;\n      // \t// 网络连接中断\n      // case \"onConnectionLost\":\n      // \tbreak;\n\n      // \t// 远端音频状态发生改变回调\n      // case \"onRemoteAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地音频状态发生改变回调\n      // case \"onLocalAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地视频状态发生改变回调\n      // case \"onLocalVideoStateChanged\":\n      // \tbreak;\n      // \t// 重新加入频道回调\n      // case \"onRejoinChannelSuccess\":\n      // \tbreak;\n      // \t// 离开频道回调\n      // case \"onLeaveChannel\":\n      // \tbreak;\n      // 已发送本地音频首帧回调\n      // case \"onFirstLocalAudioFrame\":\n      // \tbreak;\n      // \t// 已显示本地视频首帧回调\n      // case \"onFirstLocalVideoFrame\":\n      // \tbreak;\n      // \t// Token 服务即将过期回调\n      // case \"onTokenPrivilegeWillExpire\":\n      // \tbreak;\n      // \t// Token 过期回调\n      // case \"onRequestToken\":\n      // \tbreak;\n      // \t// 用户角色已切换回调(直播场景下)\n      // case \"onClientRoleChanged\":\n      // \tbreak;\n      // \t// 本地或远端视频大小或旋转信息发生改变回调\n      // case \"onVideoSizeChanged\":\n      // \tbreak;\n      // \t// 通话中远端音频流的统计信息回调\n      // case \"onRemoteAudioStats\":\n      // \tbreak;\n      // \t// 当前通话统计回调。 该回调在通话中每两秒触发一次\n      // case \"onRtcStats\":\n      // \tbreak;\n      // \t// 通话中每个用户的网络上下行 last mile 质量报告回调\n      // case \"onNetworkQuality\":\n      // \tbreak;\n      // \t// 通话中本地视频流的统计信息回调\n      // case \"onLocalVideoStats\":\n      // \tbreak;\n      // \t// 通话中本地音频流的统计信息回调\n      // case \"onLocalAudioStats\":\n      // \tbreak;\n      // \t// 通话中远端视频流的统计信息回调\n      // case \"onRemoteVideoStats\":\n      // \tbreak;\n    }\n  },\n  // 加入频道\n  joinChannel: function () {var _joinChannel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(info) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              Store.channel = info.channelId;\n              // 开启视频\n              Store.mode = info.mode;if (!(\n              Store.mode === 0)) {_context2.next = 5;break;}_context2.next = 5;return (\n                RTC.enableVideo());case 5:_context2.next = 7;return (\n\n\n                RTC.setEnableSpeakerphone(true));case 7:_context2.next = 9;return (\n\n                rtcModule.joinChannel({\n                  \"token\": info.token,\n                  \"channelId\": info.channelId + '',\n                  \"uid\": info.uid },\n                function (res) {\n                  __f__(\"log\", 'RTC joinChannel 方法调用', res.code === 0 ? '成功' : '失败：' + res, \" at until/rtc.js:166\");\n                }));case 9:case \"end\":return _context2.stop();}}}, _callee2);}));function joinChannel(_x2) {return _joinChannel.apply(this, arguments);}return joinChannel;}(),\n\n  // 音频是否免提\n  setEnableSpeakerphone: function setEnableSpeakerphone(fase) {\n    // 默认扬声器播放\n    rtcModule.setEnableSpeakerphone({\n      \"enabled\": fase },\n    function (res) {\n      __f__(\"log\",  true ? '开启' : undefined, res.code === 0 ? '成功' : '失败：' +\n      res, \" at until/rtc.js:175\");\n    });\n  },\n  // 音频是否关闭\n  enableLocalAudio: function enableLocalAudio(checked) {\n    rtcModule.enableLocalAudio({\n      \"enabled\": checked },\n    function (res) {\n      __f__(\"log\",  true ? '开启' : undefined, res.code === 0 ? '成功' : '失败：' + res, \" at until/rtc.js:184\");\n    });\n  },\n  // 摄像头（前后）\n  switchCamera: function switchCamera() {\n    rtcModule.switchCamera(function (res) {\n      __f__(\"log\", 'RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at until/rtc.js:190\");\n    });\n  },\n  // 转语音\n  toSpeech: function toSpeech() {\n    // 关闭视频模块\n    rtcModule.disableVideo(function (res) {\n      __f__(\"log\", 'RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at until/rtc.js:198\");\n    });\n  },\n  // 启用视频（加入房间后自动发布）\n  enableVideo: function enableVideo() {\n    Store.existTimer && clearInterval(Store.existTimer);\n    Store.existTimer = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!\n              Store.VideoConfig) {_context3.next = 6;break;}\n              clearInterval(Store.existTimer);\n              // 设置视频编码属性\n              _context3.next = 4;return rtcModule.setVideoEncoderConfiguration(Store.VideoConfig, function (res) {\n                __f__(\"log\", 'RTC 设置视频编码属性 setVideoEncoderConfiguration 方法调用', res.\n                code ===\n                0 ? '成功' :\n                '失败：' + res, \" at until/rtc.js:210\");\n              });case 4:_context3.next = 6;return (\n\n                rtcModule.enableVideo(function (res) {\n                  __f__(\"log\", 'RTC 启用视频 enableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n                  res, \" at until/rtc.js:217\");\n                }));case 6:case \"end\":return _context3.stop();}}}, _callee3);})),\n\n    50);\n  },\n  // 本地启用视频后\n  localVideo: function () {var _localVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (\n\n\n                Store.location.setupLocalVideo({\n                  \"renderMode\": 1,\n                  \"channelId\": data.channel,\n                  \"uid\": data.uid,\n                  \"mirrorMode\": 0 },\n                function (res) {\n                  __f__(\"log\", '渲染视频', res, \" at until/rtc.js:233\");\n                }));case 2:_context4.next = 4;return (\n\n                Store.location.startPreview(function (res) {\n                  __f__(\"log\", '本地预览', res, \" at until/rtc.js:237\");\n                }));case 4:case \"end\":return _context4.stop();}}}, _callee4);}));function localVideo(_x3) {return _localVideo.apply(this, arguments);}return localVideo;}(),\n\n  // 远端加入房间后进行\n  remotenableVideo: function () {var _remotenableVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (\n                Store.remote.setupRemoteVideo({\n                  \"renderMode\": 1,\n                  \"channelId\": data.channel,\n                  \"uid\": data.uid,\n                  \"mirrorMode\": 0 },\n                function (res) {\n                  __f__(\"log\", '渲染远端视频', res, \" at until/rtc.js:248\");\n                }));case 2:_context5.next = 4;return (\n\n                Store.remote.startPreview(function (res) {\n                  __f__(\"log\", '远端本地预览', res, \" at until/rtc.js:252\");\n                }));case 4:case \"end\":return _context5.stop();}}}, _callee5);}));function remotenableVideo(_x4) {return _remotenableVideo.apply(this, arguments);}return remotenableVideo;}(),\n\n  /**\r\n                                                                                                                                                                                                * 如果你只在一个页面写 可以直接调 destory \r\n                                                                                                                                                                                               \t如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel\r\n                                                                                                                                                                                                */\n  // 挂断\n  leave: function leave() {\n    // 离开频道\n    rtcModule.leaveChannel(function (res) {\n      __f__(\"log\", \"调用离开频道 leaveChannel\", res, \" at until/rtc.js:263\");\n    });\n  },\n  // 销毁实例\n  destroyRtc: function destroyRtc() {\n    if (rtcModule && rtcModule.destroyRtc) {\n      // 销毁实例\n      rtcModule.destroyRtc(function (res) {\n        __f__(\"log\", \"销毁实例\", res, \" at until/rtc.js:271\");\n        if (res.code === 0) {\n          _until.RTCUtils.destroyRtc();\n        }\n      });\n      // 销毁 rtc 监听函数;\n      uni.$off('location-cavasview');\n      uni.$off('PeersOnlineStatusChanged');\n      uni.$off('rtc-endcall');\n    }\n  } };\n\n\n// 监测 rtc 视频渲染所需\nuni.$on(\"location-cavasview\", function (data) {\n  if (data) {\n    Store = Object.assign(Store, data);\n  }\n});\n// 监测用户在线状态（一旦断网就挂断）\nuni.$on('PeersOnlineStatusChanged', function (data) {\n  if (data) {\n    var oStatus = data.peersStatus[0];\n    if (oStatus && oStatus.state === 2) {\n      // 用户离线\n      _until.Utils.hintRTCInfo('远端用户离线', 'error');\n      // 判断在 rtm 还是在 rtc\n      if (!Store.channel && !Store.uid) {\n        // // 清除(呼叫时取消呼叫)\n        uni.$emit(\"sendMessageToPeer\", {\n          Cmd: \"InitiativeCall\",\n          peerid: oStatus.peerId });\n\n        uni.$emit(\"sendMessageToPeer\", {\n          peerid: oStatus.peerId,\n          Cmd: \"EndCall\" });\n\n      } else if (Store.channel) {\n        setTimeout(function () {\n          // 发送挂断信息 （ArCall 逻辑所需）\n          uni.$emit(\"sendMessageToPeer\", {\n            peerid: oStatus.peerId,\n            Cmd: \"EndCall\" });\n\n          // 清除\n          RTC.destroyRtc(oStatus.peerId);\n        }, 1000);\n      }\n    }\n  }\n});\n\n// 监测 rtc 收到的挂断信息\nuni.$on(\"rtc-endcall\", function (data) {\n  // 挂断\n  if (data.message === \"EndCall\") {\n    __f__(\"log\", \"监测 rtc 收到的挂断信息\", data, \" at until/rtc.js:327\");\n    _until.Utils.restoreAll();\n    if (!Store.channel && !Store.uid) {\n      // // 清除(呼叫时取消呼叫)\n      uni.$emit(\"sendMessageToPeer\", {\n        Cmd: \"InitiativeCall\",\n        peerid: data.peerId });\n\n    } else if (Store.channel) {\n      RTC.destroyRtc();\n    }\n  }\n});var _default =\nRTC;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 18)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvcnRjLmpzIl0sIm5hbWVzIjpbInJ0Y01vZHVsZSIsInVuaSIsIlN0b3JlIiwiZXhpc3RUaW1lciIsImRlc3Ryb3lSdGNUaW1lciIsImNoYW5uZWwiLCJSVEMiLCJpbml0IiwiZXRBdWRpb0FpTm9pc2UiLCJzZXRDYWxsQmFjayIsInJlcyIsImNhbGxCYWNrIiwiY3JlYXRlIiwiQ29uZmlnIiwiUlRDX0FQUElEIiwic2V0UGFyYW1ldGVycyIsIkNtZCIsIkVuYWJsZSIsImVuZ2luZUV2ZW50IiwiUlRDVXRpbHMiLCJXYXJuaW5nIiwid2FybmluZ0NvZGUiLCJFcnJvciIsImVycm9yQ29kZSIsImxvY2FsVmlkZW8iLCJjaGFubmVsSWQiLCJ1aWQiLCJVdGlscyIsImhpbnRSVENJbmZvIiwiZGVzdHJveVJ0YyIsIkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWQiLCJyZW1vdGVuYWJsZVZpZGVvIiwiUmVtb3RlVmlkZW9TdGF0ZUNoYW5nZWQiLCJqb2luQ2hhbm5lbCIsImluZm8iLCJtb2RlIiwiZW5hYmxlVmlkZW8iLCJzZXRFbmFibGVTcGVha2VycGhvbmUiLCJ0b2tlbiIsImNvZGUiLCJmYXNlIiwiZW5hYmxlTG9jYWxBdWRpbyIsImNoZWNrZWQiLCJzd2l0Y2hDYW1lcmEiLCJ0b1NwZWVjaCIsImRpc2FibGVWaWRlbyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIlZpZGVvQ29uZmlnIiwic2V0VmlkZW9FbmNvZGVyQ29uZmlndXJhdGlvbiIsImRhdGEiLCJsb2NhdGlvbiIsInNldHVwTG9jYWxWaWRlbyIsInN0YXJ0UHJldmlldyIsInJlbW90ZSIsInNldHVwUmVtb3RlVmlkZW8iLCJsZWF2ZSIsImxlYXZlQ2hhbm5lbCIsIiRvZmYiLCIkb24iLCJPYmplY3QiLCJhc3NpZ24iLCJvU3RhdHVzIiwicGVlcnNTdGF0dXMiLCJzdGF0ZSIsIiRlbWl0IiwicGVlcmlkIiwicGVlcklkIiwic2V0VGltZW91dCIsIm1lc3NhZ2Ui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QixDQUFDSCxLQUFLLENBQUN3QixHQUE3QixFQUFrQztBQUNqQztBQUNBekIsU0FBRyxDQUFDZ0UsS0FBSixDQUFVLG1CQUFWLEVBQStCO0FBQzlCakQsV0FBRyxFQUFFLGdCQUR5QjtBQUU5QmtELGNBQU0sRUFBRWhCLElBQUksQ0FBQ2lCLE1BRmlCLEVBQS9COztBQUlBLEtBTkQsTUFNTyxJQUFJakUsS0FBSyxDQUFDRyxPQUFWLEVBQW1CO0FBQ3pCQyxTQUFHLENBQUN1QixVQUFKO0FBQ0E7QUFDRDtBQUNELENBZkQsRTtBQWdCZXZCLEciLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlnIGZyb20gXCIuL2NvbmZpZy5qc1wiO1xyXG5pbXBvcnQge1xyXG5cdFV0aWxzLFxyXG5cdFJUQ1V0aWxzXHJcbn0gZnJvbSAnLi91bnRpbC5qcyc7XHJcbi8vIHJ0YyDpn7Pop4bpopHlvJXlhaVcclxuY29uc3QgcnRjTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ0FSLVJ0Y01vZHVsZScpO1xyXG4vLyB1bmlhcHAg55uR5rWLXHJcbmxldCBTdG9yZSA9IHtcclxuXHQvLyDmo4DmtYsgU3RvcmUg5a2Y5Zyo55qE5a6a5pe25ZmoXHJcblx0ZXhpc3RUaW1lcjogbnVsbCxcclxuXHRkZXN0cm95UnRjVGltZXI6IG51bGwsXHJcblx0Y2hhbm5lbDogXCJcIiwgLy8g6aKR6YGTXHJcbn07XHJcbi8vIHJ0YyDlrp7ml7bpn7PpopHpgJror51cclxuY29uc3QgUlRDID0ge1xyXG5cdC8vIOWIneWni+WMllxyXG5cdGluaXQ6IGFzeW5jIGZ1bmN0aW9uKGV0QXVkaW9BaU5vaXNlKSB7XHJcblx0XHQvLyDliJ3lp4vljJblm57osIMgXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuc2V0Q2FsbEJhY2socmVzID0+IHtcclxuXHRcdFx0UlRDLmNhbGxCYWNrKHJlcyk7XHJcblx0XHR9KTtcclxuXHRcdC8vIOWIneWni+WMluWunuS+iyBSVENfQVBQSURcclxuXHRcdGF3YWl0IHJ0Y01vZHVsZS5jcmVhdGUoe1xyXG5cdFx0XHRcImFwcElkXCI6IENvbmZpZy5SVENfQVBQSURcclxuXHRcdH0sIHJlcyA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfliJ3lp4vljJblrp7kvosgcnRjJywgcmVzKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g56eB5Lq65a6a5Yi2ICjmnKzpobnnm67lrprliLbvvJrmmbrog73pmY3lmaogKVxyXG5cdFx0ZXRBdWRpb0FpTm9pc2UgJiYgYXdhaXQgcnRjTW9kdWxlLnNldFBhcmFtZXRlcnMoe1xyXG5cdFx0XHRDbWQ6ICdTZXRBdWRpb0FpTm9pc2UnLFxyXG5cdFx0XHRFbmFibGU6IDFcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+engeS6uuWumuWIticsIHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOebuOWFs+Wbnuiwgyjku4XliJfkuL7luLjnlKjlm57osIMpXHJcblx0Y2FsbEJhY2s6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0c3dpdGNoIChyZXMuZW5naW5lRXZlbnQpIHtcclxuXHRcdFx0Y2FzZSBcIm9uQ29ubmVjdGlvbkxvc3RcIjpcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9uQ29ubmVjdGlvbkxvc3RcIiwgcmVzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDnvZHnu5zov57mjqXnirbmgIHlt7LmlLnlj5jlm57osINcclxuXHRcdFx0Y2FzZSBcIm9uQ29ubmVjdGlvblN0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi572R57uc6L+e5o6l54q25oCB5bey5pS55Y+Y5Zue6LCDXCIsIHJlcyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5Y+R55Sf6K2m5ZGK5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvbldhcm5pbmdcIjpcclxuXHRcdFx0XHRSVENVdGlscy5XYXJuaW5nKHJlcy53YXJuaW5nQ29kZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5Y+R55Sf6ZSZ6K+v5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvbkVycm9yXCI6XHJcblx0XHRcdFx0UlRDVXRpbHMuRXJyb3IocmVzLmVycm9yQ29kZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5Yqg5YWl6aKR6YGT5oiQ5Yqf5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvbkpvaW5DaGFubmVsU3VjY2Vzc1wiOlxyXG5cdFx0XHRcdC8vIOacrOWcsOa4suafk1xyXG5cdFx0XHRcdFJUQy5sb2NhbFZpZGVvKHtcclxuXHRcdFx0XHRcdFwiY2hhbm5lbFwiOiBTdG9yZS5jaGFubmVsSWQgKyAnJyxcclxuXHRcdFx0XHRcdFwidWlkXCI6IFN0b3JlLnVpZCArICcnLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/nOerr+eUqOaIt+WKoOWFpeW9k+WJjemikemBk+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Vc2VySm9pbmVkXCI6XHJcblx0XHRcdFx0VXRpbHMuaGludFJUQ0luZm8oJ+eUqOaItycgKyByZXMudWlkICsgJ+WKoOWFpemikemBkycsICdpbmZvJyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g6L+c56uv55So5oi356a75byA5b2T5YmN6aKR6YGT5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvblVzZXJPZmZsaW5lXCI6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLov5znq6/nlKjmiLfnprvlvIDlvZPliY3popHpgZPlm57osINcIiwgcmVzKTtcclxuXHRcdFx0XHQvLyBSVEMubGVhdmUoKTtcclxuXHRcdFx0XHRSVEMuZGVzdHJveVJ0YygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOe9kee7nOi/nuaOpeeKtuaAgeW3suaUueWPmOWbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Db25uZWN0aW9uU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0UlRDVXRpbHMuQ29ubmVjdGlvblN0YXRlQ2hhbmdlZChyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOW3suaYvuekuui/nOerr+inhumikemmluW4p+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25GaXJzdFJlbW90ZVZpZGVvRnJhbWVcIjpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIm9uRmlyc3RSZW1vdGVWaWRlb0RlY29kZWRcIjpcclxuXHRcdFx0XHRSVEMucmVtb3RlbmFibGVWaWRlbyh7XHJcblx0XHRcdFx0XHRjaGFubmVsOiBTdG9yZS5jaGFubmVsLFxyXG5cdFx0XHRcdFx0dWlkOiByZXMudWlkXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDov5znq6/nlKjmiLfop4bpopHnirbmgIHlj5HnlJ/lt7Llj5jljJblm57osIMo5b2T6aKR6YGT5YaF55qE55So5oi36LaF6L+HIDE3IOaXtu+8jOivpeWbnuiwg+WPr+iDveS4jeWHhuehrilcclxuXHRcdFx0Y2FzZSBcIm9uUmVtb3RlVmlkZW9TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHRSVENVdGlscy5SZW1vdGVWaWRlb1N0YXRlQ2hhbmdlZChyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5pys5Zyw572R57uc57G75Z6L5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTmV0d29ya1R5cGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOe9kee7nOi/nuaOpeS4reaWrVxyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkNvbm5lY3Rpb25Mb3N0XCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHJcblx0XHRcdFx0Ly8gXHQvLyDov5znq6/pn7PpopHnirbmgIHlj5HnlJ/mlLnlj5jlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZW1vdGVBdWRpb1N0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDmnKzlnLDpn7PpopHnirbmgIHlj5HnlJ/mlLnlj5jlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Mb2NhbEF1ZGlvU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOacrOWcsOinhumikeeKtuaAgeWPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxvY2FsVmlkZW9TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YeN5paw5Yqg5YWl6aKR6YGT5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVqb2luQ2hhbm5lbFN1Y2Nlc3NcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g56a75byA6aKR6YGT5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTGVhdmVDaGFubmVsXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyDlt7Llj5HpgIHmnKzlnLDpn7PpopHpppbluKflm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25GaXJzdExvY2FsQXVkaW9GcmFtZVwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDlt7LmmL7npLrmnKzlnLDop4bpopHpppbluKflm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25GaXJzdExvY2FsVmlkZW9GcmFtZVwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyBUb2tlbiDmnI3liqHljbPlsIbov4fmnJ/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Ub2tlblByaXZpbGVnZVdpbGxFeHBpcmVcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8gVG9rZW4g6L+H5pyf5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVxdWVzdFRva2VuXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOeUqOaIt+inkuiJsuW3suWIh+aNouWbnuiwgyjnm7Tmkq3lnLrmma/kuIspXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uQ2xpZW50Um9sZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5pys5Zyw5oiW6L+c56uv6KeG6aKR5aSn5bCP5oiW5peL6L2s5L+h5oGv5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uVmlkZW9TaXplQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3ov5znq6/pn7PpopHmtYHnmoTnu5/orqHkv6Hmga/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZW1vdGVBdWRpb1N0YXRzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOW9k+WJjemAmuivnee7n+iuoeWbnuiwg+OAgiDor6Xlm57osIPlnKjpgJror53kuK3mr4/kuKTnp5Lop6blj5HkuIDmrKFcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SdGNTdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3mr4/kuKrnlKjmiLfnmoTnvZHnu5zkuIrkuIvooYwgbGFzdCBtaWxlIOi0qOmHj+aKpeWRiuWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbk5ldHdvcmtRdWFsaXR5XCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmAmuivneS4reacrOWcsOinhumikea1geeahOe7n+iuoeS/oeaBr+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxvY2FsVmlkZW9TdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3mnKzlnLDpn7PpopHmtYHnmoTnu5/orqHkv6Hmga/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Mb2NhbEF1ZGlvU3RhdHNcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YCa6K+d5Lit6L+c56uv6KeG6aKR5rWB55qE57uf6K6h5L+h5oGv5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVtb3RlVmlkZW9TdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDliqDlhaXpopHpgZNcclxuXHRqb2luQ2hhbm5lbDogYXN5bmMgZnVuY3Rpb24oaW5mbykge1xyXG5cdFx0U3RvcmUuY2hhbm5lbCA9IGluZm8uY2hhbm5lbElkO1xyXG5cdFx0Ly8g5byA5ZCv6KeG6aKRXHJcblx0XHRTdG9yZS5tb2RlID0gaW5mby5tb2RlO1xyXG5cdFx0aWYgKFN0b3JlLm1vZGUgPT09IDApIHtcclxuXHRcdFx0YXdhaXQgUlRDLmVuYWJsZVZpZGVvKCk7XHJcblx0XHR9XHJcblx0XHQvLyDlvIDlkK/lhY3mj5BcclxuXHRcdGF3YWl0IFJUQy5zZXRFbmFibGVTcGVha2VycGhvbmUodHJ1ZSk7XHJcblx0XHQvLyDliqDlhaUgcnRjIOmikemBk1xyXG5cdFx0YXdhaXQgcnRjTW9kdWxlLmpvaW5DaGFubmVsKHtcclxuXHRcdFx0XCJ0b2tlblwiOiBpbmZvLnRva2VuLFxyXG5cdFx0XHRcImNoYW5uZWxJZFwiOiBpbmZvLmNoYW5uZWxJZCArICcnLFxyXG5cdFx0XHRcInVpZFwiOiBpbmZvLnVpZCxcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyBqb2luQ2hhbm5lbCDmlrnms5XosIPnlKgnLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgKyByZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDpn7PpopHmmK/lkKblhY3mj5BcclxuXHRzZXRFbmFibGVTcGVha2VycGhvbmU6IGZ1bmN0aW9uKGZhc2UpIHtcclxuXHRcdC8vIOm7mOiupOaJrOWjsOWZqOaSreaUvlxyXG5cdFx0cnRjTW9kdWxlLnNldEVuYWJsZVNwZWFrZXJwaG9uZSh7XHJcblx0XHRcdFwiZW5hYmxlZFwiOiBmYXNlXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg6L+c56uv5Yqg5YWl5oi/6Ze05ZCO6K6+572uJyArIGZhc2UgPyAn5byA5ZCvJyA6ICflhbPpl60nICsgJ+aJrOWjsOWZqOaSreaUvicsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArXHJcblx0XHRcdFx0cmVzKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8g6Z+z6aKR5piv5ZCm5YWz6ZetXHJcblx0ZW5hYmxlTG9jYWxBdWRpbzogZnVuY3Rpb24oY2hlY2tlZCkge1xyXG5cdFx0cnRjTW9kdWxlLmVuYWJsZUxvY2FsQXVkaW8oe1xyXG5cdFx0XHRcImVuYWJsZWRcIjogY2hlY2tlZFxyXG5cdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUlRDIOmfs+mikScgKyBjaGVja2VkID8gJ+W8gOWQrycgOiAn5YWz6ZetJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICsgcmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDmkYTlg4/lpLTvvIjliY3lkI7vvIlcclxuXHRzd2l0Y2hDYW1lcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cnRjTW9kdWxlLnN3aXRjaENhbWVyYSgocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg5pGE5YOP5aS05YmN5ZCOIHN3aXRjaENhbWVyYSDmlrnms5XosIPnlKgnLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgK1xyXG5cdFx0XHRcdHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g6L2s6K+t6Z+zXHJcblx0dG9TcGVlY2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8g5YWz6Zet6KeG6aKR5qih5Z2XXHJcblx0XHRydGNNb2R1bGUuZGlzYWJsZVZpZGVvKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDlhbPpl63op4bpopHmqKHlnZcgZGlzYWJsZVZpZGVvIOaWueazleiwg+eUqCcsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArXHJcblx0XHRcdFx0cmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDlkK/nlKjop4bpopHvvIjliqDlhaXmiL/pl7TlkI7oh6rliqjlj5HluIPvvIlcclxuXHRlbmFibGVWaWRlbzogZnVuY3Rpb24oKSB7XHJcblx0XHRTdG9yZS5leGlzdFRpbWVyICYmIGNsZWFySW50ZXJ2YWwoU3RvcmUuZXhpc3RUaW1lcilcclxuXHRcdFN0b3JlLmV4aXN0VGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGlmIChTdG9yZS5WaWRlb0NvbmZpZykge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoU3RvcmUuZXhpc3RUaW1lcilcclxuXHRcdFx0XHQvLyDorr7nva7op4bpopHnvJbnoIHlsZ7mgKdcclxuXHRcdFx0XHRhd2FpdCBydGNNb2R1bGUuc2V0VmlkZW9FbmNvZGVyQ29uZmlndXJhdGlvbihTdG9yZS5WaWRlb0NvbmZpZywgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1JUQyDorr7nva7op4bpopHnvJbnoIHlsZ7mgKcgc2V0VmlkZW9FbmNvZGVyQ29uZmlndXJhdGlvbiDmlrnms5XosIPnlKgnLCByZXNcclxuXHRcdFx0XHRcdFx0LmNvZGUgPT09XHJcblx0XHRcdFx0XHRcdDAgPyAn5oiQ5YqfJyA6XHJcblx0XHRcdFx0XHRcdCflpLHotKXvvJonICsgcmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyDlkK/nlKjop4bpopFcclxuXHRcdFx0XHRhd2FpdCBydGNNb2R1bGUuZW5hYmxlVmlkZW8oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1JUQyDlkK/nlKjop4bpopEgZW5hYmxlVmlkZW8g5pa55rOV6LCD55SoJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICtcclxuXHRcdFx0XHRcdFx0cmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgNTApXHJcblx0fSxcclxuXHQvLyDmnKzlnLDlkK/nlKjop4bpopHlkI5cclxuXHRsb2NhbFZpZGVvOiBhc3luYyBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIuacrOWcsOWQr+eUqOinhumikeWQjlwiLGRhdGEpO1xyXG5cdFx0Ly8gLy8g5riy5p+T6KeG6aKRXHJcblx0XHRhd2FpdCBTdG9yZS5sb2NhdGlvbi5zZXR1cExvY2FsVmlkZW8oe1xyXG5cdFx0XHRcInJlbmRlck1vZGVcIjogMSxcclxuXHRcdFx0XCJjaGFubmVsSWRcIjogZGF0YS5jaGFubmVsLFxyXG5cdFx0XHRcInVpZFwiOiBkYXRhLnVpZCxcclxuXHRcdFx0XCJtaXJyb3JNb2RlXCI6IDBcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+a4suafk+inhumikScsIHJlcyk7XHJcblx0XHR9KTtcclxuXHRcdC8vIOacrOWcsOmihOiniFxyXG5cdFx0YXdhaXQgU3RvcmUubG9jYXRpb24uc3RhcnRQcmV2aWV3KChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+acrOWcsOmihOiniCcsIHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g6L+c56uv5Yqg5YWl5oi/6Ze05ZCO6L+b6KGMXHJcblx0cmVtb3RlbmFibGVWaWRlbzogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0YXdhaXQgU3RvcmUucmVtb3RlLnNldHVwUmVtb3RlVmlkZW8oe1xyXG5cdFx0XHRcInJlbmRlck1vZGVcIjogMSxcclxuXHRcdFx0XCJjaGFubmVsSWRcIjogZGF0YS5jaGFubmVsLFxyXG5cdFx0XHRcInVpZFwiOiBkYXRhLnVpZCxcclxuXHRcdFx0XCJtaXJyb3JNb2RlXCI6IDBcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+a4suafk+i/nOerr+inhumikScsIHJlcyk7XHJcblx0XHR9KVxyXG5cdFx0Ly8g5pys5Zyw6aKE6KeIXHJcblx0XHRhd2FpdCBTdG9yZS5yZW1vdGUuc3RhcnRQcmV2aWV3KChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+i/nOerr+acrOWcsOmihOiniCcsIHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5aaC5p6c5L2g5Y+q5Zyo5LiA5Liq6aG16Z2i5YaZIOWPr+S7peebtOaOpeiwgyBkZXN0b3J5IFxyXG5cdFx05aaC5p6c5L2g5piv55So55qE5Y2V5L6LIOemu+W8gOmhtemdouW8leaTjuS4jemUgOavgSDlsLHnlKggbGVhdmVDaGFubmVsXHJcblx0ICovXHJcblx0Ly8g5oyC5patXHJcblx0bGVhdmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8g56a75byA6aKR6YGTXHJcblx0XHRydGNNb2R1bGUubGVhdmVDaGFubmVsKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLosIPnlKjnprvlvIDpopHpgZMgbGVhdmVDaGFubmVsXCIsIHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOmUgOavgeWunuS+i1xyXG5cdGRlc3Ryb3lSdGM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHJ0Y01vZHVsZSAmJiBydGNNb2R1bGUuZGVzdHJveVJ0Yykge1xyXG5cdFx0XHQvLyDplIDmr4Hlrp7kvotcclxuXHRcdFx0cnRjTW9kdWxlLmRlc3Ryb3lSdGMoKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6ZSA5q+B5a6e5L6LXCIsIHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAwKSB7XHJcblx0XHRcdFx0XHRSVENVdGlscy5kZXN0cm95UnRjKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g6ZSA5q+BIHJ0YyDnm5HlkKzlh73mlbA7XHJcblx0XHRcdHVuaS4kb2ZmKCdsb2NhdGlvbi1jYXZhc3ZpZXcnKTtcclxuXHRcdFx0dW5pLiRvZmYoJ1BlZXJzT25saW5lU3RhdHVzQ2hhbmdlZCcpO1xyXG5cdFx0XHR1bmkuJG9mZigncnRjLWVuZGNhbGwnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIOebkea1iyBydGMg6KeG6aKR5riy5p+T5omA6ZyAXHJcbnVuaS4kb24oXCJsb2NhdGlvbi1jYXZhc3ZpZXdcIiwgZGF0YSA9PiB7XHJcblx0aWYgKGRhdGEpIHtcclxuXHRcdFN0b3JlID0gT2JqZWN0LmFzc2lnbihTdG9yZSwgZGF0YSk7XHJcblx0fVxyXG59KVxyXG4vLyDnm5HmtYvnlKjmiLflnKjnur/nirbmgIHvvIjkuIDml6bmlq3nvZHlsLHmjILmlq3vvIlcclxudW5pLiRvbignUGVlcnNPbmxpbmVTdGF0dXNDaGFuZ2VkJywgZGF0YSA9PiB7XHJcblx0aWYgKGRhdGEpIHtcclxuXHRcdGNvbnN0IG9TdGF0dXMgPSBkYXRhLnBlZXJzU3RhdHVzWzBdO1xyXG5cdFx0aWYgKG9TdGF0dXMgJiYgb1N0YXR1cy5zdGF0ZSA9PT0gMikge1xyXG5cdFx0XHQvLyDnlKjmiLfnprvnur9cclxuXHRcdFx0VXRpbHMuaGludFJUQ0luZm8oJ+i/nOerr+eUqOaIt+emu+e6vycsICdlcnJvcicpO1xyXG5cdFx0XHQvLyDliKTmlq3lnKggcnRtIOi/mOaYr+WcqCBydGNcclxuXHRcdFx0aWYgKCFTdG9yZS5jaGFubmVsICYmICFTdG9yZS51aWQpIHtcclxuXHRcdFx0XHQvLyAvLyDmuIXpmaQo5ZG85Y+r5pe25Y+W5raI5ZG85Y+rKVxyXG5cdFx0XHRcdHVuaS4kZW1pdChcInNlbmRNZXNzYWdlVG9QZWVyXCIsIHtcclxuXHRcdFx0XHRcdENtZDogXCJJbml0aWF0aXZlQ2FsbFwiLFxyXG5cdFx0XHRcdFx0cGVlcmlkOiBvU3RhdHVzLnBlZXJJZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHVuaS4kZW1pdChcInNlbmRNZXNzYWdlVG9QZWVyXCIsIHtcclxuXHRcdFx0XHRcdHBlZXJpZDogb1N0YXR1cy5wZWVySWQsXHJcblx0XHRcdFx0XHRDbWQ6IFwiRW5kQ2FsbFwiLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKFN0b3JlLmNoYW5uZWwpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdC8vIOWPkemAgeaMguaWreS/oeaBryDvvIhBckNhbGwg6YC76L6R5omA6ZyA77yJXHJcblx0XHRcdFx0XHR1bmkuJGVtaXQoXCJzZW5kTWVzc2FnZVRvUGVlclwiLCB7XHJcblx0XHRcdFx0XHRcdHBlZXJpZDogb1N0YXR1cy5wZWVySWQsXHJcblx0XHRcdFx0XHRcdENtZDogXCJFbmRDYWxsXCIsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIOa4hemZpFxyXG5cdFx0XHRcdFx0UlRDLmRlc3Ryb3lSdGMob1N0YXR1cy5wZWVySWQpO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KVxyXG5cclxuLy8g55uR5rWLIHJ0YyDmlLbliLDnmoTmjILmlq3kv6Hmga9cclxudW5pLiRvbihcInJ0Yy1lbmRjYWxsXCIsIGRhdGEgPT4ge1xyXG5cdC8vIOaMguaWrVxyXG5cdGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiRW5kQ2FsbFwiKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebkea1iyBydGMg5pS25Yiw55qE5oyC5pat5L+h5oGvXCIsIGRhdGEpO1xyXG5cdFx0VXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0aWYgKCFTdG9yZS5jaGFubmVsICYmICFTdG9yZS51aWQpIHtcclxuXHRcdFx0Ly8gLy8g5riF6ZmkKOWRvOWPq+aXtuWPlua2iOWRvOWPqylcclxuXHRcdFx0dW5pLiRlbWl0KFwic2VuZE1lc3NhZ2VUb1BlZXJcIiwge1xyXG5cdFx0XHRcdENtZDogXCJJbml0aWF0aXZlQ2FsbFwiLFxyXG5cdFx0XHRcdHBlZXJpZDogZGF0YS5wZWVySWRcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKFN0b3JlLmNoYW5uZWwpIHtcclxuXHRcdFx0UlRDLmRlc3Ryb3lSdGMoKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IFJUQztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!******************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // SDK 配置\nvar Config = {\n  RTC_APPID: \"ee0ca1b2bf559ea6823698acb0600e62\", //RTC 应用ID\n  RTM_APPID: \"ee0ca1b2bf559ea6823698acb0600e62\" //RTM 应用ID\n};var _default =\n\nConfig;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvY29uZmlnLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIlJUQ19BUFBJRCIsIlJUTV9BUFBJRCJdLCJtYXBwaW5ncyI6IndGQUFBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2RDLFdBQVMsRUFBRSxrQ0FERyxFQUNpQztBQUMvQ0MsV0FBUyxFQUFFLGtDQUZHLENBRWlDO0FBRmpDLENBQWYsQzs7QUFLZUYsTSIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNESyDphY3nva5cclxuY29uc3QgQ29uZmlnID0ge1xyXG5cdFJUQ19BUFBJRDogXCJlZTBjYTFiMmJmNTU5ZWE2ODIzNjk4YWNiMDYwMGU2MlwiLCAvL1JUQyDlupTnlKhJRFxyXG5cdFJUTV9BUFBJRDogXCJlZTBjYTFiMmJmNTU5ZWE2ODIzNjk4YWNiMDYwMGU2MlwiLCAvL1JUTSDlupTnlKhJRFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/until.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.RTCUtils = exports.RTMUtils = exports.Utils = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));var _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ 25));\nvar _permission = _interopRequireDefault(__webpack_require__(/*! ../js_sdk/wa-permission/permission.js */ 28));\nvar _rtccode = _interopRequireDefault(__webpack_require__(/*! ./rtccode.js */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar Store = {\n  // 是否正在通话中\n  isCalling: false,\n  // 判断 多人呼叫\n  conference: false,\n  // 提示框定时器记录\n  popupTimer: null };\n\n\n// 全局工具封装\nvar Utils = {\n  // 平台分类查询权限\n  equipment: function equipment() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oa, ob, _oa, _ob;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n              uni.getSystemInfoSync().platform == 'ios')) {_context.next = 11;break;}_context.next = 3;return (\n\n                Utils.requestAndroidPermission(\"camera\", 'ios', '相机'));case 3:oa = _context.sent;_context.next = 6;return (\n\n                Utils.requestAndroidPermission(\"record\", 'ios', '录音'));case 6:ob = _context.sent;_context.next = 9;return (\n                Utils.hintInfo([oa, ob]));case 9:_context.next = 20;break;case 11:if (!(\n\n              uni.getSystemInfoSync().platform === 'android')) {_context.next = 20;break;}_context.next = 14;return (\n\n                Utils.requestAndroidPermission(\"android.permission.CAMERA\", 'android', '相机'));case 14:_oa = _context.sent;_context.next = 17;return (\n\n                Utils.requestAndroidPermission(\"android.permission.RECORD_AUDIO\", 'android', '录音'));case 17:_ob = _context.sent;_context.next = 20;return (\n                Utils.hintInfo([_oa, _ob]));case 20:case \"end\":return _context.stop();}}}, _callee);}))();\n\n  },\n  // 查询权限封装\n  requestAndroidPermission: function requestAndroidPermission(permisionID, type, libe) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result, strStatus;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              result = 0;\n              strStatus = \"\";if (!(\n              type == 'ios')) {_context2.next = 8;break;}_context2.next = 5;return _permission.default.judgeIosPermission(permisionID);case 5:result = _context2.sent;_context2.next = 11;break;case 8:_context2.next = 10;return _permission.default.\n              requestAndroidPermission(\n              permisionID);case 10:result = _context2.sent;case 11:\n              if (result == 1) {\n                strStatus = \"已获得授权,可正常使用\";\n              } else if (result == 0) {\n                strStatus = \"未获得授权,无法使用\";\n              } else {\n                strStatus = \"被永久拒绝权限,无法使用\";\n              };return _context2.abrupt(\"return\",\n              libe + strStatus);case 14:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  // 获取元素\n  getEl: function getEl(el) {\n    if (typeof el === 'string' || typeof el === 'number') return el;\n    if (WXEnvironment) {\n      return el.ref;\n    } else {\n      return el instanceof HTMLElement ? el : el.$el;\n    }\n  },\n  // 生成uid\n  generateNumber: function generateNumber(len) {\n    var numLen = len || 8;\n    var generateNum = Math.ceil(Math.random() * Math.pow(10, numLen));\n    return generateNum < Math.pow(10, numLen - 1) ?\n    Utils.generateNumber(numLen) :\n    generateNum;\n  },\n  // 全局vue提示信息 type: success warn error info\n  hintInfo: function hintInfo(message) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n    var oSubId = _index.default.state.popubId || 'poPup';\n    // // 通过 id 获取 nvue 子窗体\n    var subNVue = uni.getSubNVueById(oSubId);\n    if (subNVue) {\n      // 打开 nvue 子窗体\n      subNVue.show('fade-in', 300);\n      uni.$emit('paltfrom-popup', {\n        type: type,\n        message: message });\n\n      // 关闭 nvue 子窗体\n      Store.popupTimer && clearTimeout(Store.popupTimer);\n      Store.popupTimer = setTimeout(function () {\n        subNVue.hide('fade-out', 300);\n        uni.$emit('paltfrom-popup', {\n          type: '',\n          message: '' });\n\n      }, duration);\n    }\n  },\n  // RTC 提示信息(nvue) type: success warn error info\n  hintRTCInfo: function hintRTCInfo(message) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n    // // 通过 id 获取 nvue 子窗体\n    var subNVue = uni.getSubNVueById('poPup-rtm');\n    // console.log(subNVue);\n    // 打开 nvue 子窗体  \n    subNVue.show('fade-in', 300);\n    uni.$emit('paltfrom-popup', {\n      type: type,\n      message: message });\n\n    // 关闭 nvue 子窗体  \n    Store.popupTimer && clearTimeout(Store.popupTimer);\n    Store.popupTimer = setTimeout(function () {\n      subNVue.hide('fade-out', 300);\n    }, duration);\n  },\n  // 还原(vue)\n  restoreAll: function restoreAll() {\n    // 通话结束\n    uni.$emit('isCalling', false);\n  },\n  // 呼叫邀请页面(vue) path \n  callInvitationPage: function callInvitationPage() {var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'index';var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var hint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    var oInfo = info ? JSON.stringify(info) : '';\n    uni.redirectTo({\n      url: path + (oInfo ? '?info=' + oInfo : ''),\n      success: function success(res) {\n        __f__(\"log\", '成功', res, \" at until/until.js:117\");\n        // 提示\n        if (hint) {\n          setTimeout(function () {\n            Utils.hintInfo(hint.message, hint.type);\n          }, 200);\n        }\n      },\n      fail: function fail(res) {\n        __f__(\"log\", \"失败\", res, \" at until/until.js:126\");\n      } });\n\n  },\n  // 视频通话页面(nvue)\n  callVideoPage: function callVideoPage(path) {var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    var subNVue = uni.getSubNVueById('CavasViewRTC');\n    // 显示\n    if (path === 'rtc') {\n      uni.$emit('CavasViewRtc', info);\n      subNVue.show('fade-in', 300);\n    } else {\n      uni.$emit('CavasViewRtc', \"\");\n      subNVue.hide('fade-out', 300);\n    }\n  } };\n\n// RTM 工具封装\nexports.Utils = Utils;var RTMUtils = {\n  // 判断是否调用 login 成功\n  useLogin: function useLogin(code, uid) {\n\n    if (code == 0) {\n      _index.default.dispatch('upDataUId', uid);\n      uni.showToast({\n        title: '登录成功',\n        icon: 'success',\n        duration: 2000 });\n\n    } else {\n      uni.showToast({\n        title: '登录失败',\n        icon: 'none',\n        duration: 2000 });\n\n    }\n  },\n  // SDK 与 RTM 系统的连接状态发生改变\n  ConnectionStateChanged: function ConnectionStateChanged(state, reason) {\n    // 新连接状态 state\n    var oState = ['', '初始状态。SDK 未连接到 RTM 系统', 'SDK 正在登录 AR RTM 系统', 'SDK 已登录 RTM 系统',\n    'SDK 与 RTM 系统连接由于网络原因出现中断，SDK 正在尝试自动重连 RTM 系统', 'SDK 停止登录 RTM 系统'];\n\n    // 连接状态改变原因 reason\n    var oReason = ['', 'SDK 正在登录 RTM 系统', 'SDK 登录 RTM 系统成功', 'SDK 登录 RTM 系统失败',\n    'SDK 无法登录 AR RTM 系统超过 6 秒，停止登录', 'SDK 与 RTM 系统的连接被中断', '用户已调用 logout() 方法登出 RTM 系统',\n    'SDK 被服务器禁止登录 RTM 系统', '另一个用户正以相同的用户 ID 登陆 RTM 系统'];\n\n    // 消息提醒\n    Utils.hintInfo(['连接状态：' + oState[state], '改变原因：' + oReason[reason]]);\n  },\n  // 收到点对点消息回调\n  PeerMessageReceived: function PeerMessageReceived(message, peerId) {\n    __f__(\"log\", \"收到点对点消息回调\", message, peerId, \" at until/until.js:179\");\n    var oInfo = JSON.parse(message);\n    // RTC 视频通话转语音通话\n    if (oInfo.Cmd == \"SwitchAudio\") {\n      __f__(\"log\", \"RTC 视频通话转语音通话\", \" at until/until.js:183\");\n      uni.$emit(\"rtc-SwitchAudio\", {\n        message: \"SwitchAudio\",\n        peerId: peerId });\n\n      // RTC 挂断\n    } else if (oInfo.Cmd == \"EndCall\") {\n      uni.$emit(\"rtc-endcall\", {\n        message: \"EndCall\",\n        peerId: peerId });\n\n\n    }\n  },\n  // 返回给主叫：被叫已接受呼叫邀请\n  LocalInvitationAccepted: function () {var _LocalInvitationAccepted = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {var oRes, oData;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n              __f__(\"log\", '返回给主叫：被叫已接受呼叫邀请', data, \" at until/until.js:199\");\n              // 正在通话\n              uni.$emit('isCalling', true);\n              // 数据组装\n              oRes = data.response ? JSON.parse(data.response) : {};_context3.next = 5;return (\n                Object.assign({}, JSON.parse(data.content), oRes));case 5:oData = _context3.sent;_context3.next = 8;return (\n\n                Utils.callVideoPage('rtc', {\n                  calleeId: data.calleeId,\n                  content: JSON.stringify(oData) }));case 8:case \"end\":return _context3.stop();}}}, _callee3);}));function LocalInvitationAccepted(_x) {return _LocalInvitationAccepted.apply(this, arguments);}return LocalInvitationAccepted;}(),\n\n\n  // 返回给主叫：呼叫邀请已被取消\n  LocalInvitationCanceled: function () {var _LocalInvitationCanceled = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n              __f__(\"log\", '呼叫邀请已取消', data, \" at until/until.js:213\");\n              // 还原\n              _context4.next = 3;return Utils.restoreAll();case 3:_context4.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '呼叫邀请已取消(主动挂断或对方已离线)',\n                  type: 'success' }));case 5:case \"end\":return _context4.stop();}}}, _callee4);}));function LocalInvitationCanceled(_x2) {return _LocalInvitationCanceled.apply(this, arguments);}return LocalInvitationCanceled;}(),\n\n\n  // 返回给主叫：呼叫邀请进程失败\n  LocalInvitationFailure: function () {var _LocalInvitationFailure = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n              __f__(\"log\", '呼叫邀请进程失败', data, \" at until/until.js:224\");\n              // 还原\n              _context5.next = 3;return Utils.restoreAll();case 3:_context5.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '呼叫邀请进程失败',\n                  type: 'error' }));case 5:case \"end\":return _context5.stop();}}}, _callee5);}));function LocalInvitationFailure(_x3) {return _LocalInvitationFailure.apply(this, arguments);}return LocalInvitationFailure;}(),\n\n\n  // 返回给主叫：被叫已收到呼叫邀请\n  LocalInvitationReceivedByPeer: function LocalInvitationReceivedByPeer(data) {\n    if (data.state == 2) {\n      __f__(\"log\", '被叫已收到呼叫邀请', data, \" at until/until.js:236\");\n      // 正在通话\n      var oCont = JSON.parse(data.content);\n      // 进入呼叫邀请\n      Utils.callInvitationPage('rtmPage', {\n        mode: oCont.Mode === 0 ? '视频' : '语音',\n        type: '主叫',\n        uid: data.calleeId });\n\n      uni.$emit('isCalling', true);\n    }\n  },\n  // 返回给主叫：被叫已拒绝呼叫邀请\n  LocalInvitationRefused: function () {var _LocalInvitationRefused = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(data) {var oDa;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n              __f__(\"log\", '被叫已拒绝呼叫邀请', data, \" at until/until.js:250\");\n              // 还原\n              _context6.next = 3;return Utils.restoreAll();case 3:if (!\n              data.response) {_context6.next = 14;break;}\n              oDa = JSON.parse(data.response);if (!(\n              oDa.Reason == 'calling' || oDa.Cmd == 'Calling')) {_context6.next = 10;break;}_context6.next = 8;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '被叫正在通话中',\n                  type: 'warn' }));case 8:_context6.next = 12;break;case 10:_context6.next = 12;return (\n\n\n\n                Utils.callInvitationPage('index', '', {\n                  message: '被叫已拒绝呼叫邀请',\n                  type: 'warn' }));case 12:_context6.next = 16;break;case 14:_context6.next = 16;return (\n\n\n\n\n                Utils.callInvitationPage('index', '', {\n                  message: '被叫已拒绝呼叫邀请',\n                  type: 'warn' }));case 16:case \"end\":return _context6.stop();}}}, _callee6);}));function LocalInvitationRefused(_x4) {return _LocalInvitationRefused.apply(this, arguments);}return LocalInvitationRefused;}(),\n\n\n\n\n  // 返回给被叫：接受呼叫邀请成功\n  RemoteInvitationAccepted: function RemoteInvitationAccepted(data) {\n    __f__(\"log\", '返回给被叫：接受呼叫邀请成功', data, \" at until/until.js:279\");\n    // 正在通话\n    uni.$emit('isCalling', true);\n    // 数据组装\n    var oRes = data.response ? JSON.parse(data.response) : {};\n    var oData = Object.assign({}, JSON.parse(data.content), oRes);\n    // 进入 rtc 视频通话\n    Utils.callVideoPage('rtc', {\n      calleeId: data.callerId,\n      content: JSON.stringify(oData) });\n\n  },\n  // 返回给被叫：主叫已取消呼叫邀请\n  RemoteInvitationCanceled: function () {var _RemoteInvitationCanceled = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(data) {return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n              __f__(\"log\", '主叫已取消呼叫邀请', data, \" at until/until.js:293\");\n              // 还原\n              _context7.next = 3;return Utils.restoreAll();case 3:_context7.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '主叫已取消呼叫邀请',\n                  type: 'warn' }));case 5:case \"end\":return _context7.stop();}}}, _callee7);}));function RemoteInvitationCanceled(_x5) {return _RemoteInvitationCanceled.apply(this, arguments);}return RemoteInvitationCanceled;}(),\n\n\n  // 返回给被叫：来自主叫的呼叫邀请进程失败\n  RemoteInvitationFailure: function () {var _RemoteInvitationFailure = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(data) {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:if (\n              Store.isCalling) {_context8.next = 5;break;}_context8.next = 3;return (\n\n                Utils.restoreAll());case 3:_context8.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '主叫的呼叫邀请进程失败',\n                  type: 'error' }));case 5:case \"end\":return _context8.stop();}}}, _callee8);}));function RemoteInvitationFailure(_x6) {return _RemoteInvitationFailure.apply(this, arguments);}return RemoteInvitationFailure;}(),\n\n\n\n  // 返回给被叫：收到一个呼叫邀请\n  RemoteInvitationReceived: function () {var _RemoteInvitationReceived = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(data, refuse) {var oInfo;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n              __f__(\"log\", '收到一个呼叫邀请', data, \" at until/until.js:316\");\n              // 判断当前用户是否正在通话中\n              if (!Store.isCalling) {_context9.next = 6;break;}_context9.next = 4;return (\n\n                refuse(data.callerId, {\n                  refuseId: data.callerId,\n                  Reason: \"calling\",\n                  Cmd: \"Calling\" }));case 4:_context9.next = 17;break;case 6:_context9.next = 8;return (\n\n\n\n                JSON.parse(data.content));case 8:oInfo = _context9.sent;\n              Store.conference = oInfo.Conference;\n              // uniapp 当前项目仅有 p2p 通话\n              if (!oInfo.Conference) {_context9.next = 14;break;}\n              setTimeout(function () {\n                // 多人通话(拒绝通话)\n                refuse(data.callerId, {\n                  refuseId: data.callerId });\n\n              }, 1500);_context9.next = 17;break;case 14:\n\n\n              // 正在通话\n              uni.$emit('isCalling', true);_context9.next = 17;return (\n                Utils.callInvitationPage('rtmPage', {\n                  mode: oInfo.Mode === 0 ? '视频' : '语音',\n                  type: '被叫',\n                  uid: data.callerId }));case 17:case \"end\":return _context9.stop();}}}, _callee9);}));function RemoteInvitationReceived(_x7, _x8) {return _RemoteInvitationReceived.apply(this, arguments);}return RemoteInvitationReceived;}(),\n\n\n\n\n  // 返回给被叫：拒绝呼叫邀请成功\n  RemoteInvitationRefused: function () {var _RemoteInvitationRefused = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(data) {return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n              __f__(\"log\", '拒绝呼叫邀请成功', data, Store.isCalling, \" at until/until.js:351\");if (\n              Store.isCalling) {_context10.next = 7;break;}\n              __f__(\"log\", '拒绝呼叫邀请成功', data, \" at until/until.js:353\");\n              // // 还原\n              _context10.next = 5;return Utils.restoreAll();case 5:_context10.next = 7;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: Store.conference ? '当前不支持多人呼叫，已拒绝' : '拒绝呼叫邀请成功',\n                  type: 'success' }));case 7:case \"end\":return _context10.stop();}}}, _callee10);}));function RemoteInvitationRefused(_x9) {return _RemoteInvitationRefused.apply(this, arguments);}return RemoteInvitationRefused;}() };\n\n\n\n\n// RTC 工具封装\nexports.RTMUtils = RTMUtils;var RTCUtils = {\n  // 发生警告\n  Warning: function Warning(code) {\n    // 消息提醒\n    Utils.hintRTCInfo(_rtccode.default.warning[Number(code)] || '未知警告', 'warn');\n  },\n  // 发生错误\n  Error: function Error(code) {\n    // 消息提醒\n    Utils.hintRTCInfo(_rtccode.default.errore[Number(code)] || '未知错误', 'error');\n  },\n  // 网络连接状态已改变\n  ConnectionStateChanged: function ConnectionStateChanged(res) {\n    // 消息提醒\n    Utils.hintRTCInfo(['当前网络连接状态：' + (_rtccode.default.connectionState.states[res.state] || '未知状态'), '络连接状态发生改变原因：' + (\n    _rtccode.default.connectionState.reason[res.reason] || '未知原因')]);\n\n  },\n  // 远端视频变化\n  RemoteVideoStateChanged: function RemoteVideoStateChanged(res) {\n    // 消息提醒\n    Utils.hintRTCInfo(['当前状态：' + (_rtccode.default.remoteVideoState.status[res.state] || '未知状态'), '原因：' + (_rtccode.default.\n    remoteVideoState.reson[res.reason] || '未知原因')]);\n  },\n  // 挂断电话，返回首页\n  destroyRtc: function destroyRtc() {\n    // 还原\n    Utils.restoreAll();\n    // 返回首页\n    uni.redirectTo({\n      url: 'index?state=end',\n      success: function success(res) {\n        __f__(\"log\", \"成功\", res, \" at until/until.js:397\");\n      },\n      fail: function fail(res) {\n        __f__(\"log\", \"失败\", res, \" at until/until.js:400\");\n      } });\n\n  } };\n\n\n// 监测 是否正在通话\nexports.RTCUtils = RTCUtils;uni.$on(\"isCalling\", function (deta) {\n  Store.isCalling = deta;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvdW50aWwuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJpc0NhbGxpbmciLCJjb25mZXJlbmNlIiwicG9wdXBUaW1lciIsIlV0aWxzIiwiZXF1aXBtZW50IiwidW5pIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybSIsInJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbiIsIm9hIiwib2IiLCJoaW50SW5mbyIsInBlcm1pc2lvbklEIiwidHlwZSIsImxpYmUiLCJyZXN1bHQiLCJzdHJTdGF0dXMiLCJwZXJtaXNpb24iLCJqdWRnZUlvc1Blcm1pc3Npb24iLCJnZXRFbCIsImVsIiwiV1hFbnZpcm9ubWVudCIsInJlZiIsIkhUTUxFbGVtZW50IiwiJGVsIiwiZ2VuZXJhdGVOdW1iZXIiLCJsZW4iLCJudW1MZW4iLCJnZW5lcmF0ZU51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwicG93IiwibWVzc2FnZSIsImR1cmF0aW9uIiwib1N1YklkIiwic3RvcmUiLCJzdGF0ZSIsInBvcHViSWQiLCJzdWJOVnVlIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJzaG93IiwiJGVtaXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGlkZSIsImhpbnRSVENJbmZvIiwicmVzdG9yZUFsbCIsImNhbGxJbnZpdGF0aW9uUGFnZSIsInBhdGgiLCJpbmZvIiwiaGludCIsIm9JbmZvIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0VG8iLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImNhbGxWaWRlb1BhZ2UiLCJSVE1VdGlscyIsInVzZUxvZ2luIiwiY29kZSIsInVpZCIsImRpc3BhdGNoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiQ29ubmVjdGlvblN0YXRlQ2hhbmdlZCIsInJlYXNvbiIsIm9TdGF0ZSIsIm9SZWFzb24iLCJQZWVyTWVzc2FnZVJlY2VpdmVkIiwicGVlcklkIiwicGFyc2UiLCJDbWQiLCJMb2NhbEludml0YXRpb25BY2NlcHRlZCIsImRhdGEiLCJvUmVzIiwicmVzcG9uc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250ZW50Iiwib0RhdGEiLCJjYWxsZWVJZCIsIkxvY2FsSW52aXRhdGlvbkNhbmNlbGVkIiwiTG9jYWxJbnZpdGF0aW9uRmFpbHVyZSIsIkxvY2FsSW52aXRhdGlvblJlY2VpdmVkQnlQZWVyIiwib0NvbnQiLCJtb2RlIiwiTW9kZSIsIkxvY2FsSW52aXRhdGlvblJlZnVzZWQiLCJvRGEiLCJSZWFzb24iLCJSZW1vdGVJbnZpdGF0aW9uQWNjZXB0ZWQiLCJjYWxsZXJJZCIsIlJlbW90ZUludml0YXRpb25DYW5jZWxlZCIsIlJlbW90ZUludml0YXRpb25GYWlsdXJlIiwiUmVtb3RlSW52aXRhdGlvblJlY2VpdmVkIiwicmVmdXNlIiwicmVmdXNlSWQiLCJDb25mZXJlbmNlIiwiUmVtb3RlSW52aXRhdGlvblJlZnVzZWQiLCJSVENVdGlscyIsIldhcm5pbmciLCJSVENjb2RlIiwid2FybmluZyIsIk51bWJlciIsIkVycm9yIiwiZXJyb3JlIiwiY29ubmVjdGlvblN0YXRlIiwic3RhdGVzIiwiUmVtb3RlVmlkZW9TdGF0ZUNoYW5nZWQiLCJyZW1vdGVWaWRlb1N0YXRlIiwic3RhdHVzIiwicmVzb24iLCJkZXN0cm95UnRjIiwiJG9uIiwiZGV0YSJdLCJtYXBwaW5ncyI6IjRSQUFBO0FBQ0E7QUFDQSxtRjtBQUNBLElBQU1BLEtBQUssR0FBRztBQUNiO0FBQ0FDLFdBQVMsRUFBRSxLQUZFO0FBR2I7QUFDQUMsWUFBVSxFQUFFLEtBSkM7QUFLYjtBQUNBQyxZQUFVLEVBQUUsSUFOQyxFQUFkOzs7QUFTQTtBQUNBLElBQU1DLEtBQUssR0FBRztBQUNiO0FBQ01DLFdBRk8sdUJBRUs7O0FBRWJDLGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixJQUFvQyxLQUZ2Qjs7QUFJREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsRUFBZ0QsSUFBaEQsQ0FKQyxTQUlaQyxFQUpZOztB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O0FBa0JoQjtBQUNBMkMseUJBQXVCLEVBQUUsaUNBQVN2RCxHQUFULEVBQWM7QUFDdEM7QUFDQXZELFNBQUssQ0FBQzJDLFdBQU4sQ0FBa0IsQ0FBQyxXQUFXNEQsaUJBQVFRLGdCQUFSLENBQXlCQyxNQUF6QixDQUFnQ3pELEdBQUcsQ0FBQ3JCLEtBQXBDLEtBQThDLE1BQXpELENBQUQsRUFBbUUsU0FBU3FFO0FBQzVGUSxvQkFENEYsQ0FDM0VFLEtBRDJFLENBQ3JFMUQsR0FBRyxDQUFDWSxNQURpRSxLQUN0RCxNQUQ2QyxDQUFuRSxDQUFsQjtBQUVBLEdBdkJlO0FBd0JoQjtBQUNBK0MsWUFBVSxFQUFFLHNCQUFXO0FBQ3RCO0FBQ0FsSCxTQUFLLENBQUM0QyxVQUFOO0FBQ0E7QUFDQTFDLE9BQUcsQ0FBQ2tELFVBQUosQ0FBZTtBQUNkQyxTQUFHLEVBQUUsaUJBRFM7QUFFZEMsYUFGYyxtQkFFTkMsR0FGTSxFQUVEO0FBQ1oscUJBQVksSUFBWixFQUFrQkEsR0FBbEI7QUFDQSxPQUphO0FBS2RDLFVBTGMsZ0JBS1RELEdBTFMsRUFLSjtBQUNULHFCQUFZLElBQVosRUFBa0JBLEdBQWxCO0FBQ0EsT0FQYSxFQUFmOztBQVNBLEdBdENlLEVBQWpCOzs7QUF5Q0E7NEJBQ0FyRCxHQUFHLENBQUNpSCxHQUFKLENBQVEsV0FBUixFQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUJ4SCxPQUFLLENBQUNDLFNBQU4sR0FBa0J1SCxJQUFsQjtBQUNBLENBRkQsRSIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleC5qcyc7XHJcbmltcG9ydCBwZXJtaXNpb24gZnJvbSBcIi4uL2pzX3Nkay93YS1wZXJtaXNzaW9uL3Blcm1pc3Npb24uanNcIjtcclxuaW1wb3J0IFJUQ2NvZGUgZnJvbSBcIi4vcnRjY29kZS5qc1wiO1xyXG5jb25zdCBTdG9yZSA9IHtcclxuXHQvLyDmmK/lkKbmraPlnKjpgJror53kuK1cclxuXHRpc0NhbGxpbmc6IGZhbHNlLFxyXG5cdC8vIOWIpOaWrSDlpJrkurrlkbzlj6tcclxuXHRjb25mZXJlbmNlOiBmYWxzZSxcclxuXHQvLyDmj5DnpLrmoYblrprml7blmajorrDlvZVcclxuXHRwb3B1cFRpbWVyOiBudWxsLFxyXG5cclxufVxyXG4vLyDlhajlsYDlt6XlhbflsIHoo4VcclxuY29uc3QgVXRpbHMgPSB7XHJcblx0Ly8g5bmz5Y+w5YiG57G75p+l6K+i5p2D6ZmQXHJcblx0YXN5bmMgZXF1aXBtZW50KCkge1xyXG5cdFx0Ly8g5p+l55yL5p2D6ZmQXHJcblx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcclxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiY2FtZXJhXCIsICdpb3MnLCAn55u45py6Jyk7XHJcblx0XHRcdC8v5p+l55yL5b2V6Z+z5p2D6ZmQXHJcblx0XHRcdGxldCBvYiA9IGF3YWl0IFV0aWxzLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcInJlY29yZFwiLCAnaW9zJywgJ+W9lemfsycpO1xyXG5cdFx0XHRhd2FpdCBVdGlscy5oaW50SW5mbyhbb2EsIG9iXSlcclxuXHJcblx0XHR9IGVsc2UgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcclxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLCAnYW5kcm9pZCcsICfnm7jmnLonKTtcclxuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcclxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJT1wiLCAnYW5kcm9pZCcsICflvZXpn7MnKTtcclxuXHRcdFx0YXdhaXQgVXRpbHMuaGludEluZm8oW29hLCBvYl0pXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDmn6Xor6LmnYPpmZDlsIHoo4VcclxuXHRhc3luYyByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24ocGVybWlzaW9uSUQsIHR5cGUsIGxpYmUpIHtcclxuXHRcdGxldCByZXN1bHQgPSAwO1xyXG5cdFx0bGV0IHN0clN0YXR1cyA9IFwiXCI7XHJcblx0XHR0eXBlID09ICdpb3MnID8gcmVzdWx0ID0gYXdhaXQgcGVybWlzaW9uLmp1ZGdlSW9zUGVybWlzc2lvbihwZXJtaXNpb25JRCkgOiByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb25cclxuXHRcdFx0LnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcclxuXHRcdFx0XHRwZXJtaXNpb25JRCk7XHJcblx0XHRpZiAocmVzdWx0ID09IDEpIHtcclxuXHRcdFx0c3RyU3RhdHVzID0gXCLlt7LojrflvpfmjojmnYMs5Y+v5q2j5bi45L2/55SoXCJcclxuXHRcdH0gZWxzZSBpZiAocmVzdWx0ID09IDApIHtcclxuXHRcdFx0c3RyU3RhdHVzID0gXCLmnKrojrflvpfmjojmnYMs5peg5rOV5L2/55SoXCJcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0clN0YXR1cyA9IFwi6KKr5rC45LmF5ouS57ud5p2D6ZmQLOaXoOazleS9v+eUqFwiXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGxpYmUgKyBzdHJTdGF0dXNcclxuXHR9LFxyXG5cdC8vIOiOt+WPluWFg+e0oFxyXG5cdGdldEVsKGVsKSB7XHJcblx0XHRpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWwgPT09ICdudW1iZXInKSByZXR1cm4gZWw7XHJcblx0XHRpZiAoV1hFbnZpcm9ubWVudCkge1xyXG5cdFx0XHRyZXR1cm4gZWwucmVmO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbCA6IGVsLiRlbDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIOeUn+aIkHVpZFxyXG5cdGdlbmVyYXRlTnVtYmVyKGxlbikge1xyXG5cdFx0bGV0IG51bUxlbiA9IGxlbiB8fCA4O1xyXG5cdFx0bGV0IGdlbmVyYXRlTnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygxMCwgbnVtTGVuKSk7XHJcblx0XHRyZXR1cm4gZ2VuZXJhdGVOdW0gPCBNYXRoLnBvdygxMCwgbnVtTGVuIC0gMSkgP1xyXG5cdFx0XHRVdGlscy5nZW5lcmF0ZU51bWJlcihudW1MZW4pIDpcclxuXHRcdFx0Z2VuZXJhdGVOdW07XHJcblx0fSxcclxuXHQvLyDlhajlsYB2dWXmj5DnpLrkv6Hmga8gdHlwZTogc3VjY2VzcyB3YXJuIGVycm9yIGluZm9cclxuXHRoaW50SW5mbyhtZXNzYWdlLCB0eXBlID0gJ2luZm8nLCBkdXJhdGlvbiA9IDMwMDApIHtcclxuXHRcdGNvbnN0IG9TdWJJZCA9IHN0b3JlLnN0YXRlLnBvcHViSWQgfHwgJ3BvUHVwJztcclxuXHRcdC8vIC8vIOmAmui/hyBpZCDojrflj5YgbnZ1ZSDlrZDnqpfkvZNcclxuXHRcdGNvbnN0IHN1Yk5WdWUgPSB1bmkuZ2V0U3ViTlZ1ZUJ5SWQob1N1YklkKTtcclxuXHRcdGlmIChzdWJOVnVlKSB7XHJcblx0XHRcdC8vIOaJk+W8gCBudnVlIOWtkOeql+S9k1xyXG5cdFx0XHRzdWJOVnVlLnNob3coJ2ZhZGUtaW4nLCAzMDApO1xyXG5cdFx0XHR1bmkuJGVtaXQoJ3BhbHRmcm9tLXBvcHVwJywge1xyXG5cdFx0XHRcdHR5cGUsXHJcblx0XHRcdFx0bWVzc2FnZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g5YWz6ZetIG52dWUg5a2Q56qX5L2TXHJcblx0XHRcdFN0b3JlLnBvcHVwVGltZXIgJiYgY2xlYXJUaW1lb3V0KFN0b3JlLnBvcHVwVGltZXIpO1xyXG5cdFx0XHRTdG9yZS5wb3B1cFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c3ViTlZ1ZS5oaWRlKCdmYWRlLW91dCcsIDMwMCk7XHJcblx0XHRcdFx0dW5pLiRlbWl0KCdwYWx0ZnJvbS1wb3B1cCcsIHtcclxuXHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJydcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgZHVyYXRpb24pXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyBSVEMg5o+Q56S65L+h5oGvKG52dWUpIHR5cGU6IHN1Y2Nlc3Mgd2FybiBlcnJvciBpbmZvXHJcblx0aGludFJUQ0luZm8obWVzc2FnZSwgdHlwZSA9ICdpbmZvJywgZHVyYXRpb24gPSAzMDAwKSB7XHJcblx0XHQvLyAvLyDpgJrov4cgaWQg6I635Y+WIG52dWUg5a2Q56qX5L2TXHJcblx0XHRjb25zdCBzdWJOVnVlID0gdW5pLmdldFN1Yk5WdWVCeUlkKCdwb1B1cC1ydG0nKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHN1Yk5WdWUpO1xyXG5cdFx0Ly8g5omT5byAIG52dWUg5a2Q56qX5L2TICBcclxuXHRcdHN1Yk5WdWUuc2hvdygnZmFkZS1pbicsIDMwMCk7XHJcblx0XHR1bmkuJGVtaXQoJ3BhbHRmcm9tLXBvcHVwJywge1xyXG5cdFx0XHR0eXBlLFxyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHR9KTtcclxuXHRcdC8vIOWFs+mXrSBudnVlIOWtkOeql+S9kyAgXHJcblx0XHRTdG9yZS5wb3B1cFRpbWVyICYmIGNsZWFyVGltZW91dChTdG9yZS5wb3B1cFRpbWVyKTtcclxuXHRcdFN0b3JlLnBvcHVwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0c3ViTlZ1ZS5oaWRlKCdmYWRlLW91dCcsIDMwMCk7XHJcblx0XHR9LCBkdXJhdGlvbilcclxuXHR9LFxyXG5cdC8vIOi/mOWOnyh2dWUpXHJcblx0cmVzdG9yZUFsbCgpIHtcclxuXHRcdC8vIOmAmuivnee7k+adn1xyXG5cdFx0dW5pLiRlbWl0KCdpc0NhbGxpbmcnLCBmYWxzZSk7XHJcblx0fSxcclxuXHQvLyDlkbzlj6vpgoDor7fpobXpnaIodnVlKSBwYXRoIFxyXG5cdGNhbGxJbnZpdGF0aW9uUGFnZShwYXRoID0gJ2luZGV4JywgaW5mbyA9ICcnLCBoaW50ID0gJycpIHtcclxuXHRcdGNvbnN0IG9JbmZvID0gaW5mbyA/IEpTT04uc3RyaW5naWZ5KGluZm8pIDogJyc7XHJcblx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdHVybDogcGF0aCArIChvSW5mbyA/ICc/aW5mbz0nICsgb0luZm8gOiAnJyksXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+aIkOWKnycsIHJlcyk7XHJcblx0XHRcdFx0Ly8g5o+Q56S6XHJcblx0XHRcdFx0aWYgKGhpbnQpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRVdGlscy5oaW50SW5mbyhoaW50Lm1lc3NhZ2UsIGhpbnQudHlwZSk7XHJcblx0XHRcdFx0XHR9LCAyMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWksei0pVwiLCByZXMpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDop4bpopHpgJror53pobXpnaIobnZ1ZSlcclxuXHRjYWxsVmlkZW9QYWdlKHBhdGgsIGluZm8gPSAnJykge1xyXG5cdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgnQ2F2YXNWaWV3UlRDJyk7XHJcblx0XHQvLyDmmL7npLpcclxuXHRcdGlmIChwYXRoID09PSAncnRjJykge1xyXG5cdFx0XHR1bmkuJGVtaXQoJ0NhdmFzVmlld1J0YycsIGluZm8pO1xyXG5cdFx0XHRzdWJOVnVlLnNob3coJ2ZhZGUtaW4nLCAzMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5pLiRlbWl0KCdDYXZhc1ZpZXdSdGMnLCBcIlwiKTtcclxuXHRcdFx0c3ViTlZ1ZS5oaWRlKCdmYWRlLW91dCcsIDMwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi8vIFJUTSDlt6XlhbflsIHoo4VcclxuY29uc3QgUlRNVXRpbHMgPSB7XHJcblx0Ly8g5Yik5pat5piv5ZCm6LCD55SoIGxvZ2luIOaIkOWKn1xyXG5cdHVzZUxvZ2luOiBmdW5jdGlvbihjb2RlLCB1aWQpIHtcclxuXHJcblx0XHRpZiAoY29kZSA9PSAwKSB7XHJcblx0XHRcdHN0b3JlLmRpc3BhdGNoKCd1cERhdGFVSWQnLCB1aWQpO1xyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+eZu+W9leaIkOWKnycsXHJcblx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG5cdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIFNESyDkuI4gUlRNIOezu+e7n+eahOi/nuaOpeeKtuaAgeWPkeeUn+aUueWPmFxyXG5cdENvbm5lY3Rpb25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKHN0YXRlLCByZWFzb24pIHtcclxuXHRcdC8vIOaWsOi/nuaOpeeKtuaAgSBzdGF0ZVxyXG5cdFx0bGV0IG9TdGF0ZSA9IFsnJywgJ+WIneWni+eKtuaAgeOAglNESyDmnKrov57mjqXliLAgUlRNIOezu+e7nycsICdTREsg5q2j5Zyo55m75b2VIEFSIFJUTSDns7vnu58nLCAnU0RLIOW3sueZu+W9lSBSVE0g57O757ufJyxcclxuXHRcdFx0J1NESyDkuI4gUlRNIOezu+e7n+i/nuaOpeeUseS6jue9kee7nOWOn+WboOWHuueOsOS4reaWre+8jFNESyDmraPlnKjlsJ3or5Xoh6rliqjph43ov54gUlRNIOezu+e7nycsICdTREsg5YGc5q2i55m75b2VIFJUTSDns7vnu58nXHJcblx0XHRdO1xyXG5cdFx0Ly8g6L+e5o6l54q25oCB5pS55Y+Y5Y6f5ZugIHJlYXNvblxyXG5cdFx0bGV0IG9SZWFzb24gPSBbJycsICdTREsg5q2j5Zyo55m75b2VIFJUTSDns7vnu58nLCAnU0RLIOeZu+W9lSBSVE0g57O757uf5oiQ5YqfJywgJ1NESyDnmbvlvZUgUlRNIOezu+e7n+Wksei0pScsXHJcblx0XHRcdCdTREsg5peg5rOV55m75b2VIEFSIFJUTSDns7vnu5/otoXov4cgNiDnp5LvvIzlgZzmraLnmbvlvZUnLCAnU0RLIOS4jiBSVE0g57O757uf55qE6L+e5o6l6KKr5Lit5patJywgJ+eUqOaIt+W3suiwg+eUqCBsb2dvdXQoKSDmlrnms5Xnmbvlh7ogUlRNIOezu+e7nycsXHJcblx0XHRcdCdTREsg6KKr5pyN5Yqh5Zmo56aB5q2i55m75b2VIFJUTSDns7vnu58nLCAn5Y+m5LiA5Liq55So5oi35q2j5Lul55u45ZCM55qE55So5oi3IElEIOeZu+mZhiBSVE0g57O757ufJyxcclxuXHRcdF07XHJcblx0XHQvLyDmtojmga/mj5DphpJcclxuXHRcdFV0aWxzLmhpbnRJbmZvKFsn6L+e5o6l54q25oCB77yaJyArIG9TdGF0ZVtzdGF0ZV0sICfmlLnlj5jljp/lm6DvvJonICsgb1JlYXNvbltyZWFzb25dXSk7XHJcblx0fSxcclxuXHQvLyDmlLbliLDngrnlr7nngrnmtojmga/lm57osINcclxuXHRQZWVyTWVzc2FnZVJlY2VpdmVkOiBmdW5jdGlvbihtZXNzYWdlLCBwZWVySWQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5pS25Yiw54K55a+554K55raI5oGv5Zue6LCDXCIsIG1lc3NhZ2UsIHBlZXJJZCk7XHJcblx0XHRjb25zdCBvSW5mbyA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcblx0XHQvLyBSVEMg6KeG6aKR6YCa6K+d6L2s6K+t6Z+z6YCa6K+dXHJcblx0XHRpZiAob0luZm8uQ21kID09IFwiU3dpdGNoQXVkaW9cIikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlJUQyDop4bpopHpgJror53ovazor63pn7PpgJror51cIik7XHJcblx0XHRcdHVuaS4kZW1pdChcInJ0Yy1Td2l0Y2hBdWRpb1wiLCB7XHJcblx0XHRcdFx0bWVzc2FnZTogXCJTd2l0Y2hBdWRpb1wiLFxyXG5cdFx0XHRcdHBlZXJJZDogcGVlcklkXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIFJUQyDmjILmlq1cclxuXHRcdH0gZWxzZSBpZiAob0luZm8uQ21kID09IFwiRW5kQ2FsbFwiKSB7XHJcblx0XHRcdHVuaS4kZW1pdChcInJ0Yy1lbmRjYWxsXCIsIHtcclxuXHRcdFx0XHRtZXNzYWdlOiBcIkVuZENhbGxcIixcclxuXHRcdFx0XHRwZWVySWQ6IHBlZXJJZFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nkuLvlj6vvvJrooqvlj6vlt7LmjqXlj5flkbzlj6vpgoDor7dcclxuXHRMb2NhbEludml0YXRpb25BY2NlcHRlZDogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+i/lOWbnue7meS4u+WPq++8muiiq+WPq+W3suaOpeWPl+WRvOWPq+mCgOivtycsIGRhdGEpO1xyXG5cdFx0Ly8g5q2j5Zyo6YCa6K+dXHJcblx0XHR1bmkuJGVtaXQoJ2lzQ2FsbGluZycsIHRydWUpO1xyXG5cdFx0Ly8g5pWw5o2u57uE6KOFXHJcblx0XHRjb25zdCBvUmVzID0gZGF0YS5yZXNwb25zZSA/IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZSkgOiB7fTtcclxuXHRcdGNvbnN0IG9EYXRhID0gYXdhaXQgT2JqZWN0LmFzc2lnbih7fSwgSlNPTi5wYXJzZShkYXRhLmNvbnRlbnQpLCBvUmVzKTtcclxuXHRcdC8vIOi/m+WFpSBydGMg6KeG6aKR6YCa6K+dXHJcblx0XHRhd2FpdCBVdGlscy5jYWxsVmlkZW9QYWdlKCdydGMnLCB7XHJcblx0XHRcdGNhbGxlZUlkOiBkYXRhLmNhbGxlZUlkLFxyXG5cdFx0XHRjb250ZW50OiBKU09OLnN0cmluZ2lmeShvRGF0YSksXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g6L+U5Zue57uZ5Li75Y+r77ya5ZG85Y+r6YKA6K+35bey6KKr5Y+W5raIXHJcblx0TG9jYWxJbnZpdGF0aW9uQ2FuY2VsZWQ6IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKCflkbzlj6vpgoDor7flt7Llj5bmtognLCBkYXRhKTtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0YXdhaXQgVXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+35Zue6YCA5Yiw6aaW6aG1XHJcblx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0bWVzc2FnZTogJ+WRvOWPq+mCgOivt+W3suWPlua2iCjkuLvliqjmjILmlq3miJblr7nmlrnlt7Lnprvnur8pJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOi/lOWbnue7meS4u+WPq++8muWRvOWPq+mCgOivt+i/m+eoi+Wksei0pVxyXG5cdExvY2FsSW52aXRhdGlvbkZhaWx1cmU6IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKCflkbzlj6vpgoDor7fov5vnqIvlpLHotKUnLCBkYXRhKTtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0YXdhaXQgVXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+35Zue6YCA5Yiw6aaW6aG1XHJcblx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0bWVzc2FnZTogJ+WRvOWPq+mCgOivt+i/m+eoi+Wksei0pScsXHJcblx0XHRcdHR5cGU6ICdlcnJvcidcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8g6L+U5Zue57uZ5Li75Y+r77ya6KKr5Y+r5bey5pS25Yiw5ZG85Y+r6YKA6K+3XHJcblx0TG9jYWxJbnZpdGF0aW9uUmVjZWl2ZWRCeVBlZXI6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmIChkYXRhLnN0YXRlID09IDIpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+iiq+WPq+W3suaUtuWIsOWRvOWPq+mCgOivtycsIGRhdGEpO1xyXG5cdFx0XHQvLyDmraPlnKjpgJror51cclxuXHRcdFx0Y29uc3Qgb0NvbnQgPSBKU09OLnBhcnNlKGRhdGEuY29udGVudClcclxuXHRcdFx0Ly8g6L+b5YWl5ZG85Y+r6YKA6K+3XHJcblx0XHRcdFV0aWxzLmNhbGxJbnZpdGF0aW9uUGFnZSgncnRtUGFnZScsIHtcclxuXHRcdFx0XHRtb2RlOiBvQ29udC5Nb2RlID09PSAwID8gJ+inhumikScgOiAn6K+t6Z+zJyxcclxuXHRcdFx0XHR0eXBlOiAn5Li75Y+rJyxcclxuXHRcdFx0XHR1aWQ6IGRhdGEuY2FsbGVlSWQsXHJcblx0XHRcdH0pXHJcblx0XHRcdHVuaS4kZW1pdCgnaXNDYWxsaW5nJywgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nkuLvlj6vvvJrooqvlj6vlt7Lmi5Lnu53lkbzlj6vpgoDor7dcclxuXHRMb2NhbEludml0YXRpb25SZWZ1c2VkOiBhc3luYyBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZygn6KKr5Y+r5bey5ouS57ud5ZG85Y+r6YKA6K+3JywgZGF0YSk7XHJcblx0XHQvLyDov5jljp9cclxuXHRcdGF3YWl0IFV0aWxzLnJlc3RvcmVBbGwoKTtcclxuXHRcdGlmIChkYXRhLnJlc3BvbnNlKSB7XHJcblx0XHRcdGNvbnN0IG9EYSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZSk7XHJcblx0XHRcdGlmIChvRGEuUmVhc29uID09ICdjYWxsaW5nJyB8fCBvRGEuQ21kID09ICdDYWxsaW5nJykge1xyXG5cdFx0XHRcdC8vIOWFs+mXreWRvOWPq+mCgOivt1xyXG5cdFx0XHRcdGF3YWl0IFV0aWxzLmNhbGxJbnZpdGF0aW9uUGFnZSgnaW5kZXgnLCAnJywge1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ+iiq+WPq+ato+WcqOmAmuivneS4rScsXHJcblx0XHRcdFx0XHR0eXBlOiAnd2FybidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyDlhbPpl63lkbzlj6vpgoDor7dcclxuXHRcdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICfooqvlj6vlt7Lmi5Lnu53lkbzlj6vpgoDor7cnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ3dhcm4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIOWFs+mXreWRvOWPq+mCgOivt1xyXG5cdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0XHRtZXNzYWdlOiAn6KKr5Y+r5bey5ouS57ud5ZG85Y+r6YKA6K+3JyxcclxuXHRcdFx0XHR0eXBlOiAnd2FybidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8g6L+U5Zue57uZ6KKr5Y+r77ya5o6l5Y+X5ZG85Y+r6YKA6K+35oiQ5YqfXHJcblx0UmVtb3RlSW52aXRhdGlvbkFjY2VwdGVkOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZygn6L+U5Zue57uZ6KKr5Y+r77ya5o6l5Y+X5ZG85Y+r6YKA6K+35oiQ5YqfJywgZGF0YSk7XHJcblx0XHQvLyDmraPlnKjpgJror51cclxuXHRcdHVuaS4kZW1pdCgnaXNDYWxsaW5nJywgdHJ1ZSk7XHJcblx0XHQvLyDmlbDmja7nu4Too4VcclxuXHRcdGNvbnN0IG9SZXMgPSBkYXRhLnJlc3BvbnNlID8gSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlKSA6IHt9O1xyXG5cdFx0Y29uc3Qgb0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBKU09OLnBhcnNlKGRhdGEuY29udGVudCksIG9SZXMpO1xyXG5cdFx0Ly8g6L+b5YWlIHJ0YyDop4bpopHpgJror51cclxuXHRcdFV0aWxzLmNhbGxWaWRlb1BhZ2UoJ3J0YycsIHtcclxuXHRcdFx0Y2FsbGVlSWQ6IGRhdGEuY2FsbGVySWQsXHJcblx0XHRcdGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KG9EYXRhKSxcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrkuLvlj6vlt7Llj5bmtojlkbzlj6vpgoDor7dcclxuXHRSZW1vdGVJbnZpdGF0aW9uQ2FuY2VsZWQ6IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKCfkuLvlj6vlt7Llj5bmtojlkbzlj6vpgoDor7cnLCBkYXRhKTtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0YXdhaXQgVXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+3XHJcblx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0bWVzc2FnZTogJ+S4u+WPq+W3suWPlua2iOWRvOWPq+mCgOivtycsXHJcblx0XHRcdHR5cGU6ICd3YXJuJ1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrmnaXoh6rkuLvlj6vnmoTlkbzlj6vpgoDor7fov5vnqIvlpLHotKVcclxuXHRSZW1vdGVJbnZpdGF0aW9uRmFpbHVyZTogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYgKCFTdG9yZS5pc0NhbGxpbmcpIHtcclxuXHRcdFx0Ly8g6L+Y5Y6fXHJcblx0XHRcdGF3YWl0IFV0aWxzLnJlc3RvcmVBbGwoKTtcclxuXHRcdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+35Zue6YCA5Yiw6aaW6aG1XHJcblx0XHRcdGF3YWl0IFV0aWxzLmNhbGxJbnZpdGF0aW9uUGFnZSgnaW5kZXgnLCAnJywge1xyXG5cdFx0XHRcdG1lc3NhZ2U6ICfkuLvlj6vnmoTlkbzlj6vpgoDor7fov5vnqIvlpLHotKUnLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrmlLbliLDkuIDkuKrlkbzlj6vpgoDor7dcclxuXHRSZW1vdGVJbnZpdGF0aW9uUmVjZWl2ZWQ6IGFzeW5jIGZ1bmN0aW9uKGRhdGEsIHJlZnVzZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+aUtuWIsOS4gOS4quWRvOWPq+mCgOivtycsIGRhdGEpO1xyXG5cdFx0Ly8g5Yik5pat5b2T5YmN55So5oi35piv5ZCm5q2j5Zyo6YCa6K+d5LitXHJcblx0XHRpZiAoU3RvcmUuaXNDYWxsaW5nKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCfliY3nlKjmiLfmraPlnKjpgJror53kuK0nKTtcclxuXHRcdFx0YXdhaXQgcmVmdXNlKGRhdGEuY2FsbGVySWQsIHtcclxuXHRcdFx0XHRyZWZ1c2VJZDogZGF0YS5jYWxsZXJJZCxcclxuXHRcdFx0XHRSZWFzb246IFwiY2FsbGluZ1wiLFxyXG5cdFx0XHRcdENtZDogXCJDYWxsaW5nXCIsXHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyDkuLvlj6vpmYTluKbkv6Hmga9cclxuXHRcdFx0Y29uc3Qgb0luZm8gPSBhd2FpdCBKU09OLnBhcnNlKGRhdGEuY29udGVudCk7XHJcblx0XHRcdFN0b3JlLmNvbmZlcmVuY2UgPSBvSW5mby5Db25mZXJlbmNlXHJcblx0XHRcdC8vIHVuaWFwcCDlvZPliY3pobnnm67ku4XmnIkgcDJwIOmAmuivnVxyXG5cdFx0XHRpZiAob0luZm8uQ29uZmVyZW5jZSkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g5aSa5Lq66YCa6K+dKOaLkue7nemAmuivnSlcclxuXHRcdFx0XHRcdHJlZnVzZShkYXRhLmNhbGxlcklkLCB7XHJcblx0XHRcdFx0XHRcdHJlZnVzZUlkOiBkYXRhLmNhbGxlcklkLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgMTUwMClcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8g5q2j5Zyo6YCa6K+dXHJcblx0XHRcdFx0dW5pLiRlbWl0KCdpc0NhbGxpbmcnLCB0cnVlKTtcclxuXHRcdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ3J0bVBhZ2UnLCB7XHJcblx0XHRcdFx0XHRtb2RlOiBvSW5mby5Nb2RlID09PSAwID8gJ+inhumikScgOiAn6K+t6Z+zJyxcclxuXHRcdFx0XHRcdHR5cGU6ICfooqvlj6snLFxyXG5cdFx0XHRcdFx0dWlkOiBkYXRhLmNhbGxlcklkLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrmi5Lnu53lkbzlj6vpgoDor7fmiJDlip9cclxuXHRSZW1vdGVJbnZpdGF0aW9uUmVmdXNlZDogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+aLkue7neWRvOWPq+mCgOivt+aIkOWKnycsIGRhdGEsIFN0b3JlLmlzQ2FsbGluZyk7XHJcblx0XHRpZiAoIVN0b3JlLmlzQ2FsbGluZykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5ouS57ud5ZG85Y+r6YKA6K+35oiQ5YqfJywgZGF0YSk7XHJcblx0XHRcdC8vIC8vIOi/mOWOn1xyXG5cdFx0XHRhd2FpdCBVdGlscy5yZXN0b3JlQWxsKCk7XHJcblx0XHRcdC8vIC8vIOWFs+mXreWRvOWPq+mCgOivt1xyXG5cdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0XHRtZXNzYWdlOiBTdG9yZS5jb25mZXJlbmNlID8gJ+W9k+WJjeS4jeaUr+aMgeWkmuS6uuWRvOWPq++8jOW3suaLkue7nScgOiAn5ouS57ud5ZG85Y+r6YKA6K+35oiQ5YqfJyxcclxuXHRcdFx0XHR0eXBlOiAnc3VjY2VzcydcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG4vLyBSVEMg5bel5YW35bCB6KOFXHJcbmNvbnN0IFJUQ1V0aWxzID0ge1xyXG5cdC8vIOWPkeeUn+itpuWRilxyXG5cdFdhcm5pbmc6IGZ1bmN0aW9uKGNvZGUpIHtcclxuXHRcdC8vIOa2iOaBr+aPkOmGklxyXG5cdFx0VXRpbHMuaGludFJUQ0luZm8oUlRDY29kZS53YXJuaW5nW051bWJlcihjb2RlKV0gfHwgJ+acquefpeitpuWRiicsICd3YXJuJyk7XHJcblx0fSxcclxuXHQvLyDlj5HnlJ/plJnor69cclxuXHRFcnJvcjogZnVuY3Rpb24oY29kZSkge1xyXG5cdFx0Ly8g5raI5oGv5o+Q6YaSXHJcblx0XHRVdGlscy5oaW50UlRDSW5mbyhSVENjb2RlLmVycm9yZVtOdW1iZXIoY29kZSldIHx8ICfmnKrnn6XplJnor68nLCAnZXJyb3InKTtcclxuXHR9LFxyXG5cdC8vIOe9kee7nOi/nuaOpeeKtuaAgeW3suaUueWPmFxyXG5cdENvbm5lY3Rpb25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0Ly8g5raI5oGv5o+Q6YaSXHJcblx0XHRVdGlscy5oaW50UlRDSW5mbyhbJ+W9k+WJjee9kee7nOi/nuaOpeeKtuaAge+8micgKyAoUlRDY29kZS5jb25uZWN0aW9uU3RhdGUuc3RhdGVzW3Jlcy5zdGF0ZV0gfHwgJ+acquefpeeKtuaAgScpLCAn57uc6L+e5o6l54q25oCB5Y+R55Sf5pS55Y+Y5Y6f5Zug77yaJyArXHJcblx0XHRcdChSVENjb2RlLmNvbm5lY3Rpb25TdGF0ZS5yZWFzb25bcmVzLnJlYXNvbl0gfHwgJ+acquefpeWOn+WboCcpXHJcblx0XHRdKTtcclxuXHR9LFxyXG5cdC8vIOi/nOerr+inhumikeWPmOWMllxyXG5cdFJlbW90ZVZpZGVvU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdC8vIOa2iOaBr+aPkOmGklxyXG5cdFx0VXRpbHMuaGludFJUQ0luZm8oWyflvZPliY3nirbmgIHvvJonICsgKFJUQ2NvZGUucmVtb3RlVmlkZW9TdGF0ZS5zdGF0dXNbcmVzLnN0YXRlXSB8fCAn5pyq55+l54q25oCBJyksICfljp/lm6DvvJonICsgKFJUQ2NvZGVcclxuXHRcdFx0LnJlbW90ZVZpZGVvU3RhdGUucmVzb25bcmVzLnJlYXNvbl0gfHwgJ+acquefpeWOn+WboCcpXSk7XHJcblx0fSxcclxuXHQvLyDmjILmlq3nlLXor53vvIzov5Tlm57pppbpobVcclxuXHRkZXN0cm95UnRjOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0VXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g6L+U5Zue6aaW6aG1XHJcblx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdHVybDogJ2luZGV4P3N0YXRlPWVuZCcsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLmiJDlip9cIiwgcmVzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWksei0pVwiLCByZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59XHJcblxyXG4vLyDnm5HmtYsg5piv5ZCm5q2j5Zyo6YCa6K+dXHJcbnVuaS4kb24oXCJpc0NhbGxpbmdcIiwgKGRldGEpID0+IHtcclxuXHRTdG9yZS5pc0NhbGxpbmcgPSBkZXRhO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7XHJcblx0VXRpbHMsXHJcblx0UlRNVXRpbHMsXHJcblx0UlRDVXRpbHNcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/store/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    popubId: '', // 弹窗 ID\n    uid: '', // 本地用户 uid\n    // 视频编码属性\n    VideoConfig: {\n      \"width\": 240,\n      \"height\": 320,\n      \"bitrate\": 0,\n      \"frameRate\": 15,\n      \"orientationMode\": 0 },\n\n    etAudioAiNoise: false // 开启 AI 智能降噪\n  },\n  mutations: {\n    // 更新弹窗 ID\n    upDataPopubId: function upDataPopubId(state, data) {\n      state.popubId = data;\n    },\n    // 更新本地用户 uid\n    upDataUId: function upDataUId(state, data) {\n      state.uid = data;\n    },\n    // 更新视频编码属性\n    upDataVideoConfig: function upDataVideoConfig(state, data) {\n      state.VideoConfig = Object.assign(state.VideoConfig, data);\n    },\n    // 更新 是否开启 AI 智能降噪\n    upDataetAudioAiNoise: function upDataetAudioAiNoise(state, data) {\n      state.etAudioAiNoise = data;\n    } },\n\n\n  actions: {\n    // 更改弹窗 ID\n    upDataPopubId: function upDataPopubId(_ref,\n\n    data) {var commit = _ref.commit;\n      commit('upDataPopubId', data);\n    },\n    // 更新本地用户 uid\n    upDataUId: function upDataUId(_ref2,\n\n    data) {var commit = _ref2.commit;\n      commit('upDataUId', data);\n    },\n    // 更新视频编码属性\n    upDataVideoConfig: function upDataVideoConfig(_ref3,\n\n    data) {var commit = _ref3.commit;\n      commit('upDataVideoConfig', data);\n    },\n    // 更新 是否开启 AI 智能降噪\n    upDataetAudioAiNoise: function upDataetAudioAiNoise(_ref4,\n\n    data) {var commit = _ref4.commit;\n      commit('upDataetAudioAiNoise', data);\n    } } });var _default =\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsInBvcHViSWQiLCJ1aWQiLCJWaWRlb0NvbmZpZyIsImV0QXVkaW9BaU5vaXNlIiwibXV0YXRpb25zIiwidXBEYXRhUG9wdWJJZCIsImRhdGEiLCJ1cERhdGFVSWQiLCJ1cERhdGFWaWRlb0NvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsInVwRGF0YWV0QXVkaW9BaU5vaXNlIiwiYWN0aW9ucyIsImNvbW1pdCJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0Esd0U7QUFDQUEsYUFBSUMsR0FBSixDQUFRQyxhQUFSO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFO0FBQ05DLFdBQU8sRUFBRSxFQURILEVBQ087QUFDYkMsT0FBRyxFQUFFLEVBRkMsRUFFRztBQUNUO0FBQ0FDLGVBQVcsRUFBRTtBQUNaLGVBQVMsR0FERztBQUVaLGdCQUFVLEdBRkU7QUFHWixpQkFBVyxDQUhDO0FBSVosbUJBQWEsRUFKRDtBQUtaLHlCQUFtQixDQUxQLEVBSlA7O0FBV05DLGtCQUFjLEVBQUUsS0FYVixDQVdpQjtBQVhqQixHQURxQjtBQWM1QkMsV0FBUyxFQUFFO0FBQ1Y7QUFDQUMsaUJBRlUseUJBRUlOLEtBRkosRUFFV08sSUFGWCxFQUVpQjtBQUMxQlAsV0FBSyxDQUFDQyxPQUFOLEdBQWdCTSxJQUFoQjtBQUNBLEtBSlM7QUFLVjtBQUNBQyxhQU5VLHFCQU1BUixLQU5BLEVBTU9PLElBTlAsRUFNYTtBQUN0QlAsV0FBSyxDQUFDRSxHQUFOLEdBQVlLLElBQVo7QUFDQSxLQVJTO0FBU1Y7QUFDQUUscUJBVlUsNkJBVVFULEtBVlIsRUFVZU8sSUFWZixFQVVxQjtBQUM5QlAsV0FBSyxDQUFDRyxXQUFOLEdBQW9CTyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsS0FBSyxDQUFDRyxXQUFwQixFQUFpQ0ksSUFBakMsQ0FBcEI7QUFDQSxLQVpTO0FBYVY7QUFDQUssd0JBZFUsZ0NBY1daLEtBZFgsRUFja0JPLElBZGxCLEVBY3dCO0FBQ2pDUCxXQUFLLENBQUNJLGNBQU4sR0FBdUJHLElBQXZCO0FBQ0EsS0FoQlMsRUFkaUI7OztBQWlDNUJNLFNBQU8sRUFBRTtBQUNSO0FBQ0FQLGlCQUZROztBQUlMQyxRQUpLLEVBSUMsS0FEUk8sTUFDUSxRQURSQSxNQUNRO0FBQ1JBLFlBQU0sQ0FBQyxlQUFELEVBQWtCUCxJQUFsQixDQUFOO0FBQ0EsS0FOTztBQU9SO0FBQ0FDLGFBUlE7O0FBVUxELFFBVkssRUFVQyxLQURSTyxNQUNRLFNBRFJBLE1BQ1E7QUFDUkEsWUFBTSxDQUFDLFdBQUQsRUFBY1AsSUFBZCxDQUFOO0FBQ0EsS0FaTztBQWFSO0FBQ0FFLHFCQWRROztBQWdCTEYsUUFoQkssRUFnQkMsS0FEUk8sTUFDUSxTQURSQSxNQUNRO0FBQ1JBLFlBQU0sQ0FBQyxtQkFBRCxFQUFzQlAsSUFBdEIsQ0FBTjtBQUNBLEtBbEJPO0FBbUJSO0FBQ0FLLHdCQXBCUTs7QUFzQkxMLFFBdEJLLEVBc0JDLEtBRFJPLE1BQ1EsU0FEUkEsTUFDUTtBQUNSQSxZQUFNLENBQUMsc0JBQUQsRUFBeUJQLElBQXpCLENBQU47QUFDQSxLQXhCTyxFQWpDbUIsRUFBZixDQUFkLEM7OztBQTREZVQsSyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG5cdHN0YXRlOiB7XHJcblx0XHRwb3B1YklkOiAnJywgLy8g5by556qXIElEXHJcblx0XHR1aWQ6ICcnLCAvLyDmnKzlnLDnlKjmiLcgdWlkXHJcblx0XHQvLyDop4bpopHnvJbnoIHlsZ7mgKdcclxuXHRcdFZpZGVvQ29uZmlnOiB7XHJcblx0XHRcdFwid2lkdGhcIjogMjQwLFxyXG5cdFx0XHRcImhlaWdodFwiOiAzMjAsXHJcblx0XHRcdFwiYml0cmF0ZVwiOiAwLFxyXG5cdFx0XHRcImZyYW1lUmF0ZVwiOiAxNSxcclxuXHRcdFx0XCJvcmllbnRhdGlvbk1vZGVcIjogMFxyXG5cdFx0fSxcclxuXHRcdGV0QXVkaW9BaU5vaXNlOiBmYWxzZSwgLy8g5byA5ZCvIEFJIOaZuuiDvemZjeWZqlxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHQvLyDmm7TmlrDlvLnnqpcgSURcclxuXHRcdHVwRGF0YVBvcHViSWQoc3RhdGUsIGRhdGEpIHtcclxuXHRcdFx0c3RhdGUucG9wdWJJZCA9IGRhdGE7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw5pys5Zyw55So5oi3IHVpZFxyXG5cdFx0dXBEYXRhVUlkKHN0YXRlLCBkYXRhKSB7XHJcblx0XHRcdHN0YXRlLnVpZCA9IGRhdGE7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw6KeG6aKR57yW56CB5bGe5oCnXHJcblx0XHR1cERhdGFWaWRlb0NvbmZpZyhzdGF0ZSwgZGF0YSkge1xyXG5cdFx0XHRzdGF0ZS5WaWRlb0NvbmZpZyA9IE9iamVjdC5hc3NpZ24oc3RhdGUuVmlkZW9Db25maWcsIGRhdGEpO1xyXG5cdFx0fSxcclxuXHRcdC8vIOabtOaWsCDmmK/lkKblvIDlkK8gQUkg5pm66IO96ZmN5ZmqXHJcblx0XHR1cERhdGFldEF1ZGlvQWlOb2lzZShzdGF0ZSwgZGF0YSkge1xyXG5cdFx0XHRzdGF0ZS5ldEF1ZGlvQWlOb2lzZSA9IGRhdGE7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fSxcclxuXHRhY3Rpb25zOiB7XHJcblx0XHQvLyDmm7TmlLnlvLnnqpcgSURcclxuXHRcdHVwRGF0YVBvcHViSWQoe1xyXG5cdFx0XHRjb21taXRcclxuXHRcdH0sIGRhdGEpIHtcclxuXHRcdFx0Y29tbWl0KCd1cERhdGFQb3B1YklkJywgZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw5pys5Zyw55So5oi3IHVpZFxyXG5cdFx0dXBEYXRhVUlkKHtcclxuXHRcdFx0Y29tbWl0XHJcblx0XHR9LCBkYXRhKSB7XHJcblx0XHRcdGNvbW1pdCgndXBEYXRhVUlkJywgZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw6KeG6aKR57yW56CB5bGe5oCnXHJcblx0XHR1cERhdGFWaWRlb0NvbmZpZyh7XHJcblx0XHRcdGNvbW1pdFxyXG5cdFx0fSwgZGF0YSkge1xyXG5cdFx0XHRjb21taXQoJ3VwRGF0YVZpZGVvQ29uZmlnJywgZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05pawIOaYr+WQpuW8gOWQryBBSSDmmbrog73pmY3lmapcclxuXHRcdHVwRGF0YWV0QXVkaW9BaU5vaXNlKHtcclxuXHRcdFx0Y29tbWl0XHJcblx0XHR9LCBkYXRhKSB7XHJcblx0XHRcdGNvbW1pdCgndXBEYXRhZXRBdWRpb0FpTm9pc2UnLCBkYXRhKTtcclxuXHRcdH0sXHRcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 27 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 28 */
/*!*************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/js_sdk/wa-permission/permission.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FB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QVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/rtccode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // RTC 相关状态码\nvar code = {\n  // 警告状态码\n  warning: {\n    8: \"指定的 View 无效，使用视频功能时需要指定 view\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    20: \"请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理\",\n    103: \"没有可用的频道资源。可能是因为服务端没法分配频道资源\",\n    104: \"查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器\",\n    106: \"打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器\",\n    107: \"打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的\",\n    121: \"TICKET 非法，打开频道失败\",\n    122: \"尝试打开另一个服务器\",\n    701: \"打开伴奏出错\",\n    1014: \"音频设备模块：运行时播放设备出现警告\",\n    1016: \"音频设备模块：运行时录音设备出现警告\",\n    1019: \"音频设备模块：没有采集到有效的声音数据\",\n    1025: \"音频播放或采集被系统事件（如来电）打扰\",\n    1033: \"音频设备模块：录制设备被占用\",\n    1051: \"音频设备模块：录音声音检查到啸叫\" },\n\n  // 错误状态码\n  errore: {\n    0: \"没有错误\",\n    1: \"一般性的错误（没有明确归类的错误原因）\",\n    2: \"API 调用了无效的参数。例如指定的频道名含有非法字符\",\n    3: \"SDK 初始化失败\",\n    4: \"SDK 当前状态不支持此操作\",\n    5: \"调用被拒绝\",\n    6: \"传入的缓冲区大小不足以存放返回的数据\",\n    7: \"SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已创建 RtcEngine 对象并完成初始化\",\n    8: \"指定的 View 无效，使用视频功能时需要指定 View\",\n    9: \"没有操作权限。请检查用户是否授予 app 音视频设备使用权限\",\n    10: \"API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理时间过长，超过 10 秒没有返回，会出现此错误\",\n    11: \"请求被取消\",\n    12: \"调用频率太高\",\n    13: \"SDK 内部绑定到网络 Socket 失败\",\n    14: \"网络不可用\",\n    15: \"没有网络缓冲区可用\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    17: \"加入频道被拒绝\",\n    18: \"离开频道失败\",\n    19: \"资源已被占用，不能重复使用\",\n    101: \"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道\",\n    102: \"不是有效的频道名。请更换有效的频道名重新加入频道\",\n    110: \"开启了 token 校验但没有输入 token\",\n    111: \"网络连接中断\",\n    112: \"网络连接丢失\",\n    113: \"在调用 sendStreamMessage 时，用户不在频道内\",\n    114: \"在调用 sendStreamMessage 时，发送的数据长度大于 1024 个字节\",\n    115: \"在调用 sendStreamMessage 时，发送的数据码率超过限制（6KB/s）\",\n    116: \"在调用 createDataStream 时，创建的数据通道过多（超过 5 个通道）\",\n    120: \"解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道\",\n    123: \"此用户被服务器禁止\",\n    125: \"水印文件路径错误\",\n    134: \"无效的 User account\",\n    1001: \"加载媒体引擎失败\",\n    1002: \"启动媒体引擎开始通话失败。请尝试重新进入频道\",\n    1004: \"启动视频渲染模块失败\",\n    1005: \"音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道\",\n    1006: \"音频设备模块：使用 java 资源出现错误\",\n    1007: \"音频设备模块：设置的采样频率出现错误\",\n    1008: \"音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道\",\n    1009: \"音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道\",\n    1010: \"音频设备模块：停止播放设备出现错误\",\n    1011: \"音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1012: \"音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1013: \"音频设备模块：停止录音设备出现错误\",\n    1015: \"音频设备模块：运行时播放出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1017: \"音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1018: \"音频设备模块：录音失败\",\n    1022: \"音频设备模块：初始化 Loopback 设备错误\",\n    1023: \"音频设备模块：启动 Loopback 设备错误\",\n    1030: \"音频路由：连接蓝牙通话失败，默认路由会被启用\",\n    1359: \"音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用\",\n    1501: \"视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限\",\n    1600: \"视频设备模块：未知错误\",\n    1601: \"视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道\",\n    1602: \"视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道\" },\n\n  // 网络连接状态\n  connectionState: {\n    // 当前的网络连接状态\n    states: {\n      1: \"网络连接断开\",\n      2: \"建立网络连接中 \",\n      3: \"网络已连接\",\n      4: \"重新建立网络连接中\",\n      5: \"网络连接失败\" },\n\n    // 改变原因\n    reason: {\n      0: \"建立网络连接中\",\n      1: \"成功加入频道\",\n      2: \"网络连接中断\",\n      3: \"网络连接被服务器禁止\",\n      4: \"加入频道失败\",\n      5: \"离开频道\",\n      6: \"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道\",\n      7: \"不是有效的频道名。请更换有效的频道名重新加入频道\",\n      8: \"生成的 Token 无效。一般有以下原因：在控制台上启用了 App Certificate，但加入频道未使用 Token。当启用了 App Certificate，必须使用 Token在调用 joinChannel 加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致\",\n      9: \"当前使用的 Token 过期，不再有效，需要重新在你的服务端申请生成 Token\",\n      10: \"此用户被服务器禁止\",\n      11: \"由于设置了代理服务器，SDK 尝试重连\",\n      12: \"更新 Token 引起网络连接状态改变\",\n      13: \"客户端 IP 地址变更，可能是由于网络类型，或网络运营商的 IP 或端口发生改变引起\",\n      14: \"SDK 和服务器连接保活超时，进入自动重连状态\" } },\n\n\n  remoteVideoState: {\n    // 改变状态\n    status: {\n      0: '远端视频默认初始状态',\n      1: '本地用户已接收远端视频首包',\n      2: '远端视频流正在解码，正常播放',\n      3: '远端视频流卡顿',\n      4: '远端视频流播放失败' },\n\n    // 原因\n    reson: {\n      0: '内部原因',\n      1: '网络阻塞',\n      2: '网络恢复正常',\n      3: '本地用户停止接收远端视频流或本地用户禁用视频模块',\n      4: '本地用户恢复接收远端视频流或本地用户启动视频模块',\n      5: '远端用户停止发送视频流或远端用户禁用视频模块',\n      6: '远端用户恢复发送视频流或远端用户启用视频模块',\n      7: '远端用户离开频道',\n      8: '远端视频流已回退为音频流',\n      9: '回退的远端音频流恢复为视频流' } } };var _default =\n\n\n\n\ncode;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvcnRjY29kZS5qcyJdLCJuYW1lcyI6WyJjb2RlIiwid2FybmluZyIsImVycm9yZSIsImNvbm5lY3Rpb25TdGF0ZSIsInN0YXRlcyIsInJlYXNvbiIsInJlbW90ZVZpZGVvU3RhdGUiLCJzdGF0dXMiLCJyZXNvbiJdLCJtYXBwaW5ncyI6IndGQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHO0FBQ1o7QUFDQUMsU0FBTyxFQUFFO0FBQ1IsT0FBRyw4QkFESztBQUVSLFFBQUksK0NBRkk7QUFHUixRQUFJLGlDQUhJO0FBSVIsU0FBSyw0QkFKRztBQUtSLFNBQUssb0RBTEc7QUFNUixTQUFLLGlEQU5HO0FBT1IsU0FBSyxxQ0FQRztBQVFSLFNBQUssa0JBUkc7QUFTUixTQUFLLFlBVEc7QUFVUixTQUFLLFFBVkc7QUFXUixVQUFNLG9CQVhFO0FBWVIsVUFBTSxvQkFaRTtBQWFSLFVBQU0scUJBYkU7QUFjUixVQUFNLHFCQWRFO0FBZVIsVUFBTSxnQkFmRTtBQWdCUixVQUFNLGtCQWhCRSxFQUZHOztBQW9CWjtBQUNBQyxRQUFNLEVBQUU7QUFDUCxPQUFHLE1BREk7QUFFUCxPQUFHLHFCQUZJO0FBR1AsT0FBRyw2QkFISTtBQUlQLE9BQUcsV0FKSTtBQUtQLE9BQUcsZ0JBTEk7QUFNUCxPQUFHLE9BTkk7QUFPUCxPQUFHLG9CQVBJO0FBUVAsT0FBRyx3REFSSTtBQVNQLE9BQUcsOEJBVEk7QUFVUCxPQUFHLGdDQVZJO0FBV1AsUUFBSSxnRUFYRztBQVlQLFFBQUksT0FaRztBQWFQLFFBQUksUUFiRztBQWNQLFFBQUksdUJBZEc7QUFlUCxRQUFJLE9BZkc7QUFnQlAsUUFBSSxXQWhCRztBQWlCUCxRQUFJLCtDQWpCRztBQWtCUCxRQUFJLFNBbEJHO0FBbUJQLFFBQUksUUFuQkc7QUFvQlAsUUFBSSxlQXBCRztBQXFCUCxTQUFLLG1DQXJCRTtBQXNCUCxTQUFLLDBCQXRCRTtBQXVCUCxTQUFLLHlCQXZCRTtBQXdCUCxTQUFLLFFBeEJFO0FBeUJQLFNBQUssUUF6QkU7QUEwQlAsU0FBSyxpQ0ExQkU7QUEyQlAsU0FBSyw0Q0EzQkU7QUE0QlAsU0FBSyw0Q0E1QkU7QUE2QlAsU0FBSyw0Q0E3QkU7QUE4QlAsU0FBSyw2Q0E5QkU7QUErQlAsU0FBSyxXQS9CRTtBQWdDUCxTQUFLLFVBaENFO0FBaUNQLFNBQUssa0JBakNFO0FBa0NQLFVBQU0sVUFsQ0M7QUFtQ1AsVUFBTSx3QkFuQ0M7QUFvQ1AsVUFBTSxZQXBDQztBQXFDUCxVQUFNLHlEQXJDQztBQXNDUCxVQUFNLHVCQXRDQztBQXVDUCxVQUFNLG9CQXZDQztBQXdDUCxVQUFNLGdEQXhDQztBQXlDUCxVQUFNLDBDQXpDQztBQTBDUCxVQUFNLG1CQTFDQztBQTJDUCxVQUFNLDRDQTNDQztBQTRDUCxVQUFNLDBDQTVDQztBQTZDUCxVQUFNLG1CQTdDQztBQThDUCxVQUFNLHlDQTlDQztBQStDUCxVQUFNLHVDQS9DQztBQWdEUCxVQUFNLGFBaERDO0FBaURQLFVBQU0sMEJBakRDO0FBa0RQLFVBQU0seUJBbERDO0FBbURQLFVBQU0sd0JBbkRDO0FBb0RQLFVBQU0sK0NBcERDO0FBcURQLFVBQU0saUNBckRDO0FBc0RQLFVBQU0sYUF0REM7QUF1RFAsVUFBTSxzQ0F2REM7QUF3RFAsVUFBTSxtQ0F4REMsRUFyQkk7O0FBK0VaO0FBQ0FDLGlCQUFlLEVBQUU7QUFDaEI7QUFDQUMsVUFBTSxFQUFFO0FBQ1AsU0FBRyxRQURJO0FBRVAsU0FBRyxVQUZJO0FBR1AsU0FBRyxPQUhJO0FBSVAsU0FBRyxXQUpJO0FBS1AsU0FBRyxRQUxJLEVBRlE7O0FBU2hCO0FBQ0FDLFVBQU0sRUFBRTtBQUNQLFNBQUcsU0FESTtBQUVQLFNBQUcsUUFGSTtBQUdQLFNBQUcsUUFISTtBQUlQLFNBQUcsWUFKSTtBQUtQLFNBQUcsUUFMSTtBQU1QLFNBQUcsTUFOSTtBQU9QLFNBQUcsbUNBUEk7QUFRUCxTQUFHLDBCQVJJO0FBU1AsU0FBRyxpSkFUSTtBQVVQLFNBQUcsMENBVkk7QUFXUCxVQUFJLFdBWEc7QUFZUCxVQUFJLHFCQVpHO0FBYVAsVUFBSSxxQkFiRztBQWNQLFVBQUksNENBZEc7QUFlUCxVQUFJLHlCQWZHLEVBVlEsRUFoRkw7OztBQTRHWkMsa0JBQWdCLEVBQUU7QUFDakI7QUFDQUMsVUFBTSxFQUFFO0FBQ1AsU0FBRyxZQURJO0FBRVAsU0FBRyxlQUZJO0FBR1AsU0FBRyxnQkFISTtBQUlQLFNBQUcsU0FKSTtBQUtQLFNBQUcsV0FMSSxFQUZTOztBQVNqQjtBQUNBQyxTQUFLLEVBQUU7QUFDTixTQUFHLE1BREc7QUFFTixTQUFHLE1BRkc7QUFHTixTQUFHLFFBSEc7QUFJTixTQUFHLDBCQUpHO0FBS04sU0FBRywwQkFMRztBQU1OLFNBQUcsd0JBTkc7QUFPTixTQUFHLHdCQVBHO0FBUU4sU0FBRyxVQVJHO0FBU04sU0FBRyxjQVRHO0FBVU4sU0FBRyxnQkFWRyxFQVZVLEVBNUdOLEVBQWIsQzs7Ozs7QUFxSWVSLEkiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSVEMg55u45YWz54q25oCB56CBXHJcbmNvbnN0IGNvZGUgPSB7XHJcblx0Ly8g6K2m5ZGK54q25oCB56CBXHJcblx0d2FybmluZzoge1xyXG5cdFx0ODogXCLmjIflrprnmoQgVmlldyDml6DmlYjvvIzkvb/nlKjop4bpopHlip/og73ml7bpnIDopoHmjIflrpogdmlld1wiLFxyXG5cdFx0MTY6IFwi5Yid5aeL5YyW6KeG6aKR5Yqf6IO95aSx6LSl44CC5pyJ5Y+v6IO95piv5Zug6KeG6aKR6LWE5rqQ6KKr5Y2g55So5a+86Ie055qE44CC55So5oi35peg5rOV55yL5Yiw6KeG6aKR55S76Z2i77yM5L2G5LiN5b2x5ZON6K+t6Z+z6YCa5L+hXCIsXHJcblx0XHQyMDogXCLor7fmsYLlpITkuo7lvoXlrprnirbmgIHjgILkuIDoiKzmmK/nlLHkuo7mn5DkuKrmqKHlnZfov5jmsqHlh4blpIflpb3vvIzor7fmsYLooqvlu7bov5/lpITnkIZcIixcclxuXHRcdDEwMzogXCLmsqHmnInlj6/nlKjnmoTpopHpgZPotYTmupDjgILlj6/og73mmK/lm6DkuLrmnI3liqHnq6/msqHms5XliIbphY3popHpgZPotYTmupBcIixcclxuXHRcdDEwNDogXCLmn6Xmib7popHpgZPotoXml7bjgILlnKjliqDlhaXpopHpgZPml7YgU0RLIOWFiOimgeafpeaJvuaMh+WumueahOmikemBk++8jOWHuueOsOivpeitpuWRiuS4gOiIrOaYr+WboOS4uue9kee7nOWkquW3ru+8jOi/nuaOpeS4jeWIsOacjeWKoeWZqFwiLFxyXG5cdFx0MTA2OiBcIuaJk+W8gOmikemBk+i2heaXtuOAguafpeaJvuWIsOaMh+WumumikemBk+WQju+8jFNESyDmjqXnnYDmiZPlvIDor6XpopHpgZPvvIzotoXml7bkuIDoiKzmmK/lm6DkuLrnvZHnu5zlpKrlt67vvIzov57mjqXkuI3liLDmnI3liqHlmahcIixcclxuXHRcdDEwNzogXCLmiZPlvIDpopHpgZPor7fmsYLooqvmnI3liqHlmajmi5Lnu53jgILmnI3liqHlmajlj6/og73msqHmnInlip7ms5XlpITnkIbor6Xor7fmsYLmiJbor6Xor7fmsYLmmK/pnZ7ms5XnmoRcIixcclxuXHRcdDEyMTogXCJUSUNLRVQg6Z2e5rOV77yM5omT5byA6aKR6YGT5aSx6LSlXCIsXHJcblx0XHQxMjI6IFwi5bCd6K+V5omT5byA5Y+m5LiA5Liq5pyN5Yqh5ZmoXCIsXHJcblx0XHQ3MDE6IFwi5omT5byA5Ly05aWP5Ye66ZSZXCIsXHJcblx0XHQxMDE0OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuaSreaUvuiuvuWkh+WHuueOsOitpuWRilwiLFxyXG5cdFx0MTAxNjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrov5DooYzml7blvZXpn7Porr7lpIflh7rnjrDorablkYpcIixcclxuXHRcdDEwMTk6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5rKh5pyJ6YeH6ZuG5Yiw5pyJ5pWI55qE5aOw6Z+z5pWw5o2uXCIsXHJcblx0XHQxMDI1OiBcIumfs+mikeaSreaUvuaIlumHh+mbhuiiq+ezu+e7n+S6i+S7tu+8iOWmguadpeeUte+8ieaJk+aJsFwiLFxyXG5cdFx0MTAzMzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlvZXliLborr7lpIfooqvljaDnlKhcIixcclxuXHRcdDEwNTE6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5b2V6Z+z5aOw6Z+z5qOA5p+l5Yiw5ZW45Y+rXCIsXHJcblx0fSxcclxuXHQvLyDplJnor6/nirbmgIHnoIFcclxuXHRlcnJvcmU6IHtcclxuXHRcdDA6IFwi5rKh5pyJ6ZSZ6K+vXCIsXHJcblx0XHQxOiBcIuS4gOiIrOaAp+eahOmUmeivr++8iOayoeacieaYjuehruW9kuexu+eahOmUmeivr+WOn+WboO+8iVwiLFxyXG5cdFx0MjogXCJBUEkg6LCD55So5LqG5peg5pWI55qE5Y+C5pWw44CC5L6L5aaC5oyH5a6a55qE6aKR6YGT5ZCN5ZCr5pyJ6Z2e5rOV5a2X56ymXCIsXHJcblx0XHQzOiBcIlNESyDliJ3lp4vljJblpLHotKVcIixcclxuXHRcdDQ6IFwiU0RLIOW9k+WJjeeKtuaAgeS4jeaUr+aMgeatpOaTjeS9nFwiLFxyXG5cdFx0NTogXCLosIPnlKjooqvmi5Lnu51cIixcclxuXHRcdDY6IFwi5Lyg5YWl55qE57yT5Yay5Yy65aSn5bCP5LiN6Laz5Lul5a2Y5pS+6L+U5Zue55qE5pWw5o2uXCIsXHJcblx0XHQ3OiBcIlNESyDlsJrmnKrliJ3lp4vljJbvvIzlsLHosIPnlKjlhbYgQVBJ44CC6K+356Gu6K6k5Zyo6LCD55SoIEFQSSDkuYvliY3lt7LliJvlu7ogUnRjRW5naW5lIOWvueixoeW5tuWujOaIkOWIneWni+WMllwiLFxyXG5cdFx0ODogXCLmjIflrprnmoQgVmlldyDml6DmlYjvvIzkvb/nlKjop4bpopHlip/og73ml7bpnIDopoHmjIflrpogVmlld1wiLFxyXG5cdFx0OTogXCLmsqHmnInmk43kvZzmnYPpmZDjgILor7fmo4Dmn6XnlKjmiLfmmK/lkKbmjojkuoggYXBwIOmfs+inhumikeiuvuWkh+S9v+eUqOadg+mZkFwiLFxyXG5cdFx0MTA6IFwiQVBJIOiwg+eUqOi2heaXtuOAguacieS6myBBUEkg6LCD55So6ZyA6KaBIFNESyDov5Tlm57nu5PmnpzvvIzlpoLmnpwgU0RLIOWkhOeQhuaXtumXtOi/h+mVv++8jOi2hei/hyAxMCDnp5LmsqHmnInov5Tlm57vvIzkvJrlh7rnjrDmraTplJnor69cIixcclxuXHRcdDExOiBcIuivt+axguiiq+WPlua2iFwiLFxyXG5cdFx0MTI6IFwi6LCD55So6aKR546H5aSq6auYXCIsXHJcblx0XHQxMzogXCJTREsg5YaF6YOo57uR5a6a5Yiw572R57ucIFNvY2tldCDlpLHotKVcIixcclxuXHRcdDE0OiBcIue9kee7nOS4jeWPr+eUqFwiLFxyXG5cdFx0MTU6IFwi5rKh5pyJ572R57uc57yT5Yay5Yy65Y+v55SoXCIsXHJcblx0XHQxNjogXCLliJ3lp4vljJbop4bpopHlip/og73lpLHotKXjgILmnInlj6/og73mmK/lm6Dop4bpopHotYTmupDooqvljaDnlKjlr7zoh7TnmoTjgILnlKjmiLfml6Dms5XnnIvliLDop4bpopHnlLvpnaLvvIzkvYbkuI3lvbHlk43or63pn7PpgJrkv6FcIixcclxuXHRcdDE3OiBcIuWKoOWFpemikemBk+iiq+aLkue7nVwiLFxyXG5cdFx0MTg6IFwi56a75byA6aKR6YGT5aSx6LSlXCIsXHJcblx0XHQxOTogXCLotYTmupDlt7LooqvljaDnlKjvvIzkuI3og73ph43lpI3kvb/nlKhcIixcclxuXHRcdDEwMTogXCLkuI3mmK/mnInmlYjnmoQgQVBQIElE44CC6K+35pu05o2i5pyJ5pWI55qEIEFQUCBJRCDph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDEwMjogXCLkuI3mmK/mnInmlYjnmoTpopHpgZPlkI3jgILor7fmm7TmjaLmnInmlYjnmoTpopHpgZPlkI3ph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDExMDogXCLlvIDlkK/kuoYgdG9rZW4g5qCh6aqM5L2G5rKh5pyJ6L6T5YWlIHRva2VuXCIsXHJcblx0XHQxMTE6IFwi572R57uc6L+e5o6l5Lit5patXCIsXHJcblx0XHQxMTI6IFwi572R57uc6L+e5o6l5Lii5aSxXCIsXHJcblx0XHQxMTM6IFwi5Zyo6LCD55SoIHNlbmRTdHJlYW1NZXNzYWdlIOaXtu+8jOeUqOaIt+S4jeWcqOmikemBk+WGhVwiLFxyXG5cdFx0MTE0OiBcIuWcqOiwg+eUqCBzZW5kU3RyZWFtTWVzc2FnZSDml7bvvIzlj5HpgIHnmoTmlbDmja7plb/luqblpKfkuo4gMTAyNCDkuKrlrZfoioJcIixcclxuXHRcdDExNTogXCLlnKjosIPnlKggc2VuZFN0cmVhbU1lc3NhZ2Ug5pe277yM5Y+R6YCB55qE5pWw5o2u56CB546H6LaF6L+H6ZmQ5Yi277yINktCL3PvvIlcIixcclxuXHRcdDExNjogXCLlnKjosIPnlKggY3JlYXRlRGF0YVN0cmVhbSDml7bvvIzliJvlu7rnmoTmlbDmja7pgJrpgZPov4flpJrvvIjotoXov4cgNSDkuKrpgJrpgZPvvIlcIixcclxuXHRcdDEyMDogXCLop6Plr4blpLHotKXvvIzlj6/og73mmK/nlKjmiLfliqDlhaXpopHpgZPnlKjkuobkuI3lkIznmoTlr4bnoIHjgILor7fmo4Dmn6XliqDlhaXpopHpgZPml7bnmoTorr7nva7vvIzmiJblsJ3or5Xph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDEyMzogXCLmraTnlKjmiLfooqvmnI3liqHlmajnpoHmraJcIixcclxuXHRcdDEyNTogXCLmsLTljbDmlofku7bot6/lvoTplJnor69cIixcclxuXHRcdDEzNDogXCLml6DmlYjnmoQgVXNlciBhY2NvdW50XCIsXHJcblx0XHQxMDAxOiBcIuWKoOi9veWqkuS9k+W8leaTjuWksei0pVwiLFxyXG5cdFx0MTAwMjogXCLlkK/liqjlqpLkvZPlvJXmk47lvIDlp4vpgJror53lpLHotKXjgILor7flsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMDQ6IFwi5ZCv5Yqo6KeG6aKR5riy5p+T5qih5Z2X5aSx6LSlXCIsXHJcblx0XHQxMDA1OiBcIumfs+mikeiuvuWkh+aooeWdl++8mumfs+mikeiuvuWkh+WHuueOsOmUmeivr++8iOacquaYjuehruaMh+aYjuS4uuS9leenjemUmeivr++8ieOAguivt+ajgOafpemfs+mikeiuvuWkh+aYr+WQpuiiq+WFtuS7luW6lOeUqOWNoOeUqO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAwNjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrkvb/nlKggamF2YSDotYTmupDlh7rnjrDplJnor69cIixcclxuXHRcdDEwMDc6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya6K6+572u55qE6YeH5qC36aKR546H5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHQxMDA4OiBcIumfs+mikeiuvuWkh+aooeWdl++8muWIneWni+WMluaSreaUvuiuvuWkh+WHuueOsOmUmeivr+OAguivt+ajgOafpeaSreaUvuiuvuWkh+aYr+WQpuiiq+WFtuS7luW6lOeUqOWNoOeUqO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAwOTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlkK/liqjmkq3mlL7orr7lpIflh7rnjrDplJnor6/jgILor7fmo4Dmn6Xmkq3mlL7orr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMTA6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5YGc5q2i5pKt5pS+6K6+5aSH5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHQxMDExOiBcIumfs+mikeiuvuWkh+aooeWdl++8muWIneWni+WMluW9lemfs+iuvuWkh+aXtuWHuueOsOmUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxMjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlkK/liqjlvZXpn7Porr7lpIflh7rnjrDplJnor6/jgILor7fmo4Dmn6XlvZXpn7Porr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMTM6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5YGc5q2i5b2V6Z+z6K6+5aSH5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHQxMDE1OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuaSreaUvuWHuueOsOmUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxNzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrov5DooYzml7blvZXpn7PplJnor6/jgILor7fmo4Dmn6XlvZXpn7Porr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMTg6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5b2V6Z+z5aSx6LSlXCIsXHJcblx0XHQxMDIyOiBcIumfs+mikeiuvuWkh+aooeWdl++8muWIneWni+WMliBMb29wYmFjayDorr7lpIfplJnor69cIixcclxuXHRcdDEwMjM6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5ZCv5YqoIExvb3BiYWNrIOiuvuWkh+mUmeivr1wiLFxyXG5cdFx0MTAzMDogXCLpn7PpopHot6/nlLHvvJrov57mjqXok53niZnpgJror53lpLHotKXvvIzpu5jorqTot6/nlLHkvJrooqvlkK/nlKhcIixcclxuXHRcdDEzNTk6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5peg5b2V5Yi26K6+5aSH44CC6K+35qOA5p+l5piv5ZCm5pyJ5Y+v55So55qE5b2V5pS+6Z+z6K6+5aSH5oiW6ICF5b2V5pS+6Z+z6K6+5aSH5piv5ZCm5bey57uP6KKr5YW25LuW5bqU55So5Y2g55SoXCIsXHJcblx0XHQxNTAxOiBcIuinhumikeiuvuWkh+aooeWdl++8muayoeacieaRhOWDj+WktOS9v+eUqOadg+mZkOOAguivt+ajgOafpeaYr+WQpuW3sue7j+aJk+W8gOaRhOWDj+WktOadg+mZkFwiLFxyXG5cdFx0MTYwMDogXCLop4bpopHorr7lpIfmqKHlnZfvvJrmnKrnn6XplJnor69cIixcclxuXHRcdDE2MDE6IFwi6KeG6aKR6K6+5aSH5qih5Z2X77ya6KeG6aKR57yW56CB5Zmo5Yid5aeL5YyW6ZSZ6K+v44CC6K+l6ZSZ6K+v5Li65Lil6YeN6ZSZ6K+v77yM6K+35bCd6K+V6YeN5paw5Yqg5YWl6aKR6YGTXCIsXHJcblx0XHQxNjAyOiBcIuinhumikeiuvuWkh+aooeWdl++8muinhumikee8lueggeWZqOmUmeivr+OAguivpemUmeivr+S4uuS4pemHjemUmeivr++8jOivt+WwneivlemHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdH0sXHJcblx0Ly8g572R57uc6L+e5o6l54q25oCBXHJcblx0Y29ubmVjdGlvblN0YXRlOiB7XHJcblx0XHQvLyDlvZPliY3nmoTnvZHnu5zov57mjqXnirbmgIFcclxuXHRcdHN0YXRlczoge1xyXG5cdFx0XHQxOiBcIue9kee7nOi/nuaOpeaWreW8gFwiLFxyXG5cdFx0XHQyOiBcIuW7uueri+e9kee7nOi/nuaOpeS4rSBcIixcclxuXHRcdFx0MzogXCLnvZHnu5zlt7Lov57mjqVcIixcclxuXHRcdFx0NDogXCLph43mlrDlu7rnq4vnvZHnu5zov57mjqXkuK1cIixcclxuXHRcdFx0NTogXCLnvZHnu5zov57mjqXlpLHotKVcIixcclxuXHRcdH0sXHJcblx0XHQvLyDmlLnlj5jljp/lm6BcclxuXHRcdHJlYXNvbjoge1xyXG5cdFx0XHQwOiBcIuW7uueri+e9kee7nOi/nuaOpeS4rVwiLFxyXG5cdFx0XHQxOiBcIuaIkOWKn+WKoOWFpemikemBk1wiLFxyXG5cdFx0XHQyOiBcIue9kee7nOi/nuaOpeS4reaWrVwiLFxyXG5cdFx0XHQzOiBcIue9kee7nOi/nuaOpeiiq+acjeWKoeWZqOemgeatolwiLFxyXG5cdFx0XHQ0OiBcIuWKoOWFpemikemBk+Wksei0pVwiLFxyXG5cdFx0XHQ1OiBcIuemu+W8gOmikemBk1wiLFxyXG5cdFx0XHQ2OiBcIuS4jeaYr+acieaViOeahCBBUFAgSUTjgILor7fmm7TmjaLmnInmlYjnmoQgQVBQIElEIOmHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0XHQ3OiBcIuS4jeaYr+acieaViOeahOmikemBk+WQjeOAguivt+abtOaNouacieaViOeahOmikemBk+WQjemHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0XHQ4OiBcIueUn+aIkOeahCBUb2tlbiDml6DmlYjjgILkuIDoiKzmnInku6XkuIvljp/lm6DvvJrlnKjmjqfliLblj7DkuIrlkK/nlKjkuoYgQXBwIENlcnRpZmljYXRl77yM5L2G5Yqg5YWl6aKR6YGT5pyq5L2/55SoIFRva2Vu44CC5b2T5ZCv55So5LqGIEFwcCBDZXJ0aWZpY2F0Ze+8jOW/hemhu+S9v+eUqCBUb2tlbuWcqOiwg+eUqCBqb2luQ2hhbm5lbCDliqDlhaXpopHpgZPml7bmjIflrprnmoQgdWlkIOS4jueUn+aIkCBUb2tlbiDml7bkvKDlhaXnmoQgdWlkIOS4jeS4gOiHtFwiLFxyXG5cdFx0XHQ5OiBcIuW9k+WJjeS9v+eUqOeahCBUb2tlbiDov4fmnJ/vvIzkuI3lho3mnInmlYjvvIzpnIDopoHph43mlrDlnKjkvaDnmoTmnI3liqHnq6/nlLPor7fnlJ/miJAgVG9rZW5cIixcclxuXHRcdFx0MTA6IFwi5q2k55So5oi36KKr5pyN5Yqh5Zmo56aB5q2iXCIsXHJcblx0XHRcdDExOiBcIueUseS6juiuvue9ruS6huS7o+eQhuacjeWKoeWZqO+8jFNESyDlsJ3or5Xph43ov55cIixcclxuXHRcdFx0MTI6IFwi5pu05pawIFRva2VuIOW8lei1t+e9kee7nOi/nuaOpeeKtuaAgeaUueWPmFwiLFxyXG5cdFx0XHQxMzogXCLlrqLmiLfnq68gSVAg5Zyw5Z2A5Y+Y5pu077yM5Y+v6IO95piv55Sx5LqO572R57uc57G75Z6L77yM5oiW572R57uc6L+Q6JCl5ZWG55qEIElQIOaIluerr+WPo+WPkeeUn+aUueWPmOW8lei1t1wiLFxyXG5cdFx0XHQxNDogXCJTREsg5ZKM5pyN5Yqh5Zmo6L+e5o6l5L+d5rS76LaF5pe277yM6L+b5YWl6Ieq5Yqo6YeN6L+e54q25oCBXCIsXHJcblx0XHR9XHJcblx0fSxcclxuXHRyZW1vdGVWaWRlb1N0YXRlOiB7XHJcblx0XHQvLyDmlLnlj5jnirbmgIFcclxuXHRcdHN0YXR1czoge1xyXG5cdFx0XHQwOiAn6L+c56uv6KeG6aKR6buY6K6k5Yid5aeL54q25oCBJyxcclxuXHRcdFx0MTogJ+acrOWcsOeUqOaIt+W3suaOpeaUtui/nOerr+inhumikemmluWMhScsXHJcblx0XHRcdDI6ICfov5znq6/op4bpopHmtYHmraPlnKjop6PnoIHvvIzmraPluLjmkq3mlL4nLFxyXG5cdFx0XHQzOiAn6L+c56uv6KeG6aKR5rWB5Y2h6aG/JyxcclxuXHRcdFx0NDogJ+i/nOerr+inhumikea1geaSreaUvuWksei0pSdcclxuXHRcdH0sXHJcblx0XHQvLyDljp/lm6BcclxuXHRcdHJlc29uOiB7XHJcblx0XHRcdDA6ICflhoXpg6jljp/lm6AnLFxyXG5cdFx0XHQxOiAn572R57uc6Zi75aGeJyxcclxuXHRcdFx0MjogJ+e9kee7nOaBouWkjeato+W4uCcsXHJcblx0XHRcdDM6ICfmnKzlnLDnlKjmiLflgZzmraLmjqXmlLbov5znq6/op4bpopHmtYHmiJbmnKzlnLDnlKjmiLfnpoHnlKjop4bpopHmqKHlnZcnLFxyXG5cdFx0XHQ0OiAn5pys5Zyw55So5oi35oGi5aSN5o6l5pS26L+c56uv6KeG6aKR5rWB5oiW5pys5Zyw55So5oi35ZCv5Yqo6KeG6aKR5qih5Z2XJyxcclxuXHRcdFx0NTogJ+i/nOerr+eUqOaIt+WBnOatouWPkemAgeinhumikea1geaIlui/nOerr+eUqOaIt+emgeeUqOinhumikeaooeWdlycsXHJcblx0XHRcdDY6ICfov5znq6/nlKjmiLfmgaLlpI3lj5HpgIHop4bpopHmtYHmiJbov5znq6/nlKjmiLflkK/nlKjop4bpopHmqKHlnZcnLFxyXG5cdFx0XHQ3OiAn6L+c56uv55So5oi356a75byA6aKR6YGTJyxcclxuXHRcdFx0ODogJ+i/nOerr+inhumikea1geW3suWbnumAgOS4uumfs+mikea1gScsXHJcblx0XHRcdDk6ICflm57pgIDnmoTov5znq6/pn7PpopHmtYHmgaLlpI3kuLrop4bpopHmtYEnLFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29kZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*************************************************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?vue&type=style&index=0&id=39c12bd0&scoped=true&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_39c12bd0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=style&index=0&id=39c12bd0&scoped=true&lang=css&mpType=page */ 31);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_39c12bd0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_39c12bd0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_39c12bd0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_39c12bd0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_39c12bd0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/paltfrom/app-plus/subNVue/rtcPage.nvue?vue&type=style&index=0&id=39c12bd0&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".conent": {
    "": {
      "backgroundColor": [
        "#333333",
        0,
        0,
        0
      ],
      "position": [
        "relative",
        0,
        0,
        0
      ],
      "width": [
        100,
        0,
        0,
        0
      ]
    }
  },
  ".option": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        1
      ],
      "top": [
        0,
        0,
        0,
        1
      ],
      "left": [
        0,
        0,
        0,
        1
      ],
      "right": [
        0,
        0,
        0,
        1
      ],
      "bottom": [
        0,
        0,
        0,
        1
      ]
    }
  },
  ".location": {
    "": {
      "width": [
        "153",
        0,
        0,
        2
      ],
      "height": [
        "204",
        0,
        0,
        2
      ],
      "borderRadius": [
        "6",
        0,
        0,
        2
      ],
      "position": [
        "fixed",
        0,
        0,
        2
      ],
      "top": [
        "60",
        0,
        0,
        2
      ],
      "right": [
        "20",
        0,
        0,
        2
      ],
      "backgroundColor": [
        "#2C405A",
        0,
        0,
        2
      ]
    }
  },
  ".relevant": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        3
      ],
      "bottom": [
        "20",
        0,
        0,
        3
      ],
      "left": [
        0,
        0,
        0,
        3
      ],
      "right": [
        0,
        0,
        0,
        3
      ],
      "paddingTop": [
        0,
        0,
        0,
        3
      ],
      "paddingRight": [
        "20",
        0,
        0,
        3
      ],
      "paddingBottom": [
        0,
        0,
        0,
        3
      ],
      "paddingLeft": [
        "20",
        0,
        0,
        3
      ],
      "flexDirection": [
        "column",
        0,
        0,
        3
      ]
    }
  },
  ".relevant_top": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        4
      ],
      "marginBottom": [
        "20",
        0,
        0,
        4
      ]
    }
  },
  ".relevant_bottom": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        5
      ]
    }
  },
  ".icon": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        6
      ],
      "justifyContent": [
        "center",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".icon_img": {
    "": {
      "width": [
        "60",
        0,
        0,
        7
      ],
      "height": [
        "60",
        0,
        0,
        7
      ],
      "borderRadius": [
        "60",
        0,
        0,
        7
      ],
      "marginBottom": [
        "10",
        0,
        0,
        7
      ]
    }
  },
  ".icon_text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        8
      ]
    }
  },
  ".audio_bottom": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        9
      ],
      "left": [
        0,
        0,
        0,
        9
      ],
      "right": [
        0,
        0,
        0,
        9
      ],
      "bottom": [
        "20",
        0,
        0,
        9
      ],
      "flexDirection": [
        "row",
        0,
        0,
        9
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        9
      ],
      "alignItems": [
        "center",
        0,
        0,
        9
      ],
      "paddingTop": [
        0,
        0,
        0,
        9
      ],
      "paddingRight": [
        "20",
        0,
        0,
        9
      ],
      "paddingBottom": [
        0,
        0,
        0,
        9
      ],
      "paddingLeft": [
        "20",
        0,
        0,
        9
      ]
    }
  },
  ".timer": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        10
      ],
      "bottom": [
        "140",
        0,
        0,
        10
      ],
      "left": [
        0,
        0,
        0,
        10
      ],
      "right": [
        0,
        0,
        0,
        10
      ],
      "justifyContent": [
        "center",
        0,
        0,
        10
      ],
      "alignItems": [
        "center",
        0,
        0,
        10
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);