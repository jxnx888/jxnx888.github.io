(function(e){function t(t){for(var a,i,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},o={app:0},s=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0e96e2f8":"19f62d87","chunk-0e9c11a9":"0e542f46","chunk-2d0a3577":"79b50294","chunk-2e97d786":"ec04bf76","chunk-392a8890":"802e1a83","chunk-4f3b7e5e":"9b63e057","chunk-7998db36":"7f20069f","chunk-7029d9b2":"0e669b7b","chunk-b9859f0e":"10ac4cbf"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0e96e2f8":1,"chunk-0e9c11a9":1,"chunk-2e97d786":1,"chunk-392a8890":1,"chunk-4f3b7e5e":1,"chunk-7029d9b2":1,"chunk-b9859f0e":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0e96e2f8":"ecee23e4","chunk-0e9c11a9":"3282852b","chunk-2d0a3577":"31d6cfe0","chunk-2e97d786":"7d46d6a8","chunk-392a8890":"fcbf7000","chunk-4f3b7e5e":"dd7636cd","chunk-7998db36":"31d6cfe0","chunk-7029d9b2":"2bbce5d8","chunk-b9859f0e":"465dd7d5"}[e]+".css",o=l.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[e],f.parentNode.removeChild(f),n(s)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f74":function(e,t,n){},"3d49":function(e,t,n){"use strict";var a=n("4a4d"),i=n.n(a);i.a},"4a4d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navMain"),n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{staticClass:"mainBody"}):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{staticClass:"mainBody"}),n("footerVue")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[e.mobile?e._e():n("pcNav")],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav_wrapper not-select",class:[e.fixedShow?"fixedShow":"",e.fixedHide?"fixedHide":""]},[n("div",{staticClass:"main_wrapper"},[n("div",{staticClass:"logo img_wrapper"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/image/logo.png",alt:"Xin's Website"}})])],1),n("div",{staticClass:"rigth_menu"},[n("div",{staticClass:"each_menu",class:"1"==e.navIndex?"activeMenu":""},[n("router-link",{staticClass:"each_link",attrs:{to:"/"}},[e._v(e._s(e.$t("nav.home")))])],1),n("div",{staticClass:"each_menu",class:"2"==e.navIndex?"activeMenu":""},[n("router-link",{staticClass:"each_link",attrs:{to:"/skills"}},[e._v(e._s(e.$t("nav.skills")))])],1),n("div",{staticClass:"each_menu",class:"3"==e.navIndex?"activeMenu":""},[n("router-link",{staticClass:"each_link",attrs:{to:"/projects"}},[e._v(e._s(e.$t("nav.Projects")))])],1),n("div",{staticClass:"each_menu",class:"4"==e.navIndex?"activeMenu":""},[n("router-link",{staticClass:"each_link",attrs:{to:"/aboutme"}},[e._v(e._s(e.$t("nav.AboutMe")))])],1),n("div",{staticClass:"each_menu last_menu",class:"5"==e.navIndex?"activeMenu":""},[n("router-link",{staticClass:"each_link",attrs:{to:"/contact"}},[e._v(e._s(e.$t("nav.contact")))])],1),n("div",{staticClass:"lang_area"},[n("a",{staticClass:"lang_ch eacb_lang",class:{active_lang:"zh_cn"===e.currrent_lang},attrs:{lang:"zh-cn"},on:{click:function(t){return e.changeLanguage("zh_cn")}}},[e._v("中文")]),n("i",{staticClass:"s_line"},[e._v("|")]),n("a",{staticClass:"lang_us eacb_lang",class:{active_lang:"en_us"===e.currrent_lang},attrs:{lang:"en-us"},on:{click:function(t){return e.changeLanguage("en_us")}}},[e._v("English")])])])])])},c=[],u=n("da74"),d=u["a"],f=(n("3d49"),n("2877")),h=Object(f["a"])(d,l,c,!1,null,"55d1843f",null),m=h.exports,p={name:"navMain",components:{pcNav:m},data:function(){return{mobile:!1}},mounted:function(){this.mobile=/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)}},g=p,v=Object(f["a"])(g,s,r,!1,null,"483f8e8c",null),b=v.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer_wrapper"},[n("footer",{staticClass:"common_footer"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"social_wrapper clearfix"},[n("div",{staticClass:"each_social"},[n("a",{staticClass:"wechat-btn",attrs:{title:"WeChat:Xin Ning"}},[n("div",{staticClass:"icon i_wechat"}),n("img",{attrs:{src:"/image/footer/wechat_xin.jpg",alt:""}})])]),n("div",{staticClass:"each_social"},[n("a",{staticClass:"linkedin-btn",attrs:{href:"https://www.linkedin.com/in/xin-ning-28818b115/",target:"_blank",title:"LinkedIn:Xin Ning"}},[n("div",{staticClass:"icon i_linkedin"})])]),n("div",{staticClass:"each_social"},[n("a",{staticClass:"facebook-btn",attrs:{href:"https://www.facebook.com/jxnx888",target:"_blank",title:"Facebook:Xin Ning"}},[n("div",{staticClass:"icon i_facebook"})])]),n("div",{staticClass:"each_social"},[n("a",{staticClass:"github-btn",attrs:{href:"https://github.com/jxnx888",target:"_blank",title:"Github:Xin Ning"}},[n("div",{staticClass:"icon i_github"})])])])]),n("el-col",{staticClass:"sitemap",attrs:{span:24}},[n("div",{staticClass:"sitemap_wrapper clearfix"},[n("div",{staticClass:"each_map"},[n("a",{attrs:{href:e.resumeLink,download:"/file/XinNing-Resume-CN.pdf"}},[n("i",{staticClass:"el-icon-printer"}),e._v(e._s(e.$t("footer.resume")))])]),n("div",{staticClass:"each_map"},[n("router-link",{staticClass:"each_link",attrs:{to:"/"}},[e._v(e._s(e.$t("nav.home")))])],1),n("div",{staticClass:"each_map"},[n("router-link",{staticClass:"each_link",attrs:{to:"/skills"}},[e._v(e._s(e.$t("nav.skills")))])],1),n("div",{staticClass:"each_map"},[n("router-link",{staticClass:"each_link",attrs:{to:"/projects"}},[e._v(e._s(e.$t("nav.Projects")))])],1),n("div",{staticClass:"each_map"},[n("router-link",{staticClass:"each_link",attrs:{to:"/aboutme"}},[e._v(e._s(e.$t("nav.AboutMe")))])],1),n("div",{staticClass:"each_map last_menu"},[n("router-link",{staticClass:"each_link",attrs:{to:"/aboutme"}},[e._v(e._s(e.$t("nav.contact")))])],1)])]),n("el-col",{staticClass:"footer_copyright",attrs:{span:24}},[e._v(" Copyright 2015-2020 | Xin Ning ")])],1)],1)])},_=[],y={name:"footerVue",data:function(){return{resumeLink:"/file/XinNing-Resume-CN.pdf"}},created:function(){},methods:{},watch:{"$i18n.locale":function(e,t){e!=t&&(this.resumeLink="zh_cn"==e?"/file/XinNing-Resume-CN.pdf":"/file/XinNing-Resume-EN.pdf")}}},w=y,C=(n("ef80"),Object(f["a"])(w,k,_,!1,null,"9e439a16",null)),S=C.exports,x={name:"App",components:{navMain:b,footerVue:S}},j=x,E=(n("7faf"),Object(f["a"])(j,i,o,!1,null,null,null)),A=E.exports,M=(n("d3b7"),n("8c4f"));a["default"].use(M["a"]);var L=M["a"].prototype.push;M["a"].prototype.push=function(e){return L.call(this,e).catch((function(e){return e}))};var P=[{path:"/",name:"Home",component:function(){return n.e("chunk-2e97d786").then(n.bind(null,"22cd"))},meta:{keepAlive:!0}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-0e9c11a9").then(n.bind(null,"c42e"))},meta:{keepAlive:!0},children:[{path:"magicBox",name:"MagicBox",component:function(){return Promise.all([n.e("chunk-7998db36"),n.e("chunk-7029d9b2")]).then(n.bind(null,"3ec3"))},meta:{keepAlive:!1}},{path:"luggageDecalSplatter",name:"LuggageDecalSplatter",component:function(){return n.e("chunk-392a8890").then(n.bind(null,"f3ed"))},meta:{keepAlive:!1}},{path:"forFun",name:"ForFun",component:function(){return n.e("chunk-4f3b7e5e").then(n.bind(null,"b155"))},meta:{keepAlive:!1}}]},{path:"/skills",name:"Skills",component:function(){return Promise.all([n.e("chunk-7998db36"),n.e("chunk-b9859f0e")]).then(n.bind(null,"632e"))},meta:{keepAlive:!1}},{path:"/aboutme",name:"Aboutme",component:function(){return n.e("chunk-2d0a3577").then(n.bind(null,"0287"))},meta:{keepAlive:!0}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-0e96e2f8").then(n.bind(null,"42d4"))},meta:{keepAlive:!0}},{path:"/threejs",name:"threejs",component:function(){return Promise.all([n.e("chunk-7998db36"),n.e("chunk-7029d9b2")]).then(n.bind(null,"3ec3"))},meta:{keepAlive:!0}}],I=function(e,t,n){return e.hash?{selector:e.hash}:{x:0,y:0}},N=new M["a"]({routes:P,scrollBehavior:I,mode:"history"}),T=N,O=n("a925"),$={footer:{resume:"导出简历",coverletter:"导出CV"},home:{name:"宁鑫",title:"前端开发工程师",subtitle:"(网页/安卓/iOS)",info:{DoB:"1989/10/07"},intro:'["嗨，我是宁鑫.", "欢迎来到我的个人主页！", "我具有很好的学习能力，并且我非常喜欢开发","我擅长JavaScript, Jquery, Vue, HTML5 and CSS3."]',welcome:["欢迎来到本人的主页","在这里，您可以找到我的最新工作作品，我的相关技术，以及我的","简历","",".","如果您有项目或者技术问题需要帮助，请给我发送邮件，邮件地址是："," 或者您可以在联系页面填写","联系信息。"],aboutme:"关于本人",myprojects:"我的项目",myskills:"我的技术栈",keepLearning:["不断学习，不断成长","一旦你停止学习,你就会开始死亡 ","阿尔伯特 · 爱因斯坦"]},homeProject:{list1:{title:"当前工作",responsibility:["维护和修改公司的电商网站","作为项目管理助理管理前端团队","使用Three.js设计并开发关于3D项目的App"],childList:[{title:"电商网站",txt:["Import Express","Kids Charming","Pet Store"]},{title:"Luggage decal(行李箱涂鸦)",txt:["选择或者上传涂鸦图片并绘制到箱子上","绘制图片前后，用户可以改变涂鸦大小，旋转方向以及位置"]},{title:"MagicBox App",txt:["MagicBox是针对于小孩教育的一款Three.js的App","用户可以使用默认的几何模型或者卡通模型来搭建模型"]}]},list2:{title:"Latest work",responsibility:["Maintaining & modifying E-commerce website","Managing front-end team as a project manager assistant","Utilizing the Three.js to design and build 3D related WebApps."]},list3:{title:"教育经历",responsibility:["费尔菲尔德大学","软件工程硕士","平均成绩: 3.50/ 4.0","2016年1月-2018年五月"],childList:[{title:"费尔菲尔德大学",txt:["软件工程硕士","平均成绩: 3.50/ 4.0","2016年1月-2018年5月"]},{title:"海口经济学院",txt:["工程管理 管理学学士","平均成绩: 3.45/4.0","2010年9月-2014年6月"]}]}},nav:{home:"首页",skills:"技术栈",Projects:"项目",AboutMe:"关于我",contact:"联系我"},contact:{tagInfo:["上海凯融信息公司","地址：云岭东路汇银铭尊一号楼605室","I'm working here"],topTitle:["想要联系宁鑫","这里有几种方法可以和我联系"],getInTouch:["我很平易近人，很想和你谈谈。","请随时致电，给我们发邮件，facebook我或简单地填写查询表。"],message:["姓名","邮件地址","手机号码","标题","内容","提交"],validation:["* 请输入姓名","* 请输入邮箱地址","* 请检查你的邮箱地址","* 请输入手机号码","* 请输入标题","* 请输入消息内容","* 网络错误, 请稍后重试！","提交成功！我将会在24小时内回复您。"]},projects:{bannerInfo:"我即擅长独立工作，同时又擅长处理多项任务。更重要的是，我一直是一个很好的团队成员，有团队精神。",tip:"点击开始"},skills:{bannerInfo:"",devSkill:"开发技能",SoftSkill:"软性技巧",infor:["技能和经验","我主要专注于前端开发.","使用 HTML, CSS, JS, JQuery, vue.js 和 three.js 开发电商网站和app."]}},B=$,D={footer:{resume:"Resume",coverletter:"Cover Letter"},home:{name:"Xin Ning",title:"Front-end Developer",subtitle:"(Web/Android/iOS)",info:{DoB:"1989/10/07"},intro:'[ "Hi, I am Xin Ning.", " Welcome to my personal website.", "I am Creative, and I Love to Develop.", "I am Good at JavaScript, Jquery, Vue, HTML5 and CSS3."]',welcome:["You've found yourself at the online home of Xin Ning, a Front-end Developer.","Here you'll find a selection of my latest work, stats about my skills and a link to my ","resume"," and ","cv(pdf).","If you have a project or need some extra help, please drop me an email at"," alternatively you can fill out my contact form in the ","Contact page."],aboutme:"About Me",myprojects:"My Projects",myskills:"My Skills",keepLearning:["KEEP LEARNING, KEEP GROWING","Once you stop learning, you start dying.","Albert Einstein"]},homeProject:{list1:{title:"Last work",responsibility:["Maintaining & modifying E-commerce website","Managing front-end team as a project manager assistant","Utilizing the Three.js to design and build 3D related WebApps (Android && iOS)"],childList:[{title:"E-commerce websites",txt:["Import Express","Kids Charming","Pet Store"]},{title:"Luggage decal",txt:["Pick or upload decals to  on luggage","Before and after shooting the decal, users can change the decal size and rotation and position"]},{title:"MagicBox App",txt:["MagicBox for kids education based on Three.js","Build modules by using default geometries"]}]},list2:{title:"Latest work",responsibility:["Maintaining & modifying E-commerce website","Managing front-end team as a project manager assistant","Utilizing the Three.js to design and build 3D related WebApps."]},list3:{title:"Education",responsibility:["Fairfield University","Master of Science in Software Engineering","GPA: 3.50/ 4.0","January 2016 to May 2018"],childList:[{title:"Fairfield University",txt:["Master of Science in Software Engineering","GPA: 3.50/ 4.0","January 2016 to May 2018"]},{title:"Haikou University Of Economics",txt:["Bachelor of Science in Engineering Management","GPA: 3.45/4.0","September 2010 to June 2014"]}]}},nav:{home:"Home",skills:"Skills",Projects:"Portfolio",AboutMe:"About Me",contact:"Contact"},contact:{tagInfo:["Shanghai Kairong Information Technology Co., Lt","Address: 601 Yunling Lu, Shanghai, China, 200062","I'm working here"],topTitle:["Want to contact Xin Ning","Here are few ways to get in touch with me"],getInTouch:["I'm very approachable and would love to speak to you.","Feel free to call, send us an email, facebook me or simply complete the enquiry form."],message:["YOUR NAME","EMAIL ADDRESS","TELEPHONE NUMBER","SUBJECT","YOUR MESSAGE","SUBMIT"],validation:["* Please input your name","* Please input your email address","* Please enter a valid email address.","* Please input your telephone number","* Please input your subject","* Please input your message","* Network error, please try again later","Succeeded, I will give you back within 24 hours, Thanks."]},projects:{bannerInfo:"I'm able to work independently and handle multiple tasks at the same time. More importantly, I am always a good team member with a team-oriented spirit in my mind.",tip:"Click Here to Play"},skills:{bannerInfo:"",devSkill:"Developer Skills",SoftSkill:"Soft Skills",infor:["Skills & Experience","The main area of my expertise is front end development.","HTML, CSS, JS, JQuery, building e-commerce web and web apps with vue.js and threejs."]}},H=D,X=function(e){if(e)return window.localStorage.getItem(e)};a["default"].use(O["a"]);var R,U,J=new O["a"]({locale:X("locale")||"en_us",messages:{zh_cn:B,en_us:H}}),z=J,F=n("2f62"),G={locale:X("locale")||"en_us",recruitScrollY:0},W=n("ade3"),K="CURRENT_LANGUAGE",Y=0,q=(R={},Object(W["a"])(R,K,(function(e){var t=X("locale")||"en_us";t&&(e.locale=t)})),Object(W["a"])(R,Y,(function(e,t){e.recruitScrollY=t})),R),V={},Q=(U={},Object(W["a"])(U,K,(function(e){var t=e.locale||X("locale")||"en_us";return t})),Object(W["a"])(U,Y,(function(e){var t=e.recruitScrollY||0;return t})),U);a["default"].use(F["a"]);var Z=new F["a"].Store({state:G,mutations:q,actions:V,getters:Q}),ee=(n("cbd7"),n("7371"),n("aa47"),n("2f74"),n("be35"),n("fe3c")),te=n.n(ee),ne=n("5c96"),ae=n.n(ne),ie=(n("0fae"),n("bc3a")),oe=n.n(ie),se=n("4328"),re=n.n(se),le=n("caf9"),ce=n("7212"),ue=n.n(ce),de=(n("bbe3"),n("bd0c")),fe=n.n(de);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",(function(){te.a.attach(document.body)}),!1),a["default"].use(F["a"]),a["default"].use(ae.a),oe.a.defaults.withCredentials=!0,a["default"].prototype.$ajax=oe.a,oe.a.defaults.baseURL="",a["default"].prototype.$qs=re.a,a["default"].use(le["a"],{preLoad:1.3,error:"/image/error.png",loading:"/image/loading.gif",attempt:1}),a["default"].use(ue.a),a["default"].use(fe.a,{ak:"ltMWgFXjRibfXcKgWjDPfsSuQidpINet"}),a["default"].config.productionTip=!1,new a["default"]({router:T,i18n:z,render:function(e){return e(A)},data:function(){return{focusedTransformObj:null,deleteObjFlag:null}},store:Z}).$mount("#app")},7371:function(e,t,n){},"7faf":function(e,t,n){"use strict";var a=n("b8ff"),i=n.n(a);i.a},"86a6":function(e,t,n){},aa47:function(e,t,n){},b8ff:function(e,t,n){},be35:function(e,t,n){},cbd7:function(e,t,n){},da74:function(e,t,n){"use strict";(function(e){n("b0c0");t["a"]={name:"navEl",data:function(){return{currrent_lang:"en_us",navIndex:0,lastScrollTop:0,fixedHide:!1,fixedShow:!1}},methods:{changeLanguage:function(e){"zh_cn"==e?(this.$i18n.locale="zh_cn",this.currrent_lang="zh_cn",localStorage.setItem("locale","zh_cn")):"en_us"==e&&(this.$i18n.locale="en_us",this.currrent_lang="en_us",localStorage.setItem("locale","en_us"))},getCurrentLang:function(){this.currrent_lang=localStorage.getItem("locale")||"en_us"},navPosition:function(){var t=100,n=e(window).scrollTop();n>=t?(this.fixedHide=!0,n-this.lastScrollTop<=0?this.fixedShow=!0:this.fixedShow=!1):this.fixedHide=!1,this.lastScrollTop=n}},mounted:function(){this.getCurrentLang(),window.addEventListener("scroll",this.navPosition)},destroyed:function(){window.removeEventListener("scroll",this.navPosition)},deactivated:function(){window.removeEventListener("scroll",this.navPosition)},watch:{$route:function(e,t){switch(e.name){case"Skills":this.navIndex=2;break;case"Projects":this.navIndex=3;break;case"Aboutme":this.navIndex=4;break;case"Contact":this.navIndex=5;break;default:this.navIndex=1}}}}}).call(this,n("1157"))},ef80:function(e,t,n){"use strict";var a=n("86a6"),i=n.n(a);i.a}});
//# sourceMappingURL=app.692daa24.js.map