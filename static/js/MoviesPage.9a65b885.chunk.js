(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{48:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));var a=r(52),n=r.n(a),c=r(53),s=r(49),u=r(54),i={url:"",PATH_HOME:"trending/movie",PATH_SEARCH:"search/movie",params:{api_key:"".concat(s.a.KEY),page:1},params_search:{language:"en-US",query:"",include_adult:!1},fetchArticles:function(t){var e=this;return Object(c.a)(n.a.mark((function r(){var a,c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.url="search"===t?"".concat(s.a.BASE,"/").concat(e.PATH_SEARCH,"?").concat(new URLSearchParams(e.params).toString(),"&").concat(new URLSearchParams(e.params_search).toString()):"".concat(s.a.BASE,"/").concat(e.PATH_HOME,"/").concat(t,"?").concat(new URLSearchParams(e.params).toString()),r.next=3,u.get(e.url);case 3:return a=r.sent,c=a.data,r.abrupt("return",c.results);case 6:case"end":return r.stop()}}),r)})))()},incrementPage:function(){this.params.page+=1},resetPage:function(){this.params.page=1},get page(){return this.params.page},set page(t){this.params.page=t},get searchQuery(){return this.params_search.query},set searchQuery(t){this.params_search.query=t}},o={PATH:"movie",params:{api_key:"".concat(s.a.KEY),language:"en-US"},fetchArticles:function(t,e){var r=this;return Object(c.a)(n.a.mark((function a(){var c,i,o;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c="".concat(s.a.BASE,"/").concat(r.PATH,"/").concat(e).concat(t,"?").concat(new URLSearchParams(r.params).toString()),a.next=3,u.get(c);case 3:return i=a.sent,o=i.data,a.abrupt("return",o);case 6:case"end":return a.stop()}}),a)})))()}}},49:function(t,e,r){"use strict";e.a={BASE:"https://api.themoviedb.org/3",KEY:"d59d4b143292fc56b6769ba48f713e41",W342_IMG_URL:"https://image.tmdb.org/t/p/w342",W500_IMG_URL:"https://image.tmdb.org/t/p/w500",W780_IMG_URL:"https://image.tmdb.org/t/p/w780",TRAILER:"https://www.youtube.com/embed/"}},55:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r(56),n=r.n(a),c=r(2);function s(t){var e=t.type,r=t.forClick,a=t.children;return Object(c.jsx)("button",{type:e,className:n.a.btn,onClick:r,children:a})}s.defaultProps={onClick:function(){return null},children:null}},56:function(t,e,r){t.exports={btn:"Button_btn__19gL7"}},92:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return b}));var a=r(5),n=r(6),c=r(0),s=r(65),u=r(55),i=r(2);function o(t){var e=t.forSearch,r=t.search,n=Object(c.useState)(""),o=Object(a.a)(n,2),h=o[0],p=o[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(h)},children:[Object(i.jsx)("input",{placeholder:null!==r&&void 0!==r?r:"Look for a movie...",onChange:function(t){return p(t.target.value)}}),Object(i.jsxs)(u.a,{type:"submit",children:[Object(i.jsx)(s.b,{style:{marginRight:8,marginBottom:-1}}),"Search"]})]})}var h=r(1),p=r(48);function f(t){var e=t.search,r=Object(h.e)(),s=Object(c.useState)([]),u=Object(a.a)(s,2),o=u[0],f=u[1];return Object(c.useEffect)((function(){e&&(p.a.searchQuery=e,p.a.fetchArticles("search").then((function(t){return f(t)})))}),[e]),Object(i.jsx)("ul",{children:o.map((function(t){return Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"".concat(t.id),state:{from:r,label:"Go to Search"},children:t.title})},t.id)}))})}function b(){var t=Object(n.d)(),e=Object(a.a)(t,2),r=e[0],c=e[1],s=r.get("search");return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{forSearch:function(t){return c({search:t})},search:s}),Object(i.jsx)(f,{search:s})]})}}}]);
//# sourceMappingURL=MoviesPage.9a65b885.chunk.js.map