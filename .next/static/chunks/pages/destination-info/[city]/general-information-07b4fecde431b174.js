(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9750],{50874:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/destination-info/[city]/general-information",function(){return l(50027)}])},95739:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var i=l(85893),r=l(67294),n=l(21469),a=e=>{let{parseContentState:t,hasImage:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" mt-8 container mx-auto box-border flex w-full max-md:flex-col items-start justify-start max-md:gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] text-9xl text-black  sm:px-0",children:[l&&(0,i.jsx)(n.E.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]",alt:"",src:"http://kashmir-backend.test/"+(null==t?void 0:t.file)}),(0,i.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[(0,i.jsx)("b",{className:"relative flex w-full items-center leading-[40px]",children:(0,i.jsx)("span",{className:"w-full",children:(0,i.jsx)("p",{className:"m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:null==t?void 0:t.title})})}),t.content?(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null==t?void 0:t.content},className:" relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]"}):""]})]})})},s=e=>{let{parseContentState:t,hasImage:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" mt-8 container mx-auto max-md:flex-col-reverse box-border flex w-full sm:flex-row items-start justify-start gap-10 lg:gap-[80px] max-md:pb-[0px] lg:pb-[20px] sm:pt-[10px] text-9xl text-black flex-col-reverse sm:px-0",children:[(0,i.jsxs)("div",{className:"flex flex-col w-full items-start justify-start",children:[(0,i.jsx)("b",{className:"relative flex w-full items-center leading-[40px]",children:(0,i.jsx)("span",{className:"w-full",children:(0,i.jsx)("p",{className:"m-0 text-[#E74433] leading-[40px] sm:hoverUnderline text-[24px] sm:text-[28px]",children:null==t?void 0:t.title})})}),(null==t?void 0:t.content)?(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null==t?void 0:t.content},className:" relative floara-editor-table floara-editor-ml-0 items-center text-base leading-[26px]"}):""]}),l&&(0,i.jsx)(n.E.img,{whileHover:{scale:.9},whileTap:{scale:.9},transition:{duration:.3,ease:"easeInOut"},className:"relative sm:h-[350px] sm:w-[530px] w-full shrink-0 overflow-hidden sm:object-cover h-[245.66px]",alt:"",src:"http://kashmir-backend.test/"+(null==t?void 0:t.file)})]})})},o=e=>{let{title:t,subtitle:l,content:n,imageSrc:o}=e,[c,d]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(null==n?void 0:n.length)>0&&d(JSON.parse(n))},[n]),(0,i.jsx)(i.Fragment,{children:c&&c.map((e,t)=>(0,i.jsx)("div",{children:(null==e?void 0:e.imagePosition)=="right"?(0,i.jsx)(s,{parseContentState:e,hasImage:null==e?void 0:e.showImage}):(0,i.jsx)(a,{parseContentState:e,hasImage:null==e?void 0:e.showImage})},t))})}},58463:function(e,t,l){"use strict";var i=l(85893),r=l(88372);t.Z=e=>{let{topTitle:t,topTitle2:l,topSubTitle:n,viewAllDisable:a,smallTitle:s}=e;return(0,i.jsxs)("div",{className:"flex flex-col items-start justify-start self-stretch underlineEffect",children:[(0,i.jsxs)("div",{className:"flex flex-row items-start justify-between self-stretch titleContainer",children:[(0,i.jsx)("b",{className:"color-pink relative title sm:hoverUnderline text-[14px] leading-[40px] font-bold",children:t}),a?(0,i.jsx)("div",{className:"hidden sm:block",children:(0,i.jsx)(r.Z,{label:"View all",variantFilledTypePrimaryPosition:"unset",variantFilledTypePrimaryBorderRadius:"25px",variantFilledTypePrimaryBoxSizing:"border-box",variantFilledTypePrimaryCursor:"pointer",variantFilledTypePrimaryBorder:"none",labelDisplay:"inline-block",onClick:function(){throw Error("Function not implemented.")}})}):""]}),l?(0,i.jsx)("div",{children:(0,i.jsx)("b",{className:"leading-[40px] font-bold sm:text-[36px] color-pink relative title sm:hoverUnderline text-[24px]",children:l})}):"",(0,i.jsx)("h1",{className:"relative break-words sm:text-[30px] font-bold leading-[25.2px] color--wedge subtitle ",children:n})]})}},50027:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSP:function(){return p}});var i=l(85893),r=l(9393),n=l(28994),a=l(9473),s=l(11163),o=l(67294),c=l(87335),d=l(70763),m=l(58463),u=l(96132),x=l(20048),f=l(95739),p=!0;t.default=()=>{var e,t;let l=(0,a.v9)(e=>e.discoverPage.data),p=(0,s.useRouter)(),{city:v}=p.query,h=(0,a.I0)(),[g,b]=(0,o.useState)(!0),[y,j]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=async()=>{if((null==l?void 0:l.length)==0){let e=await (0,c.P)(v);j(null==e?void 0:e.data),b(!1),h((0,d.uQ)(null==e?void 0:e.data))}else j(l),b(!1)};e()},[h,v]),(0,i.jsxs)("div",{className:" w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white",children:[(0,i.jsx)(n.Z,{}),(0,i.jsxs)("div",{className:"container mx-auto my-[60px] px-4",children:[(0,i.jsx)(m.Z,{topTitle:"General Information",viewAllDisable:!1,topSubTitle:null==y?void 0:null===(e=y.generalinformation)||void 0===e?void 0:e.map(e=>null==e?void 0:e.title)}),g?(0,i.jsx)(u.Z,{prop:1}):(0,i.jsx)(i.Fragment,{children:null==y?void 0:null===(t=y.generalinformation)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(f.Z,{title:null==e?void 0:e.name,subtitle:"",content:null==e?void 0:e.repeater_mergeAll,imageSrc:"/assets/images/package/package.webp"})},t))})]}),(0,i.jsx)(x.Z,{titleName:"Important information",slug:v}),(0,i.jsx)(r.Z,{})]})}},17728:function(){},10367:function(){},24561:function(e,t,l){"use strict";var i=l(67294),r=function(){return(r=Object.assign||function(e){for(var t,l=1,i=arguments.length;l<i;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},n=function(e){var t=e.animate,l=void 0===t||t,n=e.animateBegin,a=e.backgroundColor,s=void 0===a?"#f5f6f7":a,o=e.backgroundOpacity,c=void 0===o?1:o,d=e.baseUrl,m=void 0===d?"":d,u=e.children,x=e.foregroundColor,f=e.foregroundOpacity,p=e.gradientRatio,v=void 0===p?2:p,h=e.gradientDirection,g=e.uniqueKey,b=e.interval,y=e.rtl,j=e.speed,w=e.style,E=e.title,N=void 0===E?"Loading...":E,k=e.beforeMask,O=void 0===k?null:k,P=function(e,t){var l={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(l[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(l[i[r]]=e[i[r]]);return l}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),_=g||Math.random().toString(36).substring(6),C=_+"-diff",T=_+"-animated-diff",S=_+"-aria",I="0; "+(void 0===b?.25:b)+"; 1",Z=(void 0===j?1.2:j)+"s";return(0,i.createElement)("svg",r({"aria-labelledby":S,role:"img",style:r(r({},void 0===w?{}:w),void 0!==y&&y?{transform:"scaleX(-1)"}:null)},P),N?(0,i.createElement)("title",{id:S},N):null,O&&(0,i.isValidElement)(O)?O:null,(0,i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+m+"#"+C+")",style:{fill:"url("+m+"#"+T+")"}}),(0,i.createElement)("defs",null,(0,i.createElement)("clipPath",{id:C},u),(0,i.createElement)("linearGradient",{id:T,gradientTransform:"top-bottom"===(void 0===h?"left-right":h)?"rotate(90)":void 0},(0,i.createElement)("stop",{offset:"0%",stopColor:s,stopOpacity:c},l&&(0,i.createElement)("animate",{attributeName:"offset",values:-v+"; "+-v+"; 1",keyTimes:I,dur:Z,repeatCount:"indefinite",begin:n})),(0,i.createElement)("stop",{offset:"50%",stopColor:void 0===x?"#eee":x,stopOpacity:void 0===f?1:f},l&&(0,i.createElement)("animate",{attributeName:"offset",values:-v/2+"; "+-v/2+"; "+(1+v/2),keyTimes:I,dur:Z,repeatCount:"indefinite",begin:n})),(0,i.createElement)("stop",{offset:"100%",stopColor:s,stopOpacity:c},l&&(0,i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+v),keyTimes:I,dur:Z,repeatCount:"indefinite",begin:n})))))},a=function(e){return e.children?(0,i.createElement)(n,r({},e)):(0,i.createElement)(s,r({},e))},s=function(e){return(0,i.createElement)(a,r({viewBox:"0 0 476 124"},e),(0,i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=a},87335:function(e,t,l){"use strict";l.d(t,{P:function(){return r}});var i=l(97172);let r=async e=>await i.Z.get(e).then(e=>e).catch(e=>e.res)}},function(e){e.O(0,[1876,6207,6163,9202,9774,2888,179],function(){return e(e.s=50874)}),_N_E=e.O()}]);