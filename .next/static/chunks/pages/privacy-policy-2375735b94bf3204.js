(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9396],{94217:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return r(58859)}])},96132:function(e,t,r){"use strict";var i=r(85893);r(67294);var n=r(24561);let l=()=>(0,i.jsxs)(n.ZP,{uniqueKey:"my-random-value",style:{display:"flex",margin:"0 auto",justifyContent:"center",alignItems:"center"},speed:2,width:400,height:500,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,i.jsx)("rect",{x:"10",y:"50",rx:"4",ry:"4",width:"320",height:"200"}),(0,i.jsx)("rect",{x:"10",y:"270",rx:"3",ry:"3",width:"380",height:"10"}),(0,i.jsx)("rect",{x:"10",y:"290",rx:"3",ry:"3",width:"350",height:"10"}),(0,i.jsx)("rect",{x:"10",y:"310",rx:"3",ry:"3",width:"370",height:"10"})]});t.Z=e=>{let{prop:t}=e;return(0,i.jsx)("div",{className:"flex flex-row w-full ",children:[...Array(t)].map((e,t)=>(0,i.jsx)(l,{},t))})}},3812:function(e,t,r){"use strict";var i=r(85893);t.Z=e=>{let{content:t,name:r}=e;return(0,i.jsx)("div",{className:" mt-8 container mx-auto box-border flex w-full sm:flex-row items-start justify-start gap-10 sm:gap-[130px] md:gap-[30px] lg:gap-[30px] pb-[92px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0",children:(0,i.jsxs)("div",{className:"flex flex-col w-full items-start justify-start gap-5",children:[(0,i.jsx)("b",{className:"relative flex w-full items-center leading-[40px]",children:(0,i.jsx)("span",{className:"w-full",children:(0,i.jsx)("p",{className:"m-0 color-pink",children:r})})}),t?(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.replace(/<br\s*[/]?>/gi,"\n")},className:"relative editor-content items-center text-base leading-[26px]"}):""]})})}},58859:function(e,t,r){"use strict";r.r(t);var i=r(85893),n=r(47670),l=r(28994),a=r(9473),o=r(3812),s=r(67294),c=r(21396),d=r(27909),u=r(96132);let f=e=>{var t;let r=null==e?void 0:e.replace(/<br\s*[/]?>/gi,"\n"),i=document.createElement("div");return i.innerHTML=r,console.log(i.childNodes[0].nodeValue,"e.childNodes[0].nodeValue"),0===i.childNodes.length?"":null===(t=i.childNodes[0].nodeValue)||void 0===t?void 0:t.replace(/<br\s*[/]?>/gi,"\n")};t.default=()=>{var e,t;let r=(0,a.v9)(e=>e.homePage.data),[m,p]=(0,s.useState)(null),[h,x]=(0,s.useState)(!0),g=(0,a.I0)();return(0,s.useEffect)(()=>{let e=async()=>{if((null==r?void 0:r.length)==0){let e=await (0,c.N)();p(null==e?void 0:e.data),x(!1),g((0,d.ig)(null==e?void 0:e.data))}else p(r),x(!1)};e()},[g]),(0,i.jsxs)("div",{className:"w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)("div",{className:"container mx-auto my-[60px] px-4 ",children:h?(0,i.jsx)(u.Z,{prop:1}):(0,i.jsx)(i.Fragment,{children:null==m?void 0:null===(t=m.policy)||void 0===t?void 0:null===(e=t.filter(e=>0===e.name.localeCompare("Privacy Policy","en",{sensitivity:"accent"})))||void 0===e?void 0:e.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(o.Z,{name:"Privacy Policy",content:f(null==e?void 0:e.content)})},t))})}),(0,i.jsx)(n.Z,{})]})}},21396:function(e,t,r){"use strict";r.d(t,{N:function(){return n}});var i=r(97172);let n=async()=>await i.Z.get("/homepage?method=get&data=*").then(e=>e).catch(e=>e.res)},24561:function(e,t,r){"use strict";var i=r(67294),n=function(){return(n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e){var t=e.animate,r=void 0===t||t,l=e.animateBegin,a=e.backgroundColor,o=void 0===a?"#f5f6f7":a,s=e.backgroundOpacity,c=void 0===s?1:s,d=e.baseUrl,u=void 0===d?"":d,f=e.children,m=e.foregroundColor,p=e.foregroundOpacity,h=e.gradientRatio,x=void 0===h?2:h,g=e.gradientDirection,v=e.uniqueKey,y=e.interval,b=e.rtl,w=e.speed,j=e.style,E=e.title,N=void 0===E?"Loading...":E,O=e.beforeMask,k=void 0===O?null:O,C=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),P=v||Math.random().toString(36).substring(6),_=P+"-diff",Z=P+"-animated-diff",T=P+"-aria",S="0; "+(void 0===y?.25:y)+"; 1",M=(void 0===w?1.2:w)+"s";return(0,i.createElement)("svg",n({"aria-labelledby":T,role:"img",style:n(n({},void 0===j?{}:j),void 0!==b&&b?{transform:"scaleX(-1)"}:null)},C),N?(0,i.createElement)("title",{id:T},N):null,k&&(0,i.isValidElement)(k)?k:null,(0,i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+_+")",style:{fill:"url("+u+"#"+Z+")"}}),(0,i.createElement)("defs",null,(0,i.createElement)("clipPath",{id:_},f),(0,i.createElement)("linearGradient",{id:Z,gradientTransform:"top-bottom"===(void 0===g?"left-right":g)?"rotate(90)":void 0},(0,i.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:c},r&&(0,i.createElement)("animate",{attributeName:"offset",values:-x+"; "+-x+"; 1",keyTimes:S,dur:M,repeatCount:"indefinite",begin:l})),(0,i.createElement)("stop",{offset:"50%",stopColor:void 0===m?"#eee":m,stopOpacity:void 0===p?1:p},r&&(0,i.createElement)("animate",{attributeName:"offset",values:-x/2+"; "+-x/2+"; "+(1+x/2),keyTimes:S,dur:M,repeatCount:"indefinite",begin:l})),(0,i.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:c},r&&(0,i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+x),keyTimes:S,dur:M,repeatCount:"indefinite",begin:l})))))},a=function(e){return e.children?(0,i.createElement)(l,n({},e)):(0,i.createElement)(o,n({},e))},o=function(e){return(0,i.createElement)(a,n({viewBox:"0 0 476 124"},e),(0,i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=a}},function(e){e.O(0,[1876,6207,921,9774,2888,179],function(){return e(e.s=94217)}),_N_E=e.O()}]);