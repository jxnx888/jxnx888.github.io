(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d218058"],{c8e2:function(n,t,e){"use strict";e.r(t),e("99af"),e("d3b7");var c={name:"index",data:function(){return{app_id:"989280545062624",app_secret:"58b95643d212e6e44e4ba6a6df634b44"}},methods:{getAccessToken:function(){var n="https://graph.facebook.com/oauth/access_token\n        ?client_id=".concat(this.app_id,"\n        &client_secret=").concat(this.app_secret,"\n        &grant_type=client_credentials");this.$ajax.get(n).then(this.getAccessTokenSucc).catch(function(n){})},getAccessTokenSucc:function(n){},init:function(){var n=this;window.fbAsyncInit=function(){window.FB.init({appId:"this.app_id",autoLogAppEvents:!0,xfbml:!0,version:"v13.0"}),n.getLoginStatus()}},getLoginStatus:function(){var t=this;window.FB.getLoginStatus(function(n){t.statusChangeCallback(n)})},statusChangeCallback:function(n){},getFeed:function(){window.FB.api("/1646535395682583/posts","GET",{},function(n){})}},mounted:function(){var c,n=this;c="https://connect.facebook.net/en_US/sdk.js",new Promise(function(n,t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.defer=!0,e.crossOrigin="anonymous",e.src=c,document.body.appendChild(e),e.onload=function(){n()},e.onerror=function(){t()}}).then(function(){n.init()})}},e=e("2877"),c=Object(e.a)(c,function(){var n=this.$createElement;return(this._self._c||n)("div")},[],!1,null,"e6778610",null);t.default=c.exports}}]);