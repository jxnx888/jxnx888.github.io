(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-392a8890"],{"19f7":function(e,t,i){"use strict";var n=i("6f28");i.n(n).a},"6f28":function(e,t,i){},cf48:function(e,t,i){"use strict";(function(e){t.a={name:"decals",data:function(){return{windowWidth:1200,windowHeight:500,decaleClosed:null}},methods:{checkWindowWH:function(){this.windowWidth=e(window).width(),this.windowHeight=e(window).height(),e(".decalsMain,.decalWrapper").css({width:this.windowWidth,height:this.windowHeight})},hideSelf:function(){this.$router.push({path:"/projects",query:{jump:"LuggageDecalSplatter"}})}},mounted:function(){this.checkWindowWH(),window.addEventListener("resize",this.checkWindowWH,!1),this.decaleClosed=document.getElementById("decalsMain").contentWindow.decaleClosed},destroyed:function(){window.removeEventListener("resize",this.checkWindowWH,!1)},deactivated:function(){window.removeEventListener("resize",this.checkWindowWH,!1)},watch:{decaleClosed:function(e,t){console.log(e),e!=t&&e&&(this.decaleClosed=e)}}}}).call(this,i("1157"))},f3ed:function(e,t,i){"use strict";i.r(t);var n=i("cf48").a,c=(i("19f7"),i("2877")),d=Object(c.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"decalWrapper"},[i("iframe",{staticClass:"decalsMain",attrs:{src:"/threejs/luggage.html",id:"decalsMain"}}),i("div",{staticClass:"backBtn",class:e.decaleClosed?"hideMenu":"",on:{click:function(t){return e.hideSelf()}}},[e._v("Close App")])])}),[],!1,null,"1e52d9a8",null);t.default=d.exports}}]);
//# sourceMappingURL=chunk-392a8890.c3cb3a7f.js.map