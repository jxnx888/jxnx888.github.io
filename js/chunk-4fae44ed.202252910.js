(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4fae44ed"],{

/***/ "3ec3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48fd80ff-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/threejs/threeDBuilder/ThreeDimensionalBuilder.vue?vue&type=template&id=7c8a8f6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"builder fixedBuilder"},[_c('div',{class:("main_wrapper main_wrapper_" + (this.$i18n.locale)),attrs:{"id":"mainWrapper"}},[_c('div',{staticClass:"clearfix",attrs:{"id":"container"},on:{"click":_vm.containerListenner,"mousedown":_vm.containerMouseDown,"mousemove":_vm.containerMouseMove,"mouseup":_vm.containerMouseUp}}),_c('div',{staticClass:"show_more clearfix",class:_vm.showMore?'':'show_more_close',on:{"click":function($event){return _vm.showMoreFn()}}},[_c('img',{attrs:{"src":"/image/3dBuilder/arrow.png","alt":""}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMore),expression:"showMore"}],staticClass:"clearfix",attrs:{"id":"shapes"}},[(!_vm.shapesListShow && !_vm.cartoonStlShow)?_c('div',{staticClass:"shapes_wrapper"},[_c('div',{staticClass:"shapes_options normal",on:{"click":function($event){return _vm.showModule(0)}}},[_vm._v(_vm._s(_vm.$t('REGULAR'))+" "+_vm._s(_vm.$t('MODEL'))+" "),_c('i',{staticClass:"iconfont arrow arrow_right"},[_vm._v("")])]),_c('div',{staticClass:"shapes_options cartoon",on:{"click":function($event){return _vm.showModule(1)}}},[_vm._v(_vm._s(_vm.$t('CARTOON'))+" "+_vm._s(_vm.$t('MODEL'))+" "),_c('i',{staticClass:"iconfont arrow arrow_right"},[_vm._v("")])])]):_vm._e(),(_vm.shapesListShow || _vm.cartoonStlShow)?_c('div',{attrs:{"id":"childWrapper"}},[(_vm.shapesListShow)?_c('div',{staticClass:"child_wrapper normal_wrapper"},[_c('div',{staticClass:"child_title",on:{"click":function($event){return _vm.hideModule()}}},[_c('i',{staticClass:"iconfont arrow"},[_vm._v("")]),_vm._v(_vm._s(_vm.$t('REGULAR'))+" "+_vm._s(_vm.$t('MODEL'))+" ")]),_vm._l((_vm.shapesList),function(item,index){return _c('div',{key:index,staticClass:"module shapes drag",class:item.title,on:{"click":function($event){return _vm.selectModule(0,item.code,index,item.module)}}},[(item.module =='shape')?_c('input',{staticClass:"this_module",attrs:{"type":"hidden","value":"0"}}):(item.module =='stl')?_c('input',{staticClass:"this_module",attrs:{"type":"hidden","value":"1"}}):(item.module =='text')?_c('input',{staticClass:"this_module",attrs:{"type":"hidden","value":"2"}}):_vm._e(),_c('input',{staticClass:"this_code",attrs:{"type":"hidden"},domProps:{"value":item.code}}),_c('div',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:('/image/3dBuilder/3dPrinting/sprint_'+item.title+'.png'),expression:"'/image/3dBuilder/3dPrinting/sprint_'+item.title+'.png'",arg:"background-image"}],staticClass:"drag sprint",class:'sprint_'+item.title}),_c('div',{staticClass:"name drag"},[_vm._v(_vm._s(_vm.$t(item.name)))])])})],2):_vm._e(),(_vm.cartoonStlShow)?_c('div',{staticClass:"child_wrapper cartoon_wrapper"},[_c('div',{staticClass:"child_title",on:{"click":function($event){return _vm.hideModule()}}},[_c('i',{staticClass:"iconfont arrow"},[_vm._v("")]),_vm._v(_vm._s(_vm.$t('CARTOON'))+" "+_vm._s(_vm.$t('MODEL'))+" ")]),_vm._l((_vm.cartoonStlList),function(item,index){return _c('div',{key:index,staticClass:"module lego drag",class:item.title,on:{"click":function($event){return _vm.selectModule(1,item.code,index,item.module)}}},[_c('input',{staticClass:"this_module",attrs:{"type":"hidden","value":"1"}}),_c('input',{staticClass:"this_code",attrs:{"type":"hidden"},domProps:{"value":index}}),_c('div',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:('/image/3dBuilder/3dPrinting/sprint_'+item.title+'.png'),expression:"'/image/3dBuilder/3dPrinting/sprint_'+item.title+'.png'",arg:"background-image"}],staticClass:"drag sprint sprintY",class:'sprint_'+item.title}),_c('div',{staticClass:"name drag"},[_vm._v(_vm._s(_vm.$t(item.name)))])])})],2):_vm._e()]):_vm._e()]),_c('div',{staticClass:"module_btns clearfix"},[_c('div',{staticClass:"btn_main go_mainPage",on:{"click":function($event){return _vm.leaveBuilder()}}},[_vm._m(0),_c('div',{staticClass:"module_btn_name"},[_vm._v(_vm._s(_vm.$t('BACK')))])]),_c('div',{staticClass:"btn_main save_module save_stl",class:_vm.activeSave?'':'noActive_save',on:{"click":function($event){return _vm.saveModuleShow(0)}}},[_vm._m(1),_c('div',{staticClass:"module_btn_name"},[_vm._v(_vm._s(_vm.$t('SAVE')))])])]),_c('div',{staticClass:"obj_control has_right_menu"},[(_vm.controlBar)?_c('div',{staticClass:"obj_control_wrapper clearfix"},[_c('div',{staticClass:"control_btn undo_control ",class:_vm.undoActive?'':'noActive_control',on:{"click":function($event){return _vm.redoUndo(0)}}},[_c('i',{staticClass:"iconfont"},[_vm._v("")]),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('REDO')))])]),_c('div',{staticClass:"control_btn redo_control ",class:_vm.redoActive?'':'noActive_control',on:{"click":function($event){return _vm.redoUndo(1)}}},[_c('i',{staticClass:"iconfont"},[_vm._v("")]),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('UNDO')))])]),_c('div',{staticClass:"control_btn size_control",on:{"click":function($event){return _vm.changeControls(0)}}},[_vm._m(2),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('CHANGE_SIZE')))])]),_c('div',{staticClass:"control_btn trans_control active_control",on:{"click":function($event){return _vm.changeControls(1)}}},[_vm._m(3),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('MOVE')))])]),_c('div',{staticClass:"control_btn rotate_control",on:{"click":function($event){return _vm.changeControls(2)}}},[_vm._m(4),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('ROTATE')))])]),_c('div',{staticClass:"control_btn zoomin_control",on:{"click":function($event){return _vm.showChild(0)}}},[_c('i',{staticClass:"iconfont"},[_vm._v("")]),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('ZOOM')))]),(_vm.showZoomOption)?_c('div',{staticClass:"zoom_options"},[_c('div',{staticClass:"zoom_opt",on:{"click":function($event){return _vm.zoomView(50)}}},[_vm._v("50%")]),_c('div',{staticClass:"zoom_opt",on:{"click":function($event){return _vm.zoomView(100)}}},[_vm._v("100%")]),_c('div',{staticClass:"zoom_opt",on:{"click":function($event){return _vm.zoomView(200)}}},[_vm._v("200%")])]):_vm._e()]),_c('div',{staticClass:"control_btn delete_control",on:{"click":function($event){return _vm.deletedSelected()}}},[_c('i',{staticClass:"iconfont"},[_vm._v("")]),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('DELETE')))])]),(_vm.colorControl)?_c('div',{staticClass:"control_btn color_control_wrapper",on:{"click":function($event){return _vm.showChild(1)}}},[_c('div',{staticClass:"color_circle outside_color",class:_vm.isWhite?'white_color_circle':''}),_c('div',{staticClass:"btn_name"},[_vm._v(_vm._s(_vm.$t('COLOR')))]),(_vm.showColorOption)?_c('div',{staticClass:"color_wrapper"},[_c('div',{staticClass:"color_control yellow_control",on:{"click":function($event){return _vm.changeCurrentColor(1)}}},[_c('div',{staticClass:"color_circle"})]),_c('div',{staticClass:"color_control white_control",on:{"click":function($event){return _vm.changeCurrentColor(0)}}},[_c('div',{staticClass:"color_circle"})])]):_vm._e()]):_vm._e()]):_vm._e()])]),(_vm.saveNmaeWindow)?_c('div',{staticClass:"save_name_module_bg"}):_vm._e(),(_vm.saveNmaeWindow)?_c('div',{staticClass:"save_name_module"},[_c('div',{staticClass:"save_name_title"},[_vm._v(_vm._s(_vm.$t('NAME')))]),_c('div',{staticClass:"save_name_tip"},[_vm._v(_vm._s(_vm.$t('NAME_MODEL')))]),_c('input',{attrs:{"type":"text","placeholder":"$t('ENTER_MODEL_NAME')","maxlength":"14","id":"save_name","oninput":"saveModuleName(this,'oninput')","onblur":"saveModuleName(this,'onblur')","onFocus":"saveModuleName(this,'onFocus')","onkeyup":"this.value=this.value.replace(/[^\\a-\\z\\A-\\Z0-9\\u4E00-\\u9FA5]/g ,'')","blur":"saveModuleName(this,'blur')"},domProps:{"value":this.getTimeStr()}}),_c('div',{staticClass:"save_name_verify"},[_vm._v(_vm._s(_vm.$t('ENTER_MODEL_NAME')))]),_c('div',{staticClass:"btn_wrapper clearfix"},[_c('img',{staticClass:"save_name_ok",attrs:{"src":"/image/3dBuilder/3dPrinting/btn_yes1.png"},on:{"click":function($event){_vm.activeSave?_vm.exportMoudle(0):''}}}),_c('img',{staticClass:"imgBtn save_name_cancle",attrs:{"src":"/image/3dBuilder/3dPrinting/btn_close.png"},on:{"click":function($event){return _vm.saveModuleShow(1)}}})])]):_vm._e(),(_vm.notSaveNote)?_c('div',{staticClass:"save_ask_module_bg"}):_vm._e(),(_vm.notSaveNote)?_c('div',{staticClass:"save_ask"},[_c('div',{staticClass:"save_name_title"},[_vm._v(_vm._s(_vm.$t('NOTE')))]),_c('div',{staticClass:"save_name_tip"},[_vm._v(" "+_vm._s(_vm.$t('SAVE_OR_NOT'))+" ")]),_c('div',{staticClass:"btn_wrapper clearfix"},[_c('img',{staticClass:"go_home_ok",attrs:{"src":"/image/3dBuilder/3dPrinting/btn_no.png"},on:{"click":function($event){return _vm.goHomeSaveModule(0)}}}),_c('img',{staticClass:"go_home_ok",attrs:{"src":"/image/3dBuilder/3dPrinting/btn_yes.png"},on:{"click":function($event){return _vm.goHomeSaveModule(1)}}}),_c('img',{staticClass:"imgBtn save_name_cancle",attrs:{"src":"/image/3dBuilder/3dPrinting/btn_close.png"},on:{"click":function($event){return _vm.hideAskWindow()}}})])]):_vm._e(),_vm._m(5),(_vm.showTextWindow)?_c('div',{staticClass:"text_window"},[_c('div',{staticClass:"text_title"},[_vm._v(_vm._s(_vm.$t('GENERATE_TEXT')))]),_c('input',{attrs:{"type":"text","placeholder":"$t{'ENTER_TEXT'}","maxlength":"10","id":"textContent"},on:{"input":_vm.textInputFn,"blur":_vm.textInputFn}}),_c('div',{staticClass:"btn_wrapper clearfix"},[_c('div',{staticClass:"btns btn_ok text_ok",class:_vm.inputCanConfirm?'':'btn_disable',on:{"click":function($event){_vm.inputCanConfirm?_vm.insertWord():null}}},[_vm._v(_vm._s(_vm.$t('CONFIRM'))+" ")]),_c('div',{staticClass:"btns btn_cancle text_cancle",on:{"click":function($event){return _vm.showInput(1)}}},[_vm._v(_vm._s(_vm.$t('CANCEL')))])])]):_vm._e(),(_vm.controlType)?_c('div',{staticClass:"control_type",domProps:{"textContent":_vm._s(_vm.statusTxt)}},[_vm._v(_vm._s(_vm.$t('CURRENT_STATUS'))+" "+_vm._s(_vm.$t('MOVE')))]):_vm._e(),(_vm.showLoading)?_c('div',{class:_vm.showMore?'hideShowMore':'',attrs:{"id":"loading_data"}},[_c('img',{attrs:{"src":"/image/3dBuilder/loading.gif","alt":""}}),_c('div',{staticClass:"processingbar"},[_c('div',{staticClass:"barwidth",style:({width:_vm.progressingBar+'%'})})])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn_child btn_home"},[_c('i',{staticClass:"iconfont"},[_vm._v("")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn_child btn_save_module"},[_c('i',{staticClass:"iconfont"},[_vm._v("")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon_wrapper"},[_c('i',{staticClass:"iconfont"},[_vm._v("")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon_wrapper"},[_c('i',{staticClass:"iconfont"},[_vm._v("")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon_wrapper"},[_c('i',{staticClass:"iconfont"},[_vm._v("")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"note"},[_c('div',{staticClass:"select_module"},[_vm._v("选择一个模型，点击 箭头按 "),_c('span',{staticClass:"red"},[_vm._v("X")]),_vm._v(","),_c('span',{staticClass:"green"},[_vm._v("Y")]),_vm._v(","),_c('span',{staticClass:"blue"},[_vm._v("Z")]),_vm._v("单向缩放,点击中心方块或 者双指，进行整体 缩放 ")])])}]


// CONCATENATED MODULE: ./src/common/threejs/threeDBuilder/ThreeDimensionalBuilder.vue?vue&type=template&id=7c8a8f6c&scoped=true&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/threejs/threeDBuilder/ThreeDimensionalBuilder.vue?vue&type=script&lang=js&
var ThreeDimensionalBuildervue_type_script_lang_js_ = __webpack_require__("db12");

// CONCATENATED MODULE: ./src/common/threejs/threeDBuilder/ThreeDimensionalBuilder.vue?vue&type=script&lang=js&
 /* harmony default export */ var threeDBuilder_ThreeDimensionalBuildervue_type_script_lang_js_ = (ThreeDimensionalBuildervue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/common/threejs/threeDBuilder/ThreeDimensionalBuilder.vue?vue&type=style&index=0&id=7c8a8f6c&scoped=true&lang=stylus&
var ThreeDimensionalBuildervue_type_style_index_0_id_7c8a8f6c_scoped_true_lang_stylus_ = __webpack_require__("97b3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/common/threejs/threeDBuilder/ThreeDimensionalBuilder.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  threeDBuilder_ThreeDimensionalBuildervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7c8a8f6c",
  null
  
)

/* harmony default export */ var ThreeDimensionalBuilder = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "402b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformControls; });
/* unused harmony export TransformControlsGizmo */
/* unused harmony export TransformControlsPlane */
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("45fc");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("841c");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1276");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4c53");
/* harmony import */ var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("5a89");










var TransformControls = function TransformControls(camera, domElement) {
  if (domElement === undefined) {
    console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.');
    domElement = document;
  }

  three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].call(this);
  this.visible = false;
  this.domElement = domElement;

  var _gizmo = new TransformControlsGizmo();

  this.add(_gizmo);

  var _plane = new TransformControlsPlane();

  this.add(_plane);
  var scope = this; // Define properties with getters/setter
  // Setting the defined property will automatically trigger change event
  // Defined properties are passed down to gizmo and plane

  defineProperty('camera', camera);
  defineProperty('object', undefined);
  defineProperty('enabled', true);
  defineProperty('axis', null);
  defineProperty('mode', 'translate');
  defineProperty('translationSnap', null);
  defineProperty('rotationSnap', null);
  defineProperty('scaleSnap', null);
  defineProperty('space', 'world');
  defineProperty('size', 1);
  defineProperty('dragging', false);
  defineProperty('showX', true);
  defineProperty('showY', true);
  defineProperty('showZ', true);
  var changeEvent = {
    type: 'change'
  };
  var mouseDownEvent = {
    type: 'mouseDown'
  };
  var mouseUpEvent = {
    type: 'mouseUp',
    mode: scope.mode
  };
  var objectChangeEvent = {
    type: 'objectChange'
  }; // Reusable utility variables

  var raycaster = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Raycaster */ "K"]();

  function intersectObjectWithRay(object, raycaster, includeInvisible) {
    var allIntersections = raycaster.intersectObject(object, true);

    for (var i = 0; i < allIntersections.length; i++) {
      if (allIntersections[i].object.visible || includeInvisible) {
        return allIntersections[i];
      }
    }

    return false;
  }

  var _tempVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();

  var _tempVector2 = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();

  var _tempQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();

  var _unit = {
    X: new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](1, 0, 0),
    Y: new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 1, 0),
    Z: new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 0, 1)
  };
  var pointStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var pointEnd = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var offset = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var rotationAxis = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var startNorm = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var endNorm = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var rotationAngle = 0;
  var cameraPosition = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var cameraQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var cameraScale = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var parentPosition = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var parentQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var parentQuaternionInv = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var parentScale = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var worldPositionStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var worldQuaternionStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var worldScaleStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var worldPosition = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var worldQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var worldQuaternionInv = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var worldScale = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var eye = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var positionStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var quaternionStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var scaleStart = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](); // TODO: remove properties unused in plane and gizmo

  defineProperty('worldPosition', worldPosition);
  defineProperty('worldPositionStart', worldPositionStart);
  defineProperty('worldQuaternion', worldQuaternion);
  defineProperty('worldQuaternionStart', worldQuaternionStart);
  defineProperty('cameraPosition', cameraPosition);
  defineProperty('cameraQuaternion', cameraQuaternion);
  defineProperty('pointStart', pointStart);
  defineProperty('pointEnd', pointEnd);
  defineProperty('rotationAxis', rotationAxis);
  defineProperty('rotationAngle', rotationAngle);
  defineProperty('eye', eye);
  {
    domElement.addEventListener('pointerdown', onPointerDown, false);
    domElement.addEventListener('pointermove', onPointerHover, false);
    scope.domElement.ownerDocument.addEventListener('pointerup', onPointerUp, false);
  }

  this.dispose = function () {
    domElement.removeEventListener('pointerdown', onPointerDown);
    domElement.removeEventListener('pointermove', onPointerHover);
    scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
    scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
    this.traverse(function (child) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }; // Set current object

  /*this.attach = function ( object ) {
  
  	this.object = object;
  	this.visible = true;
  
  	return this;
  
  };*/


  this.attach = function (object) {
    var activelength = $(".active_control").length;

    if (object && object.name != 'plane') {
      //plane不可被选中移动
      this.object = object;
      this.visible = true; // eslint-disable-next-line no-undef

      window.focusedTransformObj = object; // eslint-disable-next-line no-undef

      console.log("window.deleteObjFlag::" + window.deleteObjFlag);
      window.deleteObjFlag = false;
      $(".color_control_wrapper").show();
      $(".active_control").removeClass("active_control");
      setTimeout(function () {
        switch (scope.mode) {
          case "scale":
            $('.size_control').addClass("active_control");
            break;

          case "translate":
            $('.trans_control').addClass("active_control");
            break;

          case "rotate":
            $('.rotate_control').addClass("active_control");
            break;
        }
      }, 0);
    } else {
      // eslint-disable-next-line no-undef
      if (window.focusedTransformObj && activelength > 0) {
        // eslint-disable-next-line no-undef
        this.object = window.focusedTransformObj;
        this.visible = true;
      } else {
        $(".color_control_wrapper").hide();
      }
    }

    return this;
  }; // Detatch from object


  this.detach = function () {
    this.object = undefined;
    this.visible = false;
    this.axis = null;
    return this;
  }; // Defined getter, setter and store for a property


  function defineProperty(propName, defaultValue) {
    var propValue = defaultValue;
    Object.defineProperty(scope, propName, {
      get: function get() {
        return propValue !== undefined ? propValue : defaultValue;
      },
      set: function set(value) {
        if (propValue !== value) {
          propValue = value;
          _plane[propName] = value;
          _gizmo[propName] = value;
          scope.dispatchEvent({
            type: propName + '-changed',
            value: value
          });
          scope.dispatchEvent(changeEvent);
        }
      }
    });
    scope[propName] = defaultValue;
    _plane[propName] = defaultValue;
    _gizmo[propName] = defaultValue;
  } // updateMatrixWorld  updates key transformation variables


  this.updateMatrixWorld = function () {
    if (this.object !== undefined) {
      this.object.updateMatrixWorld();

      if (this.object.parent === null) {
        console.error('TransformControls: The attached 3D object must be a part of the scene graph.');
      } else {
        this.object.parent.matrixWorld.decompose(parentPosition, parentQuaternion, parentScale);
      }

      this.object.matrixWorld.decompose(worldPosition, worldQuaternion, worldScale);
      parentQuaternionInv.copy(parentQuaternion).invert();
      worldQuaternionInv.copy(worldQuaternion).invert();
    }

    this.camera.updateMatrixWorld();
    this.camera.matrixWorld.decompose(cameraPosition, cameraQuaternion, cameraScale);
    eye.copy(cameraPosition).sub(worldPosition).normalize();
    three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].prototype.updateMatrixWorld.call(this);
  };

  this.pointerHover = function (pointer) {
    if (this.object === undefined || this.dragging === true) return;
    raycaster.setFromCamera(pointer, this.camera);
    var intersect = intersectObjectWithRay(_gizmo.picker[this.mode], raycaster);

    if (intersect) {
      this.axis = intersect.object.name;
    } else {
      this.axis = null;
    }
  };

  this.pointerDown = function (pointer) {
    if (this.object === undefined || this.dragging === true || pointer.button !== 0) return;

    if (this.axis !== null) {
      raycaster.setFromCamera(pointer, this.camera);
      var planeIntersect = intersectObjectWithRay(_plane, raycaster, true);

      if (planeIntersect) {
        var space = this.space;

        if (this.mode === 'scale') {
          space = 'local';
        } else if (this.axis === 'E' || this.axis === 'XYZE' || this.axis === 'XYZ') {
          space = 'world';
        }

        if (space === 'local' && this.mode === 'rotate') {
          var snap = this.rotationSnap;
          if (this.axis === 'X' && snap) this.object.rotation.x = Math.round(this.object.rotation.x / snap) * snap;
          if (this.axis === 'Y' && snap) this.object.rotation.y = Math.round(this.object.rotation.y / snap) * snap;
          if (this.axis === 'Z' && snap) this.object.rotation.z = Math.round(this.object.rotation.z / snap) * snap;
        }

        this.object.updateMatrixWorld();
        this.object.parent.updateMatrixWorld();
        positionStart.copy(this.object.position);
        quaternionStart.copy(this.object.quaternion);
        scaleStart.copy(this.object.scale);
        this.object.matrixWorld.decompose(worldPositionStart, worldQuaternionStart, worldScaleStart);
        pointStart.copy(planeIntersect.point).sub(worldPositionStart);
      }

      this.dragging = true;
      mouseDownEvent.mode = this.mode;
      this.dispatchEvent(mouseDownEvent);
    }
  };

  this.pointerMove = function (pointer) {
    var axis = this.axis;
    var mode = this.mode;
    var object = this.object;
    var space = this.space;

    if (mode === 'scale') {
      space = 'local';
    } else if (axis === 'E' || axis === 'XYZE' || axis === 'XYZ') {
      space = 'world';
    }

    if (object === undefined || axis === null || this.dragging === false || pointer.button !== -1) return;
    raycaster.setFromCamera(pointer, this.camera);
    var planeIntersect = intersectObjectWithRay(_plane, raycaster, true);
    if (!planeIntersect) return;
    pointEnd.copy(planeIntersect.point).sub(worldPositionStart);

    if (mode === 'translate') {
      // Apply translate
      offset.copy(pointEnd).sub(pointStart);

      if (space === 'local' && axis !== 'XYZ') {
        offset.applyQuaternion(worldQuaternionInv);
      }

      if (axis.indexOf('X') === -1) offset.x = 0;
      if (axis.indexOf('Y') === -1) offset.y = 0;
      if (axis.indexOf('Z') === -1) offset.z = 0;

      if (space === 'local' && axis !== 'XYZ') {
        offset.applyQuaternion(quaternionStart).divide(parentScale);
      } else {
        offset.applyQuaternion(parentQuaternionInv).divide(parentScale);
      }

      object.position.copy(offset).add(positionStart); // Apply translation snap

      if (this.translationSnap) {
        if (space === 'local') {
          object.position.applyQuaternion(_tempQuaternion.copy(quaternionStart).invert());

          if (axis.search('X') !== -1) {
            object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
          }

          if (axis.search('Y') !== -1) {
            object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
          }

          if (axis.search('Z') !== -1) {
            object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
          }

          object.position.applyQuaternion(quaternionStart);
        }

        if (space === 'world') {
          if (object.parent) {
            object.position.add(_tempVector.setFromMatrixPosition(object.parent.matrixWorld));
          }

          if (axis.search('X') !== -1) {
            object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
          }

          if (axis.search('Y') !== -1) {
            object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
          }

          if (axis.search('Z') !== -1) {
            object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
          }

          if (object.parent) {
            object.position.sub(_tempVector.setFromMatrixPosition(object.parent.matrixWorld));
          }
        }
      }
    } else if (mode === 'scale') {
      if (axis.search('XYZ') !== -1) {
        var d = pointEnd.length() / pointStart.length();
        if (pointEnd.dot(pointStart) < 0) d *= -1;

        _tempVector2.set(d, d, d);
      } else {
        _tempVector.copy(pointStart);

        _tempVector2.copy(pointEnd);

        _tempVector.applyQuaternion(worldQuaternionInv);

        _tempVector2.applyQuaternion(worldQuaternionInv);

        _tempVector2.divide(_tempVector);

        if (axis.search('X') === -1) {
          _tempVector2.x = 1;
        }

        if (axis.search('Y') === -1) {
          _tempVector2.y = 1;
        }

        if (axis.search('Z') === -1) {
          _tempVector2.z = 1;
        }
      } // Apply scale


      object.scale.copy(scaleStart).multiply(_tempVector2);

      if (this.scaleSnap) {
        if (axis.search('X') !== -1) {
          object.scale.x = Math.round(object.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
        }

        if (axis.search('Y') !== -1) {
          object.scale.y = Math.round(object.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
        }

        if (axis.search('Z') !== -1) {
          object.scale.z = Math.round(object.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
        }
      }
    } else if (mode === 'rotate') {
      offset.copy(pointEnd).sub(pointStart);
      var ROTATION_SPEED = 20 / worldPosition.distanceTo(_tempVector.setFromMatrixPosition(this.camera.matrixWorld));

      if (axis === 'E') {
        rotationAxis.copy(eye);
        rotationAngle = pointEnd.angleTo(pointStart);
        startNorm.copy(pointStart).normalize();
        endNorm.copy(pointEnd).normalize();
        rotationAngle *= endNorm.cross(startNorm).dot(eye) < 0 ? 1 : -1;
      } else if (axis === 'XYZE') {
        rotationAxis.copy(offset).cross(eye).normalize();
        rotationAngle = offset.dot(_tempVector.copy(rotationAxis).cross(this.eye)) * ROTATION_SPEED;
      } else if (axis === 'X' || axis === 'Y' || axis === 'Z') {
        rotationAxis.copy(_unit[axis]);

        _tempVector.copy(_unit[axis]);

        if (space === 'local') {
          _tempVector.applyQuaternion(worldQuaternion);
        }

        rotationAngle = offset.dot(_tempVector.cross(eye).normalize()) * ROTATION_SPEED;
      } // Apply rotation snap


      if (this.rotationSnap) rotationAngle = Math.round(rotationAngle / this.rotationSnap) * this.rotationSnap;
      this.rotationAngle = rotationAngle; // Apply rotate

      if (space === 'local' && axis !== 'E' && axis !== 'XYZE') {
        object.quaternion.copy(quaternionStart);
        object.quaternion.multiply(_tempQuaternion.setFromAxisAngle(rotationAxis, rotationAngle)).normalize();
      } else {
        rotationAxis.applyQuaternion(parentQuaternionInv);
        object.quaternion.copy(_tempQuaternion.setFromAxisAngle(rotationAxis, rotationAngle));
        object.quaternion.multiply(quaternionStart).normalize();
      }
    }

    this.dispatchEvent(changeEvent);
    this.dispatchEvent(objectChangeEvent);
  };

  this.pointerUp = function (pointer) {
    if (pointer.button !== 0) return;

    if (this.dragging && this.axis !== null) {
      mouseUpEvent.mode = this.mode;
      this.dispatchEvent(mouseUpEvent);
    }

    this.dragging = false;
    this.axis = null;
  }; // normalize mouse / touch pointer and remap {x,y} to view space.


  function getPointer(event) {
    if (scope.domElement.ownerDocument.pointerLockElement) {
      return {
        x: 0,
        y: 0,
        button: event.button
      };
    } else {
      var pointer = event.changedTouches ? event.changedTouches[0] : event;
      var rect = domElement.getBoundingClientRect();
      return {
        x: (pointer.clientX - rect.left) / rect.width * 2 - 1,
        y: -(pointer.clientY - rect.top) / rect.height * 2 + 1,
        button: event.button
      };
    }
  } // mouse / touch event handlers


  function onPointerHover(event) {
    if (!scope.enabled) return;

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        scope.pointerHover(getPointer(event));
        break;
    }
  }

  function onPointerDown(event) {
    if (!scope.enabled) return;
    scope.domElement.style.touchAction = 'none'; // disable touch scroll

    scope.domElement.ownerDocument.addEventListener('pointermove', onPointerMove, false);
    scope.pointerHover(getPointer(event));
    scope.pointerDown(getPointer(event));
  }

  function onPointerMove(event) {
    if (!scope.enabled) return;
    scope.pointerMove(getPointer(event));
  }

  function onPointerUp(event) {
    if (!scope.enabled) return;
    scope.domElement.style.touchAction = '';
    scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove, false);
    scope.pointerUp(getPointer(event));
  } // TODO: deprecate


  this.getMode = function () {
    return scope.mode;
  };

  this.setMode = function (mode) {
    scope.mode = mode;
  };

  this.setTranslationSnap = function (translationSnap) {
    scope.translationSnap = translationSnap;
  };

  this.setRotationSnap = function (rotationSnap) {
    scope.rotationSnap = rotationSnap;
  };

  this.setScaleSnap = function (scaleSnap) {
    scope.scaleSnap = scaleSnap;
  };

  this.setSize = function (size) {
    scope.size = size;
  };

  this.setSpace = function (space) {
    scope.space = space;
  };

  this.update = function () {
    console.warn('THREE.TransformControls: update function has no more functionality and therefore has been deprecated.');
  };
};

TransformControls.prototype = Object.assign(Object.create(three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].prototype), {
  constructor: TransformControls,
  isTransformControls: true
});

var TransformControlsGizmo = function TransformControlsGizmo() {
  'use strict';

  three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].call(this);
  this.type = 'TransformControlsGizmo'; // shared materials

  var gizmoMaterial = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* MeshBasicMaterial */ "A"]({
    depthTest: false,
    depthWrite: false,
    transparent: true,
    side: three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* DoubleSide */ "i"],
    fog: false,
    toneMapped: false
  });
  var gizmoLineMaterial = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* LineBasicMaterial */ "u"]({
    depthTest: false,
    depthWrite: false,
    transparent: true,
    linewidth: 1,
    fog: false,
    toneMapped: false
  }); // Make unique material for each axis/color

  var matInvisible = gizmoMaterial.clone();
  matInvisible.opacity = 0.15;
  var matHelper = gizmoMaterial.clone();
  matHelper.opacity = 0.33;
  var matRed = gizmoMaterial.clone();
  matRed.color.set(0xff0000);
  var matGreen = gizmoMaterial.clone();
  matGreen.color.set(0x00ff00);
  var matBlue = gizmoMaterial.clone();
  matBlue.color.set(0x0000ff);
  var matWhiteTransparent = gizmoMaterial.clone();
  matWhiteTransparent.opacity = 0.25;
  var matYellowTransparent = matWhiteTransparent.clone();
  matYellowTransparent.color.set(0xffff00);
  var matCyanTransparent = matWhiteTransparent.clone();
  matCyanTransparent.color.set(0x00ffff);
  var matMagentaTransparent = matWhiteTransparent.clone();
  matMagentaTransparent.color.set(0xff00ff);
  var matYellow = gizmoMaterial.clone();
  matYellow.color.set(0xffff00);
  var matLineRed = gizmoLineMaterial.clone();
  matLineRed.color.set(0xff0000);
  var matLineGreen = gizmoLineMaterial.clone();
  matLineGreen.color.set(0x00ff00);
  var matLineBlue = gizmoLineMaterial.clone();
  matLineBlue.color.set(0x0000ff);
  var matLineCyan = gizmoLineMaterial.clone();
  matLineCyan.color.set(0x00ffff);
  var matLineMagenta = gizmoLineMaterial.clone();
  matLineMagenta.color.set(0xff00ff);
  var matLineYellow = gizmoLineMaterial.clone();
  matLineYellow.color.set(0xffff00);
  var matLineGray = gizmoLineMaterial.clone();
  matLineGray.color.set(0x787878);
  var matLineYellowTransparent = matLineYellow.clone();
  matLineYellowTransparent.opacity = 0.5; // reusable geometry

  var arrowGeometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0, 0.1, 0.2, 12, 1, false);
  var scaleHandleGeometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* BoxBufferGeometry */ "b"](0.2, 0.2, 0.2);
  var lineGeometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* BufferGeometry */ "d"]();
  lineGeometry.setAttribute('position', new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Float32BufferAttribute */ "p"]([0, 0, 0, 1, 0, 0], 3));

  var CircleGeometry = function CircleGeometry(radius, arc) {
    var geometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* BufferGeometry */ "d"]();
    var vertices = [];

    for (var i = 0; i <= 64 * arc; ++i) {
      vertices.push(0, Math.cos(i / 32 * Math.PI) * radius, Math.sin(i / 32 * Math.PI) * radius);
    }

    geometry.setAttribute('position', new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Float32BufferAttribute */ "p"](vertices, 3));
    return geometry;
  }; // Special geometry for transform helper. If scaled with position vector it spans from [0,0,0] to position


  var TranslateHelperGeometry = function TranslateHelperGeometry() {
    var geometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* BufferGeometry */ "d"]();
    geometry.setAttribute('position', new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Float32BufferAttribute */ "p"]([0, 0, 0, 1, 1, 1], 3));
    return geometry;
  }; // Gizmo definitions - custom hierarchy definitions for setupGizmo() function


  var gizmoTranslate = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](arrowGeometry, matRed), [1, 0, 0], [0, 0, -Math.PI / 2], null, 'fwd'], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](arrowGeometry, matRed), [1, 0, 0], [0, 0, Math.PI / 2], null, 'bwd'], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineRed)]],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](arrowGeometry, matGreen), [0, 1, 0], null, null, 'fwd'], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](arrowGeometry, matGreen), [0, 1, 0], [Math.PI, 0, 0], null, 'bwd'], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineGreen), null, [0, 0, Math.PI / 2]]],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](arrowGeometry, matBlue), [0, 0, 1], [Math.PI / 2, 0, 0], null, 'fwd'], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](arrowGeometry, matBlue), [0, 0, 1], [-Math.PI / 2, 0, 0], null, 'bwd'], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineBlue), null, [0, -Math.PI / 2, 0]]],
    XYZ: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.1, 0), matWhiteTransparent.clone()), [0, 0, 0], [0, 0, 0]]],
    XY: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](0.295, 0.295), matYellowTransparent.clone()), [0.15, 0.15, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineYellow), [0.18, 0.3, 0], null, [0.125, 1, 1]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineYellow), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]],
    YZ: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](0.295, 0.295), matCyanTransparent.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineCyan), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineCyan), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
    XZ: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](0.295, 0.295), matMagentaTransparent.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineMagenta), [0.18, 0, 0.3], null, [0.125, 1, 1]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineMagenta), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]]
  };
  var pickerTranslate = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.2, 0, 1, 4, 1, false), matInvisible), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.2, 0, 1, 4, 1, false), matInvisible), [0, 0.6, 0]]],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.2, 0, 1, 4, 1, false), matInvisible), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
    XYZ: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.2, 0), matInvisible)]],
    XY: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](0.4, 0.4), matInvisible), [0.2, 0.2, 0]]],
    YZ: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](0.4, 0.4), matInvisible), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
    XZ: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](0.4, 0.4), matInvisible), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]
  };
  var helperTranslate = {
    START: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.01, 2), matHelper), null, null, null, 'helper']],
    END: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.01, 2), matHelper), null, null, null, 'helper']],
    DELTA: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](TranslateHelperGeometry(), matHelper), null, null, null, 'helper']],
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], 'helper']],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], 'helper']],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], 'helper']]
  };
  var gizmoRotate = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](CircleGeometry(1, 0.5), matLineRed)], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.04, 0), matRed), [0, 0, 0.99], null, [1, 3, 1]]],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](CircleGeometry(1, 0.5), matLineGreen), null, [0, 0, -Math.PI / 2]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.04, 0), matGreen), [0, 0, 0.99], null, [3, 1, 1]]],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](CircleGeometry(1, 0.5), matLineBlue), null, [0, Math.PI / 2, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* OctahedronBufferGeometry */ "E"](0.04, 0), matBlue), [0.99, 0, 0], null, [1, 3, 1]]],
    E: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](CircleGeometry(1.25, 1), matLineYellowTransparent), null, [0, Math.PI / 2, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [1.17, 0, 0], [0, 0, -Math.PI / 2], [1, 1, 0.001]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [-1.17, 0, 0], [0, 0, Math.PI / 2], [1, 1, 0.001]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [0, -1.17, 0], [Math.PI, 0, 0], [1, 1, 0.001]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [0, 1.17, 0], [0, 0, 0], [1, 1, 0.001]]],
    XYZE: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](CircleGeometry(1, 1), matLineGray), null, [0, Math.PI / 2, 0]]]
  };
  var helperRotate = {
    AXIS: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], 'helper']]
  };
  var pickerRotate = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* TorusBufferGeometry */ "T"](1, 0.1, 4, 24), matInvisible), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* TorusBufferGeometry */ "T"](1, 0.1, 4, 24), matInvisible), [0, 0, 0], [Math.PI / 2, 0, 0]]],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* TorusBufferGeometry */ "T"](1, 0.1, 4, 24), matInvisible), [0, 0, 0], [0, 0, -Math.PI / 2]]],
    E: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* TorusBufferGeometry */ "T"](1.25, 0.1, 2, 24), matInvisible)]],
    XYZE: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* SphereBufferGeometry */ "P"](0.7, 10, 8), matInvisible)]]
  };
  var gizmoScale = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](scaleHandleGeometry, matRed), [0.8, 0, 0], [0, 0, -Math.PI / 2]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineRed), null, null, [0.8, 1, 1]]],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](scaleHandleGeometry, matGreen), [0, 0.8, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineGreen), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](scaleHandleGeometry, matBlue), [0, 0, 0.8], [Math.PI / 2, 0, 0]], [new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matLineBlue), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]]
    /*,
    XY: [
    [ new Mesh( scaleHandleGeometry, matYellowTransparent ), [ 0.85, 0.85, 0 ], null, [ 2, 2, 0.2 ]],
    [ new Line( lineGeometry, matLineYellow ), [ 0.855, 0.98, 0 ], null, [ 0.125, 1, 1 ]],
    [ new Line( lineGeometry, matLineYellow ), [ 0.98, 0.855, 0 ], [ 0, 0, Math.PI / 2 ], [ 0.125, 1, 1 ]]
    ],
    YZ: [
    [ new Mesh( scaleHandleGeometry, matCyanTransparent ), [ 0, 0.85, 0.85 ], null, [ 0.2, 2, 2 ]],
    [ new Line( lineGeometry, matLineCyan ), [ 0, 0.855, 0.98 ], [ 0, 0, Math.PI / 2 ], [ 0.125, 1, 1 ]],
    [ new Line( lineGeometry, matLineCyan ), [ 0, 0.98, 0.855 ], [ 0, - Math.PI / 2, 0 ], [ 0.125, 1, 1 ]]
    ],
    XZ: [
    [ new Mesh( scaleHandleGeometry, matMagentaTransparent ), [ 0.85, 0, 0.85 ], null, [ 2, 0.2, 2 ]],
    [ new Line( lineGeometry, matLineMagenta ), [ 0.855, 0, 0.98 ], null, [ 0.125, 1, 1 ]],
    [ new Line( lineGeometry, matLineMagenta ), [ 0.98, 0, 0.855 ], [ 0, - Math.PI / 2, 0 ], [ 0.125, 1, 1 ]]
    ],
    XYZX: [
    [ new Mesh( new BoxBufferGeometry( 0.125, 0.125, 0.125 ), matWhiteTransparent.clone() ), [ 1.1, 0, 0 ]],
    ],
    XYZY: [
    [ new Mesh( new BoxBufferGeometry( 0.125, 0.125, 0.125 ), matWhiteTransparent.clone() ), [ 0, 1.1, 0 ]],
    ],
    XYZZ: [
    [ new Mesh( new BoxBufferGeometry( 0.125, 0.125, 0.125 ), matWhiteTransparent.clone() ), [ 0, 0, 1.1 ]],
    ]*/

  };
  var pickerScale = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.2, 0, 0.8, 4, 1, false), matInvisible), [0.5, 0, 0], [0, 0, -Math.PI / 2]]],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.2, 0, 0.8, 4, 1, false), matInvisible), [0, 0.5, 0]]],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* CylinderBufferGeometry */ "g"](0.2, 0, 0.8, 4, 1, false), matInvisible), [0, 0, 0.5], [Math.PI / 2, 0, 0]]]
    /*,
    XY: [
    [ new Mesh( scaleHandleGeometry, matInvisible ), [ 0.85, 0.85, 0 ], null, [ 3, 3, 0.2 ]],
    ],
    YZ: [
    [ new Mesh( scaleHandleGeometry, matInvisible ), [ 0, 0.85, 0.85 ], null, [ 0.2, 3, 3 ]],
    ],
    XZ: [
    [ new Mesh( scaleHandleGeometry, matInvisible ), [ 0.85, 0, 0.85 ], null, [ 3, 0.2, 3 ]],
    ],
    XYZX: [
    [ new Mesh( new BoxBufferGeometry( 0.2, 0.2, 0.2 ), matInvisible ), [ 1.1, 0, 0 ]],
    ],
    XYZY: [
    [ new Mesh( new BoxBufferGeometry( 0.2, 0.2, 0.2 ), matInvisible ), [ 0, 1.1, 0 ]],
    ],
    XYZZ: [
    [ new Mesh( new BoxBufferGeometry( 0.2, 0.2, 0.2 ), matInvisible ), [ 0, 0, 1.1 ]],
    ]*/

  };
  var helperScale = {
    X: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], 'helper']],
    Y: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], 'helper']],
    Z: [[new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Line */ "t"](lineGeometry, matHelper.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], 'helper']]
  }; // Creates an Object3D with gizmos described in custom hierarchy definition.

  var setupGizmo = function setupGizmo(gizmoMap) {
    var gizmo = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"]();

    for (var name in gizmoMap) {
      for (var i = gizmoMap[name].length; i--;) {
        var object = gizmoMap[name][i][0].clone();
        var position = gizmoMap[name][i][1];
        var rotation = gizmoMap[name][i][2];
        var scale = gizmoMap[name][i][3];
        var tag = gizmoMap[name][i][4]; // name and tag properties are essential for picking and updating logic.

        object.name = name;
        object.tag = tag;

        if (position) {
          object.position.set(position[0], position[1], position[2]);
        }

        if (rotation) {
          object.rotation.set(rotation[0], rotation[1], rotation[2]);
        }

        if (scale) {
          object.scale.set(scale[0], scale[1], scale[2]);
        }

        object.updateMatrix();
        var tempGeometry = object.geometry.clone();
        tempGeometry.applyMatrix4(object.matrix);
        object.geometry = tempGeometry;
        object.renderOrder = Infinity;
        object.position.set(0, 0, 0);
        object.rotation.set(0, 0, 0);
        object.scale.set(1, 1, 1);
        gizmo.add(object);
      }
    }

    return gizmo;
  }; // Reusable utility variables


  var tempVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 0, 0);
  var tempEuler = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Euler */ "k"]();
  var alignVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 1, 0);
  var zeroVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 0, 0);
  var lookAtMatrix = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Matrix4 */ "y"]();
  var tempQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var tempQuaternion2 = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var identityQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();
  var unitX = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](1, 0, 0);
  var unitY = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 1, 0);
  var unitZ = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 0, 1); // Gizmo creation

  this.gizmo = {};
  this.picker = {};
  this.helper = {};
  this.add(this.gizmo['translate'] = setupGizmo(gizmoTranslate));
  this.add(this.gizmo['rotate'] = setupGizmo(gizmoRotate));
  this.add(this.gizmo['scale'] = setupGizmo(gizmoScale));
  this.add(this.picker['translate'] = setupGizmo(pickerTranslate));
  this.add(this.picker['rotate'] = setupGizmo(pickerRotate));
  this.add(this.picker['scale'] = setupGizmo(pickerScale));
  this.add(this.helper['translate'] = setupGizmo(helperTranslate));
  this.add(this.helper['rotate'] = setupGizmo(helperRotate));
  this.add(this.helper['scale'] = setupGizmo(helperScale)); // Pickers should be hidden always

  this.picker['translate'].visible = false;
  this.picker['rotate'].visible = false;
  this.picker['scale'].visible = false; // updateMatrixWorld will update transformations and appearance of individual handles

  this.updateMatrixWorld = function () {
    var space = this.space;
    if (this.mode === 'scale') space = 'local'; // scale always oriented to local rotation

    var quaternion = space === 'local' ? this.worldQuaternion : identityQuaternion; // Show only gizmos for current transform mode

    this.gizmo['translate'].visible = this.mode === 'translate';
    this.gizmo['rotate'].visible = this.mode === 'rotate';
    this.gizmo['scale'].visible = this.mode === 'scale';
    this.helper['translate'].visible = this.mode === 'translate';
    this.helper['rotate'].visible = this.mode === 'rotate';
    this.helper['scale'].visible = this.mode === 'scale';
    var handles = [];
    handles = handles.concat(this.picker[this.mode].children);
    handles = handles.concat(this.gizmo[this.mode].children);
    handles = handles.concat(this.helper[this.mode].children);

    for (var i = 0; i < handles.length; i++) {
      var handle = handles[i]; // hide aligned to camera

      handle.visible = true;
      handle.rotation.set(0, 0, 0);
      handle.position.copy(this.worldPosition);
      var factor;

      if (this.camera.isOrthographicCamera) {
        factor = (this.camera.top - this.camera.bottom) / this.camera.zoom;
      } else {
        factor = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7);
      }

      handle.scale.set(1, 1, 1).multiplyScalar(factor * this.size / 7); // TODO: simplify helpers and consider decoupling from gizmo

      if (handle.tag === 'helper') {
        handle.visible = false;

        if (handle.name === 'AXIS') {
          handle.position.copy(this.worldPositionStart);
          handle.visible = !!this.axis;

          if (this.axis === 'X') {
            tempQuaternion.setFromEuler(tempEuler.set(0, 0, 0));
            handle.quaternion.copy(quaternion).multiply(tempQuaternion);

            if (Math.abs(alignVector.copy(unitX).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
              handle.visible = false;
            }
          }

          if (this.axis === 'Y') {
            tempQuaternion.setFromEuler(tempEuler.set(0, 0, Math.PI / 2));
            handle.quaternion.copy(quaternion).multiply(tempQuaternion);

            if (Math.abs(alignVector.copy(unitY).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
              handle.visible = false;
            }
          }

          if (this.axis === 'Z') {
            tempQuaternion.setFromEuler(tempEuler.set(0, Math.PI / 2, 0));
            handle.quaternion.copy(quaternion).multiply(tempQuaternion);

            if (Math.abs(alignVector.copy(unitZ).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
              handle.visible = false;
            }
          }

          if (this.axis === 'XYZE') {
            tempQuaternion.setFromEuler(tempEuler.set(0, Math.PI / 2, 0));
            alignVector.copy(this.rotationAxis);
            handle.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(zeroVector, alignVector, unitY));
            handle.quaternion.multiply(tempQuaternion);
            handle.visible = this.dragging;
          }

          if (this.axis === 'E') {
            handle.visible = false;
          }
        } else if (handle.name === 'START') {
          handle.position.copy(this.worldPositionStart);
          handle.visible = this.dragging;
        } else if (handle.name === 'END') {
          handle.position.copy(this.worldPosition);
          handle.visible = this.dragging;
        } else if (handle.name === 'DELTA') {
          handle.position.copy(this.worldPositionStart);
          handle.quaternion.copy(this.worldQuaternionStart);
          tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1);
          tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert());
          handle.scale.copy(tempVector);
          handle.visible = this.dragging;
        } else {
          handle.quaternion.copy(quaternion);

          if (this.dragging) {
            handle.position.copy(this.worldPositionStart);
          } else {
            handle.position.copy(this.worldPosition);
          }

          if (this.axis) {
            handle.visible = this.axis.search(handle.name) !== -1;
          }
        } // If updating helper, skip rest of the loop


        continue;
      } // Align handles to current local or world rotation


      handle.quaternion.copy(quaternion);

      if (this.mode === 'translate' || this.mode === 'scale') {
        // Hide translate and scale axis facing the camera
        var AXIS_HIDE_TRESHOLD = 0.99;
        var PLANE_HIDE_TRESHOLD = 0.2;
        var AXIS_FLIP_TRESHOLD = 0.0;

        if (handle.name === 'X' || handle.name === 'XYZX') {
          if (Math.abs(alignVector.copy(unitX).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }

        if (handle.name === 'Y' || handle.name === 'XYZY') {
          if (Math.abs(alignVector.copy(unitY).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }

        if (handle.name === 'Z' || handle.name === 'XYZZ') {
          if (Math.abs(alignVector.copy(unitZ).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }

        if (handle.name === 'XY') {
          if (Math.abs(alignVector.copy(unitZ).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }

        if (handle.name === 'YZ') {
          if (Math.abs(alignVector.copy(unitX).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }

        if (handle.name === 'XZ') {
          if (Math.abs(alignVector.copy(unitY).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        } // Flip translate and scale axis ocluded behind another axis


        if (handle.name.search('X') !== -1) {
          if (alignVector.copy(unitX).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
            if (handle.tag === 'fwd') {
              handle.visible = false;
            } else {
              handle.scale.x *= -1;
            }
          } else if (handle.tag === 'bwd') {
            handle.visible = false;
          }
        }

        if (handle.name.search('Y') !== -1) {
          if (alignVector.copy(unitY).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
            if (handle.tag === 'fwd') {
              handle.visible = false;
            } else {
              handle.scale.y *= -1;
            }
          } else if (handle.tag === 'bwd') {
            handle.visible = false;
          }
        }

        if (handle.name.search('Z') !== -1) {
          if (alignVector.copy(unitZ).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
            if (handle.tag === 'fwd') {
              handle.visible = false;
            } else {
              handle.scale.z *= -1;
            }
          } else if (handle.tag === 'bwd') {
            handle.visible = false;
          }
        }
      } else if (this.mode === 'rotate') {
        // Align handles to current local or world rotation
        tempQuaternion2.copy(quaternion);
        alignVector.copy(this.eye).applyQuaternion(tempQuaternion.copy(quaternion).invert());

        if (handle.name.search('E') !== -1) {
          handle.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(this.eye, zeroVector, unitY));
        }

        if (handle.name === 'X') {
          tempQuaternion.setFromAxisAngle(unitX, Math.atan2(-alignVector.y, alignVector.z));
          tempQuaternion.multiplyQuaternions(tempQuaternion2, tempQuaternion);
          handle.quaternion.copy(tempQuaternion);
        }

        if (handle.name === 'Y') {
          tempQuaternion.setFromAxisAngle(unitY, Math.atan2(alignVector.x, alignVector.z));
          tempQuaternion.multiplyQuaternions(tempQuaternion2, tempQuaternion);
          handle.quaternion.copy(tempQuaternion);
        }

        if (handle.name === 'Z') {
          tempQuaternion.setFromAxisAngle(unitZ, Math.atan2(alignVector.y, alignVector.x));
          tempQuaternion.multiplyQuaternions(tempQuaternion2, tempQuaternion);
          handle.quaternion.copy(tempQuaternion);
        }
      } // Hide disabled axes


      handle.visible = handle.visible && (handle.name.indexOf('X') === -1 || this.showX);
      handle.visible = handle.visible && (handle.name.indexOf('Y') === -1 || this.showY);
      handle.visible = handle.visible && (handle.name.indexOf('Z') === -1 || this.showZ);
      handle.visible = handle.visible && (handle.name.indexOf('E') === -1 || this.showX && this.showY && this.showZ); // highlight selected axis

      handle.material._opacity = handle.material._opacity || handle.material.opacity;
      handle.material._color = handle.material._color || handle.material.color.clone();
      handle.material.color.copy(handle.material._color);
      handle.material.opacity = handle.material._opacity;

      if (!this.enabled) {
        handle.material.opacity *= 0.5;
        handle.material.color.lerp(new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Color */ "e"](1, 1, 1), 0.5);
      } else if (this.axis) {
        if (handle.name === this.axis) {
          handle.material.opacity = 1.0;
          handle.material.color.lerp(new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Color */ "e"](1, 1, 1), 0.5);
        } else if (this.axis.split('').some(function (a) {
          return handle.name === a;
        })) {
          handle.material.opacity = 1.0;
          handle.material.color.lerp(new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Color */ "e"](1, 1, 1), 0.5);
        } else {
          handle.material.opacity *= 0.25;
          handle.material.color.lerp(new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Color */ "e"](1, 1, 1), 0.5);
        }
      }
    }

    three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].prototype.updateMatrixWorld.call(this);
  };
};

TransformControlsGizmo.prototype = Object.assign(Object.create(three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].prototype), {
  constructor: TransformControlsGizmo,
  isTransformControlsGizmo: true
});

var TransformControlsPlane = function TransformControlsPlane() {
  'use strict';

  three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"].call(this, new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* PlaneBufferGeometry */ "I"](100000, 100000, 2, 2), new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* MeshBasicMaterial */ "A"]({
    visible: false,
    wireframe: true,
    side: three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* DoubleSide */ "i"],
    transparent: true,
    opacity: 0.1,
    toneMapped: false
  }));
  this.type = 'TransformControlsPlane';
  var unitX = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](1, 0, 0);
  var unitY = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 1, 0);
  var unitZ = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"](0, 0, 1);
  var tempVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var dirVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var alignVector = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Vector3 */ "W"]();
  var tempMatrix = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Matrix4 */ "y"]();
  var identityQuaternion = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Quaternion */ "J"]();

  this.updateMatrixWorld = function () {
    var space = this.space;
    this.position.copy(this.worldPosition);
    if (this.mode === 'scale') space = 'local'; // scale always oriented to local rotation

    unitX.set(1, 0, 0).applyQuaternion(space === 'local' ? this.worldQuaternion : identityQuaternion);
    unitY.set(0, 1, 0).applyQuaternion(space === 'local' ? this.worldQuaternion : identityQuaternion);
    unitZ.set(0, 0, 1).applyQuaternion(space === 'local' ? this.worldQuaternion : identityQuaternion); // Align the plane for current transform mode, axis and space.

    alignVector.copy(unitY);

    switch (this.mode) {
      case 'translate':
      case 'scale':
        switch (this.axis) {
          case 'X':
            alignVector.copy(this.eye).cross(unitX);
            dirVector.copy(unitX).cross(alignVector);
            break;

          case 'Y':
            alignVector.copy(this.eye).cross(unitY);
            dirVector.copy(unitY).cross(alignVector);
            break;

          case 'Z':
            alignVector.copy(this.eye).cross(unitZ);
            dirVector.copy(unitZ).cross(alignVector);
            break;

          case 'XY':
            dirVector.copy(unitZ);
            break;

          case 'YZ':
            dirVector.copy(unitX);
            break;

          case 'XZ':
            alignVector.copy(unitZ);
            dirVector.copy(unitY);
            break;

          case 'XYZ':
          case 'E':
            dirVector.set(0, 0, 0);
            break;
        }

        break;

      case 'rotate':
      default:
        // special case for rotate
        dirVector.set(0, 0, 0);
    }

    if (dirVector.length() === 0) {
      // If in rotate mode, make the plane parallel to camera
      this.quaternion.copy(this.cameraQuaternion);
    } else {
      tempMatrix.lookAt(tempVector.set(0, 0, 0), dirVector, alignVector);
      this.quaternion.setFromRotationMatrix(tempMatrix);
    }

    three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Object3D */ "D"].prototype.updateMatrixWorld.call(this);
  };
};

TransformControlsPlane.prototype = Object.assign(Object.create(three_build_three_module_js__WEBPACK_IMPORTED_MODULE_8__[/* Mesh */ "z"].prototype), {
  constructor: TransformControlsPlane,
  isTransformControlsPlane: true
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

/***/ }),

/***/ "5888":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrientationControls; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three_build_three_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5a89");




var OrientationControls = function () {
  function epsilon(value) {
    return Math.abs(value) < 1e-10 ? 0 : value;
  }

  function getObjectCSSMatrix(matrix) {
    var elements = matrix.elements;
    var matrix3d = 'matrix3d(' + epsilon(elements[0]) + ',' + epsilon(elements[1]) + ',' + epsilon(elements[2]) + ',' + epsilon(elements[3]) + ',' + epsilon(-elements[4]) + ',' + epsilon(-elements[5]) + ',' + epsilon(-elements[6]) + ',' + epsilon(-elements[7]) + ',' + epsilon(elements[8]) + ',' + epsilon(elements[9]) + ',' + epsilon(elements[10]) + ',' + epsilon(elements[11]) + ',' + epsilon(elements[12]) + ',' + epsilon(elements[13]) + ',' + epsilon(elements[14]) + ',' + epsilon(elements[15]) + ')';
    return 'translate(-50%,-50%)' + matrix3d;
  } // const matrix = new THREE.Matrix4;


  var matrix = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_2__[/* Matrix4 */ "y"]();
  var defaultStyle = "\n        .orientationControls {\n            font-family: sans-serif;\n            position: absolute;\n            z-index: 1;\n            transform: scaleY(-1);\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n        \n        .orientationControls > .box {\n            position: relative;\n            transform-style: preserve-3d;\n        }\n        \n        .orientationControls > .box > .face {\n            cursor: grab;\n            background-color: #dadee9;\n            position: absolute;\n            box-shadow: inset 0 0 0 2px #747883;\n            font-weight: bold;\n            color: #747883;\n            text-align: center;\n        }\n        \n        .orientationControls > .box > .face:hover {\n            background-color: #a8acba;\n        }\n        \n        .orientationControls > .box > .ring {\n\t\t\tpointer-events: none;\n            position: absolute;\n            border-radius: 100%;\n            box-shadow: inset 0 0 0 3px #747883, 0 0 0 10px #dadee92e;\n        }\n        .orientationControls > .box > .ring > div {\n            color: #747883;\n            position: absolute;\n            font-weight: bold;\n        }\n    ";
  var sides = {
    front: 'rotateY(  0deg) translateZ(%SIZE)',
    right: 'rotateY( 90deg) translateZ(%SIZE)',
    back: 'rotateY(180deg) translateZ(%SIZE)',
    left: 'rotateY(-90deg) translateZ(%SIZE)',
    top: 'rotateX( 90deg) translateZ(%SIZE)',
    bottom: 'rotateX(-90deg) translateZ(%SIZE)'
  };
  var offsets = {
    n: [0, -1],
    e: [1, 0],
    s: [0, 1],
    w: [-1, 0]
  };

  function OrientationControls(size, options) {
    size = size || 80;
    options = options || {};
    var unit = 'px';
    var half = size / 2;
    options.perspective = options.perspective || false;
    options.defaultStyle = options.defaultStyle !== undefined ? options.defaultStyle : true;

    if (options.defaultStyle && !OrientationControls.cssElement) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var element = document.createElement('style');
      element.id = 'orientationControls';
      element.href = undefined;
      element.appendChild(document.createTextNode(defaultStyle));
      head.insertBefore(element, head.firstChild);
      OrientationControls.cssElement = element;
    } // Container


    var container = document.createElement('div');
    container.className = 'orientationControls';
    container.style.width = size + unit;
    container.style.height = size + unit;
    container.style.left = size / 2 + unit;
    container.style.top = size / 2 + unit; // Box

    var box = document.createElement('div');
    box.className = 'box';
    box.style.width = size + unit;
    box.style.height = size + unit;
    box.style.fontSize = size / 6 + unit;
    container.appendChild(box); // Ring + cardinal points

    var ring = document.createElement('div');
    var R = 1.7320508075688772;
    var s = size * R / 2;
    var directions = {
      n: 'translateX(' + s + unit + ') translateY(' + 0 + unit + ')',
      e: 'translateX(' + s * 2 + unit + ') translateY(' + s + unit + ')',
      s: 'translateX(' + s + unit + ') translateY(' + s * 2 + unit + ')',
      w: 'translateX(' + 0 + unit + ') translateY(' + s + unit + ')'
    };

    function direction(name) {
      var e = document.createElement('div');
      var id = name.toLowerCase();
      var fs = size / 6;
      e.id = id;
      e.textContent = name;
      e.style.transform = directions[id];
      e.style.fontSize = fs + unit;
      e.style.left = -size / 2 / 6 - offsets[id][0] * fs + unit;
      e.style.top = -size / 2 / 6 - offsets[id][1] * fs + unit;
      ring.appendChild(e);
    }

    direction('N');
    direction('E');
    direction('S');
    direction('W');
    ring.className = 'ring';
    ring.style.transform = 'rotateX(90deg) translateZ(' + -size / 5 + unit + ') translateX(' + -size / 3 + unit + ')';
    ring.style.width = size * R + unit;
    ring.style.height = size * R + unit;
    box.appendChild(ring); // Sides

    function plane(side) {
      var e = document.createElement('div');
      var id = side.toLowerCase();
      e.id = id;

      switch (side) {
        case 'Front':
          e.textContent = "前";
          break;

        case 'Right':
          e.textContent = "右";
          break;

        case 'Back':
          e.textContent = "后";
          break;

        case 'Left':
          e.textContent = "左";
          break;

        case 'Top':
          e.textContent = "上";
          break;

        case 'Bottom':
          e.textContent = "下";
          break;
      } // e.textContent = side;


      e.className = id + ' face';
      e.style.width = size + unit;
      e.style.height = size + unit;
      e.style.transform = sides[id].replace('%SIZE', size / 2 + unit);
      e.style.lineHeight = size + unit;
      box.appendChild(e);
      return e;
    }

    plane('Front');
    plane('Right');
    plane('Back');
    plane('Left');
    plane('Top');
    plane('Bottom');
    /*plane( '前' );
          plane( '右' );
          plane( '后' );
          plane( '左' );
          plane( '上' );
          plane( '下' );
    */

    this.element = container;

    this.update = function () {
      matrix.copy(window.camera.matrixWorldInverse);
      matrix.elements[12] = half;
      matrix.elements[13] = half;
      matrix.elements[14] = 0;
      var style = getObjectCSSMatrix(matrix);
      box.style.WebkitTransform = style;
      box.style.transform = style;
      container.style.perspective = (options.perspective && window.camera.isPerspectiveCamera ? Math.pow(size * size + size * size, 0.5) / Math.tan(window.camera.fov / 2 * Math.PI / 180) : 0) + unit;
    };
  }

  return OrientationControls;
}();



/***/ }),

/***/ "9451":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "97b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDimensionalBuilder_vue_vue_type_style_index_0_id_7c8a8f6c_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9451");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDimensionalBuilder_vue_vue_type_style_index_0_id_7c8a8f6c_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDimensionalBuilder_vue_vue_type_style_index_0_id_7c8a8f6c_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDimensionalBuilder_vue_vue_type_style_index_0_id_7c8a8f6c_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d162":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2b3d");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("bf19");
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var C_Projects_xin_vue_personal_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("1da1");
/* harmony import */ var _assets_threejs_common_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("d162");
/* harmony import */ var _assets_threejs_common_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_threejs_common_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("5a89");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("4721");
/* harmony import */ var three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("518e");
/* harmony import */ var three_examples_jsm_exporters_STLExporter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("8bc1");
/* harmony import */ var _assets_threejs_TransformControls_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("402b");
/* harmony import */ var _assets_threejs_OrientationControls2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("5888");













//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // import {TransformControls} from 'three/examples/jsm/controls/TransformControls'

 // import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
// import { OrientationControls } from './js/OrientationControls2.js'


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ThreeDimensionalBuilder',
  data: function data() {
    return {
      mobile: false,
      WORK_SPACE_SIZE: 200,
      CONTAIN_WIDTH: null,
      CONTAIN_HEIGHT: null,
      SHAPE_SIZE: 20,
      LIMIT_SIZE: 4,
      renderer: null,
      camera: null,
      cameraZoom: 1,
      scene: null,
      plane: null,
      objects: [],
      shapesObj: [],
      //所有的当前已放置的obj
      gridHelper: null,
      gradGroundMesh: null,
      mouseHelper: null,
      mouseHelperMaterial: null,
      focusedTransformObj: null,
      deleteObjFlag: null,
      gradGroundMesh1: null,
      composer: null,
      renderPass: null,
      outlinePass: null,
      effectFXAA: null,
      controls: null,
      transformControl: null,
      container: null,
      orientationContr: null,
      controlsMoved: false,
      shapesEventL: null,
      shapesMain: null,
      showMore: true,
      showZoomOption: false,
      showColorOption: false,
      isWhite: true,
      colorControl: true,
      selectedDragObj: null,
      selectedDragObjFlag: null,
      dragObj: null,
      dragedFlag: null,
      maxW: null,
      maxH: null,
      movedDir: null,
      shapesList: [],
      cartoonStlList: [],
      shapesListShow: true,
      cartoonStlShow: false,
      controlBar: false,
      redoActive: false,
      undoActive: false,
      stlGeoFlag: null,
      //0: get 1 stl
      showTextWindow: false,
      currentObj: null,
      textInput: '',
      textInput1: '',
      fontLoader: null,
      wordFont: null,
      wordColor: 0xdddddd,
      shootedFlag: false,
      currentObjMesh: null,
      currentObjMaterial: null,
      currentModule: 0,
      //编辑模式，各种基础模型
      // container监听事件
      transformDragFlag: false,
      twoPointTouchFlag: false,
      mouse: null,
      raycaster: null,
      isShiftDown: false,
      saveFlag: false,
      //是否保存
      activeSave: false,
      //是否激活保存样式
      saveNmaeWindow: false,
      //是否显示保存窗口
      notSaveNote: false,
      //是否显示未保存提示窗口
      goHomeFlag: false,
      //是否是点击返回按钮
      allOperation: [],
      //all the operated operation(undo)
      eachObjectInfo: {},
      //每一个对象的每一个步骤；
      eachRedoObjectInfo: {},
      //每一个对象的每一个步骤；
      redoOperation: [],
      //all the redo operation : false,
      selectedObjects: [],
      //当前加outline的对象
      statusTxt: null,
      controlType: null,
      //是否显示文案
      transformControlModeType: 1,
      //当前transformControl的 模式  0:scale  1:translate  2:rotate
      intersectsSelect: [],
      //焦点 交点
      intersection: {
        intersects: false,
        point: new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Vector3 */ "W"](),
        normal: new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Vector3 */ "W"]()
      },
      tcScale: null,
      tcScaleYPosition: null,
      tcScaleY: null,
      tcScaleYPositionFlag: null,
      tcX: null,
      tcY: null,
      tcZ: null,
      showLoading: false,
      progressingBar: 0,
      inputCanConfirm: false
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      _this.container = document.getElementById('container');
      _this.renderer = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* WebGLRenderer */ "X"]({
        antialias: true,
        alpha: true
      });

      _this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1); // _this.renderer.setSize( this.CONTAIN_WIDTH, this.CONTAIN_HEIGHT );


      _this.renderer.setSize(_this.CONTAIN_WIDTH, _this.CONTAIN_HEIGHT);

      _this.renderer.shadowMap.enabled = true;
      _this.renderer.autoClear = false;

      _this.renderer.setClearColor(0x000000, 0.0);

      _this.container.appendChild(_this.renderer.domElement);

      _this.camera = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* PerspectiveCamera */ "H"](45, _this.CONTAIN_WIDTH / _this.CONTAIN_HEIGHT, 1, 10000); // camera.position.set( 0, 200, 350 ); //正面

      _this.camera.position.set(170, 145, 255); //45°


      _this.camera.lookAt(0, 0, 0);

      window.camera = _this.camera;
      _this.scene = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Scene */ "M"]();
      var geometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* PlaneBufferGeometry */ "I"](_this.WORK_SPACE_SIZE, _this.WORK_SPACE_SIZE);
      geometry.rotateX(-Math.PI / 2);
      _this.plane = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Mesh */ "z"](geometry, new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* MeshBasicMaterial */ "A"]({
        color: 0xe5e4df,
        visible: true
      }));
      _this.plane.name = 'plane';
      _this.plane.receiveShadow = true;
      _this.plane.castShadow = true;

      _this.scene.add(_this.plane);

      _this.objects.push(_this.plane);

      _this.raycaster = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Raycaster */ "K"]();
      _this.mouse = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Vector2 */ "V"]();

      _this.grads(); // lights


      var ambientLight = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* AmbientLight */ "a"](0x606060, 1); //0x606060

      _this.scene.add(ambientLight);

      var directionalLight = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* DirectionalLight */ "h"](0xFFFFFF, 1.3);
      directionalLight.position.set(1, 0.75, 0.5).normalize();

      _this.scene.add(directionalLight); // lights end
      // _this.outline(); //objects outline


      _this.orbitCont();

      _this.transformCont(); // _this.orientationCont()
      // _this.containerListenner();


      _this.animate();

      _this.onWindowResize();
    },
    grads: function grads() {
      // grid
      this.gridHelper = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* GridHelper */ "s"](this.WORK_SPACE_SIZE, 20, 0x999999, 0xc999999); // gridHelper = new THREE.GridHelper( 300, 6, 0x999999, 0xc999999 );

      this.gridHelper.name = 'GridHelper';
      this.scene.add(this.gridHelper);
      this.gradGroundMesh = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* BoxBufferGeometry */ "b"](this.WORK_SPACE_SIZE, .8, this.WORK_SPACE_SIZE), new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* MeshLambertMaterial */ "B"]({
        color: 0xffffff
      }));
      this.gradGroundMesh.position.y = -.8;
      this.gradGroundMesh.name = 'GridHelper';
      this.gradGroundMesh.receiveShadow = true;
      this.gradGroundMesh.castShadow = true;
      this.scene.add(this.gradGroundMesh);
      this.gradGroundMesh1 = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Mesh */ "z"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* BoxBufferGeometry */ "b"](this.WORK_SPACE_SIZE, 3, this.WORK_SPACE_SIZE), new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* MeshLambertMaterial */ "B"]({
        color: 0xffc869
      }));
      this.gradGroundMesh1.position.y = -2.5;
      this.gradGroundMesh1.name = 'GridHelper';
      this.gradGroundMesh1.receiveShadow = true;
      this.gradGroundMesh1.castShadow = true;
      this.scene.add(this.gradGroundMesh1); //grid end
    },
    outline: function outline() {
      // outline
      this.composer = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__["EffectComposer"](this.renderer);
      var renderPass = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__["RenderPass"](this.scene, this.camera);
      this.composer.addPass(renderPass);
      this.outlinePass = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__["OutlinePass"](new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Vector2 */ "V"](this.CONTAIN_WIDTH - 100, this.CONTAIN_HEIGHT), this.scene, this.camera);
      this.outlinePass.edgeStrength = 4; //强度 默认3

      this.outlinePass.edgeThickness = 1;
      this.outlinePass.visibleEdgeColor.set('#00ff00'); // 边缘可见部分发光颜色

      this.outlinePass.hiddenEdgeColor.set('#00ff00'); //边缘遮挡部分发光颜色

      this.outlinePass.edgeGlow = 1; //发光颜色虚边
      // outlinePass.pulsePeriod= 3;//发光颜色闪烁频率

      this.composer.addPass(this.outlinePass);
      this.effectFXAA = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__["ShaderPass"](three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__["FXAAShader"]);
      this.effectFXAA.uniforms['resolution'].value.set(1 / this.CONTAIN_WIDTH, 1 / this.CONTAIN_HEIGHT); // outline end
    },
    orbitCont: function orbitCont() {
      var _this = this; // 旋转控制


      _this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_15__[/* OrbitControls */ "a"](_this.camera, _this.renderer.domElement); // project controller

      _this.controls.minDistance = 10; //设置相机距离原点的最近距离 min distance of camera to coordinate origin

      _this.controls.maxDistance = 1300; //设置相机距离原点的最远距离 max distance of camera to coordinate origin

      _this.controls.enableKeys = true;
      _this.controls.rotateSpeed = .3;
      _this.controls.keys = {
        LEFT: 65,
        //left arrow
        UP: 87,
        // up arrow
        RIGHT: 68,
        // right arrow
        BOTTOM: 83 // down arrow

      };
      _this.controls.enablePan = false; //是否开启右键拖拽

      _this.controls.enableZoom = true; //是否可以缩放
      // _this.controls.enabled = false;

      _this.controls.addEventListener('change', function () {
        _this.controlsMoved = true;

        if (_this.objects.length > 1) {
          if (_this.camera.position.y < 0) {
            //当镜头在底板 底部后，隐藏
            _this.clearCache(_this.gridHelper);

            _this.scene.remove(_this.gridHelper);

            _this.clearCache(_this.gradGroundMesh);

            _this.scene.remove(_this.gradGroundMesh);

            _this.clearCache(_this.gradGroundMesh1);

            _this.scene.remove(_this.gradGroundMesh1);
          } else {
            _this.clearCache(_this.gridHelper);

            _this.scene.remove(_this.gridHelper);

            _this.clearCache(_this.gradGroundMesh);

            _this.scene.remove(_this.gradGroundMesh);

            _this.clearCache(_this.gradGroundMesh1);

            _this.scene.remove(_this.gradGroundMesh1);

            _this.scene.add(_this.gridHelper);

            _this.scene.add(_this.gradGroundMesh);

            _this.scene.add(_this.gradGroundMesh1);
          }
        } else {
          _this.clearCache(_this.gridHelper);

          _this.scene.remove(_this.gridHelper);

          _this.clearCache(_this.gradGroundMesh);

          _this.scene.remove(_this.gradGroundMesh);

          _this.clearCache(_this.gradGroundMesh1);

          _this.scene.remove(_this.gradGroundMesh1);

          _this.scene.add(_this.gridHelper);

          _this.scene.add(_this.gradGroundMesh);

          _this.scene.add(_this.gradGroundMesh1);
        }
      });
    },
    transformCont: function transformCont() {
      var _this = this; //移动shape


      _this.transformControl = new _assets_threejs_TransformControls_js__WEBPACK_IMPORTED_MODULE_18__[/* TransformControls */ "a"](this.camera, this.renderer.domElement);
      _this.transformControl.name = 'transformControl';
      _this.transformControl.size = 1.5;

      _this.scene.add(_this.transformControl);

      _this.transformControl.addEventListener('dragging-changed', function (event) {
        if (_this.controls) {
          _this.controls.enabled = !event.value;
          _this.transformDragFlag = !event.value;
        }
      }, false);

      _this.transformControl.addEventListener('change', function () {
        if (_this.shootedFlag) {
          _this.shapesController(0);
        }

        _this.showCurrentColor();

        _this.onAnimationStep();
      }, false);

      _this.transformControl.addEventListener('mouseDown', function () {
        _this.transformControlMove = false;

        _this.checkScalePosition(_this.transformControl.object);
      }, false);

      _this.transformControl.addEventListener('objectChange', function () {
        _this.transformControlMove = true;
      }, false);

      _this.transformControl.addEventListener('mouseUp', function () {
        if (_this.transformControlMove) {
          _this.allOperationAdd();
        }

        _this.showCurrentColor();

        if (window.focusedTransformObj) {
          _this.transformControl.object = window.focusedTransformObj;
        }
      }, false); //移动shape End

    },
    containerListenner: function containerListenner() {
      this.showColorOption = false;
      this.showZoomOption = false;
      this.onDocumentMouseDown(event);
    },
    containerMouseDown: function containerMouseDown() {
      var _this = this;

      _this.controlsMoved = false;
      _this.showColorOption = false;
      _this.showZoomOption = false;
      _this.controls.enabled = _this.transformDragFlag;
      _this.twoPointTouchFlag = false;
      _this.touchScale = '';
    },
    containerMouseMove: function containerMouseMove() {// this.onDocumentMouseMove(event);
    },
    containerMouseUp: function containerMouseUp() {
      if (this.transformControl.object) {
        window.focusedTransformObj = this.transformControl.object;
      }

      if (!this.controlsMoved && !this.transformControlMove) {
        setTimeout(function () {
          this.onDocumentMouseDown(event);
        }, 100);
      }

      this.tcScaleYPosition = '';
      this.tcScaleYPositionFlag = '';
      this.tcScaleY = '';
      this.tcX = '';
      this.tcY = '';
      this.tcZ = '';
      this.transformControlMove = false;
    },
    orientationCont: function orientationCont() {
      var _this = this;

      _this.orientationContr = new _assets_threejs_OrientationControls2_js__WEBPACK_IMPORTED_MODULE_19__[/* OrientationControls */ "a"](50); //右上角三视图

      document.body.appendChild(_this.orientationContr.element);

      _this.orientationContr.element.addEventListener('click', function (e) {
        switch (e.target.id) {
          case 'front':
            _this.camera.position.set(0, 0, 300);

            break;

          case 'back':
            _this.camera.position.set(0, 0, -300);

            break;

          case 'top':
            _this.camera.position.set(0, 300, 0);

            break;

          case 'bottom':
            _this.camera.position.set(0, -300, 0);

            break;

          case 'left':
            _this.camera.position.set(-300, 0, 0);

            break;

          case 'right':
            _this.camera.position.set(300, 0, 0);

            break;
        }

        _this.camera.lookAt(_this.scene.position);

        _this.camera.updateProjectionMatrix();
      });
    },
    animate: function animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera); // this.orientationContr.update(this.camera)
      // this.composer.render();
    },
    onWindowResize: function onWindowResize() {
      if (!this.showMore) {
        this.camera.aspect = this.CONTAIN_WIDTH / this.CONTAIN_HEIGHT;
        this.renderer.setSize(this.CONTAIN_WIDTH, this.CONTAIN_HEIGHT); // this.composer.setSize( this.CONTAIN_WIDTH, this.CONTAIN_HEIGHT );
        // this.effectFXAA.uniforms['resolution'].value.set( 1 / this.CONTAIN_WIDTH, 1 / this.CONTAIN_HEIGHT );
      } else {
        this.camera.aspect = (this.CONTAIN_WIDTH - 100) / this.CONTAIN_HEIGHT;
        this.renderer.setSize(this.CONTAIN_WIDTH - 100, this.CONTAIN_HEIGHT); // this.composer.setSize( this.CONTAIN_WIDTH - 100, this.CONTAIN_HEIGHT );
        // this.effectFXAA.uniforms['resolution'].value.set( 1 / ( this.CONTAIN_WIDTH - 100 ), 1 / this.CONTAIN_HEIGHT );
      }

      this.camera.updateProjectionMatrix();
    },
    clearCache: function clearCache(currentMesh) {
      currentMesh.geometry.dispose();
      currentMesh.material.dispose();
    },
    render: function render() {
      this.renderer.render(this.scene, this.camera);
    },
    listModule: function listModule() {
      var url = '/mock/moduleList.json';
      this.$ajax.get(url).then(this.listModuleSucc).catch(function (res) {
        console.error(res);
      });
    },
    listModuleSucc: function listModuleSucc(res) {
      if (res && res.data) {
        this.shapesList = res.data.data.shapes;
        this.cartoonStlList = res.data.data.stl; // this.dropOffListerner();
      }
    },
    showModule: function showModule(type) {
      if (type == 0) {
        this.shapesListShow = true;
        this.cartoonStlShow = false;
      } else if (type == 1) {
        this.shapesListShow = false;
        this.cartoonStlShow = true;
      }
    },
    hideModule: function hideModule() {
      this.shapesListShow = false;
      this.cartoonStlShow = false;
    },
    showMoreFn: function showMoreFn() {
      if (this.showMore) {
        this.showMore = false;
        $('.orientationControls').addClass('right_menu_hide');
      } else {
        this.showMore = true;
        $('.orientationControls').removeClass('right_menu_hide');
      }

      this.onWindowResize();
    },
    dropOffListerner: function dropOffListerner() {
      var _this = this;

      _this.shapesMain.addEventListener('touchstart', function () {
        //隐藏子窗口
        _this.showColorOption = false;
        _this.showColorOption = false;
      });

      _this.shapesEventL.addEventListener('touchstart', function (e) {
        //隐藏子窗口
        _this.showColorOption = false;
        _this.showColorOption = false;
        _this.selectedDragObj = $(e.target);

        if (_this.selectedDragObj.hasClass('drag')) {
          $('.active_shape').removeClass('active_shape');

          if (_this.selectedDragObj.hasClass('name')) {
            _this.dragObj = $(_this.selectedDragObj).parents('.module').find('.sprint').clone();
            $(_this.selectedDragObj).parents('.module').addClass('active_shape');
            _this.selectedDragObjFlag = true;
          } else if (_this.selectedDragObj.hasClass('sprint')) {
            _this.dragObj = _this.selectedDragObj.clone();
            $(_this.selectedDragObj).parents('.module').addClass('active_shape');
            _this.selectedDragObjFlag = true;
          } else if (_this.selectedDragObj.hasClass('module')) {
            _this.dragObj = $(_this.selectedDragObj).find('.sprint').clone();
            $(_this.selectedDragObj).addClass('active_shape');
            _this.selectedDragObjFlag = false;
          }

          _this.dragObj.addClass('startDrag'); // _this.maxW = document.body.clientWidth - _this.selectedDragObj[0].offsetWidth;
          // _this.maxH = document.body.clientHeight - _this.selectedDragObj[0].offsetHeight;


          _this.maxW = $('.builder .main_wrapper').width() - _this.selectedDragObj[0].offsetWidth;
          _this.maxH = $('.builder .main_wrapper').height() - _this.selectedDragObj[0].offsetHeight;
        }
      }, false);

      _this.shapesEventL.addEventListener('touchmove', function (e) {
        _this.dragedFlag = true;
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        var windowWidth = window.innerWidth;
        _this.movedDir = windowWidth - touch.clientX;

        if (_this.dragObj && _this.movedDir > 100) {
          $('body').append(_this.dragObj);
          var oLeft = touch.clientX - 50;
          var oTop = touch.clientY - 50;

          if (oLeft < 0) {
            oLeft = 0;
          } else if (oLeft >= _this.maxW) {
            oLeft = _this.maxW;
          }

          if (oTop < 0) {
            oTop;
          } else if (oTop >= _this.maxH) {
            oTop = _this.maxH;
          }

          _this.dragObj[0].style.left = oLeft + 25 + 'px';
          _this.dragObj[0].style.top = oTop + 'px';
        }
      }, false);

      _this.shapesEventL.addEventListener('touchend', function (e) {
        if (_this.dragObj && _this.dragedFlag && _this.movedDir > 100) {
          // $( selectedDragObj ).parents( ".module" ).trigger( "click" );
          var code, type, url;

          if (_this.selectedDragObjFlag) {
            code = Number($(_this.selectedDragObj).parents('.module').find('.this_code').val());
            type = Number($(_this.selectedDragObj).parents('.module').find('.this_module').val());
            url = Number($(_this.selectedDragObj).parents('.module').find('.this_url').val());
          } else if (_this.selectedDragObjFlag == false) {
            code = Number($(_this.selectedDragObj).find('.this_code').val());
            type = Number($(_this.selectedDragObj).find('.this_module').val());
            url = Number($(_this.selectedDragObj).find('.this_url').val());
          }

          if (type == 0) {
            _this.changeShapes(code);
          } else if (type == 1) {
            _this.loadSTL(code);
          } else if (type == 2) {
            _this.showInput(0);
          } else if (type == 3) {
            _this.loadLocalSTL(url);
          }

          $(_this.dragObj).remove();
          setTimeout(function () {
            _this.onDocumentMouseDown(e);
          }, 100);
        } else {
          $(_this.dragObj).remove();
        }

        _this.dragedFlag = false;
        $('.active_shape').removeClass('active_shape');
      }, false);

      _this.shapesMain.addEventListener('mousedown', function () {
        //隐藏子窗口
        _this.showColorOption = false;
        _this.showColorOption = false;
      });

      _this.shapesEventL.addEventListener('mousedown', function (e) {
        //隐藏子窗口
        _this.showColorOption = false;
        _this.showColorOption = false;
        _this.selectedDragObj = $(e.target);

        if (_this.selectedDragObj.hasClass('drag')) {
          $('.active_shape').removeClass('active_shape');

          if (_this.selectedDragObj.hasClass('name')) {
            _this.dragObj = $(_this.selectedDragObj).parents('.module').find('.sprint').clone();
            $(_this.selectedDragObj).parents('.module').addClass('active_shape');
            _this.selectedDragObjFlag = true;
          } else if (_this.selectedDragObj.hasClass('sprint')) {
            _this.dragObj = _this.selectedDragObj.clone();
            $(_this.selectedDragObj).parents('.module').addClass('active_shape');
            _this.selectedDragObjFlag = true;
          } else if (_this.selectedDragObj.hasClass('module')) {
            _this.dragObj = $(_this.selectedDragObj).find('.sprint').clone();
            $(_this.selectedDragObj).addClass('active_shape');
            _this.selectedDragObjFlag = false;
          }

          _this.dragObj.addClass('startDrag'); // _this.maxW = document.body.clientWidth - _this.selectedDragObj[0].offsetWidth;
          // _this.maxH = document.body.clientHeight - _this.selectedDragObj[0].offsetHeight;


          _this.maxW = $('.builder .main_wrapper').width() - _this.selectedDragObj[0].offsetWidth;
          _this.maxH = $('.builder .main_wrapper').height() - _this.selectedDragObj[0].offsetHeight;
        }
      }, false);

      _this.shapesEventL.addEventListener('mousemove', function (e) {
        _this.dragedFlag = true;
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        var windowWidth = window.innerWidth;
        _this.movedDir = windowWidth - touch.clientX;

        if (_this.dragObj && _this.movedDir > 100) {
          $('body').append(_this.dragObj);
          var oLeft = touch.clientX - 50;
          var oTop = touch.clientY - 50;

          if (oLeft < 0) {
            oLeft = 0;
          } else if (oLeft >= _this.maxW) {
            oLeft = _this.maxW;
          }

          if (oTop < 0) {
            oTop;
          } else if (oTop >= _this.maxH) {
            oTop = _this.maxH;
          }

          _this.dragObj[0].style.left = oLeft + 25 + 'px';
          _this.dragObj[0].style.top = oTop + 'px';
        }
      }, false);

      _this.shapesEventL.addEventListener('mouseup', function (e) {
        if (_this.dragObj && _this.dragedFlag && _this.movedDir > 100) {
          // $( selectedDragObj ).parents( ".module" ).trigger( "click" );
          var code, type, url;

          if (_this.selectedDragObjFlag) {
            code = Number($(_this.selectedDragObj).parents('.module').find('.this_code').val());
            type = Number($(_this.selectedDragObj).parents('.module').find('.this_module').val());
            url = Number($(_this.selectedDragObj).parents('.module').find('.this_url').val());
          } else if (_this.selectedDragObjFlag == false) {
            code = Number($(_this.selectedDragObj).find('.this_code').val());
            type = Number($(_this.selectedDragObj).find('.this_module').val());
            url = Number($(_this.selectedDragObj).find('.this_url').val());
          }

          if (type == 0) {
            _this.changeShapes(code);
          } else if (type == 1) {
            _this.loadSTL(code);
          } else if (type == 2) {
            _this.showInput(0);
          } else if (type == 3) {
            _this.loadLocalSTL(url);
          }

          $(_this.dragObj).remove();
          setTimeout(function () {
            _this.onDocumentMouseDown(e);
          }, 100);
        } else {
          $(_this.dragObj).remove();
        }

        _this.dragedFlag = false;
        $('.active_shape').removeClass('active_shape');
      }, false);
    },
    dragImg: function dragImg(e) {
      var _this = this; //隐藏子窗口


      _this.showColorOption = false;
      _this.showColorOption = false;
      _this.selectedDragObj = $(e.target);

      if (_this.selectedDragObj.hasClass('drag')) {
        $('.active_shape').removeClass('active_shape');

        if (_this.selectedDragObj.hasClass('name')) {
          _this.dragObj = $(_this.selectedDragObj).parents('.module').find('.sprint').clone();
          $(_this.selectedDragObj).parents('.module').addClass('active_shape');
          _this.selectedDragObjFlag = true;
        } else if (_this.selectedDragObj.hasClass('sprint')) {
          _this.dragObj = _this.selectedDragObj.clone();
          $(_this.selectedDragObj).parents('.module').addClass('active_shape');
          _this.selectedDragObjFlag = true;
        } else if (_this.selectedDragObj.hasClass('module')) {
          _this.dragObj = $(_this.selectedDragObj).find('.sprint').clone();
          $(_this.selectedDragObj).addClass('active_shape');
          _this.selectedDragObjFlag = false;
        }

        _this.dragObj.addClass('startDrag'); // _this.maxW = document.body.clientWidth - _this.selectedDragObj[0].offsetWidth;
        // _this.maxH = document.body.clientHeight - _this.selectedDragObj[0].offsetHeight;


        _this.maxW = $('.builder .main_wrapper').width() - _this.selectedDragObj[0].offsetWidth;
        _this.maxH = $('.builder .main_wrapper').height() - _this.selectedDragObj[0].offsetHeight;
      }
    },
    moveImg: function moveImg(e) {
      var _this = this;

      _this.dragedFlag = true;
      var ev = e || window.event;
      var windowWidth = _this.CONTAIN_WIDTH;
      _this.movedDir = windowWidth - ev.clientX;

      if (_this.dragObj && _this.movedDir < 100) {
        $('body').append(_this.dragObj);
        var oLeft = ev.clientX - 50;
        var oTop = ev.clientY - 50;

        if (oLeft < 0) {
          oLeft = 0;
        } else if (oLeft >= _this.maxW) {
          oLeft = _this.maxW;
        }

        if (oTop < 0) {
          oTop;
        } else if (oTop >= _this.maxH) {
          oTop = _this.maxH;
        }

        _this.dragObj[0].style.left = oLeft + 25 + 'px';
        _this.dragObj[0].style.top = oTop + 'px';
      }
    },
    upImg: function upImg(e) {
      var _this = this;

      if (_this.dragObj && _this.dragedFlag && _this.movedDir > 100) {
        // $( selectedDragObj ).parents( ".module" ).trigger( "click" );
        var code, type, url;

        if (_this.selectedDragObjFlag) {
          code = Number($(_this.selectedDragObj).parents('.module').find('.this_code').val());
          type = Number($(_this.selectedDragObj).parents('.module').find('.this_module').val());
          url = Number($(_this.selectedDragObj).parents('.module').find('.this_url').val());
        } else if (_this.selectedDragObjFlag == false) {
          code = Number($(_this.selectedDragObj).find('.this_code').val());
          type = Number($(_this.selectedDragObj).find('.this_module').val());
          url = Number($(_this.selectedDragObj).find('.this_url').val());
        }

        if (type == 0) {
          _this.changeShapes(code);
        } else if (type == 1) {
          _this.loadSTL(code);
        } else if (type == 2) {
          _this.showInput(0);
        } else if (type == 3) {
          _this.loadLocalSTL(url);
        }

        $(_this.dragObj).remove();
        setTimeout(function () {
          _this.onDocumentMouseDown(e);
        }, 100);
      } else {
        $(_this.dragObj).remove();
      }

      _this.dragedFlag = false;
      $('.active_shape').removeClass('active_shape');
    },
    selectModule: function selectModule(type, code, index, module) {
      if (0 == type && 'text' == module) {
        type = 2;
      } else if (0 == type && 'stl' == module) {
        type = 1;
      }

      $('.active_shape').removeClass('active_shape');
      var obj;

      if (0 == type) {
        obj = $('.normal_wrapper').find('.module:eq(' + index + ')');
        this.stlGeoFlag = 0;
        this.changeShapes(code);
      } else if (1 == type) {
        obj = $('.cartoon_wrapper').find('.module:eq(' + index + ')');
        this.stlGeoFlag = 1;
        this.loadSTL(code, obj);
      } else if (2 == type) {
        obj = $('.normal_wrapper').find('.module:eq(' + index + ')');
        this.stlGeoFlag = 1;
        this.showInput(0);
      }

      obj.addClass('active_shape');
    },
    showChild: function showChild(type) {
      if (type == 1) {
        this.showColorOption = true;
      } else if (type == 0) {
        this.showZoomOption = true;
      }
    },
    zoomView: function zoomView(zoomIndex) {
      if (this.cameraZoom) {
        this.cameraZoom = zoomIndex / 100;
        this.camera.zoom = this.cameraZoom;
        this.camera.lookAt(this.scene.position);
        this.camera.updateProjectionMatrix();
      }
    },
    changeShapes: function changeShapes(geo) {
      this.stlGeoFlag = 0; //0 geo; 1 stl
      // stopPropagationFn();

      this.showInput(1);
      this.currentModule = 0; //编辑模式，各种基础模型
      // enabledLego( 1 );

      this.shootedFlag = false;
      /*if(controls){
        controls.dispose();
      }*/

      switch (geo) {
        case 0:
          // 正方形
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* BoxBufferGeometry */ "b"](this.SHAPE_SIZE, this.SHAPE_SIZE, this.SHAPE_SIZE);
          break;

        case 1:
          //圆柱
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* CylinderBufferGeometry */ "g"](this.SHAPE_SIZE / 2, this.SHAPE_SIZE / 2, this.SHAPE_SIZE, 32); //CylinderGeometry(radiusTop : 浮点类型, radiusBottom : 浮点类型, height : 浮点类型, radialSegments : 整数类型, heightSegments : 整数类型, openEnded : 布尔类型, thetaStart : 浮点类型, thetaLength : 浮点类型)

          break;

        case 2:
          // 圆锥形
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* ConeBufferGeometry */ "f"](this.SHAPE_SIZE / 2, this.SHAPE_SIZE, 32); //ConeBufferGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)

          break;

        case 3:
          // 球形
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* SphereBufferGeometry */ "P"](this.SHAPE_SIZE / 2, 32, 32); //SphereBufferGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)

          break;

        case 4:
          // 环形
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* TorusGeometry */ "U"](10, 2.5, 16, 100); //TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)

          break;

        case 5:
          // 棱柱形prismatic
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* CylinderBufferGeometry */ "g"](this.SHAPE_SIZE / 2, this.SHAPE_SIZE / 2, this.SHAPE_SIZE, 5); //CylinderGeometry(radiusTop : 浮点类型, radiusBottom : 浮点类型, height : 浮点类型, radialSegments : 整数类型, heightSegments : 整数类型, openEnded : 布尔类型, thetaStart : 浮点类型, thetaLength : 浮点类型)

          break;

        case 6:
          // 棱锥形Pyramid
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* ConeBufferGeometry */ "f"](this.SHAPE_SIZE / 2, this.SHAPE_SIZE, 4); //ConeBufferGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)

          break;

        case 7:
          // 空心圆柱Hollow cylinder
          var outerRadius = this.SHAPE_SIZE / 2;
          var innerRadius = this.SHAPE_SIZE / 3;
          var height = this.SHAPE_SIZE;
          var arcShape = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Shape */ "O"]();
          arcShape.moveTo(outerRadius * 2, outerRadius);
          arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
          var holePath = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Path */ "G"]();
          holePath.moveTo(outerRadius + innerRadius, outerRadius);
          holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
          arcShape.holes.push(holePath);
          var geometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* ExtrudeGeometry */ "m"](arcShape, {
            amount: height,
            bevelEnabled: false,
            steps: 1,
            curveSegments: 60
          });
          geometry.center();
          geometry.rotateX(Math.PI * -.5);
          this.currentObj = geometry; //TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)

          break;

        case 8:
          // 三棱柱
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* CylinderBufferGeometry */ "g"](this.SHAPE_SIZE / 2, this.SHAPE_SIZE / 2, this.SHAPE_SIZE, 3); //CylinderGeometry(radiusTop : 浮点类型, radiusBottom : 浮点类型, height : 浮点类型, radialSegments : 整数类型, heightSegments : 整数类型, openEnded : 布尔类型, thetaStart : 浮点类型, thetaLength : 浮点类型)

          break;

        default:
          // 正方形
          this.currentObj = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* BoxBufferGeometry */ "b"](this.SHAPE_SIZE, this.SHAPE_SIZE, this.SHAPE_SIZE);
      } // changeMouseHelper( currentColorFlag );


      this.currentObjMesh = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Mesh */ "z"](this.currentObj, this.currentObjMaterial);
    },
    showInput: function showInput(type) {
      if (type === 0) {
        this.currentObj = null;
        this.showTextWindow = true;
      } else {
        this.showTextWindow = false;
        this.inputCanConfirm = false;
        this.textInput = '';
      }
    },
    textInputFn: function textInputFn(e) {
      var obj = e.target;
      this.textInput = $(obj).val();
      var textLength = $(obj).val().length;

      if (textLength > 0) {
        this.inputCanConfirm = true;
      } else {
        this.inputCanConfirm = false;
      }
    },
    insertWord: function insertWord() {
      var _this = this;

      _this.showLoading = true;

      _this.showInput(1);

      this.fontLoader.load('/font/SimHei_Regular.json', function (font) {
        _this.wordFont = font;

        _this.createText();

        _this.showLoading = false;
      }, // onProgress callback
      function (xhr) {
        // console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        _this.progressingBar = xhr.loaded / xhr.total * 100;
      }, // onError callback
      function (err) {
        console.error('An error happened :' + err);
      });
    },
    createText: function createText() {
      var word = this.textInput1;

      var _this = this;

      var xMid, text;
      var message = word;
      var fontSize;

      switch (message.length) {
        case 3:
          fontSize = 50;
          break;

        case 4:
          fontSize = 45;
          break;

        case 5:
          fontSize = 40;
          break;

        case 6:
          fontSize = 35;
          break;

        case 7:
          fontSize = 30;
          break;

        default:
          fontSize = 20;
      }

      var textGeo = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* TextGeometry */ "S"](message, {
        font: _this.wordFont,
        size: fontSize,
        height: 10,
        //文字厚度
        curveSegments: 22,
        bevelEnabled: false
      });
      textGeo.computeBoundingBox();
      textGeo.computeVertexNormals();
      var geometry = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* BufferGeometry */ "d"]().fromGeometry(textGeo);
      geometry.computeBoundingBox();
      xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x); //位置，使其居中

      geometry.translate(xMid, -25, 0);
      geometry.rotateX(-(Math.PI / 2)); //文字为横卧在工作台上
      // make shape ( N.B. edge view not visible )

      var matLite = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* MeshPhongMaterial */ "C"]({
        color: _this.wordColor,
        flatShading: true
      });
      text = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Mesh */ "z"](geometry, matLite);
      text.name = 'shapes';
      text.receiveShadow = true;
      text.castShadow = true;

      _this.scene.add(text);

      _this.objects.push(text);

      _this.shapesObj.push(text); //全删除使用


      this.undoActive = true;
      _this.activeSave = true;
      _this.transformControl.object = text;
      _this.focusedTransformObj = _this.transformControl.object;

      _this.cleanSelectedObject(text);

      _this.createObjForOperation(text, 'add');

      _this.eachObjSetps(text, 0);

      _this.shapesController();

      _this.transformControl.attach(_this.focusedTransformObj);

      _this.resetSomeThing();
    },
    loadSTL: function loadSTL(thisSTL, obj) {
      var _this2 = this;

      return Object(C_Projects_xin_vue_personal_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this, file, loader;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;

                _this.showInput(1);

                $('.active_shape').removeClass('active_shape');
                $(obj).addClass('active_shape');
                _this.currentModule = 0; //编辑模式，各种基础模型
                // enabledLego( 1 );

                _this.showLoading = true;
                _this.shootedFlag = false;
                _context.t0 = thisSTL;
                _context.next = _context.t0 === 0 ? 10 : _context.t0 === 1 ? 12 : _context.t0 === 2 ? 14 : _context.t0 === 3 ? 16 : _context.t0 === 4 ? 18 : _context.t0 === 5 ? 20 : _context.t0 === 6 ? 22 : _context.t0 === 7 ? 24 : _context.t0 === 8 ? 26 : _context.t0 === 9 ? 28 : _context.t0 === 10 ? 30 : _context.t0 === 11 ? 32 : 34;
                break;

              case 10:
                file = '/models/stl/ascii/standing.stl';
                return _context.abrupt("break", 35);

              case 12:
                file = '/models/stl/ascii/climbing.stl';
                return _context.abrupt("break", 35);

              case 14:
                file = '/models/stl/ascii/lying.stl';
                return _context.abrupt("break", 35);

              case 16:
                file = '/models/stl/ascii/sitting.stl';
                return _context.abrupt("break", 35);

              case 18:
                file = '/models/stl/ascii/tyrannosaurusRex.stl';
                return _context.abrupt("break", 35);

              case 20:
                file = '/models/stl/ascii/pokemon/bulbasaur_starter_1gen_flowalistik.stl';
                return _context.abrupt("break", 35);

              case 22:
                file = '/models/stl/ascii/pokemon/charmander_starter_1gen_flowalistik.stl';
                return _context.abrupt("break", 35);

              case 24:
                file = '/models/stl/ascii/pokemon/chikorita_starter_2gen_flowalistik.stl';
                return _context.abrupt("break", 35);

              case 26:
                file = '/models/stl/ascii/pokemon/pikachu_1gen_flowalistik.stl';
                return _context.abrupt("break", 35);

              case 28:
                file = '/models/stl/ascii/pokemon/squirtle_starter_1gen_flowalistik.stl';
                return _context.abrupt("break", 35);

              case 30:
                file = '/models/stl/ascii/pokemon/totodile_starter_2gen_flowalistik.stl';
                return _context.abrupt("break", 35);

              case 32:
                file = '/models/stl/ascii/five-point-star.stl';
                return _context.abrupt("break", 35);

              case 34:
                file = '/models/stl/ascii/tyrannosaurusRex.stl';

              case 35:
                loader = new three_examples_jsm_loaders_STLLoader__WEBPACK_IMPORTED_MODULE_16__[/* STLLoader */ "a"]();
                _context.next = 38;
                return loader.load(file, function (geometry) {
                  _this.currentObj = geometry;
                  _this.showLoading = false;
                }, function (xhr) {
                  _this.progressingBar = xhr.loaded / xhr.total * 100; // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                });

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onDocumentMouseDown: function onDocumentMouseDown() {
      if (!this.shootedFlag) {
        event.preventDefault();
        var controlBoardWidth = !this.showMore; //left decal side width

        var touch = null;

        if (controlBoardWidth) {
          if (event.type == 'touchend') {
            touch = event.changedTouches[0];
            this.mouse.set(touch.clientX / this.CONTAIN_WIDTH * 2 - 1, -(touch.clientY / this.CONTAIN_HEIGHT) * 2 + 1);
          } else {
            this.mouse.set(event.clientX / this.CONTAIN_WIDTH * 2 - 1, -(event.clientY / this.CONTAIN_HEIGHT) * 2 + 1);
          }
        } else {
          if (event.type == 'touchend') {
            touch = event.changedTouches[0];
            this.mouse.set(touch.clientX / (this.CONTAIN_WIDTH - 100) * 2 - 1, -(touch.clientY / this.CONTAIN_HEIGHT) * 2 + 1);
          } else {
            this.mouse.set(event.clientX / (this.CONTAIN_WIDTH - 100) * 2 - 1, -(event.clientY / this.CONTAIN_HEIGHT) * 2 + 1);
          }
        }

        this.raycaster.setFromCamera(this.mouse, this.camera); // var intersects = this.raycaster.intersectObjects( this.objects ,true );

        var intersects = this.raycaster.intersectObjects(this.objects);

        if (intersects.length > 0) {
          var intersect = intersects[0]; // delete cube

          if (this.isShiftDown) {
            if (intersect.object !== this.plane) {
              this.scene.remove(intersect.object);
              this.objects.splice(this.objects.indexOf(intersect.object), 1);
            } // create cube

          } else {
            // if (this.objects.length < 11 && this.currentObj) {
            if (this.currentObj) {
              var voxelMaterial = this.currentObjMaterial.clone();
              var voxel = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* Mesh */ "z"](this.currentObj, voxelMaterial);
              voxel.position.copy(intersect.point).add(intersect.face.normal); // voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar(25 );

              if (this.stlGeoFlag == 0) {
                //0 geo; 1 stl 2, localStl
                voxel.position.divideScalar(this.SHAPE_SIZE).floor().multiplyScalar(this.SHAPE_SIZE).addScalar(this.SHAPE_SIZE / 2);
                voxel.name = 'shapes';
              } else if (this.stlGeoFlag == 1) {
                voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
                voxel.name = 'stl';
              } else if (this.stlGeoFlag == 2) {
                voxel.position.divideScalar(50).floor().multiplyScalar(50);
                voxel.name = 'stlLocal';
                voxel.rotation.set(-Math.PI / 2, 0, 0);
              }

              voxel.receiveShadow = true;
              voxel.castShadow = true;
              this.scene.add(voxel);
              this.objects.push(voxel);
              this.shapesObj.push(voxel); //全删除使用

              this.undoActive = true;
              this.activeSave = true;
              this.createObjForOperation(voxel, 'add');
              this.eachObjSetps(voxel, 0);
              this.shapesController();
              this.transformControl.object = voxel;
              this.transformControl.attach(this.transformControl.object);
              this.cleanSelectedObject(voxel);
              this.showCurrentColor();
              this.resetSomeThing();
            }
          }

          this.shootedFlag = true;
          this.render();
        }
      } else {
        this.checkIntersection(event);
      }
    },
    onDocumentMouseMove: function onDocumentMouseMove() {
      event.preventDefault();
      this.mouse.set(event.clientX / this.CONTAIN_WIDTH * 2 - 1, -(event.clientY / this.CONTAIN_HEIGHT) * 2 + 1);
      this.raycaster.setFromCamera(this.mouse, this.camera);
      var intersects = this.raycaster.intersectObjects(this.objects);

      if (intersects.length > 0) {
        var intersect = intersects[0];
        this.mouseHelper.position.copy(intersect.point).add(intersect.face.normal);
        this.mouseHelper.position.divideScalar(this.SHAPE_SIZE).floor().multiplyScalar(this.SHAPE_SIZE).addScalar(this.SHAPE_SIZE / 2);
      }

      this.render();
    },
    createObjForOperation: function createObjForOperation(meshObj, type) {
      window.deleteObjFlag = false;
      this.saveFlag = false;

      if (this.allOperation.length >= 5) {
        this.allOperation.shift();
      }

      var obj = {};
      obj['uuid'] = meshObj.uuid;
      obj['position'] = meshObj.position.clone();
      obj['rotation'] = meshObj.rotation.clone();
      obj['quaternion'] = meshObj.quaternion.clone();
      obj['scale'] = meshObj.scale.clone();
      obj['color'] = meshObj.material.color.clone();
      obj['operation'] = type;
      obj['mesh'] = meshObj;
      this.allOperation.push(obj);
    },
    eachObjSetps: function eachObjSetps(e, type) {
      //生成json 键的行为对象; e:mesh object  type 0: undo 1: redo
      var obj = {};
      var arr;

      if (type === 0) {
        if (!this.eachObjectInfo[e.uuid]) {
          this.eachObjectInfo[e.uuid] = [];
        }

        obj['uuid'] = e.uuid;
        obj['position'] = e.position.clone();
        obj['rotation'] = e.rotation.clone();
        obj['quaternion'] = e.quaternion.clone();
        obj['scale'] = e.scale.clone();
        obj['color'] = e.material.color.clone();
        obj['mesh'] = e;
        obj['time'] = Date.parse(new Date());

        if (this.eachObjectInfo[e.uuid].length) {
          obj['index'] = this.eachObjectInfo[e.uuid].length;
        } else {
          obj['index'] = 0;
        }

        arr = this.eachObjectInfo[e.uuid];
        arr.push(obj);
      } else if (type === 2) {
        if (!this.eachObjectInfo[e.uuid]) {
          this.eachObjectInfo[e.uuid] = [];
        }

        obj['uuid'] = e.uuid;
        obj['position'] = e.position.clone();
        obj['rotation'] = e.rotation.clone();
        obj['quaternion'] = e.quaternion.clone();
        obj['scale'] = e.scale.clone();
        obj['color'] = e.color.clone();
        obj['mesh'] = e.mesh;
        obj['time'] = Date.parse(new Date());

        if (this.eachObjectInfo[e.uuid].length) {
          obj['index'] = this.eachObjectInfo[e.uuid].length;
        } else {
          obj['index'] = 0;
        }

        arr = this.eachObjectInfo[e.uuid];
        arr.push(obj);
      } else if (type === 1) {
        if (!this.eachRedoObjectInfo[e.uuid]) {
          this.eachRedoObjectInfo[e.uuid] = [];
        }

        obj['uuid'] = e.uuid;
        obj['position'] = e.position.clone();
        obj['rotation'] = e.rotation.clone();
        obj['quaternion'] = e.quaternion.clone();
        obj['scale'] = e.scale.clone();
        obj['color'] = e.color.clone();
        obj['mesh'] = e.mesh;
        obj['time'] = Date.parse(new Date());
        arr = this.eachRedoObjectInfo[e.uuid];
        arr.push(obj);
      }
    },
    shapesController: function shapesController() {
      //type 0: normal
      if (this.showMore) {
        $('.obj_control').css({
          width: this.CONTAIN_WIDTH - 100
        });
      }

      this.controlBar = true;
    },
    addSelectedObject: function addSelectedObject(object) {
      this.selectedObjects = [];
      this.selectedObjects.push(object);
    },
    cleanSelectedObject: function cleanSelectedObject(obj) {
      if (obj) {
        this.addSelectedObject(obj); // this.outlinePass.selectedObjects = this.selectedObjects;
      }
    },
    showCurrentColor: function showCurrentColor() {
      this.isWhite = false;

      if (this.transformControl.object) {
        var thisColor = this.transformControl.object.material.color.toJSON();

        if (thisColor == '14540253') {
          this.isWhite = true;
        } else {
          this.isWhite = false;
        }

        this.cleanSelectedObject(this.transformControl.object);

        switch (this.transformControlModeType) {
          case 0:
            this.statusTxt = this.textSC;
            break;

          case 1:
            this.statusTxt = this.textTR;
            break;

          case 2:
            this.statusTxt = this.textRO;
            break;
        }

        this.controlType = true;
      } else {
        this.controlType = false;
      }
    },
    resetSomeThing: function resetSomeThing() {
      $('.active_shape').removeClass('active_shape');
      this.currentObjMaterial = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* MeshLambertMaterial */ "B"]({
        color: 0xdddddd
      });
    },
    checkIntersection: function checkIntersection(event) {
      var x, y;

      if (event.changedTouches) {
        x = event.changedTouches[0].pageX;
        y = event.changedTouches[0].pageY;
      } else {
        x = event.clientX;
        y = event.clientY;
      }

      this.mouse.x = x / this.CONTAIN_WIDTH * 2 - 1;
      this.mouse.y = -(y / this.CONTAIN_HEIGHT) * 2 + 1;
      var controlBoardWidth = this.showMore; //left decal side width

      if (controlBoardWidth) {
        this.mouse.x = x / (this.CONTAIN_WIDTH - 100) * 2 - 1;
        this.mouse.y = -(y / this.CONTAIN_HEIGHT) * 2 + 1;
      }

      if (!this.plane) return;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      this.raycaster.intersectObject(this.plane, false, this.intersectsSelect);
      var sceneChilds;

      if (this.intersectsSelect.length > 0) {
        var p = this.intersectsSelect[0].point; // mouseHelper.position.set( 0, 0, 0 );
        // mouseHelper.position.copy( p );  //copy intersection position to mouseHelper

        this.intersection.point.copy(p);
        /*1.克隆旧的法线 2.旧法线乘以模型的世界矩阵得到归一化后的法线 3.和一个标量相乘，放大10倍。 4.加上点击点的坐标，进行平移。*/

        var n = this.intersectsSelect[0].face.normal.clone();
        n.transformDirection(this.plane.matrixWorld);
        n.multiplyScalar(10);
        n.add(this.intersectsSelect[0].point);
        this.intersection.normal.copy(this.intersectsSelect[0].face.normal); // mouseHelper.lookAt( n );

        sceneChilds = this.raycaster.intersectObjects(this.scene.children); //get all objects in the current position of your mouse;

        if (sceneChilds.length > 1) {
          if (sceneChilds && (sceneChilds[0].object.name == 'shapes' || sceneChilds[0].object.name == 'stl' || sceneChilds[0].object.name == 'stlLocal')) {
            this.transformControl.detach(this.transformControl.object);
            this.transformControl.attach(sceneChilds[0].object);
          } else if (sceneChilds[0].object.name == 'plane') {
            this.transformControl.detach();
            this.transformControl.attach(sceneChilds[0].object);
          }

          this.colorControl = true;
        }

        this.intersection.intersects = true;
        this.intersectsSelect.length = 0;
      } else {
        this.intersection.intersects = false;
        sceneChilds = this.raycaster.intersectObjects(this.scene.children); //get all objects in the current position of your mouse;

        if (sceneChilds.length > 0) {
          if (sceneChilds && (sceneChilds[0].object.name == 'shapes' || sceneChilds[0].object.name == 'stl' || sceneChilds[0].object.name == 'stlLocal')) {
            this.transformControl.detach(this.transformControl.object);
            this.transformControl.attach(sceneChilds[0].object);
          } else if (sceneChilds[0].object.name == 'plane') {
            this.transformControl.detach(this.transformControl.object);
            this.transformControl.attach(sceneChilds[0].object);
          }
        }
      }

      this.render();
    },
    hideSelf: function hideSelf() {
      /*this.$parent.showThreeD();*/
      $('.orientationControls').remove();
      this.$router.push({
        path: '/projects',
        query: {
          jump: 'MagicBox-AppforChildren'
        }
      });
    },
    allOperationAdd: function allOperationAdd() {
      if (window.focusedTransformObj) {
        this.createObjForOperation(this.transformControl.object, 'transform');
        this.eachObjSetps(this.transformControl.object, 0);
      }

      if (this.allOperation.length > 0) {
        this.undoActive = true;
      } else {
        this.undoActive = false;
      }
    },
    checkScalePosition: function checkScalePosition(obj) {
      // 检测是否有放大缩小，如果有，需要检测移动时的范围
      this.tcScale = obj.scale.clone();
      this.tcScaleYPosition = obj.position.clone().y;
      this.tcScaleY = obj.scale.clone().y;

      if (obj.name == 'shapes') {
        if (this.tcScaleYPosition == this.SHAPE_SIZE * obj.scale.y / 2) {
          this.tcScaleYPositionFlag = true;
        } else {
          this.tcScaleYPositionFlag = false;
        }
      } else if (obj.name == 'stl') {
        if (this.tcScaleYPosition == obj.geometry.boundingSphere.radius) {
          this.tcScaleYPositionFlag = true;
        } else {
          this.tcScaleYPositionFlag = false;
        }
      }
    },
    onAnimationStep: function onAnimationStep() {
      //检测scale，使其永远在0.1- LIMIT_SIZE 之间
      if (this.transformControl.object) {
        var saveDefauleSHAPE_SIZE = this.SHAPE_SIZE;
        var saveDefauleLIMIT_SIZE = this.LIMIT_SIZE;
        var saveDefauleLIMIT_SIZEMin = 0.1;
        var getMode = this.transformControl.getMode();
        var currentObj = this.transformControl.object;
        /*if(currentObj.name == "shapes"){
          }else if(currentObj.name == "stl"){
          if(currentObj.geometry.boundingSphere) {
            SHAPE_SIZE = ( currentObj.geometry.boundingSphere.radius ) * 2
          }
        }*/

        switch (getMode) {
          case 'scale':
            if (currentObj.name == 'stl') {
              this.LIMIT_SIZE = 2.22; // saveDefauleLIMIT_SIZEMin = 0.056
            }

            currentObj.scale.clampScalar(saveDefauleLIMIT_SIZEMin, this.LIMIT_SIZE);
            this.checkAxis('scale', currentObj);
            break;

          case 'translate':
            // console.log( transformControl.axis, currentObj.position );
            if (this.transformControl.axis == 'X') {
              if (currentObj.position.x >= 0 && currentObj.position.x + this.SHAPE_SIZE * currentObj.scale.x / 2 >= this.WORK_SPACE_SIZE / 2) {
                currentObj.position.x = this.WORK_SPACE_SIZE / 2 - this.SHAPE_SIZE * currentObj.scale.x / 2;
              } else if (currentObj.position.x < 0 && currentObj.position.x - this.SHAPE_SIZE * currentObj.scale.x / 2 <= -(this.WORK_SPACE_SIZE / 2)) {
                currentObj.position.x = -(this.WORK_SPACE_SIZE / 2) + this.SHAPE_SIZE * currentObj.scale.x / 2;
              }
            } else if (this.transformControl.axis == 'Z') {
              if (currentObj.position.z >= 0 && currentObj.position.z + this.SHAPE_SIZE * currentObj.scale.z / 2 >= this.WORK_SPACE_SIZE / 2) {
                currentObj.position.z = this.WORK_SPACE_SIZE / 2 - this.SHAPE_SIZE * currentObj.scale.z / 2;
              } else if (currentObj.position.z < 0 && currentObj.position.z - this.SHAPE_SIZE * currentObj.scale.z / 2 <= -(this.WORK_SPACE_SIZE / 2)) {
                currentObj.position.z = -(this.WORK_SPACE_SIZE / 2) + this.SHAPE_SIZE * currentObj.scale.z / 2;
              }
            } else if (this.transformControl.axis == 'Y') {
              if (currentObj.position.y >= 0 && currentObj.position.y + this.SHAPE_SIZE * currentObj.scale.y / 2 >= this.WORK_SPACE_SIZE) {
                //向上移
                currentObj.position.y = this.WORK_SPACE_SIZE - this.SHAPE_SIZE * currentObj.scale.y / 2;
              } else if (currentObj.name == 'stl') {
                if (currentObj.position.y < currentObj.geometry.boundingSphere.radius * currentObj.scale.y) {
                  currentObj.position.y = this.SHAPE_SIZE * currentObj.scale.y;
                }
              } else if (currentObj.name == 'stlLocal') {
                if (currentObj.position.y < 0) {
                  currentObj.position.y = 0;
                }
              } else if (currentObj.position.y < this.SHAPE_SIZE * currentObj.scale.y / 2) {
                currentObj.position.y = this.SHAPE_SIZE * currentObj.scale.y / 2;
              }
            }

            break;

          case 'rotate':
            break;
        }

        this.SHAPE_SIZE = saveDefauleSHAPE_SIZE;
        this.LIMIT_SIZE = saveDefauleLIMIT_SIZE;
      }
    },
    checkAxis: function checkAxis(type, obj) {
      // 改变大小的时候，价差坐标，不能超出工作台
      if (type === 'scale') {
        if (obj.position.x >= 0 && obj.position.x + this.SHAPE_SIZE * obj.scale.x / 2 >= this.WORK_SPACE_SIZE / 2) {
          obj.position.x = this.WORK_SPACE_SIZE / 2 - this.SHAPE_SIZE * obj.scale.x / 2;
        } else if (obj.position.x < 0 && obj.position.x - this.SHAPE_SIZE * obj.scale.x / 2 <= -(this.WORK_SPACE_SIZE / 2)) {
          obj.position.x = -(this.WORK_SPACE_SIZE / 2) + this.SHAPE_SIZE * obj.scale.x / 2;
        }

        if (obj.position.z >= 0 && obj.position.z + this.SHAPE_SIZE * obj.scale.z / 2 >= this.WORK_SPACE_SIZE / 2) {
          obj.position.z = this.WORK_SPACE_SIZE / 2 - this.SHAPE_SIZE * obj.scale.z / 2;
        } else if (obj.position.z < 0 && obj.position.z - this.SHAPE_SIZE * obj.scale.z / 2 <= -(this.WORK_SPACE_SIZE / 2)) {
          obj.position.z = -(this.WORK_SPACE_SIZE / 2) + this.SHAPE_SIZE * obj.scale.z / 2;
        }

        if (obj.position.y >= 0 && obj.position.y <= this.SHAPE_SIZE * obj.scale.y / 2) {
          obj.position.y = this.SHAPE_SIZE * obj.scale.y / 2;
        } else if (obj.position.y >= 0 && this.tcScaleYPositionFlag) {
          if (obj.name == 'stl') {
            // console.log("stl",tcScaleYPosition,((obj.geometry.boundingSphere.radius* obj.scale.y )/2));
            if (obj.geometry.boundingSphere) {
              if (this.tcScaleYPosition == obj.geometry.boundingSphere.radius * obj.scale.y / 2) {
                obj.position.y = obj.geometry.boundingSphere.radius * obj.scale.y;
              } else {
                obj.position.y = this.SHAPE_SIZE * obj.scale.y / 2;
              }
            }
          } else {
            obj.position.y = this.SHAPE_SIZE * obj.scale.y / 2;
          }
        } else if (obj.position.y < 0) {
          obj.position.y = this.SHAPE_SIZE * obj.scale.y / 2;
        }
      } else if (type === 'rotate') {
        console.log('check for retate');
      }
    },
    changeControls: function changeControls(type) {
      if (window.deleteObjFlag) {
        return;
      }

      this.showColorOption = false;
      this.showZoomOption = false; //隐藏子窗口

      var obj = event.target;

      if (!$(obj).hasClass('control_btn')) {
        obj = $(obj).closest('.control_btn');
      }

      if (this.transformControlModeType == 0 && type == 0) {
        obj.toggleClass('active_control');
      } else if (this.transformControlModeType == 1 && type == 1) {
        obj.toggleClass('active_control');
      } else if (this.transformControlModeType == 2 && type == 2) {
        obj.toggleClass('active_control');
      } else if (this.transformControlModeType == 3 && type == 3) {
        obj.toggleClass('active_control');
      } else {
        $('.active_control').removeClass('active_control');
        obj.addClass('active_control');
      }

      if (!obj.hasClass('active_control')) {
        this.transformControl.detach(this.transformControl.object); //隐藏控制控件
        // this.outlinePass.selectedObjects = [];
      } else {
        this.transformControl.attach(this.transformControl.object); //隐藏控制控件
      }

      switch (type) {
        case 0:
          this.transformControl.setMode('scale');
          this.statusTxt = this.textSC;
          this.transformControlModeType = 0;
          break;

        case 1:
          this.transformControl.setMode('translate');
          this.statusTxt = this.textTR;
          this.transformControlModeType = 1;
          break;

        case 2:
          this.transformControl.setMode('rotate');
          this.statusTxt = this.textRO;
          this.transformControlModeType = 2;
          break;

        default:
          this.transformControl.setMode('translate');
          this.statusTxt = this.textTR;
          this.transformControlModeType = 1;
      }

      this.transformControl.object ? this.colorControl = true : this.colorControl = false;
    },
    deletedSelected: function deletedSelected() {
      this.showColorOption = false;
      this.showZoomOption = false; //隐藏子窗口

      if (window.focusedTransformObj && this.transformControl.object) {
        this.createObjForOperation(this.transformControl.object, 'delete');
        this.eachObjSetps(this.transformControl.object, 0);
        this.scene.remove(this.transformControl.object);
        this.objects.splice(this.objects.indexOf(this.transformControl.object), 1);
        $('.active_control').removeClass('active_control');
        this.colorControl = false;
        window.deleteObjFlag = true;
      }

      this.transformControl.detach(); // $(".active_control").removeClass("active_control");

      this.shapesController(0);
      this.render();

      if (this.objects.length > 1) {
        this.activeSave = true;
      } else {
        this.activeSave = false;
        this.controlBar = false;
      }
    },
    changeCurrentColor: function changeCurrentColor(type) {
      this.isWhite = false;

      if (this.transformControl.object) {
        if (type == 0) {
          this.transformControl.object.material.color.set('#dddddd');
          this.isWhite = true;
        } else {
          this.transformControl.object.material.color.set('#f2f545');
          this.isWhite = false;
        }

        this.createObjForOperation(this.transformControl.object, 'transform');
        this.eachObjSetps(this.transformControl.object, 0);
      }
    },
    redoUndo: function redoUndo(type) {
      //type 0: undo 1: redo
      this.showColorOption = false;
      this.showZoomOption = false; //隐藏子窗口

      var transformFlag = false;
      var deleteFlag = false;
      var addFlag = false;

      if (type === 0) {
        if (this.allOperation.length > 0) {
          var operationL = this.allOperation[this.allOperation.length - 1]; //最后一个last

          this.redoOperation.push(operationL); //add the undo to redo

          if (operationL.operation === 'transform') {
            transformFlag = true;
          } else if (operationL.operation === 'delete') {
            deleteFlag = true;
          } else if (operationL.operation === 'add') {
            addFlag = true;
          }

          if (addFlag) {
            if (operationL.mesh) {
              this.eachObjSetps(operationL, 1);
              this.scene.remove(operationL.mesh);
              this.objects.splice(this.objects.indexOf(operationL.mesh), 1);
            }
          } else if (deleteFlag) {
            if (operationL.mesh) {
              this.eachObjSetps(operationL, 1);
              this.scene.add(operationL.mesh);
              this.objects.push(operationL.mesh);
            }
          } else if (transformFlag) {
            var thisObj = this.eachObjectInfo[operationL.uuid]; //寻找对应对象步骤

            if (thisObj) {
              if (thisObj.length > 1) {
                this.redoProcess(thisObj[thisObj.length - 2]);
              } else {
                this.redoProcess(thisObj[thisObj.length - 1]);
              }

              this.eachObjSetps(this.eachObjectInfo[operationL.uuid].pop(), 1);
            }
          }

          this.allOperation.pop();
        }
      } else if (type === 1) {
        if (this.redoOperation.length > 0) {
          var redoOperationL = this.redoOperation[this.redoOperation.length - 1]; //最后一个last

          this.allOperation.push(redoOperationL); //add the undo to redo

          if (redoOperationL.operation === 'transform') {
            transformFlag = true;
          } else if (redoOperationL.operation === 'delete') {
            deleteFlag = true;
          } else if (redoOperationL.operation === 'add') {
            addFlag = true;
          }

          if (addFlag) {
            if (redoOperationL.mesh) {
              this.eachObjSetps(redoOperationL, 2);
              this.scene.add(redoOperationL.mesh);
              this.objects.push(redoOperationL.mesh);
            }
          } else if (deleteFlag) {
            if (redoOperationL.mesh) {
              this.eachObjSetps(redoOperationL, 2);
              this.scene.remove(redoOperationL.mesh);
              this.objects.splice(this.objects.indexOf(redoOperationL.mesh), 1);
            }
          } else if (transformFlag) {
            var thisObj1 = this.eachRedoObjectInfo[redoOperationL.uuid]; //寻找对应对象步骤

            if (thisObj1) {
              if (thisObj1.length > 1) {
                this.redoProcess(thisObj1[thisObj1.length - 2]);
              } else {
                this.redoProcess(thisObj1[thisObj1.length - 1]);
              }

              this.eachObjSetps(this.eachRedoObjectInfo[redoOperationL.uuid].pop(), 2);
            }
          }

          this.redoOperation.pop();
        }
      }

      this.transformControl.detach(); //隐藏控制控件
      // this.outlinePass.selectedObjects = [];

      this.colorControl = false;
      this.render();

      if (this.allOperation.length > 0) {
        this.undoActive = true;
      } else {
        this.undoActive = false;
      }

      if (this.redoOperation.length > 0) {
        this.redoActive = true;
      } else {
        this.redoActive = false;
      }

      if (this.objects.length > 1) {
        this.activeSave = true;
      } else {
        this.activeSave = false;
      }
    },
    redoProcess: function redoProcess(operator) {
      operator.mesh.position.copy(operator.position);
      operator.mesh.rotation._x = operator.rotation._x;
      operator.mesh.rotation._y = operator.rotation._y;
      operator.mesh.rotation._z = operator.rotation._z;
      operator.mesh.quaternion._x = operator.quaternion._x;
      operator.mesh.quaternion._y = operator.quaternion._y;
      operator.mesh.quaternion._z = operator.quaternion._z;
      operator.mesh.scale.set(operator.scale.x, operator.scale.y, operator.scale.z);
      operator.mesh.material.color.set(operator.color);
    },
    saveModuleShow: function saveModuleShow(type) {
      if (this.objects.length > 1) {
        if (type == 0) {
          this.saveNmaeWindow = true;
        } else {
          this.saveNmaeWindow = false;
        }
      } else {
        this.saveNmaeWindow = false;
      }
    },
    getTimeStr: function getTimeStr() {
      var date = new Date();
      var Y = date.getFullYear();
      var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      var dateStr = Y + M + D + h + m + s;
      return dateStr;
    },
    exportMoudle: function exportMoudle(type) {
      //type 0: ASCII 1: GLTF
      if (this.objects.length > 1) {
        this.scene.remove(this.transformControl);
        this.clearCache(this.gridHelper);
        this.scene.remove(this.gridHelper);
        this.clearCache(this.gradGroundMesh);
        this.scene.remove(this.gradGroundMesh);
        this.clearCache(this.gradGroundMesh1);
        this.scene.remove(this.gradGroundMesh1);
        this.clearCache(this.plane);
        this.scene.remove(this.plane); // this.outlinePass.selectedObjects = [];

        this.camera.position.set(170, 145, 255); //45°

        this.camera.lookAt(0, 0, 0); //threejs Y-up, 别的事Z-up,所以到处之前要旋转

        this.scene.rotation.set(Math.PI / 2, 0, 0);
        this.scene.updateMatrixWorld(); //end

        var nameStr = $('#save_name').val(); // var successFlag;

        if (nameStr) {
          this.saveFlag = true;

          if (type === 0) {
            var exporter = new three_examples_jsm_exporters_STLExporter__WEBPACK_IMPORTED_MODULE_17__[/* STLExporter */ "a"](); //导出工具  exporter tool

            var result = exporter.parse(this.scene);
            this.saveString(result, nameStr + '.stl');
          } else {
            var input = this.scene;
            var gltfExporter = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__["GLTFExporter"]();
            var options = {
              trs: false,
              onlyVisible: true,
              truncateDrawRange: true,
              binary: false,
              forcePowerOfTwoTextures: false,
              maxTextureSize: 4096
            };
            gltfExporter.parse(input, function (result) {
              var output = JSON.stringify(result, null, 2);
              this.saveString(output, nameStr + '.gltf');
            }, options);
          }
        }
        /*
                            if (successFlag) {
                                this.saveAsImage(nameStr + '.png' );
                                // 保存成功，清空当前项目 end
                            } else {
                                $( ".save_name_verify" ).text( "保存失败，请重试" ).show();
                                setTimeout( function () {
                                    $( ".save_name_verify" ).text( "请输入模型名称" ).hide();
                                }, 1500 );
                            }*/


        this.scene.add(this.transformControl);
        this.scene.add(this.gridHelper);
        this.scene.add(this.gradGroundMesh);
        this.scene.add(this.gradGroundMesh1);
        this.scene.add(this.plane); //threejs Y-up, 别的事Z-up,所以到处之前要旋转

        this.scene.rotation.set(0, 0, 0);
        this.scene.updateMatrixWorld(); //end
      }
    },
    saveString: function saveString(text, filename) {
      this.save(new Blob([text], {
        type: 'text/plain'
      }), filename);
    },
    save: function save(blob, filename) {
      var link = document.createElement('a');
      link.style.display = 'none';
      link.className = 'saveFile';
      document.body.appendChild(link);
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      $('.saveFile').remove();
      this.afterSTLImg();
    },
    afterSTLImg: function afterSTLImg() {
      this.saveModuleShow(1); // 保存成功，清空当前项目

      for (var i in this.objects) {
        this.clearCache(this.objects[i]);
        this.scene.remove(this.objects[i]);
      }

      this.objects = [];
      this.objects.push(this.plane);
      this.transformControl.detach();
      this.activeSave = false;
      this.controlBar = false;

      if (this.goHomeFlag) {
        this.goHomeFlag = false;
        this.saveFlag = false;
        this.hideSelf();
      } else {
        this.goHomeFlag = false;
        this.saveFlag = false;
      }
    },
    leaveBuilder: function leaveBuilder() {
      if (this.objects.length > 1) {
        if (this.saveFlag) {
          this.hideSelf();
        } else {
          this.notSaveNote = true;
        }
      } else {
        this.hideSelf();
      }
    },
    hideAskWindow: function hideAskWindow() {
      this.notSaveNote = false;
    },
    goHomeSaveModule: function goHomeSaveModule(type) {
      //type 0:gohome 1; save
      this.notSaveNote = false;

      if (type === 0) {
        this.hideSelf();
      } else {
        this.saveModuleShow(0);
        this.goHomeFlag = true;
      }
    },
    windowReisze: function windowReisze() {
      var _this = this;

      _this.CONTAIN_WIDTH = document.getElementById('mainWrapper').offsetWidth;
      _this.CONTAIN_HEIGHT = document.getElementById('mainWrapper').offsetHeight;

      _this.onWindowResize();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.showLoading = true;
    this.mobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
    this.container = document.getElementById('container');
    this.shapesEventL = document.getElementById('childWrapper');
    this.shapesMain = document.getElementById('shapes');
    this.currentObjMaterial = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* MeshLambertMaterial */ "B"]({
      color: 0xdddddd
    });
    this.fontLoader = new three_build_three_module_js__WEBPACK_IMPORTED_MODULE_14__[/* FontLoader */ "q"]();
    this.mouseHelperMaterial = this.currentObjMaterial;
    this.CONTAIN_HEIGHT = document.getElementById('mainWrapper').offsetHeight;
    this.CONTAIN_WIDTH = document.getElementById('mainWrapper').offsetWidth;
    window.focusedTransformObj = this.focusedTransformObj;
    window.deleteObjFlag = this.deleteObjFlag;
    this.init();
    this.listModule();
    window.addEventListener('resize', this.windowReisze);
    this.progressingBar = 0;
    var proInterval = setInterval(function () {
      _this3.progressingBar += 10;
    }, 100);
    setTimeout(function () {
      clearInterval(proInterval);
      _this3.showLoading = false;
    }, 1000);
  },
  computed: {
    textTR: function textTR() {
      return "".concat(this.$t('CURRENT_STATUS'), " ").concat(this.$t('MOVE'));
    },
    textSC: function textSC() {
      return "".concat(this.$t('CURRENT_STATUS'), " ").concat(this.$t('CHANGE_SIZE'));
    },
    textRO: function textRO() {
      return "".concat(this.$t('CURRENT_STATUS'), " ").concat(this.$t('ROTATE'));
    }
  },
  destroyed: function destroyed() {
    var _this = this;

    window.removeEventListener('resize', this.windowReisze);

    _this.controls.removeEventListener('change');

    _this.transformControl.removeEventListener('dragging-changed');

    _this.transformControl.removeEventListener('change');

    _this.transformControl.removeEventListener('mouseDown');

    _this.transformControl.removeEventListener('objectChange');

    _this.transformControl.removeEventListener('mouseUp');

    $('.orientationControls').remove(); // 删除orientation的旋转方块
  },
  //keep-alive 激活状态，无法销毁监听，需要使用deactivated来销毁
  deactivated: function deactivated() {
    var _this = this;

    window.removeEventListener('resize', this.windowReisze);

    _this.controls.removeEventListener('change');

    _this.transformControl.removeEventListener('dragging-changed');

    _this.transformControl.removeEventListener('change');

    _this.transformControl.removeEventListener('mouseDown');

    _this.transformControl.removeEventListener('objectChange');

    _this.transformControl.removeEventListener('mouseUp');

    $('.orientationControls').remove(); // 删除orientation的旋转方块
  },
  watch: {
    CONTAIN_WIDTH: function CONTAIN_WIDTH(newVal) {
      if (newVal) {
        this.CONTAIN_WIDTH = document.getElementById('mainWrapper').offsetWidth;
        this.CONTAIN_HEIGHT = document.getElementById('mainWrapper').offsetHeight;
      }
    },
    CONTAIN_HEIGHT: function CONTAIN_HEIGHT(newVal) {
      if (newVal) {
        this.CONTAIN_WIDTH = document.getElementById('mainWrapper').offsetWidth;
        this.CONTAIN_HEIGHT = document.getElementById('mainWrapper').offsetHeight;
      }
    },
    focusedTransformObj: function focusedTransformObj(newVal) {
      if (newVal) {
        console.log('change the focusedTransformObj');
        window.focusedTransformObj = this.focusedTransformObj;
      }
    },
    textInput: function textInput(newVal, oldVal) {
      if (newVal) {
        console.log('changed textInput');
        console.log('oldVal:' + oldVal);
        console.log('newVal:' + newVal);
        this.textInput1 = newVal;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("1157")))

/***/ })

}]);
//# sourceMappingURL=chunk-4fae44ed.202252910.js.map