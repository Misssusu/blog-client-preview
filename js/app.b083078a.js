(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-00468a08":"1edc9ed3","chunk-09effbfa":"b15a31fa","chunk-295e50cc":"452d3002","chunk-4adebb75":"2fb8aa44","chunk-6da4578a":"2077b9bd","chunk-71fa9768":"63ee2ab1","chunk-9cad77c4":"a124437a","chunk-edb92e78":"7d6fb566"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-00468a08":1,"chunk-09effbfa":1,"chunk-295e50cc":1,"chunk-4adebb75":1,"chunk-6da4578a":1,"chunk-71fa9768":1,"chunk-9cad77c4":1,"chunk-edb92e78":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-00468a08":"59eb2dea","chunk-09effbfa":"19c4dc30","chunk-295e50cc":"24246d81","chunk-4adebb75":"c83dedde","chunk-6da4578a":"c47c4b4e","chunk-71fa9768":"7b8783e3","chunk-9cad77c4":"42e7ddeb","chunk-edb92e78":"11ffb277"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/blog-client-preview/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2922:function(e,t,n){"use strict";var r=n("3eee"),o=n.n(r);o.a},"2b7c":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("bc3a"),o=n.n(r),a=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,u){var i={url:e,method:t};"get"===t.toLowerCase()?i.params=n:i.data=n,o()(i).then(function(e){"ok"===e.data.status?r(e.data):(a["Message"].error(e.data.msg),u(e.data))}).catch(function(e){a["Message"].error("网络异常"),u({msg:"网络异常"})})})}o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.defaults.baseURL="https://blog-server.hunger-valley.com",o.a.defaults.withCredentials=!0},3393:function(e,t,n){"use strict";var r=n("f930"),o=n.n(r);o.a},"3eee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{id:"header"}}),n("main",{attrs:{id:"main"}},[n("router-view")],1),n("Footer",{attrs:{id:"footer"}})],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("h1",[e._v("Let's share")]),n("p",[e._v("精品博客汇聚")]),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/signin"}},[n("el-button",[e._v("立即登录")])],1),n("router-link",{attrs:{to:"/signup"}},[n("el-button",[e._v("注册账号")])],1)],1)],e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("Let's share")])],1),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),n("div",{staticClass:"user"},[n("div",{staticClass:"dropdown"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}})]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/profile"}},[n("i",{staticClass:"iconfont"},[e._v("")]),n("span",[e._v("我的")])])],1),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"iconfont exit"},[e._v("")]),n("span",{on:{click:e.onLogout}},[e._v("注销")])])])])])]:e._e()],2)},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62");function l(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={data:function(){return{}},computed:d({},Object(s["c"])(["isLogin","user"])),created:function(){this.checkLogin()},methods:d({},Object(s["b"])(["checkLogin","logout"]),{onLogout:function(){var e=this;this.logout().then(function(t){e.$router.push("/")})}})},p=f,g=(n("2922"),n("2877")),h=Object(g["a"])(p,u,i,!1,null,null,null),b=h.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("© xiedaimala.com 2018 wechat: xiedaimala01")])])}],k={},w=k,O=(n("3393"),Object(g["a"])(w,v,m,!1,null,"56947628",null)),L=O.exports,y={name:"App",components:{Header:b,Footer:L}},E=y,I=(n("5c0b"),Object(g["a"])(E,o,a,!1,null,null,null)),j=I.exports,T=n("8c4f"),x=(n("96cf"),n("3b8d")),_=n("2b7c"),P={REGISTER:"/auth/register",LOGIN:"/auth/login",LOGOUT:"/auth/logout",GET_INFO:"/auth"},C={register:function(e){var t=e.username,n=e.password;return Object(_["a"])(P.REGISTER,"POST",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(_["a"])(P.LOGIN,"POST",{username:t,password:n})},logout:function(){return Object(_["a"])(P.LOGOUT)},getInfo:function(){return Object(_["a"])(P.GET_INFO)}},S={user:null,isLogin:!1},A={user:function(e){return e.user},isLogin:function(e){return e.isLogin}},D={setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},B={login:function(e,t){var n=e.commit,r=t.username,o=t.password;return C.login({username:r,password:o}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.username,a=n.password,e.next=4,C.register({username:o,password:a});case 4:return u=e.sent,r("setUser",{user:u.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",u.data);case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,console.log("logout"),e.next=4,C.logout();case 4:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),checkLogin:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.isLogin){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,C.getInfo();case 5:if(o=e.sent,n("setLogin",{isLogin:o.isLogin}),r.isLogin){e.next=9;break}return e.abrupt("return",!1);case 9:return n("setUser",{user:o.data}),e.abrupt("return",!0);case 11:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},G={state:S,getters:A,mutations:D,actions:B},R=n("864d"),U={title:"",description:"",content:"",atIndex:!1},M={createBlog:function(e,t){e.commit;var n=t.title,r=t.description,o=t.content,a=t.atIndex;R["a"].createBlog({title:n,description:r,content:o,atIndex:a}).then(function(e){console.log("success"+e)})}},N={state:U,actions:M};r["default"].use(s["a"]);var q=new s["a"].Store({modules:{auth:G,blog:N}});window.store=q,r["default"].use(T["a"]);var $=new T["a"]({routes:[{path:"/",component:function(){return n.e("chunk-9cad77c4").then(n.bind(null,"64eb"))}},{path:"/signin",component:function(){return n.e("chunk-edb92e78").then(n.bind(null,"3da6"))}},{path:"/detail/:blogId",component:function(){return n.e("chunk-09effbfa").then(n.bind(null,"fe00"))}},{path:"/edit/:blogId",component:function(){return n.e("chunk-4adebb75").then(n.bind(null,"ae89"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return n.e("chunk-71fa9768").then(n.bind(null,"9ecd"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return n.e("chunk-00468a08").then(n.bind(null,"7216"))}},{path:"/profile",component:function(){return n.e("chunk-6da4578a").then(n.bind(null,"67dd"))},meta:{requiresAuth:!0}},{path:"/signup",component:function(){return n.e("chunk-295e50cc").then(n.bind(null,"a05c"))}}]});$.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?(console.log(q.getters.isLogin),q.dispatch("checkLogin").then(function(t){t?n():n({path:"/signin",query:{redirect:e.fullPath}})})):n()});var F=$,H=n("5c96"),J=n.n(H),K=(n("0fae"),n("7618"));function z(e){var t="object"===Object(K["a"])(e)?e:new Date(e),n=t.getTime(),r=Date.now(),o=r-n,a="";switch(!0){case o<6e4:a="刚刚";break;case o<36e5:a=Math.floor(o/6e4)+"分钟前";break;case o<864e5:a=Math.floor(o/36e5)+"小时前";break;default:a=Math.floor(o/864e5)+"天前"}return a}var Q={install:function(e,t){e.prototype.formatDate=z}};r["default"].use(J.a),r["default"].use(Q),r["default"].config.productionTip=!1,new r["default"]({router:F,store:q,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"864d":function(e,t,n){"use strict";n("a481");var r=n("2b7c"),o={GET_LIST:"/blog",GET_DETAIL:"/blog/:blogId",CREATE:"/blog",UPDATE:"/blog/:blogId",DELETE:"/blog/:blogId"};t["a"]={getBlogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},t=e.page,n=void 0===t?1:t,a=e.userId,u=e.atIndex;return Object(r["a"])(o.GET_LIST,"GET",{page:n,userId:a,atIndex:u})},getIndexBlogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},t=e.page,n=void 0===t?1:t;return this.getBlogs({page:n,atIndex:!0})},getBlogsByUserId:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=t.page,r=void 0===n?1:n,o=t.atIndex;return this.getBlogs({userId:e,page:r,atIndex:o})},getDetail:function(e){var t=e.blogId;return Object(r["a"])(o.GET_DETAIL.replace(":blogId",t))},updateBlog:function(e,t){var n=e.blogId,a=t.title,u=t.content,i=t.description,c=t.atIndex;return Object(r["a"])(o.UPDATE.replace(":blogId",n),"PATCH",{title:a,content:u,description:i,atIndex:c})},deleteBlog:function(e){var t=e.blogId;return Object(r["a"])(o.DELETE.replace(":blogId",t),"DELETE")},createBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",content:"",description:"",atIndex:!1},t=e.title,n=void 0===t?"":t,a=e.content,u=void 0===a?"":a,i=e.description,c=void 0===i?"":i,s=e.atIndex,l=void 0!==s&&s;return Object(r["a"])(o.CREATE,"POST",{title:n,content:u,description:c,atIndex:l})}}},f930:function(e,t,n){}});
//# sourceMappingURL=app.b083078a.js.map