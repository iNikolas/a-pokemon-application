(this["webpackJsonp13-a-pokemon-application-with-react"]=this["webpackJsonp13-a-pokemon-application-with-react"]||[]).push([[0],{18:function(e,t,r){e.exports={cardHeader:"CardTemplate_cardHeader__3-kHY",cardId:"CardTemplate_cardId___Q-_Z"}},50:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(14),i=r.n(a),s=r(13),o=r(11),d=r(21),l=Object(d.createApi)({reducerPath:"pokemonApi",baseQuery:Object(o.fetchBaseQuery)({baseUrl:""}),endpoints:function(e){return{getPokemon:e.query({query:function(e){return e}})}}}),u=l.useGetPokemonQuery,j=(l.usePrefetch,r(1));function b(e){var t=e.prevPageUrl,r=e.nextPageUrl,n=e.setPage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{disabled:!t,onClick:function(){return n(t)},children:"Previous"}),Object(j.jsx)("button",{disabled:!r,onClick:function(){return n(r)},children:"Next"})]})}var h=r(10),O=r(18),m=r.n(O);function x(e){var t=e.data,r=e.callback;return Object(j.jsxs)(h.a,{border:"dark",text:"secondary",bg:"warning",className:"mb-4 border-2",style:{width:"15rem",minHeight:"28rem",overflow:"hidden"},children:[Object(j.jsxs)(h.a.Header,{className:m.a.cardHeader,children:[Object(j.jsx)("h4",{children:t.name.toUpperCase()})," ",Object(j.jsx)("h4",{className:m.a.cardId,children:t.order})]}),Object(j.jsx)(h.a.Img,{variant:"top",src:t.sprites.other["official-artwork"].front_default}),Object(j.jsxs)(h.a.Body,{children:[Object(j.jsx)(h.a.Title,{children:"Abilities:"}),Object(j.jsx)(h.a.Text,{as:"div",children:Object(j.jsx)("ul",{ref:r,children:t.abilities.map((function(e){return Object(j.jsx)("li",{children:e.ability.name[0].toUpperCase()+e.ability.name.substr(1)},e.ability.name)}))})})]})]})}function p(e){var t=e.pokemonLink,r=e.callback,n=u(t),c=n.data,a=n.error,i=n.isLoading;return Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)(j.Fragment,{children:"Oh no, there was an error"}):i?Object(j.jsx)(j.Fragment,{children:"Loading..."}):c?Object(j.jsx)(x,{callback:r,data:c}):null})}var f=r(23),g=r(24),k=r(19),v=r.n(k);function w(){var e=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/?limit=10"),t=Object(s.a)(e,2),r=t[0],c=t[1],a=u(r),i=a.data,o=a.error,d=a.isLoading,l=Object(n.useState)(),h=Object(s.a)(l,2),O=h[0],m=h[1],x=Object(n.useState)(),k=Object(s.a)(x,2),w=k[0],P=k[1],y=Object(n.useState)(window.innerWidth),F=Object(s.a)(y,2),L=F[0],_=F[1];window.addEventListener("resize",(function(){return _(window.innerWidth)})),Object(n.useEffect)((function(){m(null===i||void 0===i?void 0:i.previous),P(null===i||void 0===i?void 0:i.next)}),[i]);var C=Object(n.useRef)(),I=Object(n.useCallback)((function(e){d||(C.current&&C.current.disconnect(),C.current=new IntersectionObserver((function(e){e[0].isIntersecting&&c(i.next)})),e&&C.current.observe(e))}),[i]),S=Object(n.useMemo)((function(){return i?i.results.map((function(e,t){return i.results.length===t+1?Object(j.jsx)(v.a,{children:Object(j.jsx)(p,{callback:I,pokemonLink:e.url})},e.name):Object(j.jsx)(v.a,{children:Object(j.jsx)(p,{pokemonLink:e.url})},e.name)})):null}),[i]),U=Object(n.useRef)([]);return Object(n.useEffect)((function(){S&&U.current.push(S)}),[S]),Object(j.jsx)(j.Fragment,{children:o?Object(j.jsx)(j.Fragment,{children:"Oh no, there was an error"}):d&!U.current.length?Object(j.jsx)(j.Fragment,{children:"Loading..."}):U.current.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:["Total pokemon count: ",i.count," and Window width: ",L]}),Object(j.jsx)(f.a,{children:Object(j.jsx)(g.a,{children:U.current})}),Object(j.jsx)(b,{prevPageUrl:O||null,nextPageUrl:w||null,setPage:c})]}):null})}var P=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(w,{})})},y=r(15),F=r(2),L=Object(F.configureStore)({reducer:Object(y.a)({},l.reducerPath,l.reducer),middleware:function(e){return e().concat(l.middleware)}});Object(o.setupListeners)(L.dispatch);var _=r(12);r(49);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_.Provider,{store:L,children:Object(j.jsx)(P,{})})}),document.getElementById("root")),window.store=L.getState()}},[[50,1,2]]]);
//# sourceMappingURL=main.8f22478c.chunk.js.map