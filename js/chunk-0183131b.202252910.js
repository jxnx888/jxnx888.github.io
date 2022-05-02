(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0183131b"],{

/***/ "018d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "27f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTem_vue_vue_type_style_index_0_id_58c9cf7e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb6b");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTem_vue_vue_type_style_index_0_id_58c9cf7e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTem_vue_vue_type_style_index_0_id_58c9cf7e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTem_vue_vue_type_style_index_0_id_58c9cf7e_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3099":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/topStaticBanner/topBanner.vue?vue&type=template&id=390c8366&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main_wrapper"},[_c('div',{staticClass:"banner banner_one",style:(_vm.bannerSlice ? {maxHeight:(5.56/_vm.bannerSlice)+"rem",minHeight:(2.56/_vm.bannerSlice)+"rem"} : {})},[_c('img',{style:(_vm.bannerSlice ? {minWidth:"100%",maxHeight:"inherit"} : {}),attrs:{"src":_vm.bannerImg,"alt":""}}),_c('div',{staticClass:"banner_info"},[_c('p',{staticClass:"title"},[_vm._v(_vm._s(_vm.bannerContent))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/common/topStaticBanner/topBanner.vue?vue&type=template&id=390c8366&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/topStaticBanner/topBanner.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var topBannervue_type_script_lang_js_ = ({
  name: 'topBanner',
  props: {
    bannerImg: String,
    bannerContent: String,
    bannerSlice: Number
  }
});
// CONCATENATED MODULE: ./src/common/topStaticBanner/topBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var topStaticBanner_topBannervue_type_script_lang_js_ = (topBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/topStaticBanner/topBanner.vue?vue&type=style&index=0&id=390c8366&scoped=true&lang=stylus&
var topBannervue_type_style_index_0_id_390c8366_scoped_true_lang_stylus_ = __webpack_require__("9e42");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/common/topStaticBanner/topBanner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  topStaticBanner_topBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "390c8366",
  null
  
)

/* harmony default export */ var topBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


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

/***/ "6a02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_topStaticBanner_topBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3099");
/* harmony import */ var _components_projectTem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cf3d");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import threeDBuilder from '@/common/threejs/threeDBuilder/ThreeDimensionalBuilder'
// import mobileThreeDBuilder from '@/common/threejs/threeDBuilder/mobileThreeDimensionalBuilder'
// import forFun from "@/common/forFun/forFun";
// // import luggageDecalSplatter from "@/common/threejs/luggageDecalSplatter/decals";
// import luggageDecalSplatter from "@/common/threejs/luggageDecalSplatter/luggageDecalSplatter";

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'projects',
  props: {
    userAgent: String
  },
  components: {
    topBanner: _common_topStaticBanner_topBanner__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    projectTem: _components_projectTem__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
    /* threeDBuilder,
     mobileThreeDBuilder,
     forFun,
     luggageDecalSplatter*/

  },
  data: function data() {
    return {
      projectsJson: {},
      forFunJson: {},
      menuArr: {},
      scrollingMenu: false,
      activeMenuIndex: 0,
      mobile: false,
      showTD: false,
      showTester: false,
      showDecal: false,
      timer: ''
    };
  },
  methods: {
    getProject: function getProject() {
      var url = '/mock/projects.json';
      var lang = this.$i18n.locale;

      if ('zh_cn' === lang) {
        url = '/mock/projectsCN.json';
      }

      this.$ajax.get(url) // npm run build ==>  ./static/mock/index.json
      .then(this.getProjectSucc).catch(function (res) {
        console.log('error:' + res);
      });
    },
    getProjectSucc: function getProjectSucc(res) {
      // console.log(res)
      if (res.data.code == 200) {
        var data = res.data.data;
        this.projectsJson = data;
        this.menuArr = {};

        for (var i in data) {
          this.menuArr[i] = data[i].companySC;
        }
      }
    },
    jumpToRelate: function jumpToRelate(id, index) {
      var scrollTop = $('#' + id).offset().top - 80;
      $('html,body').scrollTop(scrollTop);
      this.activeMenuIndex = index;
      this.menuScroll();
    },
    menuScroll: function menuScroll() {
      //当前滚动位置
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset; //滚动菜单的高度

      var animation_menu_Height = $('.animation_menu').height(); // project_main 的整体的开始位置 防止报错,写死

      var oriMoveTopP = $('.project_main').offset().top; // project_wrapper可以滚动的最大位置 == project_wrapper顶部位置加高度

      var moveBottomP = oriMoveTopP + $('.project_wrapper').height();

      if (scrollTop >= oriMoveTopP - 100 && scrollTop <= moveBottomP - animation_menu_Height) {
        //-100 因为动态导航会遮挡右侧菜单
        this.scrollingMenu = true; //菜单固定class

        var menuArr = this.menuArr;
        var arrIndex = 0;

        for (var key in menuArr) {
          var thisOffsetTop = $('#' + key.replace(/ /g, '')).offset().top - 120; //  -100 提前改变菜单

          if (scrollTop >= thisOffsetTop) {
            //检测滚动距离，记录下方距离最近的一个id
            this.activeMenuIndex = arrIndex;
            arrIndex++;
          }
        }

        $('.scrollMenu').css('top', scrollTop - oriMoveTopP + 140); //40改为140 因为动态导航会遮挡右侧菜单
      } else if (scrollTop < oriMoveTopP) {
        this.scrollingMenu = false;
        this.activeMenuIndex = 0;
        $('.animation_menu').css('top', '50px');
      }
    },
    showThreeD: function showThreeD() {
      this.timer = new Date().getTime();
      this.showTD = !this.showTD;
    },
    getForFun: function getForFun() {
      var url = '/mock/yuandian.json';
      this.$ajax.get(url) // npm run build ==>  ./static/mock/index.json
      .then(this.getForFunSucc).catch(function (res) {
        console.log('error:' + res);
      });
    },
    getForFunSucc: function getForFunSucc(res) {
      // console.log(res)
      if (res.data.code == 200) {
        var data = res.data.data;
        this.forFunJson = data;
      }
    },
    showTest: function showTest() {
      this.timer = new Date().getTime();
      this.showTester = !this.showTester;
    },
    showDecals: function showDecals() {
      this.timer = new Date().getTime();
      this.showDecal = !this.showDecal;
    },
    resizeDecals: function resizeDecals() {
      $('.decalsMain,.decalWrapper').css({
        'width': $(window).width(),
        'height': $(window).height()
      });
    },
    checkQuery: function checkQuery() {
      if (this.$route.query.jump !== 'null') {
        var jumpTo = this.$route.query.jump;
        var inter = setInterval(function () {
          var target = document.getElementById(jumpTo);

          if (target) {
            clearInterval(inter);
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }, 100);
      }
    }
  },
  mounted: function mounted() {
    this.getProject();
    this.getForFun();
    window.addEventListener('scroll', this.menuScroll);
    window.addEventListener('resize', this.resizeDecals, false); // 判断commentId 是否有值，如果没有的话，就不进行跳转，我这里就用'null'来判断了，你们随意
    // document.querySelector用来获取element，有个坑，id值不能全为数字，否则报错，所以我在id值前面加了id，id格式大致是：id123456
    // scrollIntoView就是用来跳转到锚点的函数

    this.checkQuery();
  },
  //keep-alive 激活状态，缓存不会再走mounted，所以走activated来获取参数
  activated: function activated() {
    this.checkQuery();
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.menuScroll, false);
    window.removeEventListener('resize', this.resizeDecals, false);
  },
  //keep-alive 激活状态，无法销毁监听，需要使用deactivated来销毁
  deactivated: function deactivated() {
    window.removeEventListener('scroll', this.menuScroll, false);
    window.removeEventListener('resize', this.resizeDecals, false);
  },
  watch: {
    /*showTester(newValue, oldValue) {
        if(newValue != oldValue){
            if(newValue == true){
                $("html").css("overflow",'hidden')
            }
            else{
                $("html").css("overflow",'visible')
            }
        }
    },
    showTD(newValue, oldValue) {
        console.log(newValue)
        if(newValue != oldValue){
            if(newValue == true){
                $("html").css("overflow",'hidden')
            }
            else{
                $("html").css("overflow",'visible')
            }
        }
    },
    showDecal(newValue, oldValue) {
        if(newValue != oldValue){
            if(newValue == true){
                $("html").css("overflow",'hidden')
            }
            else{
                $("html").css("overflow",'visible')
            }
        }
    },*/
    '$i18n.locale': function $i18nLocale(newValue, oldValue) {
      if (newValue != oldValue) {
        this.getProject();
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


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

/***/ "9e42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_390c8366_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("018d");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_390c8366_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_390c8366_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topBanner_vue_vue_type_style_index_0_id_390c8366_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


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

/***/ "c42e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/projects/projects.vue?vue&type=template&id=72e2acfb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("project_wrapper clearfix project_wrapper-" + _vm.userAgent)},[_c('div',{staticClass:"project_banner"},[_c('topBanner',{attrs:{"bannerImg":'/image/banner2.png',"bannerContent":_vm.$t('projects.bannerInfo')}})],1),_c('div',{staticClass:"project_main clearfix"},[_vm._l((_vm.projectsJson),function(value,key,index){return _c('div',{key:index,staticClass:"each_career clearfix"},[_c('h1',{staticClass:"company_name",attrs:{"id":key.replace(/ /g,'')}},[_c('div',{staticClass:"jobTitle"},[_vm._v(_vm._s(value.jobtitle))]),_c('div',{staticClass:"jobCompany"},[_vm._v("-- "+_vm._s(value.companyName))]),_c('div',{staticClass:"jobResponsibilities"},[_vm._v(" -- "+_vm._s(_vm.$t('RESPONSIBILITIES'))+" "),_c('ul',_vm._l((value.responsibilities),function(resp,rIndex){return _c('li',{key:rIndex},[_vm._v(" "+_vm._s(resp)+" ")])}),0)])]),_vm._l((value.projects),function(childItem){return _c('projectTem',{key:childItem.id,attrs:{"bgImg":childItem.img,"titleInf":childItem.title,"desc":childItem.desc,"tags":childItem.tags,"link":childItem.url,"code":childItem.code,"showTD":_vm.showTD,"storeUrlQr":childItem.storeUrlQr || "","id":childItem.title.replaceAll(' ','')}})})],2)}),(!_vm.mobile)?_c('div',{staticClass:"animation_menu",class:("animation_menu-" + _vm.userAgent + " " + (_vm.scrollingMenu? 'scrollMenu':''))},_vm._l((_vm.menuArr),function(key,val,index){return _c('div',{key:index,staticClass:"each_company_menu",class:_vm.activeMenuIndex == index ? 'active_menu':'',on:{"click":function($event){_vm.jumpToRelate(val.replace(/ /g,''),index)}}},[_vm._v(_vm._s(key)+" ")])}),0):_vm._e()],2),_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/projects/projects.vue?vue&type=template&id=72e2acfb&scoped=true&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/projects/projects.vue?vue&type=script&lang=js&
var projectsvue_type_script_lang_js_ = __webpack_require__("6a02");

// CONCATENATED MODULE: ./src/pages/projects/projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/pages/projects/projects.vue?vue&type=style&index=0&id=72e2acfb&scoped=true&lang=stylus&
var projectsvue_type_style_index_0_id_72e2acfb_scoped_true_lang_stylus_ = __webpack_require__("c4fc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/projects/projects.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  projects_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "72e2acfb",
  null
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c4fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_72e2acfb_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd40");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_72e2acfb_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_72e2acfb_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_id_72e2acfb_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cd40":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cf3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/projects/components/projectTem.vue?vue&type=template&id=58c9cf7e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("each_content each_content-" + (_vm.$root.$userAgent))},[('3'!=_vm.code && '4'!=_vm.code && '5'!=_vm.code)?_c('a',{attrs:{"href":_vm.link}},[_c('div',{staticClass:"each_wrapper"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.bgImg),expression:"bgImg"}],key:_vm.bgImg,staticClass:"each_img",attrs:{"alt":""}}),_c('div',{staticClass:"info_wrapper"},[_c('div',{staticClass:"thisTitle"},[_vm._v(_vm._s(_vm.titleInf))]),_c('div',{staticClass:"thisDes"},[_vm._v(_vm._s(_vm.desc))]),_c('div',{staticClass:"thisTags"},[_c('div',{staticClass:"subTitle"},[_vm._v("Tags:")]),_vm._v(" "+_vm._s(_vm.tags)+" ")])])])]):('3'==_vm.code || '4'==_vm.code || '5'==_vm.code)?_c('div',{staticClass:"threed",on:{"click":function($event){return _vm.goChildPage(_vm.code)}}},[_c('div',{staticClass:"tip"},[_vm._v(_vm._s(_vm.$t('projects.tip')))]),_c('div',{staticClass:"each_wrapper"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.bgImg),expression:"bgImg"}],key:_vm.bgImg,staticClass:"each_img",attrs:{"alt":""}}),(_vm.storeUrlQr)?_c('div',{staticClass:"qr_wrapper"},[_c('div',{staticClass:"row"},_vm._l((_vm.storeUrlQr),function(value,key,index){return _c('div',{key:index,staticClass:"col-xs-6"},[(value)?_c('div',{staticClass:"col-xs-12"},[_c('div',{staticClass:"img_wrapper"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(value),expression:"value"}],key:key,attrs:{"alt":""}})])]):_vm._e(),(value)?_c('div',{staticClass:"col-xs-12 qrTitle"},[_vm._v(" "+_vm._s(key)+" ")]):_vm._e()])}),0)]):_vm._e(),_c('div',{staticClass:"info_wrapper"},[_c('div',{staticClass:"thisTitle"},[_vm._v(_vm._s(_vm.titleInf))]),_c('div',{staticClass:"thisDes"},[_vm._v(_vm._s(_vm.desc))]),_c('div',{staticClass:"thisTags"},[_c('div',{staticClass:"subTitle"},[_vm._v("Tags:")]),_vm._v(" "+_vm._s(_vm.tags)+" ")])])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/projects/components/projectTem.vue?vue&type=template&id=58c9cf7e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/projects/components/projectTem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var projectTemvue_type_script_lang_js_ = ({
  name: "projectTem",
  props: {
    bgImg: String,
    titleInf: String,
    desc: String,
    tags: String,
    link: String,
    code: Number,
    storeUrlQr: {}
  },
  methods: {
    goChildPage: function goChildPage(page) {
      var _this = this;

      switch (page) {
        case 3:
          _this.$router.push({
            name: 'MagicBox'
          });

          break;

        case 4:
          _this.$router.push({
            path: '/projects/luggageDecalSplatter'
          });

          break;

        default:
          _this.$router.push({
            path: '/projects/forFun'
          });

      }
    }
  }
});
// CONCATENATED MODULE: ./src/pages/projects/components/projectTem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_projectTemvue_type_script_lang_js_ = (projectTemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/projects/components/projectTem.vue?vue&type=style&index=0&id=58c9cf7e&scoped=true&lang=stylus&
var projectTemvue_type_style_index_0_id_58c9cf7e_scoped_true_lang_stylus_ = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/projects/components/projectTem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_projectTemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "58c9cf7e",
  null
  
)

/* harmony default export */ var projectTem = __webpack_exports__["a"] = (component.exports);

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

/***/ "eb6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-0183131b.202252910.js.map