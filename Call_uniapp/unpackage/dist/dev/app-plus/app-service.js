(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 42));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 43));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 46));\n__webpack_require__(/*! ./until/index.js */ 49);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.prototype.$store = _index.default;\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread(_objectSpread({},\n_App.default), {}, {\n  store: _index.default }));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJwcm90b3R5cGUiLCIkc3RvcmUiLCJzdG9yZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZ0Q7QUFDQUEsYUFBSUMsU0FBSixDQUFjQyxNQUFkLEdBQXVCQyxjQUF2QjtBQUNBSCxhQUFJSSxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSVIsWUFBSjtBQUNSTSxZQURRO0FBRVhILE9BQUssRUFBTEEsY0FGVyxJQUFaOztBQUlBSyxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvaW5kZXguanMnXHJcbmltcG9ydCAnLi91bnRpbC9pbmRleC5qcydcclxuVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZVxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0Li4uQXBwLFxyXG5cdHN0b3JlXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages.json ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/index/p2p', function () {return Vue.extend(__webpack_require__(/*! pages/index/p2p.vue?mpType=page */ 11).default);});
__definePage('pages/index/rtmPage', function () {return Vue.extend(__webpack_require__(/*! pages/index/rtmPage.vue?mpType=page */ 26).default);});
__definePage('pages/index/set', function () {return Vue.extend(__webpack_require__(/*! pages/index/set.vue?mpType=page */ 36).default);});

/***/ }),
/* 2 */
/*!************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/index.vue?mpType=page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlODRhM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "content_bg"),
      style: _vm._$s(0, "s", {
        width: _vm.windowWidth + "px",
        height: _vm.windowHeight + "px"
      }),
      attrs: { _i: 0 }
    },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "content colum_flex"),
          attrs: { _i: 1 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "colum_flex"), attrs: { _i: 2 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    3,
                    "a-src",
                    __webpack_require__(/*! ../../static/icon_logo.png */ 5)
                  ),
                  _i: 3
                }
              }),
              _c("text")
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "colum_flex"), attrs: { _i: 5 } },
            [
              _c("view", [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(7, "sc", "p-2 colum_flex"),
                    attrs: { _i: 7 },
                    on: {
                      click: function($event) {
                        return _vm.goBack("p2p")
                      }
                    }
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: _vm._$s(
                          8,
                          "a-src",
                          __webpack_require__(/*! ../../static/icon_single.png */ 6)
                        ),
                        _i: 8
                      }
                    }),
                    _c("text")
                  ]
                )
              ]),
              _c("text", [
                _vm._v(
                  _vm._$s(
                    10,
                    "t0-0",
                    _vm._s(
                      _vm.$store.state.uid ? _vm.$store.state.uid : "未登录"
                    )
                  )
                )
              ])
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_logo.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pY29uX2xvZ28ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_single.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_single.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9pY29uX3NpbmdsZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9tQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  onLoad: function onLoad(options) {var _this2 = this;\n    // 默认弹窗\n    this.$store.dispatch('upDataPopubId', 'poPup');\n    if (options.state === 'end') {\n      setTimeout(function () {\n        _this2.$Utils.hintInfo('通话已结束', 'success');\n      }, 800);\n    }\n  },\n  data: function data() {\n    return {\n      windowWidth: 200,\n      windowHeight: 200 };\n\n  },\n  created: function created() {\n    // 默认弹窗\n    this.$store.dispatch('upDataPopubId', 'poPup');\n    var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.windowWidth = res.windowWidth;\n        _this.windowHeight = res.windowHeight;\n      } });\n\n    // 获取uid\n    // console.log(this.$store.state.uid);\n    // const getUid = setInterval(() => {\n    // \tconsole.log(\"获取uid\", this.$store.state.uid);\n    // \tif (this.$store.state.uid) {\n    // \t\tclearInterval(getUid);\n    // \t}\n    // }, 1000)\n  },\n  methods: {\n    // 跳转\n    goBack: function goBack(url) {\n      if (this.$store.state.uid) {\n        uni.navigateTo({\n          url: url,\n          animationType: \"slide-in-bottom\",\n          animationDuration: 300,\n          success: function success(res) {\n            __f__(\"log\", \"成功\", res, \" at pages/index/index.vue:70\");\n          },\n          fail: function fail(res) {\n            __f__(\"log\", \"失败\", res, \" at pages/index/index.vue:73\");\n          } });\n\n      } else {\n        uni.showToast({\n          title: '未登录',\n          icon: \"none\",\n          duration: 2000 });\n\n      }\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQSxRQURBLGtCQUNBLE9BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0EsR0FUQTtBQVVBLE1BVkEsa0JBVUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsdUJBRkE7O0FBSUEsR0FmQTtBQWdCQSxTQWhCQSxxQkFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbENBO0FBbUNBO0FBQ0E7QUFDQSxVQUZBLGtCQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLDBDQUZBO0FBR0EsZ0NBSEE7QUFJQSxpQkFKQSxtQkFJQSxHQUpBLEVBSUE7QUFDQTtBQUNBLFdBTkE7QUFPQSxjQVBBLGdCQU9BLEdBUEEsRUFPQTtBQUNBO0FBQ0EsV0FUQTs7QUFXQSxPQVpBLE1BWUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsc0JBRkE7QUFHQSx3QkFIQTs7QUFLQTs7QUFFQSxLQXZCQSxFQW5DQSxFIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50X2JnXCIgOnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50IGNvbHVtX2ZsZXhcIiBzdHlsZT1cIlwiPlxyXG5cdFx0XHQ8IS0tIGljb24gLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29sdW1fZmxleFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbl9sb2dvLnBuZ1wiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O2hlaWdodDogODBweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7bWFyZ2luLXRvcDogNDBweDtcIj5BUiDlkbzlj6vpgoDor7flnLrmma/lsZXnpLo8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDlnLrmma/pgInmi6kgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29sdW1fZmxleFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTAwcHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwLTIgY29sdW1fZmxleFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtib3JkZXItcmFkaXVzOiA2cHg7XCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZ29CYWNrKCdwMnAnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fc2luZ2xlLnBuZ1wiIG1vZGU9XCJcIiBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCI+54K55a+554K55ZG85Y+r6YKA6K+3PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGRkZGO21hcmdpbi10b3A6IDQwcHg7dGV4dC1hbGlnbjogY2VudGVyO1wiPuaCqOeahOWRvOWPq0lEOlxyXG5cdFx0XHRcdFx0e3skc3RvcmUuc3RhdGUudWlkID8gJHN0b3JlLnN0YXRlLnVpZCA6ICfmnKrnmbvlvZUnfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHRcdC8vIOm7mOiupOW8ueeql1xyXG5cdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgndXBEYXRhUG9wdWJJZCcsICdwb1B1cCcpO1xyXG5cdFx0XHRpZiAob3B0aW9ucy5zdGF0ZSA9PT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJFV0aWxzLmhpbnRJbmZvKCfpgJror53lt7Lnu5PmnZ8nLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdH0sIDgwMClcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2luZG93V2lkdGg6IDIwMCxcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDIwMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOm7mOiupOW8ueeql1xyXG5cdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCgndXBEYXRhUG9wdWJJZCcsICdwb1B1cCcpO1xyXG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRfdGhpcy53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g6I635Y+WdWlkXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuJHN0b3JlLnN0YXRlLnVpZCk7XHJcblx0XHRcdC8vIGNvbnN0IGdldFVpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcIuiOt+WPlnVpZFwiLCB0aGlzLiRzdG9yZS5zdGF0ZS51aWQpO1xyXG5cdFx0XHQvLyBcdGlmICh0aGlzLiRzdG9yZS5zdGF0ZS51aWQpIHtcclxuXHRcdFx0Ly8gXHRcdGNsZWFySW50ZXJ2YWwoZ2V0VWlkKTtcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH0sIDEwMDApXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDot7PovaxcclxuXHRcdFx0Z29CYWNrKHVybCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLiRzdG9yZS5zdGF0ZS51aWQpIHtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsLFxyXG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxyXG5cdFx0XHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMzAwLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5oiQ5YqfXCIsIHJlcyk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlpLHotKVcIiwgcmVzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+acqueZu+W9lScsXHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0Lm0tMiB7XHJcblx0XHRtYXJnaW46IDIwcHg7XHJcblx0fVxyXG5cclxuXHQucC0yIHtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGVudF9iZyB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2ljb25fYmFjay5wbmcpIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuY29udGVudCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQuY29sdW1fZmxleCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 10 */
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
/* 11 */
/*!**********************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/p2p.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p2p.vue?vue&type=template&id=2c5f8cd8&mpType=page */ 12);\n/* harmony import */ var _p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p2p.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/p2p.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3AycC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM1ZjhjZDgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3AycC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcDJwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9wMnAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!****************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/p2p.vue?vue&type=template&id=2c5f8cd8&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./p2p.vue?vue&type=template&id=2c5f8cd8&mpType=page */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_template_id_2c5f8cd8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/p2p.vue?vue&type=template&id=2c5f8cd8&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "content_bg"),
      style: _vm._$s(0, "s", {
        width: _vm.windowWidth + "px",
        height: _vm.windowHeight + "px"
      }),
      attrs: { _i: 0 }
    },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "nav"), attrs: { _i: 1 } }, [
        _c("image", {
          attrs: {
            src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/icon_return_w.png */ 14)),
            _i: 2
          },
          on: { click: _vm.callBack }
        }),
        _c("text", {
          staticClass: _vm._$s(3, "sc", "text_color"),
          attrs: { _i: 3 }
        }),
        _c("image", {
          attrs: {
            src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../static/icon_set.png */ 15)),
            _i: 4
          },
          on: { click: _vm.setPage }
        })
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "content"), attrs: { _i: 5 } },
        [
          _c("text", {
            staticClass: _vm._$s(6, "sc", "m-2 text_color"),
            attrs: { _i: 6 }
          }),
          _c("ValidCode", {
            staticClass: _vm._$s(7, "sc", "m-2"),
            attrs: { maxlength: 4, isPwd: false, _i: 7 },
            on: { finish: _vm.getCode }
          })
        ],
        1
      ),
      _c("view", [
        _c("button", {
          attrs: {
            disabled: _vm._$s(9, "a-disabled", _vm.peeerUid.length <= 3),
            _i: 9
          },
          on: { click: _vm.startCallFn }
        }),
        _c(
          "text",
          { staticClass: _vm._$s(10, "sc", "text_color"), attrs: { _i: 10 } },
          [
            _vm._v(
              _vm._$s(
                10,
                "t0-0",
                _vm._s(_vm.$store.state.uid ? _vm.$store.state.uid : "未登录")
              )
            )
          ]
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!***************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_return_w.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_return_w.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbl9yZXR1cm5fdy5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_set.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_set.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbl9zZXQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/p2p.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./p2p.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_p2p_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWttQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wMnAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wMnAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/p2p.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _validCode = _interopRequireDefault(__webpack_require__(/*! ../../components/validCode.vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    ValidCode: _validCode.default },\n\n  data: function data() {\n    return {\n      // 对方 uid\n      peeerUid: '',\n      // 频道id\n      channelId: '',\n      windowWidth: 200,\n      windowHeight: 200,\n      callTypeList: [\"视频呼叫\", \"语音呼叫\"],\n\n      disabledCall: true };\n\n  },\n  created: function created() {\n    // 默认弹窗\n    this.$store.dispatch('upDataPopubId', 'poPup-p2p');\n    var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.windowWidth = res.windowWidth;\n        _this.windowHeight = res.windowHeight;\n      } });\n\n  },\n  methods: {\n    // 返回首页\n    callBack: function callBack() {\n      uni.redirectTo({\n        url: 'index' });\n\n    },\n    // 获取对方 uid\n    getCode: function getCode(val) {\n      if (val === this.$store.state.uid) {\n        this.$Utils.hintInfo(\"呼叫用户不能与自己 uid 一致\", \"error\");\n      } else {\n        this.peeerUid = val;\n      }\n    },\n    // 前往设置\n    setPage: function setPage() {\n      uni.navigateTo({\n        url: 'set' });\n\n    },\n    // 来时呼叫\n    startCallFn: function startCallFn() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var queryPeersOnline, oIndex;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!\n                _this2.peeerUid) {_context.next = 20;break;}\n                // 先查询是否在线\n                uni.showLoading({\n                  title: '加载中，请稍后' });\n\n                // 查看呼叫用户是否存在\n                _context.next = 4;return _this2.$RTM.queryPeersOnlineStatus([_this2.peeerUid]);case 4:queryPeersOnline = _context.sent;_context.next = 7;return (\n                  uni.hideLoading());case 7:\n                // this.$Utils.hintInfo(\"查看呼叫用户是否存在\" + JSON.stringify(queryPeersOnline));\n                __f__(\"log\", \"查看呼叫用户是否存在\", queryPeersOnline, \" at pages/index/p2p.vue:87\");if (!(\n                queryPeersOnline.code === 0 && queryPeersOnline.peerOnlineStatus[0].state != 2)) {_context.next = 16;break;}\n                // 订阅呼叫用户在线状态\n                _this2.$RTM.subscribePeersOnlineStatus([_this2.peeerUid]);_context.next = 12;return (\n                  new Promise(function (resolve, reject) {\n                    uni.showActionSheet({\n                      itemList: _this2.callTypeList,\n                      success: function success(res) {\n                        resolve(res);\n                      } });\n\n                  }));case 12:oIndex = _context.sent;\n                if (_this2.disabledCall) {\n                  _this2.disabledCall = false;\n                  _this2.callFn(oIndex.tapIndex);\n                }_context.next = 18;break;case 16:\n\n                _this2.$Utils.hintInfo(queryPeersOnline.code === 0 ? '呼叫用户不在线' :\n                'queryPeersOnlineStatus 方法调用失败：' +\n                queryPeersOnline.code, 'error');\n                _this2.disabledCall = true;case 18:_context.next = 21;break;case 20:\n\n\n\n                _this2.$Utils.hintInfo(\"请输入正确的用户，呼叫对象不能为自己\", \"error\");case 21:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    // 发起呼叫\n    callFn: function callFn(num) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var oTnfo, code;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n\n                  _this3.$Utils.generateNumber(9));case 2:_this3.channelId = _context2.sent;\n                // 携带信息\n                oTnfo = {\n                  Mode: num, // 呼叫类型 视频通话 0 语音通话 1\n                  Conference: false, // 是否是多人会议\n                  ChanId: _this3.channelId + '', // 频道房间\n                  UserData: \"\",\n                  SipData: \"\",\n                  VidCodec: [\"H264\"],\n                  AudCodec: [\"Opus\"] };\n\n                // 发起呼叫\n                _context2.next = 6;return _this3.$RTM.sendLocalInvitation(_this3.peeerUid, oTnfo);case 6:code = _context2.sent;\n                __f__(\"log\", \"发起呼叫\", code, \" at pages/index/p2p.vue:130\");\n                if (code != 0 && code != 5) {\n                  __f__(\"log\", code, \" at pages/index/p2p.vue:132\");\n                  _this3.$Utils.hintInfo('调用 sendLocalInvitation 发送呼叫失败');\n                  _this3.disabledCall = true;\n                } else {\n                  _this3.disabledCall = false;\n                }case 9:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcDJwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLHVHO0FBQ0E7QUFDQTtBQUNBLGlDQURBLEVBREE7O0FBSUEsTUFKQSxrQkFJQTtBQUNBO0FBQ0E7QUFDQSxrQkFGQTtBQUdBO0FBQ0EsbUJBSkE7QUFLQSxzQkFMQTtBQU1BLHVCQU5BO0FBT0Esb0NBUEE7O0FBU0Esd0JBVEE7O0FBV0EsR0FoQkE7QUFpQkEsU0FqQkEscUJBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOztBQU1BLEdBM0JBO0FBNEJBO0FBQ0E7QUFDQSxZQUZBLHNCQUVBO0FBQ0E7QUFDQSxvQkFEQTs7QUFHQSxLQU5BO0FBT0E7QUFDQSxXQVJBLG1CQVFBLEdBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FkQTtBQWVBO0FBQ0EsV0FoQkEscUJBZ0JBO0FBQ0E7QUFDQSxrQkFEQTs7QUFHQSxLQXBCQTtBQXFCQTtBQUNBLGVBdEJBLHlCQXNCQTtBQUNBLCtCQURBO0FBRUE7QUFDQTtBQUNBLGtDQURBOztBQUdBO0FBTkEseUNBT0EscURBUEEsUUFPQSxnQkFQQTtBQVFBLG1DQVJBO0FBU0E7QUFDQSwyRkFWQTtBQVdBLDhGQVhBO0FBWUE7QUFDQSwwRUFiQTtBQWNBO0FBQ0E7QUFDQSxtREFEQTtBQUVBO0FBQ0E7QUFDQSx1QkFKQTs7QUFNQSxtQkFQQSxDQWRBLFVBY0EsTUFkQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQSxpQkF6QkE7O0FBMkJBO0FBQ0E7QUFDQSxxQ0FGQSxFQUVBLE9BRkE7QUFHQSwyQ0E5QkE7Ozs7QUFrQ0Esc0VBbENBOztBQW9DQSxLQTFEQTtBQTJEQTtBQUNBLFVBNURBLGtCQTREQSxHQTVEQSxFQTREQTs7QUFFQSxpREFGQSxTQUVBLGdCQUZBO0FBR0E7QUFDQSxxQkFKQSxHQUlBO0FBQ0EsMkJBREEsRUFDQTtBQUNBLG1DQUZBLEVBRUE7QUFDQSwrQ0FIQSxFQUdBO0FBQ0EsOEJBSkE7QUFLQSw2QkFMQTtBQU1BLG9DQU5BO0FBT0Esb0NBUEEsRUFKQTs7QUFhQTtBQWJBLDBDQWNBLHVEQWRBLFFBY0EsSUFkQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFKQSxNQUlBO0FBQ0E7QUFDQSxpQkF0QkE7O0FBd0JBLEtBcEZBLEVBNUJBLEUiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50X2JnXCIgOnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfVwiPlxyXG5cdFx0PCEtLSDlr7zoiKogLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm5hdlwiPlxyXG5cdFx0XHQ8IS0tIOi/lOWbniAtLT5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29uX3JldHVybl93LnBuZ1wiIG1vZGU9XCJcIiBzdHlsZT1cImhlaWdodDogMTZweDt3aWR0aDogMTBweDtcIiBAY2xpY2s9XCJjYWxsQmFja1wiPlxyXG5cdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRfY29sb3JcIj7ngrnlr7nngrnlkbzlj6vpgoDor7c8L3RleHQ+XHJcblx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbl9zZXQucG5nXCIgbW9kZT1cIlwiIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O1wiIEBjbGljaz1cInNldFBhZ2VcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwibS0yIHRleHRfY29sb3JcIj7ovpPlhaXlr7nmlrnnmoQgSUQ8L3RleHQ+XHJcblx0XHRcdDxWYWxpZENvZGUgY2xhc3M9XCJtLTJcIiA6bWF4bGVuZ3RoPVwiNFwiIDppc1B3ZD1cImZhbHNlXCIgQGZpbmlzaD1cImdldENvZGVcIj48L1ZhbGlkQ29kZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO21hcmdpbjogNjBweCAyMHB4O1wiPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA5MHB4O21hcmdpbi1ib3R0b206IDQwcHg7XCIgOmRpc2FibGVkPVwicGVlZXJVaWQubGVuZ3RoIDw9IDNcIlxyXG5cdFx0XHRcdEBjbGljaz1cInN0YXJ0Q2FsbEZuXCI+5byA5aeL5ZG85Y+rPC9idXR0b24+XHJcblx0XHRcdDwhLS0g6Ieq5bex55qEdWlkIC0tPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRfY29sb3JcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj7mgqjnmoTlkbzlj6tJRDpcclxuXHRcdFx0XHR7eyRzdG9yZS5zdGF0ZS51aWQgPyAkc3RvcmUuc3RhdGUudWlkIDogJ+acqueZu+W9lSd9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBWYWxpZENvZGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92YWxpZENvZGUudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0VmFsaWRDb2RlXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDlr7nmlrkgdWlkXHJcblx0XHRcdFx0cGVlZXJVaWQ6ICcnLFxyXG5cdFx0XHRcdC8vIOmikemBk2lkXHJcblx0XHRcdFx0Y2hhbm5lbElkOiAnJyxcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogMjAwLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMjAwLFxyXG5cdFx0XHRcdGNhbGxUeXBlTGlzdDogW1wi6KeG6aKR5ZG85Y+rXCIsIFwi6K+t6Z+z5ZG85Y+rXCJdLFxyXG5cclxuXHRcdFx0XHRkaXNhYmxlZENhbGw6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyDpu5jorqTlvLnnqpdcclxuXHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VwRGF0YVBvcHViSWQnLCAncG9QdXAtcDJwJyk7XHJcblx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDov5Tlm57pppbpobVcclxuXHRcdFx0Y2FsbEJhY2soKSB7XHJcblx0XHRcdFx0dW5pLnJlZGlyZWN0VG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnaW5kZXgnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluWvueaWuSB1aWRcclxuXHRcdFx0Z2V0Q29kZSh2YWwpIHtcclxuXHRcdFx0XHRpZiAodmFsID09PSB0aGlzLiRzdG9yZS5zdGF0ZS51aWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuJFV0aWxzLmhpbnRJbmZvKFwi5ZG85Y+r55So5oi35LiN6IO95LiO6Ieq5bexIHVpZCDkuIDoh7RcIiwgXCJlcnJvclwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5wZWVlclVpZCA9IHZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWJjeW+gOiuvue9rlxyXG5cdFx0XHRzZXRQYWdlKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJ3NldCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmnaXml7blkbzlj6tcclxuXHRcdFx0YXN5bmMgc3RhcnRDYWxsRm4oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucGVlZXJVaWQpIHtcclxuXHRcdFx0XHRcdC8vIOWFiOafpeivouaYr+WQpuWcqOe6v1xyXG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK3vvIzor7fnqI3lkI4nXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIOafpeeci+WRvOWPq+eUqOaIt+aYr+WQpuWtmOWcqFxyXG5cdFx0XHRcdFx0Y29uc3QgcXVlcnlQZWVyc09ubGluZSA9IGF3YWl0IHRoaXMuJFJUTS5xdWVyeVBlZXJzT25saW5lU3RhdHVzKFt0aGlzLnBlZWVyVWlkXSk7XHJcblx0XHRcdFx0XHRhd2FpdCB1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuJFV0aWxzLmhpbnRJbmZvKFwi5p+l55yL5ZG85Y+r55So5oi35piv5ZCm5a2Y5ZyoXCIgKyBKU09OLnN0cmluZ2lmeShxdWVyeVBlZXJzT25saW5lKSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuafpeeci+WRvOWPq+eUqOaIt+aYr+WQpuWtmOWcqFwiLCBxdWVyeVBlZXJzT25saW5lKTtcclxuXHRcdFx0XHRcdGlmIChxdWVyeVBlZXJzT25saW5lLmNvZGUgPT09IDAgJiYgcXVlcnlQZWVyc09ubGluZS5wZWVyT25saW5lU3RhdHVzWzBdLnN0YXRlICE9IDIpIHtcclxuXHRcdFx0XHRcdFx0Ly8g6K6i6ZiF5ZG85Y+r55So5oi35Zyo57q/54q25oCBXHJcblx0XHRcdFx0XHRcdHRoaXMuJFJUTS5zdWJzY3JpYmVQZWVyc09ubGluZVN0YXR1cyhbdGhpcy5wZWVlclVpZF0pO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBvSW5kZXggPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dBY3Rpb25TaGVldCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtTGlzdDogdGhpcy5jYWxsVHlwZUxpc3QsXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGlzYWJsZWRDYWxsID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxsRm4ob0luZGV4LnRhcEluZGV4KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kVXRpbHMuaGludEluZm8ocXVlcnlQZWVyc09ubGluZS5jb2RlID09PSAwID8gJ+WRvOWPq+eUqOaIt+S4jeWcqOe6vycgOlxyXG5cdFx0XHRcdFx0XHRcdCdxdWVyeVBlZXJzT25saW5lU3RhdHVzIOaWueazleiwg+eUqOWksei0pe+8micgK1xyXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5UGVlcnNPbmxpbmUuY29kZSwgJ2Vycm9yJyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlzYWJsZWRDYWxsID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuJFV0aWxzLmhpbnRJbmZvKFwi6K+36L6T5YWl5q2j56Gu55qE55So5oi377yM5ZG85Y+r5a+56LGh5LiN6IO95Li66Ieq5bexXCIsIFwiZXJyb3JcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlj5Hotbflkbzlj6tcclxuXHRcdFx0YXN5bmMgY2FsbEZuKG51bSkge1xyXG5cdFx0XHRcdC8vIOeUn+aIkOmaj+acuumikemBk0lkXHJcblx0XHRcdFx0dGhpcy5jaGFubmVsSWQgPSBhd2FpdCB0aGlzLiRVdGlscy5nZW5lcmF0ZU51bWJlcig5KTtcclxuXHRcdFx0XHQvLyDmkLrluKbkv6Hmga9cclxuXHRcdFx0XHRjb25zdCBvVG5mbyA9IHtcclxuXHRcdFx0XHRcdE1vZGU6IG51bSwgLy8g5ZG85Y+r57G75Z6LIOinhumikemAmuivnSAwIOivremfs+mAmuivnSAxXHJcblx0XHRcdFx0XHRDb25mZXJlbmNlOiBmYWxzZSwgLy8g5piv5ZCm5piv5aSa5Lq65Lya6K6uXHJcblx0XHRcdFx0XHRDaGFuSWQ6IHRoaXMuY2hhbm5lbElkICsgJycsIC8vIOmikemBk+aIv+mXtFxyXG5cdFx0XHRcdFx0VXNlckRhdGE6IFwiXCIsXHJcblx0XHRcdFx0XHRTaXBEYXRhOiBcIlwiLFxyXG5cdFx0XHRcdFx0VmlkQ29kZWM6IFtcIkgyNjRcIl0sXHJcblx0XHRcdFx0XHRBdWRDb2RlYzogW1wiT3B1c1wiXSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5Y+R6LW35ZG85Y+rXHJcblx0XHRcdFx0Y29uc3QgY29kZSA9IGF3YWl0IHRoaXMuJFJUTS5zZW5kTG9jYWxJbnZpdGF0aW9uKHRoaXMucGVlZXJVaWQsIG9UbmZvKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWPkei1t+WRvOWPq1wiLCBjb2RlKTtcclxuXHRcdFx0XHRpZiAoY29kZSAhPSAwICYmIGNvZGUgIT0gNSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY29kZSk7XHJcblx0XHRcdFx0XHR0aGlzLiRVdGlscy5oaW50SW5mbygn6LCD55SoIHNlbmRMb2NhbEludml0YXRpb24g5Y+R6YCB5ZG85Y+r5aSx6LSlJyk7XHJcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVkQ2FsbCA9IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZWRDYWxsID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lm0tMiB7XHJcblx0XHRtYXJnaW46IDIwcHg7XHJcblx0fVxyXG5cclxuXHQucC0yIHtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGVudF9iZyB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2ljb25fYmFjay5wbmcpIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQubmF2IHtcclxuXHRcdHBhZGRpbmc6IDQwcHggMjBweCAyMHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGV4dF9jb2xvciB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHt9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 19);

/***/ }),
/* 19 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 20);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 20 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
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
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

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
        if (delegate.iterator.return) {
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

    if (! info) {
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

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
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

  runtime.keys = function(object) {
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
        var i = -1, next = function next() {
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
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
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

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
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

    complete: function(record, afterLoc) {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 21 */
/*!***************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/components/validCode.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validCode.vue?vue&type=template&id=07846644& */ 22);\n/* harmony import */ var _validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validCode.vue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/validCode.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQzhLO0FBQzlLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZhbGlkQ29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc4NDY2NDQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92YWxpZENvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92YWxpZENvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3ZhbGlkQ29kZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/components/validCode.vue?vue&type=template&id=07846644& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./validCode.vue?vue&type=template&id=07846644& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_template_id_07846644___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/components/validCode.vue?vue&type=template&id=07846644& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "code-area"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "flex-box"), attrs: { _i: 1 } },
        [
          _c("input", {
            staticClass: _vm._$s(2, "sc", "hide-input"),
            attrs: {
              value: _vm._$s(2, "a-value", _vm.val),
              maxlength: _vm._$s(2, "a-maxlength", _vm.maxlength),
              _i: 2
            },
            on: { input: _vm.getVal }
          }),
          _c(
            "view",
            {
              class: _vm._$s(3, "c", ["item", { active: _vm.codeIndex == 1 }]),
              attrs: { _i: 3 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(4, "sc", "line"),
                attrs: { _i: 4 }
              }),
              _vm._$s(5, "i", _vm.isPwd && _vm.codeArr.length >= 1)
                ? [
                    _c("text", {
                      staticClass: _vm._$s(6, "sc", "dot"),
                      attrs: { _i: 6 }
                    })
                  ]
                : [
                    _vm._v(
                      _vm._$s(
                        7,
                        "t0-0",
                        _vm._s(_vm.codeArr[0] ? _vm.codeArr[0] : "")
                      )
                    )
                  ]
            ],
            2
          ),
          _c(
            "view",
            {
              class: _vm._$s(8, "c", ["item", { active: _vm.codeIndex == 2 }]),
              attrs: { _i: 8 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(9, "sc", "line"),
                attrs: { _i: 9 }
              }),
              _vm._$s(10, "i", _vm.isPwd && _vm.codeArr.length >= 2)
                ? [
                    _c("text", {
                      staticClass: _vm._$s(11, "sc", "dot"),
                      attrs: { _i: 11 }
                    })
                  ]
                : [
                    _vm._v(
                      _vm._$s(
                        12,
                        "t0-0",
                        _vm._s(_vm.codeArr[1] ? _vm.codeArr[1] : "")
                      )
                    )
                  ]
            ],
            2
          ),
          _c(
            "view",
            {
              class: _vm._$s(13, "c", ["item", { active: _vm.codeIndex == 3 }]),
              attrs: { _i: 13 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "line"),
                attrs: { _i: 14 }
              }),
              _vm._$s(15, "i", _vm.isPwd && _vm.codeArr.length >= 3)
                ? [
                    _c("text", {
                      staticClass: _vm._$s(16, "sc", "dot"),
                      attrs: { _i: 16 }
                    })
                  ]
                : [
                    _vm._v(
                      _vm._$s(
                        17,
                        "t0-0",
                        _vm._s(_vm.codeArr[2] ? _vm.codeArr[2] : "")
                      )
                    )
                  ]
            ],
            2
          ),
          _c(
            "view",
            {
              class: _vm._$s(18, "c", ["item", { active: _vm.codeIndex == 4 }]),
              attrs: { _i: 18 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(19, "sc", "line"),
                attrs: { _i: 19 }
              }),
              _vm._$s(20, "i", _vm.isPwd && _vm.codeArr.length >= 4)
                ? [
                    _c("text", {
                      staticClass: _vm._$s(21, "sc", "dot"),
                      attrs: { _i: 21 }
                    })
                  ]
                : [
                    _vm._v(
                      _vm._$s(
                        22,
                        "t0-0",
                        _vm._s(_vm.codeArr[3] ? _vm.codeArr[3] : "")
                      )
                    )
                  ]
            ],
            2
          ),
          _vm._$s(23, "i", _vm.maxlength === 6)
            ? [
                _c(
                  "view",
                  {
                    class: _vm._$s(24, "c", [
                      "item",
                      { active: _vm.codeIndex == 5 }
                    ]),
                    attrs: { _i: 24 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(25, "sc", "line"),
                      attrs: { _i: 25 }
                    }),
                    _vm._$s(26, "i", _vm.isPwd && _vm.codeArr.length >= 5)
                      ? [
                          _c("text", {
                            staticClass: _vm._$s(27, "sc", "dot"),
                            attrs: { _i: 27 }
                          })
                        ]
                      : [
                          _vm._v(
                            _vm._$s(
                              28,
                              "t0-0",
                              _vm._s(_vm.codeArr[4] ? _vm.codeArr[4] : "")
                            )
                          )
                        ]
                  ],
                  2
                ),
                _c(
                  "view",
                  {
                    class: _vm._$s(29, "c", [
                      "item",
                      { active: _vm.codeIndex == 6 }
                    ]),
                    attrs: { _i: 29 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(30, "sc", "line"),
                      attrs: { _i: 30 }
                    }),
                    _vm._$s(31, "i", _vm.isPwd && _vm.codeArr.length >= 6)
                      ? [
                          _c("text", {
                            staticClass: _vm._$s(32, "sc", "dot"),
                            attrs: { _i: 32 }
                          })
                        ]
                      : [
                          _vm._v(
                            _vm._$s(
                              33,
                              "t0-0",
                              _vm._s(_vm.codeArr[5] ? _vm.codeArr[5] : "")
                            )
                          )
                        ]
                  ],
                  2
                )
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!****************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/components/validCode.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./validCode.vue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_validCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlsQixDQUFnQiwrakJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92YWxpZENvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmFsaWRDb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/components/validCode.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    //最大长度 值为4或者6\n    maxlength: {\n      type: Number,\n      default: 4 },\n\n    //是否是密码\n    isPwd: {\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {\n      codeIndex: 1, //下标\n      codeArr: [],\n      val: '' //输入框的值\n    };\n  },\n  methods: {\n    //取值\n    getVal: function getVal(e) {var\n      value = e.detail.value;\n      this.val = value;\n      // console.log('验证码:', value);\n      var arr = value.split('');\n      this.codeIndex = arr.length + 1;\n      this.codeArr = arr;\n      // console.log(this.codeIndex, this.pwdArr);\n      if (this.codeIndex > Number(this.maxlength)) {\n        //输入完成\n        this.$emit('finish', this.codeArr.join(''));\n      }\n    },\n    //清除验证码或者密码\n    clear: function clear() {\n      this.codeIndex = 1;\n      this.codeArr = [];\n      this.val = \"\";\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92YWxpZENvZGUudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQVBBLEVBREE7OztBQWFBLE1BYkEsa0JBYUE7QUFDQTtBQUNBLGtCQURBLEVBQ0E7QUFDQSxpQkFGQTtBQUdBLGFBSEEsQ0FHQTtBQUhBO0FBS0EsR0FuQkE7QUFvQkE7QUFDQTtBQUNBLFVBRkEsa0JBRUEsQ0FGQSxFQUVBO0FBQ0EsV0FEQSxHQUNBLFFBREEsQ0FDQSxLQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUE7QUFDQSxTQWhCQSxtQkFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBCQSxFQXBCQSxFIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvZGUtYXJlYVwiPlxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleC1ib3hcIj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0ICAgIDp2YWx1ZT1cInZhbFwiXG5cdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRmb2N1cz1cInRydWVcIlxuXHRcdFx0XHQ6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCJcblx0XHRcdFx0Y2xhc3M9XCJoaWRlLWlucHV0XCJcblx0XHRcdFx0QGlucHV0PVwiZ2V0VmFsXCJcblx0XHRcdC8+XG5cdFx0XHQ8dmlldyB2LWJpbmQ6Y2xhc3M9XCJbJ2l0ZW0nLCB7IGFjdGl2ZTogY29kZUluZGV4ID09IDEgfV1cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxuXHRcdFx0XHQ8YmxvY2sgdi1pZj1cImlzUHdkICYmIGNvZGVBcnIubGVuZ3RoID49IDFcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRvdFwiPi48L3RleHQ+XG5cdFx0XHRcdDwvYmxvY2s+XG5cdFx0XHRcdDxibG9jayB2LWVsc2U+XHR7eyBjb2RlQXJyWzBdID8gY29kZUFyclswXSA6ICcnfX08L2Jsb2NrPlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgdi1iaW5kOmNsYXNzPVwiWydpdGVtJywgeyBhY3RpdmU6IGNvZGVJbmRleCA9PSAyIH1dXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZVwiPjwvdmlldz5cblx0XHRcdFx0PGJsb2NrIHYtaWY9XCJpc1B3ZCAmJiBjb2RlQXJyLmxlbmd0aCA+PSAyXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkb3RcIj4uPC90ZXh0PlxuXHRcdFx0XHQ8L2Jsb2NrPlxuXHRcdFx0XHQ8YmxvY2sgdi1lbHNlPlx0e3sgY29kZUFyclsxXSA/IGNvZGVBcnJbMV0gOiAnJ319PC9ibG9jaz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IHYtYmluZDpjbGFzcz1cIlsnaXRlbScsIHsgYWN0aXZlOiBjb2RlSW5kZXggPT0gMyB9XVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XG5cdFx0XHRcdDxibG9jayB2LWlmPVwiaXNQd2QgJiYgY29kZUFyci5sZW5ndGggPj0gM1wiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZG90XCI+LjwvdGV4dD5cblx0XHRcdFx0PC9ibG9jaz5cblx0XHRcdFx0PGJsb2NrIHYtZWxzZT5cdHt7IGNvZGVBcnJbMl0gPyBjb2RlQXJyWzJdIDogJyd9fTwvYmxvY2s+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyB2LWJpbmQ6Y2xhc3M9XCJbJ2l0ZW0nLCB7IGFjdGl2ZTogY29kZUluZGV4ID09IDQgfV1cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+PC92aWV3PlxuXHRcdFx0XHQ8YmxvY2sgdi1pZj1cImlzUHdkICYmIGNvZGVBcnIubGVuZ3RoID49IDRcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRvdFwiPi48L3RleHQ+XG5cdFx0XHRcdDwvYmxvY2s+XG5cdFx0XHRcdDxibG9jayB2LWVsc2U+XHR7eyBjb2RlQXJyWzNdID8gY29kZUFyclszXSA6ICcnfX08L2Jsb2NrPlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PGJsb2NrIHYtaWY9XCJtYXhsZW5ndGggPT09IDZcIj5cdFx0XHRcdFxuXHRcdFx0XHQ8dmlldyB2LWJpbmQ6Y2xhc3M9XCJbJ2l0ZW0nLCB7IGFjdGl2ZTogY29kZUluZGV4ID09IDUgfV1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJpc1B3ZCAmJiBjb2RlQXJyLmxlbmd0aCA+PSA1XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRvdFwiPi48L3RleHQ+XG5cdFx0XHRcdFx0PC9ibG9jaz5cblx0XHRcdFx0XHQ8YmxvY2sgdi1lbHNlPlx0e3sgY29kZUFycls0XSA/IGNvZGVBcnJbNF0gOiAnJ319PC9ibG9jaz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWJpbmQ6Y2xhc3M9XCJbJ2l0ZW0nLCB7IGFjdGl2ZTogY29kZUluZGV4ID09IDYgfV1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJpc1B3ZCAmJiBjb2RlQXJyLmxlbmd0aCA+PSA2XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRvdFwiPi48L3RleHQ+XG5cdFx0XHRcdFx0PC9ibG9jaz5cblx0XHRcdFx0XHQ8YmxvY2sgdi1lbHNlPlx0e3sgY29kZUFycls1XSA/IGNvZGVBcnJbNV0gOiAnJ319PC9ibG9jaz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9ibG9jaz5cdFxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcblx0XHQvL+acgOWkp+mVv+W6piDlgLzkuLo05oiW6ICFNlxuXHRcdG1heGxlbmd0aDoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogNFxuXHRcdH0sXG5cdFx0Ly/mmK/lkKbmmK/lr4bnoIFcblx0XHRpc1B3ZDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb2RlSW5kZXg6IDEsIC8v5LiL5qCHXG5cdFx0XHRjb2RlQXJyOiBbXSxcblx0XHRcdHZhbDonJywvL+i+k+WFpeahhueahOWAvFxuXHRcdH07XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvL+WPluWAvFxuXHRcdGdldFZhbChlKSB7XG5cdFx0XHRsZXQgeyB2YWx1ZSB9ID0gZS5kZXRhaWw7XG5cdFx0XHR0aGlzLnZhbD12YWx1ZTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCfpqozor4HnoIE6JywgdmFsdWUpO1xuXHRcdFx0bGV0IGFyciA9IHZhbHVlLnNwbGl0KCcnKTtcblx0XHRcdHRoaXMuY29kZUluZGV4ID0gYXJyLmxlbmd0aCArIDE7XG5cdFx0XHR0aGlzLmNvZGVBcnIgPSBhcnI7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmNvZGVJbmRleCwgdGhpcy5wd2RBcnIpO1xuXHRcdFx0aWYgKHRoaXMuY29kZUluZGV4ID4gTnVtYmVyKHRoaXMubWF4bGVuZ3RoKSkge1xuXHRcdFx0XHQvL+i+k+WFpeWujOaIkFxuXHRcdFx0XHR0aGlzLiRlbWl0KCdmaW5pc2gnLHRoaXMuY29kZUFyci5qb2luKCcnKSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+a4hemZpOmqjOivgeeggeaIluiAheWvhueggVxuXHRcdGNsZWFyKCl7XG5cdFx0XHR0aGlzLmNvZGVJbmRleD0xO1xuXHRcdFx0dGhpcy5jb2RlQXJyPVtdO1xuXHRcdFx0dGhpcy52YWw9XCJcIjtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uY29kZS1hcmVhIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQuZmxleC1ib3gge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXHQuaXRlbSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDB1cHg7XG5cdFx0aGVpZ2h0OiAxMDB1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxOHVweDtcblx0XHRmb250LXNpemU6IDMwdXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjMzMzMzMzO1xuXHRcdGxpbmUtaGVpZ2h0OiAxMDB1cHg7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRib3JkZXI6IDJ1cHggc29saWQgI2NjY2NjYztcblx0fVxuXHQuaXRlbTpsYXN0LWNoaWxkIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdH1cblx0LmFjdGl2ZSB7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjZmY0YjRiO1xuXHR9XG5cdC5hY3RpdmUgLmxpbmUge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdC5saW5lIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0d2lkdGg6IDJ1cHg7XG5cdFx0aGVpZ2h0OiA0MHVweDtcblx0XHRiYWNrZ3JvdW5kOiAjZmY0YjRiO1xuXHRcdGFuaW1hdGlvbjogdHdpbmtsaW5nIDFzIGluZmluaXRlIGVhc2U7XG5cdH1cblx0LmhpZGUtaW5wdXQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogLTEwMCU7XG5cdFx0d2lkdGg6IDIwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0ei1pbmRleDogOTtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdEBrZXlmcmFtZXMgdHdpbmtsaW5nIHtcblx0XHQwJSB7XG5cdFx0XHRvcGFjaXR5OiAwLjI7XG5cdFx0fVxuXHRcdDUwJSB7XG5cdFx0XHRvcGFjaXR5OiAwLjU7XG5cdFx0fVxuXHRcdDEwMCUge1xuXHRcdFx0b3BhY2l0eTogMC4yO1xuXHRcdH1cblx0fVxuXHRcblx0LmRvdHtcblx0XHRmb250LXNpemU6IDgwdXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0MHVweDtcblx0fVxufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/rtmPage.vue?mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rtmPage.vue?vue&type=template&id=64a89c84&scoped=true&mpType=page */ 27);\n/* harmony import */ var _rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtmPage.vue?vue&type=script&lang=js&mpType=page */ 34);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"64a89c84\",\n  null,\n  false,\n  _rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/rtmPage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3J0bVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0YTg5Yzg0JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ydG1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ydG1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY0YTg5Yzg0XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3J0bVBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!********************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/rtmPage.vue?vue&type=template&id=64a89c84&scoped=true&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtmPage.vue?vue&type=template&id=64a89c84&scoped=true&mpType=page */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_template_id_64a89c84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/rtmPage.vue?vue&type=template&id=64a89c84&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "conent content_bg"),
      style: _vm._$s(0, "s", {
        width: _vm.windowWidth + "px",
        height: _vm.windowHeight + "px"
      }),
      attrs: { _i: 0 }
    },
    [
      _c("view", [
        _c("image", {
          attrs: {
            src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/icon_head.png */ 29)),
            _i: 2
          }
        })
      ]),
      _c("text", { staticClass: _vm._$s(3, "sc", "m-2"), attrs: { _i: 3 } }, [
        _vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.uid)))
      ]),
      _c("view", [
        _c("image", {
          attrs: {
            src: _vm._$s(5, "a-src", __webpack_require__(/*! ../../static/animation.png */ 30)),
            _i: 5
          }
        }),
        _c("text", { staticClass: _vm._$s(6, "sc", "m-2"), attrs: { _i: 6 } }, [
          _vm._v(
            _vm._$s(
              6,
              "t0-0",
              _vm._s(
                _vm.type === "主叫"
                  ? _vm.mode + "呼叫中"
                  : "收到主叫发起的" + _vm.mode
              )
            )
          )
        ])
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "options"), attrs: { _i: 7 } },
        [
          _c("view", [
            _vm._$s(9, "i", _vm.type === "被叫" && _vm.mode === "视频")
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(9, "sc", "icon"),
                    attrs: { _i: 9 },
                    on: { click: _vm.switchFn }
                  },
                  [
                    _c("image", {
                      staticClass: _vm._$s(10, "sc", "icon_img"),
                      attrs: {
                        src: _vm._$s(
                          10,
                          "a-src",
                          __webpack_require__(/*! ../../static/icon_switch_voice.png */ 31)
                        ),
                        _i: 10
                      }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(11, "sc", "icon_text"),
                      attrs: { _i: 11 }
                    })
                  ]
                )
              : _vm._e()
          ]),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "type"),
              style: _vm._$s(12, "s", {
                justifyContent: _vm.type === "被叫" ? "space-between" : "center"
              }),
              attrs: { _i: 12 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(13, "sc", "icon"),
                  attrs: { _i: 13 },
                  on: { click: _vm.cancelFn }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(14, "sc", "icon_img"),
                    attrs: {
                      src: _vm._$s(
                        14,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon_hangup.png */ 32)
                      ),
                      _i: 14
                    }
                  }),
                  _c("text", {
                    staticClass: _vm._$s(15, "sc", "icon_text"),
                    attrs: { _i: 15 }
                  })
                ]
              ),
              _vm._$s(16, "i", _vm.type === "被叫")
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(16, "sc", "icon"),
                      attrs: { _i: 16 },
                      on: { click: _vm.acceptFn }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(17, "sc", "icon_img"),
                        attrs: {
                          src: _vm._$s(
                            17,
                            "a-src",
                            __webpack_require__(/*! ../../static/icon_accept.png */ 33)
                          ),
                          _i: 17
                        }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(18, "sc", "icon_text"),
                        attrs: { _i: 18 }
                      })
                    ]
                  )
                : _vm._e()
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!***********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_head.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_head.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbl9oZWFkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!***********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/animation.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/animation.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvYW5pbWF0aW9uLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*******************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_switch_voice.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_switch_voice.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbl9zd2l0Y2hfdm9pY2UucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_hangup.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_hangup.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbl9oYW5ndXAucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/icon_accept.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon_accept.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbl9hY2NlcHQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/rtmPage.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtmPage.vue?vue&type=script&lang=js&mpType=page */ 35);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtmPage_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQix3a0JBQUcsRUFBQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ydG1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcnRtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/rtmPage.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  onLoad: function onLoad(option) {\n    if (option.info) {\n      // 默认弹窗\n      this.$store.dispatch('upDataPopubId', 'poPup-rtm');\n      var oInfo = JSON.parse(option.info);\n      this.mode = oInfo.mode;\n      this.type = oInfo.type;\n      this.uid = oInfo.uid;\n    }\n    var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.windowWidth = res.windowWidth;\n        _this.windowHeight = res.windowHeight;\n      } });\n\n  },\n  data: function data() {\n    return {\n      uid: '', // 用户 uid\n      mode: '', // 呼叫方式：语音/视频\n      type: '', // 呼叫类别：主叫/被叫\n      windowHeight: 400,\n      windowWidth: 200,\n\n      current: 'rtm',\n      network: false };\n\n\n  },\n  created: function created() {var _this2 = this;\n    // 断网后主动挂断\n    uni.onNetworkStatusChange(function (res) {\n      if (!res.isConnected && _this2.current == 'rtm') {\n        setTimeout(function () {\n          _this2.network = true;\n        });\n      } else {\n        if (_this2.network = true) {\n          _this2.network = false;\n          var oTime = setInterval(function () {\n            var od = _this2.$RTM.getLoginStatu();\n            if (od.state == 3 && od.reason == 2) {\n              // uni.hideLoading();\n              _this2.cancelFn();\n              clearInterval(oTime);\n            }\n          }, 500);\n        }\n      }\n    });\n  },\n  methods: {\n    // 挂断\n    cancelFn: function cancelFn() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                // 结束正在通话\n                _this3.$Utils.restoreAll();if (!(\n                _this3.type === \"主叫\")) {_context.next = 6;break;}_context.next = 4;return (\n\n                  _this3.$RTM.cancelLocalInvitation(_this3.uid));case 4:_context.next = 9;break;case 6:\n\n                // 被叫挂断(拒绝对方的呼叫邀请)  \n                __f__(\"log\", \"被叫挂断(拒绝对方的呼叫邀请)\", _this3.uid, \" at pages/index/rtmPage.vue:104\");_context.next = 9;return (\n                  _this3.$RTM.refuseRemoteInvitation(_this3.uid));case 9:\n\n                // 发送挂断信息\n                uni.$emit(\"sendMessageToPeer\", {\n                  Cmd: 'EndCall',\n                  peerid: _this3.uid });case 10:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    // 接听\n    acceptFn: function acceptFn() {\n      this.current = 'rtc';\n      this.$RTM.acceptRemoteInvitation(this.uid, {\n        Mode: this.mode === '视频' ? 0 : 1, // \n        Conference: false, // p2p 呼叫\n        UserData: \"\",\n        SipData: \"\" });\n\n    },\n    // 转语音\n    switchFn: function switchFn() {\n      this.current = 'rtc';\n      // 转语音并接受呼叫\n      this.$RTM.acceptRemoteInvitation(this.uid, {\n        Mode: 1, // 语音\n        Conference: false, // p2p 呼叫\n        UserData: \"\",\n        SipData: \"\" });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcnRtUGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBLFFBREEsa0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOztBQU1BLEdBakJBO0FBa0JBLE1BbEJBLGtCQWtCQTtBQUNBO0FBQ0EsYUFEQSxFQUNBO0FBQ0EsY0FGQSxFQUVBO0FBQ0EsY0FIQSxFQUdBO0FBQ0EsdUJBSkE7QUFLQSxzQkFMQTs7QUFPQSxvQkFQQTtBQVFBLG9CQVJBOzs7QUFXQSxHQTlCQTtBQStCQSxTQS9CQSxxQkErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBUEEsRUFPQSxHQVBBO0FBUUE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLEdBcERBO0FBcURBO0FBQ0E7QUFDQSxZQUZBLHNCQUVBO0FBQ0E7QUFDQSwyQ0FGQTtBQUdBLG9DQUhBOztBQUtBLCtEQUxBOztBQU9BO0FBQ0EsK0ZBUkE7QUFTQSxnRUFUQTs7QUFXQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxvQ0FGQSxJQVpBOztBQWdCQSxLQWxCQTtBQW1CQTtBQUNBLFlBcEJBLHNCQW9CQTtBQUNBO0FBQ0E7QUFDQSx3Q0FEQSxFQUNBO0FBQ0EseUJBRkEsRUFFQTtBQUNBLG9CQUhBO0FBSUEsbUJBSkE7O0FBTUEsS0E1QkE7QUE2QkE7QUFDQSxZQTlCQSxzQkE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQURBLEVBQ0E7QUFDQSx5QkFGQSxFQUVBO0FBQ0Esb0JBSEE7QUFJQSxtQkFKQTs7QUFNQSxLQXZDQSxFQXJEQSxFIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBydG0g5ZG85Y+r6YKA6K+36aG16Z2iIC0tPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb25lbnQgY29udGVudF9iZ1wiIDpzdHlsZT1cInt3aWR0aDogd2luZG93V2lkdGggKyAncHgnLGhlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4J31cIj5cclxuXHRcdDwhLS0g5aS05YOPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0PGltYWdlIHN0eWxlPVwid2lkdGg6IDEyMHB4O2hlaWdodDogMTIwcHg7XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25faGVhZC5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g55So5oi3IHVpZCDmoIfor4YgLS0+XHJcblx0XHQ8dGV4dCBjbGFzcz1cIm0tMlwiIHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7Zm9udC1zaXplOiAyMHB4O1wiPnt7dWlkfX08L3RleHQ+XHJcblx0XHQ8IS0tIOWRvOWPq+aWueW8jyAtLT5cclxuXHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luOiA0MHB4IDA7XCI+XHJcblx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBzcmM9XCIuLi8uLi9zdGF0aWMvYW5pbWF0aW9uLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cIm0tMlwiIHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7XCI+e3t0eXBlID09PSAn5Li75Y+rJz8gbW9kZSArICflkbzlj6vkuK0nIDogJ+aUtuWIsOS4u+WPq+WPkei1t+eahCcgKyBtb2RlfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOaTjeS9nOaWueW8jyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwib3B0aW9uc1wiPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtwYWRkaW5nOiAwIDQwcHg7bWFyZ2luLWJvdHRvbTogMjBweDtcIj5cclxuXHRcdFx0XHQ8IS0tIOinhumikei9rOivremfsyjku4Xooqvlj6vmnInmlYgpLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgdi1pZj1cInR5cGUgPT09ICfooqvlj6snICYmIG1vZGUgPT09ICfop4bpopEnXCIgQGNsaWNrPVwic3dpdGNoRm5cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fc3dpdGNoX3ZvaWNlLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPui9rOivremfszwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0eXBlXCIgOnN0eWxlPVwie2p1c3RpZnlDb250ZW50OiB0eXBlID09PSAn6KKr5Y+rJyA/ICdzcGFjZS1iZXR3ZWVuJzogJ2NlbnRlcid9XCI+XHJcblx0XHRcdFx0PCEtLSDmjILmlq0gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiY2FuY2VsRm5cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25faGFuZ3VwLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPuaMguaWrTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmjqXlkKwo5LuF6KKr5Y+r5pyJ5pWIKS0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ0eXBlID09PSAn6KKr5Y+rJ1wiIGNsYXNzPVwiaWNvblwiIEBjbGljaz1cImFjY2VwdEZuXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29uX2FjY2VwdC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uX3RleHRcIj7mjqXlkKw8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdGlmIChvcHRpb24uaW5mbykge1xyXG5cdFx0XHRcdC8vIOm7mOiupOW8ueeql1xyXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1cERhdGFQb3B1YklkJywgJ3BvUHVwLXJ0bScpO1xyXG5cdFx0XHRcdGNvbnN0IG9JbmZvID0gSlNPTi5wYXJzZShvcHRpb24uaW5mbyk7XHJcblx0XHRcdFx0dGhpcy5tb2RlID0gb0luZm8ubW9kZTtcclxuXHRcdFx0XHR0aGlzLnR5cGUgPSBvSW5mby50eXBlO1xyXG5cdFx0XHRcdHRoaXMudWlkID0gb0luZm8udWlkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR1aWQ6ICcnLCAvLyDnlKjmiLcgdWlkXHJcblx0XHRcdFx0bW9kZTogJycsIC8vIOWRvOWPq+aWueW8j++8muivremfsy/op4bpopFcclxuXHRcdFx0XHR0eXBlOiAnJywgLy8g5ZG85Y+r57G75Yir77ya5Li75Y+rL+iiq+WPq1xyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogNDAwLFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAyMDAsXHJcblxyXG5cdFx0XHRcdGN1cnJlbnQ6ICdydG0nLFxyXG5cdFx0XHRcdG5ldHdvcms6IGZhbHNlLFxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOaWree9keWQjuS4u+WKqOaMguaWrVxyXG5cdFx0XHR1bmkub25OZXR3b3JrU3RhdHVzQ2hhbmdlKChyZXMpID0+IHtcclxuXHRcdFx0XHRpZiAoIXJlcy5pc0Nvbm5lY3RlZCAmJiB0aGlzLmN1cnJlbnQgPT0gJ3J0bScpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5ldHdvcmsgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubmV0d29yayA9IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5uZXR3b3JrID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGxldCBvVGltZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBvZCA9IHRoaXMuJFJUTS5nZXRMb2dpblN0YXR1KCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG9kLnN0YXRlID09IDMgJiYgb2QucmVhc29uID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYW5jZWxGbigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChvVGltZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LCA1MDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOaMguaWrVxyXG5cdFx0XHRhc3luYyBjYW5jZWxGbigpIHtcclxuXHRcdFx0XHQvLyDnu5PmnZ/mraPlnKjpgJror51cclxuXHRcdFx0XHR0aGlzLiRVdGlscy5yZXN0b3JlQWxsKCk7XHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCLkuLvlj6tcIikge1xyXG5cdFx0XHRcdFx0Ly8g5Li75Y+r5oyC5patKOWPlua2iOWRvOWPq+mCgOivtylcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuJFJUTS5jYW5jZWxMb2NhbEludml0YXRpb24odGhpcy51aWQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDooqvlj6vmjILmlq0o5ouS57ud5a+55pa555qE5ZG85Y+r6YKA6K+3KSAgXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuiiq+WPq+aMguaWrSjmi5Lnu53lr7nmlrnnmoTlkbzlj6vpgoDor7cpXCIsIHRoaXMudWlkKTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuJFJUTS5yZWZ1c2VSZW1vdGVJbnZpdGF0aW9uKHRoaXMudWlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5Y+R6YCB5oyC5pat5L+h5oGvXHJcblx0XHRcdFx0dW5pLiRlbWl0KFwic2VuZE1lc3NhZ2VUb1BlZXJcIiwge1xyXG5cdFx0XHRcdFx0Q21kOiAnRW5kQ2FsbCcsXHJcblx0XHRcdFx0XHRwZWVyaWQ6IHRoaXMudWlkXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaOpeWQrFxyXG5cdFx0XHRhY2NlcHRGbigpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAncnRjJ1xyXG5cdFx0XHRcdHRoaXMuJFJUTS5hY2NlcHRSZW1vdGVJbnZpdGF0aW9uKHRoaXMudWlkLCB7XHJcblx0XHRcdFx0XHRNb2RlOiB0aGlzLm1vZGUgPT09ICfop4bpopEnID8gMCA6IDEsIC8vIFxyXG5cdFx0XHRcdFx0Q29uZmVyZW5jZTogZmFsc2UsIC8vIHAycCDlkbzlj6tcclxuXHRcdFx0XHRcdFVzZXJEYXRhOiBcIlwiLFxyXG5cdFx0XHRcdFx0U2lwRGF0YTogXCJcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L2s6K+t6Z+zXHJcblx0XHRcdHN3aXRjaEZuKCkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9ICdydGMnXHJcblx0XHRcdFx0Ly8g6L2s6K+t6Z+z5bm25o6l5Y+X5ZG85Y+rXHJcblx0XHRcdFx0dGhpcy4kUlRNLmFjY2VwdFJlbW90ZUludml0YXRpb24odGhpcy51aWQsIHtcclxuXHRcdFx0XHRcdE1vZGU6IDEsIC8vIOivremfs1xyXG5cdFx0XHRcdFx0Q29uZmVyZW5jZTogZmFsc2UsIC8vIHAycCDlkbzlj6tcclxuXHRcdFx0XHRcdFVzZXJEYXRhOiBcIlwiLFxyXG5cdFx0XHRcdFx0U2lwRGF0YTogXCJcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuY29udGVudF9iZyB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vc3RhdGljL2ljb25fYmFjay5wbmcpIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuY29uZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lm0tMiB7XHJcblx0XHRtYXJnaW46IDIwcHg7XHJcblx0fVxyXG5cclxuXHQucC0yIHtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQub3B0aW9ucyB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDIwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC50eXBlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0cGFkZGluZzogMCA0MHB4O1xyXG5cdH1cclxuXHJcblx0Lmljb24ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuaWNvbl9pbWcge1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdC5pY29uX3RleHQge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**********************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/set.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.vue?vue&type=template&id=0116364c&scoped=true&mpType=page */ 37);\n/* harmony import */ var _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.vue?vue&type=script&lang=js&mpType=page */ 40);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0116364c\",\n  null,\n  false,\n  _set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/set.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDExNjM2NGMmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAxMTYzNjRjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3NldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!****************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/set.vue?vue&type=template&id=0116364c&scoped=true&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./set.vue?vue&type=template&id=0116364c&scoped=true&mpType=page */ 38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_template_id_0116364c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 38 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/set.vue?vue&type=template&id=0116364c&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "conent"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "type"), attrs: { _i: 1 } }, [
        _c("text", { staticClass: _vm._$s(2, "sc", "text"), attrs: { _i: 2 } }),
        _c(
          "view",
          {
            staticClass: _vm._$s(3, "sc", "py-1 flex"),
            attrs: { _i: 3 },
            on: { click: _vm.resolutionFn }
          },
          [
            _c("text", [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.resolution)))]),
            _c("image", {
              attrs: {
                src: _vm._$s(5, "a-src", __webpack_require__(/*! ../../static/you.png */ 39)),
                _i: 5
              }
            })
          ]
        )
      ]),
      _c("view", { staticClass: _vm._$s(6, "sc", "type"), attrs: { _i: 6 } }, [
        _c("text", { staticClass: _vm._$s(7, "sc", "text"), attrs: { _i: 7 } }),
        _c(
          "view",
          {
            staticClass: _vm._$s(8, "sc", "flex py-1"),
            attrs: { _i: 8 },
            on: { click: _vm.frameRateFn }
          },
          [
            _c("text", [_vm._v(_vm._$s(9, "t0-0", _vm._s(_vm.frameRate)))]),
            _c("image", {
              attrs: {
                src: _vm._$s(10, "a-src", __webpack_require__(/*! ../../static/you.png */ 39)),
                _i: 10
              }
            })
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(11, "sc", "type flex"), attrs: { _i: 11 } },
        [
          _c("text"),
          _c("switch", { attrs: { _i: 13 }, on: { change: _vm.switchFn } })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 39 */
/*!*****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/static/you.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/you.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMveW91LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!**********************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/set.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./set.vue?vue&type=script&lang=js&mpType=page */ 41);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWttQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/pages/index/set.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      // 分辨率\n      resolution: '240 * 320',\n      resolutionList: ['240 * 320', '480 * 640', '720 * 1280'],\n      // 帧率\n      frameRate: '15',\n      frameRateList: ['15', '24', '30'] };\n\n  },\n  methods: {\n    // 开启智能降噪\n    switchFn: function switchFn(e) {\n      this.$store.dispatch('upDataetAudioAiNoise', e.target.value);\n    },\n    // 分辨率\n    resolutionFn: function resolutionFn() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oIndex, oSplit;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  new Promise(function (resolve, reject) {\n                    uni.showActionSheet({\n                      itemList: _this.resolutionList,\n                      success: function success(res) {\n                        resolve(res);\n                      } });\n\n                  }));case 2:oIndex = _context.sent;\n                _this.resolution = _this.resolutionList[oIndex.tapIndex];\n                // 设置 分辨率\n                oSplit = _this.resolution.split('*');\n                _this.$store.dispatch('upDataVideoConfig', {\n                  width: Number(oSplit[0]),\n                  height: Number(oSplit[1]) });case 6:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    // 帧率\n    frameRateFn: function frameRateFn() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var oIndex;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                  new Promise(function (resolve, reject) {\n                    uni.showActionSheet({\n                      itemList: _this2.frameRateList,\n                      success: function success(res) {\n                        resolve(res);\n                      } });\n\n                  }));case 2:oIndex = _context2.sent;\n                _this2.frameRate = _this2.frameRateList[oIndex.tapIndex];\n                // 设置帧率\n                _this2.$store.dispatch('upDataVideoConfig', {\n                  frameRate: Number(_this2.frameRate) });case 5:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvc2V0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFGQTtBQUdBLDhEQUhBO0FBSUE7QUFDQSxxQkFMQTtBQU1BLHVDQU5BOztBQVFBLEdBVkE7QUFXQTtBQUNBO0FBQ0EsWUFGQSxvQkFFQSxDQUZBLEVBRUE7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBLGdCQU5BLDBCQU1BO0FBQ0E7QUFDQTtBQUNBLG9EQURBO0FBRUE7QUFDQTtBQUNBLHVCQUpBOztBQU1BLG1CQVBBLENBREEsU0FDQSxNQURBO0FBU0E7QUFDQTtBQUNBLHNCQVhBLEdBV0EsMkJBWEE7QUFZQTtBQUNBLDBDQURBO0FBRUEsMkNBRkEsSUFaQTs7QUFnQkEsS0F0QkE7QUF1QkE7QUFDQSxlQXhCQSx5QkF3QkE7QUFDQTtBQUNBO0FBQ0Esb0RBREE7QUFFQTtBQUNBO0FBQ0EsdUJBSkE7O0FBTUEsbUJBUEEsQ0FEQSxTQUNBLE1BREE7QUFTQTtBQUNBO0FBQ0E7QUFDQSxxREFEQSxJQVhBOztBQWNBLEtBdENBLEVBWEEsRSIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS0g6K6+572u6aG16Z2iIC0tPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb25lbnRcIj5cclxuXHRcdDwhLS0g5YiG6L6o546HIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0eXBlXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPuWIhui+qOeOhzwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJweS0xIGZsZXhcIiBAY2xpY2s9XCJyZXNvbHV0aW9uRm5cIj5cclxuXHRcdFx0XHQ8dGV4dD57e3Jlc29sdXRpb259fTwvdGV4dD5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3lvdS5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4O2hlaWdodDogMjBweDtcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOW4p+eOhyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidHlwZVwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj7luKfnjoc8L3RleHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBweS0xXCIgQGNsaWNrPVwiZnJhbWVSYXRlRm5cIj5cclxuXHRcdFx0XHQ8dGV4dD57e2ZyYW1lUmF0ZX19PC90ZXh0PlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMveW91LnBuZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gQUkg5pm66IO96ZmN5ZmqIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0eXBlIGZsZXhcIj5cclxuXHRcdFx0PHRleHQ+QUkg5pm66IO96ZmN5ZmqPC90ZXh0PlxyXG5cdFx0XHQ8c3dpdGNoIEBjaGFuZ2U9XCJzd2l0Y2hGblwiIHN0eWxlPVwidHJhbnNmb3JtOnNjYWxlKDAuNylcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDliIbovqjnjodcclxuXHRcdFx0XHRyZXNvbHV0aW9uOiAnMjQwICogMzIwJyxcclxuXHRcdFx0XHRyZXNvbHV0aW9uTGlzdDogWycyNDAgKiAzMjAnLCAnNDgwICogNjQwJywgJzcyMCAqIDEyODAnXSxcclxuXHRcdFx0XHQvLyDluKfnjodcclxuXHRcdFx0XHRmcmFtZVJhdGU6ICcxNScsXHJcblx0XHRcdFx0ZnJhbWVSYXRlTGlzdDogWycxNScsICcyNCcsICczMCddXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOW8gOWQr+aZuuiDvemZjeWZqlxyXG5cdFx0XHRzd2l0Y2hGbihlKSB7XHJcblx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VwRGF0YWV0QXVkaW9BaU5vaXNlJywgZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWIhui+qOeOh1xyXG5cdFx0XHRhc3luYyByZXNvbHV0aW9uRm4oKSB7XHJcblx0XHRcdFx0Y29uc3Qgb0luZGV4ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dBY3Rpb25TaGVldCh7XHJcblx0XHRcdFx0XHRcdGl0ZW1MaXN0OiB0aGlzLnJlc29sdXRpb25MaXN0LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMucmVzb2x1dGlvbiA9IHRoaXMucmVzb2x1dGlvbkxpc3Rbb0luZGV4LnRhcEluZGV4XTtcclxuXHRcdFx0XHQvLyDorr7nva4g5YiG6L6o546HXHJcblx0XHRcdFx0Y29uc3Qgb1NwbGl0ID0gdGhpcy5yZXNvbHV0aW9uLnNwbGl0KCcqJyk7XHJcblx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3VwRGF0YVZpZGVvQ29uZmlnJywge1xyXG5cdFx0XHRcdFx0d2lkdGg6IE51bWJlcihvU3BsaXRbMF0pLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBOdW1iZXIob1NwbGl0WzFdKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW4p+eOh1xyXG5cdFx0XHRhc3luYyBmcmFtZVJhdGVGbigpIHtcclxuXHRcdFx0XHRjb25zdCBvSW5kZXggPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd0FjdGlvblNoZWV0KHtcclxuXHRcdFx0XHRcdFx0aXRlbUxpc3Q6IHRoaXMuZnJhbWVSYXRlTGlzdCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLmZyYW1lUmF0ZSA9IHRoaXMuZnJhbWVSYXRlTGlzdFtvSW5kZXgudGFwSW5kZXhdO1xyXG5cdFx0XHRcdC8vIOiuvue9ruW4p+eOh1xyXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1cERhdGFWaWRlb0NvbmZpZycsIHtcclxuXHRcdFx0XHRcdGZyYW1lUmF0ZTogTnVtYmVyKHRoaXMuZnJhbWVSYXRlKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuY29uZW50IHtcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG5cdFx0cGFkZGluZzogMXB4IDA7XHJcblx0fVxyXG5cclxuXHQudHlwZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdFx0bWFyZ2luOiAxMHB4IDAgMCAwO1xyXG5cdH1cclxuXHJcblx0LmZsZXgge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGV4dCB7XHJcblx0XHRjb2xvcjogIzgwODA4MDtcclxuXHR9XHJcblxyXG5cdC5weS0xIHtcclxuXHRcdHBhZGRpbmc6IDEwcHggMDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 43 */
/*!**********************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/App.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 44);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDMks7QUFDM0ssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!***********************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 45);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC_arCall/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {var _this = this;\n    // 锁定横屏  \n    // plus.screen.lockOrientation(\"landscape-primary\");  \n    // 锁定竖屏  \n    plus.screen.lockOrientation(\"portrait-primary\");\n    // 相机、麦克风权限\n    this.$Utils.equipment();\n    var oa = true;\n    // 确保联网\n    uni.getNetworkType({\n      success: function success(res) {\n        if (res.networkType !== \"none\") {\n          _this.$RTM.init();\n          oa = false;\n        } else {\n          uni.showLoading({\n            title: '联网中' });\n\n\n        }\n      } });\n\n    uni.onNetworkStatusChange(function (res) {\n      if (res.isConnected) {\n        uni.hideLoading();\n        if (oa) {\n          _this.$RTM.init();\n          oa = false;\n        }\n      } else {\n        uni.showLoading({\n          title: '联网中',\n          mask: true });\n\n      }\n    });\n    __f__(\"log\", 'App Launch 初始化完成时触发', \" at App.vue:39\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:42\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:45\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsInBsdXMiLCJzY3JlZW4iLCJsb2NrT3JpZW50YXRpb24iLCIkVXRpbHMiLCJlcXVpcG1lbnQiLCJvYSIsInVuaSIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlcyIsIm5ldHdvcmtUeXBlIiwiJFJUTSIsImluaXQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwib25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwiaXNDb25uZWN0ZWQiLCJoaWRlTG9hZGluZyIsIm1hc2siLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxVQUFRLEVBQUUsb0JBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0FDLFFBQUksQ0FBQ0MsTUFBTCxDQUFZQyxlQUFaLENBQTRCLGtCQUE1QjtBQUNBO0FBQ0EsU0FBS0MsTUFBTCxDQUFZQyxTQUFaO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQTtBQUNBQyxPQUFHLENBQUNDLGNBQUosQ0FBbUI7QUFDbEJDLGFBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCLFlBQUlBLEdBQUcsQ0FBQ0MsV0FBSixLQUFvQixNQUF4QixFQUFnQztBQUMvQixlQUFJLENBQUNDLElBQUwsQ0FBVUMsSUFBVjtBQUNBUCxZQUFFLEdBQUcsS0FBTDtBQUNBLFNBSEQsTUFHTztBQUNOQyxhQUFHLENBQUNPLFdBQUosQ0FBZ0I7QUFDZkMsaUJBQUssRUFBRSxLQURRLEVBQWhCOzs7QUFJQTtBQUNELE9BWGlCLEVBQW5COztBQWFBUixPQUFHLENBQUNTLHFCQUFKLENBQTBCLFVBQUNOLEdBQUQsRUFBUztBQUNsQyxVQUFJQSxHQUFHLENBQUNPLFdBQVIsRUFBcUI7QUFDcEJWLFdBQUcsQ0FBQ1csV0FBSjtBQUNBLFlBQUlaLEVBQUosRUFBUTtBQUNQLGVBQUksQ0FBQ00sSUFBTCxDQUFVQyxJQUFWO0FBQ0FQLFlBQUUsR0FBRyxLQUFMO0FBQ0E7QUFDRCxPQU5ELE1BTU87QUFDTkMsV0FBRyxDQUFDTyxXQUFKLENBQWdCO0FBQ2ZDLGVBQUssRUFBRSxLQURRO0FBRWZJLGNBQUksRUFBRSxJQUZTLEVBQWhCOztBQUlBO0FBQ0QsS0FiRDtBQWNBLGlCQUFZLHFCQUFaO0FBQ0EsR0F0Q2E7QUF1Q2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0F6Q2E7QUEwQ2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0E1Q2EsRSIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8g6ZSB5a6a5qiq5bGPICBcblx0XHQvLyBwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJsYW5kc2NhcGUtcHJpbWFyeVwiKTsgIFxuXHRcdC8vIOmUgeWumuerluWxjyAgXG5cdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKFwicG9ydHJhaXQtcHJpbWFyeVwiKTtcblx0XHQvLyDnm7jmnLrjgIHpuqblhYvpo47mnYPpmZBcblx0XHR0aGlzLiRVdGlscy5lcXVpcG1lbnQoKTtcblx0XHRsZXQgb2EgPSB0cnVlO1xuXHRcdC8vIOehruS/neiBlOe9kVxuXHRcdHVuaS5nZXROZXR3b3JrVHlwZSh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdGlmIChyZXMubmV0d29ya1R5cGUgIT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy4kUlRNLmluaXQoKTtcblx0XHRcdFx0XHRvYSA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+iBlOe9keS4rSdcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dW5pLm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XG5cdFx0XHRpZiAocmVzLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHRpZiAob2EpIHtcblx0XHRcdFx0XHR0aGlzLiRSVE0uaW5pdCgpO1xuXHRcdFx0XHRcdG9hID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdFx0dGl0bGU6ICfogZTnvZHkuK0nLFxuXHRcdFx0XHRcdG1hc2s6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gg5Yid5aeL5YyW5a6M5oiQ5pe26Kem5Y+RJyk7XG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/store/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 42));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    popubId: '', // 弹窗 ID\n    uid: '', // 本地用户 uid\n    // 视频编码属性\n    VideoConfig: {\n      \"width\": 240,\n      \"height\": 320,\n      \"bitrate\": 0,\n      \"frameRate\": 15,\n      \"orientationMode\": 0 },\n\n    etAudioAiNoise: false // 开启 AI 智能降噪\n  },\n  mutations: {\n    // 更新弹窗 ID\n    upDataPopubId: function upDataPopubId(state, data) {\n      state.popubId = data;\n    },\n    // 更新本地用户 uid\n    upDataUId: function upDataUId(state, data) {\n      state.uid = data;\n    },\n    // 更新视频编码属性\n    upDataVideoConfig: function upDataVideoConfig(state, data) {\n      state.VideoConfig = Object.assign(state.VideoConfig, data);\n    },\n    // 更新 是否开启 AI 智能降噪\n    upDataetAudioAiNoise: function upDataetAudioAiNoise(state, data) {\n      state.etAudioAiNoise = data;\n    } },\n\n\n  actions: {\n    // 更改弹窗 ID\n    upDataPopubId: function upDataPopubId(_ref,\n\n    data) {var commit = _ref.commit;\n      commit('upDataPopubId', data);\n    },\n    // 更新本地用户 uid\n    upDataUId: function upDataUId(_ref2,\n\n    data) {var commit = _ref2.commit;\n      commit('upDataUId', data);\n    },\n    // 更新视频编码属性\n    upDataVideoConfig: function upDataVideoConfig(_ref3,\n\n    data) {var commit = _ref3.commit;\n      commit('upDataVideoConfig', data);\n    },\n    // 更新 是否开启 AI 智能降噪\n    upDataetAudioAiNoise: function upDataetAudioAiNoise(_ref4,\n\n    data) {var commit = _ref4.commit;\n      commit('upDataetAudioAiNoise', data);\n    } } });var _default =\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsInBvcHViSWQiLCJ1aWQiLCJWaWRlb0NvbmZpZyIsImV0QXVkaW9BaU5vaXNlIiwibXV0YXRpb25zIiwidXBEYXRhUG9wdWJJZCIsImRhdGEiLCJ1cERhdGFVSWQiLCJ1cERhdGFWaWRlb0NvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsInVwRGF0YWV0QXVkaW9BaU5vaXNlIiwiYWN0aW9ucyIsImNvbW1pdCJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0Esd0U7QUFDQUEsYUFBSUMsR0FBSixDQUFRQyxhQUFSO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFO0FBQ05DLFdBQU8sRUFBRSxFQURILEVBQ087QUFDYkMsT0FBRyxFQUFFLEVBRkMsRUFFRztBQUNUO0FBQ0FDLGVBQVcsRUFBRTtBQUNaLGVBQVMsR0FERztBQUVaLGdCQUFVLEdBRkU7QUFHWixpQkFBVyxDQUhDO0FBSVosbUJBQWEsRUFKRDtBQUtaLHlCQUFtQixDQUxQLEVBSlA7O0FBV05DLGtCQUFjLEVBQUUsS0FYVixDQVdpQjtBQVhqQixHQURxQjtBQWM1QkMsV0FBUyxFQUFFO0FBQ1Y7QUFDQUMsaUJBRlUseUJBRUlOLEtBRkosRUFFV08sSUFGWCxFQUVpQjtBQUMxQlAsV0FBSyxDQUFDQyxPQUFOLEdBQWdCTSxJQUFoQjtBQUNBLEtBSlM7QUFLVjtBQUNBQyxhQU5VLHFCQU1BUixLQU5BLEVBTU9PLElBTlAsRUFNYTtBQUN0QlAsV0FBSyxDQUFDRSxHQUFOLEdBQVlLLElBQVo7QUFDQSxLQVJTO0FBU1Y7QUFDQUUscUJBVlUsNkJBVVFULEtBVlIsRUFVZU8sSUFWZixFQVVxQjtBQUM5QlAsV0FBSyxDQUFDRyxXQUFOLEdBQW9CTyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsS0FBSyxDQUFDRyxXQUFwQixFQUFpQ0ksSUFBakMsQ0FBcEI7QUFDQSxLQVpTO0FBYVY7QUFDQUssd0JBZFUsZ0NBY1daLEtBZFgsRUFja0JPLElBZGxCLEVBY3dCO0FBQ2pDUCxXQUFLLENBQUNJLGNBQU4sR0FBdUJHLElBQXZCO0FBQ0EsS0FoQlMsRUFkaUI7OztBQWlDNUJNLFNBQU8sRUFBRTtBQUNSO0FBQ0FQLGlCQUZROztBQUlMQyxRQUpLLEVBSUMsS0FEUk8sTUFDUSxRQURSQSxNQUNRO0FBQ1JBLFlBQU0sQ0FBQyxlQUFELEVBQWtCUCxJQUFsQixDQUFOO0FBQ0EsS0FOTztBQU9SO0FBQ0FDLGFBUlE7O0FBVUxELFFBVkssRUFVQyxLQURSTyxNQUNRLFNBRFJBLE1BQ1E7QUFDUkEsWUFBTSxDQUFDLFdBQUQsRUFBY1AsSUFBZCxDQUFOO0FBQ0EsS0FaTztBQWFSO0FBQ0FFLHFCQWRROztBQWdCTEYsUUFoQkssRUFnQkMsS0FEUk8sTUFDUSxTQURSQSxNQUNRO0FBQ1JBLFlBQU0sQ0FBQyxtQkFBRCxFQUFzQlAsSUFBdEIsQ0FBTjtBQUNBLEtBbEJPO0FBbUJSO0FBQ0FLLHdCQXBCUTs7QUFzQkxMLFFBdEJLLEVBc0JDLEtBRFJPLE1BQ1EsU0FEUkEsTUFDUTtBQUNSQSxZQUFNLENBQUMsc0JBQUQsRUFBeUJQLElBQXpCLENBQU47QUFDQSxLQXhCTyxFQWpDbUIsRUFBZixDQUFkLEM7OztBQTREZVQsSyIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG5cdHN0YXRlOiB7XHJcblx0XHRwb3B1YklkOiAnJywgLy8g5by556qXIElEXHJcblx0XHR1aWQ6ICcnLCAvLyDmnKzlnLDnlKjmiLcgdWlkXHJcblx0XHQvLyDop4bpopHnvJbnoIHlsZ7mgKdcclxuXHRcdFZpZGVvQ29uZmlnOiB7XHJcblx0XHRcdFwid2lkdGhcIjogMjQwLFxyXG5cdFx0XHRcImhlaWdodFwiOiAzMjAsXHJcblx0XHRcdFwiYml0cmF0ZVwiOiAwLFxyXG5cdFx0XHRcImZyYW1lUmF0ZVwiOiAxNSxcclxuXHRcdFx0XCJvcmllbnRhdGlvbk1vZGVcIjogMFxyXG5cdFx0fSxcclxuXHRcdGV0QXVkaW9BaU5vaXNlOiBmYWxzZSwgLy8g5byA5ZCvIEFJIOaZuuiDvemZjeWZqlxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHQvLyDmm7TmlrDlvLnnqpcgSURcclxuXHRcdHVwRGF0YVBvcHViSWQoc3RhdGUsIGRhdGEpIHtcclxuXHRcdFx0c3RhdGUucG9wdWJJZCA9IGRhdGE7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw5pys5Zyw55So5oi3IHVpZFxyXG5cdFx0dXBEYXRhVUlkKHN0YXRlLCBkYXRhKSB7XHJcblx0XHRcdHN0YXRlLnVpZCA9IGRhdGE7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw6KeG6aKR57yW56CB5bGe5oCnXHJcblx0XHR1cERhdGFWaWRlb0NvbmZpZyhzdGF0ZSwgZGF0YSkge1xyXG5cdFx0XHRzdGF0ZS5WaWRlb0NvbmZpZyA9IE9iamVjdC5hc3NpZ24oc3RhdGUuVmlkZW9Db25maWcsIGRhdGEpO1xyXG5cdFx0fSxcclxuXHRcdC8vIOabtOaWsCDmmK/lkKblvIDlkK8gQUkg5pm66IO96ZmN5ZmqXHJcblx0XHR1cERhdGFldEF1ZGlvQWlOb2lzZShzdGF0ZSwgZGF0YSkge1xyXG5cdFx0XHRzdGF0ZS5ldEF1ZGlvQWlOb2lzZSA9IGRhdGE7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fSxcclxuXHRhY3Rpb25zOiB7XHJcblx0XHQvLyDmm7TmlLnlvLnnqpcgSURcclxuXHRcdHVwRGF0YVBvcHViSWQoe1xyXG5cdFx0XHRjb21taXRcclxuXHRcdH0sIGRhdGEpIHtcclxuXHRcdFx0Y29tbWl0KCd1cERhdGFQb3B1YklkJywgZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw5pys5Zyw55So5oi3IHVpZFxyXG5cdFx0dXBEYXRhVUlkKHtcclxuXHRcdFx0Y29tbWl0XHJcblx0XHR9LCBkYXRhKSB7XHJcblx0XHRcdGNvbW1pdCgndXBEYXRhVUlkJywgZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw6KeG6aKR57yW56CB5bGe5oCnXHJcblx0XHR1cERhdGFWaWRlb0NvbmZpZyh7XHJcblx0XHRcdGNvbW1pdFxyXG5cdFx0fSwgZGF0YSkge1xyXG5cdFx0XHRjb21taXQoJ3VwRGF0YVZpZGVvQ29uZmlnJywgZGF0YSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05pawIOaYr+WQpuW8gOWQryBBSSDmmbrog73pmY3lmapcclxuXHRcdHVwRGF0YWV0QXVkaW9BaU5vaXNlKHtcclxuXHRcdFx0Y29tbWl0XHJcblx0XHR9LCBkYXRhKSB7XHJcblx0XHRcdGNvbW1pdCgndXBEYXRhZXRBdWRpb0FpTm9pc2UnLCBkYXRhKTtcclxuXHRcdH0sXHRcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

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
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
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
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
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

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
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

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

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
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
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
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
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

function resetStoreVM (store, state, hot) {
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
      get: function () { return store._vm[key]; },
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
      $$state: state
    },
    computed: computed
  });
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
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
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
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
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
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 48)))

/***/ }),
/* 48 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 49 */
/*!*****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 42));\nvar _until = __webpack_require__(/*! ./until.js */ 50);\n\n\n\n\nvar _rtm = _interopRequireDefault(__webpack_require__(/*! ./rtm.js */ 53));\nvar _rtc = _interopRequireDefault(__webpack_require__(/*! ./rtc.js */ 55));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 如果uniapp中\n// 注册到Vue原型上\n_vue.default.prototype.$Utils = _until.Utils;\n_vue.default.prototype.$RTMUtils = _until.RTMUtils;\n_vue.default.prototype.$RTM = _rtm.default;\n_vue.default.prototype.$RTC = _rtc.default;\n_vue.default.prototype.$RTCUtils = _until.RTCUtils;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwicHJvdG90eXBlIiwiJFV0aWxzIiwiVXRpbHMiLCIkUlRNVXRpbHMiLCJSVE1VdGlscyIsIiRSVE0iLCJSVE0iLCIkUlRDIiwiUlRDIiwiJFJUQ1V0aWxzIiwiUlRDVXRpbHMiXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0EsMkUsOEZBUkE7QUFTQTtBQUNBQSxhQUFJQyxTQUFKLENBQWNDLE1BQWQsR0FBdUJDLFlBQXZCO0FBQ0FILGFBQUlDLFNBQUosQ0FBY0csU0FBZCxHQUEwQkMsZUFBMUI7QUFDQUwsYUFBSUMsU0FBSixDQUFjSyxJQUFkLEdBQXFCQyxZQUFyQjtBQUNBUCxhQUFJQyxTQUFKLENBQWNPLElBQWQsR0FBcUJDLFlBQXJCO0FBQ0FULGFBQUlDLFNBQUosQ0FBY1MsU0FBZCxHQUEwQkMsZUFBMUIiLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlpoLmnpx1bmlhcHDkuK1cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCB7XHJcblx0VXRpbHMsXHJcblx0UlRNVXRpbHMsXHJcblx0UlRDVXRpbHNcclxufSBmcm9tICcuL3VudGlsLmpzJ1xyXG5pbXBvcnQgUlRNIGZyb20gJy4vcnRtLmpzJ1xyXG5pbXBvcnQgUlRDIGZyb20gJy4vcnRjLmpzJ1xyXG4vLyDms6jlhozliLBWdWXljp/lnovkuIpcclxuVnVlLnByb3RvdHlwZS4kVXRpbHMgPSBVdGlsc1xyXG5WdWUucHJvdG90eXBlLiRSVE1VdGlscyA9IFJUTVV0aWxzXHJcblZ1ZS5wcm90b3R5cGUuJFJUTSA9IFJUTVxyXG5WdWUucHJvdG90eXBlLiRSVEMgPSBSVENcclxuVnVlLnByb3RvdHlwZS4kUlRDVXRpbHMgPSBSVENVdGlsc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!*****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/until.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.RTCUtils = exports.RTMUtils = exports.Utils = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));var _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ 46));\nvar _permission = _interopRequireDefault(__webpack_require__(/*! ../js_sdk/wa-permission/permission.js */ 51));\nvar _rtccode = _interopRequireDefault(__webpack_require__(/*! ./rtccode.js */ 52));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar Store = {\n  // 是否正在通话中\n  isCalling: false,\n  // 判断 多人呼叫\n  conference: false,\n  // 提示框定时器记录\n  popupTimer: null };\n\n\n// 全局工具封装\nvar Utils = {\n  // 平台分类查询权限\n  equipment: function equipment() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oa, ob, _oa, _ob;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n              uni.getSystemInfoSync().platform == 'ios')) {_context.next = 11;break;}_context.next = 3;return (\n\n                Utils.requestAndroidPermission(\"camera\", 'ios', '相机'));case 3:oa = _context.sent;_context.next = 6;return (\n\n                Utils.requestAndroidPermission(\"record\", 'ios', '录音'));case 6:ob = _context.sent;_context.next = 9;return (\n                Utils.hintInfo([oa, ob]));case 9:_context.next = 20;break;case 11:if (!(\n\n              uni.getSystemInfoSync().platform === 'android')) {_context.next = 20;break;}_context.next = 14;return (\n\n                Utils.requestAndroidPermission(\"android.permission.CAMERA\", 'android', '相机'));case 14:_oa = _context.sent;_context.next = 17;return (\n\n                Utils.requestAndroidPermission(\"android.permission.RECORD_AUDIO\", 'android', '录音'));case 17:_ob = _context.sent;_context.next = 20;return (\n                Utils.hintInfo([_oa, _ob]));case 20:case \"end\":return _context.stop();}}}, _callee);}))();\n\n  },\n  // 查询权限封装\n  requestAndroidPermission: function requestAndroidPermission(permisionID, type, libe) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result, strStatus;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              result = 0;\n              strStatus = \"\";if (!(\n              type == 'ios')) {_context2.next = 8;break;}_context2.next = 5;return _permission.default.judgeIosPermission(permisionID);case 5:result = _context2.sent;_context2.next = 11;break;case 8:_context2.next = 10;return _permission.default.\n              requestAndroidPermission(\n              permisionID);case 10:result = _context2.sent;case 11:\n              if (result == 1) {\n                strStatus = \"已获得授权,可正常使用\";\n              } else if (result == 0) {\n                strStatus = \"未获得授权,无法使用\";\n              } else {\n                strStatus = \"被永久拒绝权限,无法使用\";\n              };return _context2.abrupt(\"return\",\n              libe + strStatus);case 14:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  // 获取元素\n  getEl: function getEl(el) {\n    if (typeof el === 'string' || typeof el === 'number') return el;\n    if (WXEnvironment) {\n      return el.ref;\n    } else {\n      return el instanceof HTMLElement ? el : el.$el;\n    }\n  },\n  // 生成uid\n  generateNumber: function generateNumber(len) {\n    var numLen = len || 8;\n    var generateNum = Math.ceil(Math.random() * Math.pow(10, numLen));\n    return generateNum < Math.pow(10, numLen - 1) ?\n    Utils.generateNumber(numLen) :\n    generateNum;\n  },\n  // 全局vue提示信息 type: success warn error info\n  hintInfo: function hintInfo(message) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n    var oSubId = _index.default.state.popubId || 'poPup';\n    // // 通过 id 获取 nvue 子窗体\n    var subNVue = uni.getSubNVueById(oSubId);\n    if (subNVue) {\n      // 打开 nvue 子窗体\n      subNVue.show('fade-in', 300);\n      uni.$emit('paltfrom-popup', {\n        type: type,\n        message: message });\n\n      // 关闭 nvue 子窗体\n      Store.popupTimer && clearTimeout(Store.popupTimer);\n      Store.popupTimer = setTimeout(function () {\n        subNVue.hide('fade-out', 300);\n        uni.$emit('paltfrom-popup', {\n          type: '',\n          message: '' });\n\n      }, duration);\n    }\n  },\n  // RTC 提示信息(nvue) type: success warn error info\n  hintRTCInfo: function hintRTCInfo(message) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n    // // 通过 id 获取 nvue 子窗体\n    var subNVue = uni.getSubNVueById('poPup-rtm');\n    // console.log(subNVue);\n    // 打开 nvue 子窗体  \n    subNVue.show('fade-in', 300);\n    uni.$emit('paltfrom-popup', {\n      type: type,\n      message: message });\n\n    // 关闭 nvue 子窗体  \n    Store.popupTimer && clearTimeout(Store.popupTimer);\n    Store.popupTimer = setTimeout(function () {\n      subNVue.hide('fade-out', 300);\n    }, duration);\n  },\n  // 还原(vue)\n  restoreAll: function restoreAll() {\n    // 通话结束\n    uni.$emit('isCalling', false);\n  },\n  // 呼叫邀请页面(vue) path \n  callInvitationPage: function callInvitationPage() {var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'index';var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var hint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    var oInfo = info ? JSON.stringify(info) : '';\n    uni.redirectTo({\n      url: path + (oInfo ? '?info=' + oInfo : ''),\n      success: function success(res) {\n        __f__(\"log\", '成功', res, \" at until/until.js:117\");\n        // 提示\n        if (hint) {\n          setTimeout(function () {\n            Utils.hintInfo(hint.message, hint.type);\n          }, 200);\n        }\n      },\n      fail: function fail(res) {\n        __f__(\"log\", \"失败\", res, \" at until/until.js:126\");\n      } });\n\n  },\n  // 视频通话页面(nvue)\n  callVideoPage: function callVideoPage(path) {var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    var subNVue = uni.getSubNVueById('CavasViewRTC');\n    // 显示\n    if (path === 'rtc') {\n      uni.$emit('CavasViewRtc', info);\n      subNVue.show('fade-in', 300);\n    } else {\n      uni.$emit('CavasViewRtc', \"\");\n      subNVue.hide('fade-out', 300);\n    }\n  } };\n\n// RTM 工具封装\nexports.Utils = Utils;var RTMUtils = {\n  // 判断是否调用 login 成功\n  useLogin: function useLogin(code, uid) {\n\n    if (code == 0) {\n      _index.default.dispatch('upDataUId', uid);\n      uni.showToast({\n        title: '登录成功',\n        icon: 'success',\n        duration: 2000 });\n\n    } else {\n      uni.showToast({\n        title: '登录失败',\n        icon: 'none',\n        duration: 2000 });\n\n    }\n  },\n  // SDK 与 RTM 系统的连接状态发生改变\n  ConnectionStateChanged: function ConnectionStateChanged(state, reason) {\n    // 新连接状态 state\n    var oState = ['', '初始状态。SDK 未连接到 RTM 系统', 'SDK 正在登录 AR RTM 系统', 'SDK 已登录 RTM 系统',\n    'SDK 与 RTM 系统连接由于网络原因出现中断，SDK 正在尝试自动重连 RTM 系统', 'SDK 停止登录 RTM 系统'];\n\n    // 连接状态改变原因 reason\n    var oReason = ['', 'SDK 正在登录 RTM 系统', 'SDK 登录 RTM 系统成功', 'SDK 登录 RTM 系统失败',\n    'SDK 无法登录 AR RTM 系统超过 6 秒，停止登录', 'SDK 与 RTM 系统的连接被中断', '用户已调用 logout() 方法登出 RTM 系统',\n    'SDK 被服务器禁止登录 RTM 系统', '另一个用户正以相同的用户 ID 登陆 RTM 系统'];\n\n    // 消息提醒\n    Utils.hintInfo(['连接状态：' + oState[state], '改变原因：' + oReason[reason]]);\n  },\n  // 收到点对点消息回调\n  PeerMessageReceived: function PeerMessageReceived(message, peerId) {\n    __f__(\"log\", \"收到点对点消息回调\", message, peerId, \" at until/until.js:179\");\n    var oInfo = JSON.parse(message);\n    // RTC 视频通话转语音通话\n    if (oInfo.Cmd == \"SwitchAudio\") {\n      __f__(\"log\", \"RTC 视频通话转语音通话\", \" at until/until.js:183\");\n      uni.$emit(\"rtc-SwitchAudio\", {\n        message: \"SwitchAudio\",\n        peerId: peerId });\n\n      // RTC 挂断\n    } else if (oInfo.Cmd == \"EndCall\") {\n      uni.$emit(\"rtc-endcall\", {\n        message: \"EndCall\",\n        peerId: peerId });\n\n\n    }\n  },\n  // 返回给主叫：被叫已接受呼叫邀请\n  LocalInvitationAccepted: function () {var _LocalInvitationAccepted = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {var oRes, oData;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n              __f__(\"log\", '返回给主叫：被叫已接受呼叫邀请', data, \" at until/until.js:199\");\n              // 正在通话\n              uni.$emit('isCalling', true);\n              // 数据组装\n              oRes = data.response ? JSON.parse(data.response) : {};_context3.next = 5;return (\n                Object.assign({}, JSON.parse(data.content), oRes));case 5:oData = _context3.sent;_context3.next = 8;return (\n\n                Utils.callVideoPage('rtc', {\n                  calleeId: data.calleeId,\n                  content: JSON.stringify(oData) }));case 8:case \"end\":return _context3.stop();}}}, _callee3);}));function LocalInvitationAccepted(_x) {return _LocalInvitationAccepted.apply(this, arguments);}return LocalInvitationAccepted;}(),\n\n\n  // 返回给主叫：呼叫邀请已被取消\n  LocalInvitationCanceled: function () {var _LocalInvitationCanceled = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n              __f__(\"log\", '呼叫邀请已取消', data, \" at until/until.js:213\");\n              // 还原\n              _context4.next = 3;return Utils.restoreAll();case 3:_context4.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '呼叫邀请已取消(主动挂断或对方已离线)',\n                  type: 'success' }));case 5:case \"end\":return _context4.stop();}}}, _callee4);}));function LocalInvitationCanceled(_x2) {return _LocalInvitationCanceled.apply(this, arguments);}return LocalInvitationCanceled;}(),\n\n\n  // 返回给主叫：呼叫邀请进程失败\n  LocalInvitationFailure: function () {var _LocalInvitationFailure = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n              __f__(\"log\", '呼叫邀请进程失败', data, \" at until/until.js:224\");\n              // 还原\n              _context5.next = 3;return Utils.restoreAll();case 3:_context5.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '呼叫邀请进程失败',\n                  type: 'error' }));case 5:case \"end\":return _context5.stop();}}}, _callee5);}));function LocalInvitationFailure(_x3) {return _LocalInvitationFailure.apply(this, arguments);}return LocalInvitationFailure;}(),\n\n\n  // 返回给主叫：被叫已收到呼叫邀请\n  LocalInvitationReceivedByPeer: function LocalInvitationReceivedByPeer(data) {\n    if (data.state == 2) {\n      __f__(\"log\", '被叫已收到呼叫邀请', data, \" at until/until.js:236\");\n      // 正在通话\n      var oCont = JSON.parse(data.content);\n      // 进入呼叫邀请\n      Utils.callInvitationPage('rtmPage', {\n        mode: oCont.Mode === 0 ? '视频' : '语音',\n        type: '主叫',\n        uid: data.calleeId });\n\n      uni.$emit('isCalling', true);\n    }\n  },\n  // 返回给主叫：被叫已拒绝呼叫邀请\n  LocalInvitationRefused: function () {var _LocalInvitationRefused = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(data) {var oDa;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n              __f__(\"log\", '被叫已拒绝呼叫邀请', data, \" at until/until.js:250\");\n              // 还原\n              _context6.next = 3;return Utils.restoreAll();case 3:if (!\n              data.response) {_context6.next = 14;break;}\n              oDa = JSON.parse(data.response);if (!(\n              oDa.Reason == 'calling' || oDa.Cmd == 'Calling')) {_context6.next = 10;break;}_context6.next = 8;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '被叫正在通话中',\n                  type: 'warn' }));case 8:_context6.next = 12;break;case 10:_context6.next = 12;return (\n\n\n\n                Utils.callInvitationPage('index', '', {\n                  message: '被叫已拒绝呼叫邀请',\n                  type: 'warn' }));case 12:_context6.next = 16;break;case 14:_context6.next = 16;return (\n\n\n\n\n                Utils.callInvitationPage('index', '', {\n                  message: '被叫已拒绝呼叫邀请',\n                  type: 'warn' }));case 16:case \"end\":return _context6.stop();}}}, _callee6);}));function LocalInvitationRefused(_x4) {return _LocalInvitationRefused.apply(this, arguments);}return LocalInvitationRefused;}(),\n\n\n\n\n  // 返回给被叫：接受呼叫邀请成功\n  RemoteInvitationAccepted: function RemoteInvitationAccepted(data) {\n    __f__(\"log\", '返回给被叫：接受呼叫邀请成功', data, \" at until/until.js:279\");\n    // 正在通话\n    uni.$emit('isCalling', true);\n    // 数据组装\n    var oRes = data.response ? JSON.parse(data.response) : {};\n    var oData = Object.assign({}, JSON.parse(data.content), oRes);\n    // 进入 rtc 视频通话\n    Utils.callVideoPage('rtc', {\n      calleeId: data.callerId,\n      content: JSON.stringify(oData) });\n\n  },\n  // 返回给被叫：主叫已取消呼叫邀请\n  RemoteInvitationCanceled: function () {var _RemoteInvitationCanceled = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(data) {return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n              __f__(\"log\", '主叫已取消呼叫邀请', data, \" at until/until.js:293\");\n              // 还原\n              _context7.next = 3;return Utils.restoreAll();case 3:_context7.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '主叫已取消呼叫邀请',\n                  type: 'warn' }));case 5:case \"end\":return _context7.stop();}}}, _callee7);}));function RemoteInvitationCanceled(_x5) {return _RemoteInvitationCanceled.apply(this, arguments);}return RemoteInvitationCanceled;}(),\n\n\n  // 返回给被叫：来自主叫的呼叫邀请进程失败\n  RemoteInvitationFailure: function () {var _RemoteInvitationFailure = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(data) {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:if (\n              Store.isCalling) {_context8.next = 5;break;}_context8.next = 3;return (\n\n                Utils.restoreAll());case 3:_context8.next = 5;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: '主叫的呼叫邀请进程失败',\n                  type: 'error' }));case 5:case \"end\":return _context8.stop();}}}, _callee8);}));function RemoteInvitationFailure(_x6) {return _RemoteInvitationFailure.apply(this, arguments);}return RemoteInvitationFailure;}(),\n\n\n\n  // 返回给被叫：收到一个呼叫邀请\n  RemoteInvitationReceived: function () {var _RemoteInvitationReceived = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(data, refuse) {var oInfo;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n              __f__(\"log\", '收到一个呼叫邀请', data, \" at until/until.js:316\");\n              // 判断当前用户是否正在通话中\n              if (!Store.isCalling) {_context9.next = 6;break;}_context9.next = 4;return (\n\n                refuse(data.callerId, {\n                  refuseId: data.callerId,\n                  Reason: \"calling\",\n                  Cmd: \"Calling\" }));case 4:_context9.next = 17;break;case 6:_context9.next = 8;return (\n\n\n\n                JSON.parse(data.content));case 8:oInfo = _context9.sent;\n              Store.conference = oInfo.Conference;\n              // uniapp 当前项目仅有 p2p 通话\n              if (!oInfo.Conference) {_context9.next = 14;break;}\n              setTimeout(function () {\n                // 多人通话(拒绝通话)\n                refuse(data.callerId, {\n                  refuseId: data.callerId });\n\n              }, 1500);_context9.next = 17;break;case 14:\n\n\n              // 正在通话\n              uni.$emit('isCalling', true);_context9.next = 17;return (\n                Utils.callInvitationPage('rtmPage', {\n                  mode: oInfo.Mode === 0 ? '视频' : '语音',\n                  type: '被叫',\n                  uid: data.callerId }));case 17:case \"end\":return _context9.stop();}}}, _callee9);}));function RemoteInvitationReceived(_x7, _x8) {return _RemoteInvitationReceived.apply(this, arguments);}return RemoteInvitationReceived;}(),\n\n\n\n\n  // 返回给被叫：拒绝呼叫邀请成功\n  RemoteInvitationRefused: function () {var _RemoteInvitationRefused = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(data) {return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n              __f__(\"log\", '拒绝呼叫邀请成功', data, Store.isCalling, \" at until/until.js:351\");if (\n              Store.isCalling) {_context10.next = 7;break;}\n              __f__(\"log\", '拒绝呼叫邀请成功', data, \" at until/until.js:353\");\n              // // 还原\n              _context10.next = 5;return Utils.restoreAll();case 5:_context10.next = 7;return (\n\n                Utils.callInvitationPage('index', '', {\n                  message: Store.conference ? '当前不支持多人呼叫，已拒绝' : '拒绝呼叫邀请成功',\n                  type: 'success' }));case 7:case \"end\":return _context10.stop();}}}, _callee10);}));function RemoteInvitationRefused(_x9) {return _RemoteInvitationRefused.apply(this, arguments);}return RemoteInvitationRefused;}() };\n\n\n\n\n// RTC 工具封装\nexports.RTMUtils = RTMUtils;var RTCUtils = {\n  // 发生警告\n  Warning: function Warning(code) {\n    // 消息提醒\n    Utils.hintRTCInfo(_rtccode.default.warning[Number(code)] || '未知警告', 'warn');\n  },\n  // 发生错误\n  Error: function Error(code) {\n    // 消息提醒\n    Utils.hintRTCInfo(_rtccode.default.errore[Number(code)] || '未知错误', 'error');\n  },\n  // 网络连接状态已改变\n  ConnectionStateChanged: function ConnectionStateChanged(res) {\n    // 消息提醒\n    Utils.hintRTCInfo(['当前网络连接状态：' + (_rtccode.default.connectionState.states[res.state] || '未知状态'), '络连接状态发生改变原因：' + (\n    _rtccode.default.connectionState.reason[res.reason] || '未知原因')]);\n\n  },\n  // 远端视频变化\n  RemoteVideoStateChanged: function RemoteVideoStateChanged(res) {\n    // 消息提醒\n    Utils.hintRTCInfo(['当前状态：' + (_rtccode.default.remoteVideoState.status[res.state] || '未知状态'), '原因：' + (_rtccode.default.\n    remoteVideoState.reson[res.reason] || '未知原因')]);\n  },\n  // 挂断电话，返回首页\n  destroyRtc: function destroyRtc() {\n    // 还原\n    Utils.restoreAll();\n    // 返回首页\n    uni.redirectTo({\n      url: 'index?state=end',\n      success: function success(res) {\n        __f__(\"log\", \"成功\", res, \" at until/until.js:397\");\n      },\n      fail: function fail(res) {\n        __f__(\"log\", \"失败\", res, \" at until/until.js:400\");\n      } });\n\n  } };\n\n\n// 监测 是否正在通话\nexports.RTCUtils = RTCUtils;uni.$on(\"isCalling\", function (deta) {\n  Store.isCalling = deta;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvdW50aWwuanMiXSwibmFtZXMiOlsiU3RvcmUiLCJpc0NhbGxpbmciLCJjb25mZXJlbmNlIiwicG9wdXBUaW1lciIsIlV0aWxzIiwiZXF1aXBtZW50IiwidW5pIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybSIsInJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbiIsIm9hIiwib2IiLCJoaW50SW5mbyIsInBlcm1pc2lvbklEIiwidHlwZSIsImxpYmUiLCJyZXN1bHQiLCJzdHJTdGF0dXMiLCJwZXJtaXNpb24iLCJqdWRnZUlvc1Blcm1pc3Npb24iLCJnZXRFbCIsImVsIiwiV1hFbnZpcm9ubWVudCIsInJlZiIsIkhUTUxFbGVtZW50IiwiJGVsIiwiZ2VuZXJhdGVOdW1iZXIiLCJsZW4iLCJudW1MZW4iLCJnZW5lcmF0ZU51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwicG93IiwibWVzc2FnZSIsImR1cmF0aW9uIiwib1N1YklkIiwic3RvcmUiLCJzdGF0ZSIsInBvcHViSWQiLCJzdWJOVnVlIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJzaG93IiwiJGVtaXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGlkZSIsImhpbnRSVENJbmZvIiwicmVzdG9yZUFsbCIsImNhbGxJbnZpdGF0aW9uUGFnZSIsInBhdGgiLCJpbmZvIiwiaGludCIsIm9JbmZvIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0VG8iLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImNhbGxWaWRlb1BhZ2UiLCJSVE1VdGlscyIsInVzZUxvZ2luIiwiY29kZSIsInVpZCIsImRpc3BhdGNoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiQ29ubmVjdGlvblN0YXRlQ2hhbmdlZCIsInJlYXNvbiIsIm9TdGF0ZSIsIm9SZWFzb24iLCJQZWVyTWVzc2FnZVJlY2VpdmVkIiwicGVlcklkIiwicGFyc2UiLCJDbWQiLCJMb2NhbEludml0YXRpb25BY2NlcHRlZCIsImRhdGEiLCJvUmVzIiwicmVzcG9uc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250ZW50Iiwib0RhdGEiLCJjYWxsZWVJZCIsIkxvY2FsSW52aXRhdGlvbkNhbmNlbGVkIiwiTG9jYWxJbnZpdGF0aW9uRmFpbHVyZSIsIkxvY2FsSW52aXRhdGlvblJlY2VpdmVkQnlQZWVyIiwib0NvbnQiLCJtb2RlIiwiTW9kZSIsIkxvY2FsSW52aXRhdGlvblJlZnVzZWQiLCJvRGEiLCJSZWFzb24iLCJSZW1vdGVJbnZpdGF0aW9uQWNjZXB0ZWQiLCJjYWxsZXJJZCIsIlJlbW90ZUludml0YXRpb25DYW5jZWxlZCIsIlJlbW90ZUludml0YXRpb25GYWlsdXJlIiwiUmVtb3RlSW52aXRhdGlvblJlY2VpdmVkIiwicmVmdXNlIiwicmVmdXNlSWQiLCJDb25mZXJlbmNlIiwiUmVtb3RlSW52aXRhdGlvblJlZnVzZWQiLCJSVENVdGlscyIsIldhcm5pbmciLCJSVENjb2RlIiwid2FybmluZyIsIk51bWJlciIsIkVycm9yIiwiZXJyb3JlIiwiY29ubmVjdGlvblN0YXRlIiwic3RhdGVzIiwiUmVtb3RlVmlkZW9TdGF0ZUNoYW5nZWQiLCJyZW1vdGVWaWRlb1N0YXRlIiwic3RhdHVzIiwicmVzb24iLCJkZXN0cm95UnRjIiwiJG9uIiwiZGV0YSJdLCJtYXBwaW5ncyI6IjRSQUFBO0FBQ0E7QUFDQSxtRjtBQUNBLElBQU1BLEtBQUssR0FBRztBQUNiO0FBQ0FDLFdBQVMsRUFBRSxLQUZFO0FBR2I7QUFDQUMsWUFBVSxFQUFFLEtBSkM7QUFLYjtBQUNBQyxZQUFVLEVBQUUsSUFOQyxFQUFkOzs7QUFTQTtBQUNBLElBQU1DLEtBQUssR0FBRztBQUNiO0FBQ01DLFdBRk8sdUJBRUs7O0FBRWJDLGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixJQUFvQyxLQUZ2Qjs7QUFJREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsRUFBZ0QsSUFBaEQsQ0FKQyxTQUlaQyxFQUpZOztB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O0FBa0JoQjtBQUNBMkMseUJBQXVCLEVBQUUsaUNBQVN2RCxHQUFULEVBQWM7QUFDdEM7QUFDQXZELFNBQUssQ0FBQzJDLFdBQU4sQ0FBa0IsQ0FBQyxXQUFXNEQsaUJBQVFRLGdCQUFSLENBQXlCQyxNQUF6QixDQUFnQ3pELEdBQUcsQ0FBQ3JCLEtBQXBDLEtBQThDLE1BQXpELENBQUQsRUFBbUUsU0FBU3FFO0FBQzVGUSxvQkFENEYsQ0FDM0VFLEtBRDJFLENBQ3JFMUQsR0FBRyxDQUFDWSxNQURpRSxLQUN0RCxNQUQ2QyxDQUFuRSxDQUFsQjtBQUVBLEdBdkJlO0FBd0JoQjtBQUNBK0MsWUFBVSxFQUFFLHNCQUFXO0FBQ3RCO0FBQ0FsSCxTQUFLLENBQUM0QyxVQUFOO0FBQ0E7QUFDQTFDLE9BQUcsQ0FBQ2tELFVBQUosQ0FBZTtBQUNkQyxTQUFHLEVBQUUsaUJBRFM7QUFFZEMsYUFGYyxtQkFFTkMsR0FGTSxFQUVEO0FBQ1oscUJBQVksSUFBWixFQUFrQkEsR0FBbEI7QUFDQSxPQUphO0FBS2RDLFVBTGMsZ0JBS1RELEdBTFMsRUFLSjtBQUNULHFCQUFZLElBQVosRUFBa0JBLEdBQWxCO0FBQ0EsT0FQYSxFQUFmOztBQVNBLEdBdENlLEVBQWpCOzs7QUF5Q0E7NEJBQ0FyRCxHQUFHLENBQUNpSCxHQUFKLENBQVEsV0FBUixFQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUJ4SCxPQUFLLENBQUNDLFNBQU4sR0FBa0J1SCxJQUFsQjtBQUNBLENBRkQsRSIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleC5qcyc7XHJcbmltcG9ydCBwZXJtaXNpb24gZnJvbSBcIi4uL2pzX3Nkay93YS1wZXJtaXNzaW9uL3Blcm1pc3Npb24uanNcIjtcclxuaW1wb3J0IFJUQ2NvZGUgZnJvbSBcIi4vcnRjY29kZS5qc1wiO1xyXG5jb25zdCBTdG9yZSA9IHtcclxuXHQvLyDmmK/lkKbmraPlnKjpgJror53kuK1cclxuXHRpc0NhbGxpbmc6IGZhbHNlLFxyXG5cdC8vIOWIpOaWrSDlpJrkurrlkbzlj6tcclxuXHRjb25mZXJlbmNlOiBmYWxzZSxcclxuXHQvLyDmj5DnpLrmoYblrprml7blmajorrDlvZVcclxuXHRwb3B1cFRpbWVyOiBudWxsLFxyXG5cclxufVxyXG4vLyDlhajlsYDlt6XlhbflsIHoo4VcclxuY29uc3QgVXRpbHMgPSB7XHJcblx0Ly8g5bmz5Y+w5YiG57G75p+l6K+i5p2D6ZmQXHJcblx0YXN5bmMgZXF1aXBtZW50KCkge1xyXG5cdFx0Ly8g5p+l55yL5p2D6ZmQXHJcblx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcclxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiY2FtZXJhXCIsICdpb3MnLCAn55u45py6Jyk7XHJcblx0XHRcdC8v5p+l55yL5b2V6Z+z5p2D6ZmQXHJcblx0XHRcdGxldCBvYiA9IGF3YWl0IFV0aWxzLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcInJlY29yZFwiLCAnaW9zJywgJ+W9lemfsycpO1xyXG5cdFx0XHRhd2FpdCBVdGlscy5oaW50SW5mbyhbb2EsIG9iXSlcclxuXHJcblx0XHR9IGVsc2UgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcclxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLCAnYW5kcm9pZCcsICfnm7jmnLonKTtcclxuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcclxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJT1wiLCAnYW5kcm9pZCcsICflvZXpn7MnKTtcclxuXHRcdFx0YXdhaXQgVXRpbHMuaGludEluZm8oW29hLCBvYl0pXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDmn6Xor6LmnYPpmZDlsIHoo4VcclxuXHRhc3luYyByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24ocGVybWlzaW9uSUQsIHR5cGUsIGxpYmUpIHtcclxuXHRcdGxldCByZXN1bHQgPSAwO1xyXG5cdFx0bGV0IHN0clN0YXR1cyA9IFwiXCI7XHJcblx0XHR0eXBlID09ICdpb3MnID8gcmVzdWx0ID0gYXdhaXQgcGVybWlzaW9uLmp1ZGdlSW9zUGVybWlzc2lvbihwZXJtaXNpb25JRCkgOiByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb25cclxuXHRcdFx0LnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcclxuXHRcdFx0XHRwZXJtaXNpb25JRCk7XHJcblx0XHRpZiAocmVzdWx0ID09IDEpIHtcclxuXHRcdFx0c3RyU3RhdHVzID0gXCLlt7LojrflvpfmjojmnYMs5Y+v5q2j5bi45L2/55SoXCJcclxuXHRcdH0gZWxzZSBpZiAocmVzdWx0ID09IDApIHtcclxuXHRcdFx0c3RyU3RhdHVzID0gXCLmnKrojrflvpfmjojmnYMs5peg5rOV5L2/55SoXCJcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0clN0YXR1cyA9IFwi6KKr5rC45LmF5ouS57ud5p2D6ZmQLOaXoOazleS9v+eUqFwiXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGxpYmUgKyBzdHJTdGF0dXNcclxuXHR9LFxyXG5cdC8vIOiOt+WPluWFg+e0oFxyXG5cdGdldEVsKGVsKSB7XHJcblx0XHRpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWwgPT09ICdudW1iZXInKSByZXR1cm4gZWw7XHJcblx0XHRpZiAoV1hFbnZpcm9ubWVudCkge1xyXG5cdFx0XHRyZXR1cm4gZWwucmVmO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbCA6IGVsLiRlbDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIOeUn+aIkHVpZFxyXG5cdGdlbmVyYXRlTnVtYmVyKGxlbikge1xyXG5cdFx0bGV0IG51bUxlbiA9IGxlbiB8fCA4O1xyXG5cdFx0bGV0IGdlbmVyYXRlTnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygxMCwgbnVtTGVuKSk7XHJcblx0XHRyZXR1cm4gZ2VuZXJhdGVOdW0gPCBNYXRoLnBvdygxMCwgbnVtTGVuIC0gMSkgP1xyXG5cdFx0XHRVdGlscy5nZW5lcmF0ZU51bWJlcihudW1MZW4pIDpcclxuXHRcdFx0Z2VuZXJhdGVOdW07XHJcblx0fSxcclxuXHQvLyDlhajlsYB2dWXmj5DnpLrkv6Hmga8gdHlwZTogc3VjY2VzcyB3YXJuIGVycm9yIGluZm9cclxuXHRoaW50SW5mbyhtZXNzYWdlLCB0eXBlID0gJ2luZm8nLCBkdXJhdGlvbiA9IDMwMDApIHtcclxuXHRcdGNvbnN0IG9TdWJJZCA9IHN0b3JlLnN0YXRlLnBvcHViSWQgfHwgJ3BvUHVwJztcclxuXHRcdC8vIC8vIOmAmui/hyBpZCDojrflj5YgbnZ1ZSDlrZDnqpfkvZNcclxuXHRcdGNvbnN0IHN1Yk5WdWUgPSB1bmkuZ2V0U3ViTlZ1ZUJ5SWQob1N1YklkKTtcclxuXHRcdGlmIChzdWJOVnVlKSB7XHJcblx0XHRcdC8vIOaJk+W8gCBudnVlIOWtkOeql+S9k1xyXG5cdFx0XHRzdWJOVnVlLnNob3coJ2ZhZGUtaW4nLCAzMDApO1xyXG5cdFx0XHR1bmkuJGVtaXQoJ3BhbHRmcm9tLXBvcHVwJywge1xyXG5cdFx0XHRcdHR5cGUsXHJcblx0XHRcdFx0bWVzc2FnZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g5YWz6ZetIG52dWUg5a2Q56qX5L2TXHJcblx0XHRcdFN0b3JlLnBvcHVwVGltZXIgJiYgY2xlYXJUaW1lb3V0KFN0b3JlLnBvcHVwVGltZXIpO1xyXG5cdFx0XHRTdG9yZS5wb3B1cFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c3ViTlZ1ZS5oaWRlKCdmYWRlLW91dCcsIDMwMCk7XHJcblx0XHRcdFx0dW5pLiRlbWl0KCdwYWx0ZnJvbS1wb3B1cCcsIHtcclxuXHRcdFx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJydcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgZHVyYXRpb24pXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyBSVEMg5o+Q56S65L+h5oGvKG52dWUpIHR5cGU6IHN1Y2Nlc3Mgd2FybiBlcnJvciBpbmZvXHJcblx0aGludFJUQ0luZm8obWVzc2FnZSwgdHlwZSA9ICdpbmZvJywgZHVyYXRpb24gPSAzMDAwKSB7XHJcblx0XHQvLyAvLyDpgJrov4cgaWQg6I635Y+WIG52dWUg5a2Q56qX5L2TXHJcblx0XHRjb25zdCBzdWJOVnVlID0gdW5pLmdldFN1Yk5WdWVCeUlkKCdwb1B1cC1ydG0nKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHN1Yk5WdWUpO1xyXG5cdFx0Ly8g5omT5byAIG52dWUg5a2Q56qX5L2TICBcclxuXHRcdHN1Yk5WdWUuc2hvdygnZmFkZS1pbicsIDMwMCk7XHJcblx0XHR1bmkuJGVtaXQoJ3BhbHRmcm9tLXBvcHVwJywge1xyXG5cdFx0XHR0eXBlLFxyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHR9KTtcclxuXHRcdC8vIOWFs+mXrSBudnVlIOWtkOeql+S9kyAgXHJcblx0XHRTdG9yZS5wb3B1cFRpbWVyICYmIGNsZWFyVGltZW91dChTdG9yZS5wb3B1cFRpbWVyKTtcclxuXHRcdFN0b3JlLnBvcHVwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0c3ViTlZ1ZS5oaWRlKCdmYWRlLW91dCcsIDMwMCk7XHJcblx0XHR9LCBkdXJhdGlvbilcclxuXHR9LFxyXG5cdC8vIOi/mOWOnyh2dWUpXHJcblx0cmVzdG9yZUFsbCgpIHtcclxuXHRcdC8vIOmAmuivnee7k+adn1xyXG5cdFx0dW5pLiRlbWl0KCdpc0NhbGxpbmcnLCBmYWxzZSk7XHJcblx0fSxcclxuXHQvLyDlkbzlj6vpgoDor7fpobXpnaIodnVlKSBwYXRoIFxyXG5cdGNhbGxJbnZpdGF0aW9uUGFnZShwYXRoID0gJ2luZGV4JywgaW5mbyA9ICcnLCBoaW50ID0gJycpIHtcclxuXHRcdGNvbnN0IG9JbmZvID0gaW5mbyA/IEpTT04uc3RyaW5naWZ5KGluZm8pIDogJyc7XHJcblx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdHVybDogcGF0aCArIChvSW5mbyA/ICc/aW5mbz0nICsgb0luZm8gOiAnJyksXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+aIkOWKnycsIHJlcyk7XHJcblx0XHRcdFx0Ly8g5o+Q56S6XHJcblx0XHRcdFx0aWYgKGhpbnQpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRVdGlscy5oaW50SW5mbyhoaW50Lm1lc3NhZ2UsIGhpbnQudHlwZSk7XHJcblx0XHRcdFx0XHR9LCAyMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWksei0pVwiLCByZXMpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDop4bpopHpgJror53pobXpnaIobnZ1ZSlcclxuXHRjYWxsVmlkZW9QYWdlKHBhdGgsIGluZm8gPSAnJykge1xyXG5cdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgnQ2F2YXNWaWV3UlRDJyk7XHJcblx0XHQvLyDmmL7npLpcclxuXHRcdGlmIChwYXRoID09PSAncnRjJykge1xyXG5cdFx0XHR1bmkuJGVtaXQoJ0NhdmFzVmlld1J0YycsIGluZm8pO1xyXG5cdFx0XHRzdWJOVnVlLnNob3coJ2ZhZGUtaW4nLCAzMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5pLiRlbWl0KCdDYXZhc1ZpZXdSdGMnLCBcIlwiKTtcclxuXHRcdFx0c3ViTlZ1ZS5oaWRlKCdmYWRlLW91dCcsIDMwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi8vIFJUTSDlt6XlhbflsIHoo4VcclxuY29uc3QgUlRNVXRpbHMgPSB7XHJcblx0Ly8g5Yik5pat5piv5ZCm6LCD55SoIGxvZ2luIOaIkOWKn1xyXG5cdHVzZUxvZ2luOiBmdW5jdGlvbihjb2RlLCB1aWQpIHtcclxuXHJcblx0XHRpZiAoY29kZSA9PSAwKSB7XHJcblx0XHRcdHN0b3JlLmRpc3BhdGNoKCd1cERhdGFVSWQnLCB1aWQpO1xyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+eZu+W9leaIkOWKnycsXHJcblx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG5cdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIFNESyDkuI4gUlRNIOezu+e7n+eahOi/nuaOpeeKtuaAgeWPkeeUn+aUueWPmFxyXG5cdENvbm5lY3Rpb25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKHN0YXRlLCByZWFzb24pIHtcclxuXHRcdC8vIOaWsOi/nuaOpeeKtuaAgSBzdGF0ZVxyXG5cdFx0bGV0IG9TdGF0ZSA9IFsnJywgJ+WIneWni+eKtuaAgeOAglNESyDmnKrov57mjqXliLAgUlRNIOezu+e7nycsICdTREsg5q2j5Zyo55m75b2VIEFSIFJUTSDns7vnu58nLCAnU0RLIOW3sueZu+W9lSBSVE0g57O757ufJyxcclxuXHRcdFx0J1NESyDkuI4gUlRNIOezu+e7n+i/nuaOpeeUseS6jue9kee7nOWOn+WboOWHuueOsOS4reaWre+8jFNESyDmraPlnKjlsJ3or5Xoh6rliqjph43ov54gUlRNIOezu+e7nycsICdTREsg5YGc5q2i55m75b2VIFJUTSDns7vnu58nXHJcblx0XHRdO1xyXG5cdFx0Ly8g6L+e5o6l54q25oCB5pS55Y+Y5Y6f5ZugIHJlYXNvblxyXG5cdFx0bGV0IG9SZWFzb24gPSBbJycsICdTREsg5q2j5Zyo55m75b2VIFJUTSDns7vnu58nLCAnU0RLIOeZu+W9lSBSVE0g57O757uf5oiQ5YqfJywgJ1NESyDnmbvlvZUgUlRNIOezu+e7n+Wksei0pScsXHJcblx0XHRcdCdTREsg5peg5rOV55m75b2VIEFSIFJUTSDns7vnu5/otoXov4cgNiDnp5LvvIzlgZzmraLnmbvlvZUnLCAnU0RLIOS4jiBSVE0g57O757uf55qE6L+e5o6l6KKr5Lit5patJywgJ+eUqOaIt+W3suiwg+eUqCBsb2dvdXQoKSDmlrnms5Xnmbvlh7ogUlRNIOezu+e7nycsXHJcblx0XHRcdCdTREsg6KKr5pyN5Yqh5Zmo56aB5q2i55m75b2VIFJUTSDns7vnu58nLCAn5Y+m5LiA5Liq55So5oi35q2j5Lul55u45ZCM55qE55So5oi3IElEIOeZu+mZhiBSVE0g57O757ufJyxcclxuXHRcdF07XHJcblx0XHQvLyDmtojmga/mj5DphpJcclxuXHRcdFV0aWxzLmhpbnRJbmZvKFsn6L+e5o6l54q25oCB77yaJyArIG9TdGF0ZVtzdGF0ZV0sICfmlLnlj5jljp/lm6DvvJonICsgb1JlYXNvbltyZWFzb25dXSk7XHJcblx0fSxcclxuXHQvLyDmlLbliLDngrnlr7nngrnmtojmga/lm57osINcclxuXHRQZWVyTWVzc2FnZVJlY2VpdmVkOiBmdW5jdGlvbihtZXNzYWdlLCBwZWVySWQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5pS25Yiw54K55a+554K55raI5oGv5Zue6LCDXCIsIG1lc3NhZ2UsIHBlZXJJZCk7XHJcblx0XHRjb25zdCBvSW5mbyA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcblx0XHQvLyBSVEMg6KeG6aKR6YCa6K+d6L2s6K+t6Z+z6YCa6K+dXHJcblx0XHRpZiAob0luZm8uQ21kID09IFwiU3dpdGNoQXVkaW9cIikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlJUQyDop4bpopHpgJror53ovazor63pn7PpgJror51cIik7XHJcblx0XHRcdHVuaS4kZW1pdChcInJ0Yy1Td2l0Y2hBdWRpb1wiLCB7XHJcblx0XHRcdFx0bWVzc2FnZTogXCJTd2l0Y2hBdWRpb1wiLFxyXG5cdFx0XHRcdHBlZXJJZDogcGVlcklkXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIFJUQyDmjILmlq1cclxuXHRcdH0gZWxzZSBpZiAob0luZm8uQ21kID09IFwiRW5kQ2FsbFwiKSB7XHJcblx0XHRcdHVuaS4kZW1pdChcInJ0Yy1lbmRjYWxsXCIsIHtcclxuXHRcdFx0XHRtZXNzYWdlOiBcIkVuZENhbGxcIixcclxuXHRcdFx0XHRwZWVySWQ6IHBlZXJJZFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nkuLvlj6vvvJrooqvlj6vlt7LmjqXlj5flkbzlj6vpgoDor7dcclxuXHRMb2NhbEludml0YXRpb25BY2NlcHRlZDogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+i/lOWbnue7meS4u+WPq++8muiiq+WPq+W3suaOpeWPl+WRvOWPq+mCgOivtycsIGRhdGEpO1xyXG5cdFx0Ly8g5q2j5Zyo6YCa6K+dXHJcblx0XHR1bmkuJGVtaXQoJ2lzQ2FsbGluZycsIHRydWUpO1xyXG5cdFx0Ly8g5pWw5o2u57uE6KOFXHJcblx0XHRjb25zdCBvUmVzID0gZGF0YS5yZXNwb25zZSA/IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZSkgOiB7fTtcclxuXHRcdGNvbnN0IG9EYXRhID0gYXdhaXQgT2JqZWN0LmFzc2lnbih7fSwgSlNPTi5wYXJzZShkYXRhLmNvbnRlbnQpLCBvUmVzKTtcclxuXHRcdC8vIOi/m+WFpSBydGMg6KeG6aKR6YCa6K+dXHJcblx0XHRhd2FpdCBVdGlscy5jYWxsVmlkZW9QYWdlKCdydGMnLCB7XHJcblx0XHRcdGNhbGxlZUlkOiBkYXRhLmNhbGxlZUlkLFxyXG5cdFx0XHRjb250ZW50OiBKU09OLnN0cmluZ2lmeShvRGF0YSksXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g6L+U5Zue57uZ5Li75Y+r77ya5ZG85Y+r6YKA6K+35bey6KKr5Y+W5raIXHJcblx0TG9jYWxJbnZpdGF0aW9uQ2FuY2VsZWQ6IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKCflkbzlj6vpgoDor7flt7Llj5bmtognLCBkYXRhKTtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0YXdhaXQgVXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+35Zue6YCA5Yiw6aaW6aG1XHJcblx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0bWVzc2FnZTogJ+WRvOWPq+mCgOivt+W3suWPlua2iCjkuLvliqjmjILmlq3miJblr7nmlrnlt7Lnprvnur8pJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOi/lOWbnue7meS4u+WPq++8muWRvOWPq+mCgOivt+i/m+eoi+Wksei0pVxyXG5cdExvY2FsSW52aXRhdGlvbkZhaWx1cmU6IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKCflkbzlj6vpgoDor7fov5vnqIvlpLHotKUnLCBkYXRhKTtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0YXdhaXQgVXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+35Zue6YCA5Yiw6aaW6aG1XHJcblx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0bWVzc2FnZTogJ+WRvOWPq+mCgOivt+i/m+eoi+Wksei0pScsXHJcblx0XHRcdHR5cGU6ICdlcnJvcidcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8g6L+U5Zue57uZ5Li75Y+r77ya6KKr5Y+r5bey5pS25Yiw5ZG85Y+r6YKA6K+3XHJcblx0TG9jYWxJbnZpdGF0aW9uUmVjZWl2ZWRCeVBlZXI6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmIChkYXRhLnN0YXRlID09IDIpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+iiq+WPq+W3suaUtuWIsOWRvOWPq+mCgOivtycsIGRhdGEpO1xyXG5cdFx0XHQvLyDmraPlnKjpgJror51cclxuXHRcdFx0Y29uc3Qgb0NvbnQgPSBKU09OLnBhcnNlKGRhdGEuY29udGVudClcclxuXHRcdFx0Ly8g6L+b5YWl5ZG85Y+r6YKA6K+3XHJcblx0XHRcdFV0aWxzLmNhbGxJbnZpdGF0aW9uUGFnZSgncnRtUGFnZScsIHtcclxuXHRcdFx0XHRtb2RlOiBvQ29udC5Nb2RlID09PSAwID8gJ+inhumikScgOiAn6K+t6Z+zJyxcclxuXHRcdFx0XHR0eXBlOiAn5Li75Y+rJyxcclxuXHRcdFx0XHR1aWQ6IGRhdGEuY2FsbGVlSWQsXHJcblx0XHRcdH0pXHJcblx0XHRcdHVuaS4kZW1pdCgnaXNDYWxsaW5nJywgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nkuLvlj6vvvJrooqvlj6vlt7Lmi5Lnu53lkbzlj6vpgoDor7dcclxuXHRMb2NhbEludml0YXRpb25SZWZ1c2VkOiBhc3luYyBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZygn6KKr5Y+r5bey5ouS57ud5ZG85Y+r6YKA6K+3JywgZGF0YSk7XHJcblx0XHQvLyDov5jljp9cclxuXHRcdGF3YWl0IFV0aWxzLnJlc3RvcmVBbGwoKTtcclxuXHRcdGlmIChkYXRhLnJlc3BvbnNlKSB7XHJcblx0XHRcdGNvbnN0IG9EYSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZSk7XHJcblx0XHRcdGlmIChvRGEuUmVhc29uID09ICdjYWxsaW5nJyB8fCBvRGEuQ21kID09ICdDYWxsaW5nJykge1xyXG5cdFx0XHRcdC8vIOWFs+mXreWRvOWPq+mCgOivt1xyXG5cdFx0XHRcdGF3YWl0IFV0aWxzLmNhbGxJbnZpdGF0aW9uUGFnZSgnaW5kZXgnLCAnJywge1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ+iiq+WPq+ato+WcqOmAmuivneS4rScsXHJcblx0XHRcdFx0XHR0eXBlOiAnd2FybidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyDlhbPpl63lkbzlj6vpgoDor7dcclxuXHRcdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICfooqvlj6vlt7Lmi5Lnu53lkbzlj6vpgoDor7cnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ3dhcm4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIOWFs+mXreWRvOWPq+mCgOivt1xyXG5cdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0XHRtZXNzYWdlOiAn6KKr5Y+r5bey5ouS57ud5ZG85Y+r6YKA6K+3JyxcclxuXHRcdFx0XHR0eXBlOiAnd2FybidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8g6L+U5Zue57uZ6KKr5Y+r77ya5o6l5Y+X5ZG85Y+r6YKA6K+35oiQ5YqfXHJcblx0UmVtb3RlSW52aXRhdGlvbkFjY2VwdGVkOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZygn6L+U5Zue57uZ6KKr5Y+r77ya5o6l5Y+X5ZG85Y+r6YKA6K+35oiQ5YqfJywgZGF0YSk7XHJcblx0XHQvLyDmraPlnKjpgJror51cclxuXHRcdHVuaS4kZW1pdCgnaXNDYWxsaW5nJywgdHJ1ZSk7XHJcblx0XHQvLyDmlbDmja7nu4Too4VcclxuXHRcdGNvbnN0IG9SZXMgPSBkYXRhLnJlc3BvbnNlID8gSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlKSA6IHt9O1xyXG5cdFx0Y29uc3Qgb0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBKU09OLnBhcnNlKGRhdGEuY29udGVudCksIG9SZXMpO1xyXG5cdFx0Ly8g6L+b5YWlIHJ0YyDop4bpopHpgJror51cclxuXHRcdFV0aWxzLmNhbGxWaWRlb1BhZ2UoJ3J0YycsIHtcclxuXHRcdFx0Y2FsbGVlSWQ6IGRhdGEuY2FsbGVySWQsXHJcblx0XHRcdGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KG9EYXRhKSxcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrkuLvlj6vlt7Llj5bmtojlkbzlj6vpgoDor7dcclxuXHRSZW1vdGVJbnZpdGF0aW9uQ2FuY2VsZWQ6IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKCfkuLvlj6vlt7Llj5bmtojlkbzlj6vpgoDor7cnLCBkYXRhKTtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0YXdhaXQgVXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+3XHJcblx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0bWVzc2FnZTogJ+S4u+WPq+W3suWPlua2iOWRvOWPq+mCgOivtycsXHJcblx0XHRcdHR5cGU6ICd3YXJuJ1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrmnaXoh6rkuLvlj6vnmoTlkbzlj6vpgoDor7fov5vnqIvlpLHotKVcclxuXHRSZW1vdGVJbnZpdGF0aW9uRmFpbHVyZTogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYgKCFTdG9yZS5pc0NhbGxpbmcpIHtcclxuXHRcdFx0Ly8g6L+Y5Y6fXHJcblx0XHRcdGF3YWl0IFV0aWxzLnJlc3RvcmVBbGwoKTtcclxuXHRcdFx0Ly8g5YWz6Zet5ZG85Y+r6YKA6K+35Zue6YCA5Yiw6aaW6aG1XHJcblx0XHRcdGF3YWl0IFV0aWxzLmNhbGxJbnZpdGF0aW9uUGFnZSgnaW5kZXgnLCAnJywge1xyXG5cdFx0XHRcdG1lc3NhZ2U6ICfkuLvlj6vnmoTlkbzlj6vpgoDor7fov5vnqIvlpLHotKUnLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcidcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrmlLbliLDkuIDkuKrlkbzlj6vpgoDor7dcclxuXHRSZW1vdGVJbnZpdGF0aW9uUmVjZWl2ZWQ6IGFzeW5jIGZ1bmN0aW9uKGRhdGEsIHJlZnVzZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+aUtuWIsOS4gOS4quWRvOWPq+mCgOivtycsIGRhdGEpO1xyXG5cdFx0Ly8g5Yik5pat5b2T5YmN55So5oi35piv5ZCm5q2j5Zyo6YCa6K+d5LitXHJcblx0XHRpZiAoU3RvcmUuaXNDYWxsaW5nKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCfliY3nlKjmiLfmraPlnKjpgJror53kuK0nKTtcclxuXHRcdFx0YXdhaXQgcmVmdXNlKGRhdGEuY2FsbGVySWQsIHtcclxuXHRcdFx0XHRyZWZ1c2VJZDogZGF0YS5jYWxsZXJJZCxcclxuXHRcdFx0XHRSZWFzb246IFwiY2FsbGluZ1wiLFxyXG5cdFx0XHRcdENtZDogXCJDYWxsaW5nXCIsXHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyDkuLvlj6vpmYTluKbkv6Hmga9cclxuXHRcdFx0Y29uc3Qgb0luZm8gPSBhd2FpdCBKU09OLnBhcnNlKGRhdGEuY29udGVudCk7XHJcblx0XHRcdFN0b3JlLmNvbmZlcmVuY2UgPSBvSW5mby5Db25mZXJlbmNlXHJcblx0XHRcdC8vIHVuaWFwcCDlvZPliY3pobnnm67ku4XmnIkgcDJwIOmAmuivnVxyXG5cdFx0XHRpZiAob0luZm8uQ29uZmVyZW5jZSkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g5aSa5Lq66YCa6K+dKOaLkue7nemAmuivnSlcclxuXHRcdFx0XHRcdHJlZnVzZShkYXRhLmNhbGxlcklkLCB7XHJcblx0XHRcdFx0XHRcdHJlZnVzZUlkOiBkYXRhLmNhbGxlcklkLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgMTUwMClcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8g5q2j5Zyo6YCa6K+dXHJcblx0XHRcdFx0dW5pLiRlbWl0KCdpc0NhbGxpbmcnLCB0cnVlKTtcclxuXHRcdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ3J0bVBhZ2UnLCB7XHJcblx0XHRcdFx0XHRtb2RlOiBvSW5mby5Nb2RlID09PSAwID8gJ+inhumikScgOiAn6K+t6Z+zJyxcclxuXHRcdFx0XHRcdHR5cGU6ICfooqvlj6snLFxyXG5cdFx0XHRcdFx0dWlkOiBkYXRhLmNhbGxlcklkLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDov5Tlm57nu5nooqvlj6vvvJrmi5Lnu53lkbzlj6vpgoDor7fmiJDlip9cclxuXHRSZW1vdGVJbnZpdGF0aW9uUmVmdXNlZDogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+aLkue7neWRvOWPq+mCgOivt+aIkOWKnycsIGRhdGEsIFN0b3JlLmlzQ2FsbGluZyk7XHJcblx0XHRpZiAoIVN0b3JlLmlzQ2FsbGluZykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5ouS57ud5ZG85Y+r6YKA6K+35oiQ5YqfJywgZGF0YSk7XHJcblx0XHRcdC8vIC8vIOi/mOWOn1xyXG5cdFx0XHRhd2FpdCBVdGlscy5yZXN0b3JlQWxsKCk7XHJcblx0XHRcdC8vIC8vIOWFs+mXreWRvOWPq+mCgOivt1xyXG5cdFx0XHRhd2FpdCBVdGlscy5jYWxsSW52aXRhdGlvblBhZ2UoJ2luZGV4JywgJycsIHtcclxuXHRcdFx0XHRtZXNzYWdlOiBTdG9yZS5jb25mZXJlbmNlID8gJ+W9k+WJjeS4jeaUr+aMgeWkmuS6uuWRvOWPq++8jOW3suaLkue7nScgOiAn5ouS57ud5ZG85Y+r6YKA6K+35oiQ5YqfJyxcclxuXHRcdFx0XHR0eXBlOiAnc3VjY2VzcydcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG4vLyBSVEMg5bel5YW35bCB6KOFXHJcbmNvbnN0IFJUQ1V0aWxzID0ge1xyXG5cdC8vIOWPkeeUn+itpuWRilxyXG5cdFdhcm5pbmc6IGZ1bmN0aW9uKGNvZGUpIHtcclxuXHRcdC8vIOa2iOaBr+aPkOmGklxyXG5cdFx0VXRpbHMuaGludFJUQ0luZm8oUlRDY29kZS53YXJuaW5nW051bWJlcihjb2RlKV0gfHwgJ+acquefpeitpuWRiicsICd3YXJuJyk7XHJcblx0fSxcclxuXHQvLyDlj5HnlJ/plJnor69cclxuXHRFcnJvcjogZnVuY3Rpb24oY29kZSkge1xyXG5cdFx0Ly8g5raI5oGv5o+Q6YaSXHJcblx0XHRVdGlscy5oaW50UlRDSW5mbyhSVENjb2RlLmVycm9yZVtOdW1iZXIoY29kZSldIHx8ICfmnKrnn6XplJnor68nLCAnZXJyb3InKTtcclxuXHR9LFxyXG5cdC8vIOe9kee7nOi/nuaOpeeKtuaAgeW3suaUueWPmFxyXG5cdENvbm5lY3Rpb25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0Ly8g5raI5oGv5o+Q6YaSXHJcblx0XHRVdGlscy5oaW50UlRDSW5mbyhbJ+W9k+WJjee9kee7nOi/nuaOpeeKtuaAge+8micgKyAoUlRDY29kZS5jb25uZWN0aW9uU3RhdGUuc3RhdGVzW3Jlcy5zdGF0ZV0gfHwgJ+acquefpeeKtuaAgScpLCAn57uc6L+e5o6l54q25oCB5Y+R55Sf5pS55Y+Y5Y6f5Zug77yaJyArXHJcblx0XHRcdChSVENjb2RlLmNvbm5lY3Rpb25TdGF0ZS5yZWFzb25bcmVzLnJlYXNvbl0gfHwgJ+acquefpeWOn+WboCcpXHJcblx0XHRdKTtcclxuXHR9LFxyXG5cdC8vIOi/nOerr+inhumikeWPmOWMllxyXG5cdFJlbW90ZVZpZGVvU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdC8vIOa2iOaBr+aPkOmGklxyXG5cdFx0VXRpbHMuaGludFJUQ0luZm8oWyflvZPliY3nirbmgIHvvJonICsgKFJUQ2NvZGUucmVtb3RlVmlkZW9TdGF0ZS5zdGF0dXNbcmVzLnN0YXRlXSB8fCAn5pyq55+l54q25oCBJyksICfljp/lm6DvvJonICsgKFJUQ2NvZGVcclxuXHRcdFx0LnJlbW90ZVZpZGVvU3RhdGUucmVzb25bcmVzLnJlYXNvbl0gfHwgJ+acquefpeWOn+WboCcpXSk7XHJcblx0fSxcclxuXHQvLyDmjILmlq3nlLXor53vvIzov5Tlm57pppbpobVcclxuXHRkZXN0cm95UnRjOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOi/mOWOn1xyXG5cdFx0VXRpbHMucmVzdG9yZUFsbCgpO1xyXG5cdFx0Ly8g6L+U5Zue6aaW6aG1XHJcblx0XHR1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdHVybDogJ2luZGV4P3N0YXRlPWVuZCcsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLmiJDlip9cIiwgcmVzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWksei0pVwiLCByZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59XHJcblxyXG4vLyDnm5HmtYsg5piv5ZCm5q2j5Zyo6YCa6K+dXHJcbnVuaS4kb24oXCJpc0NhbGxpbmdcIiwgKGRldGEpID0+IHtcclxuXHRTdG9yZS5pc0NhbGxpbmcgPSBkZXRhO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7XHJcblx0VXRpbHMsXHJcblx0UlRNVXRpbHMsXHJcblx0UlRDVXRpbHNcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!*************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/js_sdk/wa-permission/permission.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FB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QVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!*******************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/rtccode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // RTC 相关状态码\nvar code = {\n  // 警告状态码\n  warning: {\n    8: \"指定的 View 无效，使用视频功能时需要指定 view\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    20: \"请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理\",\n    103: \"没有可用的频道资源。可能是因为服务端没法分配频道资源\",\n    104: \"查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器\",\n    106: \"打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器\",\n    107: \"打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的\",\n    121: \"TICKET 非法，打开频道失败\",\n    122: \"尝试打开另一个服务器\",\n    701: \"打开伴奏出错\",\n    1014: \"音频设备模块：运行时播放设备出现警告\",\n    1016: \"音频设备模块：运行时录音设备出现警告\",\n    1019: \"音频设备模块：没有采集到有效的声音数据\",\n    1025: \"音频播放或采集被系统事件（如来电）打扰\",\n    1033: \"音频设备模块：录制设备被占用\",\n    1051: \"音频设备模块：录音声音检查到啸叫\" },\n\n  // 错误状态码\n  errore: {\n    0: \"没有错误\",\n    1: \"一般性的错误（没有明确归类的错误原因）\",\n    2: \"API 调用了无效的参数。例如指定的频道名含有非法字符\",\n    3: \"SDK 初始化失败\",\n    4: \"SDK 当前状态不支持此操作\",\n    5: \"调用被拒绝\",\n    6: \"传入的缓冲区大小不足以存放返回的数据\",\n    7: \"SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已创建 RtcEngine 对象并完成初始化\",\n    8: \"指定的 View 无效，使用视频功能时需要指定 View\",\n    9: \"没有操作权限。请检查用户是否授予 app 音视频设备使用权限\",\n    10: \"API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理时间过长，超过 10 秒没有返回，会出现此错误\",\n    11: \"请求被取消\",\n    12: \"调用频率太高\",\n    13: \"SDK 内部绑定到网络 Socket 失败\",\n    14: \"网络不可用\",\n    15: \"没有网络缓冲区可用\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    17: \"加入频道被拒绝\",\n    18: \"离开频道失败\",\n    19: \"资源已被占用，不能重复使用\",\n    101: \"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道\",\n    102: \"不是有效的频道名。请更换有效的频道名重新加入频道\",\n    110: \"开启了 token 校验但没有输入 token\",\n    111: \"网络连接中断\",\n    112: \"网络连接丢失\",\n    113: \"在调用 sendStreamMessage 时，用户不在频道内\",\n    114: \"在调用 sendStreamMessage 时，发送的数据长度大于 1024 个字节\",\n    115: \"在调用 sendStreamMessage 时，发送的数据码率超过限制（6KB/s）\",\n    116: \"在调用 createDataStream 时，创建的数据通道过多（超过 5 个通道）\",\n    120: \"解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道\",\n    123: \"此用户被服务器禁止\",\n    125: \"水印文件路径错误\",\n    134: \"无效的 User account\",\n    1001: \"加载媒体引擎失败\",\n    1002: \"启动媒体引擎开始通话失败。请尝试重新进入频道\",\n    1004: \"启动视频渲染模块失败\",\n    1005: \"音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道\",\n    1006: \"音频设备模块：使用 java 资源出现错误\",\n    1007: \"音频设备模块：设置的采样频率出现错误\",\n    1008: \"音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道\",\n    1009: \"音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道\",\n    1010: \"音频设备模块：停止播放设备出现错误\",\n    1011: \"音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1012: \"音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1013: \"音频设备模块：停止录音设备出现错误\",\n    1015: \"音频设备模块：运行时播放出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1017: \"音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1018: \"音频设备模块：录音失败\",\n    1022: \"音频设备模块：初始化 Loopback 设备错误\",\n    1023: \"音频设备模块：启动 Loopback 设备错误\",\n    1030: \"音频路由：连接蓝牙通话失败，默认路由会被启用\",\n    1359: \"音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用\",\n    1501: \"视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限\",\n    1600: \"视频设备模块：未知错误\",\n    1601: \"视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道\",\n    1602: \"视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道\" },\n\n  // 网络连接状态\n  connectionState: {\n    // 当前的网络连接状态\n    states: {\n      1: \"网络连接断开\",\n      2: \"建立网络连接中 \",\n      3: \"网络已连接\",\n      4: \"重新建立网络连接中\",\n      5: \"网络连接失败\" },\n\n    // 改变原因\n    reason: {\n      0: \"建立网络连接中\",\n      1: \"成功加入频道\",\n      2: \"网络连接中断\",\n      3: \"网络连接被服务器禁止\",\n      4: \"加入频道失败\",\n      5: \"离开频道\",\n      6: \"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道\",\n      7: \"不是有效的频道名。请更换有效的频道名重新加入频道\",\n      8: \"生成的 Token 无效。一般有以下原因：在控制台上启用了 App Certificate，但加入频道未使用 Token。当启用了 App Certificate，必须使用 Token在调用 joinChannel 加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致\",\n      9: \"当前使用的 Token 过期，不再有效，需要重新在你的服务端申请生成 Token\",\n      10: \"此用户被服务器禁止\",\n      11: \"由于设置了代理服务器，SDK 尝试重连\",\n      12: \"更新 Token 引起网络连接状态改变\",\n      13: \"客户端 IP 地址变更，可能是由于网络类型，或网络运营商的 IP 或端口发生改变引起\",\n      14: \"SDK 和服务器连接保活超时，进入自动重连状态\" } },\n\n\n  remoteVideoState: {\n    // 改变状态\n    status: {\n      0: '远端视频默认初始状态',\n      1: '本地用户已接收远端视频首包',\n      2: '远端视频流正在解码，正常播放',\n      3: '远端视频流卡顿',\n      4: '远端视频流播放失败' },\n\n    // 原因\n    reson: {\n      0: '内部原因',\n      1: '网络阻塞',\n      2: '网络恢复正常',\n      3: '本地用户停止接收远端视频流或本地用户禁用视频模块',\n      4: '本地用户恢复接收远端视频流或本地用户启动视频模块',\n      5: '远端用户停止发送视频流或远端用户禁用视频模块',\n      6: '远端用户恢复发送视频流或远端用户启用视频模块',\n      7: '远端用户离开频道',\n      8: '远端视频流已回退为音频流',\n      9: '回退的远端音频流恢复为视频流' } } };var _default =\n\n\n\n\ncode;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvcnRjY29kZS5qcyJdLCJuYW1lcyI6WyJjb2RlIiwid2FybmluZyIsImVycm9yZSIsImNvbm5lY3Rpb25TdGF0ZSIsInN0YXRlcyIsInJlYXNvbiIsInJlbW90ZVZpZGVvU3RhdGUiLCJzdGF0dXMiLCJyZXNvbiJdLCJtYXBwaW5ncyI6IndGQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHO0FBQ1o7QUFDQUMsU0FBTyxFQUFFO0FBQ1IsT0FBRyw4QkFESztBQUVSLFFBQUksK0NBRkk7QUFHUixRQUFJLGlDQUhJO0FBSVIsU0FBSyw0QkFKRztBQUtSLFNBQUssb0RBTEc7QUFNUixTQUFLLGlEQU5HO0FBT1IsU0FBSyxxQ0FQRztBQVFSLFNBQUssa0JBUkc7QUFTUixTQUFLLFlBVEc7QUFVUixTQUFLLFFBVkc7QUFXUixVQUFNLG9CQVhFO0FBWVIsVUFBTSxvQkFaRTtBQWFSLFVBQU0scUJBYkU7QUFjUixVQUFNLHFCQWRFO0FBZVIsVUFBTSxnQkFmRTtBQWdCUixVQUFNLGtCQWhCRSxFQUZHOztBQW9CWjtBQUNBQyxRQUFNLEVBQUU7QUFDUCxPQUFHLE1BREk7QUFFUCxPQUFHLHFCQUZJO0FBR1AsT0FBRyw2QkFISTtBQUlQLE9BQUcsV0FKSTtBQUtQLE9BQUcsZ0JBTEk7QUFNUCxPQUFHLE9BTkk7QUFPUCxPQUFHLG9CQVBJO0FBUVAsT0FBRyx3REFSSTtBQVNQLE9BQUcsOEJBVEk7QUFVUCxPQUFHLGdDQVZJO0FBV1AsUUFBSSxnRUFYRztBQVlQLFFBQUksT0FaRztBQWFQLFFBQUksUUFiRztBQWNQLFFBQUksdUJBZEc7QUFlUCxRQUFJLE9BZkc7QUFnQlAsUUFBSSxXQWhCRztBQWlCUCxRQUFJLCtDQWpCRztBQWtCUCxRQUFJLFNBbEJHO0FBbUJQLFFBQUksUUFuQkc7QUFvQlAsUUFBSSxlQXBCRztBQXFCUCxTQUFLLG1DQXJCRTtBQXNCUCxTQUFLLDBCQXRCRTtBQXVCUCxTQUFLLHlCQXZCRTtBQXdCUCxTQUFLLFFBeEJFO0FBeUJQLFNBQUssUUF6QkU7QUEwQlAsU0FBSyxpQ0ExQkU7QUEyQlAsU0FBSyw0Q0EzQkU7QUE0QlAsU0FBSyw0Q0E1QkU7QUE2QlAsU0FBSyw0Q0E3QkU7QUE4QlAsU0FBSyw2Q0E5QkU7QUErQlAsU0FBSyxXQS9CRTtBQWdDUCxTQUFLLFVBaENFO0FBaUNQLFNBQUssa0JBakNFO0FBa0NQLFVBQU0sVUFsQ0M7QUFtQ1AsVUFBTSx3QkFuQ0M7QUFvQ1AsVUFBTSxZQXBDQztBQXFDUCxVQUFNLHlEQXJDQztBQXNDUCxVQUFNLHVCQXRDQztBQXVDUCxVQUFNLG9CQXZDQztBQXdDUCxVQUFNLGdEQXhDQztBQXlDUCxVQUFNLDBDQXpDQztBQTBDUCxVQUFNLG1CQTFDQztBQTJDUCxVQUFNLDRDQTNDQztBQTRDUCxVQUFNLDBDQTVDQztBQTZDUCxVQUFNLG1CQTdDQztBQThDUCxVQUFNLHlDQTlDQztBQStDUCxVQUFNLHVDQS9DQztBQWdEUCxVQUFNLGFBaERDO0FBaURQLFVBQU0sMEJBakRDO0FBa0RQLFVBQU0seUJBbERDO0FBbURQLFVBQU0sd0JBbkRDO0FBb0RQLFVBQU0sK0NBcERDO0FBcURQLFVBQU0saUNBckRDO0FBc0RQLFVBQU0sYUF0REM7QUF1RFAsVUFBTSxzQ0F2REM7QUF3RFAsVUFBTSxtQ0F4REMsRUFyQkk7O0FBK0VaO0FBQ0FDLGlCQUFlLEVBQUU7QUFDaEI7QUFDQUMsVUFBTSxFQUFFO0FBQ1AsU0FBRyxRQURJO0FBRVAsU0FBRyxVQUZJO0FBR1AsU0FBRyxPQUhJO0FBSVAsU0FBRyxXQUpJO0FBS1AsU0FBRyxRQUxJLEVBRlE7O0FBU2hCO0FBQ0FDLFVBQU0sRUFBRTtBQUNQLFNBQUcsU0FESTtBQUVQLFNBQUcsUUFGSTtBQUdQLFNBQUcsUUFISTtBQUlQLFNBQUcsWUFKSTtBQUtQLFNBQUcsUUFMSTtBQU1QLFNBQUcsTUFOSTtBQU9QLFNBQUcsbUNBUEk7QUFRUCxTQUFHLDBCQVJJO0FBU1AsU0FBRyxpSkFUSTtBQVVQLFNBQUcsMENBVkk7QUFXUCxVQUFJLFdBWEc7QUFZUCxVQUFJLHFCQVpHO0FBYVAsVUFBSSxxQkFiRztBQWNQLFVBQUksNENBZEc7QUFlUCxVQUFJLHlCQWZHLEVBVlEsRUFoRkw7OztBQTRHWkMsa0JBQWdCLEVBQUU7QUFDakI7QUFDQUMsVUFBTSxFQUFFO0FBQ1AsU0FBRyxZQURJO0FBRVAsU0FBRyxlQUZJO0FBR1AsU0FBRyxnQkFISTtBQUlQLFNBQUcsU0FKSTtBQUtQLFNBQUcsV0FMSSxFQUZTOztBQVNqQjtBQUNBQyxTQUFLLEVBQUU7QUFDTixTQUFHLE1BREc7QUFFTixTQUFHLE1BRkc7QUFHTixTQUFHLFFBSEc7QUFJTixTQUFHLDBCQUpHO0FBS04sU0FBRywwQkFMRztBQU1OLFNBQUcsd0JBTkc7QUFPTixTQUFHLHdCQVBHO0FBUU4sU0FBRyxVQVJHO0FBU04sU0FBRyxjQVRHO0FBVU4sU0FBRyxnQkFWRyxFQVZVLEVBNUdOLEVBQWIsQzs7Ozs7QUFxSWVSLEkiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSVEMg55u45YWz54q25oCB56CBXHJcbmNvbnN0IGNvZGUgPSB7XHJcblx0Ly8g6K2m5ZGK54q25oCB56CBXHJcblx0d2FybmluZzoge1xyXG5cdFx0ODogXCLmjIflrprnmoQgVmlldyDml6DmlYjvvIzkvb/nlKjop4bpopHlip/og73ml7bpnIDopoHmjIflrpogdmlld1wiLFxyXG5cdFx0MTY6IFwi5Yid5aeL5YyW6KeG6aKR5Yqf6IO95aSx6LSl44CC5pyJ5Y+v6IO95piv5Zug6KeG6aKR6LWE5rqQ6KKr5Y2g55So5a+86Ie055qE44CC55So5oi35peg5rOV55yL5Yiw6KeG6aKR55S76Z2i77yM5L2G5LiN5b2x5ZON6K+t6Z+z6YCa5L+hXCIsXHJcblx0XHQyMDogXCLor7fmsYLlpITkuo7lvoXlrprnirbmgIHjgILkuIDoiKzmmK/nlLHkuo7mn5DkuKrmqKHlnZfov5jmsqHlh4blpIflpb3vvIzor7fmsYLooqvlu7bov5/lpITnkIZcIixcclxuXHRcdDEwMzogXCLmsqHmnInlj6/nlKjnmoTpopHpgZPotYTmupDjgILlj6/og73mmK/lm6DkuLrmnI3liqHnq6/msqHms5XliIbphY3popHpgZPotYTmupBcIixcclxuXHRcdDEwNDogXCLmn6Xmib7popHpgZPotoXml7bjgILlnKjliqDlhaXpopHpgZPml7YgU0RLIOWFiOimgeafpeaJvuaMh+WumueahOmikemBk++8jOWHuueOsOivpeitpuWRiuS4gOiIrOaYr+WboOS4uue9kee7nOWkquW3ru+8jOi/nuaOpeS4jeWIsOacjeWKoeWZqFwiLFxyXG5cdFx0MTA2OiBcIuaJk+W8gOmikemBk+i2heaXtuOAguafpeaJvuWIsOaMh+WumumikemBk+WQju+8jFNESyDmjqXnnYDmiZPlvIDor6XpopHpgZPvvIzotoXml7bkuIDoiKzmmK/lm6DkuLrnvZHnu5zlpKrlt67vvIzov57mjqXkuI3liLDmnI3liqHlmahcIixcclxuXHRcdDEwNzogXCLmiZPlvIDpopHpgZPor7fmsYLooqvmnI3liqHlmajmi5Lnu53jgILmnI3liqHlmajlj6/og73msqHmnInlip7ms5XlpITnkIbor6Xor7fmsYLmiJbor6Xor7fmsYLmmK/pnZ7ms5XnmoRcIixcclxuXHRcdDEyMTogXCJUSUNLRVQg6Z2e5rOV77yM5omT5byA6aKR6YGT5aSx6LSlXCIsXHJcblx0XHQxMjI6IFwi5bCd6K+V5omT5byA5Y+m5LiA5Liq5pyN5Yqh5ZmoXCIsXHJcblx0XHQ3MDE6IFwi5omT5byA5Ly05aWP5Ye66ZSZXCIsXHJcblx0XHQxMDE0OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuaSreaUvuiuvuWkh+WHuueOsOitpuWRilwiLFxyXG5cdFx0MTAxNjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrov5DooYzml7blvZXpn7Porr7lpIflh7rnjrDorablkYpcIixcclxuXHRcdDEwMTk6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5rKh5pyJ6YeH6ZuG5Yiw5pyJ5pWI55qE5aOw6Z+z5pWw5o2uXCIsXHJcblx0XHQxMDI1OiBcIumfs+mikeaSreaUvuaIlumHh+mbhuiiq+ezu+e7n+S6i+S7tu+8iOWmguadpeeUte+8ieaJk+aJsFwiLFxyXG5cdFx0MTAzMzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlvZXliLborr7lpIfooqvljaDnlKhcIixcclxuXHRcdDEwNTE6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5b2V6Z+z5aOw6Z+z5qOA5p+l5Yiw5ZW45Y+rXCIsXHJcblx0fSxcclxuXHQvLyDplJnor6/nirbmgIHnoIFcclxuXHRlcnJvcmU6IHtcclxuXHRcdDA6IFwi5rKh5pyJ6ZSZ6K+vXCIsXHJcblx0XHQxOiBcIuS4gOiIrOaAp+eahOmUmeivr++8iOayoeacieaYjuehruW9kuexu+eahOmUmeivr+WOn+WboO+8iVwiLFxyXG5cdFx0MjogXCJBUEkg6LCD55So5LqG5peg5pWI55qE5Y+C5pWw44CC5L6L5aaC5oyH5a6a55qE6aKR6YGT5ZCN5ZCr5pyJ6Z2e5rOV5a2X56ymXCIsXHJcblx0XHQzOiBcIlNESyDliJ3lp4vljJblpLHotKVcIixcclxuXHRcdDQ6IFwiU0RLIOW9k+WJjeeKtuaAgeS4jeaUr+aMgeatpOaTjeS9nFwiLFxyXG5cdFx0NTogXCLosIPnlKjooqvmi5Lnu51cIixcclxuXHRcdDY6IFwi5Lyg5YWl55qE57yT5Yay5Yy65aSn5bCP5LiN6Laz5Lul5a2Y5pS+6L+U5Zue55qE5pWw5o2uXCIsXHJcblx0XHQ3OiBcIlNESyDlsJrmnKrliJ3lp4vljJbvvIzlsLHosIPnlKjlhbYgQVBJ44CC6K+356Gu6K6k5Zyo6LCD55SoIEFQSSDkuYvliY3lt7LliJvlu7ogUnRjRW5naW5lIOWvueixoeW5tuWujOaIkOWIneWni+WMllwiLFxyXG5cdFx0ODogXCLmjIflrprnmoQgVmlldyDml6DmlYjvvIzkvb/nlKjop4bpopHlip/og73ml7bpnIDopoHmjIflrpogVmlld1wiLFxyXG5cdFx0OTogXCLmsqHmnInmk43kvZzmnYPpmZDjgILor7fmo4Dmn6XnlKjmiLfmmK/lkKbmjojkuoggYXBwIOmfs+inhumikeiuvuWkh+S9v+eUqOadg+mZkFwiLFxyXG5cdFx0MTA6IFwiQVBJIOiwg+eUqOi2heaXtuOAguacieS6myBBUEkg6LCD55So6ZyA6KaBIFNESyDov5Tlm57nu5PmnpzvvIzlpoLmnpwgU0RLIOWkhOeQhuaXtumXtOi/h+mVv++8jOi2hei/hyAxMCDnp5LmsqHmnInov5Tlm57vvIzkvJrlh7rnjrDmraTplJnor69cIixcclxuXHRcdDExOiBcIuivt+axguiiq+WPlua2iFwiLFxyXG5cdFx0MTI6IFwi6LCD55So6aKR546H5aSq6auYXCIsXHJcblx0XHQxMzogXCJTREsg5YaF6YOo57uR5a6a5Yiw572R57ucIFNvY2tldCDlpLHotKVcIixcclxuXHRcdDE0OiBcIue9kee7nOS4jeWPr+eUqFwiLFxyXG5cdFx0MTU6IFwi5rKh5pyJ572R57uc57yT5Yay5Yy65Y+v55SoXCIsXHJcblx0XHQxNjogXCLliJ3lp4vljJbop4bpopHlip/og73lpLHotKXjgILmnInlj6/og73mmK/lm6Dop4bpopHotYTmupDooqvljaDnlKjlr7zoh7TnmoTjgILnlKjmiLfml6Dms5XnnIvliLDop4bpopHnlLvpnaLvvIzkvYbkuI3lvbHlk43or63pn7PpgJrkv6FcIixcclxuXHRcdDE3OiBcIuWKoOWFpemikemBk+iiq+aLkue7nVwiLFxyXG5cdFx0MTg6IFwi56a75byA6aKR6YGT5aSx6LSlXCIsXHJcblx0XHQxOTogXCLotYTmupDlt7LooqvljaDnlKjvvIzkuI3og73ph43lpI3kvb/nlKhcIixcclxuXHRcdDEwMTogXCLkuI3mmK/mnInmlYjnmoQgQVBQIElE44CC6K+35pu05o2i5pyJ5pWI55qEIEFQUCBJRCDph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDEwMjogXCLkuI3mmK/mnInmlYjnmoTpopHpgZPlkI3jgILor7fmm7TmjaLmnInmlYjnmoTpopHpgZPlkI3ph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDExMDogXCLlvIDlkK/kuoYgdG9rZW4g5qCh6aqM5L2G5rKh5pyJ6L6T5YWlIHRva2VuXCIsXHJcblx0XHQxMTE6IFwi572R57uc6L+e5o6l5Lit5patXCIsXHJcblx0XHQxMTI6IFwi572R57uc6L+e5o6l5Lii5aSxXCIsXHJcblx0XHQxMTM6IFwi5Zyo6LCD55SoIHNlbmRTdHJlYW1NZXNzYWdlIOaXtu+8jOeUqOaIt+S4jeWcqOmikemBk+WGhVwiLFxyXG5cdFx0MTE0OiBcIuWcqOiwg+eUqCBzZW5kU3RyZWFtTWVzc2FnZSDml7bvvIzlj5HpgIHnmoTmlbDmja7plb/luqblpKfkuo4gMTAyNCDkuKrlrZfoioJcIixcclxuXHRcdDExNTogXCLlnKjosIPnlKggc2VuZFN0cmVhbU1lc3NhZ2Ug5pe277yM5Y+R6YCB55qE5pWw5o2u56CB546H6LaF6L+H6ZmQ5Yi277yINktCL3PvvIlcIixcclxuXHRcdDExNjogXCLlnKjosIPnlKggY3JlYXRlRGF0YVN0cmVhbSDml7bvvIzliJvlu7rnmoTmlbDmja7pgJrpgZPov4flpJrvvIjotoXov4cgNSDkuKrpgJrpgZPvvIlcIixcclxuXHRcdDEyMDogXCLop6Plr4blpLHotKXvvIzlj6/og73mmK/nlKjmiLfliqDlhaXpopHpgZPnlKjkuobkuI3lkIznmoTlr4bnoIHjgILor7fmo4Dmn6XliqDlhaXpopHpgZPml7bnmoTorr7nva7vvIzmiJblsJ3or5Xph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDEyMzogXCLmraTnlKjmiLfooqvmnI3liqHlmajnpoHmraJcIixcclxuXHRcdDEyNTogXCLmsLTljbDmlofku7bot6/lvoTplJnor69cIixcclxuXHRcdDEzNDogXCLml6DmlYjnmoQgVXNlciBhY2NvdW50XCIsXHJcblx0XHQxMDAxOiBcIuWKoOi9veWqkuS9k+W8leaTjuWksei0pVwiLFxyXG5cdFx0MTAwMjogXCLlkK/liqjlqpLkvZPlvJXmk47lvIDlp4vpgJror53lpLHotKXjgILor7flsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMDQ6IFwi5ZCv5Yqo6KeG6aKR5riy5p+T5qih5Z2X5aSx6LSlXCIsXHJcblx0XHQxMDA1OiBcIumfs+mikeiuvuWkh+aooeWdl++8mumfs+mikeiuvuWkh+WHuueOsOmUmeivr++8iOacquaYjuehruaMh+aYjuS4uuS9leenjemUmeivr++8ieOAguivt+ajgOafpemfs+mikeiuvuWkh+aYr+WQpuiiq+WFtuS7luW6lOeUqOWNoOeUqO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAwNjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrkvb/nlKggamF2YSDotYTmupDlh7rnjrDplJnor69cIixcclxuXHRcdDEwMDc6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya6K6+572u55qE6YeH5qC36aKR546H5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHQxMDA4OiBcIumfs+mikeiuvuWkh+aooeWdl++8muWIneWni+WMluaSreaUvuiuvuWkh+WHuueOsOmUmeivr+OAguivt+ajgOafpeaSreaUvuiuvuWkh+aYr+WQpuiiq+WFtuS7luW6lOeUqOWNoOeUqO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAwOTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlkK/liqjmkq3mlL7orr7lpIflh7rnjrDplJnor6/jgILor7fmo4Dmn6Xmkq3mlL7orr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMTA6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5YGc5q2i5pKt5pS+6K6+5aSH5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHQxMDExOiBcIumfs+mikeiuvuWkh+aooeWdl++8muWIneWni+WMluW9lemfs+iuvuWkh+aXtuWHuueOsOmUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxMjogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlkK/liqjlvZXpn7Porr7lpIflh7rnjrDplJnor6/jgILor7fmo4Dmn6XlvZXpn7Porr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMTM6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5YGc5q2i5b2V6Z+z6K6+5aSH5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHQxMDE1OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuaSreaUvuWHuueOsOmUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxNzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrov5DooYzml7blvZXpn7PplJnor6/jgILor7fmo4Dmn6XlvZXpn7Porr7lpIfmmK/lkKbmraPluLjvvIzmiJbogIXlsJ3or5Xph43mlrDov5vlhaXpopHpgZNcIixcclxuXHRcdDEwMTg6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5b2V6Z+z5aSx6LSlXCIsXHJcblx0XHQxMDIyOiBcIumfs+mikeiuvuWkh+aooeWdl++8muWIneWni+WMliBMb29wYmFjayDorr7lpIfplJnor69cIixcclxuXHRcdDEwMjM6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5ZCv5YqoIExvb3BiYWNrIOiuvuWkh+mUmeivr1wiLFxyXG5cdFx0MTAzMDogXCLpn7PpopHot6/nlLHvvJrov57mjqXok53niZnpgJror53lpLHotKXvvIzpu5jorqTot6/nlLHkvJrooqvlkK/nlKhcIixcclxuXHRcdDEzNTk6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5peg5b2V5Yi26K6+5aSH44CC6K+35qOA5p+l5piv5ZCm5pyJ5Y+v55So55qE5b2V5pS+6Z+z6K6+5aSH5oiW6ICF5b2V5pS+6Z+z6K6+5aSH5piv5ZCm5bey57uP6KKr5YW25LuW5bqU55So5Y2g55SoXCIsXHJcblx0XHQxNTAxOiBcIuinhumikeiuvuWkh+aooeWdl++8muayoeacieaRhOWDj+WktOS9v+eUqOadg+mZkOOAguivt+ajgOafpeaYr+WQpuW3sue7j+aJk+W8gOaRhOWDj+WktOadg+mZkFwiLFxyXG5cdFx0MTYwMDogXCLop4bpopHorr7lpIfmqKHlnZfvvJrmnKrnn6XplJnor69cIixcclxuXHRcdDE2MDE6IFwi6KeG6aKR6K6+5aSH5qih5Z2X77ya6KeG6aKR57yW56CB5Zmo5Yid5aeL5YyW6ZSZ6K+v44CC6K+l6ZSZ6K+v5Li65Lil6YeN6ZSZ6K+v77yM6K+35bCd6K+V6YeN5paw5Yqg5YWl6aKR6YGTXCIsXHJcblx0XHQxNjAyOiBcIuinhumikeiuvuWkh+aooeWdl++8muinhumikee8lueggeWZqOmUmeivr+OAguivpemUmeivr+S4uuS4pemHjemUmeivr++8jOivt+WwneivlemHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdH0sXHJcblx0Ly8g572R57uc6L+e5o6l54q25oCBXHJcblx0Y29ubmVjdGlvblN0YXRlOiB7XHJcblx0XHQvLyDlvZPliY3nmoTnvZHnu5zov57mjqXnirbmgIFcclxuXHRcdHN0YXRlczoge1xyXG5cdFx0XHQxOiBcIue9kee7nOi/nuaOpeaWreW8gFwiLFxyXG5cdFx0XHQyOiBcIuW7uueri+e9kee7nOi/nuaOpeS4rSBcIixcclxuXHRcdFx0MzogXCLnvZHnu5zlt7Lov57mjqVcIixcclxuXHRcdFx0NDogXCLph43mlrDlu7rnq4vnvZHnu5zov57mjqXkuK1cIixcclxuXHRcdFx0NTogXCLnvZHnu5zov57mjqXlpLHotKVcIixcclxuXHRcdH0sXHJcblx0XHQvLyDmlLnlj5jljp/lm6BcclxuXHRcdHJlYXNvbjoge1xyXG5cdFx0XHQwOiBcIuW7uueri+e9kee7nOi/nuaOpeS4rVwiLFxyXG5cdFx0XHQxOiBcIuaIkOWKn+WKoOWFpemikemBk1wiLFxyXG5cdFx0XHQyOiBcIue9kee7nOi/nuaOpeS4reaWrVwiLFxyXG5cdFx0XHQzOiBcIue9kee7nOi/nuaOpeiiq+acjeWKoeWZqOemgeatolwiLFxyXG5cdFx0XHQ0OiBcIuWKoOWFpemikemBk+Wksei0pVwiLFxyXG5cdFx0XHQ1OiBcIuemu+W8gOmikemBk1wiLFxyXG5cdFx0XHQ2OiBcIuS4jeaYr+acieaViOeahCBBUFAgSUTjgILor7fmm7TmjaLmnInmlYjnmoQgQVBQIElEIOmHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0XHQ3OiBcIuS4jeaYr+acieaViOeahOmikemBk+WQjeOAguivt+abtOaNouacieaViOeahOmikemBk+WQjemHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0XHQ4OiBcIueUn+aIkOeahCBUb2tlbiDml6DmlYjjgILkuIDoiKzmnInku6XkuIvljp/lm6DvvJrlnKjmjqfliLblj7DkuIrlkK/nlKjkuoYgQXBwIENlcnRpZmljYXRl77yM5L2G5Yqg5YWl6aKR6YGT5pyq5L2/55SoIFRva2Vu44CC5b2T5ZCv55So5LqGIEFwcCBDZXJ0aWZpY2F0Ze+8jOW/hemhu+S9v+eUqCBUb2tlbuWcqOiwg+eUqCBqb2luQ2hhbm5lbCDliqDlhaXpopHpgZPml7bmjIflrprnmoQgdWlkIOS4jueUn+aIkCBUb2tlbiDml7bkvKDlhaXnmoQgdWlkIOS4jeS4gOiHtFwiLFxyXG5cdFx0XHQ5OiBcIuW9k+WJjeS9v+eUqOeahCBUb2tlbiDov4fmnJ/vvIzkuI3lho3mnInmlYjvvIzpnIDopoHph43mlrDlnKjkvaDnmoTmnI3liqHnq6/nlLPor7fnlJ/miJAgVG9rZW5cIixcclxuXHRcdFx0MTA6IFwi5q2k55So5oi36KKr5pyN5Yqh5Zmo56aB5q2iXCIsXHJcblx0XHRcdDExOiBcIueUseS6juiuvue9ruS6huS7o+eQhuacjeWKoeWZqO+8jFNESyDlsJ3or5Xph43ov55cIixcclxuXHRcdFx0MTI6IFwi5pu05pawIFRva2VuIOW8lei1t+e9kee7nOi/nuaOpeeKtuaAgeaUueWPmFwiLFxyXG5cdFx0XHQxMzogXCLlrqLmiLfnq68gSVAg5Zyw5Z2A5Y+Y5pu077yM5Y+v6IO95piv55Sx5LqO572R57uc57G75Z6L77yM5oiW572R57uc6L+Q6JCl5ZWG55qEIElQIOaIluerr+WPo+WPkeeUn+aUueWPmOW8lei1t1wiLFxyXG5cdFx0XHQxNDogXCJTREsg5ZKM5pyN5Yqh5Zmo6L+e5o6l5L+d5rS76LaF5pe277yM6L+b5YWl6Ieq5Yqo6YeN6L+e54q25oCBXCIsXHJcblx0XHR9XHJcblx0fSxcclxuXHRyZW1vdGVWaWRlb1N0YXRlOiB7XHJcblx0XHQvLyDmlLnlj5jnirbmgIFcclxuXHRcdHN0YXR1czoge1xyXG5cdFx0XHQwOiAn6L+c56uv6KeG6aKR6buY6K6k5Yid5aeL54q25oCBJyxcclxuXHRcdFx0MTogJ+acrOWcsOeUqOaIt+W3suaOpeaUtui/nOerr+inhumikemmluWMhScsXHJcblx0XHRcdDI6ICfov5znq6/op4bpopHmtYHmraPlnKjop6PnoIHvvIzmraPluLjmkq3mlL4nLFxyXG5cdFx0XHQzOiAn6L+c56uv6KeG6aKR5rWB5Y2h6aG/JyxcclxuXHRcdFx0NDogJ+i/nOerr+inhumikea1geaSreaUvuWksei0pSdcclxuXHRcdH0sXHJcblx0XHQvLyDljp/lm6BcclxuXHRcdHJlc29uOiB7XHJcblx0XHRcdDA6ICflhoXpg6jljp/lm6AnLFxyXG5cdFx0XHQxOiAn572R57uc6Zi75aGeJyxcclxuXHRcdFx0MjogJ+e9kee7nOaBouWkjeato+W4uCcsXHJcblx0XHRcdDM6ICfmnKzlnLDnlKjmiLflgZzmraLmjqXmlLbov5znq6/op4bpopHmtYHmiJbmnKzlnLDnlKjmiLfnpoHnlKjop4bpopHmqKHlnZcnLFxyXG5cdFx0XHQ0OiAn5pys5Zyw55So5oi35oGi5aSN5o6l5pS26L+c56uv6KeG6aKR5rWB5oiW5pys5Zyw55So5oi35ZCv5Yqo6KeG6aKR5qih5Z2XJyxcclxuXHRcdFx0NTogJ+i/nOerr+eUqOaIt+WBnOatouWPkemAgeinhumikea1geaIlui/nOerr+eUqOaIt+emgeeUqOinhumikeaooeWdlycsXHJcblx0XHRcdDY6ICfov5znq6/nlKjmiLfmgaLlpI3lj5HpgIHop4bpopHmtYHmiJbov5znq6/nlKjmiLflkK/nlKjop4bpopHmqKHlnZcnLFxyXG5cdFx0XHQ3OiAn6L+c56uv55So5oi356a75byA6aKR6YGTJyxcclxuXHRcdFx0ODogJ+i/nOerr+inhumikea1geW3suWbnumAgOS4uumfs+mikea1gScsXHJcblx0XHRcdDk6ICflm57pgIDnmoTov5znq6/pn7PpopHmtYHmgaLlpI3kuLrop4bpopHmtYEnLFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29kZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!***************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/rtm.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 54));\nvar _until = __webpack_require__(/*! ./until.js */ 50);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n\n\n\n// rtm 实时消息引入\nvar rtmModule = uni.requireNativePlugin('AR-RtmModule');\nvar Store = {\n  // 被叫、主叫区分\n  type: false,\n  // 当前登陆状态\n  logining: {\n    state: 0,\n    reson: 0 } };\n\n\n// rtm 实时消息封装\nvar RTM = {\n  // 初始化\n  init: function () {var _init = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oUid;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              // 生成本地用户标识 Uid\n              oUid = '' + _until.Utils.generateNumber(4);\n              // 初始化回调\n              _context.next = 3;return rtmModule.setCallBack(function (res) {\n                RTM.callBack(res);\n              });case 3:_context.next = 5;return (\n\n                rtmModule.createInstance({\n                  \"appId\": _config.default.RTM_APPID },\n                function (res) {\n                  __f__(\"log\", res, \" at until/rtm.js:32\");\n                }));case 5:_context.next = 7;return (\n\n                rtmModule.login({\n                  \"token\": \"\",\n                  \"userId\": oUid },\n                function (res) {\n                  __f__(\"log\", \"登录 RTM 系统\", res, \" at until/rtm.js:39\");\n                  _until.RTMUtils.useLogin(res.code, oUid);\n                }));case 7:_context.next = 9;return (\n\n                rtmModule.setCallEventListener());case 9:case \"end\":return _context.stop();}}}, _callee);}));function init() {return _init.apply(this, arguments);}return init;}(),\n\n  // 回调\n  callBack: function callBack(res) {\n    __f__(\"log\", \"回调\", res.rtmEvent, \" at until/rtm.js:47\");\n    switch (res.rtmEvent) {\n      // SDK 与 RTM 系统的连接状态发生改变回调。\n      case 'onConnectionStateChanged':\n        Store.logining = {\n          state: res.state,\n          reason: res.reason };\n\n        _until.RTMUtils.ConnectionStateChanged(res.state, res.reason);\n        break;\n      // 收到点对点消息回调\n      case 'onPeerMessageReceived':\n        _until.RTMUtils.PeerMessageReceived(res.text, res.peerId);\n        break;\n      // 被订阅用户在线状态改变\n      case 'onPeersOnlineStatusChanged':\n        uni.$emit(\"PeersOnlineStatusChanged\", res);\n        break;\n      // 返回给主叫：被叫已接受呼叫邀请\n      case 'onLocalInvitationAccepted':\n        _until.RTMUtils.LocalInvitationAccepted(res);\n        break;\n      // 返回给主叫：呼叫邀请已被取消\n      case 'onLocalInvitationCanceled':\n        _until.RTMUtils.LocalInvitationCanceled(res);\n        break;\n      // 返回给主叫：呼叫邀请进程失败\n      case 'onLocalInvitationFailure':\n        _until.RTMUtils.LocalInvitationFailure(res);\n        break;\n      // 返回给主叫：被叫已收到呼叫邀请\n      case 'onLocalInvitationReceivedByPeer':\n        _until.RTMUtils.LocalInvitationReceivedByPeer(res);\n        break;\n      // 返回给主叫：被叫已拒绝呼叫邀请\n      case 'onLocalInvitationRefused':\n        _until.RTMUtils.LocalInvitationRefused(res);\n        break;\n      // 返回给被叫：接受呼叫邀请成功\n      case 'onRemoteInvitationAccepted':\n        _until.RTMUtils.RemoteInvitationAccepted(res);\n        break;\n      // 返回给被叫：主叫已取消呼叫邀请\n      case 'onRemoteInvitationCanceled':\n        _until.RTMUtils.RemoteInvitationCanceled(res);\n        break;\n      // 返回给被叫：来自主叫的呼叫邀请进程失败\n      case 'onRemoteInvitationFailure':\n        _until.RTMUtils.RemoteInvitationFailure(res);\n        break;\n      // 返回给被叫：收到一个呼叫邀请\n      case 'onRemoteInvitationReceived':\n        _until.RTMUtils.RemoteInvitationReceived(res, RTM.refuseRemoteInvitation);\n        break;\n      // 返回给被叫：拒绝呼叫邀请成功\n      case 'onRemoteInvitationRefused':\n        _until.RTMUtils.RemoteInvitationRefused(res);\n        break;\n      default:\n        break;}\n\n  },\n  // 离开\n  leave: function () {var _leave = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n\n                rtmModule.logout(function (res) {\n                  __f__(\"log\", '登出 RTM logout 方法调用', res.code === 0 ? '成功' : '失败：' + res, \" at until/rtm.js:113\");\n                }));case 2:_context2.next = 4;return (\n\n                rtmModule.release(function (res) {\n                  __f__(\"log\", '释放 RTM实例 release 方法调用', res.code === 0 ? '成功' : '失败：' + res, \" at until/rtm.js:117\");\n                }));case 4:case \"end\":return _context2.stop();}}}, _callee2);}));function leave() {return _leave.apply(this, arguments);}return leave;}(),\n\n  // 获取登陆状态\n  getLoginStatu: function getLoginStatu() {\n    return Store.logining;\n  },\n  // 查询所有用户是否在线\n  queryPeersOnlineStatus: function () {var _queryPeersOnlineStatus = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(peerIdLits) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n                new Promise(function (resolve, reject) {\n                  rtmModule.queryPeersOnlineStatus({\n                    \"peerIds\": peerIdLits },\n                  function (res) {\n                    resolve(res);\n                  });\n                }));case 2:return _context3.abrupt(\"return\", _context3.sent);case 3:case \"end\":return _context3.stop();}}}, _callee3);}));function queryPeersOnlineStatus(_x) {return _queryPeersOnlineStatus.apply(this, arguments);}return queryPeersOnlineStatus;}(),\n\n  // 订阅指定单个或多个用户的在线状态\n  subscribePeersOnlineStatus: function subscribePeersOnlineStatus(peerIdLits) {\n    rtmModule.subscribePeersOnlineStatus({\n      \"peerIds\": peerIdLits },\n    function (res) {\n      //smething\n      __f__(\"log\", \"订阅指定单个或多个用户的在线状态\", res, \" at until/rtm.js:140\");\n    });\n  },\n  // 取消订阅\n  unsubscribePeersOnlineStatus: function unsubscribePeersOnlineStatus(peerIdLits) {\n    rtmModule.unsubscribePeersOnlineStatus({\n      \"peerIds\": peerIdLits },\n    function (res) {\n      //smething\n      __f__(\"log\", \"取消订阅指定单个或多个用户的在线状态\", res, \" at until/rtm.js:149\");\n    });\n  },\n  // 向指定用户发送点对点消息\n  sendMessageToPeer: function sendMessageToPeer(peerId, massge) {\n    __f__(\"log\", \"massge\", massge, \" at until/rtm.js:154\");\n    rtmModule.sendMessageToPeer({\n      \"peerId\": peerId + '',\n      \"text\": JSON.stringify({\n        Cmd: massge }),\n\n      \"enableHistoricalMessaging\": true, // 是否保存为历史消息\n      \"enableOfflineMessaging\": true // 是否设置为离线消息\n    }, function (res) {\n      // 错误码请查看 https://docs.anyrtc.io/cn/RealTimeMessage/api-ref/rtm_android/peermessageerror\n      __f__(\"log\", '向指定用户发送点对点消息 sendMessageToPeer 方法调用', res.code === 0 ? '成功' : '失败：' + JSON.\n      stringify(res), \" at until/rtm.js:164\");\n    });\n  },\n  // 发送呼叫邀请给对方\n  sendLocalInvitation: function () {var _sendLocalInvitation = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(calleeId, info) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n              __f__(\"log\", \"发送呼叫邀请给对方的消息\", JSON.stringify(info), \" at until/rtm.js:170\");\n              // 记录为主叫\n              Store.type = true;_context4.next = 4;return (\n                new Promise(function (resolve, reject) {\n                  rtmModule.sendLocalInvitation({\n                    \"calleeId\": calleeId, // 被呼叫者的 user ID\n                    \"content\": JSON.stringify(info) // 邀请内容\n                  }, function (res) {\n                    resolve(res.code);\n                  });\n                }));case 4:return _context4.abrupt(\"return\", _context4.sent);case 5:case \"end\":return _context4.stop();}}}, _callee4);}));function sendLocalInvitation(_x2, _x3) {return _sendLocalInvitation.apply(this, arguments);}return sendLocalInvitation;}(),\n\n  // 接受来自对方的呼叫邀请\t\n  acceptRemoteInvitation: function acceptRemoteInvitation(calleeId) {var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    Store.type = false;\n    // console.log('接受来自对方的呼叫邀请');\n    rtmModule.acceptRemoteInvitation({\n      \"calleeId\": calleeId, // 供被叫获取主叫的用户 ID\n      \"response\": info ? JSON.stringify(info) : \"\" // 邀请响应\n    }, function (res) {\n      _until.Utils.hintInfo(res.code === 0 ? '' :\n      \"调用 acceptRemoteInvitation 接受来自对方的呼叫邀请失败\");\n    });\n    // 订阅对方在线状态\n    RTM.subscribePeersOnlineStatus([calleeId]);\n  },\n  // 拒绝来自对方的呼叫邀请\n  refuseRemoteInvitation: function refuseRemoteInvitation(userId) {var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    Store.type = false;\n    rtmModule.refuseRemoteInvitation({\n      \"calleeId\": userId,\n      \"response\": info ? JSON.stringify(info) : \"\" // 邀请内容\n    }, function (res) {\n      _until.Utils.hintInfo(res.code === 0 ? \"\" :\n      \"调用 cancelLocalInvitation 取消呼叫失败\");\n    });\n  },\n  // 取消给对方的呼叫邀请\n  cancelLocalInvitation: function cancelLocalInvitation(calleeId) {var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    __f__(\"log\", \"取消给对方的呼叫邀请\", \" at until/rtm.js:209\");\n    Store.type = false;\n    rtmModule.cancelLocalInvitation({\n      \"calleeId\": calleeId, // 被呼叫者的 user ID\n      \"content\": info ? JSON.stringify(info) : \"\" // 邀请内容\n    }, function (res) {\n      __f__(\"log\", \"取消给对方的呼叫邀请\", res, \" at until/rtm.js:215\");\n      _until.Utils.hintInfo(res.code === 0 ? \"\" :\n      \"调用 cancelLocalInvitation 取消呼叫失败\");\n    });\n    // 取消订阅\n    RTM.unsubscribePeersOnlineStatus([calleeId]);\n  } };\n\n\n// 监测 发送消息\nuni.$on(\"sendMessageToPeer\", function (data) {\n  if (data.Cmd === \"EndCall\") {\n    // console.log(\"发送挂断消息\", data);\n    RTM.sendMessageToPeer(data.peerid, data.Cmd);\n    // 取消订阅\n    RTM.unsubscribePeersOnlineStatus([data.peerid]);\n  } else if (data.Cmd === \"SwitchAudio\") {\n    // console.log(\"发送切换为语音模式\", data);\n    RTM.sendMessageToPeer(data.peerid, data.Cmd);\n  } else if (data.Cmd === \"InitiativeCall\") {\n    if (Store.type == true) {\n      RTM.cancelLocalInvitation(data.peerid);\n    } else {\n      RTM.refuseRemoteInvitation(data.peerid);\n    }\n    // 取消订阅\n    RTM.unsubscribePeersOnlineStatus([data.peerid]);\n  }\n});var _default =\nRTM;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvcnRtLmpzIl0sIm5hbWVzIjpbInJ0bU1vZHVsZSIsInVuaSIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJTdG9yZSIsInR5cGUiLCJsb2dpbmluZyIsInN0YXRlIiwicmVzb24iLCJSVE0iLCJpbml0Iiwib1VpZCIsIlV0aWxzIiwiZ2VuZXJhdGVOdW1iZXIiLCJzZXRDYWxsQmFjayIsInJlcyIsImNhbGxCYWNrIiwiY3JlYXRlSW5zdGFuY2UiLCJDb25maWciLCJSVE1fQVBQSUQiLCJsb2dpbiIsIlJUTVV0aWxzIiwidXNlTG9naW4iLCJjb2RlIiwic2V0Q2FsbEV2ZW50TGlzdGVuZXIiLCJydG1FdmVudCIsInJlYXNvbiIsIkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWQiLCJQZWVyTWVzc2FnZVJlY2VpdmVkIiwidGV4dCIsInBlZXJJZCIsIiRlbWl0IiwiTG9jYWxJbnZpdGF0aW9uQWNjZXB0ZWQiLCJMb2NhbEludml0YXRpb25DYW5jZWxlZCIsIkxvY2FsSW52aXRhdGlvbkZhaWx1cmUiLCJMb2NhbEludml0YXRpb25SZWNlaXZlZEJ5UGVlciIsIkxvY2FsSW52aXRhdGlvblJlZnVzZWQiLCJSZW1vdGVJbnZpdGF0aW9uQWNjZXB0ZWQiLCJSZW1vdGVJbnZpdGF0aW9uQ2FuY2VsZWQiLCJSZW1vdGVJbnZpdGF0aW9uRmFpbHVyZSIsIlJlbW90ZUludml0YXRpb25SZWNlaXZlZCIsInJlZnVzZVJlbW90ZUludml0YXRpb24iLCJSZW1vdGVJbnZpdGF0aW9uUmVmdXNlZCIsImxlYXZlIiwibG9nb3V0IiwicmVsZWFzZSIsImdldExvZ2luU3RhdHUiLCJxdWVyeVBlZXJzT25saW5lU3RhdHVzIiwicGVlcklkTGl0cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3Vic2NyaWJlUGVlcnNPbmxpbmVTdGF0dXMiLCJ1bnN1YnNjcmliZVBlZXJzT25saW5lU3RhdHVzIiwic2VuZE1lc3NhZ2VUb1BlZXIiLCJtYXNzZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiQ21kIiwic2VuZExvY2FsSW52aXRhdGlvbiIsImNhbGxlZUlkIiwiaW5mbyIsImFjY2VwdFJlbW90ZUludml0YXRpb24iLCJoaW50SW5mbyIsInVzZXJJZCIsImNhbmNlbExvY2FsSW52aXRhdGlvbiIsIiRvbiIsImRhdGEiLCJwZWVyaWQiXSwibWFwcGluZ3MiOiJ3UEFBQTtBQUNBLHVEOzs7OztBQUtBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLENBQXdCLGNBQXhCLENBQWxCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHO0FBQ1g7QUFDQUMsTUFBSSxFQUFFLEtBRks7QUFHWDtBQUNBQyxVQUFRLEVBQUU7QUFDVEMsU0FBSyxFQUFFLENBREU7QUFFVEMsU0FBSyxFQUFFLENBRkUsRUFKQyxFQUFaOzs7QUFTQTtBQUNBLElBQU1DLEdBQUcsR0FBRztBQUNYO0FBQ0FDLE1BQUkscUZBQUU7QUFDTDtBQUNJQyxrQkFGQyxHQUVNLEtBQUtDLGFBQU1DLGNBQU4sQ0FBcUIsQ0FBckIsQ0FGWDtBQUdMO0FBSEssdUNBSUNaLFNBQVMsQ0FBQ2EsV0FBVixDQUFzQixVQUFBQyxHQUFHLEVBQUk7QUFDbENOLG1CQUFHLENBQUNPLFFBQUosQ0FBYUQsR0FBYjtBQUNBLGVBRkssQ0FKRDs7QUFRQ2QseUJBQVMsQ0FBQ2dCLGNBQVYsQ0FBeUI7QUFDOUIsMkJBQVNDLGdCQUFPQyxTQURjLEVBQXpCO0FBRUgsMEJBQUFKLEdBQUcsRUFBSTtBQUNULCtCQUFZQSxHQUFaO0FBQ0EsaUJBSkssQ0FSRDs7QUFjQ2QseUJBQVMsQ0FBQ21CLEtBQVYsQ0FBZ0I7QUFDckIsMkJBQVMsRUFEWTtBQUVyQiw0QkFBVVQsSUFGVyxFQUFoQjtBQUdILDBCQUFDSSxHQUFELEVBQVM7QUFDWCwrQkFBWSxXQUFaLEVBQXlCQSxHQUF6QjtBQUNBTSxrQ0FBU0MsUUFBVCxDQUFrQlAsR0FBRyxDQUFDUSxJQUF0QixFQUE0QlosSUFBNUI7QUFDQSxpQkFOSyxDQWREOztBQXNCQ1YseUJB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QUtPLElBQUlELElBQUksQ0FBQ1QsR0FBTCxLQUFhLGFBQWpCLEVBQWdDO0FBQ3RDO0FBQ0FqRCxPQUFHLENBQUM2QyxpQkFBSixDQUFzQmEsSUFBSSxDQUFDQyxNQUEzQixFQUFtQ0QsSUFBSSxDQUFDVCxHQUF4QztBQUNBLEdBSE0sTUFHQSxJQUFJUyxJQUFJLENBQUNULEdBQUwsS0FBYSxnQkFBakIsRUFBbUM7QUFDekMsUUFBSXRELEtBQUssQ0FBQ0MsSUFBTixJQUFjLElBQWxCLEVBQXdCO0FBQ3ZCSSxTQUFHLENBQUN3RCxxQkFBSixDQUEwQkUsSUFBSSxDQUFDQyxNQUEvQjtBQUNBLEtBRkQsTUFFTztBQUNOM0QsU0FBRyxDQUFDZ0Msc0JBQUosQ0FBMkIwQixJQUFJLENBQUNDLE1BQWhDO0FBQ0E7QUFDRDtBQUNBM0QsT0FBRyxDQUFDNEMsNEJBQUosQ0FBaUMsQ0FBQ2MsSUFBSSxDQUFDQyxNQUFOLENBQWpDO0FBQ0E7QUFDRCxDQWxCRCxFO0FBbUJlM0QsRyIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWcgZnJvbSBcIi4vY29uZmlnLmpzXCJcclxuaW1wb3J0IHtcclxuXHRVdGlscyxcclxuXHRSVE1VdGlsc1xyXG59IGZyb20gJy4vdW50aWwuanMnXHJcblxyXG4vLyBydG0g5a6e5pe25raI5oGv5byV5YWlXHJcbmNvbnN0IHJ0bU1vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdBUi1SdG1Nb2R1bGUnKTtcclxubGV0IFN0b3JlID0ge1xyXG5cdC8vIOiiq+WPq+OAgeS4u+WPq+WMuuWIhlxyXG5cdHR5cGU6IGZhbHNlLFxyXG5cdC8vIOW9k+WJjeeZu+mZhueKtuaAgVxyXG5cdGxvZ2luaW5nOiB7XHJcblx0XHRzdGF0ZTogMCxcclxuXHRcdHJlc29uOiAwXHJcblx0fSxcclxufVxyXG4vLyBydG0g5a6e5pe25raI5oGv5bCB6KOFXHJcbmNvbnN0IFJUTSA9IHtcclxuXHQvLyDliJ3lp4vljJZcclxuXHRpbml0OiBhc3luYyAoKSA9PiB7XHJcblx0XHQvLyDnlJ/miJDmnKzlnLDnlKjmiLfmoIfor4YgVWlkXHJcblx0XHRsZXQgb1VpZCA9ICcnICsgVXRpbHMuZ2VuZXJhdGVOdW1iZXIoNCk7XHJcblx0XHQvLyDliJ3lp4vljJblm57osINcclxuXHRcdGF3YWl0IHJ0bU1vZHVsZS5zZXRDYWxsQmFjayhyZXMgPT4ge1xyXG5cdFx0XHRSVE0uY2FsbEJhY2socmVzKTtcclxuXHRcdH0pXHJcblx0XHQvLyDliJ3lp4vljJblrp7kvotcclxuXHRcdGF3YWl0IHJ0bU1vZHVsZS5jcmVhdGVJbnN0YW5jZSh7XHJcblx0XHRcdFwiYXBwSWRcIjogQ29uZmlnLlJUTV9BUFBJRFxyXG5cdFx0fSwgcmVzID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdH0pXHJcblx0XHQvLyDnmbvlvZUgUlRNIOezu+e7n1xyXG5cdFx0YXdhaXQgcnRtTW9kdWxlLmxvZ2luKHtcclxuXHRcdFx0XCJ0b2tlblwiOiBcIlwiLFxyXG5cdFx0XHRcInVzZXJJZFwiOiBvVWlkXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi55m75b2VIFJUTSDns7vnu59cIiwgcmVzKTtcclxuXHRcdFx0UlRNVXRpbHMudXNlTG9naW4ocmVzLmNvZGUsIG9VaWQpO1xyXG5cdFx0fSlcclxuXHRcdC8vIC8vIOS9v+eUqCBSVE0g5ZG85Y+r6YKA6K+3KOiuvue9rumCgOivt+WRvOWPq+WunuS+i+eahOebkeWQrOWZqClcclxuXHRcdGF3YWl0IHJ0bU1vZHVsZS5zZXRDYWxsRXZlbnRMaXN0ZW5lcigpO1xyXG5cdH0sXHJcblx0Ly8g5Zue6LCDXHJcblx0Y2FsbEJhY2s6IChyZXMpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Zue6LCDXCIsIHJlcy5ydG1FdmVudCk7XHJcblx0XHRzd2l0Y2ggKHJlcy5ydG1FdmVudCkge1xyXG5cdFx0XHQvLyBTREsg5LiOIFJUTSDns7vnu5/nmoTov57mjqXnirbmgIHlj5HnlJ/mlLnlj5jlm57osIPjgIJcclxuXHRcdFx0Y2FzZSAnb25Db25uZWN0aW9uU3RhdGVDaGFuZ2VkJzpcclxuXHRcdFx0XHRTdG9yZS5sb2dpbmluZyA9IHtcclxuXHRcdFx0XHRcdHN0YXRlOiByZXMuc3RhdGUsXHJcblx0XHRcdFx0XHRyZWFzb246IHJlcy5yZWFzb25cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdFJUTVV0aWxzLkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWQocmVzLnN0YXRlLCByZXMucmVhc29uKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDmlLbliLDngrnlr7nngrnmtojmga/lm57osINcclxuXHRcdFx0Y2FzZSAnb25QZWVyTWVzc2FnZVJlY2VpdmVkJzpcclxuXHRcdFx0XHRSVE1VdGlscy5QZWVyTWVzc2FnZVJlY2VpdmVkKHJlcy50ZXh0LCByZXMucGVlcklkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDooqvorqLpmIXnlKjmiLflnKjnur/nirbmgIHmlLnlj5hcclxuXHRcdFx0Y2FzZSAnb25QZWVyc09ubGluZVN0YXR1c0NoYW5nZWQnOlxyXG5cdFx0XHRcdHVuaS4kZW1pdChcIlBlZXJzT25saW5lU3RhdHVzQ2hhbmdlZFwiLCByZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/lOWbnue7meS4u+WPq++8muiiq+WPq+W3suaOpeWPl+WRvOWPq+mCgOivt1xyXG5cdFx0XHRjYXNlICdvbkxvY2FsSW52aXRhdGlvbkFjY2VwdGVkJzpcclxuXHRcdFx0XHRSVE1VdGlscy5Mb2NhbEludml0YXRpb25BY2NlcHRlZChyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/lOWbnue7meS4u+WPq++8muWRvOWPq+mCgOivt+W3suiiq+WPlua2iFxyXG5cdFx0XHRjYXNlICdvbkxvY2FsSW52aXRhdGlvbkNhbmNlbGVkJzpcclxuXHRcdFx0XHRSVE1VdGlscy5Mb2NhbEludml0YXRpb25DYW5jZWxlZChyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/lOWbnue7meS4u+WPq++8muWRvOWPq+mCgOivt+i/m+eoi+Wksei0pVxyXG5cdFx0XHRjYXNlICdvbkxvY2FsSW52aXRhdGlvbkZhaWx1cmUnOlxyXG5cdFx0XHRcdFJUTVV0aWxzLkxvY2FsSW52aXRhdGlvbkZhaWx1cmUocmVzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDov5Tlm57nu5nkuLvlj6vvvJrooqvlj6vlt7LmlLbliLDlkbzlj6vpgoDor7dcclxuXHRcdFx0Y2FzZSAnb25Mb2NhbEludml0YXRpb25SZWNlaXZlZEJ5UGVlcic6XHJcblx0XHRcdFx0UlRNVXRpbHMuTG9jYWxJbnZpdGF0aW9uUmVjZWl2ZWRCeVBlZXIocmVzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDov5Tlm57nu5nkuLvlj6vvvJrooqvlj6vlt7Lmi5Lnu53lkbzlj6vpgoDor7dcclxuXHRcdFx0Y2FzZSAnb25Mb2NhbEludml0YXRpb25SZWZ1c2VkJzpcclxuXHRcdFx0XHRSVE1VdGlscy5Mb2NhbEludml0YXRpb25SZWZ1c2VkKHJlcyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g6L+U5Zue57uZ6KKr5Y+r77ya5o6l5Y+X5ZG85Y+r6YKA6K+35oiQ5YqfXHJcblx0XHRcdGNhc2UgJ29uUmVtb3RlSW52aXRhdGlvbkFjY2VwdGVkJzpcclxuXHRcdFx0XHRSVE1VdGlscy5SZW1vdGVJbnZpdGF0aW9uQWNjZXB0ZWQocmVzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDov5Tlm57nu5nooqvlj6vvvJrkuLvlj6vlt7Llj5bmtojlkbzlj6vpgoDor7dcclxuXHRcdFx0Y2FzZSAnb25SZW1vdGVJbnZpdGF0aW9uQ2FuY2VsZWQnOlxyXG5cdFx0XHRcdFJUTVV0aWxzLlJlbW90ZUludml0YXRpb25DYW5jZWxlZChyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/lOWbnue7meiiq+WPq++8muadpeiHquS4u+WPq+eahOWRvOWPq+mCgOivt+i/m+eoi+Wksei0pVxyXG5cdFx0XHRjYXNlICdvblJlbW90ZUludml0YXRpb25GYWlsdXJlJzpcclxuXHRcdFx0XHRSVE1VdGlscy5SZW1vdGVJbnZpdGF0aW9uRmFpbHVyZShyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/lOWbnue7meiiq+WPq++8muaUtuWIsOS4gOS4quWRvOWPq+mCgOivt1xyXG5cdFx0XHRjYXNlICdvblJlbW90ZUludml0YXRpb25SZWNlaXZlZCc6XHJcblx0XHRcdFx0UlRNVXRpbHMuUmVtb3RlSW52aXRhdGlvblJlY2VpdmVkKHJlcywgUlRNLnJlZnVzZVJlbW90ZUludml0YXRpb24pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/lOWbnue7meiiq+WPq++8muaLkue7neWRvOWPq+mCgOivt+aIkOWKn1xyXG5cdFx0XHRjYXNlICdvblJlbW90ZUludml0YXRpb25SZWZ1c2VkJzpcclxuXHRcdFx0XHRSVE1VdGlscy5SZW1vdGVJbnZpdGF0aW9uUmVmdXNlZChyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8g56a75byAXHJcblx0bGVhdmU6IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8g55m75Ye6IFJUTVxyXG5cdFx0YXdhaXQgcnRtTW9kdWxlLmxvZ291dChyZXMgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn55m75Ye6IFJUTSBsb2dvdXQg5pa55rOV6LCD55SoJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICsgcmVzKTtcclxuXHRcdH0pXHJcblx0XHQvLyDph4rmlL4gUlRN5a6e5L6LXHJcblx0XHRhd2FpdCBydG1Nb2R1bGUucmVsZWFzZSgocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfph4rmlL4gUlRN5a6e5L6LIHJlbGVhc2Ug5pa55rOV6LCD55SoJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICsgcmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDojrflj5bnmbvpmYbnirbmgIFcclxuXHRnZXRMb2dpblN0YXR1OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBTdG9yZS5sb2dpbmluZztcclxuXHR9LFxyXG5cdC8vIOafpeivouaJgOacieeUqOaIt+aYr+WQpuWcqOe6v1xyXG5cdHF1ZXJ5UGVlcnNPbmxpbmVTdGF0dXM6IGFzeW5jIGZ1bmN0aW9uKHBlZXJJZExpdHMpIHtcclxuXHRcdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHJ0bU1vZHVsZS5xdWVyeVBlZXJzT25saW5lU3RhdHVzKHtcclxuXHRcdFx0XHRcInBlZXJJZHNcIjogcGVlcklkTGl0c1xyXG5cdFx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOiuoumYheaMh+WumuWNleS4quaIluWkmuS4queUqOaIt+eahOWcqOe6v+eKtuaAgVxyXG5cdHN1YnNjcmliZVBlZXJzT25saW5lU3RhdHVzOiBmdW5jdGlvbihwZWVySWRMaXRzKSB7XHJcblx0XHRydG1Nb2R1bGUuc3Vic2NyaWJlUGVlcnNPbmxpbmVTdGF0dXMoe1xyXG5cdFx0XHRcInBlZXJJZHNcIjogcGVlcklkTGl0c1xyXG5cdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHQvL3NtZXRoaW5nXHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6K6i6ZiF5oyH5a6a5Y2V5Liq5oiW5aSa5Liq55So5oi355qE5Zyo57q/54q25oCBXCIsIHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g5Y+W5raI6K6i6ZiFXHJcblx0dW5zdWJzY3JpYmVQZWVyc09ubGluZVN0YXR1czogZnVuY3Rpb24ocGVlcklkTGl0cykge1xyXG5cdFx0cnRtTW9kdWxlLnVuc3Vic2NyaWJlUGVlcnNPbmxpbmVTdGF0dXMoe1xyXG5cdFx0XHRcInBlZXJJZHNcIjogcGVlcklkTGl0c1xyXG5cdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHQvL3NtZXRoaW5nXHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5Y+W5raI6K6i6ZiF5oyH5a6a5Y2V5Liq5oiW5aSa5Liq55So5oi355qE5Zyo57q/54q25oCBXCIsIHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g5ZCR5oyH5a6a55So5oi35Y+R6YCB54K55a+554K55raI5oGvXHJcblx0c2VuZE1lc3NhZ2VUb1BlZXI6IGZ1bmN0aW9uKHBlZXJJZCwgbWFzc2dlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm1hc3NnZVwiLCBtYXNzZ2UpO1xyXG5cdFx0cnRtTW9kdWxlLnNlbmRNZXNzYWdlVG9QZWVyKHtcclxuXHRcdFx0XCJwZWVySWRcIjogcGVlcklkICsgJycsXHJcblx0XHRcdFwidGV4dFwiOiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0Q21kOiBtYXNzZ2VcclxuXHRcdFx0fSksXHJcblx0XHRcdFwiZW5hYmxlSGlzdG9yaWNhbE1lc3NhZ2luZ1wiOiB0cnVlLCAvLyDmmK/lkKbkv53lrZjkuLrljoblj7Lmtojmga9cclxuXHRcdFx0XCJlbmFibGVPZmZsaW5lTWVzc2FnaW5nXCI6IHRydWUgLy8g5piv5ZCm6K6+572u5Li656a757q/5raI5oGvXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdC8vIOmUmeivr+eggeivt+afpeeciyBodHRwczovL2RvY3MuYW55cnRjLmlvL2NuL1JlYWxUaW1lTWVzc2FnZS9hcGktcmVmL3J0bV9hbmRyb2lkL3BlZXJtZXNzYWdlZXJyb3JcclxuXHRcdFx0Y29uc29sZS5sb2coJ+WQkeaMh+WumueUqOaIt+WPkemAgeeCueWvueeCuea2iOaBryBzZW5kTWVzc2FnZVRvUGVlciDmlrnms5XosIPnlKgnLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgKyBKU09OXHJcblx0XHRcdFx0LnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDlj5HpgIHlkbzlj6vpgoDor7fnu5nlr7nmlrlcclxuXHRzZW5kTG9jYWxJbnZpdGF0aW9uOiBhc3luYyBmdW5jdGlvbihjYWxsZWVJZCwgaW5mbykge1xyXG5cdFx0Y29uc29sZS5sb2coXCLlj5HpgIHlkbzlj6vpgoDor7fnu5nlr7nmlrnnmoTmtojmga9cIiwgSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xyXG5cdFx0Ly8g6K6w5b2V5Li65Li75Y+rXHJcblx0XHRTdG9yZS50eXBlID0gdHJ1ZTtcclxuXHRcdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHJ0bU1vZHVsZS5zZW5kTG9jYWxJbnZpdGF0aW9uKHtcclxuXHRcdFx0XHRcImNhbGxlZUlkXCI6IGNhbGxlZUlkLCAvLyDooqvlkbzlj6vogIXnmoQgdXNlciBJRFxyXG5cdFx0XHRcdFwiY29udGVudFwiOiBKU09OLnN0cmluZ2lmeShpbmZvKSAvLyDpgoDor7flhoXlrrlcclxuXHRcdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUocmVzLmNvZGUpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOaOpeWPl+adpeiHquWvueaWueeahOWRvOWPq+mCgOivt1x0XHJcblx0YWNjZXB0UmVtb3RlSW52aXRhdGlvbjogZnVuY3Rpb24oY2FsbGVlSWQsIGluZm8gPSBcIlwiKSB7XHJcblx0XHRTdG9yZS50eXBlID0gZmFsc2U7XHJcblx0XHQvLyBjb25zb2xlLmxvZygn5o6l5Y+X5p2l6Ieq5a+55pa555qE5ZG85Y+r6YKA6K+3Jyk7XHJcblx0XHRydG1Nb2R1bGUuYWNjZXB0UmVtb3RlSW52aXRhdGlvbih7XHJcblx0XHRcdFwiY2FsbGVlSWRcIjogY2FsbGVlSWQsIC8vIOS+m+iiq+WPq+iOt+WPluS4u+WPq+eahOeUqOaItyBJRFxyXG5cdFx0XHRcInJlc3BvbnNlXCI6IGluZm8gPyBKU09OLnN0cmluZ2lmeShpbmZvKSA6IFwiXCIgLy8g6YKA6K+35ZON5bqUXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdFV0aWxzLmhpbnRJbmZvKHJlcy5jb2RlID09PSAwID8gJycgOlxyXG5cdFx0XHRcdFwi6LCD55SoIGFjY2VwdFJlbW90ZUludml0YXRpb24g5o6l5Y+X5p2l6Ieq5a+55pa555qE5ZG85Y+r6YKA6K+35aSx6LSlXCIpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyDorqLpmIXlr7nmlrnlnKjnur/nirbmgIFcclxuXHRcdFJUTS5zdWJzY3JpYmVQZWVyc09ubGluZVN0YXR1cyhbY2FsbGVlSWRdKTtcclxuXHR9LFxyXG5cdC8vIOaLkue7neadpeiHquWvueaWueeahOWRvOWPq+mCgOivt1xyXG5cdHJlZnVzZVJlbW90ZUludml0YXRpb246IGZ1bmN0aW9uKHVzZXJJZCwgaW5mbyA9IFwiXCIpIHtcclxuXHRcdFN0b3JlLnR5cGUgPSBmYWxzZTtcclxuXHRcdHJ0bU1vZHVsZS5yZWZ1c2VSZW1vdGVJbnZpdGF0aW9uKHtcclxuXHRcdFx0XCJjYWxsZWVJZFwiOiB1c2VySWQsXHJcblx0XHRcdFwicmVzcG9uc2VcIjogaW5mbyA/IEpTT04uc3RyaW5naWZ5KGluZm8pIDogXCJcIiAvLyDpgoDor7flhoXlrrlcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0VXRpbHMuaGludEluZm8ocmVzLmNvZGUgPT09IDAgPyBcIlwiIDpcclxuXHRcdFx0XHRcIuiwg+eUqCBjYW5jZWxMb2NhbEludml0YXRpb24g5Y+W5raI5ZG85Y+r5aSx6LSlXCIpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDlj5bmtojnu5nlr7nmlrnnmoTlkbzlj6vpgoDor7dcclxuXHRjYW5jZWxMb2NhbEludml0YXRpb246IGZ1bmN0aW9uKGNhbGxlZUlkLCBpbmZvID0gXCJcIikge1xyXG5cdFx0Y29uc29sZS5sb2coXCLlj5bmtojnu5nlr7nmlrnnmoTlkbzlj6vpgoDor7dcIik7XHJcblx0XHRTdG9yZS50eXBlID0gZmFsc2U7XHJcblx0XHRydG1Nb2R1bGUuY2FuY2VsTG9jYWxJbnZpdGF0aW9uKHtcclxuXHRcdFx0XCJjYWxsZWVJZFwiOiBjYWxsZWVJZCwgLy8g6KKr5ZG85Y+r6ICF55qEIHVzZXIgSURcclxuXHRcdFx0XCJjb250ZW50XCI6IGluZm8gPyBKU09OLnN0cmluZ2lmeShpbmZvKSA6IFwiXCIgLy8g6YKA6K+35YaF5a65XHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5Y+W5raI57uZ5a+55pa555qE5ZG85Y+r6YKA6K+3XCIsIHJlcyk7XHJcblx0XHRcdFV0aWxzLmhpbnRJbmZvKHJlcy5jb2RlID09PSAwID8gXCJcIiA6XHJcblx0XHRcdFx0XCLosIPnlKggY2FuY2VsTG9jYWxJbnZpdGF0aW9uIOWPlua2iOWRvOWPq+Wksei0pVwiKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g5Y+W5raI6K6i6ZiFXHJcblx0XHRSVE0udW5zdWJzY3JpYmVQZWVyc09ubGluZVN0YXR1cyhbY2FsbGVlSWRdKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIOebkea1iyDlj5HpgIHmtojmga9cclxudW5pLiRvbihcInNlbmRNZXNzYWdlVG9QZWVyXCIsIGRhdGEgPT4ge1xyXG5cdGlmIChkYXRhLkNtZCA9PT0gXCJFbmRDYWxsXCIpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwi5Y+R6YCB5oyC5pat5raI5oGvXCIsIGRhdGEpO1xyXG5cdFx0UlRNLnNlbmRNZXNzYWdlVG9QZWVyKGRhdGEucGVlcmlkLCBkYXRhLkNtZCk7XHJcblx0XHQvLyDlj5bmtojorqLpmIVcclxuXHRcdFJUTS51bnN1YnNjcmliZVBlZXJzT25saW5lU3RhdHVzKFtkYXRhLnBlZXJpZF0pO1xyXG5cdH0gZWxzZSBpZiAoZGF0YS5DbWQgPT09IFwiU3dpdGNoQXVkaW9cIikge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCLlj5HpgIHliIfmjaLkuLror63pn7PmqKHlvI9cIiwgZGF0YSk7XHJcblx0XHRSVE0uc2VuZE1lc3NhZ2VUb1BlZXIoZGF0YS5wZWVyaWQsIGRhdGEuQ21kKTtcclxuXHR9IGVsc2UgaWYgKGRhdGEuQ21kID09PSBcIkluaXRpYXRpdmVDYWxsXCIpIHtcclxuXHRcdGlmIChTdG9yZS50eXBlID09IHRydWUpIHtcclxuXHRcdFx0UlRNLmNhbmNlbExvY2FsSW52aXRhdGlvbihkYXRhLnBlZXJpZCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRSVE0ucmVmdXNlUmVtb3RlSW52aXRhdGlvbihkYXRhLnBlZXJpZCk7XHJcblx0XHR9XHJcblx0XHQvLyDlj5bmtojorqLpmIVcclxuXHRcdFJUTS51bnN1YnNjcmliZVBlZXJzT25saW5lU3RhdHVzKFtkYXRhLnBlZXJpZF0pO1xyXG5cdH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgUlRNO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!******************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // SDK 配置\nvar Config = {\n  RTC_APPID: \"ee0ca1b2bf559ea6823698acb0600e62\", //RTC 应用ID\n  RTM_APPID: \"ee0ca1b2bf559ea6823698acb0600e62\" //RTM 应用ID\n};var _default =\n\nConfig;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvY29uZmlnLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIlJUQ19BUFBJRCIsIlJUTV9BUFBJRCJdLCJtYXBwaW5ncyI6IndGQUFBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2RDLFdBQVMsRUFBRSxrQ0FERyxFQUNpQztBQUMvQ0MsV0FBUyxFQUFFLGtDQUZHLENBRWlDO0FBRmpDLENBQWYsQzs7QUFLZUYsTSIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNESyDphY3nva5cclxuY29uc3QgQ29uZmlnID0ge1xyXG5cdFJUQ19BUFBJRDogXCJlZTBjYTFiMmJmNTU5ZWE2ODIzNjk4YWNiMDYwMGU2MlwiLCAvL1JUQyDlupTnlKhJRFxyXG5cdFJUTV9BUFBJRDogXCJlZTBjYTFiMmJmNTU5ZWE2ODIzNjk4YWNiMDYwMGU2MlwiLCAvL1JUTSDlupTnlKhJRFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!***************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC_arCall/until/rtc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 54));\nvar _until = __webpack_require__(/*! ./until.js */ 50);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n\n\n// rtc 音视频引入\nvar rtcModule = uni.requireNativePlugin('AR-RtcModule');\n// uniapp 监测\nvar Store = {\n  // 检测 Store 存在的定时器\n  existTimer: null,\n  destroyRtcTimer: null,\n  channel: \"\" // 频道\n};\n// rtc 实时音频通话\nvar RTC = {\n  // 初始化\n  init: function () {var _init = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(etAudioAiNoise) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n\n                rtcModule.setCallBack(function (res) {\n                  RTC.callBack(res);\n                }));case 2:_context.next = 4;return (\n\n                rtcModule.create({\n                  \"appId\": _config.default.RTC_APPID },\n                function (res) {\n                  __f__(\"log\", '初始化实例 rtc', res, \" at until/rtc.js:27\");\n                }));case 4:_context.t0 =\n\n              etAudioAiNoise;if (!_context.t0) {_context.next = 8;break;}_context.next = 8;return rtcModule.setParameters({\n                Cmd: 'SetAudioAiNoise',\n                Enable: 1 },\n              function (res) {\n                __f__(\"log\", '私人定制', res, \" at until/rtc.js:34\");\n              });case 8:case \"end\":return _context.stop();}}}, _callee);}));function init(_x) {return _init.apply(this, arguments);}return init;}(),\n\n  // 相关回调(仅列举常用回调)\n  callBack: function callBack(res) {\n    switch (res.engineEvent) {\n      case \"onConnectionLost\":\n        __f__(\"log\", \"onConnectionLost\", res, \" at until/rtc.js:41\");\n        break;\n      // 网络连接状态已改变回调\n      case \"onConnectionStateChanged\":\n        __f__(\"log\", \"网络连接状态已改变回调\", res, \" at until/rtc.js:45\");\n        break;\n      // 发生警告回调\n      case \"onWarning\":\n        _until.RTCUtils.Warning(res.warningCode);\n        break;\n      // 发生错误回调\n      case \"onError\":\n        _until.RTCUtils.Error(res.errorCode);\n        break;\n      // 加入频道成功回调\n      case \"onJoinChannelSuccess\":\n        // 本地渲染\n        RTC.localVideo({\n          \"channel\": Store.channelId + '',\n          \"uid\": Store.uid + '' });\n\n        break;\n      // 远端用户加入当前频道回调\n      case \"onUserJoined\":\n        _until.Utils.hintRTCInfo('用户' + res.uid + '加入频道', 'info');\n        break;\n      // 远端用户离开当前频道回调\n      case \"onUserOffline\":\n        __f__(\"log\", \"远端用户离开当前频道回调\", res, \" at until/rtc.js:69\");\n        // RTC.leave();\n        RTC.destroyRtc();\n        break;\n      // 网络连接状态已改变回调\n      case \"onConnectionStateChanged\":\n        _until.RTCUtils.ConnectionStateChanged(res);\n        break;\n      // 已显示远端视频首帧回调\n      case \"onFirstRemoteVideoFrame\":\n        break;\n      case \"onFirstRemoteVideoDecoded\":\n        RTC.remotenableVideo({\n          channel: Store.channel,\n          uid: res.uid });\n\n        break;\n      // 远端用户视频状态发生已变化回调(当频道内的用户超过 17 时，该回调可能不准确)\n      case \"onRemoteVideoStateChanged\":\n        _until.RTCUtils.RemoteVideoStateChanged(res);\n        break;\n      // \t// 本地网络类型发生改变回调\n      // case \"onNetworkTypeChanged\":\n      // \tbreak;\n      // \t// 网络连接中断\n      // case \"onConnectionLost\":\n      // \tbreak;\n\n      // \t// 远端音频状态发生改变回调\n      // case \"onRemoteAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地音频状态发生改变回调\n      // case \"onLocalAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地视频状态发生改变回调\n      // case \"onLocalVideoStateChanged\":\n      // \tbreak;\n      // \t// 重新加入频道回调\n      // case \"onRejoinChannelSuccess\":\n      // \tbreak;\n      // \t// 离开频道回调\n      // case \"onLeaveChannel\":\n      // \tbreak;\n      // 已发送本地音频首帧回调\n      // case \"onFirstLocalAudioFrame\":\n      // \tbreak;\n      // \t// 已显示本地视频首帧回调\n      // case \"onFirstLocalVideoFrame\":\n      // \tbreak;\n      // \t// Token 服务即将过期回调\n      // case \"onTokenPrivilegeWillExpire\":\n      // \tbreak;\n      // \t// Token 过期回调\n      // case \"onRequestToken\":\n      // \tbreak;\n      // \t// 用户角色已切换回调(直播场景下)\n      // case \"onClientRoleChanged\":\n      // \tbreak;\n      // \t// 本地或远端视频大小或旋转信息发生改变回调\n      // case \"onVideoSizeChanged\":\n      // \tbreak;\n      // \t// 通话中远端音频流的统计信息回调\n      // case \"onRemoteAudioStats\":\n      // \tbreak;\n      // \t// 当前通话统计回调。 该回调在通话中每两秒触发一次\n      // case \"onRtcStats\":\n      // \tbreak;\n      // \t// 通话中每个用户的网络上下行 last mile 质量报告回调\n      // case \"onNetworkQuality\":\n      // \tbreak;\n      // \t// 通话中本地视频流的统计信息回调\n      // case \"onLocalVideoStats\":\n      // \tbreak;\n      // \t// 通话中本地音频流的统计信息回调\n      // case \"onLocalAudioStats\":\n      // \tbreak;\n      // \t// 通话中远端视频流的统计信息回调\n      // case \"onRemoteVideoStats\":\n      // \tbreak;\n    }\n  },\n  // 加入频道\n  joinChannel: function () {var _joinChannel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(info) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              Store.channel = info.channelId;\n              // 开启视频\n              Store.mode = info.mode;if (!(\n              Store.mode === 0)) {_context2.next = 5;break;}_context2.next = 5;return (\n                RTC.enableVideo());case 5:_context2.next = 7;return (\n\n\n                RTC.setEnableSpeakerphone(true));case 7:_context2.next = 9;return (\n\n                rtcModule.joinChannel({\n                  \"token\": info.token,\n                  \"channelId\": info.channelId + '',\n                  \"uid\": info.uid },\n                function (res) {\n                  __f__(\"log\", 'RTC joinChannel 方法调用', res.code === 0 ? '成功' : '失败：' + res, \" at until/rtc.js:166\");\n                }));case 9:case \"end\":return _context2.stop();}}}, _callee2);}));function joinChannel(_x2) {return _joinChannel.apply(this, arguments);}return joinChannel;}(),\n\n  // 音频是否免提\n  setEnableSpeakerphone: function setEnableSpeakerphone(fase) {\n    // 默认扬声器播放\n    rtcModule.setEnableSpeakerphone({\n      \"enabled\": fase },\n    function (res) {\n      __f__(\"log\",  true ? '开启' : undefined, res.code === 0 ? '成功' : '失败：' +\n      res, \" at until/rtc.js:175\");\n    });\n  },\n  // 音频是否关闭\n  enableLocalAudio: function enableLocalAudio(checked) {\n    rtcModule.enableLocalAudio({\n      \"enabled\": checked },\n    function (res) {\n      __f__(\"log\",  true ? '开启' : undefined, res.code === 0 ? '成功' : '失败：' + res, \" at until/rtc.js:184\");\n    });\n  },\n  // 摄像头（前后）\n  switchCamera: function switchCamera() {\n    rtcModule.switchCamera(function (res) {\n      __f__(\"log\", 'RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at until/rtc.js:190\");\n    });\n  },\n  // 转语音\n  toSpeech: function toSpeech() {\n    // 关闭视频模块\n    rtcModule.disableVideo(function (res) {\n      __f__(\"log\", 'RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at until/rtc.js:198\");\n    });\n  },\n  // 启用视频（加入房间后自动发布）\n  enableVideo: function enableVideo() {\n    Store.existTimer && clearInterval(Store.existTimer);\n    Store.existTimer = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!\n              Store.VideoConfig) {_context3.next = 6;break;}\n              clearInterval(Store.existTimer);\n              // 设置视频编码属性\n              _context3.next = 4;return rtcModule.setVideoEncoderConfiguration(Store.VideoConfig, function (res) {\n                __f__(\"log\", 'RTC 设置视频编码属性 setVideoEncoderConfiguration 方法调用', res.\n                code ===\n                0 ? '成功' :\n                '失败：' + res, \" at until/rtc.js:210\");\n              });case 4:_context3.next = 6;return (\n\n                rtcModule.enableVideo(function (res) {\n                  __f__(\"log\", 'RTC 启用视频 enableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n                  res, \" at until/rtc.js:217\");\n                }));case 6:case \"end\":return _context3.stop();}}}, _callee3);})),\n\n    50);\n  },\n  // 本地启用视频后\n  localVideo: function () {var _localVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (\n\n\n                Store.location.setupLocalVideo({\n                  \"renderMode\": 1,\n                  \"channelId\": data.channel,\n                  \"uid\": data.uid,\n                  \"mirrorMode\": 0 },\n                function (res) {\n                  __f__(\"log\", '渲染视频', res, \" at until/rtc.js:233\");\n                }));case 2:_context4.next = 4;return (\n\n                Store.location.startPreview(function (res) {\n                  __f__(\"log\", '本地预览', res, \" at until/rtc.js:237\");\n                }));case 4:case \"end\":return _context4.stop();}}}, _callee4);}));function localVideo(_x3) {return _localVideo.apply(this, arguments);}return localVideo;}(),\n\n  // 远端加入房间后进行\n  remotenableVideo: function () {var _remotenableVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (\n                Store.remote.setupRemoteVideo({\n                  \"renderMode\": 1,\n                  \"channelId\": data.channel,\n                  \"uid\": data.uid,\n                  \"mirrorMode\": 0 },\n                function (res) {\n                  __f__(\"log\", '渲染远端视频', res, \" at until/rtc.js:248\");\n                }));case 2:_context5.next = 4;return (\n\n                Store.remote.startPreview(function (res) {\n                  __f__(\"log\", '远端本地预览', res, \" at until/rtc.js:252\");\n                }));case 4:case \"end\":return _context5.stop();}}}, _callee5);}));function remotenableVideo(_x4) {return _remotenableVideo.apply(this, arguments);}return remotenableVideo;}(),\n\n  /**\r\n                                                                                                                                                                                                * 如果你只在一个页面写 可以直接调 destory \r\n                                                                                                                                                                                               \t如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel\r\n                                                                                                                                                                                                */\n  // 挂断\n  leave: function leave() {\n    // 离开频道\n    rtcModule.leaveChannel(function (res) {\n      __f__(\"log\", \"调用离开频道 leaveChannel\", res, \" at until/rtc.js:263\");\n    });\n  },\n  // 销毁实例\n  destroyRtc: function destroyRtc() {\n    if (rtcModule && rtcModule.destroyRtc) {\n      // 销毁实例\n      rtcModule.destroyRtc(function (res) {\n        __f__(\"log\", \"销毁实例\", res, \" at until/rtc.js:271\");\n        if (res.code === 0) {\n          _until.RTCUtils.destroyRtc();\n        }\n      });\n      // 销毁 rtc 监听函数;\n      uni.$off('location-cavasview');\n      uni.$off('PeersOnlineStatusChanged');\n      uni.$off('rtc-endcall');\n    }\n  } };\n\n\n// 监测 rtc 视频渲染所需\nuni.$on(\"location-cavasview\", function (data) {\n  if (data) {\n    Store = Object.assign(Store, data);\n  }\n});\n// 监测用户在线状态（一旦断网就挂断）\nuni.$on('PeersOnlineStatusChanged', function (data) {\n  if (data) {\n    var oStatus = data.peersStatus[0];\n    if (oStatus && oStatus.state === 2) {\n      // 用户离线\n      _until.Utils.hintRTCInfo('远端用户离线', 'error');\n      // 判断在 rtm 还是在 rtc\n      if (!Store.channel && !Store.uid) {\n        // // 清除(呼叫时取消呼叫)\n        uni.$emit(\"sendMessageToPeer\", {\n          Cmd: \"InitiativeCall\",\n          peerid: oStatus.peerId });\n\n        uni.$emit(\"sendMessageToPeer\", {\n          peerid: oStatus.peerId,\n          Cmd: \"EndCall\" });\n\n      } else if (Store.channel) {\n        setTimeout(function () {\n          // 发送挂断信息 （ArCall 逻辑所需）\n          uni.$emit(\"sendMessageToPeer\", {\n            peerid: oStatus.peerId,\n            Cmd: \"EndCall\" });\n\n          // 清除\n          RTC.destroyRtc(oStatus.peerId);\n        }, 1000);\n      }\n    }\n  }\n});\n\n// 监测 rtc 收到的挂断信息\nuni.$on(\"rtc-endcall\", function (data) {\n  // 挂断\n  if (data.message === \"EndCall\") {\n    __f__(\"log\", \"监测 rtc 收到的挂断信息\", data, \" at until/rtc.js:327\");\n    _until.Utils.restoreAll();\n    if (!Store.channel && !Store.uid) {\n      // // 清除(呼叫时取消呼叫)\n      uni.$emit(\"sendMessageToPeer\", {\n        Cmd: \"InitiativeCall\",\n        peerid: data.peerId });\n\n    } else if (Store.channel) {\n      RTC.destroyRtc();\n    }\n  }\n});var _default =\nRTC;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW50aWwvcnRjLmpzIl0sIm5hbWVzIjpbInJ0Y01vZHVsZSIsInVuaSIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJTdG9yZSIsImV4aXN0VGltZXIiLCJkZXN0cm95UnRjVGltZXIiLCJjaGFubmVsIiwiUlRDIiwiaW5pdCIsImV0QXVkaW9BaU5vaXNlIiwic2V0Q2FsbEJhY2siLCJyZXMiLCJjYWxsQmFjayIsImNyZWF0ZSIsIkNvbmZpZyIsIlJUQ19BUFBJRCIsInNldFBhcmFtZXRlcnMiLCJDbWQiLCJFbmFibGUiLCJlbmdpbmVFdmVudCIsIlJUQ1V0aWxzIiwiV2FybmluZyIsIndhcm5pbmdDb2RlIiwiRXJyb3IiLCJlcnJvckNvZGUiLCJsb2NhbFZpZGVvIiwiY2hhbm5lbElkIiwidWlkIiwiVXRpbHMiLCJoaW50UlRDSW5mbyIsImRlc3Ryb3lSdGMiLCJDb25uZWN0aW9uU3RhdGVDaGFuZ2VkIiwicmVtb3RlbmFibGVWaWRlbyIsIlJlbW90ZVZpZGVvU3RhdGVDaGFuZ2VkIiwiam9pbkNoYW5uZWwiLCJpbmZvIiwibW9kZSIsImVuYWJsZVZpZGVvIiwic2V0RW5hYmxlU3BlYWtlcnBob25lIiwidG9rZW4iLCJjb2RlIiwiZmFzZSIsImVuYWJsZUxvY2FsQXVkaW8iLCJjaGVja2VkIiwic3dpdGNoQ2FtZXJhIiwidG9TcGVlY2giLCJkaXNhYmxlVmlkZW8iLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJWaWRlb0NvbmZpZyIsInNldFZpZGVvRW5jb2RlckNvbmZpZ3VyYXRpb24iLCJkYXRhIiwibG9jYXRpb24iLCJzZXR1cExvY2FsVmlkZW8iLCJzdGFydFByZXZpZXciLCJyZW1vdGUiLCJzZXR1cFJlbW90ZVZpZGVvIiwibGVhdmUiLCJsZWF2ZUNoYW5uZWwiLCIkb2ZmIiwiJG9uIiwiT2JqZWN0IiwiYXNzaWduIiwib1N0YXR1cyIsInBlZXJzU3RhdHVzIiwic3RhdGUiLCIkZW1pdCIsInBlZXJpZCIsInBlZXJJZCIs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QSxRQUFJLENBQUNwRSxLQUFLLENBQUNHLE9BQVAsSUFBa0IsQ0FBQ0gsS0FBSyxDQUFDd0IsR0FBN0IsRUFBa0M7QUFDakM7QUFDQTFCLFNBQUcsQ0FBQ2lFLEtBQUosQ0FBVSxtQkFBVixFQUErQjtBQUM5QmpELFdBQUcsRUFBRSxnQkFEeUI7QUFFOUJrRCxjQUFNLEVBQUVoQixJQUFJLENBQUNpQixNQUZpQixFQUEvQjs7QUFJQSxLQU5ELE1BTU8sSUFBSWpFLEtBQUssQ0FBQ0csT0FBVixFQUFtQjtBQUN6QkMsU0FBRyxDQUFDdUIsVUFBSjtBQUNBO0FBQ0Q7QUFDRCxDQWZELEU7QUFnQmV2QixHIiwiZmlsZSI6IjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9jb25maWcuanNcIjtcclxuaW1wb3J0IHtcclxuXHRVdGlscyxcclxuXHRSVENVdGlsc1xyXG59IGZyb20gJy4vdW50aWwuanMnO1xyXG4vLyBydGMg6Z+z6KeG6aKR5byV5YWlXHJcbmNvbnN0IHJ0Y01vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdBUi1SdGNNb2R1bGUnKTtcclxuLy8gdW5pYXBwIOebkea1i1xyXG5sZXQgU3RvcmUgPSB7XHJcblx0Ly8g5qOA5rWLIFN0b3JlIOWtmOWcqOeahOWumuaXtuWZqFxyXG5cdGV4aXN0VGltZXI6IG51bGwsXHJcblx0ZGVzdHJveVJ0Y1RpbWVyOiBudWxsLFxyXG5cdGNoYW5uZWw6IFwiXCIsIC8vIOmikemBk1xyXG59O1xyXG4vLyBydGMg5a6e5pe26Z+z6aKR6YCa6K+dXHJcbmNvbnN0IFJUQyA9IHtcclxuXHQvLyDliJ3lp4vljJZcclxuXHRpbml0OiBhc3luYyBmdW5jdGlvbihldEF1ZGlvQWlOb2lzZSkge1xyXG5cdFx0Ly8g5Yid5aeL5YyW5Zue6LCDIFxyXG5cdFx0YXdhaXQgcnRjTW9kdWxlLnNldENhbGxCYWNrKHJlcyA9PiB7XHJcblx0XHRcdFJUQy5jYWxsQmFjayhyZXMpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyDliJ3lp4vljJblrp7kvosgUlRDX0FQUElEXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuY3JlYXRlKHtcclxuXHRcdFx0XCJhcHBJZFwiOiBDb25maWcuUlRDX0FQUElEXHJcblx0XHR9LCByZXMgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5Yid5aeL5YyW5a6e5L6LIHJ0YycsIHJlcyk7XHJcblx0XHR9KTtcclxuXHRcdC8vIOengeS6uuWumuWItiAo5pys6aG555uu5a6a5Yi277ya5pm66IO96ZmN5ZmqIClcclxuXHRcdGV0QXVkaW9BaU5vaXNlICYmIGF3YWl0IHJ0Y01vZHVsZS5zZXRQYXJhbWV0ZXJzKHtcclxuXHRcdFx0Q21kOiAnU2V0QXVkaW9BaU5vaXNlJyxcclxuXHRcdFx0RW5hYmxlOiAxXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfnp4HkurrlrprliLYnLCByZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDnm7jlhbPlm57osIMo5LuF5YiX5Li+5bi455So5Zue6LCDKVxyXG5cdGNhbGxCYWNrOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdHN3aXRjaCAocmVzLmVuZ2luZUV2ZW50KSB7XHJcblx0XHRcdGNhc2UgXCJvbkNvbm5lY3Rpb25Mb3N0XCI6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJvbkNvbm5lY3Rpb25Mb3N0XCIsIHJlcyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g572R57uc6L+e5o6l54q25oCB5bey5pS55Y+Y5Zue6LCDXHJcblx0XHRcdGNhc2UgXCJvbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIue9kee7nOi/nuaOpeeKtuaAgeW3suaUueWPmOWbnuiwg1wiLCByZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOWPkeeUn+itpuWRiuWbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25XYXJuaW5nXCI6XHJcblx0XHRcdFx0UlRDVXRpbHMuV2FybmluZyhyZXMud2FybmluZ0NvZGUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOWPkeeUn+mUmeivr+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25FcnJvclwiOlxyXG5cdFx0XHRcdFJUQ1V0aWxzLkVycm9yKHJlcy5lcnJvckNvZGUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOWKoOWFpemikemBk+aIkOWKn+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Kb2luQ2hhbm5lbFN1Y2Nlc3NcIjpcclxuXHRcdFx0XHQvLyDmnKzlnLDmuLLmn5NcclxuXHRcdFx0XHRSVEMubG9jYWxWaWRlbyh7XHJcblx0XHRcdFx0XHRcImNoYW5uZWxcIjogU3RvcmUuY2hhbm5lbElkICsgJycsXHJcblx0XHRcdFx0XHRcInVpZFwiOiBTdG9yZS51aWQgKyAnJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDov5znq6/nlKjmiLfliqDlhaXlvZPliY3popHpgZPlm57osINcclxuXHRcdFx0Y2FzZSBcIm9uVXNlckpvaW5lZFwiOlxyXG5cdFx0XHRcdFV0aWxzLmhpbnRSVENJbmZvKCfnlKjmiLcnICsgcmVzLnVpZCArICfliqDlhaXpopHpgZMnLCAnaW5mbycpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/nOerr+eUqOaIt+emu+W8gOW9k+WJjemikemBk+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Vc2VyT2ZmbGluZVwiOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6L+c56uv55So5oi356a75byA5b2T5YmN6aKR6YGT5Zue6LCDXCIsIHJlcyk7XHJcblx0XHRcdFx0Ly8gUlRDLmxlYXZlKCk7XHJcblx0XHRcdFx0UlRDLmRlc3Ryb3lSdGMoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDnvZHnu5zov57mjqXnirbmgIHlt7LmlLnlj5jlm57osINcclxuXHRcdFx0Y2FzZSBcIm9uQ29ubmVjdGlvblN0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdFJUQ1V0aWxzLkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWQocmVzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDlt7LmmL7npLrov5znq6/op4bpopHpppbluKflm57osINcclxuXHRcdFx0Y2FzZSBcIm9uRmlyc3RSZW1vdGVWaWRlb0ZyYW1lXCI6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJvbkZpcnN0UmVtb3RlVmlkZW9EZWNvZGVkXCI6XHJcblx0XHRcdFx0UlRDLnJlbW90ZW5hYmxlVmlkZW8oe1xyXG5cdFx0XHRcdFx0Y2hhbm5lbDogU3RvcmUuY2hhbm5lbCxcclxuXHRcdFx0XHRcdHVpZDogcmVzLnVpZFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g6L+c56uv55So5oi36KeG6aKR54q25oCB5Y+R55Sf5bey5Y+Y5YyW5Zue6LCDKOW9k+mikemBk+WGheeahOeUqOaIt+i2hei/hyAxNyDml7bvvIzor6Xlm57osIPlj6/og73kuI3lh4bnoa4pXHJcblx0XHRcdGNhc2UgXCJvblJlbW90ZVZpZGVvU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0UlRDVXRpbHMuUmVtb3RlVmlkZW9TdGF0ZUNoYW5nZWQocmVzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOacrOWcsOe9kee7nOexu+Wei+WPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbk5ldHdvcmtUeXBlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDnvZHnu5zov57mjqXkuK3mlq1cclxuXHRcdFx0XHQvLyBjYXNlIFwib25Db25uZWN0aW9uTG9zdFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdC8vIFx0Ly8g6L+c56uv6Z+z6aKR54q25oCB5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVtb3RlQXVkaW9TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5pys5Zyw6Z+z6aKR54q25oCB5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTG9jYWxBdWRpb1N0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDmnKzlnLDop4bpopHnirbmgIHlj5HnlJ/mlLnlj5jlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Mb2NhbFZpZGVvU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmHjeaWsOWKoOWFpemikemBk+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblJlam9pbkNoYW5uZWxTdWNjZXNzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOemu+W8gOmikemBk+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxlYXZlQ2hhbm5lbFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8g5bey5Y+R6YCB5pys5Zyw6Z+z6aKR6aaW5bin5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uRmlyc3RMb2NhbEF1ZGlvRnJhbWVcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5bey5pi+56S65pys5Zyw6KeG6aKR6aaW5bin5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uRmlyc3RMb2NhbFZpZGVvRnJhbWVcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8gVG9rZW4g5pyN5Yqh5Y2z5bCG6L+H5pyf5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uVG9rZW5Qcml2aWxlZ2VXaWxsRXhwaXJlXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIFRva2VuIOi/h+acn+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblJlcXVlc3RUb2tlblwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDnlKjmiLfop5LoibLlt7LliIfmjaLlm57osIMo55u05pKt5Zy65pmv5LiLKVxyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkNsaWVudFJvbGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOacrOWcsOaIlui/nOerr+inhumikeWkp+Wwj+aIluaXi+i9rOS/oeaBr+WPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblZpZGVvU2l6ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YCa6K+d5Lit6L+c56uv6Z+z6aKR5rWB55qE57uf6K6h5L+h5oGv5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVtb3RlQXVkaW9TdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDlvZPliY3pgJror53nu5/orqHlm57osIPjgIIg6K+l5Zue6LCD5Zyo6YCa6K+d5Lit5q+P5Lik56eS6Kem5Y+R5LiA5qyhXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUnRjU3RhdHNcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YCa6K+d5Lit5q+P5Liq55So5oi355qE572R57uc5LiK5LiL6KGMIGxhc3QgbWlsZSDotKjph4/miqXlkYrlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25OZXR3b3JrUXVhbGl0eVwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3mnKzlnLDop4bpopHmtYHnmoTnu5/orqHkv6Hmga/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Mb2NhbFZpZGVvU3RhdHNcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YCa6K+d5Lit5pys5Zyw6Z+z6aKR5rWB55qE57uf6K6h5L+h5oGv5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTG9jYWxBdWRpb1N0YXRzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmAmuivneS4rei/nOerr+inhumikea1geeahOe7n+iuoeS/oeaBr+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvblJlbW90ZVZpZGVvU3RhdHNcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8g5Yqg5YWl6aKR6YGTXHJcblx0am9pbkNoYW5uZWw6IGFzeW5jIGZ1bmN0aW9uKGluZm8pIHtcclxuXHRcdFN0b3JlLmNoYW5uZWwgPSBpbmZvLmNoYW5uZWxJZDtcclxuXHRcdC8vIOW8gOWQr+inhumikVxyXG5cdFx0U3RvcmUubW9kZSA9IGluZm8ubW9kZTtcclxuXHRcdGlmIChTdG9yZS5tb2RlID09PSAwKSB7XHJcblx0XHRcdGF3YWl0IFJUQy5lbmFibGVWaWRlbygpO1xyXG5cdFx0fVxyXG5cdFx0Ly8g5byA5ZCv5YWN5o+QXHJcblx0XHRhd2FpdCBSVEMuc2V0RW5hYmxlU3BlYWtlcnBob25lKHRydWUpO1xyXG5cdFx0Ly8g5Yqg5YWlIHJ0YyDpopHpgZNcclxuXHRcdGF3YWl0IHJ0Y01vZHVsZS5qb2luQ2hhbm5lbCh7XHJcblx0XHRcdFwidG9rZW5cIjogaW5mby50b2tlbixcclxuXHRcdFx0XCJjaGFubmVsSWRcIjogaW5mby5jaGFubmVsSWQgKyAnJyxcclxuXHRcdFx0XCJ1aWRcIjogaW5mby51aWQsXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMgam9pbkNoYW5uZWwg5pa55rOV6LCD55SoJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICsgcmVzKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8g6Z+z6aKR5piv5ZCm5YWN5o+QXHJcblx0c2V0RW5hYmxlU3BlYWtlcnBob25lOiBmdW5jdGlvbihmYXNlKSB7XHJcblx0XHQvLyDpu5jorqTmiazlo7Dlmajmkq3mlL5cclxuXHRcdHJ0Y01vZHVsZS5zZXRFbmFibGVTcGVha2VycGhvbmUoe1xyXG5cdFx0XHRcImVuYWJsZWRcIjogZmFzZVxyXG5cdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUlRDIOi/nOerr+WKoOWFpeaIv+mXtOWQjuiuvue9ricgKyBmYXNlID8gJ+W8gOWQrycgOiAn5YWz6ZetJyArICfmiazlo7Dlmajmkq3mlL4nLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgK1xyXG5cdFx0XHRcdHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOmfs+mikeaYr+WQpuWFs+mXrVxyXG5cdGVuYWJsZUxvY2FsQXVkaW86IGZ1bmN0aW9uKGNoZWNrZWQpIHtcclxuXHRcdHJ0Y01vZHVsZS5lbmFibGVMb2NhbEF1ZGlvKHtcclxuXHRcdFx0XCJlbmFibGVkXCI6IGNoZWNrZWRcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDpn7PpopEnICsgY2hlY2tlZCA/ICflvIDlkK8nIDogJ+WFs+mXrScsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArIHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g5pGE5YOP5aS077yI5YmN5ZCO77yJXHJcblx0c3dpdGNoQ2FtZXJhOiBmdW5jdGlvbigpIHtcclxuXHRcdHJ0Y01vZHVsZS5zd2l0Y2hDYW1lcmEoKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUlRDIOaRhOWDj+WktOWJjeWQjiBzd2l0Y2hDYW1lcmEg5pa55rOV6LCD55SoJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICtcclxuXHRcdFx0XHRyZXMpO1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOi9rOivremfs1xyXG5cdHRvU3BlZWNoOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOWFs+mXreinhumikeaooeWdl1xyXG5cdFx0cnRjTW9kdWxlLmRpc2FibGVWaWRlbygocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg5YWz6Zet6KeG6aKR5qih5Z2XIGRpc2FibGVWaWRlbyDmlrnms5XosIPnlKgnLCByZXMuY29kZSA9PT0gMCA/ICfmiJDlip8nIDogJ+Wksei0pe+8micgK1xyXG5cdFx0XHRcdHJlcyk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8g5ZCv55So6KeG6aKR77yI5Yqg5YWl5oi/6Ze05ZCO6Ieq5Yqo5Y+R5biD77yJXHJcblx0ZW5hYmxlVmlkZW86IGZ1bmN0aW9uKCkge1xyXG5cdFx0U3RvcmUuZXhpc3RUaW1lciAmJiBjbGVhckludGVydmFsKFN0b3JlLmV4aXN0VGltZXIpXHJcblx0XHRTdG9yZS5leGlzdFRpbWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRpZiAoU3RvcmUuVmlkZW9Db25maWcpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKFN0b3JlLmV4aXN0VGltZXIpXHJcblx0XHRcdFx0Ly8g6K6+572u6KeG6aKR57yW56CB5bGe5oCnXHJcblx0XHRcdFx0YXdhaXQgcnRjTW9kdWxlLnNldFZpZGVvRW5jb2RlckNvbmZpZ3VyYXRpb24oU3RvcmUuVmlkZW9Db25maWcsIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSVEMg6K6+572u6KeG6aKR57yW56CB5bGe5oCnIHNldFZpZGVvRW5jb2RlckNvbmZpZ3VyYXRpb24g5pa55rOV6LCD55SoJywgcmVzXHJcblx0XHRcdFx0XHRcdC5jb2RlID09PVxyXG5cdFx0XHRcdFx0XHQwID8gJ+aIkOWKnycgOlxyXG5cdFx0XHRcdFx0XHQn5aSx6LSl77yaJyArIHJlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8g5ZCv55So6KeG6aKRXHJcblx0XHRcdFx0YXdhaXQgcnRjTW9kdWxlLmVuYWJsZVZpZGVvKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSVEMg5ZCv55So6KeG6aKRIGVuYWJsZVZpZGVvIOaWueazleiwg+eUqCcsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArXHJcblx0XHRcdFx0XHRcdHJlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sIDUwKVxyXG5cdH0sXHJcblx0Ly8g5pys5Zyw5ZCv55So6KeG6aKR5ZCOXHJcblx0bG9jYWxWaWRlbzogYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCLmnKzlnLDlkK/nlKjop4bpopHlkI5cIixkYXRhKTtcclxuXHRcdC8vIC8vIOa4suafk+inhumikVxyXG5cdFx0YXdhaXQgU3RvcmUubG9jYXRpb24uc2V0dXBMb2NhbFZpZGVvKHtcclxuXHRcdFx0XCJyZW5kZXJNb2RlXCI6IDEsXHJcblx0XHRcdFwiY2hhbm5lbElkXCI6IGRhdGEuY2hhbm5lbCxcclxuXHRcdFx0XCJ1aWRcIjogZGF0YS51aWQsXHJcblx0XHRcdFwibWlycm9yTW9kZVwiOiAwXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfmuLLmn5Pop4bpopEnLCByZXMpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyDmnKzlnLDpooTop4hcclxuXHRcdGF3YWl0IFN0b3JlLmxvY2F0aW9uLnN0YXJ0UHJldmlldygocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfmnKzlnLDpooTop4gnLCByZXMpO1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOi/nOerr+WKoOWFpeaIv+mXtOWQjui/m+ihjFxyXG5cdHJlbW90ZW5hYmxlVmlkZW86IGFzeW5jIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGF3YWl0IFN0b3JlLnJlbW90ZS5zZXR1cFJlbW90ZVZpZGVvKHtcclxuXHRcdFx0XCJyZW5kZXJNb2RlXCI6IDEsXHJcblx0XHRcdFwiY2hhbm5lbElkXCI6IGRhdGEuY2hhbm5lbCxcclxuXHRcdFx0XCJ1aWRcIjogZGF0YS51aWQsXHJcblx0XHRcdFwibWlycm9yTW9kZVwiOiAwXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfmuLLmn5Pov5znq6/op4bpopEnLCByZXMpO1xyXG5cdFx0fSlcclxuXHRcdC8vIOacrOWcsOmihOiniFxyXG5cdFx0YXdhaXQgU3RvcmUucmVtb3RlLnN0YXJ0UHJldmlldygocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfov5znq6/mnKzlnLDpooTop4gnLCByZXMpO1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOWmguaenOS9oOWPquWcqOS4gOS4qumhtemdouWGmSDlj6/ku6Xnm7TmjqXosIMgZGVzdG9yeSBcclxuXHRcdOWmguaenOS9oOaYr+eUqOeahOWNleS+iyDnprvlvIDpobXpnaLlvJXmk47kuI3plIDmr4Eg5bCx55SoIGxlYXZlQ2hhbm5lbFxyXG5cdCAqL1xyXG5cdC8vIOaMguaWrVxyXG5cdGxlYXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOemu+W8gOmikemBk1xyXG5cdFx0cnRjTW9kdWxlLmxlYXZlQ2hhbm5lbCgocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6LCD55So56a75byA6aKR6YGTIGxlYXZlQ2hhbm5lbFwiLCByZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDplIDmr4Hlrp7kvotcclxuXHRkZXN0cm95UnRjOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChydGNNb2R1bGUgJiYgcnRjTW9kdWxlLmRlc3Ryb3lSdGMpIHtcclxuXHRcdFx0Ly8g6ZSA5q+B5a6e5L6LXHJcblx0XHRcdHJ0Y01vZHVsZS5kZXN0cm95UnRjKChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIumUgOavgeWunuS+i1wiLCByZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0UlRDVXRpbHMuZGVzdHJveVJ0YygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIOmUgOavgSBydGMg55uR5ZCs5Ye95pWwO1xyXG5cdFx0XHR1bmkuJG9mZignbG9jYXRpb24tY2F2YXN2aWV3Jyk7XHJcblx0XHRcdHVuaS4kb2ZmKCdQZWVyc09ubGluZVN0YXR1c0NoYW5nZWQnKTtcclxuXHRcdFx0dW5pLiRvZmYoJ3J0Yy1lbmRjYWxsJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyDnm5HmtYsgcnRjIOinhumikea4suafk+aJgOmcgFxyXG51bmkuJG9uKFwibG9jYXRpb24tY2F2YXN2aWV3XCIsIGRhdGEgPT4ge1xyXG5cdGlmIChkYXRhKSB7XHJcblx0XHRTdG9yZSA9IE9iamVjdC5hc3NpZ24oU3RvcmUsIGRhdGEpO1xyXG5cdH1cclxufSlcclxuLy8g55uR5rWL55So5oi35Zyo57q/54q25oCB77yI5LiA5pem5pat572R5bCx5oyC5pat77yJXHJcbnVuaS4kb24oJ1BlZXJzT25saW5lU3RhdHVzQ2hhbmdlZCcsIGRhdGEgPT4ge1xyXG5cdGlmIChkYXRhKSB7XHJcblx0XHRjb25zdCBvU3RhdHVzID0gZGF0YS5wZWVyc1N0YXR1c1swXTtcclxuXHRcdGlmIChvU3RhdHVzICYmIG9TdGF0dXMuc3RhdGUgPT09IDIpIHtcclxuXHRcdFx0Ly8g55So5oi356a757q/XHJcblx0XHRcdFV0aWxzLmhpbnRSVENJbmZvKCfov5znq6/nlKjmiLfnprvnur8nLCAnZXJyb3InKTtcclxuXHRcdFx0Ly8g5Yik5pat5ZyoIHJ0bSDov5jmmK/lnKggcnRjXHJcblx0XHRcdGlmICghU3RvcmUuY2hhbm5lbCAmJiAhU3RvcmUudWlkKSB7XHJcblx0XHRcdFx0Ly8gLy8g5riF6ZmkKOWRvOWPq+aXtuWPlua2iOWRvOWPqylcclxuXHRcdFx0XHR1bmkuJGVtaXQoXCJzZW5kTWVzc2FnZVRvUGVlclwiLCB7XHJcblx0XHRcdFx0XHRDbWQ6IFwiSW5pdGlhdGl2ZUNhbGxcIixcclxuXHRcdFx0XHRcdHBlZXJpZDogb1N0YXR1cy5wZWVySWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1bmkuJGVtaXQoXCJzZW5kTWVzc2FnZVRvUGVlclwiLCB7XHJcblx0XHRcdFx0XHRwZWVyaWQ6IG9TdGF0dXMucGVlcklkLFxyXG5cdFx0XHRcdFx0Q21kOiBcIkVuZENhbGxcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChTdG9yZS5jaGFubmVsKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyDlj5HpgIHmjILmlq3kv6Hmga8g77yIQXJDYWxsIOmAu+i+keaJgOmcgO+8iVxyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KFwic2VuZE1lc3NhZ2VUb1BlZXJcIiwge1xyXG5cdFx0XHRcdFx0XHRwZWVyaWQ6IG9TdGF0dXMucGVlcklkLFxyXG5cdFx0XHRcdFx0XHRDbWQ6IFwiRW5kQ2FsbFwiLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyDmuIXpmaRcclxuXHRcdFx0XHRcdFJUQy5kZXN0cm95UnRjKG9TdGF0dXMucGVlcklkKTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuXHJcbi8vIOebkea1iyBydGMg5pS25Yiw55qE5oyC5pat5L+h5oGvXHJcbnVuaS4kb24oXCJydGMtZW5kY2FsbFwiLCBkYXRhID0+IHtcclxuXHQvLyDmjILmlq1cclxuXHRpZiAoZGF0YS5tZXNzYWdlID09PSBcIkVuZENhbGxcIikge1xyXG5cdFx0Y29uc29sZS5sb2coXCLnm5HmtYsgcnRjIOaUtuWIsOeahOaMguaWreS/oeaBr1wiLCBkYXRhKTtcclxuXHRcdFV0aWxzLnJlc3RvcmVBbGwoKTtcclxuXHRcdGlmICghU3RvcmUuY2hhbm5lbCAmJiAhU3RvcmUudWlkKSB7XHJcblx0XHRcdC8vIC8vIOa4hemZpCjlkbzlj6vml7blj5bmtojlkbzlj6spXHJcblx0XHRcdHVuaS4kZW1pdChcInNlbmRNZXNzYWdlVG9QZWVyXCIsIHtcclxuXHRcdFx0XHRDbWQ6IFwiSW5pdGlhdGl2ZUNhbGxcIixcclxuXHRcdFx0XHRwZWVyaWQ6IGRhdGEucGVlcklkXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmIChTdG9yZS5jaGFubmVsKSB7XHJcblx0XHRcdFJUQy5kZXN0cm95UnRjKCk7XHJcblx0XHR9XHJcblx0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBSVEM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ })
],[[0,"app-config"]]]);