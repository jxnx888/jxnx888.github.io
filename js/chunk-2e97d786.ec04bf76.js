(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e97d786"],{"00b5":function(t,e,i){"use strict";(function(t){e["a"]={name:"aboutPart",data:function(){return{resumeLink:"/file/XinNing-Resume-CN.pdf",addAnimation:!1}},methods:{checkPosition:function(){var e=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset,i=t(window).height(),s=t("#homeList").offset().top,a=e+i;this.addAnimation=a>=s}},mounted:function(){window.addEventListener("scroll",this.checkPosition)},destroyed:function(){window.removeEventListener("scroll",this.checkPosition)},activated:function(){window.addEventListener("scroll",this.checkPosition)},deactivated:function(){window.removeEventListener("scroll",this.checkPosition)},watch:{"$i18n.locale":function(t,e){t!=e&&(this.resumeLink="zh_cn"==t?"/file/XinNing-Resume-CN.pdf":"/file/XinNing-Resume-EN.pdf")}}}}).call(this,i("1157"))},"033a":function(t,e,i){"use strict";var s=i("54eb"),a=i.n(s);a.a},"19b9":function(t,e,i){},"1bc4":function(t,e,i){"use strict";(function(t){var s=i("c3ba");e["a"]={name:"topBanner",components:{autoTyping:s["a"]},data:function(){return{timer:null,currentWord:null}},props:{bannerList:Array},methods:{animatedWord:function(e){var i=this;i.currentWord=t(e.target),i.currentWord.addClass("animated rubberBand"),i.currentWord.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){i.currentWord.removeClass("animated rubberBand")}))},animatedInit:function(e){var i=3e3;1==e&&(i=1e3);var s=0;t(".each_word").each((function(){var e=t(this),i=t(this).index();t(".animationCapt").removeClass("animationCapt"),setTimeout((function(){0==i||4==i?e.addClass("animated animationCapt"):e.addClass("animated bounceIn")}),s),s+=100})),setTimeout((function(){t(".each_word").removeClass("animated bounceIn").css("opacity",1),t(".each_word").mouseenter((function(){var e=t(this);t(this).addClass("animated rubberBand"),t(this).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){e.removeClass("animated rubberBand")}))}))}),i)}},mounted:function(){var t=this;t.$nextTick((function(){t.animatedInit(0)}))},watch:{"$i18n.locale":function(t,e){t!=e&&(this.timer=(new Date).getTime(),this.$nextTick((function(){this.animatedInit(1)})))}}}}).call(this,i("1157"))},"22cd":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("topBannerSwiper",{attrs:{bannerList:t.bannerList}}),i("aboutPart"),i("projects"),i("keepLearning")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main_wrapper"},[i("div",{staticClass:"banner banner_one"},[i("img",{attrs:{src:t.bannerList[0],alt:""}}),i("div",{staticClass:"banner_info"},[i("h1",t._l(t.$t("home.name"),(function(e,s){return i("span",{key:s,staticClass:"each_word",on:{mouseenter:t.animatedWord}},[t._v(" "+t._s(e)+" ")])})),0),i("p",{staticClass:"title"},[t._v(t._s(t.$t("home.title")))]),i("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("home.subtitle")))])]),i("autoTyping",{key:t.timer})],1)])},o=[],r=i("1bc4"),l=r["a"],c=(i("bf26"),i("2877")),m=Object(c["a"])(l,n,o,!1,null,"d3def834",null),h=m.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutPart"},[i("div",{staticClass:"top_intro"},[i("p",[t._v(t._s(t.$t("home.welcome[0]")))]),i("p",[t._v(t._s(t.$t("home.welcome[1]"))+" "),i("a",{attrs:{href:t.resumeLink,download:"/file/XinNing-Resume-CN.pdf"}},[t._v(t._s(t.$t("home.welcome[2]")))]),t._v(".")]),i("p",[t._v(t._s(t.$t("home.welcome[5]"))+" "),i("a",{attrs:{href:"mailto:jxnx888@hotmail.com"}},[t._v("jxnx888@hotmail.com")]),t._v(",")]),i("p",[t._v(t._s(t.$t("home.welcome[6]"))+" "),i("router-link",{attrs:{to:"/contact"}},[t._v(t._s(t.$t("home.welcome[7]")))])],1)]),i("div",{staticClass:"bottom_list",attrs:{id:"homeList"}},[i("ul",{staticClass:"detail_list clearfix"},[i("li",{class:t.addAnimation?"bounceInLeft animated":"",attrs:{id:"homeAM"}},[i("router-link",{staticClass:"each_link",attrs:{to:"/aboutme"}},[i("p",[t._v(t._s(t.$t("home.aboutme")))]),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/aboutme1.jpg",expression:"'/image/home/aboutme1.jpg'"}],attrs:{alt:""}})])],1),i("li",{class:t.addAnimation?"bounceIn animated":"",attrs:{id:"homePj"}},[i("router-link",{staticClass:"each_link",attrs:{to:"/projects"}},[i("p",[t._v(t._s(t.$t("home.myprojects")))]),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/myprojects.jpg",expression:"'/image/home/myprojects.jpg'"}],attrs:{alt:""}})])],1),i("li",{staticClass:"last",class:t.addAnimation?"bounceInRight animated":"",attrs:{id:"homeSk"}},[i("router-link",{staticClass:"each_link",attrs:{to:"/skills"}},[i("p",[t._v(t._s(t.$t("home.myskills")))]),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/myskills.jpg",expression:"'/image/home/myskills.jpg'"}],attrs:{alt:""}})])],1)])])])},u=[],p=i("00b5"),_=p["a"],v=(i("033a"),Object(c["a"])(_,d,u,!1,null,"49c31aad",null)),f=v.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project_wrapper"},[i("div",{staticClass:"project_hook"},[i("div",{staticClass:"left_tab"},[i("ul",{staticClass:"tab_list"},[i("li",{staticClass:"each_list",class:{acive_tab:1===t.currentListIndex},on:{mouseenter:function(e){return t.showCurrent(1)}}},[i("p",{staticClass:"each_title"},[t._v(t._s(t.$t("homeProject.list1.title")))]),i("ul",{staticClass:"each_responsibility"},[i("li",{staticClass:"responsibility_li"},[t._v(t._s(t.$t("homeProject.list1.responsibility[0]")))]),i("li",{staticClass:"responsibility_li"},[t._v(t._s(t.$t("homeProject.list1.responsibility[1]")))]),i("li",{staticClass:"responsibility_li"},[t._v(t._s(t.$t("homeProject.list1.responsibility[2]")))])])]),i("li",{staticClass:"each_list",class:{acive_tab:2===t.currentListIndex},on:{mouseenter:function(e){return t.showCurrent(2)}}},[i("p",{staticClass:"each_title"},[t._v("Android")]),t._m(0)]),i("li",{staticClass:"each_list",class:{acive_tab:3===t.currentListIndex},on:{mouseenter:function(e){return t.showCurrent(3)}}},[i("p",{staticClass:"each_title"},[t._v(t._s(t.$t("homeProject.list3.title")))]),i("ul",{staticClass:"each_responsibility"},[i("li",{staticClass:"responsibility_li"},[t._v(t._s(t.$t("homeProject.list3.responsibility[0]")))]),i("li",{staticClass:"responsibility_li no_style"},[t._v(t._s(t.$t("homeProject.list3.responsibility[1]")))]),i("li",{staticClass:"responsibility_li no_style"},[t._v(t._s(t.$t("homeProject.list3.responsibility[2]")))]),i("li",{staticClass:"responsibility_li no_style"},[t._v(t._s(t.$t("homeProject.list3.responsibility[3]")))])])])])]),i("div",{staticClass:"right_content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.currentListIndex,expression:"currentListIndex===1"}],staticClass:"each_content"},[i("ul",{staticClass:"each_content_list"},[i("li",{staticClass:"item_1"},[i("a",{attrs:{href:"https://www.import-express.com/",target:"_blank"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/last_work4.jpg",expression:"'/image/home/last_work4.jpg'"}],attrs:{alt:""}}),i("div",{staticClass:"intro_wrapper"},[i("h4",{staticClass:"tit"},[t._v(t._s(t.$t("homeProject.list1.childList[0].title")))]),i("p",{staticClass:"txt"},[i("a",{attrs:{href:"https://www.import-express.com/"}},[t._v(t._s(t.$t("homeProject.list1.childList[0].txt[0]")))])]),i("p",{staticClass:"txt"},[i("a",{attrs:{href:"https://www.kidscharming.com/"}},[t._v(t._s(t.$t("homeProject.list1.childList[0].txt[1]")))])]),i("p",{staticClass:"txt"},[i("a",{attrs:{href:"https://www.petstoreinc.com/"}},[t._v(t._s(t.$t("homeProject.list1.childList[0].txt[2]")))])]),i("i",{staticClass:"iconfont icon_arrow"},[t._v("")])])])]),i("li",{staticClass:"item_1"},[i("router-link",{attrs:{to:{path:"/projects",query:{jump:"LuggageDecalSplatter"}}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/luggage_decal.jpg",expression:"'/image/home/luggage_decal.jpg'"}],attrs:{alt:""}}),i("div",{staticClass:"intro_wrapper"},[i("h4",{staticClass:"tit"},[t._v(t._s(t.$t("homeProject.list1.childList[1].title")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list1.childList[1].txt[0]")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list1.childList[1].txt[1]")))]),i("i",{staticClass:"iconfont icon_arrow"},[t._v("")])])])],1),i("li",{staticClass:"item_3"},[i("router-link",{attrs:{to:{path:"/projects",query:{jump:"MagicBox-AppforChildren"}}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/3dprinting1.jpg",expression:"'/image/home/3dprinting1.jpg'"}],attrs:{alt:""}}),i("div",{staticClass:"intro_wrapper intro_wrapper4"},[i("h4",{staticClass:"tit"},[t._v(t._s(t.$t("homeProject.list1.childList[2].title")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list1.childList[2].txt[0]")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list1.childList[2].txt[1]")))]),i("i",{staticClass:"iconfont icon_arrow"},[t._v("")])])])],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.currentListIndex,expression:"currentListIndex===2"}],staticClass:"each_content"},[t._v("456")]),i("div",{directives:[{name:"show",rawName:"v-show",value:3===t.currentListIndex,expression:"currentListIndex===3"}],staticClass:"each_content"},[i("ul",{staticClass:"each_content_list only_two_item"},[i("li",{staticClass:"item_1"},[i("a",{attrs:{href:"https://www.fairfield.edu",target:"_blank"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/FULogo.jpg",expression:"'/image/home/FULogo.jpg'"}],attrs:{alt:""}}),i("div",{staticClass:"intro_wrapper intro_wrapper3"},[i("h4",{staticClass:"tit"},[t._v(t._s(t.$t("homeProject.list3.childList[0].title")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list3.childList[0].txt[0]")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list3.childList[0].txt[1]")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list3.childList[0].txt[2]")))]),i("i",{staticClass:"iconfont icon_arrow"},[t._v("")])])])]),i("li",{staticClass:"item_2"},[i("a",{attrs:{href:"http://gjjl.hkc.edu.cn/",target:"_blank"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/hkc.jpg",expression:"'/image/home/hkc.jpg'"}],attrs:{alt:""}}),i("div",{staticClass:"intro_wrapper intro_wrapper3"},[i("h4",{staticClass:"tit"},[t._v(t._s(t.$t("homeProject.list3.childList[1].title")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list3.childList[1].txt[0]")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list3.childList[1].txt[1]")))]),i("p",{staticClass:"txt"},[t._v(t._s(t.$t("homeProject.list3.childList[1].txt[2]")))])])])])])])])])])},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"each_responsibility"},[i("li",{staticClass:"responsibility_li"},[t._v("Maintain & modify E-commerce webist")]),i("li",{staticClass:"responsibility_li"},[t._v("Manage front-end develope team")])])}],C={name:"projects",data:function(){return{currentListIndex:1}},methods:{showCurrent:function(t){this.currentListIndex=t}}},b=C,x=(i("4113"),Object(c["a"])(b,g,w,!1,null,"f9b5e650",null)),j=x.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main_wrapper clearfix"},[i("div",{staticClass:"left_img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/image/home/keep-learning.jpg",expression:"'/image/home/keep-learning.jpg'"}],attrs:{alt:""}})]),i("div",{staticClass:"right_info"},[i("div",{staticClass:"text keep_title"},[t._v(" "+t._s(t.$t("home.keepLearning[0]"))+" ")]),i("div",{staticClass:"text dictum"},[t._v(' "'+t._s(t.$t("home.keepLearning[1]"))+'" '),i("div",{staticClass:"author"},[t._v(" -- "+t._s(t.$t("home.keepLearning[2]")))])])])])},L=[],$={name:"keepLearning"},k=$,P=(i("c1be"),Object(c["a"])(k,y,L,!1,null,"26823740",null)),N=P.exports,I={name:"home",components:{topBannerSwiper:h,aboutPart:f,projects:j,keepLearning:N},data:function(){return{bannerList:["/image/banner1.png"]}},methods:{getHomeInfo:function(){this.$ajax.get("/mock/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t&&t.data){var e=t.data;this.homeTopSwiperList=e.homeTopSwiperList}}},mounted:function(){this.getHomeInfo()}},E=I,z=Object(c["a"])(E,s,a,!1,null,"2211320b",null);e["default"]=z.exports},2347:function(t,e,i){"use strict";var s=i("4061"),a=i.n(s);a.a},4061:function(t,e,i){},4113:function(t,e,i){"use strict";var s=i("19b9"),a=i.n(s);a.a},"54eb":function(t,e,i){},a283:function(t,e,i){},bf26:function(t,e,i){"use strict";var s=i("e457"),a=i.n(s);a.a},c1be:function(t,e,i){"use strict";var s=i("a283"),a=i.n(s);a.a},c3ba:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"typeWrite"},[i("h1",{staticClass:"typewrite-word",attrs:{"data-period":"2000","data-type":t.$t("home.intro")}},[i("span",{staticClass:"wrap"})])])},a=[],n=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};function o(){for(var t=document.getElementsByClassName("typewrite-word"),e=0;e<t.length;e++){var i=t[e].getAttribute("data-type"),s=t[e].getAttribute("data-period");i&&new n(t[e],JSON.parse(i),s)}var a=document.createElement("style");a.type="text/css",a.innerHTML=".typewrite-word > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(a)}n.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout((function(){i.tick()}),s)},window.onload=function(){};var r={name:"autoTyping",data:function(){return{}},mounted:function(){o()}},l=r,c=(i("2347"),i("2877")),m=Object(c["a"])(l,s,a,!1,null,"3f983035",null);e["a"]=m.exports},e457:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2e97d786.ec04bf76.js.map