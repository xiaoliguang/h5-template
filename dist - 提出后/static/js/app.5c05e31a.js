(function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],u=0,f=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function s(e){return a.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"2c2aec5f"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07a8":function(e,t,n){"use strict";n("8973")},"14ac":function(e,t,n){"use strict";n("372c")},"2a45":function(e,t,n){},"323a":function(e,t,n){"use strict";n.r(t);var o=n("8bbf"),r=n.n(o),i=".toast {position: fixed;left: 50%;top: 50%;line-height: 1.5;box-sizing: border-box;color: #fff;transform: translate(-50%, -50%);z-index: 101;width: 100%;text-align: center;}.toast .info {padding: 1.6vw 5.3vw;font-size:4.267vw;border-radius: 1.067vw;max-width: 77.33%;background: rgba(0, 0, 0, 0.8);box-sizing: border-box;text-align: center;display: inline-block;word-break: break-all;max-height: 16vw;}",s=new r.a({data:function(){return{toast:null}},render:function(e){return e("div",{style:{display:this.toast?"inline-block":"none"},class:{toast:!0}},[e("div",{class:{info:!0},domProps:{innerHTML:this.toast}})])},methods:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,n=this;n.toast=e,setTimeout((function(){n.toast=null}),t)}}}).$mount(),a=!1;t["default"]=function(e){e.prototype.$Toast=function(){for(var t=this,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.nextTick((function(){if(!a){var e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(i)),document.getElementsByTagName("head")[0].appendChild(e),t.$root.$el.appendChild(s.$el),a=!0}s.show.apply(t,o)}))}}},3592:function(e,t,n){},"372c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var o=n("8bbf"),r=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],a=n("2877"),c={},l=Object(a["a"])(c,i,s,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6389")),f=n.n(d),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" home ")])},m=[],v={data:function(){return{}},computed:{},components:{},methods:{},created:function(){dd}},h=v,b=Object(a["a"])(h,p,m,!1,null,"f664148c",null),g=b.exports;r.a.use(f.a);var y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],w=new f.a({mode:"history",base:"",routes:y}),x=w,k=n("5880"),_=n.n(k);r.a.use(_.a);var C,T,O=new _.a.Store({state:{age:18},mutations:{},actions:{},modules:{}}),j=n("6912"),$=(n("2a45"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-message-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:["el-message",e.type?"el-message--"+e.type:"",e.center?"is-center":"",e.showClose?"is-closable":"",e.customClass],style:e.positionStyle,on:{mouseenter:e.clearTimer,mouseleave:e.startTimer}},[e._t("default",[e.dangerouslyUseHTMLString?n("p",{staticClass:"el-message__content",domProps:{innerHTML:e._s(e.message)}}):n("p",{staticClass:"el-message__content"},[e._v(" "+e._s(e.message)+" ")])]),e.showClose?n("i",{staticClass:"el-message__closeBtn el-icon-close",on:{click:e.close}}):e._e()],2)])}),S=[],E={name:"",directives:{},components:{},mixins:[],props:{},data:function(){return{visible:!1,message:"",duration:3e3,customClass:"",type:"info",timer:null,verticalOffset:20,onClose:null,dangerouslyUseHTMLString:!1,center:!1,showClose:!0}},computed:{positionStyle:function(){return{top:"".concat(this.verticalOffset,"px")}}},mounted:function(){this.startTimer(),document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.visible=!1},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout((function(){e.visible=!1}),this.duration))},keydown:function(e){27===e.keyCode&&(this.closed||(this.visible=!1))}}},N=E,L=(n("14ac"),Object(a["a"])(N,$,S,!1,null,"d1e7de9c",null)),P=L.exports,M=r.a.extend(P),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"string"===typeof e&&(e={message:e}),C=new M({data:e}),C.$mount(),document.body.appendChild(C.$el),C.visible=!0,C},D=A,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-message-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}],style:{backgroundColor:e.backround||""}},[n("div",{staticClass:"el-loading-spinner"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),e.text?n("p",{staticClass:"el-loading-text"},[e._v(" "+e._s(e.text)+" ")]):e._e()])])])},B=[],I={name:"",directives:{},components:{},mixins:[],props:{},data:function(){return{text:"啦啦啦",visible:!0,fullscreen:null,backround:null,customClass:""}},computed:{},mounted:function(){},beforeDestroy:function(){},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.visible=!1}}},z=I,J=(n("5eff"),Object(a["a"])(z,H,B,!1,null,"c8bb8de4",null)),U=J.exports,V=r.a.extend(U),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return T=new V({data:e}),T.$mount(),document.body.appendChild(T.$el),T.visible=!0,T},q=R,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.scrollTop>e.visibilityHeight?n("div",{staticClass:"el-backtop",style:{right:e.styleRight,bottom:e.styleBottom},on:{click:e.handleClick}}):e._e()},G=[],K=(n("a9e3"),{name:"Backtop",directives:{},components:{},mixins:[],props:{visibilityHeight:{type:Number,default:200},right:{type:Number,default:40},bottom:{type:Number,default:40}},data:function(){return{scrollTop:0}},computed:{styleBottom:function(){return"".concat(this.bottom,"px")},styleRight:function(){return"".concat(this.right,"px")}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){},methods:{handleClick:function(){this.scroll(),this.$emit("click")},handleScroll:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop},scroll:function(){var e=this.scrollTop;e>0&&(window.requestAnimationFrame(this.scroll),window.scrollTo(0,e-e/8))}}}),Q=K,W=(n("07a8"),Object(a["a"])(Q,F,G,!1,null,"3c938a72",null)),X=W.exports;X.install=function(e){e.component(X.name,X)};var Y=X;r.a.component(Y.name,Y);var Z=function(e){e.prototype.$message=D,e.prototype.$loading=q};r.a.use(Z),r.a.use(j["default"]),console.log("process.env.NODE_ENV：production"),r.a.config.productionTip=!1,new r.a({router:x,store:O,render:function(e){return e(u)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5b42":function(e,t,n){"use strict";n.r(t);var o=n("d4ec"),r=n("bee2"),i=function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:999999999999,o=parseInt(Date.now()/1e3),r={t:o+n,c:t};try{localStorage.setItem(e,JSON.stringify(r))}catch(i){console.warn("本地缓存满，全部清空"),localStorage.clear()}}},{key:"get",value:function(e){var t=parseInt(Date.now()/1e3),n=localStorage.getItem(e);if(n){var o=JSON.parse(n);if(o.t&&o.t>t)return console.debug("本地缓存获取成功 key:["+e+"] 还有过期"+(o.t-t)+"秒过期"),o.c;localStorage.removeItem(e),console.warn("本地缓存获取超时 key:["+e+"]")}return null}},{key:"del",value:function(e){localStorage.removeItem(e)}}]),e}();t["default"]=function(e,t){e.Storage=new i(t),Object.defineProperties(e.prototype,{$Storage:{get:function(){return e.Storage}}})}},"5eff":function(e,t,n){"use strict";n("3592")},6300:function(e,t,n){"use strict";n.r(t),n.d(t,"_cookie",(function(){return s}));var o=n("d4ec"),r=n("bee2"),i=(n("1276"),n("ac1f"),n("498a"),n("99af"),function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"get",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){var r=n[o].trim();if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var r="expires"+o.toGMTString();document.cookie="".concat(e,"=").concat(t,";").concat(r)}},{key:"del",value:function(e){this.set(e,null,-1)}}]),e}()),s=new i;t["default"]=function(e,t){e.Cookie=new i(t),Object.defineProperties(e.prototype,{$Cookie:{get:function(){return e.Cookie}}})}},6389:function(e,t){e.exports=VueRouter},6912:function(e,t,n){"use strict";n.r(t);n("159b"),n("d3b7"),n("ddb0");var o=n("f666");t["default"]=function(e){o.keys().forEach((function(t){if("./index.js"!==t){var n=o(t);e.use(n.default||n)}}))}},8973:function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},f666:function(e,t,n){var o={"./Cookie.js":"6300","./Storage.js":"5b42","./Toast.js":"323a","./index.js":"6912"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="f666"}});