(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(10),a=n.n(r),i=(n(9),n(15),n(2)),s=(n(16),n(0)),o=function(e){var t=e.title,n=e.alt,c=e.src,r=e.id;return Object(s.jsxs)("div",{className:"gif",children:[Object(s.jsx)("h4",{children:t}),Object(s.jsx)("img",{src:c,alt:n},r)]})},l=function(e){var t=e.keyword,n=e.gif;return null===t||null===n?null:Object(s.jsx)(s.Fragment,{children:n.data.map((function(e){return Object(s.jsx)(o,{title:e.title,src:e.images.downsized_medium.url,alt:t.name,id:e.id,lazy:"loading"},e.id)}))})},j=(n(18),function(){return Object(s.jsxs)("div",{className:"lds-facebook",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})}),u=n(8),d=function(){var e=function(e,t){var n={accept:"application/json"},c=new AbortController;return t.signal=c.signal,t.method=t.method||"GET",t.headers=t.headers?Object(u.a)(Object(u.a)({},n),t.headers):n,t.body=JSON.stringify(t.body)||!1,t.body||delete t.body,setTimeout((function(){return c.abort()}),3e3),fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject({err:!0,status:e.status||"00",statusText:e.statusText||"Ocurri\xf3 un error"})})).catch((function(e){return e}))};return{get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(t,n)},post:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="POST",e(t,n)},put:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="PUT",e(t,n)},del:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="DELETE",e(t,n)}}},h="CChSuS3Vxj70rZX2VVMQimpT6P0dEFxi&q",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{keyword:null},t=e.keyword,n=Object(c.useState)(null),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)([]),l=Object(i.a)(o,2),j=l[0],u=l[1];return Object(c.useEffect)((function(){u(!0);var e=t||localStorage.getItem("lastKeyword")||"random",n="https://api.giphy.com/v1/gifs/search?api_key=".concat(h,"=").concat(e,"&limit=12&offset=0&rating=g&lang=en");d().get(n).then((function(e){e.err?(s(null),console.log("jejeje")):(s(e),localStorage.setItem("lastKeyword",t)),u(!1)}))}),[t]),{loading:j,gif:a}},f=(n(19),n(6)),O=(n(20),function(e){var t=e.handleSearch,n=Object(c.useState)({name:""}),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.name.value?t(a):t(null),o({name:""})},children:[Object(s.jsx)("input",{className:"gif-search-input",type:"text",name:"name",value:a.name,placeholder:"Search gif...",onChange:function(e){o(Object(f.a)({},e.target.name,e.target.value))}}),Object(s.jsx)("input",{type:"submit",value:"Search"})]})})}),m=n(3),g=function(e){var t=e.params.search,n=Object(m.c)(),r=Object(i.a)(n,2),a=(r[0],r[1]),o=Object(c.useState)(!1),u=Object(i.a)(o,2),d=(u[0],u[1]),h=b({keyword:t}),f=h.loading,g=h.gif;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{handleSearch:function(e){null!==e?(d(!1),a("/search/".concat(e.name))):d(!0)}}),Object(s.jsxs)("div",{className:"searchEnd",children:[f&&Object(s.jsx)(j,{}),t&&!f&&Object(s.jsx)(l,{gif:g,keyword:t})]})]})},x=(n(21),["Morty","Rick","Futurama","Goku"]),p=function(e){var t=e.params,n=Object(m.c)(),r=Object(i.a)(n,2),a=r[0],o=r[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),d=u[0],h=u[1],f=t,g=b(),p=g.loading,v=g.gif;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{className:"app-description",children:["Generador de Gif's consumiendo la"," ",Object(s.jsx)("a",{href:"https://giphy.com/",target:"_blank",rel:"noreferrer",children:"APi de Giphy"}),"."]}),Object(s.jsx)(O,{handleSearch:function(e){null!==e?(h(!1),o("/search/".concat(e.name))):h(!0)},path:a}),!0===d&&Object(s.jsx)("h3",{children:"Form Empty"}),Object(s.jsx)("h3",{children:"\xdaltima b\xfasqueda"}),Object(s.jsx)("article",{className:"searchEnd",children:f&&!p&&Object(s.jsx)(l,{gif:v,keyword:f})}),Object(s.jsx)("h3",{children:"Los gifs m\xe1s populares"}),Object(s.jsxs)("ul",{children:[x.map((function(e){return Object(s.jsx)("li",{className:"link",children:Object(s.jsxs)(m.a,{to:"/search/".concat(e),children:["Gifs de ",e]})},e)})),Object(s.jsx)("li",{})]})]})},v=function(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Desarrollado por Matias Sierra ",Object(s.jsx)("i",{children:"\ud83e\uddd1\u200d\ud83d\udcbb"}),"con mucho ",Object(s.jsx)("i",{children:"\u2615"})]})})};var y=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("section",{children:[Object(s.jsx)(m.a,{className:"app-title",to:"/",children:"GiphySearch"}),Object(s.jsx)(m.b,{component:g,path:"/search/:search"}),Object(s.jsx)(m.b,{component:p,path:"/"})]}),Object(s.jsx)(v,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};a.a.render(Object(s.jsx)(c.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),S()}],[[22,1,2]]]);
//# sourceMappingURL=main.213560b8.chunk.js.map