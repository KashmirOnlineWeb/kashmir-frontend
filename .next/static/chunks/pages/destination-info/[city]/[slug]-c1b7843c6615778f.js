(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5960],{88986:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/destination-info/[city]/[slug]",function(){return i(31003)}])},58463:function(e,t,i){"use strict";var n=i(85893),r=i(88372);t.Z=e=>{let{topTitle:t,topTitle2:i,topSubTitle:a,viewAllDisable:l,smallTitle:o}=e;return(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start self-stretch underlineEffect",children:[(0,n.jsxs)("div",{className:"flex flex-row items-start justify-between self-stretch titleContainer",children:[(0,n.jsx)("b",{className:"color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold",children:t}),l?(0,n.jsx)("div",{className:"hidden sm:block",children:(0,n.jsx)(r.Z,{label:"View all",variantFilledTypePrimaryPosition:"unset",variantFilledTypePrimaryBorderRadius:"25px",variantFilledTypePrimaryBoxSizing:"border-box",variantFilledTypePrimaryCursor:"pointer",variantFilledTypePrimaryBorder:"none",labelDisplay:"inline-block",onClick:function(){throw Error("Function not implemented.")}})}):""]}),i?(0,n.jsx)("div",{children:(0,n.jsx)("b",{className:"leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]",children:i})}):"",(0,n.jsx)("h1",{className:"relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ",children:a})]})}},55820:function(e,t,i){"use strict";var n=i(85893),r=i(67294),a=i(21469);t.Z=e=>{let{touristSpotName:t,propBackgroundImage:i}=e,l=(0,r.useMemo)(()=>({backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ".concat(i)}),[i]);return(0,n.jsx)(a.E.div,{whileHover:{scale:1.1},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"flex-1 w-full rounded-2xl h-[257px] mt-7 flex flex-row items-end justify-start py-6 px-4 box-border bg-cover bg-no-repeat bg-[top] text-left text-9xl text-default-white font-lead-lead-2",style:l,children:(0,n.jsx)("span",{className:"[text-decoration:none] relative text-[28px] leading-[30px] font-bold",children:t})})}},31003:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(85893),r=i(9393),a=i(28994),l=i(9473);i(10367),i(17728);var o=i(11163),s=i(67294),c=i(9164),d=i(96132),u=i(68036),f=i(70763),p=i(41664),m=i.n(p),x=i(55820),h=e=>{let{color:t,topSubTitle:i,titleName:r}=e,a=(0,o.useRouter)(),[p,h]=(0,s.useState)(null),g=(0,l.v9)(e=>e.citythingstodo.data),[v,y]=(0,s.useState)(!0),b=a.asPath||"",w=b.split("/"),j=w[w.length-1],E=(0,l.I0)();return(0,s.useEffect)(()=>{let e=async()=>{let e=await (0,u.os)(j);E((0,f.mY)(null==e?void 0:e.thingstodo)),y(!1)};e()},[E,j]),(0,n.jsx)("div",{className:"".concat(t," relative box-border flex w-full flex-col items-start  justify-start gap-[24px] text-left font-others-capitalised text-9xl text-black px-4"),children:(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)(c.Z,{topTitle:r,topSubTitle:i}),(0,n.jsx)("div",{className:"container w-auto mx-auto pb-20 px-4",children:(0,n.jsx)("div",{className:"self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[24px]",children:v?(0,n.jsx)(d.Z,{prop:4}):g&&g.map((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)(m(),{href:"/thingstodo/".concat(null==e?void 0:e.slug),className:"no-underline",children:(0,n.jsx)(x.Z,{propBackgroundImage:"url(".concat(e.imageURL,")"),touristSpotName:e.title})})},t))})})]})})},g=i(58463),v=i(20048),y=()=>{(0,l.v9)(e=>e.discoverPage.data);let[e,t]=(0,s.useState)(),i=(0,o.useRouter)(),{city:c}=i.query,d=(0,l.I0)();return(0,s.useEffect)(()=>{let e=async()=>{var e;let i=await (0,u.os)(c);t(null==i?void 0:null===(e=i.thingstodo[0])||void 0===e?void 0:e.slug),d((0,f.mY)(null==i?void 0:i.thingstodo))};e()},[d,c]),(0,n.jsxs)("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)("div",{className:"container mx-auto my-[60px] px-4",children:[(0,n.jsx)(g.Z,{topTitle:"Things To Do",viewAllDisable:!1}),(0,n.jsx)(h,{titleName:""})]}),(0,n.jsx)(v.Z,{titleName:"Important information",slug:e}),(0,n.jsx)(r.Z,{})]})}},17728:function(){},10367:function(){},24561:function(e,t,i){"use strict";var n=i(67294),r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=function(e){var t=e.animate,i=void 0===t||t,a=e.animateBegin,l=e.backgroundColor,o=void 0===l?"#f5f6f7":l,s=e.backgroundOpacity,c=void 0===s?1:s,d=e.baseUrl,u=void 0===d?"":d,f=e.children,p=e.foregroundColor,m=e.foregroundOpacity,x=e.gradientRatio,h=void 0===x?2:x,g=e.gradientDirection,v=e.uniqueKey,y=e.interval,b=e.rtl,w=e.speed,j=e.style,E=e.title,N=void 0===E?"Loading...":E,k=e.beforeMask,O=void 0===k?null:k,P=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),T=v||Math.random().toString(36).substring(6),C=T+"-diff",Z=T+"-animated-diff",_=T+"-aria",S="0; "+(void 0===y?.25:y)+"; 1",B=(void 0===w?1.2:w)+"s";return(0,n.createElement)("svg",r({"aria-labelledby":_,role:"img",style:r(r({},void 0===j?{}:j),void 0!==b&&b?{transform:"scaleX(-1)"}:null)},P),N?(0,n.createElement)("title",{id:_},N):null,O&&(0,n.isValidElement)(O)?O:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+C+")",style:{fill:"url("+u+"#"+Z+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:C},f),(0,n.createElement)("linearGradient",{id:Z,gradientTransform:"top-bottom"===(void 0===g?"left-right":g)?"rotate(90)":void 0},(0,n.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:c},i&&(0,n.createElement)("animate",{attributeName:"offset",values:-h+"; "+-h+"; 1",keyTimes:S,dur:B,repeatCount:"indefinite",begin:a})),(0,n.createElement)("stop",{offset:"50%",stopColor:void 0===p?"#eee":p,stopOpacity:void 0===m?1:m},i&&(0,n.createElement)("animate",{attributeName:"offset",values:-h/2+"; "+-h/2+"; "+(1+h/2),keyTimes:S,dur:B,repeatCount:"indefinite",begin:a})),(0,n.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:c},i&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+h),keyTimes:S,dur:B,repeatCount:"indefinite",begin:a})))))},l=function(e){return e.children?(0,n.createElement)(a,r({},e)):(0,n.createElement)(o,r({},e))},o=function(e){return(0,n.createElement)(l,r({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=l},68036:function(e,t,i){"use strict";i.d(t,{Li:function(){return a},a1:function(){return r},os:function(){return l}});var n=i(97172);let r=async()=>await n.Z.get("/thingstodo").then(e=>e.data).catch(e=>e.response),a=async e=>await n.Z.get("/thingstodo/".concat(e)).then(e=>e.data).catch(e=>e.response),l=async e=>await n.Z.get("/thingstodo/city/".concat(e)).then(e=>e.data).catch(e=>e.response)}},function(e){e.O(0,[1876,6207,6163,9202,9774,2888,179],function(){return e(e.s=88986)}),_N_E=e.O()}]);