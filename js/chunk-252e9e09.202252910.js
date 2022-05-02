(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-252e9e09"],{

/***/ "00b5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {//
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
  name: 'aboutPart',
  data: function data() {
    return {
      addAnimation: false
    };
  },
  props: {
    userAgent: String
  },
  methods: {
    checkPosition: function checkPosition() {
      //当前滚动位置
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset; //当前滚动位置

      var windowHeight = $(window).height(); //添加动画的元素的开始位置 (防止报错,建议写死)

      var animationPart = $('#homeList').offset().top;
      var postionToSee = scrollTop + windowHeight; // console.log("scrollTop::"+scrollTop)
      // console.log("postionToSee::"+postionToSee)
      // console.log("animationPart::"+animationPart)

      if (postionToSee >= animationPart) {
        this.addAnimation = true;
      } else {
        this.addAnimation = false;
      }
    },
    openResume: function openResume() {
      // this.$refs.pdfView[0].print()
      window.open("https://ning-xin.com".concat(this.resumeLink));
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.checkPosition);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.checkPosition);
  },
  activated: function activated() {
    window.addEventListener('scroll', this.checkPosition);
  },
  deactivated: function deactivated() {
    window.removeEventListener('scroll', this.checkPosition);
  },
  computed: {
    mailTo: function mailTo() {
      return "mailto:".concat(this.$t('EMAIL'));
    },
    resumeLink: function resumeLink() {
      return "".concat(this.$i18n.locale === 'zh_cn' ? '/file/XinNing-Resume-CN.pdf' : '/file/XinNing-Resume-EN.pdf');
    },
    ifAnimation: function ifAnimation() {
      return this.userAgent === 'pc' ? this.addAnimation : true;
    }
  },
  watch: {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

/***/ }),

/***/ "0651":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "1bc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _common_autoTyping_autoTyping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c3ba");
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
  name: 'topBanner',
  components: {
    autoTyping: _common_autoTyping_autoTyping__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    bannerList: Array,
    userAgent: String
  },
  data: function data() {
    return {
      timer: null,
      currentWord: null
    };
  },
  methods: {
    animatedWord: function animatedWord(e) {
      var _this = this;

      _this.currentWord = $(e.target);

      _this.currentWord.addClass('animated rubberBand'); // animationend ::  标准语法
      //不同浏览器的AnimationEnd写法 (webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend)


      _this.currentWord.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        _this.currentWord.removeClass('animated rubberBand');
      });
    },
    animatedInit: function animatedInit(type) {
      //type 0 init 1 切换语言
      var timer = 3000;

      if (1 == type) {
        timer = 1000;
      }

      var a = 0;
      $('.each_word').each(function () {
        var el = $(this);
        var index = $(this).index();
        $('.animationCapt').removeClass('animationCapt');
        setTimeout(function () {
          if (0 == index || 4 == index) {
            el.addClass('animated animationCapt');
          } else {
            el.addClass('animated bounceIn');
          }
        }, a);
        a += 100;
      });
      setTimeout(function () {
        $('.each_word').removeClass('animated bounceIn').css('opacity', 1);
        $('.each_word').mouseenter(function () {
          var el = $(this);
          $(this).addClass('animated rubberBand');
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.removeClass('animated rubberBand');
          });
        });
      }, timer);
    }
  },
  mounted: function mounted() {
    var _this = this; //dom渲染完成后，操作增加动态效果


    _this.$nextTick(function () {
      _this.animatedInit(0);
    });
  },
  watch: {
    '$i18n.locale': function $i18nLocale(newValue, oldValue) {
      if (newValue != oldValue) {
        this.timer = new Date().getTime();
        this.$nextTick(function () {
          this.animatedInit(1);
        });
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

/***/ }),

/***/ "22cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/home.vue?vue&type=template&id=92dfe27c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('topBannerSwiper',{attrs:{"bannerList":_vm.bannerList,"userAgent":_vm.userAgent}}),_c('aboutPart',{attrs:{"userAgent":_vm.userAgent}}),(_vm.userAgent === "pc")?_c('projects',{attrs:{"userAgent":_vm.userAgent}}):_vm._e(),(_vm.userAgent !== "pc")?_c('mProjects',{attrs:{"userAgent":_vm.userAgent}}):_vm._e(),_c('keepLearning',{attrs:{"userAgent":_vm.userAgent}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/home/home.vue?vue&type=template&id=92dfe27c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/topBanner/topBanner.vue?vue&type=template&id=ee042668&scoped=true&
var topBannervue_type_template_id_ee042668_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("banner-" + _vm.userAgent + " main_wrapper")},[_c('div',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:(_vm.bannerList[0]),expression:"bannerList[0]",arg:"background-image"}],staticClass:"banner banner_one"},[_c('div',{staticClass:"banner_info"},[_c('h1',_vm._l((_vm.$t('MY_NAME')),function(item,index){return _c('span',{key:index,staticClass:"each_word",on:{"mouseenter":_vm.animatedWord}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('p',{staticClass:"title"},[_vm._v(_vm._s(_vm.$t('MY_TITLE')))]),_c('p',{staticClass:"subtitle"},[_vm._v(_vm._s(_vm.$t('MY_SUBTITLE')))])]),_c('autoTyping',{key:_vm.timer,attrs:{"userAgent":_vm.userAgent,"dataType":_vm.$t('INTRODUCTION')}})],1)])}
var topBannervue_type_template_id_ee042668_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/home/components/topBanner/topBanner.vue?vue&type=template&id=ee042668&scoped=true&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/topBanner/topBanner.vue?vue&type=script&lang=js&
var topBannervue_type_script_lang_js_ = __webpack_require__("1bc4");

// CONCATENATED MODULE: ./src/pages/home/components/topBanner/topBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var topBanner_topBannervue_type_script_lang_js_ = (topBannervue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/pages/home/components/topBanner/topBanner.vue?vue&type=style&index=0&id=ee042668&scoped=true&lang=stylus&
var topBannervue_type_style_index_0_id_ee042668_scoped_true_lang_stylus_ = __webpack_require__("b93b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/home/components/topBanner/topBanner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  topBanner_topBannervue_type_script_lang_js_,
  topBannervue_type_template_id_ee042668_scoped_true_render,
  topBannervue_type_template_id_ee042668_scoped_true_staticRenderFns,
  false,
  null,
  "ee042668",
  null
  
)

/* harmony default export */ var topBanner = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/aboutPart/aboutPart.vue?vue&type=template&id=5af3df57&scoped=true&
var aboutPartvue_type_template_id_5af3df57_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("aboutPart aboutPart-" + _vm.userAgent)},[_c('div',{staticClass:"top_intro"},[(_vm.userAgent === 'pc')?[_c('p',[_vm._v(_vm._s(_vm.$t('HOME_WELCOME1')))]),_c('p',[_vm._v(_vm._s(_vm.$t('HOME_WELCOME2'))+" "),_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.openResume}},[_vm._v(" "+_vm._s(_vm.$t('RESUME_LOWER'))+" ")])]),_c('p',[_vm._v(_vm._s(_vm.$t('HOME_WELCOME3'))+" "),_c('a',{attrs:{"href":_vm.mailTo}},[_vm._v(_vm._s(_vm.$t('EMAIL')))]),_vm._v(",")]),_c('p',[_vm._v(_vm._s(_vm.$t('HOME_WELCOME4'))+" "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v(_vm._s(_vm.$t('CONTACTPAGE')))])],1)]:_vm._e(),(_vm.userAgent !== 'pc')?[_c('p',[_vm._v(_vm._s(_vm.$t('HOME_WELCOME1'))+" "+_vm._s(_vm.$t('HOME_WELCOME2'))+" "),_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.openResume}},[_vm._v(" "+_vm._s(_vm.$t('RESUME_LOWER'))+" ")]),_vm._v(" . "+_vm._s(_vm.$t('HOME_WELCOME3'))+" "),_c('a',{attrs:{"href":_vm.mailTo}},[_vm._v(_vm._s(_vm.$t('EMAIL')))]),_vm._v(","+_vm._s(_vm.$t('HOME_WELCOME4'))+" "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v(_vm._s(_vm.$t('CONTACTPAGE')))])],1)]:_vm._e()],2),_c('div',{staticClass:"bottom_list",attrs:{"id":"homeList"}},[_c('el-row',{staticClass:"detail_list clearfix",attrs:{"gutter":20}},[_c('el-col',{class:("detail_list_item " + (_vm.ifAnimation ? 'bounceInLeft animated':'')),attrs:{"span":(_vm.userAgent !== "phone" && _vm.userAgent !== "pad-v") ? 8 : 24,"id":"homePj"}},[_c('router-link',{staticClass:"each_link",attrs:{"to":"/projects"}},[_c('p',[_vm._v(_vm._s(_vm.$t('My_PROJECTS')))]),_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("/image/home/myprojects" + (_vm.userAgent === 'pc' ? '': '-mobile') + ".jpg")),expression:"`/image/home/myprojects${userAgent === 'pc' ? '': '-mobile'}.jpg`"}],attrs:{"alt":"$i18n.t('My_PROJECTS')"}})])],1),_c('el-col',{staticClass:"last",class:("detail_list_item " + (_vm.ifAnimation ? 'bounceIn animated':'')),attrs:{"span":(_vm.userAgent !== "phone" && _vm.userAgent !== "pad-v") ? 8 : 24,"id":"homeSk"}},[_c('router-link',{staticClass:"each_link",attrs:{"to":"/skills"}},[_c('p',[_vm._v(_vm._s(_vm.$t('MY_SKILLS')))]),_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("/image/home/myskills" + (_vm.userAgent === 'pc' ? '': '-mobile') + ".jpg")),expression:"`/image/home/myskills${userAgent === 'pc' ? '': '-mobile'}.jpg`"}],attrs:{"alt":"$i18n.t('MY_SKILLS')"}})])],1),_c('el-col',{staticClass:"last",class:("detail_list_item " + (_vm.ifAnimation ? 'bounceInRight animated':'')),attrs:{"span":(_vm.userAgent !== "phone" && _vm.userAgent !== "pad-v") ? 8 : 24,"id":"homeBlog"}},[_c('router-link',{staticClass:"each_link",attrs:{"to":"/blog"}},[_c('p',[_vm._v(_vm._s(_vm.$t('BLOG')))]),_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(("/image/home/blog" + (_vm.userAgent === 'pc' ? '': '-mobile') + ".jpg")),expression:"`/image/home/blog${userAgent === 'pc' ? '': '-mobile'}.jpg`"}],attrs:{"alt":"$i18n.t('MY_SKILLS')"}})])],1)],1)],1)])}
var aboutPartvue_type_template_id_5af3df57_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/home/components/aboutPart/aboutPart.vue?vue&type=template&id=5af3df57&scoped=true&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/aboutPart/aboutPart.vue?vue&type=script&lang=js&
var aboutPartvue_type_script_lang_js_ = __webpack_require__("00b5");

// CONCATENATED MODULE: ./src/pages/home/components/aboutPart/aboutPart.vue?vue&type=script&lang=js&
 /* harmony default export */ var aboutPart_aboutPartvue_type_script_lang_js_ = (aboutPartvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/pages/home/components/aboutPart/aboutPart.vue?vue&type=style&index=0&id=5af3df57&scoped=true&lang=stylus&
var aboutPartvue_type_style_index_0_id_5af3df57_scoped_true_lang_stylus_ = __webpack_require__("bc0b");

// CONCATENATED MODULE: ./src/pages/home/components/aboutPart/aboutPart.vue






/* normalize component */

var aboutPart_component = Object(componentNormalizer["a" /* default */])(
  aboutPart_aboutPartvue_type_script_lang_js_,
  aboutPartvue_type_template_id_5af3df57_scoped_true_render,
  aboutPartvue_type_template_id_5af3df57_scoped_true_staticRenderFns,
  false,
  null,
  "5af3df57",
  null
  
)

/* harmony default export */ var aboutPart = (aboutPart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/projects/projects.vue?vue&type=template&id=04fe6e1f&scoped=true&
var projectsvue_type_template_id_04fe6e1f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("project_wrapper project_wrapper-" + (_vm.$root.$userAgent))},[_c('div',{staticClass:"project_hook"},[_c('div',{staticClass:"left_tab"},[_c('ul',{staticClass:"tab_list"},[_c('li',{staticClass:"each_list",class:{acive_tab:_vm.currentListIndex===1},on:{"mouseenter":function($event){return _vm.showCurrent(1)}}},[_c('p',{staticClass:"each_title"},[_vm._v(_vm._s(_vm.$t('PROJECT1.title')))]),_c('ul',{staticClass:"each_responsibility"},[_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('PROJECT1.responsibility[0]')))]),_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('PROJECT1.responsibility[1]')))]),_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('PROJECT1.responsibility[2]')))])])]),_c('li',{staticClass:"each_list",class:{acive_tab:_vm.currentListIndex===2},on:{"mouseenter":function($event){return _vm.showCurrent(2)}}},[_c('p',{staticClass:"each_title"},[_vm._v(_vm._s(_vm.$t('PROJECT2.title')))]),_c('ul',{staticClass:"each_responsibility"},[_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('PROJECT2.responsibility[0]')))]),_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('PROJECT2.responsibility[1]')))]),_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('PROJECT2.responsibility[2]')))])])]),_c('li',{staticClass:"each_list",class:{acive_tab:_vm.currentListIndex===3},on:{"mouseenter":function($event){return _vm.showCurrent(3)}}},[_c('p',{staticClass:"each_title"},[_vm._v(_vm._s(_vm.$t('EDUCATION.title')))]),_c('ul',{staticClass:"each_responsibility"},[_c('li',{staticClass:"responsibility_li"},[_vm._v(_vm._s(_vm.$t('EDUCATION.responsibility[0]')))]),_c('li',{staticClass:"responsibility_li no_style"},[_vm._v(_vm._s(_vm.$t('EDUCATION.responsibility[1]')))]),_c('li',{staticClass:"responsibility_li no_style"},[_vm._v(_vm._s(_vm.$t('EDUCATION.responsibility[2]')))]),_c('li',{staticClass:"responsibility_li no_style"},[_vm._v(_vm._s(_vm.$t('EDUCATION.responsibility[3]')))])])])])]),_c('div',{staticClass:"right_content"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentListIndex===1),expression:"currentListIndex===1"}],staticClass:"each_content"},[_c('ul',{staticClass:"each_content_list only_one_item"},[_c('li',{staticClass:"item_1"},[_c('a',{attrs:{"href":"https://www.gwm.co.th/en/","target":"_blank"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentListIndex===1),expression:"currentListIndex===1"}],staticClass:"each_content"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:('/image/home/greatWall.jpg'),expression:"'/image/home/greatWall.jpg'"}],attrs:{"alt":""}}),_c('div',{staticClass:"intro_wrapper"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t('PROJECT1.childList[0].title')))]),_c('p',{staticClass:"txt"},[_c('a',{attrs:{"href":"https://mall.gwm.co.th"}},[_vm._v(_vm._s(_vm.$t('PROJECT1.childList[0].txt[0]')))])]),_vm._v(" "),_c('p',{staticClass:"txt"},[_c('a',{attrs:{"href":"https://mall.gwm.co.th/orderVehicles"}},[_vm._v(_vm._s(_vm.$t('PROJECT1.childList[0].txt[1]')))])]),_c('i',{staticClass:"iconfont icon_arrow"},[_vm._v("")])])])])])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentListIndex===2),expression:"currentListIndex===2"}],staticClass:"each_content"},[_c('ul',{staticClass:"each_content_list"},[_c('li',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:('/image/home/last_work4.jpg'),expression:"'/image/home/last_work4.jpg'",arg:"background-image"}],staticClass:"item_1"},[_c('a',{attrs:{"href":"https://www.import-express.com/","target":"_blank"}},[_c('div',{staticClass:"intro_wrapper"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[0].title')))]),_c('p',{staticClass:"txt"},[_c('a',{attrs:{"href":"https://www.import-express.com/"}},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[0].txt[0]')))])]),_c('p',{staticClass:"txt"},[_c('a',{attrs:{"href":"https://www.kidscharming.com/"}},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[0].txt[1]')))])]),_c('p',{staticClass:"txt"},[_c('a',{attrs:{"href":"https://www.petstoreinc.com/"}},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[0].txt[2]')))])]),_c('i',{staticClass:"iconfont icon_arrow"},[_vm._v("")])])])]),_c('li',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:('/image/home/luggage_decal.jpg'),expression:"'/image/home/luggage_decal.jpg'",arg:"background-image"}],staticClass:"item_1"},[_c('router-link',{attrs:{"to":{path:'/projects',query:{jump:'LuggageDecalSplatter'}}}},[_c('div',{staticClass:"intro_wrapper"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[1].title')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[1].txt[0]')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[1].txt[1]')))]),_c('i',{staticClass:"iconfont icon_arrow"},[_vm._v("")])])])],1),_c('li',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:('/image/home/3dprinting1.jpg'),expression:"'/image/home/3dprinting1.jpg'",arg:"background-image"}],staticClass:"item_3"},[_c('router-link',{attrs:{"to":{path:'/projects',query:{jump:'MagicBox-AppforChildren'}}}},[_c('div',{staticClass:"intro_wrapper intro_wrapper4"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[2].title')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[2].txt[0]')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('PROJECT2.childList[2].txt[1]')))]),_c('i',{staticClass:"iconfont icon_arrow"},[_vm._v("")])])])],1)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentListIndex===3),expression:"currentListIndex===3"}],staticClass:"each_content"},[_c('ul',{staticClass:"each_content_list only_two_item"},[_c('li',{staticClass:"item_1"},[_c('a',{attrs:{"href":"https://www.fairfield.edu","target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:('/image/home/FULogo.jpg'),expression:"'/image/home/FULogo.jpg'"}],attrs:{"alt":""}}),_c('div',{staticClass:"intro_wrapper intro_wrapper3"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[0].title')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[0].txt[0]')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[0].txt[1]')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[0].txt[2]')))]),_c('i',{staticClass:"iconfont icon_arrow"},[_vm._v("")])])])]),_c('li',{staticClass:"item_2"},[_c('a',{attrs:{"href":"http://gjjl.hkc.edu.cn/","target":"_blank"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:('/image/home/hkc.jpg'),expression:"'/image/home/hkc.jpg'"}],attrs:{"alt":""}}),_c('div',{staticClass:"intro_wrapper intro_wrapper3"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[1].title')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[1].txt[0]')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[1].txt[1]')))]),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.$t('EDUCATION.childList[1].txt[2]')))])])])])])])])])])}
var projectsvue_type_template_id_04fe6e1f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/home/components/projects/projects.vue?vue&type=template&id=04fe6e1f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/projects/projects.vue?vue&type=script&lang=js&
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
/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  name: 'projects',
  data: function data() {
    return {
      currentListIndex: 1
    };
  },
  methods: {
    showCurrent: function showCurrent(showIndex) {
      this.currentListIndex = showIndex;
    }
  }
});
// CONCATENATED MODULE: ./src/pages/home/components/projects/projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/home/components/projects/projects.vue?vue&type=style&index=0&id=04fe6e1f&scoped=true&lang=stylus&
var projectsvue_type_style_index_0_id_04fe6e1f_scoped_true_lang_stylus_ = __webpack_require__("5add");

// CONCATENATED MODULE: ./src/pages/home/components/projects/projects.vue






/* normalize component */

var projects_component = Object(componentNormalizer["a" /* default */])(
  projects_projectsvue_type_script_lang_js_,
  projectsvue_type_template_id_04fe6e1f_scoped_true_render,
  projectsvue_type_template_id_04fe6e1f_scoped_true_staticRenderFns,
  false,
  null,
  "04fe6e1f",
  null
  
)

/* harmony default export */ var projects = (projects_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/projects/m-projects.vue?vue&type=template&id=73c1a18e&scoped=true&
var m_projectsvue_type_template_id_73c1a18e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("project_wrapper project_wrapper-" + (_vm.$root.$userAgent))},[_c('swiper',{ref:"mySwiper",staticClass:"swiper",attrs:{"options":_vm.swiperOption,"auto-update":true,"auto-destroy":true,"delete-instance-on-destroy":true,"cleanup-styles-on-destroy":true}},[_vm._l((_vm.projects),function(item,index){return _c('swiper-slide',{key:index,staticClass:"project-swiper"},[_c('div',{staticClass:"top-info"},[_c('p',{staticClass:"each_title"},[_vm._v(_vm._s(item.name))]),_c('ul',{staticClass:"each_responsibility"},_vm._l((item.responsibility),function(childItem,key){return _c('li',{key:key,staticClass:"responsibility_li"},[_vm._v(_vm._s(childItem)+" ")])}),0)]),_c('div',{staticClass:"each_content"},[_c('ul',{class:("each_content_list only-" + (item.infoCount) + "-item")},_vm._l((item.subProjects),function(subProItem,subProIndex){return _c('li',{key:subProIndex,class:("each-project item_" + (subProIndex+1))},[(subProItem.routePath)?_c('router-link',{attrs:{"to":subProItem.routePath}},[_c('img',{staticClass:"swiper-lazy",attrs:{"src":subProItem.img,"alt":""}}),_c('div',{staticClass:"intro_wrapper swiper-lazy"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(subProItem.title))]),_vm._l((subProItem.content),function(subProCenItem,subProCenIndex){return _c('p',{key:subProCenIndex,staticClass:"txt"},[_c('a',{attrs:{"href":subProCenItem.link ? subProCenItem.link : "","target":"_blank"}},[_vm._v(_vm._s(subProCenItem.txt))])])})],2)]):_c('div',[_c('img',{staticClass:"swiper-lazy",attrs:{"src":subProItem.img,"alt":""}}),_c('div',{staticClass:"intro_wrapper swiper-lazy"},[_c('h4',{staticClass:"tit"},[_vm._v(_vm._s(subProItem.title))]),_vm._l((subProItem.content),function(subProCenItem,subProCenIndex){return _c('p',{key:subProCenIndex,staticClass:"txt"},[_c('a',{attrs:{"href":subProCenItem.link ? subProCenItem.link : "","target":"_blank"}},[_vm._v(_vm._s(subProCenItem.txt))])])})],2)])],1)}),0)])])}),_c('div',{staticClass:"swiper-button-next swiper-button-white",attrs:{"slot":"button-next"},slot:"button-next"}),_c('div',{staticClass:"swiper-button-prev swiper-button-white",attrs:{"slot":"button-prev"},slot:"button-prev"}),_c('div',{staticClass:"swiper-pagination",attrs:{"slot":"pagination"},slot:"pagination"})],2)],1)}
var m_projectsvue_type_template_id_73c1a18e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/home/components/projects/m-projects.vue?vue&type=template&id=73c1a18e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/projects/m-projects.vue?vue&type=script&lang=js&
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
/* harmony default export */ var m_projectsvue_type_script_lang_js_ = ({
  name: 'projects',
  data: function data() {
    return {
      currentListIndex: 1,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          // clickable: true,
          type: "progressbar" // bullets fraction progressbar

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observeParents: true,
        observer: true,
        loop: true,
        lazy: true,
        // autoplay: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    };
  },
  methods: {
    showCurrent: function showCurrent(showIndex) {
      this.currentListIndex = showIndex;
    },
    handleGalleryClick: function handleGalleryClick() {}
  },
  computed: {
    projects: function projects() {
      return [{
        infoCount: 1,
        name: this.$t('PROJECT1.title'),
        responsibility: [this.$t('PROJECT1.responsibility[0]'), this.$t('PROJECT1.responsibility[1]'), this.$t('PROJECT1.responsibility[2]')],
        subProjects: [{
          title: this.$t('PROJECT1.childList[0].title'),
          img: '/image/home/greatWall.jpg',
          link: 'https://mall.gwm.co.th/',
          content: [{
            txt: this.$t('PROJECT1.childList[0].txt[0]'),
            link: 'https://mall.gwm.co.th'
          }, {
            txt: this.$t('PROJECT1.childList[0].txt[1]'),
            link: 'https://mall.gwm.co.th/orderVehicles'
          }]
        }]
      }, {
        infoCount: 3,
        name: this.$t('PROJECT2.title'),
        responsibility: [this.$t('PROJECT1.responsibility[0]'), this.$t('PROJECT1.responsibility[1]'), this.$t('PROJECT1.responsibility[2]')],
        subProjects: [{
          title: this.$t('PROJECT2.childList[0].title'),
          img: '/image/home/last_work4.jpg',
          link: 'https://www.import-express.com/',
          content: [{
            txt: this.$t('PROJECT2.childList[0].txt[0]'),
            link: 'https://www.import-express.com/'
          }, {
            txt: this.$t('PROJECT2.childList[0].txt[1]'),
            link: 'https://www.kidscharming.com'
          }, {
            txt: this.$t('PROJECT2.childList[0].txt[2]'),
            link: 'https://www.petstoreinc.com/'
          }]
        }, {
          title: this.$t('PROJECT2.childList[1].title'),
          img: '/image/home/luggage_decal.jpg',
          routePath: {
            path: '/projects',
            query: {
              jump: 'LuggageDecalSplatter'
            }
          },
          content: [{
            txt: this.$t('PROJECT2.childList[1].txt[0]'),
            link: null
          }, {
            txt: this.$t('PROJECT2.childList[1].txt[1]'),
            link: null
          }]
        }, {
          title: this.$t('PROJECT2.childList[2].title'),
          img: '/image/home/3dprinting1.jpg',
          link: 'https://www.import-express.com/',
          routePath: {
            path: '/projects',
            query: {
              jump: 'MagicBox-AppforChildren'
            }
          },
          content: [{
            txt: this.$t('PROJECT2.childList[2].txt[0]'),
            link: null
          }, {
            txt: this.$t('PROJECT2.childList[2].txt[1]'),
            link: null
          }]
        }]
      }, {
        infoCount: 2,
        name: this.$t('EDUCATION.title'),
        responsibility: [this.$t('EDUCATION.responsibility[0]'), this.$t('EDUCATION.responsibility[1]'), this.$t('EDUCATION.responsibility[2]'), this.$t('EDUCATION.responsibility[3]')],
        subProjects: [{
          title: this.$t('EDUCATION.childList[0].title'),
          img: '/image/home/FULogo.jpg',
          link: 'https://www.fairfield.edu/',
          content: [{
            txt: this.$t('EDUCATION.childList[0].txt[0]'),
            link: null
          }, {
            txt: this.$t('EDUCATION.childList[0].txt[1]'),
            link: null
          }, {
            txt: this.$t('EDUCATION.childList[0].txt[2]'),
            link: null
          }]
        }, {
          title: this.$t('EDUCATION.childList[1].title'),
          img: '/image/home/hkc.jpg',
          link: 'http://gjjl.hkc.edu.cn/',
          content: [{
            txt: this.$t('EDUCATION.childList[1].txt[0]'),
            link: null
          }, {
            txt: this.$t('EDUCATION.childList[1].txt[1]'),
            link: null
          }, {
            txt: this.$t('EDUCATION.childList[1].txt[2]'),
            link: null
          }]
        }]
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/pages/home/components/projects/m-projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_m_projectsvue_type_script_lang_js_ = (m_projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/home/components/projects/m-projects.vue?vue&type=style&index=0&id=73c1a18e&scoped=true&lang=stylus&
var m_projectsvue_type_style_index_0_id_73c1a18e_scoped_true_lang_stylus_ = __webpack_require__("5929");

// CONCATENATED MODULE: ./src/pages/home/components/projects/m-projects.vue






/* normalize component */

var m_projects_component = Object(componentNormalizer["a" /* default */])(
  projects_m_projectsvue_type_script_lang_js_,
  m_projectsvue_type_template_id_73c1a18e_scoped_true_render,
  m_projectsvue_type_template_id_73c1a18e_scoped_true_staticRenderFns,
  false,
  null,
  "73c1a18e",
  null
  
)

/* harmony default export */ var m_projects = (m_projects_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/keepLearning/keepLearning.vue?vue&type=template&id=625bed0b&scoped=true&
var keepLearningvue_type_template_id_625bed0b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{class:("main_wrapper clearfix main_wrapper-" + _vm.userAgent)},[_c('el-col',{staticClass:"left_img",attrs:{"span":_vm.userAgent === "phone"  ? 24 : 10}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:('/image/home/keep-learning.jpg'),expression:"'/image/home/keep-learning.jpg'"}],attrs:{"alt":""}})]),_c('el-col',{staticClass:"right_info",attrs:{"span":_vm.userAgent === "phone" ? 24 : 14}},[_c('div',{staticClass:"text-wrapper"},[_c('div',{staticClass:"text keep_title"},[_vm._v(" "+_vm._s(_vm.$t('KEEP_LEARNING[0]'))+" ")]),_c('div',{staticClass:"text dictum"},[_vm._v(" \""+_vm._s(_vm.$t('KEEP_LEARNING[1]'))+"\" "),_c('div',{staticClass:"author"},[_vm._v(" -- "+_vm._s(_vm.$t('KEEP_LEARNING[2]')))])])])])],1)}
var keepLearningvue_type_template_id_625bed0b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/home/components/keepLearning/keepLearning.vue?vue&type=template&id=625bed0b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/components/keepLearning/keepLearning.vue?vue&type=script&lang=js&
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
/* harmony default export */ var keepLearningvue_type_script_lang_js_ = ({
  name: 'keepLearning',
  props: {
    userAgent: String
  }
});
// CONCATENATED MODULE: ./src/pages/home/components/keepLearning/keepLearning.vue?vue&type=script&lang=js&
 /* harmony default export */ var keepLearning_keepLearningvue_type_script_lang_js_ = (keepLearningvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/home/components/keepLearning/keepLearning.vue?vue&type=style&index=0&id=625bed0b&scoped=true&lang=stylus&
var keepLearningvue_type_style_index_0_id_625bed0b_scoped_true_lang_stylus_ = __webpack_require__("cf1e");

// CONCATENATED MODULE: ./src/pages/home/components/keepLearning/keepLearning.vue






/* normalize component */

var keepLearning_component = Object(componentNormalizer["a" /* default */])(
  keepLearning_keepLearningvue_type_script_lang_js_,
  keepLearningvue_type_template_id_625bed0b_scoped_true_render,
  keepLearningvue_type_template_id_625bed0b_scoped_true_staticRenderFns,
  false,
  null,
  "625bed0b",
  null
  
)

/* harmony default export */ var keepLearning = (keepLearning_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/home/home.vue?vue&type=script&lang=js&
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





/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',
  components: {
    topBannerSwiper: topBanner,
    aboutPart: aboutPart,
    projects: projects,
    mProjects: m_projects,
    keepLearning: keepLearning
  },
  props: {
    userAgent: String
  },
  data: function data() {
    return {
      bannerList: ['/image/banner1.png']
    };
  },
  methods: {
    getHomeInfo: function getHomeInfo() {
      this.$ajax.get('/mock/index.json') // npm run build ==>  ./static/mock/index.json
      .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc: function getHomeInfoSucc(res) {
      if (res && res.data) {
        var data = res.data;
        this.homeTopSwiperList = data.homeTopSwiperList; // console.log("data:" + JSON.stringify(data))
      }
    }
  },
  mounted: function mounted() {
    this.getHomeInfo();
  }
});
// CONCATENATED MODULE: ./src/pages/home/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/home/home.vue





/* normalize component */

var home_component = Object(componentNormalizer["a" /* default */])(
  home_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "92dfe27c",
  null
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (home_component.exports);

/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "56b8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5929":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_projects_vue_vue_type_style_index_0_id_73c1a18e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a394");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_projects_vue_vue_type_style_index_0_id_73c1a18e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_projects_vue_vue_type_style_index_0_id_73c1a18e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_projects_vue_vue_type_style_index_0_id_73c1a18e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "59fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5add":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_04fe6e1f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56b8");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_04fe6e1f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_04fe6e1f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_04fe6e1f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "61d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "77ca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a394":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b93b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_ee042668_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59fd");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_ee042668_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_ee042668_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_ee042668_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutPart_vue_vue_type_style_index_0_id_5af3df57_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77ca");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutPart_vue_vue_type_style_index_0_id_5af3df57_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutPart_vue_vue_type_style_index_0_id_5af3df57_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutPart_vue_vue_type_style_index_0_id_5af3df57_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c3ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/autoTyping/autoTyping.vue?vue&type=template&id=515f493a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("typeWrite not-select typeWrite-" + _vm.userAgent)},[_c('div',{staticClass:"typewrite-word",attrs:{"data-period":"2000","data-type":_vm.dataType}},[_c('div',{staticClass:"wrap typewrite-cursor"})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/common/autoTyping/autoTyping.vue?vue&type=template&id=515f493a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js






function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./src/common/autoTyping/typeWrite.js




var TxtType = function TxtType(el, txtData, period) {
  this.txtData = txtData; // this.el = el;

  this.el = el.getElementsByClassName('wrap')[0];
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.txtData.length;
  var fullTxt = this.txtData[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  } // this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';


  if (this.txt.length == 0 || this.txt.length == fullTxt.length) {
    this.el.classList.add("typewrite-cursor-anim");
  } else {
    this.el.classList.remove("typewrite-cursor-anim");
  } // console.log(this.txt, 'this.txt')


  this.el.innerHTML = this.txt;
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {// onloadFn(); //如果不是es6 可直接调用该方法，但是因为vue 需要导出该方法并在外部调用
};

function onloadFn() {
  var elements = document.getElementsByClassName('typewrite-word');

  for (var i = 0; i < elements.length; i++) {
    var txtData = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');

    if (txtData) {
      if (_typeof(txtData) !== "object") {
        // 如果是i18n，语言是字符串，而不是数组，所以要转换成数组
        txtData = txtData.split("||");
      }

      new TxtType(elements[i], JSON.parse(txtData), period);
    }
  } // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".typewrite-word > .wrap { border-right: 0.08em solid #fff}";
  // document.body.appendChild(css);

}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/autoTyping/autoTyping.vue?vue&type=script&lang=js&
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

/* harmony default export */ var autoTypingvue_type_script_lang_js_ = ({
  name: "autoTyping",
  props: {
    dataType: String,
    userAgent: String
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    onloadFn();
  }
});
// CONCATENATED MODULE: ./src/common/autoTyping/autoTyping.vue?vue&type=script&lang=js&
 /* harmony default export */ var autoTyping_autoTypingvue_type_script_lang_js_ = (autoTypingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/autoTyping/autoTyping.vue?vue&type=style&index=0&id=515f493a&scoped=true&lang=stylus&
var autoTypingvue_type_style_index_0_id_515f493a_scoped_true_lang_stylus_ = __webpack_require__("f2e2");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/common/autoTyping/autoTyping.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  autoTyping_autoTypingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "515f493a",
  null
  
)

/* harmony default export */ var autoTyping = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "cf1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_keepLearning_vue_vue_type_style_index_0_id_625bed0b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("61d6");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_keepLearning_vue_vue_type_style_index_0_id_625bed0b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_keepLearning_vue_vue_type_style_index_0_id_625bed0b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_keepLearning_vue_vue_type_style_index_0_id_625bed0b_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "f2e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autoTyping_vue_vue_type_style_index_0_id_515f493a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0651");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autoTyping_vue_vue_type_style_index_0_id_515f493a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autoTyping_vue_vue_type_style_index_0_id_515f493a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autoTyping_vue_vue_type_style_index_0_id_515f493a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-252e9e09.202252910.js.map