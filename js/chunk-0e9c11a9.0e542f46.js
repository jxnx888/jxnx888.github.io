(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e9c11a9"],{"0e23":function(e,t,n){},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},3099:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_wrapper"},[n("div",{staticClass:"banner banner_one"},[n("img",{attrs:{src:e.bannerImg,alt:""}}),n("div",{staticClass:"banner_info"},[n("p",{staticClass:"title"},[e._v(e._s(e.bannerContent))])])])])},i=[],a={name:"topBanner",props:{bannerImg:String,bannerContent:String}},s=a,c=(n("8ffa"),n("2877")),o=Object(c["a"])(s,r,i,!1,null,"2af263d0",null);t["a"]=o.exports},"3f9e":function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),s=n("50c4"),c=n("a691"),o=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=r.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(n,r){var i=o(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!m&&_||"string"===typeof r&&-1===r.indexOf(b)){var a=n(t,e,this,r);if(a.done)return a.value}var o=i(e),p=String(this),v="function"===typeof r;v||(r=String(r));var h=o.global;if(h){var E=o.unicode;o.lastIndex=0}var w=[];while(1){var I=u(o,p);if(null===I)break;if(w.push(I),!h)break;var C=String(I[0]);""===C&&(o.lastIndex=l(p,s(o.lastIndex),E))}for(var y="",T=0,S=0;S<w.length;S++){I=w[S];for(var j=String(I[0]),A=f(d(c(I.index),p.length),0),N=[],R=1;R<I.length;R++)N.push(g(I[R]));var k=I.groups;if(v){var $=[j].concat(N,A,p);void 0!==k&&$.push(k);var D=String(r.apply(void 0,$))}else D=x(j,p,A,N,k,r);A>=T&&(y+=p.slice(T,A)+D,T=A+j.length)}return y+p.slice(T)}];function x(e,n,r,i,s,c){var o=r+e.length,l=i.length,u=h;return void 0!==s&&(s=a(s),u=v),t.call(c,u,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":c=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return t;if(u>l){var f=p(u/10);return 0===f?t:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):t}c=i[u-1]}return void 0===c?"":c}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",s=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},6547:function(e,t,n){var r=n("a691"),i=n("1d80"),a=function(e){return function(t,n){var a,s,c=String(i(t)),o=r(n),l=c.length;return o<0||o>=l?e?"":void 0:(a=c.charCodeAt(o),a<55296||a>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?e?c.charAt(o):a:e?c.slice(o,o+2):s-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"6a02":function(e,t,n){"use strict";(function(e){n("ac1f"),n("5319");var r=n("3099"),i=n("cf3d");t["a"]={name:"projects",components:{topBanner:r["a"],projectTem:i["a"]},data:function(){return{projectsJson:{},forFunJson:{},menuArr:{},scrollingMenu:!1,activeMenuIndex:0,mobile:!1,showTD:!1,showTester:!1,showDecal:!1,timer:""}},methods:{getProject:function(){var e="/mock/projects.json",t=this.$i18n.locale;"zh_cn"==t&&(e="/mock/projectsCN.json"),this.$ajax.get(e).then(this.getProjectSucc).catch((function(e){console.log("error:"+e)}))},getProjectSucc:function(e){if(console.log(e),200==e.data.code){var t=e.data.data;for(var n in this.projectsJson=t,this.menuArr={},t)this.menuArr[n]=t[n].companySC}},jumpToRelate:function(t,n){e("html,body").scrollTop(e("#"+t).offset().top),this.activeMenuIndex=n,this.menuScroll()},menuScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset,n=e(".animation_menu").height(),r=e(".project_main").offset().top,i=r+e(".project_wrapper").height();if(t>=r-100&&t<=i-n){this.scrollingMenu=!0;var a=this.menuArr,s=0;for(var c in a){var o=e("#"+c.replace(/ /g,"")).offset().top-120;t>=o&&(this.activeMenuIndex=s,s++)}e(".scrollMenu").css("top",t-r+140)}else t<r&&(this.scrollingMenu=!1,this.activeMenuIndex=0,e(".animation_menu").css("top","50px"))},showThreeD:function(){this.timer=(new Date).getTime(),this.showTD=!this.showTD},getForFun:function(){var e="/mock/yuandian.json";this.$ajax.get(e).then(this.getForFunSucc).catch((function(e){console.log("error:"+e)}))},getForFunSucc:function(e){if(console.log(e),200==e.data.code){var t=e.data.data;this.forFunJson=t}},showTest:function(){this.timer=(new Date).getTime(),this.showTester=!this.showTester},showDecals:function(){this.timer=(new Date).getTime(),this.showDecal=!this.showDecal},resizeDecals:function(){e(".decalsMain,.decalWrapper").css({width:e(window).width(),height:e(window).height()})},checkQuery:function(){if("null"!==this.$route.query.jump)var e=this.$route.query.jump,t=setInterval((function(){var n=document.getElementById(e);n&&(clearInterval(t),n.scrollIntoView({behavior:"smooth",block:"center"}))}),100)}},mounted:function(){this.getProject(),this.getForFun(),window.addEventListener("scroll",this.menuScroll),this.mobile=/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent),window.addEventListener("resize",this.resizeDecals,!1),this.checkQuery()},activated:function(){this.checkQuery()},destroyed:function(){window.removeEventListener("scroll",this.menuScroll,!1),window.removeEventListener("resize",this.resizeDecals,!1)},deactivated:function(){window.removeEventListener("scroll",this.menuScroll,!1),window.removeEventListener("resize",this.resizeDecals,!1)},watch:{"$i18n.locale":function(e,t){e!=t&&this.getProject()}}}}).call(this,n("1157"))},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var a,s;return i&&"function"==typeof(a=t.constructor)&&a!==n&&r(s=a.prototype)&&s!==n.prototype&&i(e,s),e}},"870e":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8ffa":function(e,t,n){"use strict";var r=n("870e"),i=n.n(r);i.a},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||l;f&&(c=function(e){var t,n,i,c,f=this,d=l&&f.sticky,p=r.call(f),v=f.source,h=0,g=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",p)),u&&(n=new RegExp("^"+v+"$(?!\\s)",p)),o&&(t=f.lastIndex),i=a.call(d?n:f,g),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&s.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),e.exports=c},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),a=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,v=n("06cf").f,h=n("9bf2").f,g=n("58a8").trim,m="Number",_=i[m],b=_.prototype,x=o(d(b))==m,E=function(e){var t,n,r,i,a,s,c,o,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(a=l.slice(2),s=a.length,c=0;c<s;c++)if(o=a.charCodeAt(c),o<48||o>i)return NaN;return parseInt(a,r)}return+l};if(a(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var w,I=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof I&&(x?f((function(){b.valueOf.call(n)})):o(n)!=m)?l(new _(E(t)),n,I):E(t)},C=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)c(_,w=C[y])&&!c(I,w)&&h(I,w,v(_,w));I.prototype=b,b.constructor=I,s(i,m,I)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c42e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project_wrapper clearfix"},[n("div",{staticClass:"project_banner"},[n("topBanner",{attrs:{bannerImg:"/image/banner2.png",bannerContent:e.$t("projects.bannerInfo")}})],1),n("div",{staticClass:"project_main clearfix"},[e._l(e.projectsJson,(function(t,r,i){return n("div",{key:i,staticClass:"each_career clearfix"},[n("h1",{staticClass:"company_name",attrs:{id:r.replace(/ /g,"")}},[n("div",{staticClass:"jobTitle"},[e._v(e._s(t.jobtitle))]),n("div",{staticClass:"jobCompany"},[e._v("-- "+e._s(t.companyName))]),n("div",{staticClass:"jobduration"},[e._v("-- "+e._s(t.startDate)+" - "+e._s(t.endDate)+" ("+e._s(t.duration)+") ")]),n("div",{staticClass:"jobResponsibilities"},[e._v(" -- Responsibilities "),n("ul",e._l(t.responsibilities,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t)+" ")])})),0)])]),e._l(t.projects,(function(t){return n("projectTem",{key:t.id,attrs:{bgImg:t.img,titleInf:t.title,desc:t.desc,tags:t.tags,link:t.url,code:t.code,showTD:e.showTD,id:t.title.replaceAll(" ","")}})}))],2)})),e.mobile?e._e():n("div",{staticClass:"animation_menu",class:e.scrollingMenu?"scrollMenu":""},e._l(e.menuArr,(function(t,r,i){return n("div",{key:i,staticClass:"each_company_menu",class:e.activeMenuIndex==i?"active_menu":"",on:{click:function(t){e.jumpToRelate(r.replace(/ /g,""),i)}}},[e._v(e._s(t)+" ")])})),0)],2),n("router-view")],1)},i=[],a=n("6a02"),s=a["a"],c=(n("feed"),n("2877")),o=Object(c["a"])(s,r,i,!1,null,"47d994ff",null);t["default"]=o.exports},cf3d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"each_content"},["3"!=e.code&&"4"!=e.code&&"5"!=e.code?n("a",{attrs:{href:e.link}},[n("div",{staticClass:"each_wrapper"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.bgImg,expression:"bgImg"}],key:e.bgImg,staticClass:"each_img",attrs:{alt:""}}),n("div",{staticClass:"info_wrapper"},[n("div",{staticClass:"thisTitle"},[e._v(e._s(e.titleInf))]),n("div",{staticClass:"thisDes"},[e._v(e._s(e.desc))]),n("div",{staticClass:"thisTags"},[n("div",{staticClass:"subTitle"},[e._v("Tags:")]),e._v(" "+e._s(e.tags)+" ")])])])]):"3"==e.code||"4"==e.code||"5"==e.code?n("div",{staticClass:"threed",on:{click:function(t){return e.goChildPage(e.code)}}},[n("div",{staticClass:"tip"},[e._v(e._s(e.$t("projects.tip")))]),n("div",{staticClass:"each_wrapper"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.bgImg,expression:"bgImg"}],key:e.bgImg,staticClass:"each_img",attrs:{alt:""}}),n("div",{staticClass:"info_wrapper"},[n("div",{staticClass:"thisTitle"},[e._v(e._s(e.titleInf))]),n("div",{staticClass:"thisDes"},[e._v(e._s(e.desc))]),n("div",{staticClass:"thisTags"},[n("div",{staticClass:"subTitle"},[e._v("Tags:")]),e._v(" "+e._s(e.tags)+" ")])])])]):e._e()])},i=[],a=(n("a9e3"),{name:"projectTem",props:{bgImg:String,titleInf:String,desc:String,tags:String,link:String,code:Number},methods:{goChildPage:function(e){var t=this;switch(e){case 3:t.$router.push({name:"MagicBox"});break;case 4:t.$router.push({path:"/projects/luggageDecalSplatter"});break;default:t.$router.push({path:"/projects/forFun"})}}}}),s=a,c=(n("dc3e"),n("2877")),o=Object(c["a"])(s,r,i,!1,null,"c93f5954",null);t["a"]=o.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),s=n("9263"),c=n("9112"),o=a("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var v=a(e),h=!i((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=h&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!h||!g||"replace"===e&&(!l||!u||d)||"split"===e&&!p){var m=/./[v],_=n(v,""[e],(function(e,t,n,r,i){return t.exec===s?h&&!i?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=_[0],x=_[1];r(String.prototype,e,b),r(RegExp.prototype,v,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},dc3e:function(e,t,n){"use strict";var r=n("0e23"),i=n.n(r);i.a},feed:function(e,t,n){"use strict";var r=n("3f9e"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-0e9c11a9.0e542f46.js.map