(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{48:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return d}));var r=n(51),a=n.n(r),c=n(52),u=n(53),s={BASE:"https://api.themoviedb.org/3",IMG:"https://image.tmdb.org/t/p/w342",PATH:"movie",HOME:"trending",SEARCH:"search",KEY:"d59d4b143292fc56b6769ba48f713e41"};function i(t){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("".concat(s.HOME,"/").concat(s.PATH,"/").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("".concat(s.SEARCH,"/").concat(s.PATH),{params:{language:"en-US",query:e,include_adult:!1}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function t(e,n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("".concat(s.PATH,"/").concat(n).concat(e),{params:{language:"en-US"}});case 2:return r=t.sent,c=r.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.defaults.baseURL=s.BASE,u.defaults.params={api_key:s.KEY}},84:function(t,e,n){t.exports={title:"PageHeading_title__2tMCr"}},92:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(5),a=n(0),c=n(1),u=n(6),s=n(48),i=n(84),o=n.n(i),p=n(2);function f(t){var e=t.text;return Object(p.jsx)("h1",{className:o.a.title,children:e})}function d(){var t=Object(c.e)(),e=Object(a.useState)(null),n=Object(r.a)(e,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){Object(s.d)("day").then(o)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{text:"Trending today"}),i&&Object(p.jsx)("ul",{children:i.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"movies/".concat(e.id),state:{from:t,label:"Go to Home"},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=HomePage.cdb135d1.chunk.js.map