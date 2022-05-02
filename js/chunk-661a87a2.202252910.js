(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-661a87a2"],{

/***/ "136c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "8134":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "forFun",
  data: function data() {
    return {
      forFunJson: {},
      showMenu: true,
      showQuize: false,
      quizeIndex: 1,
      showResult: false,
      nameValid: false,
      showConstellation: false,
      showQuestions: false,
      showSex: false,
      constellation: 1,
      showTestIndex: 0,
      sexFlag: 'male',
      currentImg: null,
      currentResultImg: [],
      randomIndex: 0,
      currentInput: 1,
      submitTxt: '开始生成',
      userName: '',
      canvasImg: ''
    };
  },
  methods: {
    getForFun: function getForFun() {
      var url = '/mock/yuandian.json';
      this.$ajax.get(url) // npm run build ==>  ./static/mock/index.json
      .then(this.getForFunSucc).catch(function (res) {
        console.log("error:" + res);
      });
    },
    getForFunSucc: function getForFunSucc(res) {
      console.log(res);

      if (res.data.code == 200) {
        var data = res.data.data;
        this.forFunJson = data;
      }
    },
    hideSelf: function hideSelf() {
      // this.$parent.showTest();
      this.$router.push({
        path: '/projects',
        query: {
          jump: 'WeChat'
        }
      });
    },
    showTest: function showTest(id, imgUrl, resultImgs) {
      this.userName = '';

      if (imgUrl) {
        this.currentImg = imgUrl;
        this.currentResultImg = resultImgs;
      } else {
        alert("need data, please reload");
        return;
      }

      this.quizeIndex = Number(id);
      this.randomIndex = Math.ceil(Math.random() * this.currentResultImg.length) - 1; //随机图片
      //隐藏所有子项，然后switch显示对应项目

      this.showConstellation = false;
      this.showQuestions = false;
      this.showSex = false;

      switch (this.quizeIndex) {
        case 1:
          break;

        case 2:
          this.showConstellation = true;
          this.randomIndex = 0;
          this.constellation = 1;
          break;

        case 3:
          this.showSex = true;
          break;

        case 7:
          this.showConstellation = true;
          this.randomIndex = 0;
          this.constellation = 1;
          break;

        case 8:
          this.showConstellation = true;
          this.randomIndex = 0;
          this.constellation = 1;
          break;

        case 9:
          break;

        default:
          console.log('default');
      }

      this.showMenu = false;
      this.showQuize = true;
    },
    generateResult: function generateResult() {
      if (this.userName) {
        this.showResult = true;
      } else {
        this.userName = $("#userInputName").val();
      }

      if (!this.userName) {
        this.nameValid = true;
        return;
      } else {
        this.showQuize = false;
        this.showConstellation = true;

        switch (this.quizeIndex) {
          case 1:
            break;

          case 2:
            break;

          case 3:
            if ('male' === this.sexFlag) {
              this.randomIndex = Math.ceil(Math.random() * 8) - 1 + 6;
            } else {
              this.randomIndex = Math.ceil(Math.random() * 6) - 1;
            }

            break;

          default:
            console.log('this.quizeIndex:' + this.quizeIndex);
        }

        console.log(this.userName);
        this.canvasRun();
      }
    },
    canvasRun: function canvasRun() {
      //开始画布
      var img1 = document.getElementById('resultImg');
      var img2 = document.getElementById('headImg');
      var img3 = document.getElementById('wechatQR');
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      var width = img1.width;
      var height = img1.height;
      canvas.width = width;
      canvas.height = height; //绘制 底图

      context.drawImage(img1, 0, 0);

      switch (this.quizeIndex) {
        case 1:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 500, 755, 120, 120); //绘制 昵称

          context.font = "bold 40px Courier New";
          context.fillStyle = "#fff";
          context.textAlign = "center";
          context.fillText(this.userName, 320, 125);
          break;

        case 2:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 510, 870, 150, 150); //绘制 昵称

          context.font = "bold 45px Courier New";
          context.fillStyle = "#000"; // context.textAlign="center";

          context.fillText(this.userName, 450, 155);
          break;

        case 3:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 370, 780, 100, 100); //绘制 昵称

          context.font = "45px Courier New";
          context.fillStyle = "#000";
          context.textAlign = "center";
          context.fillText(this.userName, 315, 80);
          break;

        case 4:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 55, 830, 120, 120); //绘制 昵称

          if (this.userName.length <= 2) {
            context.font = "bold 60px Courier New";
            context.fillStyle = "#000";
            context.textAlign = "center";
            context.fillText(this.userName, 400, 160);
          } else {
            context.font = "bold 45px Courier New";
            context.fillStyle = "#000";
            context.textAlign = "center";
            context.fillText(this.userName, 400, 155);
          }

          break;

        case 5:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 260, 756, 130, 130); //绘制 昵称

          context.font = "  50px Courier New";
          context.fillStyle = "#000";
          context.textAlign = "center";
          context.fillText(this.userName, 320, 80);
          break;

        case 6:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 80, 800, 120, 120); //绘制 昵称

          context.font = "bold 50px Courier New";
          context.fillStyle = "#000";
          context.textAlign = "center";
          context.fillText(this.userName, 320, 162);
          break;

        case 7:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 630, 910, 150, 150); //绘制 昵称

          context.font = "bold 45px Courier New";
          context.fillStyle = "#000";
          context.textAlign = "center";
          context.fillText(this.userName, 400, 76);
          break;

        case 8:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 285, 987, 130, 130); //绘制 头像（图2，x，y，width， height）

          context.save(); // 保存当前ctx的状态

          context.arc(350, 735, 47, 0, 2 * Math.PI); //画出圆

          context.clip(); //裁剪上面的圆形

          context.drawImage(img2, 300, 685, 100, 100); // 在刚刚裁剪的园上画图(img, 图片左上角位置，图片左上角其实位置，图片长，宽)

          context.restore(); // 还原状态
          //绘制 昵称

          context.font = "bold 45px Courier New";
          context.fillStyle = "#fff";
          context.textAlign = "center";
          context.fillText(this.userName, 345, 270);
          break;

        case 9:
          //绘制 下方二维码 （图2，x，y，width， height）
          context.drawImage(img3, 500, 920, 120, 120); //绘制 昵称

          context.font = "bold 50px Courier New";
          context.fillStyle = "#000000";
          context.textAlign = "center";
          context.fillText(this.userName, 310, 100);
          break;

        default:
          context.fillStyle = "#fff";
      }

      var myCanvas = document.getElementsByTagName("canvas")[0];
      this.canvasImg = this.convertCanvasToImage(myCanvas);
      $("#results").html(this.canvasImg);
    },
    // canvas-->image
    convertCanvasToImage: function convertCanvasToImage(canvas) {
      //新Image对象,可以理解为DOM;
      var image = new Image(); //canvas.toDataURL返回的是一串Base64编码的URL,当然,浏览器自己肯定支持
      //指定格式PNG

      image.src = canvas.toDataURL("image/png");
      return image;
    },
    validClick: function validClick(type) {
      this.nameValid = false;

      if ('0' == type) {
        $("#userInputName").focus();
      }
    }
  },
  mounted: function mounted() {
    this.getForFun();
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    constellation: function constellation(newValue, oldValue) {
      if (newValue) {
        this.randomIndex = newValue - 1;
        console.log("this.randomIndex===" + this.randomIndex);
      }
    },
    // eslint-disable-next-line no-unused-vars
    sexFlag: function sexFlag(newValue, oldValue) {
      if (newValue) {
        this.sexFlag = newValue;

        if ('male' === this.sexFlag) {
          this.randomIndex = Math.ceil(Math.random() * 8) - 1 + 6;
        } else {
          this.randomIndex = Math.ceil(Math.random() * 6) - 1;
        }

        console.log("this.maleSelect===" + this.sexFlag);
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

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

/***/ "b155":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/forFun/forFun.vue?vue&type=template&id=df712bca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mainWrapper"},[_c('div',{staticClass:"mobile_bg",on:{"click":function($event){return _vm.hideSelf()}}}),_c('img',{staticClass:"mobile_module",attrs:{"src":"/image/yuandian/iphonex.png","alt":""}}),_c('div',{staticClass:"topNav img_wrapper"},[_c('img',{attrs:{"src":"/image/yuandian/logo.png","alt":""}}),(!_vm.showMenu)?_c('div',{staticClass:"close_content iconfont",on:{"click":function($event){_vm.showMenu = true;_vm.showQuize = false;_vm.showResult = false;}}},[_vm._v("")]):_vm._e()]),_c('div',{staticClass:"mobileWrapper"},[(_vm.showMenu)?_c('div',{staticClass:"forFun_menu clearfix"},_vm._l((_vm.forFunJson.menu),function(item,index){return _c('div',{key:index,staticClass:"each_top_menu",on:{"click":function($event){return _vm.showTest(item.id,item.bigImgUrl,item.resultImgs)}}},[(item.id < 7)?_c('div',{staticClass:"top_menu img_wrapper"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(item.imgUrl),expression:"item.imgUrl"}],attrs:{"alt":""}}),_c('p',{staticClass:"show_test_num"},[_c('span',[_vm._v(_vm._s(item.testNum))]),_vm._v("人在测")])]):_c('div',{staticClass:"big_menu img_wrapper"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(item.imgUrl),expression:"item.imgUrl"}],attrs:{"alt":""}}),_c('p',{staticClass:"show_test_num"},[_c('span',[_vm._v(_vm._s(item.testNum))]),_vm._v("人在玩")])])])}),0):_vm._e(),(_vm.showQuize)?_c('div',{staticClass:"forFunContent"},[_c('div',{staticClass:"img_wrapper"},[_c('img',{attrs:{"src":this.currentImg,"alt":""}})]),_c('div',{staticClass:"inputs name"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userName),expression:"userName"}],attrs:{"type":"text","id":"userInputName","placeholder":"姓名：请输入姓名","maxlength":"4"},domProps:{"value":(_vm.userName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.userName=$event.target.value}}}),(_vm.nameValid)?_c('div',{staticClass:"name_valid",on:{"click":function($event){return _vm.validClick(0)}}},[_vm._v("* 请输入姓名")]):_vm._e()]),(_vm.showSex)?_c('div',{staticClass:"inputs sex clearfix"},[_c('div',{staticClass:"title"},[_vm._v("性别：")]),_c('div',{staticClass:"each_sex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sexFlag),expression:"sexFlag"}],attrs:{"type":"radio","id":"male","name":"sex","value":"male","checked":"checked"},domProps:{"checked":_vm._q(_vm.sexFlag,"male")},on:{"change":function($event){_vm.sexFlag="male"}}}),_c('label',{staticClass:"sexLabel"},[_vm._v("男")])]),_c('div',{staticClass:"each_sex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sexFlag),expression:"sexFlag"}],attrs:{"type":"radio","id":"female","name":"sex","value":"female"},domProps:{"checked":_vm._q(_vm.sexFlag,"female")},on:{"change":function($event){_vm.sexFlag="female"}}}),_c('label',{staticClass:"sexLabel"},[_vm._v("女")])])]):_vm._e(),(_vm.showConstellation)?_c('div',{staticClass:"inputs constellation"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.constellation),expression:"constellation"}],staticClass:"xingzuo",attrs:{"id":"xingzuo"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.constellation=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"name":"xingzuo","value":"1"}},[_vm._v("白羊座 ( 03/21 - 04/19 )")]),_c('option',{attrs:{"name":"xingzuo","value":"2"}},[_vm._v("金牛座 ( 04/20 - 05/20)")]),_c('option',{attrs:{"name":"xingzuo","value":"3"}},[_vm._v("双子座 ( 05/21 - 06/21)")]),_c('option',{attrs:{"name":"xingzuo","value":"4"}},[_vm._v("巨蟹座 ( 06/22 - 07/22)")]),_c('option',{attrs:{"name":"xingzuo","value":"5"}},[_vm._v("狮子座 ( 07/23 - 08/22)")]),_c('option',{attrs:{"name":"xingzuo","value":"6"}},[_vm._v("处女座 ( 08/23 - 09/22)")]),_c('option',{attrs:{"name":"xingzuo","value":"7"}},[_vm._v("天秤座 ( 09/23 - 10/23)")]),_c('option',{attrs:{"name":"xingzuo","value":"8"}},[_vm._v("天蝎座 ( 10/24 - 11/22)")]),_c('option',{attrs:{"name":"xingzuo","value":"9"}},[_vm._v("射手座 ( 11/23 - 12/21)")]),_c('option',{attrs:{"name":"xingzuo","value":"10"}},[_vm._v("魔羯座 ( 12/22 - 01/19)")]),_c('option',{attrs:{"name":"xingzuo","value":"11"}},[_vm._v("水瓶座 ( 01/20 - 02/18)")]),_c('option',{attrs:{"name":"xingzuo","value":"12"}},[_vm._v("双鱼座 ( 02/19 - 03/20）")])])]):_vm._e(),(_vm.showQuestions)?_c('div',{staticClass:"inputs questions"},[_c('div',{staticClass:"each_q"})]):_vm._e(),_c('div',{staticClass:"text-center note"},[_vm._v(" 我们向您保证，用户输入的所有内容只会用于测试，不会将个人信息采集记录。 ")]),_c('div',{staticClass:"submit_btn",on:{"click":function($event){return _vm.generateResult()}}},[_vm._v(_vm._s(_vm.submitTxt))])]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showResult),expression:"showResult"}],staticClass:"forFunResult"},[_c('div',{staticClass:"resultTitle"},[_vm._v("长按保存你的结果图片吧")]),_c('div',{staticClass:"img_wrapper"},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(true),expression:"true"}],attrs:{"src":this.currentResultImg[this.randomIndex],"id":"resultImg"}}),_c('div',{staticStyle:{"text-align":"center","width":"100%"},attrs:{"id":"results"}}),_c('canvas',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"id":"canvas"}}),_c('img',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"src":"/image/footer/wechat_xin.jpg","id":"wechatQR","alt":""}}),_c('img',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"src":"/image/head_ico.png","id":"headImg","alt":""}})])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/common/forFun/forFun.vue?vue&type=template&id=df712bca&scoped=true&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/forFun/forFun.vue?vue&type=script&lang=js&
var forFunvue_type_script_lang_js_ = __webpack_require__("8134");

// CONCATENATED MODULE: ./src/common/forFun/forFun.vue?vue&type=script&lang=js&
 /* harmony default export */ var forFun_forFunvue_type_script_lang_js_ = (forFunvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/common/forFun/forFun.vue?vue&type=style&index=0&id=df712bca&scoped=true&lang=stylus&
var forFunvue_type_style_index_0_id_df712bca_scoped_true_lang_stylus_ = __webpack_require__("ecaf");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/common/forFun/forFun.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forFun_forFunvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "df712bca",
  null
  
)

/* harmony default export */ var forFun = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ecaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forFun_vue_vue_type_style_index_0_id_df712bca_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("136c");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forFun_vue_vue_type_style_index_0_id_df712bca_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forFun_vue_vue_type_style_index_0_id_df712bca_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forFun_vue_vue_type_style_index_0_id_df712bca_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-661a87a2.202252910.js.map