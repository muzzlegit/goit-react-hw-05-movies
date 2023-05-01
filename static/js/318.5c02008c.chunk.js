"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[318],{4318:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(9439),o=r(2791),c=r(1087),i=r(6856),a=r(7402),u=r(1607),s=a.Z.form({padding:".2rem 1rem",display:"flex",alignItems:"center",gap:"20px"}),f=a.Z.input({padding:".1rem .5rem",height:"20px",width:"200px",borderRadius:".3rem",color:u.Z.colors.text,fontWeight:"bold","&:focus":{outline:"1px solid ".concat(u.Z.colors.text)}}),l=a.Z.button({color:u.Z.colors.orange,borderRadius:".3rem",backgroundColor:u.Z.colors.text,borderColor:u.Z.colors.text,"&:hover":{cursor:"pointer",color:u.Z.colors.textDarkRed}}),d=r(184),p=function(e){var t=e.onSubmit,r=e.setMoviesChecker,c=(0,o.useState)(""),a=(0,n.Z)(c,2),u=a[0],p=a[1];return(0,o.useEffect)((function(){""===u&&r(!0)}),[u,r]),(0,d.jsxs)(s,{onSubmit:function(e){e.preventDefault(),""!==u.trim()&&t(u.trim())},children:[(0,d.jsx)(f,{type:"text",name:"name",required:!0,placeholder:"...search movie",value:u,onChange:function(e){p(e.target.value)}}),(0,d.jsx)(l,{type:"submit",title:"Search Movie",children:(0,d.jsx)(i.NAS,{size:"20px"})})]})},m=r(7689),x=a.Z.ul({padding:"1rem",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"0.5rem"}),h=a.Z.li({padding:".2rem 1rem",border:"1px solid ".concat(u.Z.colors.textGrey)}),g=function(e){var t=e.movies,r=(0,m.TH)();return(0,d.jsx)(x,{children:t.map((function(e){return(0,d.jsx)(h,{children:(0,d.jsx)(c.rU,{to:"".concat(e.id),state:{from:r},style:{display:"block",fontSize:"1rem",textDecoration:"none",color:u.Z.colors.text},children:e.title})},e.id)}))})},b=r(4349),v=function(){var e=(0,o.useState)([]),t=(0,n.Z)(e,2),r=t[0],i=t[1],a=(0,c.lr)(),u=(0,n.Z)(a,2),s=u[0],f=u[1],l=(0,o.useState)(!0),m=(0,n.Z)(l,2),x=m[0],h=m[1],v=s.get("query");(0,o.useEffect)((function(){v&&(0,b.Wf)(v.trim()).then((function(e){e.results.length?h(!0):h(!1),i(e.results)}))}),[v]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(p,{onSubmit:function(e){f({query:e}),(0,b.Wf)(e.trim()).then((function(e){return i(e.results)}))},setMoviesChecker:h}),x?(0,d.jsx)(g,{movies:r}):(0,d.jsx)("h2",{style:{fontSize:"20px",color:"#FFF",marginLeft:"1rem"},children:"Nothing found ... try again"})]})}},4349:function(e,t,r){r.d(t,{Df:function(){return f},M1:function(){return p},Pg:function(){return l},Wf:function(){return m},tx:function(){return d}});var n=r(5861),o=r(4687),c=r.n(o),i="d0a89e21518eb34bf114239006a7498b",a="https://api.themoviedb.org/3";function u(e){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.abrupt("return",r.ok?r.json():Promise.reject(new Error("Not found")));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(i))}function l(e){return u("".concat(a,"/movie/").concat(e,"?api_key=").concat(i))}function d(e){return u("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i))}function p(e){return u("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i))}function m(e){return u("".concat(a,"/search/movie?query=").concat(e,"&api_key=").concat(i))}},1607:function(e,t){t.Z={colors:{primary:"#3e4e55",primaryLight:"#4b5c63",primaryDark:"#36464d",text:"#497b86",textGrey:"#182c33",textRed:"#c12701",textDarkRed:"rgba(135, 30, 1, 1)",orange:"#ff6b01",acent:"#24c1e0",white:"#FFF",whiteRGBA:"rgba(255,255,255,.3)",black:"#000",warm:"#DBC7C9",pink:"#ffa5a9",pGreen:"#88A795",pGray:"#AAABA8",hr:"#BC7B77",red:"#DC2626",green:"#00ea00"},shadows:{box:"10px 10px 10px -1px rgba(255, 255, 255, .1)"}}}}]);
//# sourceMappingURL=318.5c02008c.chunk.js.map