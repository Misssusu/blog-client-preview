(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b5a5614"],{"2d14":function(t,a,e){"use strict";var n=e("4650"),s=e.n(n);s.a},4650:function(t,a,e){},"64eb":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"index"}},[e("section",t._l(t.blogs,(function(a){return e("router-link",{key:a.id,staticClass:"item",attrs:{to:"/detail/"+a.id}},[e("figure",{staticClass:"avatar"},[e("img",{attrs:{src:a.user.avatar,alt:a.user.username}}),e("figcaption",[t._v(t._s(a.user.username))])]),e("h3",[t._v(t._s(a.title)+" "),e("span",[t._v(t._s(t.formatDate(a.createdAt)))])]),e("p",[t._v(t._s(a.description))])])})),1),e("section",{staticClass:"pagination"},[e("el-pagination",{attrs:{"current-page":t.page,layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],1)])},s=[],o=e("864d"),r={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,o["a"].getIndexBlogs({page:this.page}).then((function(a){t.blogs=a.data,t.total=a.total,t.page=a.page}))},methods:{onPageChange:function(t){var a=this;console.log(t),o["a"].getIndexBlogs({page:t}).then((function(e){a.blogs=e.data,a.total=e.total,a.page=e.page,a.$router.push({path:"/",query:{page:t}})}))}}},i=r,u=(e("2d14"),e("2877")),l=Object(u["a"])(i,n,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5b5a5614.3aac79ab.js.map