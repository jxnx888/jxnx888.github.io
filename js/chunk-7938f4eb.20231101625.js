(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7938f4eb"],{a739:function(e,t,i){},cf48:function(e,t,i){"use strict";!function(e){t.a={name:"decals",data:function(){return{windowWidth:1200,windowHeight:500,decaleClosed:null}},methods:{checkWindowWH:function(){this.windowWidth=e(window).width(),this.windowHeight=e(window).height(),e(".decalsMain,.decalWrapper").css({width:this.windowWidth,height:this.windowHeight})},hideSelf:function(){this.$router.push({path:"/projects",query:{jump:"LuggageDecalSplatter"}})}},mounted:function(){this.checkWindowWH(),window.addEventListener("resize",this.checkWindowWH,!1),this.decaleClosed=document.getElementById("decalsMain").contentWindow.decaleClosed},destroyed:function(){window.removeEventListener("resize",this.checkWindowWH,!1)},deactivated:function(){window.removeEventListener("resize",this.checkWindowWH,!1)},watch:{decaleClosed:function(e,t){e!=t&&e&&(this.decaleClosed=e)}}}}.call(this,i("1157"))},db04:function(e,t,i){"use strict";var n=i("a739");i.n(n).a},f3ed:function(e,t,i){"use strict";i.r(t);var n=i("cf48").a,i=(i("db04"),i("2877")),n=Object(i.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"decalWrapper"},[e("iframe",{staticClass:"decalsMain",attrs:{src:"/threejs/luggage.html",id:"decalsMain"}}),e("div",{staticClass:"backBtn",class:t.decaleClosed?"hideMenu":"",on:{click:function(e){return t.hideSelf()}}},[t._v("Close App")])])},[],!1,null,"0ef30896",null);t.default=n.exports}}]);