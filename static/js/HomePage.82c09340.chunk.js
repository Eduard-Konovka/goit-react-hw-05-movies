(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{48:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return u}));var r=a(52),n=a.n(r),c=a(53),s=a(49),i=a(54),o={url:"",PATH_HOME:"trending/movie",PATH_SEARCH:"search/movie",params:{api_key:"".concat(s.a.KEY),page:1},params_search:{language:"en-US",query:"",include_adult:!1},fetchArticles:function(t){var e=this;return Object(c.a)(n.a.mark((function a(){var r,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.url="search"===t?"".concat(s.a.BASE,"/").concat(e.PATH_SEARCH,"?").concat(new URLSearchParams(e.params).toString(),"&").concat(new URLSearchParams(e.params_search).toString()):"".concat(s.a.BASE,"/").concat(e.PATH_HOME,"/").concat(t,"?").concat(new URLSearchParams(e.params).toString()),a.next=3,i.get(e.url);case 3:return r=a.sent,c=r.data,a.abrupt("return",c.results);case 6:case"end":return a.stop()}}),a)})))()},incrementPage:function(){this.params.page+=1},resetPage:function(){this.params.page=1},get page(){return this.params.page},set page(t){this.params.page=t},get searchQuery(){return this.params_search.query},set searchQuery(t){this.params_search.query=t}},u={PATH:"movie",params:{api_key:"".concat(s.a.KEY),language:"en-US"},fetchArticles:function(t,e){var a=this;return Object(c.a)(n.a.mark((function r(){var c,o,u;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c="".concat(s.a.BASE,"/").concat(a.PATH,"/").concat(e).concat(t,"?").concat(new URLSearchParams(a.params).toString()),r.next=3,i.get(c);case 3:return o=r.sent,u=o.data,r.abrupt("return",u);case 6:case"end":return r.stop()}}),r)})))()}}},49:function(t,e,a){"use strict";e.a={BASE:"https://api.themoviedb.org/3",KEY:"d59d4b143292fc56b6769ba48f713e41",W342_IMG_URL:"https://image.tmdb.org/t/p/w342",W500_IMG_URL:"https://image.tmdb.org/t/p/w500",W780_IMG_URL:"https://image.tmdb.org/t/p/w780",TRAILER:"https://www.youtube.com/embed/"}},85:function(t,e,a){t.exports={title:"PageHeading_title__2tMCr"}},93:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return m}));var r=a(6),n=a(0),c=a(1),s=a(5),i=a(48),o=a(85),u=a.n(o),p=a(2);function h(t){var e=t.text;return Object(p.jsx)("h1",{className:u.a.title,children:e})}function m(){var t=Object(c.e)().pathname,e=Object(n.useState)(null),a=Object(r.a)(e,2),o=a[0],u=a[1];return Object(n.useEffect)((function(){i.a.fetchArticles("day").then(u)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{text:"Trending today"}),o&&Object(p.jsx)("ul",{children:o.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"movies/".concat(e.id),state:{from:{pathname:t,label:"Go to Home"}},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=HomePage.82c09340.chunk.js.map