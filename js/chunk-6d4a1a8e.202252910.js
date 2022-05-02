(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6d4a1a8e"],{

/***/ "42d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/contact/contact.vue?vue&type=template&id=5241bb60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact_wrapper"},[_c('Mapbox',{attrs:{"centerLatLon":_vm.centerLatLngA,"zoom":_vm.zoom}}),_c('contactInfo')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/contact/contact.vue?vue&type=template&id=5241bb60&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/contact/components/mapbox.vue?vue&type=template&id=48af59d6&scoped=true&
var mapboxvue_type_template_id_48af59d6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"basicMapbox",class:("mapContainer-" + (_vm.$root.$userAgent)),attrs:{"id":"mapContainer"}})}
var mapboxvue_type_template_id_48af59d6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/contact/components/mapbox.vue?vue&type=template&id=48af59d6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js + 2 modules
var createForOfIteratorHelper = __webpack_require__("b85c");

// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.js
var mapbox_gl = __webpack_require__("e192");
var mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(mapbox_gl);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/contact/components/mapbox.vue?vue&type=script&lang=js&


//
//
//
//
 // import MapboxLanguage  from '@mapbox/mapbox-gl-language'

/* harmony default export */ var mapboxvue_type_script_lang_js_ = ({
  name: 'mapbox',
  props: {
    centerLatLng: {
      type: Array,
      require: true
    },
    zoom: {
      type: Number,
      require: false,
      default: function _default() {
        return 9;
      }
    }
  },
  data: function data() {
    return {
      publicPath: "/",
      MapboxAccessToken: 'pk.eyJ1IjoianhueDg4OCIsImEiOiJja3gwam15cm0wMzM3Mm9uazFoajY3MDA0In0.ZzWly2VumNGqIOuM6-COEQ',
      MapboxStyle: 'mapbox://styles/jxnx888/ckx0jl4xl2ahb14muqthr3a0p',
      centerLatLngAr: [-73.56244160935152, 45.49302570938374],
      geojson: [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-73.56244160935152, 45.49302570938374]
        },
        'properties': {
          'title': 'My Location',
          'description': "I'm here!",
          'iconSize': [30, 30]
        }
      }]
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init: function init() {
      mapbox_gl_default.a.accessToken = this.MapboxAccessToken; // 英文标注转换为中文
      // mapboxgl.setRTLTextPlugin(
      //   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js"
      // );

      var map = new mapbox_gl_default.a.Map({
        container: this.$refs.basicMapbox,
        style: this.MapboxStyle,
        center: this.centerLatLngAr,
        zoom: this.zoom
      }); // 设置语言
      // var language = new MapboxLanguage({ defaultLanguage: "zh" });
      // map.addControl(language);
      // Create a new marker.
      // Set marker options.
      // eslint-disable-next-line no-unused-vars

      /*const marker = new mapboxgl.Marker({
        color: '#FFFFFF',
        draggable: false
      }).setLngLat(this.centerLatLngAr)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${this.geojson[0].properties.title}</h3><p>${this.geojson[0].properties.description}</p>`
            )
        )
        .addTo(map)
      */

      this.addMarkers(map); // 地图导航

      var nav = new mapbox_gl_default.a.NavigationControl();
      map.addControl(nav, 'top-left'); // 比例尺

      var scale = new mapbox_gl_default.a.ScaleControl({
        maxWidth: 80,
        unit: 'imperial'
      });
      map.addControl(scale);
      scale.setUnit('metric'); // 全图

      map.addControl(new mapbox_gl_default.a.FullscreenControl()); // 定位

      map.addControl(new mapbox_gl_default.a.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
      }));
    },
    addMarkers: function addMarkers(map) {
      // add markers to map
      // Add markers to the map.
      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.geojson),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var marker = _step.value;
          // Create a DOM element for each marker.
          var el = document.createElement('div');
          var width = marker.properties.iconSize[0];
          var height = marker.properties.iconSize[1];
          el.className = 'marker';
          el.style.backgroundImage = "url(".concat(this.calcUrl, ")");
          el.style.width = "".concat(width, "px");
          el.style.height = "".concat(height, "px");
          el.style.backgroundSize = '100%'; // el.addEventListener('click', () => {
          //   window.alert(marker.properties.message);
          // });
          // Add markers to the map.

          new mapbox_gl_default.a.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  },
  computed: {
    mapSize: function mapSize() {
      var styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      };
      return styleObj;
    },
    calcUrl: function calcUrl() {
      // console.log("this.icon", this.publicPath + "image/head_ico.png")
      return this.publicPath + "image/head_ico.png";
    }
  }
});
// CONCATENATED MODULE: ./src/pages/contact/components/mapbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mapboxvue_type_script_lang_js_ = (mapboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.css?vue&type=style&index=0&lang=css&
var mapbox_glvue_type_style_index_0_lang_css_ = __webpack_require__("b126");

// EXTERNAL MODULE: ./src/pages/contact/components/mapbox.vue?vue&type=style&index=1&id=48af59d6&lang=stylus&scoped=true&
var mapboxvue_type_style_index_1_id_48af59d6_lang_stylus_scoped_true_ = __webpack_require__("733f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/contact/components/mapbox.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mapboxvue_type_script_lang_js_,
  mapboxvue_type_template_id_48af59d6_scoped_true_render,
  mapboxvue_type_template_id_48af59d6_scoped_true_staticRenderFns,
  false,
  null,
  "48af59d6",
  null
  
)

/* harmony default export */ var mapbox = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/contact/components/contactInfo.vue?vue&type=template&id=703af68d&scoped=true&
var contactInfovue_type_template_id_703af68d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("contactInfo contactInfo-" + (_vm.$root.$userAgent))},[_c('div',{staticClass:"contactInfo_wrapper"},[_c('h1',{staticClass:"top_title"},[_vm._v(_vm._s(_vm.$t('contact.topTitle[0]')))]),_c('div',{staticClass:"top_subtitle"},[_vm._v(_vm._s(_vm.$t('contact.topTitle[1]')))]),_c('div',{staticClass:"contact_body clearfix"},[_c('div',{staticClass:"left"},[_c('div',{staticClass:"left_wrapper"},[_vm._m(0),_c('div',{staticClass:"contact_intro"},[_vm._v(_vm._s(_vm.$t('contact.getInTouch[0]')))]),_c('div',{staticClass:"contact_intro contact_intro2"},[_vm._v(_vm._s(_vm.$t('contact.getInTouch[1]')))]),_vm._m(1),_vm._m(2),_vm._m(3),_vm._m(4)])]),_c('div',{staticClass:"right"},[_c('div',{staticClass:"right_wrapper"},[_c('div',{staticClass:"info_title clearfix"},[_vm._m(5),_c('form',{attrs:{"id":"sendEmail"}},[_c('div',{staticClass:"info_content"},[_c('div',{staticClass:"each_input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],ref:"name",attrs:{"type":"text","placeholder":_vm.$t('contact.message[0]'),"id":"name","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}}),(_vm.nameValid)?_c('div',{staticClass:"valid",on:{"click":function($event){return _vm.clearFocus(1)}}},[_vm._v(_vm._s(_vm.$t('contact.validation[0]')))]):_vm._e()]),_c('div',{staticClass:"each_input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],ref:"email",attrs:{"type":"text","placeholder":_vm.$t('contact.message[1]'),"id":"email","name":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),(_vm.emailValid)?_c('div',{staticClass:"valid",on:{"click":function($event){return _vm.clearFocus(2)}}},[_vm._v(_vm._s(_vm.$t('contact.validation[1]')))]):_vm._e(),(_vm.emailRegexValid)?_c('div',{staticClass:"valid",on:{"click":function($event){return _vm.clearFocus(6)}}},[_vm._v(_vm._s(_vm.$t('contact.validation[2]')))]):_vm._e()]),_c('div',{staticClass:"each_input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phone),expression:"phone"}],ref:"phone",attrs:{"type":"number","placeholder":_vm.$t('contact.message[2]'),"id":"phone","name":"phone"},domProps:{"value":(_vm.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.phone=$event.target.value}}}),(_vm.phoneValid)?_c('div',{staticClass:"valid",on:{"click":function($event){return _vm.clearFocus(3)}}},[_vm._v(_vm._s(_vm.$t('contact.validation[3]')))]):_vm._e()]),_c('div',{staticClass:"each_input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subject),expression:"subject"}],ref:"subject",attrs:{"type":"text","placeholder":_vm.$t('contact.message[3]'),"id":"subject"},domProps:{"value":(_vm.subject)},on:{"input":function($event){if($event.target.composing){ return; }_vm.subject=$event.target.value}}}),(_vm.subjectValid)?_c('div',{staticClass:"valid",on:{"click":function($event){return _vm.clearFocus(4)}}},[_vm._v(_vm._s(_vm.$t('contact.validation[4]')))]):_vm._e()]),_c('div',{staticClass:"each_input"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],ref:"message",attrs:{"placeholder":_vm.$t('contact.message[4]'),"rows":"5","id":"message"},domProps:{"value":(_vm.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}}),(_vm.messageValid)?_c('div',{staticClass:"valid",on:{"click":function($event){return _vm.clearFocus(5)}}},[_vm._v(_vm._s(_vm.$t('contact.validation[5]')))]):_vm._e()]),_c('input',{attrs:{"type":"hidden","id":"formEmail","name":"email"}}),_c('input',{attrs:{"type":"hidden","id":"formMessage","name":"message"}}),_c('div',{staticClass:"submit"},[_c('div',{staticClass:"submit_btn",attrs:{"id":"submitForm"},on:{"click":function($event){return _vm.submit()}}},[_vm._v(_vm._s(_vm.submitTxt))]),(_vm.submitFailed)?_c('div',{staticClass:"valid"},[_vm._v(_vm._s(_vm.$t('contact.validation[6]')))]):_vm._e(),(_vm.submitSucc)?_c('div',{staticClass:"valid valid_succ"},[_vm._v(_vm._s(_vm.$t('contact.validation[7]')))]):_vm._e()])])])])])])])])])}
var contactInfovue_type_template_id_703af68d_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info_title clearfix"},[_c('div',{staticClass:"title_wrapper clearfix"},[_c('div',{staticClass:"num"},[_vm._v("01")]),_c('div',{staticClass:"contactWay"},[_vm._v("GET IN "),_c('br'),_vm._v(" TOUCH")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"each_method clearfix"},[_c('a',{attrs:{"href":"tel:+86 18535424777"}},[_c('div',{staticClass:"icon icon_phone"}),_c('div',{staticClass:"each_content"},[_vm._v("+86 18535424777")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"each_method clearfix"},[_c('a',{attrs:{"href":"mailto:ningxin1007@hotmail.com"}},[_c('div',{staticClass:"icon icon_email"}),_c('div',{staticClass:"each_content"},[_vm._v("ningxin1007@hotmail.com")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"each_method clearfix"},[_c('a',{attrs:{"href":"https://www.linkedin.com/in/xin-ning-28818b115/"}},[_c('div',{staticClass:"icon icon_linkedin"}),_c('div',{staticClass:"each_content"},[_vm._v("@Xin Ning")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"each_method clearfix"},[_c('a',{attrs:{"href":"https://www.linkedin.com/in/xin-ning-28818b115/"}},[_c('div',{staticClass:"icon icon_facebook"}),_c('div',{staticClass:"each_content"},[_vm._v("@Xin Ning")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title_wrapper clearfix"},[_c('div',{staticClass:"num"},[_vm._v("02")]),_c('div',{staticClass:"contactWay"},[_vm._v("SEND ME "),_c('br'),_vm._v(" A MESSAGE")])])}]


// CONCATENATED MODULE: ./src/pages/contact/components/contactInfo.vue?vue&type=template&id=703af68d&scoped=true&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/contact/components/contactInfo.vue?vue&type=script&lang=js&
var contactInfovue_type_script_lang_js_ = __webpack_require__("5927");

// CONCATENATED MODULE: ./src/pages/contact/components/contactInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_contactInfovue_type_script_lang_js_ = (contactInfovue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/pages/contact/components/contactInfo.vue?vue&type=style&index=0&id=703af68d&scoped=true&lang=stylus&
var contactInfovue_type_style_index_0_id_703af68d_scoped_true_lang_stylus_ = __webpack_require__("c0bf");

// CONCATENATED MODULE: ./src/pages/contact/components/contactInfo.vue






/* normalize component */

var contactInfo_component = Object(componentNormalizer["a" /* default */])(
  components_contactInfovue_type_script_lang_js_,
  contactInfovue_type_template_id_703af68d_scoped_true_render,
  contactInfovue_type_template_id_703af68d_scoped_true_staticRenderFns,
  false,
  null,
  "703af68d",
  null
  
)

/* harmony default export */ var contactInfo = (contactInfo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/contact/contact.vue?vue&type=script&lang=js&
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
// import baidumap from "./components/baidumap";


/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: 'contact',
  components: {
    // baidumap,
    // hereMap,
    Mapbox: mapbox,
    contactInfo: contactInfo
  },
  data: function data() {
    return {
      // centerLatLng:{lat: 45.49302570938374, lng:  -73.56244160935152},
      centerLatLng: {
        lat: -73.56244160935152,
        lng: 45.49302570938374
      },
      centerLatLngA: [-73.56244160935152, 45.49302570938374],
      zoom: 15
    };
  }
});
// CONCATENATED MODULE: ./src/pages/contact/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var contact_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/contact/contact.vue?vue&type=style&index=0&id=5241bb60&scoped=true&lang=stylus&
var contactvue_type_style_index_0_id_5241bb60_scoped_true_lang_stylus_ = __webpack_require__("9f0b");

// CONCATENATED MODULE: ./src/pages/contact/contact.vue






/* normalize component */

var contact_component = Object(componentNormalizer["a" /* default */])(
  contact_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5241bb60",
  null
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_component.exports);

/***/ }),

/***/ "5522":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5927":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_smtp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("660f");

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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "contactInfo",
  data: function data() {
    return {
      submitTxt: "SUBMIT",
      name: '',
      nameValid: false,
      email: '',
      emailValid: false,
      emailRegexValid: false,
      phone: '',
      phoneValid: false,
      subject: '',
      subjectValid: false,
      message: '',
      messageValid: false,
      submitFailed: false,
      submitSucc: false,
      smtpServer: 'smtp.elasticemail.com',
      //port 2525
      qqEmail: 'jxnx888@gmail.com',
      qqPs: '7C004C30FE0FF7028912F92D95E2CDF9037E',
      emailTitle: 'Xin Ning :: Personal Website--contect form',
      validTimeOut: null
    };
  },
  created: function created() {},
  methods: {
    submit: function submit() {
      var _this = this;

      clearTimeout(this.validTimeOut);

      if (!this.name) {
        this.nameValid = true;
        this.validTimeOut = setTimeout(function () {
          _this.clearFocus(1);
        }, 3000);
      } else if (!this.email) {
        this.emailValid = true;
        this.validTimeOut = setTimeout(function () {
          _this.clearFocus(2);
        }, 3000);
      } else {
        var emailRegex = this.checkRegex(0);

        if (emailRegex) {
          if (!this.phone) {
            this.phoneValid = true;
            this.validTimeOut = setTimeout(function () {
              _this.clearFocus(3);
            }, 3000);
          } else {
            if (!this.subject) {
              this.subjectValid = true;
              this.validTimeOut = setTimeout(function () {
                _this.clearFocus(4);
              }, 3000);
            } else if (!this.message) {
              this.messageValid = true;
              this.validTimeOut = setTimeout(function () {
                _this.clearFocus(5);
              }, 3000);
            } else {
              this.submitTxt = "SUBMITTING...";

              if ('zh_cn' == this.$i18n.locale) {
                this.submitTxt = "提交中...";
              }

              $(".submit").addClass("submitting");
              $(".submit .submit_btn").attr("disabled", "disabled");
              this.sendEmail();
            }
          }
        } else {
          return;
        }
      }
    },
    checkRegex: function checkRegex(type) {
      var _this2 = this;

      var returnVal = true;

      if (0 == type) {
        var re = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

        if (!re.test(this.email)) {
          //输入为空、输入不符合邮箱格式此正则都能判断
          this.emailRegexValid = true;
          setTimeout(function () {
            _this2.clearFocus(6);
          }, 3000);
          returnVal = false;
        }
      }

      return returnVal;
    },
    clearFocus: function clearFocus(e) {
      clearTimeout(this.validTimeOut);
      var validIndex = e;

      switch (validIndex) {
        case 1:
          this.nameValid = false;
          this.$refs.name.focus();
          break;

        case 2:
          this.emailValid = false;
          this.$refs.email.focus();
          break;

        case 3:
          this.phoneValid = false;
          this.$refs.phone.focus();
          break;

        case 4:
          this.subjectValid = false;
          this.$refs.subject.focus();
          break;

        case 5:
          this.messageValid = false;
          this.$refs.message.focus();
          break;

        case 6:
          this.emailRegexValid = false;
          this.$refs.email.focus();
          break;

        default:
          this.nameValid = false;
          this.$refs.name.focus();
          break;
      }
    },
    sendEmail: function sendEmail() {
      var _this3 = this;

      var webContent = "<h2>Name: </h2>" + this.name + '<br> ' + // html 内容
      '<h2>Email Address: </h2>' + this.email + '<br> ' + '<h2>Telephone Number: </h2>' + this.phone + '<br> ' + '<h2>Subject: </h2>' + this.subject + '<br> ' + '<h2>Message: </h2>' + this.message + '<br> '; //https://www.smtpjs.com/

      _js_smtp_js__WEBPACK_IMPORTED_MODULE_1__[/* Email */ "a"].send({
        Host: this.smtpServer,
        Username: this.qqEmail,
        Password: this.qqPs,
        To: 'ningxin1007@hotmail.com',
        From: this.qqEmail,
        Subject: this.emailTitle,
        Body: webContent
      }).then(function (message) {
        return _this3.getEmailSucc(message);
      });
    },
    getEmailSucc: function getEmailSucc(res) {
      var _this4 = this;

      if ('OK' == res) {
        this.submitSucc = true;
        this.clearForm();
      } else {
        this.submitFailed = true;
      }

      this.submitTxt = "SUBMIT";

      if ('zh_cn' == this.$i18n.locale) {
        this.submitTxt = "提交";
      }

      $(".submit").removeClass("submitting");
      $(".submit .submit_btn").removeAttr("disabled");
      setTimeout(function () {
        _this4.submitSucc = false;
        _this4.submitFailed = false;
      }, 5000);
      console.log(res);
    },
    clearForm: function clearForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
    }
  },
  mounted: function mounted() {
    if ('zh_cn' == this.$i18n.locale) {
      this.submitTxt = "提交";
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

/***/ }),

/***/ "660f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);


/* SmtpJS.com - v3.0.0 */
// eslint-disable-next-line no-unused-vars,no-undef
var Email = {
  send: function send(a) {
    return new Promise(function (n, e) {
      a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function ajaxPost(e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
      var e = a.responseText;
      null != t && t(e);
    }, a.send(n);
  },
  ajax: function ajax(e, n) {
    var t = Email.createCORSRequest("GET", e);
    t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }, t.send();
  },
  createCORSRequest: function createCORSRequest(e, n) {
    var t = new XMLHttpRequest();
    return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;
  }
};


/***/ }),

/***/ "733f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapbox_vue_vue_type_style_index_1_id_48af59d6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9773");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapbox_vue_vue_type_style_index_1_id_48af59d6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapbox_vue_vue_type_style_index_1_id_48af59d6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapbox_vue_vue_type_style_index_1_id_48af59d6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9773":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9f0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5241bb60_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da04");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5241bb60_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5241bb60_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5241bb60_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c0bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactInfo_vue_vue_type_style_index_0_id_703af68d_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5522");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactInfo_vue_vue_type_style_index_0_id_703af68d_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactInfo_vue_vue_type_style_index_0_id_703af68d_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactInfo_vue_vue_type_style_index_0_id_703af68d_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "da04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-6d4a1a8e.202252910.js.map