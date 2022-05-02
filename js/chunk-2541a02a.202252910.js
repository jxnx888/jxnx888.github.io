(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2541a02a"],{

/***/ "0287":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/aboutme/aboutme.vue?vue&type=template&id=2dcade0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aboutme_wrapper"},[_c('introduction')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/aboutme/aboutme.vue?vue&type=template&id=2dcade0c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/aboutme/components/introduction.vue?vue&type=template&id=33eb8198&scoped=true&
var introductionvue_type_template_id_33eb8198_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"introduction"},[_c('pdfViewer',{attrs:{"pdfUrl":("" + (this.$i18n.locale === "zh_cn" ? _vm.pdfCN : _vm.pdfEN))}})],1)}
var introductionvue_type_template_id_33eb8198_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/aboutme/components/introduction.vue?vue&type=template&id=33eb8198&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/pdfViewer/index.vue?vue&type=template&id=3c817457&scoped=true&
var pdfViewervue_type_template_id_3c817457_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"preView",staticClass:"priview-pdf-img"},[_c('div',{ref:"printBtn",class:("print-btn " + (_vm.absoluteBtn ? "print-btn-abs" : "")),on:{"click":function($event){return _vm.pdfPrintAll()}}},[_vm._v(_vm._s(_vm.$t('PRINT')))]),_vm._l((_vm.numPages),function(i){return _c('pdf',{key:i,ref:"pdfView",refInFor:true,staticStyle:{"width":"100%","max-width":"1200px","margin":"auto"},attrs:{"src":_vm.src,"page":i}})})],2)}
var pdfViewervue_type_template_id_3c817457_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/common/pdfViewer/index.vue?vue&type=template&id=3c817457&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-pdf/src/vuePdfNoSss.vue + 6 modules
var vuePdfNoSss = __webpack_require__("858e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/pdfViewer/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pdfViewervue_type_script_lang_js_ = ({
  name: 'pdf-viewer',
  components: {
    pdf: vuePdfNoSss["a" /* default */]
  },
  data: function data() {
    return {
      src: '',
      numPages: undefined,
      absoluteBtn: false
    };
  },
  props: {
    // 外部传递pdfUrl 即可
    pdfUrl: {
      type: String,
      default: '',
      require: true
    }
  },
  computed: {
    pdfSrc: function pdfSrc() {
      return this.pdfUrl;
    }
  },
  methods: {
    loadingTask: function loadingTask() {
      var _this = this;

      this.src = vuePdfNoSss["a" /* default */].createLoadingTask(this.pdfSrc);
      this.src.promise.then(function (pdf) {
        _this.numPages = pdf.numPages;
      }).catch(function (error) {
        console.log('There was an pdf pdf error, error.response');
        console.error(error);
      });
    },
    pdfPrintAll: function pdfPrintAll() {
      // this.$refs.pdfView[0].print()
      window.open("https://ning-xin.com/".concat(this.pdfSrc));
    },
    btnScroll: function btnScroll() {
      //当前滚动位置
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset; //元素总高度

      var boxHeight = this.$refs.preView.offsetHeight; //元素可滚动的最低最低位置

      var bottomGap = boxHeight - this.$refs.printBtn.offsetHeight - window.innerHeight + 160 + 100 + 100 - 34 - 10 - 90; // 160 footer高度 100 nav高度 100 按钮固定的高度bottom 1rem 按钮高度34 10 margin 90 按钮距离footer多少停留

      this.absoluteBtn = scrollTop >= bottomGap;
    }
  },
  mounted: function mounted() {
    this.loadingTask();
    window.addEventListener('scroll', this.btnScroll);
  },
  watch: {
    '$i18n.locale': function $i18nLocale(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$nextTick(function () {
          this.loadingTask();
        });
      }
    }
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.btnScroll, false);
  },
  //keep-alive 激活状态，无法销毁监听，需要使用deactivated来销毁
  deactivated: function deactivated() {
    window.removeEventListener('scroll', this.btnScroll, false);
  }
});
// CONCATENATED MODULE: ./src/common/pdfViewer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_pdfViewervue_type_script_lang_js_ = (pdfViewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/pdfViewer/index.vue?vue&type=style&index=0&id=3c817457&lang=stylus&scoped=true&
var pdfViewervue_type_style_index_0_id_3c817457_lang_stylus_scoped_true_ = __webpack_require__("3733");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/common/pdfViewer/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_pdfViewervue_type_script_lang_js_,
  pdfViewervue_type_template_id_3c817457_scoped_true_render,
  pdfViewervue_type_template_id_3c817457_scoped_true_staticRenderFns,
  false,
  null,
  "3c817457",
  null
  
)

/* harmony default export */ var pdfViewer = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/aboutme/components/introduction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var introductionvue_type_script_lang_js_ = ({
  name: "introduction",
  components: {
    pdfViewer: pdfViewer
  },
  data: function data() {
    return {
      pdfCN: 'file/XinNing-Resume-CN.pdf',
      pdfEN: 'file/XinNing-Resume-EN.pdf'
    };
  }
});
// CONCATENATED MODULE: ./src/pages/aboutme/components/introduction.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_introductionvue_type_script_lang_js_ = (introductionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/aboutme/components/introduction.vue





/* normalize component */

var introduction_component = Object(componentNormalizer["a" /* default */])(
  components_introductionvue_type_script_lang_js_,
  introductionvue_type_template_id_33eb8198_scoped_true_render,
  introductionvue_type_template_id_33eb8198_scoped_true_staticRenderFns,
  false,
  null,
  "33eb8198",
  null
  
)

/* harmony default export */ var introduction = (introduction_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/aboutme/aboutme.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var aboutmevue_type_script_lang_js_ = ({
  name: "aboutme",
  components: {
    introduction: introduction
  }
});
// CONCATENATED MODULE: ./src/pages/aboutme/aboutme.vue?vue&type=script&lang=js&
 /* harmony default export */ var aboutme_aboutmevue_type_script_lang_js_ = (aboutmevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/aboutme/aboutme.vue





/* normalize component */

var aboutme_component = Object(componentNormalizer["a" /* default */])(
  aboutme_aboutmevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2dcade0c",
  null
  
)

/* harmony default export */ var aboutme = __webpack_exports__["default"] = (aboutme_component.exports);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3733":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3c817457_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4587");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3c817457_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3c817457_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3c817457_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4587":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=chunk-2541a02a.202252910.js.map